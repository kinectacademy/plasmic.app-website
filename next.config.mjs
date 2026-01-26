/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // 1. Disable aggressive minification (Fixes "e is undefined" errors)
  swcMinify: false, 

  // 2. Ensure images don't try to use a server
  images: {
    unoptimized: true,
  },
  
  // 3. standard Next.js setting
  trailingSlash: true,
};

module.exports = nextConfig;