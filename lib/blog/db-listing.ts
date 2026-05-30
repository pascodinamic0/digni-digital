import type { BlogArticle } from '@/content/blog/types'
import type { SupabaseClient } from '@supabase/supabase-js'

type DbPostRow = {
  slug: string
  title: string
  excerpt: string | null
  body_md: string
  cover_image_url?: string | null
  tags?: string[] | null
  category?: string | null
  read_time?: string | null
  published_at: string | null
}

/** Published DB posts whose slug is not in the file catalog (agent-published). */
export async function fetchDbOnlyBlogArticles(
  supabase: SupabaseClient,
  locale: string,
  existingSlugs: Set<string>
): Promise<BlogArticle[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(
      'slug, title, excerpt, body_md, cover_image_url, tags, category, read_time, published_at'
    )
    .eq('status', 'published')
    .eq('locale', locale)

  if (error || !data?.length) return []

  const rows = data as DbPostRow[]
  const extras = rows.filter((r) => !existingSlugs.has(r.slug))
  const baseId = 9000

  return extras.map((row, i) => ({
    id: baseId + i,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt ?? '',
    category: row.category ?? 'Future of Work',
    readTime: row.read_time ?? '10 min read',
    publishDate: row.published_at
      ? new Date(row.published_at).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })
      : 'May 30, 2026',
    author: 'Pascal Digny',
    tags: Array.isArray(row.tags) && row.tags.length > 0 ? row.tags : ['AI careers'],
    featured: false,
    coverImageUrl: row.cover_image_url ?? null,
    content: row.body_md,
  }))
}
