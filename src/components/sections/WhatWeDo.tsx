import { SERVICES } from "@/lib/content";

/* ============================================================
   SECTION 3 — WHAT WE DO
   Concrete (light) band.
   4 full-width numbered rows — NOT cards, NOT 3-column grid.
   Per brief: large number left, title, body, text link right.
   ============================================================ */

export default function WhatWeDo() {
  return (
    <section aria-labelledby="services-heading" className="band band--light">
      <div className="container">
        <div className="section-header">
          <span className="section-label">03 / What we do</span>
          <hr className="section-rule" />
        </div>

        <h2 id="services-heading" className="sr-only">
          Services
        </h2>

        <div role="list">
          {SERVICES.map((service) => (
            <div key={service.num} className="numbered-row" role="listitem">
              {/* Big number */}
              <span className="numbered-row__num" aria-hidden="true">
                {service.num}
              </span>

              {/* Title + body */}
              <div>
                <h3 className="numbered-row__title">{service.title}</h3>
                <p className="numbered-row__body">{service.body}</p>
              </div>

              {/* CTA text link */}
              <div className="numbered-row__action">
                <a href="#quote-form" className="text-mono" style={{ fontSize: "0.8125rem" }}>
                  Request a quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
