const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

/** Same side-effect entry as `next/dist/build/polyfills/polyfill-module` but ~14 KiB smaller (Lighthouse “Legacy JavaScript”). */
const minimalNextPolyfill = require.resolve('./lib/next-polyfill-minimal.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next 16 defaults to Turbopack (breaks next/font/google in dev); `package.json` uses `--webpack` for dev and build.
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
    /** Keep in sync with `legacyLocaleRedirects` in i18n/routing.ts */
    const legacyLocaleRedirects = {
      'ca-en': 'us-en',
      'ca-fr': 'fr-fr',
    }
    const legacyLocaleRedirectRules = Object.entries(legacyLocaleRedirects).flatMap(([from, to]) => [
      { source: `/${from}`, destination: `/${to}`, permanent: true },
      { source: `/${from}/:path*`, destination: `/${to}/:path*`, permanent: true },
    ])

    const localePrefixedPdfRedirects = [
      'The_AI_Employee_Growth_Engine.pdf',
      'Digni Digital - Future-Ready Graduate Program.pdf',
    ].flatMap((file) => [
      {
        source: `/:locale/${encodeURI(file)}`,
        destination: `/${encodeURI(file)}`,
        permanent: true,
      },
    ])

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
      ...legacyLocaleRedirectRules,
      ...localePrefixedPdfRedirects,
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
