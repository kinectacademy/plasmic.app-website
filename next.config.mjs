/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Force static export
  output: 'export',

  // 2. Disable aggressive minification to prevent "e is undefined"
  swcMinify: false,

  // 3. Disable server-side image optimization
  images: {
    unoptimized: true,
  },

  // 4. Ensure paths work correctly on Cloudflare
  trailingSlash: true,
  
  // 5. React Strict Mode can sometimes double-render Plasmic components
  reactStrictMode: false,
};

export default nextConfig;