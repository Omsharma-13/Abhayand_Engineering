import { COMPANY } from "@/lib/content";

/* ============================================================
   SECTION 9 — LEADERSHIP
   Concrete (light) band.
   Asymmetric: photo left (~35%), text right (~65%).
   Real photo required — flat placeholder until supplied.
   ============================================================ */

export default function Leadership() {
  return (
    <section aria-labelledby="leadership-heading" className="band band--light">
      <div className="container">
        <div className="section-header">
          <span className="section-label">09 / Leadership</span>
          <hr className="section-rule" />
        </div>

        <div className="leadership-grid">
          {/* Photo placeholder — replace with <Image> when supplied */}
          <div>
            <div
              className="skeleton"
              style={{
                width: "100%",
                aspectRatio: "3/4",
                minHeight: "320px",
              }}
              role="img"
              aria-label="Photo of Shri Pramod Kumar Sharma: to be supplied"
            />
            <p
              className="text-mono"
              style={{
                color: "var(--color-steel)",
                marginTop: "0.5rem",
                fontSize: "0.75rem",
              }}
            >
              Photo: Shri Pramod Kumar Sharma
            </p>
          </div>

          {/* Bio */}
          <div>
            <h2
              id="leadership-heading"
              style={{
                fontFamily: "var(--font-headline)",
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                textTransform: "uppercase",
                marginBottom: "0.375rem",
                color: "var(--color-graphite)",
              }}
            >
              {COMPANY.promoter}
            </h2>

            <p
              className="text-mono"
              style={{ color: "var(--color-steel)", marginBottom: "1.5rem" }}
            >
              Principal Promoter, {COMPANY.name}
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.875rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body)",
                  color: "var(--color-graphite)",
                  maxWidth: "58ch",
                }}
              >
                {COMPANY.promoterExperience} years of hands-on field experience in
                power, cement and steel plant operations.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body)",
                  color: "var(--color-graphite)",
                  maxWidth: "58ch",
                }}
              >
                Direct oversight of safety, quality and project delivery on every
                site.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body)",
                  color: "var(--color-graphite)",
                  maxWidth: "58ch",
                }}
              >
                Expert in mobilising large technical shutdown teams across
                Jharkhand, Odisha and Karnataka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
