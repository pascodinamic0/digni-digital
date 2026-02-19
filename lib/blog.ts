import { articlesEn, articlesFr, articlesAr } from '@/content/blog'
import type { BlogArticle } from '@/content/blog'
import type { Locale } from '@/i18n/routing'

const articlesByLanguage: Record<string, BlogArticle[]> = {
  en: articlesEn,
  fr: articlesFr,
  ar: articlesAr,
  de: articlesEn,
  es: articlesEn,
}

/**
 * Returns blog articles for the given locale.
 * Uses the language part of the locale (us-en -> en, fr-fr -> fr).
 * When you add country-specific tagging to your CMS, filter by both country and language here.
 */
export function getArticlesForLocale(locale: Locale | string): BlogArticle[] {
  const lang = locale.split('-')[1]?.toLowerCase() || 'en'
  return articlesByLanguage[lang] ?? articlesEn
}

/**
 * Returns articles keyed by language for a slug (for blog post page that may show fallback).
 */
export function getArticleBySlugForLocale(
  locale: Locale | string,
  slug: string
): { en: BlogArticle; fr: BlogArticle; ar: BlogArticle } | null {
  const en = articlesEn.find((a) => a.slug === slug)
  if (!en) return null
  const fr = articlesFr.find((a) => a.slug === slug) ?? en
  const ar = articlesAr.find((a) => a.slug === slug) ?? en
  return { en, fr, ar }
}

export { articlesEn as allArticlesEn }
