import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // ← static-export on build
  trailingSlash: true,    // optional, makes URLs end in “/”
};

export default nextConfig;
