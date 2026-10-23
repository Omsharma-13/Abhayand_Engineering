import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

/* ============================================================
   FONTS — self-hosted via next/font (no external round-trip)
   Per brief: Barlow Condensed 700, IBM Plex Sans 400/600, IBM Plex Mono 400
   Banned: Inter, Geist, Space Grotesk
   ============================================================ */

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-barlow-condensed",
  display: "swap",
  preload: true,
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
  preload: true,
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  preload: false, // mono used for labels — not render-blocking
});

/* ============================================================
   SITE METADATA — SEO, Open Graph
   ============================================================ */

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://abhyanandengineering.com"
  ),
  title: {
    default:
      "Structural Fabrication and Erection Contractors: Cement, Steel and Power Plants | Abhyanand Engineering",
    template: "%s | Abhyanand Engineering",
  },
  description:
    "Abhyanand Engineering provides structural fabrication, mechanical equipment erection, plant maintenance and skilled manpower for cement, steel and power plants in Jharkhand, Odisha and Karnataka. Call +91 8873100219.",
  keywords: [
    "structural fabrication",
    "mechanical erection",
    "plant maintenance",
    "manpower supply",
    "cement plant contractor",
    "steel plant contractor",
    "power plant contractor",
    "Bokaro",
    "Jharkhand",
    "Rewa",
    "Abhyanand Engineering",
  ],
  authors: [{ name: "Abhyanand Engineering" }],
  creator: "Abhyanand Engineering",
  publisher: "Abhyanand Engineering",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://abhyanandengineering.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://abhyanandengineering.com",
    siteName: "Abhyanand Engineering",
    title:
      "Structural Fabrication and Erection Contractors | Abhyanand Engineering",
    description:
      "232 trained workers. 17 plant jobs. Cement, steel and power plant specialists based in Bokaro and Rewa.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abhyanand Engineering: plant site work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhyanand Engineering: Fabrication and Erection Contractors",
    description:
      "232 trained workers. 17 plant jobs. Cement, steel and power plant specialists.",
  },
};

/* ============================================================
   JSON-LD STRUCTURED DATA
   Organization + LocalBusiness per brief
   ============================================================ */

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://abhyanandengineering.com/#organization",
      name: "Abhyanand Engineering",
      description:
        "Structural fabrication, mechanical equipment erection, plant maintenance and skilled manpower for cement, steel and power plants.",
      url: "https://abhyanandengineering.com",
      telephone: ["+918873100219", "+918340722748"],
      email: "pramod.abhyanand@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Qrt. No.-3/954, Near Vikram Bridge, Pushpraj Nagar",
        addressLocality: "Rewa",
        addressRegion: "Madhya Pradesh",
        postalCode: "486001",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "City", name: "Bokaro" },
        { "@type": "City", name: "Rajgangpur" },
        { "@type": "City", name: "Shahabad" },
      ],
      founder: {
        "@type": "Person",
        name: "Shri Pramod Kumar Sharma",
      },
      foundingLocation: {
        "@type": "Place",
        name: "Rewa, Madhya Pradesh, India",
      },
      knowsAbout: [
        "Structural fabrication",
        "Mechanical equipment erection",
        "Plant maintenance",
        "Manpower supply",
        "Cement plant construction",
        "Steel plant maintenance",
        "Power plant overhauls",
      ],
    },
  ],
};

/* ============================================================
   GOOGLE ADS TRACKING — gtag.js
   Replace G-XXXXXXXXXX with real Ads tag ID
   ============================================================ */

const GTAG_ID = process.env.NEXT_PUBLIC_GTAG_ID ?? "";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Google Ads / GA tag — only rendered when ID is set */}
        {GTAG_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GTAG_ID}', { send_page_view: true });
                `,
              }}
            />
          </>
        )}
      </head>
      <body>
        {/* Skip to main content — accessibility */}
        <a href="#main-content" className="sr-only">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
