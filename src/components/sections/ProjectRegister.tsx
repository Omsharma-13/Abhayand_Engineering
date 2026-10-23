import { PROJECTS, FEATURED_PROJECTS, HEAVY_COMPONENTS } from "@/lib/content";

/* ============================================================
   SECTION 4 — PROJECT REGISTER
   The proof section. Three sub-parts:
   A) 3 featured projects with photos (or flat placeholders)
   B) Simple flat bar graphic of heavy components
   C) Full 17-row project table with skeleton loader
   ============================================================ */

export default function ProjectRegister() {
  return (
    <section aria-labelledby="projects-heading">
      {/* Dark header band */}
      <div className="band band--dark" style={{ paddingBottom: "3rem" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">04 / Project register</span>
            <hr className="section-rule section-rule--orange" />
          </div>
          <h2 id="projects-heading" className="sr-only">
            Project register
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body-lg)",
              color: "var(--color-plate)",
              maxWidth: "60ch",
              marginTop: "1rem",
            }}
          >
            17 plant jobs delivered across cement, steel and power sectors.
          </p>
        </div>
      </div>

      {/* Light band: featured + bar chart + table */}
      <div className="band band--light" style={{ paddingTop: "3rem" }}>
        <div className="container">

          {/* --- A: Featured Projects --- */}
          <h3
            className="text-mono"
            style={{ marginBottom: "1.5rem", color: "var(--color-steel)" }}
          >
            Featured jobs
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1px",
              border: "1px solid var(--color-graphite)",
              marginBottom: "3rem",
            }}
          >
            {FEATURED_PROJECTS.map((proj) => (
              <article
                key={proj.id}
                style={{ background: "var(--color-plate)", border: "none" }}
                aria-label={proj.title}
              >
                {/* Photo placeholder — replace with <Image> when real photos supplied */}
                <div
                  className="skeleton"
                  style={{ width: "100%", aspectRatio: "4/3" }}
                  role="img"
                  aria-label={proj.photoCaption}
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: "rgba(27,29,31,0.85)",
                      padding: "0.5rem 0.75rem",
                    }}
                  >
                    <span
                      className="text-mono"
                      style={{ color: "var(--color-plate)", fontSize: "0.75rem" }}
                    >
                      {proj.photoCaption}
                    </span>
                  </div>
                </div>

                <div style={{ padding: "1.25rem" }}>
                  <p
                    className="text-mono"
                    style={{ color: "var(--color-orange)", marginBottom: "0.25rem" }}
                  >
                    {proj.size}
                  </p>
                  <h4
                    style={{
                      fontFamily: "var(--font-headline)",
                      fontWeight: 700,
                      fontSize: "1.375rem",
                      textTransform: "uppercase",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {proj.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-steel)",
                      marginBottom: "0.125rem",
                    }}
                  >
                    {proj.client}
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "var(--color-steel)" }}>
                    {proj.work}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* --- B: Heavy Components Bar Graphic --- */}
          <h3
            className="text-mono"
            style={{ marginBottom: "1.25rem", color: "var(--color-steel)" }}
          >
            Heavy components handled (MT)
          </h3>

          <div className="bar-chart" style={{ marginBottom: "3rem" }}>
            {HEAVY_COMPONENTS.map((item) => (
              <div key={item.label} className="bar-chart__item">
                <span className="bar-chart__label">{item.label}</span>
                <div
                  className="bar-chart__track"
                  role="img"
                  aria-label={`${item.label}: ${item.value} ${item.unit}`}
                >
                  <div
                    className="bar-chart__fill"
                    style={{ width: `${(item.value / item.max) * 100}%` }}
                  />
                </div>
                <span className="bar-chart__value">
                  {item.value} {item.unit}
                </span>
              </div>
            ))}
          </div>

          {/* --- C: Full Project Table --- */}
          <h3
            className="text-mono"
            style={{ marginBottom: "1.25rem", color: "var(--color-steel)" }}
          >
            All projects
          </h3>

          <div className="table-scroll">
            <table className="data-table" aria-label="Project register">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Client</th>
                  <th scope="col">Site</th>
                  <th scope="col">Work</th>
                  <th scope="col">Size</th>
                </tr>
              </thead>
              <tbody>
                {PROJECTS.map((project) => (
                  <tr key={String(project.id)}>
                    <td className="cell--mono">{project.id}</td>
                    <td className="cell--strong">{project.client}</td>
                    <td style={{ whiteSpace: "nowrap" }}>{project.site}</td>
                    <td>{project.work}</td>
                    <td className="cell--mono">{project.size ?? "\u2014"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
