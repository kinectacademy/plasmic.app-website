/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This enables the static export for Cloudflare
  images: {
    unoptimized: true, // Required for static export to work with images
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;