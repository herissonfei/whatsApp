/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "utmost-shrimp-161.convex.cloud" },
    //   { hostname: "oaidalleapiprodscus.blob.core.windows.net" },
    ],
  },
};

export default nextConfig;
