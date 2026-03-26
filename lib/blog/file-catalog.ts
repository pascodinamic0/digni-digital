import type { BlogArticle } from '@/content/blog/types'
import { articlesEn } from '@/content/blog/en'

/** Lightweight catalog entries for admin (English flagship posts; other locales share slugs). */
export type FileBlogCatalogEntry = {
  source: 'file'
  locale: 'us-en'
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  publishDate: string
  author: string
  publicPath: string
}

export function getFileBlogCatalogEntries(): FileBlogCatalogEntry[] {
  return articlesEn.map((a: BlogArticle) => ({
    source: 'file' as const,
    locale: 'us-en' as const,
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    category: a.category,
    readTime: a.readTime,
    publishDate: a.publishDate,
    author: a.author,
    publicPath: `/us-en/blog/${a.slug}`,
  }))
}
