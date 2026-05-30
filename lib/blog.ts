import { articlesEn, articlesFr, articlesAr, articlesDe, articlesEs } from '@/content/blog'
import type { BlogArticle } from '@/content/blog'
import type { Locale } from '@/i18n/routing'
import { createClient } from '@/lib/supabase/server'
import { fetchDbOnlyBlogArticles } from '@/lib/blog/db-listing'

const DB_LOCALE_BY_LANG: Record<string, string> = {
  en: 'us-en',
  fr: 'fr-fr',
  es: 'es-es',
  ar: 'sa-ar',
  de: 'de-de',
}

const articlesByLanguage: Record<string, BlogArticle[]> = {
  en: articlesEn,
  fr: articlesFr,
  ar: articlesAr,
  de: articlesDe,
  es: articlesEs,
}

function sortArticlesNewestFirst(articles: BlogArticle[]): BlogArticle[] {
  return [...articles].sort((a, b) => {
    const da = Date.parse(a.publishDate)
    const db = Date.parse(b.publishDate)
    if (!Number.isNaN(da) && !Number.isNaN(db) && da !== db) return db - da
    return b.id - a.id
  })
}

export function getArticlesForLocale(locale: Locale | string): BlogArticle[] {
  const lang = locale.split('-')[1]?.toLowerCase() || 'en'
  const list = articlesByLanguage[lang] ?? articlesEn
  return sortArticlesNewestFirst(list)
}

/** File articles merged with agent-published DB posts (server-only). */
export async function getArticlesForLocaleWithDb(
  locale: Locale | string
): Promise<BlogArticle[]> {
  const fileArticles = getArticlesForLocale(locale)
  const lang = locale.split('-')[1]?.toLowerCase() || 'en'
  const dbLocale = DB_LOCALE_BY_LANG[lang] ?? 'us-en'
  const slugs = new Set(fileArticles.map((a) => a.slug))

  try {
    const supabase = await createClient()
    const extras = await fetchDbOnlyBlogArticles(supabase, dbLocale, slugs)
    if (!extras.length) return fileArticles
    return sortArticlesNewestFirst([...extras, ...fileArticles])
  } catch {
    return fileArticles
  }
}

export function getArticleBySlugForLocale(
  locale: Locale | string,
  slug: string
): { en: BlogArticle; fr: BlogArticle; ar: BlogArticle; de: BlogArticle; es: BlogArticle } | null {
  const en = articlesEn.find((a) => a.slug === slug)
  if (!en) return null
  const fr = articlesFr.find((a) => a.slug === slug) ?? en
  const ar = articlesAr.find((a) => a.slug === slug) ?? en
  const de = articlesDe.find((a) => a.slug === slug) ?? en
  const es = articlesEs.find((a) => a.slug === slug) ?? en
  return { en, fr, ar, de, es }
}

export { articlesEn as allArticlesEn }
