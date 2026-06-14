export interface BlogFaqItem {
 question: string
 answer: string
}

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
 /** Set when a published DB override supplies a hero/cover image */
 coverImageUrl?: string | null
 /** Optional accordion FAQ, rendered like the Contact page when present */
 faqs?: BlogFaqItem[]
 faqSubtitle?: string
}
