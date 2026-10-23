import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Strict image optimisation — WebP/AVIF auto served
  images: {
    formats: ["image/avif", "image/webp"],
    // Add remote domains here if images are hosted externally
    remotePatterns: [],
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },

  // No trailing slash — clean canonical URLs
  trailingSlash: false,
};

export default nextConfig;
