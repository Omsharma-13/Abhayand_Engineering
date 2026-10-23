import type { Metadata } from "next";
import Link from "next/link";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import { COMPANY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Abhyanand Engineering: how we collect, use and protect your personal data.",
};

/* ============================================================
   PRIVACY POLICY PAGE: /privacy-policy
   Written for India's Digital Personal Data Protection Act, 2023.
   IMPORTANT: Have a lawyer review before publishing.
   Linked in footer and beside the form consent checkbox.
   ============================================================ */

export default function PrivacyPolicyPage() {
  const lastUpdated = "15 October 2026";

  return (
    <>
      <TopBar />
      <main id="main-content" className="page-offset">
        <article
          className="band band--light"
          aria-labelledby="privacy-heading"
        >
          <div className="container" style={{ maxWidth: "760px" }}>

            {/* Header */}
            <div className="section-header">
              <span className="section-label">Legal</span>
              <hr className="section-rule" />
            </div>

            <h1
              id="privacy-heading"
              style={{
                fontFamily: "var(--font-headline)",
                fontWeight: 700,
                fontSize: "var(--text-h1)",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              Privacy Policy
            </h1>

            <p
              className="text-mono"
              style={{ color: "var(--color-steel)", marginBottom: "2.5rem" }}
            >
              Last updated: {lastUpdated}
            </p>

            {/* DRAFT WARNING */}
            <div
              style={{
                border: "2px solid #b45309",
                padding: "1rem 1.25rem",
                marginBottom: "2.5rem",
                background: "#fffbeb",
              }}
              role="note"
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8125rem",
                  color: "#92400e",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Draft: Requires review by a qualified lawyer before publication.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

              <section>
                <h2 style={h2Style}>1. Who we are</h2>
                <p style={bodyStyle}>
                  Abhyanand Engineering is a structural fabrication, mechanical erection,
                  plant maintenance and manpower supply business registered in India.
                  Registered office: {COMPANY.address.full}.
                  Contact: {COMPANY.email}.
                </p>
                <p style={bodyStyle}>
                  This policy applies to personal data collected through our website
                  at abhyanandengineering.com.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>2. What we collect and why</h2>
                <div style={{ overflowX: "auto" }}>
                  <table className="data-table" aria-label="Data collection purposes">
                    <thead>
                      <tr>
                        <th>Data collected</th>
                        <th>Why we collect it</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Name, company name</td>
                        <td>To address and process your quote request</td>
                      </tr>
                      <tr>
                        <td>Phone number</td>
                        <td>To contact you about your requirement</td>
                      </tr>
                      <tr>
                        <td>Email address (optional)</td>
                        <td>To send you a written response or quote</td>
                      </tr>
                      <tr>
                        <td>Plant location, service type, requirement details</td>
                        <td>To understand and respond to your enquiry</td>
                      </tr>
                      <tr>
                        <td>Uploaded files (drawings, BOQ)</td>
                        <td>To understand the scope of work for your quote</td>
                      </tr>
                      <tr>
                        <td>Ad tracking data (UTM parameters, Google Click ID)</td>
                        <td>To measure which advertisements brought you to this site</td>
                      </tr>
                      <tr>
                        <td>Browser and device data (via analytics)</td>
                        <td>To improve site performance and usability</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 style={h2Style}>3. Legal basis for processing</h2>
                <p style={bodyStyle}>
                  We process your personal data on the basis of your consent, which you give
                  by ticking the consent box on our quote request form and submitting the form.
                  You may withdraw your consent at any time by contacting us.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>4. How long we keep your data</h2>
                <p style={bodyStyle}>
                  We retain your enquiry data for up to 2 years from the date of submission,
                  or until you ask us to delete it, whichever comes first.
                  Uploaded files are deleted within 90 days if no project is awarded.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>5. Who sees your data</h2>
                <p style={bodyStyle}>
                  Your data is seen by Abhyanand Engineering and its principal promoter
                  Shri Pramod Kumar Sharma. We use the following third-party services to
                  process or store data on our behalf:
                </p>
                <ul style={{ ...bodyStyle, paddingLeft: "1.5rem", listStyle: "disc" }}>
                  <li>Email delivery service (to send your enquiry to our team)</li>
                  <li>Google Sheets (to record your enquiry)</li>
                  <li>Google Ads (to measure advertising performance)</li>
                  <li>Cloudflare (for spam protection and site delivery)</li>
                </ul>
                <p style={bodyStyle}>
                  We do not sell your data to any third party.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>6. Cookies and tracking</h2>
                <p style={bodyStyle}>
                  This site uses Google Ads cookies to measure which advertisements
                  produce enquiries. These cookies are placed only if you have not
                  blocked them in your browser. If you do not wish to be tracked,
                  you may use browser settings or a browser extension to block
                  advertising cookies.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>7. Your rights</h2>
                <p style={bodyStyle}>
                  Under India's Digital Personal Data Protection Act, 2023, you have
                  the right to:
                </p>
                <ul style={{ ...bodyStyle, paddingLeft: "1.5rem", listStyle: "disc" }}>
                  <li>Know what personal data we hold about you.</li>
                  <li>Correct inaccurate personal data.</li>
                  <li>Request deletion of your personal data.</li>
                  <li>Withdraw consent at any time.</li>
                  <li>Nominate another person to exercise your rights on your behalf.</li>
                </ul>
                <p style={bodyStyle}>
                  To exercise any of these rights, email us at{" "}
                  <a href={`mailto:${COMPANY.email}`} style={{ color: "var(--color-graphite)" }}>
                    {COMPANY.email}
                  </a>{" "}
                  with the subject line "Data Request" and we will respond within 72 hours.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>8. Data security</h2>
                <p style={bodyStyle}>
                  We take reasonable steps to protect your personal data from
                  unauthorised access, disclosure or loss. Access to enquiry records
                  is restricted to authorised team members only.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>9. Changes to this policy</h2>
                <p style={bodyStyle}>
                  We may update this policy from time to time. The date at the top
                  of the page shows when it was last revised. Continued use of the
                  site after an update means you accept the revised policy.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>10. Contact</h2>
                <p style={bodyStyle}>
                  For any privacy-related question, write to us at{" "}
                  <a href={`mailto:${COMPANY.email}`} style={{ color: "var(--color-graphite)" }}>
                    {COMPANY.email}
                  </a>{" "}
                  or call {COMPANY.phone1}.
                </p>
              </section>

            </div>

            <hr className="divider" style={{ marginTop: "3rem" }} />
            <Link
              href="/"
              className="text-mono"
              style={{ color: "var(--color-steel)", fontSize: "0.8125rem" }}
            >
              Back to home
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-headline)",
  fontWeight: 700,
  fontSize: "1.375rem",
  textTransform: "uppercase",
  marginBottom: "0.75rem",
  color: "var(--color-graphite)",
};

const bodyStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "var(--text-body)",
  color: "var(--color-graphite)",
  lineHeight: 1.7,
  marginBottom: "0.75rem",
  maxWidth: "65ch",
};
