import type { BlogArticle } from '@/content/blog'
import type { SupabaseClient } from '@supabase/supabase-js'

export type BlogPostOverrideRow = {
  id: string
  slug: string
  locale: string
  title: string
  excerpt: string | null
  body_md: string
  status: string
  cover_image_url?: string | null
  tags?: string[] | null
  category?: string | null
  read_time?: string | null
}

export type ArticleBundle = {
  en: BlogArticle
  fr: BlogArticle
  ar: BlogArticle
  de: BlogArticle
  es: BlogArticle
}

/** DB `blog_posts.locale` → bundle key used by `getArticleBySlugForLocale` */
const DB_LOCALE_TO_BUNDLE_KEY: Record<string, keyof ArticleBundle> = {
  'us-en': 'en',
  'fr-fr': 'fr',
  'es-es': 'es',
  'sa-ar': 'ar',
}

function mergeOne(base: BlogArticle, o: BlogPostOverrideRow): BlogArticle {
  const body = o.body_md?.trim()
  return {
    ...base,
    title: o.title || base.title,
    excerpt: o.excerpt ?? base.excerpt,
    content: body || base.content,
    tags: o.tags && o.tags.length > 0 ? o.tags : base.tags,
    category: o.category || base.category,
    readTime: o.read_time || base.readTime,
    coverImageUrl: o.cover_image_url ?? base.coverImageUrl,
  }
}

export function mergeArticleBundleWithOverrides(
  bundle: ArticleBundle,
  overrides: BlogPostOverrideRow[]
): ArticleBundle {
  if (!overrides.length) return bundle
  const next: ArticleBundle = { ...bundle }
  for (const o of overrides) {
    const key = DB_LOCALE_TO_BUNDLE_KEY[o.locale]
    if (!key) continue
    const base = next[key]
    if (!base) continue
    next[key] = mergeOne(base, o)
  }
  return next
}

export async function fetchPublishedOverrides(
  supabase: SupabaseClient,
  slug: string
): Promise<BlogPostOverrideRow[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(
      'id, slug, locale, title, excerpt, body_md, status, cover_image_url, tags, category, read_time'
    )
    .eq('slug', slug)
    .eq('status', 'published')

  if (error || !data) return []
  return data as BlogPostOverrideRow[]
}
