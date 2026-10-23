"use client";

import { useEffect } from "react";
import { trackLeadForm } from "@/lib/gtag";

/* ============================================================
   Fires the lead_form Google Ads conversion event once on mount.
   Kept as a separate client component so the thank-you page
   itself remains a Server Component (faster initial paint).
   ============================================================ */

export default function ConversionScript() {
  useEffect(() => {
    trackLeadForm();
  }, []);

  return null;
}
