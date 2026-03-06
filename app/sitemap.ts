import { MetadataRoute } from 'next'
import { getArticlesForLocale } from '@/lib/blog'
import { locales } from '@/i18n/routing'

const baseUrl = 'https://digni-digital-llc.com'

const staticPaths: { path: string; changeFrequency: 'weekly' | 'monthly' | 'yearly'; priority: number; lastModified: string }[] = [
  { path: '', changeFrequency: 'weekly', priority: 1.0, lastModified: '2026-03-05' },
  { path: '/about', changeFrequency: 'monthly', priority: 0.9, lastModified: '2026-03-05' },
  { path: '/solutions', changeFrequency: 'monthly', priority: 0.8, lastModified: '2026-02-15' },
  { path: '/products', changeFrequency: 'monthly', priority: 0.8, lastModified: '2026-02-15' },
  { path: '/services', changeFrequency: 'monthly', priority: 0.8, lastModified: '2026-02-15' },
  { path: '/case-studies', changeFrequency: 'monthly', priority: 0.8, lastModified: '2026-03-01' },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.7, lastModified: '2026-03-05' },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.7, lastModified: '2026-01-15' },
  { path: '/affiliate', changeFrequency: 'monthly', priority: 0.5, lastModified: '2026-01-15' },
  { path: '/ai-receptionist', changeFrequency: 'monthly', priority: 0.9, lastModified: '2026-03-01' },
  { path: '/careers', changeFrequency: 'monthly', priority: 0.6, lastModified: '2026-02-01' },
  { path: '/agentic-softwares', changeFrequency: 'monthly', priority: 0.8, lastModified: '2026-03-01' },
  { path: '/future-ready-graduate', changeFrequency: 'monthly', priority: 0.9, lastModified: '2026-03-05' },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3, lastModified: '2025-06-01' },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.3, lastModified: '2025-06-01' },
  { path: '/cookie-policy', changeFrequency: 'yearly', priority: 0.3, lastModified: '2025-06-01' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const page of staticPaths) {
      entries.push({
        url: `${baseUrl}/${locale}${page.path}`,
        lastModified: new Date(page.lastModified),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      })
    }

    const articles = getArticlesForLocale(locale)
    for (const article of articles) {
      const parsed = new Date(article.publishDate)
      const lastMod = isNaN(parsed.getTime()) ? new Date('2025-01-15') : parsed
      entries.push({
        url: `${baseUrl}/${locale}/blog/${article.slug}`,
        lastModified: lastMod,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })
    }
  }

  return entries
}
