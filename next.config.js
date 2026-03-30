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
    /** 301s for removed blog posts → closest live article (SEO / backlinks). */
    const removedBlogPosts = [
      [
        'how-to-create-business-website-free-ai-lovable-dev',
        'creation-site-web-ia-guide-2026',
      ],
      [
        'claude-code-ai-agents-africa-future-of-work-future-ready',
        'claude-grok-agents-ia-afrique-francophone',
      ],
      [
        'digital-border-coding-drc-act-resistance',
        'transformation-digitale-rdc-2026-ia',
      ],
      [
        'ai-automation-scaling-business-growth',
        'scaling-business-operations-ai-powered-automation',
      ],
      [
        'vibecoding-african-youth-make-money-online-build-products',
        'future-ready-graduate-program-transforming-education-career-success',
      ],
      [
        'one-software-life-changing-stories-youth-millionaires-2024-2026',
        'future-ready-graduate-program-transforming-education-career-success',
      ],
    ]
    const blogRedirects = removedBlogPosts.map(([from, to]) => ({
      source: `/:locale/blog/${from}`,
      destination: `/:locale/blog/${to}`,
      permanent: true,
    }))
    return [
      { source: '/custom-saas', destination: '/us-en/agentic-softwares', permanent: true },
      { source: '/:locale/custom-saas', destination: '/:locale/agentic-softwares', permanent: true },
      ...blogRedirects,
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
