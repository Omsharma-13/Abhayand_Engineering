import { MetadataRoute } from "next";

/* ============================================================
   SITEMAP — auto-generated, submitted to Google Search Console
   Update baseUrl once the real domain is confirmed.
   ============================================================ */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://abhyanandengineering.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-use`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    // /thank-you is intentionally excluded — noindex, no sitemap entry
  ];
}
