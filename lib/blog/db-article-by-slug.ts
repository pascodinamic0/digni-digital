import type { BlogArticle } from '@/content/blog/types'
import type { SupabaseClient } from '@supabase/supabase-js'

const DB_LOCALE_BY_LANG: Record<string, string> = {
  en: 'us-en',
  fr: 'fr-fr',
  es: 'es-es',
  ar: 'sa-ar',
  de: 'de-de',
}

function langFromLocale(locale: string): string {
  return locale.split('-')[1]?.toLowerCase() || 'en'
}

/** Load a published DB-only article when slug is missing from file catalog. */
export async function fetchDbArticleBySlug(
  supabase: SupabaseClient,
  locale: string,
  slug: string
): Promise<BlogArticle | null> {
  const lang = langFromLocale(locale)
  const dbLocale = DB_LOCALE_BY_LANG[lang] ?? 'us-en'

  const { data, error } = await supabase
    .from('blog_posts')
    .select(
      'slug, title, excerpt, body_md, cover_image_url, tags, category, read_time, published_at'
    )
    .eq('slug', slug)
    .eq('locale', dbLocale)
    .eq('status', 'published')
    .maybeSingle()

  if (error || !data) return null

  return {
    id: 9500,
    title: data.title,
    slug: data.slug,
    excerpt: data.excerpt ?? '',
    category: data.category ?? 'Future of Work',
    readTime: data.read_time ?? '11 min read',
    publishDate: data.published_at
      ? new Date(data.published_at).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })
      : 'May 30, 2026',
    author: 'Pascal Digny',
    tags: Array.isArray(data.tags) && data.tags.length > 0 ? data.tags : ['AI careers'],
    featured: false,
    coverImageUrl: data.cover_image_url ?? null,
    content: data.body_md,
  }
}
