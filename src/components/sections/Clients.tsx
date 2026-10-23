import { CLIENTS } from "@/lib/content";

/* ============================================================
   SECTION 6 — CLIENTS
   Graphite (dark) band.
   Text list of plants served — no logos until written permission.
   Each client is a full-width row, 1px Plate border.
   ============================================================ */

export default function Clients() {
  return (
    <section aria-labelledby="clients-heading" className="band band--dark">
      <div className="container">
        <div className="section-header">
          <span className="section-label">06 / Clients</span>
          <hr className="section-rule section-rule--orange" />
        </div>

        <h2 id="clients-heading" className="sr-only">
          Clients
        </h2>

        <div role="list">
          {CLIENTS.map((client, idx) => (
            <div
              key={idx}
              role="listitem"
              style={{
                paddingBlock: "1.75rem",
                borderBottom: "1px solid #333537",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-headline)",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  marginBottom: "0.25rem",
                }}
              >
                {client.name}
              </h3>
              <p
                className="text-mono"
                style={{ color: "var(--color-steel)", marginBottom: "0.375rem" }}
              >
                {client.unit}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body)",
                  color: "var(--color-plate)",
                  maxWidth: "60ch",
                }}
              >
                {client.note}
              </p>
            </div>
          ))}
        </div>

        <p
          className="text-mono"
          style={{
            color: "var(--color-steel)",
            marginTop: "1.5rem",
            fontSize: "0.75rem",
          }}
        >
          Client logos shown only after written permission.
        </p>
      </div>
    </section>
  );
}
