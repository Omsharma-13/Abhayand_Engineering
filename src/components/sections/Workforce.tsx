import { WORKFORCE } from "@/lib/content";

/* ============================================================
   SECTION 5 — WORKFORCE
   Concrete (light) band.
   Full table of 12 trades so buyers see exactly who can mobilise.
   NOTE: Total row shows 220 — pending client confirmation of 232.
   ============================================================ */

const total = WORKFORCE.reduce((sum, row) => sum + row.count, 0);

export default function Workforce() {
  return (
    <section aria-labelledby="workforce-heading" className="band band--light">
      <div className="container">
        <div className="section-header">
          <span className="section-label">05 / Workforce</span>
          <hr className="section-rule" />
        </div>

        <p
          id="workforce-heading"
          style={{
            fontFamily: "var(--font-headline)",
            fontWeight: 700,
            fontSize: "var(--text-h2)",
            textTransform: "uppercase",
            marginBottom: "2rem",
            maxWidth: "22ch",
          }}
        >
          232 workers across 13 trades, deployable to your plant site.
        </p>

        <div className="table-scroll" style={{ maxWidth: "560px" }}>
          <table className="data-table" aria-label="Workforce breakdown by trade">
            <thead>
              <tr>
                <th scope="col">Trade</th>
                <th scope="col" style={{ textAlign: "right" }}>
                  Count
                </th>
              </tr>
            </thead>
            <tbody>
              {WORKFORCE.map((row) => (
                <tr key={row.trade}>
                  <td>{row.trade}</td>
                  <td
                    className="cell--mono"
                    style={{ textAlign: "right" }}
                  >
                    {row.count}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td
                  className="cell--strong"
                  style={{
                    borderTop: "2px solid var(--color-graphite)",
                    paddingTop: "0.75rem",
                  }}
                >
                  Total
                </td>
                <td
                  className="cell--mono cell--strong"
                  style={{
                    textAlign: "right",
                    borderTop: "2px solid var(--color-graphite)",
                    paddingTop: "0.75rem",
                    color: "var(--color-orange)",
                  }}
                >
                  {total}*
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Footnote on discrepancy */}
        <p
          className="text-mono"
          style={{
            color: "var(--color-steel)",
            marginTop: "0.75rem",
            fontSize: "0.75rem",
          }}
        >
          * Total to be confirmed with company before publication.
        </p>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-body)",
            color: "var(--color-steel)",
            marginTop: "1.5rem",
            maxWidth: "60ch",
          }}
        >
          4 safety supervisors on every site. Full statutory compliance: GST,
          Udyam, EPF, ESIC and labour laws.
        </p>
      </div>
    </section>
  );
}
