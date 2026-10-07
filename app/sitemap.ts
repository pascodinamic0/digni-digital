import type { MetadataRoute } from 'next'
import { getArticlesForLocaleWithDb } from '@/lib/blog'
import { locales, localeMeta, SITE_URL } from '@/content/v2/locales'
import { projects } from '@/content/v2/work'
import { services, servicePath } from '@/content/v2/services'
import { getAllSiteVideoSlugs, getSiteVideoWatchPath } from '@/lib/site-videos'

export const revalidate = 3600

const V2 = new Date('2026-10-07')

type Freq = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>

const staticPaths: { path: string; changeFrequency: Freq; priority: number; lastModified: Date }[] = [
  { path: '', changeFrequency: 'weekly', priority: 1.0, lastModified: V2 },
  { path: '/work', changeFrequency: 'monthly', priority: 0.9, lastModified: V2 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.9, lastModified: V2 },
  ...services.map((s) => ({ path: servicePath(s.slug), changeFrequency: 'monthly' as Freq, priority: 0.9, lastModified: V2 })),
  ...services.map((s) => ({ path: `${servicePath(s.slug)}/assessment`, changeFrequency: 'monthly' as Freq, priority: 0.5, lastModified: V2 })),
  { path: '/products', changeFrequency: 'monthly', priority: 0.8, lastModified: V2 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8, lastModified: V2 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8, lastModified: V2 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.7, lastModified: V2 },
  { path: '/digni', changeFrequency: 'monthly', priority: 0.6, lastModified: V2 },
  { path: '/careers', changeFrequency: 'monthly', priority: 0.5, lastModified: new Date('2026-02-01') },
  { path: '/affiliate', changeFrequency: 'monthly', priority: 0.4, lastModified: new Date('2026-01-15') },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.2, lastModified: new Date('2025-06-01') },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.2, lastModified: new Date('2025-06-01') },
  { path: '/cookie-policy', changeFrequency: 'yearly', priority: 0.2, lastModified: new Date('2025-06-01') },
  ...projects.map((p) => ({ path: `/work/${p.slug}`, changeFrequency: 'monthly' as Freq, priority: 0.8, lastModified: V2 })),
]

function languages(path: string): Record<string, string> {
  const out: Record<string, string> = {}
  for (const l of locales) out[localeMeta[l].hreflang] = `${SITE_URL}/${l}${path}`
  out['x-default'] = `${SITE_URL}/us-en${path}`
  return out
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const page of staticPaths) {
      entries.push({
        url: `${SITE_URL}/${locale}${page.path}`,
        lastModified: page.lastModified,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: { languages: languages(page.path) },
      })
    }

    const articles = await getArticlesForLocaleWithDb(locale)
    for (const article of articles) {
      const parsed = new Date(article.publishDate)
      entries.push({
        url: `${SITE_URL}/${locale}/blog/${article.slug}`,
        lastModified: Number.isNaN(parsed.getTime()) ? new Date('2025-01-15') : parsed,
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    }
    for (const slug of getAllSiteVideoSlugs()) {
      entries.push({
        url: `${SITE_URL}/${locale}${getSiteVideoWatchPath(slug)}`,
        lastModified: new Date('2026-06-29'),
        changeFrequency: 'monthly',
        priority: 0.4,
      })
    }
  }

  return entries
}
