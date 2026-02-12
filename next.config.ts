/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  i18n: {
    locales: ["fa"],
    defaultLocale: "fa",
    localeDetection: false,
  },
};

module.exports = nextConfig;
