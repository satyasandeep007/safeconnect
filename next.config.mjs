/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "icoholder.com",
      "assets.aceternity.com",
      "safe-transaction-assets.safe.global",
      "coin-images.coingecko.com",
    ],
  },
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding", {
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
