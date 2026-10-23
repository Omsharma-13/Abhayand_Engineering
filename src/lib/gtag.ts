/* ============================================================
   GOOGLE ADS CONVERSION TRACKING HELPERS
   Fires separate events for the 3 conversion types per brief:
   1. lead_form    — fires on /thank-you page load
   2. phone_tap    — fires on any tel: link click
   3. whatsapp_tap — fires on any wa.me link click
   ============================================================ */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

type GtagEventName = "phone_tap" | "whatsapp_tap" | "lead_form";

/**
 * Fire a Google Ads conversion event.
 * Safe to call even if gtag is not loaded (e.g. in tests or when GTAG_ID is unset).
 */
export function fireConversionEvent(eventName: GtagEventName, params?: Record<string, string | number>): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", eventName, {
    event_category: "conversion",
    ...params,
  });
}

/**
 * Track a phone number tap.
 * Attach to onClick of all <a href="tel:..."> elements.
 */
export function trackPhoneTap(number?: string): void {
  fireConversionEvent("phone_tap", { phone_number: number ?? "unknown" });
}

/**
 * Track a WhatsApp button tap.
 */
export function trackWhatsappTap(): void {
  fireConversionEvent("whatsapp_tap");
}

/**
 * Track form submission (called on /thank-you page mount).
 */
export function trackLeadForm(): void {
  fireConversionEvent("lead_form");
}

/**
 * Read UTM params and gclid from the current URL.
 * Returns an object with all tracking fields (empty string if absent).
 */
export function readTrackingParams(): Record<string, string> {
  if (typeof window === "undefined") {
    return {};
  }
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") ?? "",
    utm_medium: params.get("utm_medium") ?? "",
    utm_campaign: params.get("utm_campaign") ?? "",
    utm_term: params.get("utm_term") ?? "",
    utm_content: params.get("utm_content") ?? "",
    gclid: params.get("gclid") ?? "",
  };
}

/**
 * Read the ?service= URL param for ad landing variant headline switching.
 */
export function readServiceParam(): string {
  if (typeof window === "undefined") return "";
  return new URLSearchParams(window.location.search).get("service") ?? "";
}
