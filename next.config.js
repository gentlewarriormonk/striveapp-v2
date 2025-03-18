/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  // Ensure proper handling of static assets
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
