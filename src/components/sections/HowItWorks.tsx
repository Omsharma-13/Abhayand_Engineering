import { HOW_IT_WORKS } from "@/lib/content";

/* ============================================================
   SECTION 7 — HOW AN ENQUIRY WORKS
   Concrete (light) band.
   4 numbered steps — same full-width numbered row pattern.
   No decorative arrows, no animated steps per brief.
   ============================================================ */

export default function HowItWorks() {
  return (
    <section aria-labelledby="process-heading" className="band band--light">
      <div className="container">
        <div className="section-header">
          <span className="section-label">07 / How it works</span>
          <hr className="section-rule" />
        </div>

        <h2 id="process-heading" className="sr-only">
          How an enquiry works
        </h2>

        <div role="list">
          {HOW_IT_WORKS.map((step) => (
            <div key={step.num} className="numbered-row" role="listitem">
              <span className="numbered-row__num" aria-hidden="true">
                {step.num}
              </span>
              <div>
                <h3 className="numbered-row__title">{step.title}</h3>
                <p className="numbered-row__body">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
