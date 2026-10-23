import { z } from "zod";

/* ============================================================
   LEAD FORM VALIDATION SCHEMA — Zod v4 compatible
   Used on both client (React Hook Form) and server (API route)
   ============================================================ */

export const SERVICE_OPTIONS = [
  "Structural fabrication",
  "Equipment erection and piping",
  "Plant maintenance or shutdown",
  "Manpower supply",
  "Other",
] as const;

export type ServiceOption = (typeof SERVICE_OPTIONS)[number];

export const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  company: z.string().min(2, "Company name required").max(150),
  phone: z
    .string()
    .regex(
      /^[6-9]\d{9}$/,
      "Enter a valid 10-digit Indian mobile number (starting with 6, 7, 8 or 9)"
    ),
  service: z.enum(SERVICE_OPTIONS, {
    error: "Please select a service",
  }),
  location: z.string().min(2, "Plant location is required").max(150),
  email: z
    .string()
    .email("Enter a valid email address")
    .optional()
    .or(z.literal("")),
  requirement: z.string().max(2000).optional(),

  // UTM tracking fields — all optional, captured from URL
  utm_source: z.string().max(200).optional(),
  utm_medium: z.string().max(200).optional(),
  utm_campaign: z.string().max(200).optional(),
  utm_term: z.string().max(200).optional(),
  utm_content: z.string().max(200).optional(),
  gclid: z.string().max(200).optional(),

  // Honeypot — must be empty string or absent
  website: z.string().max(0).optional(),

  // Consent — must be true
  consent: z
    .boolean({ message: "You must accept the privacy policy" })
    .refine((v) => v === true, "You must accept the privacy policy"),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

/* File upload validation (client-side only) */
export const MAX_FILE_SIZE_MB = 10;
export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

export function validateFile(file: File): string | null {
  if (file.size > MAX_FILE_SIZE_BYTES) {
    return `File must be under ${MAX_FILE_SIZE_MB} MB.`;
  }
  const ext = file.name.split(".").pop()?.toLowerCase();
  const allowed = ["pdf", "dwg", "jpg", "jpeg", "png", "webp"];
  if (!ext || !allowed.includes(ext)) {
    return "Allowed formats: PDF, DWG, JPG, PNG, WEBP.";
  }
  return null;
}
