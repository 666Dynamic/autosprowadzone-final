import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optymalizacja produkcyjna
  reactStrictMode: true,

  // Optymalizacja obrazów
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Kompresja i performance
  compress: true,
  poweredByHeader: false,
  
  // HTTP to HTTPS redirect + security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
    ];
  },

  // Experimental features dla wydajności
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@radix-ui/react-accordion', '@radix-ui/react-checkbox', '@radix-ui/react-dropdown-menu'],
  },
};

export default nextConfig;
