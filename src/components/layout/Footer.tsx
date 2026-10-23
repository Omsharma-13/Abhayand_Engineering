import Link from "next/link";
import { COMPANY } from "@/lib/content";

/* ============================================================
   FOOTER — Section 12
   Graphite band. Company name, registrations, legal links.
   ============================================================ */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          {/* Left: identity + address + registrations */}
          <div>
            <span className="footer__brand">{COMPANY.name}</span>
            <address className="footer__address" style={{ fontStyle: "normal" }}>
              {COMPANY.address.line1}
              <br />
              {COMPANY.address.line2}
              <br />
              <a
                href={`tel:${COMPANY.phone1Raw}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {COMPANY.phone1}
              </a>{" "}
              &nbsp;/&nbsp;{" "}
              <a
                href={`tel:${COMPANY.phone2Raw}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {COMPANY.phone2}
              </a>
            </address>
            <p className="footer__reg">
              GSTIN: {COMPANY.gstin}
              <br />
              Udyam: {COMPANY.udyam}
            </p>

            {/* Legal links */}
            <nav aria-label="Legal" className="footer__links">
              <Link href="/privacy-policy" className="footer__link">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="footer__link">
                Terms of Use
              </Link>
            </nav>

            <p className="footer__copy">
              &copy; {year} {COMPANY.name}. All rights reserved.
            </p>
          </div>

          {/* Right: operating sites */}
          <div className="footer__right">
            <p className="footer__reg" style={{ marginBottom: "0.5rem" }}>
              Operating sites:
            </p>
            <p
              className="footer__reg"
              style={{ color: "var(--color-plate)", lineHeight: 2 }}
            >
              {COMPANY.operatingSites.join("  \u00b7  ")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
