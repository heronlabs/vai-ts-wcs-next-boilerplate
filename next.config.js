/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
