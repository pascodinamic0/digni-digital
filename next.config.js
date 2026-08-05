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

    /** Formerly space-separated slugs → hyphenated (GSC / old links). */
    const spaceSlugFixes = [
      [
        'employes%20ia%202026%20service%20client%20triple%20leads',
        'employes-ia-2026-service-client-triple-leads',
      ],
      [
        'automatisation%20processus%20rdc%20kinshasa%20productivite%202026',
        'automatisation-processus-rdc-kinshasa-productivite-2026',
      ],
      [
        'business%20development%20ia%20leads%2024%207',
        'business-development-ia-leads-24-7',
      ],
      ['creation%20site%20web%20ia%20guide%202026', 'creation-site-web-ia-guide-2026'],
      [
        'transformation%20digitale%20rdc%202026%20ia',
        'transformation-digitale-rdc-2026-ia',
      ],
      [
        'guide%202026%20tendances%20ia%20entreprises%20francophones',
        'guide-2026-tendances-ia-entreprises-francophones',
      ],
    ].map(([from, to]) => ({
      source: `/:locale/blog/${from}`,
      destination: `/:locale/blog/${to}`,
      permanent: true,
    }))

    /** Prefer 301 over next-intl's temporary locale redirects for known public routes. */
    const unprefixedMarketingPaths = [
      'about',
      'solutions',
      'products',
      'services',
      'case-studies',
      'blog',
      'digni',
      'contact',
      'affiliate',
      'ai-receptionist',
      'careers',
      'agentic-softwares',
      'future-ready-graduate',
      'privacy',
      'terms',
      'cookie-policy',
      'videos',
      'learn',
    ]
    const unprefixedMarketingRedirects = unprefixedMarketingPaths.flatMap((segment) => [
      { source: `/${segment}`, destination: `/us-en/${segment}`, permanent: true },
      { source: `/${segment}/:path*`, destination: `/us-en/${segment}/:path*`, permanent: true },
    ])

    return [
      ...legacyLocaleRedirectRules,
      ...localePrefixedPdfRedirects,
      { source: '/custom-saas', destination: '/us-en/agentic-softwares', permanent: true },
      { source: '/:locale/custom-saas', destination: '/:locale/agentic-softwares', permanent: true },
      ...blogRedirects,
      ...spaceSlugFixes,
      ...unprefixedMarketingRedirects,
    ]
  },
  async headers() {
    return [
      {
        source: '/hero-bg.mp4',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/admin/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/auth/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/:locale/learn',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/:locale/learn/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/:locale/checkout',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/:locale/checkout/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
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
