const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
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
}

module.exports = withNextIntl(nextConfig)
