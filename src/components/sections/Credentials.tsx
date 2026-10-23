import { COMPANY } from "@/lib/content";

/* ============================================================
   SECTION 8 — CREDENTIALS
   Graphite (dark) band.
   GSTIN, Udyam, statutory compliance, registered office.
   PAN, EPF, ESIC and annual turnover NOT shown publicly (per brief).
   ============================================================ */

export default function Credentials() {
  return (
    <section aria-labelledby="credentials-heading" className="band band--dark">
      <div className="container">
        <div className="section-header">
          <span className="section-label">08 / Credentials</span>
          <hr className="section-rule section-rule--orange" />
        </div>

        <h2 id="credentials-heading" className="sr-only">
          Credentials
        </h2>

        {/* Inset panel on concrete */}
        <div
          style={{
            background: "var(--color-concrete)",
            border: "1px solid #333537",
            padding: "2rem",
            maxWidth: "640px",
          }}
        >
          <dl
            style={{
              display: "grid",
              gridTemplateColumns: "max-content 1fr",
              gap: "0.75rem 2rem",
            }}
          >
            <dt className="text-mono" style={{ color: "var(--color-steel)" }}>
              GSTIN
            </dt>
            <dd
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-mono-md)",
                color: "var(--color-graphite)",
                fontWeight: 600,
              }}
            >
              {COMPANY.gstin}
            </dd>

            <dt className="text-mono" style={{ color: "var(--color-steel)" }}>
              Udyam
            </dt>
            <dd
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-mono-md)",
                color: "var(--color-graphite)",
                fontWeight: 600,
              }}
            >
              {COMPANY.udyam}
            </dd>

            <dt className="text-mono" style={{ color: "var(--color-steel)" }}>
              Compliance
            </dt>
            <dd
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body)",
                color: "var(--color-graphite)",
              }}
            >
              GST, Udyam, EPF, ESIC and labour laws.
            </dd>

            <dt className="text-mono" style={{ color: "var(--color-steel)" }}>
              Registered office
            </dt>
            <dd
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-body)",
                color: "var(--color-graphite)",
              }}
            >
              {COMPANY.address.full}
            </dd>
          </dl>
        </div>

        <p
          className="text-mono"
          style={{
            color: "var(--color-steel)",
            marginTop: "1.5rem",
            fontSize: "0.75rem",
            maxWidth: "55ch",
          }}
        >
          PAN, EPF and ESIC codes are provided to buyers during vendor onboarding on request.
        </p>
      </div>
    </section>
  );
}
