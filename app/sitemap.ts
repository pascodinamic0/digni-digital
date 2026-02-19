import { MetadataRoute } from 'next'
import { allArticlesEn } from '@/lib/blog'
import { locales } from '@/i18n/routing'

const baseUrl = 'https://digni-digital-llc.com'

const staticPaths = [
  '',
  '/about',
  '/solutions',
  '/products',
  '/services',
  '/case-studies',
  '/blog',
  '/contact',
  '/affiliate',
  '/ai-receptionist',
  '/careers',
  '/custom-saas',
  '/future-ready-graduate',
  '/privacy',
  '/terms',
  '/cookie-policy',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1 : path === '/blog' ? 0.7 : 0.8,
      })
    }
    for (const article of allArticlesEn) {
      entries.push({
        url: `${baseUrl}/${locale}/blog/${article.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      })
    }
  }

  return entries
}
