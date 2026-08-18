import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**", // รองรับรูปภาพภายนอกจากทุกเว็บไซต์
      },
    ],
  },
};

export default nextConfig;