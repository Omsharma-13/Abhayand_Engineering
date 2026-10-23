import { NUMBERS } from "@/lib/content";

/* ============================================================
   SECTION 2 — NUMBERS STRIP
   Full-width graphite band.
   5 big monospace figures with one-line labels.
   No icons, no gradients, no rounded corners.
   ============================================================ */

export default function NumbersStrip() {
  return (
    <section aria-label="Company scale figures">
      <div className="band band--dark" style={{ padding: 0 }}>
        <div
          className="section-header container"
          style={{ paddingTop: "3rem", paddingBottom: "1.5rem" }}
        >
          <span className="section-label">02 / Scale</span>
          <hr className="section-rule section-rule--orange" />
        </div>

        <div className="numbers-strip">
          {NUMBERS.map((item) => (
            <div key={item.figure} className="numbers-strip__item">
              <span className="numbers-strip__figure" aria-label={item.figure}>
                {item.figure}
              </span>
              <span className="numbers-strip__label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
