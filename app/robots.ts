import type { MetadataRoute } from 'next'
import { NOINDEX } from '@/content/v2/seo'
import { SITE_URL } from '@/content/v2/locales'

/** Staging/preview builds (NEXT_PUBLIC_NOINDEX=1) block all crawling. */
export default function robots(): MetadataRoute.Robots {
  if (NOINDEX) {
    return { rules: [{ userAgent: '*', disallow: '/' }] }
  }
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin', '/auth', '/*/learn', '/*/checkout', '/docs/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
