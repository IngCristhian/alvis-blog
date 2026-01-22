import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingIncludes: {
    "/blog": ["./content/**/*"],
    "/blog/[slug]": ["./content/**/*"],
    "/feed.xml": ["./content/**/*"],
  },
};

export default nextConfig;
