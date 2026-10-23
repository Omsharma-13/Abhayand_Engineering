import { FAQ } from "@/lib/content";

/* ============================================================
   SECTION 10 — FAQ
   Graphite (dark) band.
   5-6 questions as full-width rows. No accordion animation per brief.
   Answers confirmed with client before publishing.
   ============================================================ */

export default function FAQSection() {
  return (
    <section aria-labelledby="faq-heading" className="band band--dark">
      <div className="container">
        <div className="section-header">
          <span className="section-label">10 / FAQ</span>
          <hr className="section-rule section-rule--orange" />
        </div>

        <h2 id="faq-heading" className="sr-only">
          Frequently asked questions
        </h2>

        <dl>
          {FAQ.map((item, idx) => (
            <div
              key={idx}
              style={{
                paddingBlock: "1.75rem",
                borderBottom: "1px solid #333537",
              }}
            >
              <dt
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "var(--text-body-lg)",
                  color: "#ffffff",
                  marginBottom: "0.625rem",
                  maxWidth: "65ch",
                }}
              >
                {item.q}
              </dt>
              <dd
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body)",
                  color: "var(--color-plate)",
                  maxWidth: "65ch",
                  margin: 0,
                  lineHeight: 1.65,
                }}
              >
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
