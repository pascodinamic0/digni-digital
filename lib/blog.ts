import { articlesEn, articlesFr, articlesAr, articlesDe, articlesEs } from '@/content/blog'
import type { BlogArticle } from '@/content/blog'
import type { Locale } from '@/i18n/routing'

const articlesByLanguage: Record<string, BlogArticle[]> = {
  en: articlesEn,
  fr: articlesFr,
  ar: articlesAr,
  de: articlesDe,
  es: articlesEs,
}

export function getArticlesForLocale(locale: Locale | string): BlogArticle[] {
  const lang = locale.split('-')[1]?.toLowerCase() || 'en'
  return articlesByLanguage[lang] ?? articlesEn
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
