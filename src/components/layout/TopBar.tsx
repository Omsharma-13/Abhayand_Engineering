"use client";

import Link from "next/link";
import { COMPANY } from "@/lib/content";
import { trackPhoneTap } from "@/lib/gtag";

/* ============================================================
   TOP BAR — Section 0
   Sticky, Graphite background.
   Contents: wordmark | phone | CTA button
   Nothing else per brief.
   ============================================================ */

export default function TopBar() {
  return (
    <header className="topbar" role="banner">
      <div className="container">
        <div className="topbar__inner">
          {/* Wordmark */}
          <Link href="/" className="topbar__brand" aria-label="Abhyanand Engineering home">
            Abhyanand Engineering
          </Link>

          {/* Right side: phone + CTA */}
          <div className="topbar__right">
            <a
              href={`tel:${COMPANY.phone1Raw}`}
              className="topbar__phone"
              onClick={() => trackPhoneTap(COMPANY.phone1Raw)}
              aria-label={`Call ${COMPANY.phone1}`}
            >
              {COMPANY.phone1}
            </a>

            <a href="#quote-form" className="btn btn--primary">
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
