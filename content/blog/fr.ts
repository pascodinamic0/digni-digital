import type { BlogArticle } from './types'
import { articlesEn } from './en'

/** French placeholders: same slugs/order as EN. Replace content with real FR translations when ready. */
export const articlesFr: BlogArticle[] = articlesEn.map((article) => ({
  ...article,
  title: article.title + ' (FR)',
  excerpt: article.excerpt + ' (FR)',
  category: article.category + ' (FR)',
  readTime: article.readTime.replace('min read', 'min de lecture'),
  publishDate: article.publishDate,
  tags: article.tags.map((t) => t + ' (FR)'),
  content: `<p>(Contenu en français à venir.)</p><p>Slug: ${article.slug}</p>`,
}))
