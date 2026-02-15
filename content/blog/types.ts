export interface BlogArticle {
  id: number
  title: string
  slug: string
  excerpt: string
  category: string
  readTime: string
  publishDate: string
  author: string
  tags: string[]
  featured: boolean
  content: string
}
