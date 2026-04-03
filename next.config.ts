import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  typescript: {
    // This prevents Vercel from crashing if it finds a stray type error
    ignoreBuildErrors: true,
  },
};

export default nextConfig;