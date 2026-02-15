import { Metadata } from 'next'
import Link from 'next/link'
import { cookies } from 'next/headers'
import BlogContent from './BlogContent'
import { articlesEn, articlesFr, articlesAr } from '@/content/blog'

const COOKIE_NAME = 'digni-language'

const blogMetaByLang = {
  en: {
    title: 'AI Employee Systems, Digni Digital Literacy & Custom SaaS | Digni Digital Blog',
    description: 'Expert insights on AI employee systems for growing businesses, Digni Digital Literacy program for private high schools, and custom SaaS development solutions.',
  },
  fr: {
    title: 'Transformation Digitale - Insights | Blog Digni Digital',
    description: 'Expertises sur les systèmes employés IA, le programme Digni Digital Literacy et le développement SaaS sur mesure.',
  },
  ar: {
    title: 'التحول الرقمي - رؤى | مدونة Digni Digital',
    description: 'رؤى خبراء حول أنظمة الموظفين بالذكاء الاصطناعي وبرنامج Digni Digital Literacy وحلول تطوير SaaS.',
  },
} as const

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const lang = (cookieStore.get(COOKIE_NAME)?.value === 'fr' || cookieStore.get(COOKIE_NAME)?.value === 'ar')
    ? (cookieStore.get(COOKIE_NAME)?.value as 'fr' | 'ar')
    : 'en'
  const meta = blogMetaByLang[lang]
  return {
    title: meta.title,
    description: meta.description,
    keywords: ['AI employee system', 'AI receptionist', 'business automation', 'Digni Digital Literacy program', 'private high school education', 'custom SaaS development', 'SaaS solutions', 'business growth', 'student career readiness'],
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
    },
  }
}

// Canonical list for static params and crawler (English slugs)
export const allArticles = articlesEn

const articlesByLang = { en: articlesEn, fr: articlesFr, ar: articlesAr } as const


const baseUrl = 'https://digni-digital-llc.com'

// Blog page (Server Component)
export default function BlogPage() {
  const blogListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Digni Digital Blog',
    description: 'Expert insights on AI employee systems, Digni Digital Literacy programs, and custom SaaS development.',
    url: `${baseUrl}/blog`,
    numberOfPosts: allArticles.length,
    blogPost: allArticles.map((article) => ({
      '@type': 'BlogPosting',
      headline: article.title,
      url: `${baseUrl}/blog/${article.slug}`,
      datePublished: article.publishDate,
      author: { '@type': 'Person', name: article.author },
      description: article.excerpt,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListJsonLd) }}
      />
      <BlogContent articlesByLang={articlesByLang} />
      {/* Server-rendered list so crawlers (e.g. Googlebot) can discover every post from the first HTML without needing JS or pagination */}
      <nav
        aria-label="All blog articles"
        className="sr-only"
        data-crawler-links="all-posts"
      >
        <h2>All blog posts</h2>
        <ul>
          {allArticles.map((article) => (
            <li key={article.slug}>
              <Link href={`/blog/${article.slug}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}