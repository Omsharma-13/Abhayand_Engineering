import type { Metadata } from "next";
import Link from "next/link";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import { COMPANY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Quote Request Received",
  description: "Your quote request has been received. Abhyanand Engineering will contact you shortly.",
  robots: { index: false, follow: false },
};

/* ============================================================
   THANK-YOU PAGE — /thank-you
   Unique URL used for Google Ads conversion tracking.
   Fires lead_form conversion event on page load.
   No form. Shows confirmation + direct contact options.
   ============================================================ */

export default function ThankYouPage() {
  return (
    <>
      <TopBar />
      <main id="main-content" className="page-offset">
        <section
          className="band band--light"
          style={{ minHeight: "calc(100vh - 64px)", display: "flex", alignItems: "center" }}
          aria-labelledby="thankyou-heading"
        >
          <div className="container">
            {/* Section label */}
            <div className="section-header">
              <span className="section-label">Confirmation</span>
              <hr className="section-rule section-rule--orange" />
            </div>

            <h1
              id="thankyou-heading"
              style={{
                fontFamily: "var(--font-headline)",
                fontWeight: 700,
                fontSize: "var(--text-h1)",
                textTransform: "uppercase",
                color: "var(--color-graphite)",
                maxWidth: "22ch",
                marginBottom: "1.5rem",
              }}
            >
              Your request has been received.
            </h1>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body-lg)",
                color: "var(--color-steel)",
                maxWidth: "55ch",
                marginBottom: "2.5rem",
                lineHeight: 1.65,
              }}
            >
              We will review your requirement and contact you shortly.
              If you need to speak to us right away, call or WhatsApp us directly.
            </p>

            {/* Direct contact */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
              <a
                href={`tel:${COMPANY.phone1Raw}`}
                className="btn btn--secondary"
                style={{ alignSelf: "flex-start" }}
              >
                Call {COMPANY.phone1}
              </a>
              <a
                href={`tel:${COMPANY.phone2Raw}`}
                className="btn btn--secondary"
                style={{ alignSelf: "flex-start" }}
              >
                Call {COMPANY.phone2}
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsappNumber}?text=${COMPANY.whatsappMessage}`}
                className="btn btn--secondary"
                target="_blank"
                rel="noopener noreferrer"
                style={{ alignSelf: "flex-start" }}
              >
                WhatsApp Us
              </a>
            </div>

            <Link
              href="/"
              className="text-mono"
              style={{ color: "var(--color-steel)", fontSize: "0.8125rem" }}
            >
              Back to home
            </Link>
          </div>
        </section>

        {/* Conversion tracking script — fires on page load */}
        <ConversionScript />
      </main>
      <Footer />
    </>
  );
}

/* Client component to fire gtag conversion event */
import ConversionScript from "./ConversionScript";
