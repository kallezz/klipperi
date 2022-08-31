/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["static-cdn.jtvnw.net", "clips-media-assets2.twitch.tv"],
  },
};

module.exports = nextConfig;
