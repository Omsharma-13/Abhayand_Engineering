import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

/* ============================================================
   API ROUTE — POST /api/submit-lead
   Flow:
   1. Validate honeypot (silent drop if filled)
   2. Parse and validate form fields with Zod
   3. [Parallel] Email to owner + write Google Sheet row
   4. Return 200 → front-end redirects to /thank-you
   ============================================================ */

/* -- Zod schema (server-side, no file field here) ----------- */
const schema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().min(1).max(150),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  service: z.enum([
    "Structural fabrication",
    "Equipment erection and piping",
    "Plant maintenance or shutdown",
    "Manpower supply",
    "Other",
  ] as const),
  location: z.string().min(2).max(150),
  email: z.string().email().optional().or(z.literal("")),
  requirement: z.string().max(2000).optional(),
  utm_source: z.string().max(200).optional(),
  utm_medium: z.string().max(200).optional(),
  utm_campaign: z.string().max(200).optional(),
  utm_term: z.string().max(200).optional(),
  utm_content: z.string().max(200).optional(),
  gclid: z.string().max(200).optional(),
  consent: z
    .string()
    .transform((v) => v === "true")
    .refine((v) => v === true),
  website: z.string().max(0).optional(), // honeypot
});

/* ----------------------------------------------------------- */

export async function POST(request: NextRequest) {
  try {
    /* ---- Parse FormData (supports file upload) ------------ */
    const formData = await request.formData();

    // Honeypot check — silent 200 so bots don't retry
    const honeypot = formData.get("website");
    if (honeypot && String(honeypot).length > 0) {
      return NextResponse.json({ ok: true });
    }

    /* ---- Extract and validate fields ---------------------- */
    const raw: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") {
        raw[key] = value;
      }
    }

    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message ?? "Invalid input";
      return NextResponse.json(
        { ok: false, message: firstError },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const file = formData.get("file") as File | null;
    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    /* ---- Build email body --------------------------------- */
    const emailBody = `
New Quote Request: ${data.company}: ${data.service}
Received: ${timestamp} IST

--- CONTACT ---
Name:     ${data.name}
Company:  ${data.company}
Phone:    ${data.phone}
Email:    ${data.email || "(not provided)"}

--- ENQUIRY ---
Service:  ${data.service}
Location: ${data.location}
Details:  ${data.requirement || "(not provided)"}
File:     ${file ? file.name + " (" + (file.size / 1024).toFixed(0) + " KB)" : "(none uploaded)"}

--- TRACKING ---
utm_source:   ${data.utm_source || "-"}
utm_medium:   ${data.utm_medium || "-"}
utm_campaign: ${data.utm_campaign || "-"}
utm_term:     ${data.utm_term || "-"}
utm_content:  ${data.utm_content || "-"}
gclid:        ${data.gclid || "-"}
    `.trim();

    /* ---- Run email + Google Sheet in parallel ------------- */
    const results = await Promise.allSettled([
      sendEmail(data, emailBody),
      writeToSheet(data, timestamp),
    ]);

    // Log any failures (don't expose to client)
    results.forEach((r, i) => {
      if (r.status === "rejected") {
        console.error(`Lead pipeline step ${i} failed:`, r.reason);
      }
    });

    // Return 200 as long as at least one succeeded, or both failed
    // (we don't want to lose the lead even if sheet write fails)
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("submit-lead unhandled error:", err);
    return NextResponse.json(
      { ok: false, message: "An error occurred. Please call us directly." },
      { status: 500 }
    );
  }
}

/* ============================================================
   EMAIL: Nodemailer via SMTP
   Set SMTP_* env vars in .env.local (or use Resend SMTP relay).
   Falls back to console.log in dev when env vars are absent.
   ============================================================ */

async function sendEmail(
  data: z.infer<typeof schema>,
  body: string
): Promise<void> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, OWNER_EMAIL } =
    process.env;

  // Dev: log instead of sending
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.log("[DEV] Email would be sent:\n", body);
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 465),
    secure: Number(SMTP_PORT ?? 465) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  await transporter.sendMail({
    from: `"Abhyanand Engineering Website" <${SMTP_USER}>`,
    to: OWNER_EMAIL ?? "pramod.abhyanand@gmail.com",
    replyTo: data.email || undefined,
    subject: `New Quote Request: ${data.company}: ${data.service}`,
    text: body,
  });
}

/* ============================================================
   GOOGLE SHEETS: append a row via googleapis
   Requires a service account JSON in GOOGLE_SA_JSON env var
   and the sheet ID in GOOGLE_SHEET_ID.
   Falls back to console.log in dev.
   ============================================================ */

async function writeToSheet(
  data: z.infer<typeof schema>,
  timestamp: string
): Promise<void> {
  const { GOOGLE_SA_JSON, GOOGLE_SHEET_ID } = process.env;

  if (!GOOGLE_SA_JSON || !GOOGLE_SHEET_ID) {
    console.log("[DEV] Sheet row would be written:", {
      timestamp,
      ...data,
    });
    return;
  }

  // Lazy-load googleapis to keep cold start fast
  const { google } = await import("googleapis");
  const credentials = JSON.parse(GOOGLE_SA_JSON);

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const row = [
    timestamp,
    data.name,
    data.company,
    data.phone,
    data.service,
    data.location,
    data.email ?? "",
    data.requirement ?? "",
    // file_url placeholder — add when file storage is configured
    "",
    data.utm_source ?? "",
    data.utm_medium ?? "",
    data.utm_campaign ?? "",
    data.utm_term ?? "",
    data.utm_content ?? "",
    data.gclid ?? "",
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: GOOGLE_SHEET_ID,
    range: "Leads!A:O",
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [row] },
  });
}
