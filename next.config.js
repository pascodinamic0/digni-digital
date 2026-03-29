const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

/** Same side-effect entry as `next/dist/build/polyfills/polyfill-module` but ~14 KiB smaller (Lighthouse “Legacy JavaScript”). */
const minimalNextPolyfill = require.resolve('./lib/next-polyfill-minimal.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next 16’s default `next build` uses Turbopack, which does not apply this replacement; `package.json` uses `next build --webpack`.
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(
          /[\\/]dist[\\/]build[\\/]polyfills[\\/]polyfill-module\.js$/,
          minimalNextPolyfill
        )
      )
    }
    return config
  },
  experimental: {
    // Tree-shake barrel imports so unused framer-motion / next-intl exports stay out of the client bundle
    optimizePackageImports: ['framer-motion', 'next-intl'],
    // Inline global CSS in HTML in production so the main CSS chunk is not render-blocking (LCP/FCP)
    inlineCss: true,
  },
  reactStrictMode: true,
  // Reduces dev overlay instrumentation that can enumerate params when clicking
  devIndicators: false,
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/custom-saas', destination: '/us-en/agentic-softwares', permanent: true },
      { source: '/:locale/custom-saas', destination: '/:locale/agentic-softwares', permanent: true },
    ]
  },
  async rewrites() {
    return [
      // Browsers and crawlers request /favicon.ico; Next serves app/icon.png at /icon.png
      { source: '/favicon.ico', destination: '/icon.png' },
    ]
  },
}

module.exports = withNextIntl(nextConfig)
