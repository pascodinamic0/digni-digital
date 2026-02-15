import type { BlogArticle } from './types'
import { articlesEn } from './en'

/** Arabic placeholders: same slugs/order as EN. Replace content with real AR translations when ready. */
export const articlesAr: BlogArticle[] = articlesEn.map((article) => ({
  ...article,
  title: article.title + ' (AR)',
  excerpt: article.excerpt + ' (AR)',
  category: article.category + ' (AR)',
  readTime: article.readTime.replace('min read', 'دقيقة قراءة'),
  publishDate: article.publishDate,
  tags: article.tags.map((t) => t + ' (AR)'),
  content: `<p>(المحتوى بالعربية قريباً.)</p><p>Slug: ${article.slug}</p>`,
}))
