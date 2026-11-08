import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  // The previous site was served at /landing.html; keep that URL working.
  async rewrites() {
    return [{ source: "/landing.html", destination: "/" }];
  },
};

export default nextConfig;
