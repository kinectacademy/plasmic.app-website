/** @type {import('next').NextConfig} */
const nextConfig = {
  // YOUR STATIC EXPORT SETTINGS (KEEP THESE)
  output: 'export',
  swcMinify: false,  // Static sites prefer no minification
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
  reactStrictMode: false,

  // BUILD IGNORES (KEEP THESE - Plasmic compatibility)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // NEW: FOUC + Performance (Static-safe)
  optimizeFonts: true,           // Font optimization (static-safe)
  transpilePackages: ['lenis', 'framer-motion'], // Smooth scroll + transitions
  
  // Static export headers (perf)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
