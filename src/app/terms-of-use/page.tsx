import type { Metadata } from "next";
import Link from "next/link";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import { COMPANY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for the Abhyanand Engineering website.",
};

/* ============================================================
   TERMS OF USE PAGE — /terms-of-use
   Per brief:
   - Plain terms for using the site
   - Quotes are not binding until a written offer is issued
   - Content is the company's property
   - Governing law: India / courts of Rewa M.P.
   IMPORTANT: Have a lawyer review before publishing.
   ============================================================ */

export default function TermsOfUsePage() {
  const lastUpdated = "15 October 2026";

  return (
    <>
      <TopBar />
      <main id="main-content" className="page-offset">
        <article
          className="band band--light"
          aria-labelledby="terms-heading"
        >
          <div className="container" style={{ maxWidth: "760px" }}>

            <div className="section-header">
              <span className="section-label">Legal</span>
              <hr className="section-rule" />
            </div>

            <h1
              id="terms-heading"
              style={{
                fontFamily: "var(--font-headline)",
                fontWeight: 700,
                fontSize: "var(--text-h1)",
                textTransform: "uppercase",
                marginBottom: "0.5rem",
              }}
            >
              Terms of Use
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
                <h2 style={h2Style}>1. Acceptance</h2>
                <p style={bodyStyle}>
                  By accessing or using this website (abhyanandengineering.com), you agree to
                  these Terms of Use. If you do not agree, please do not use the site.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>2. Purpose of this site</h2>
                <p style={bodyStyle}>
                  This website is provided by Abhyanand Engineering for the purpose of
                  sharing information about our services and allowing potential clients
                  to submit enquiries. It is not a shop, catalogue or contractual offer.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>3. Quotes are not binding until issued in writing</h2>
                <p style={bodyStyle}>
                  Submitting a quote request form on this site does not create a contract
                  between you and Abhyanand Engineering. No obligation to supply services
                  arises until Abhyanand Engineering issues a signed written offer and that
                  offer is accepted in writing by the client.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>4. Accuracy of information</h2>
                <p style={bodyStyle}>
                  We make reasonable efforts to keep the information on this site accurate
                  and current. However, we do not guarantee that all information is
                  complete, accurate or up to date. Project details, workforce numbers and
                  registrations are subject to change.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>5. Intellectual property</h2>
                <p style={bodyStyle}>
                  All text, photographs, data, graphics and other content on this site are
                  the property of Abhyanand Engineering unless otherwise stated. You may
                  not copy, reproduce or redistribute any content without our written
                  permission.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>6. Third-party links</h2>
                <p style={bodyStyle}>
                  This site may contain links to external websites (for example, WhatsApp).
                  We are not responsible for the content or privacy practices of those sites.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>7. Limitation of liability</h2>
                <p style={bodyStyle}>
                  To the extent permitted by law, Abhyanand Engineering is not liable for
                  any loss or damage arising from your use of this website or reliance on
                  its content.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>8. Governing law</h2>
                <p style={bodyStyle}>
                  These terms are governed by the laws of India. Any dispute arising from
                  use of this site shall be subject to the exclusive jurisdiction of the
                  courts of Rewa, Madhya Pradesh, India.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>9. Changes to these terms</h2>
                <p style={bodyStyle}>
                  We may update these terms from time to time. The date at the top of
                  the page shows when they were last revised. Continued use of the site
                  after an update means you accept the revised terms.
                </p>
              </section>

              <section>
                <h2 style={h2Style}>10. Contact</h2>
                <p style={bodyStyle}>
                  For any question about these terms, contact us at{" "}
                  <a
                    href={`mailto:${COMPANY.email}`}
                    style={{ color: "var(--color-graphite)" }}
                  >
                    {COMPANY.email}
                  </a>{" "}
                  or {COMPANY.phone1}.
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
