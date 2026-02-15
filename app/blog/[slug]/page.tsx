import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cookies } from 'next/headers'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import BlogPostContent from '../BlogPostContent'
import { allArticles } from '../page'
import { articlesEn, articlesFr, articlesAr } from '@/content/blog'
import type { Language } from '@/app/i18n/translations'

const COOKIE_NAME = 'digni-language'

function getLangFromCookie(cookieStore: Awaited<ReturnType<typeof cookies>>): Language {
  const c = cookieStore.get(COOKIE_NAME)?.value
  if (c === 'fr' || c === 'ar') return c
  return 'en'
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(props: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await props.params
  const cookieStore = await cookies()
  const lang = getLangFromCookie(cookieStore)
  const articles = lang === 'fr' ? articlesFr : lang === 'ar' ? articlesAr : articlesEn
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return {
      title: 'Article Not Found | Digni Digital Blog',
    }
  }

  return {
    title: `${article.title} | Digni Digital Blog`,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
    },
  }
}

export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const { slug } = await props.params
  const articleEn = articlesEn.find((a) => a.slug === slug)
  const articleFr = articlesFr.find((a) => a.slug === slug)
  const articleAr = articlesAr.find((a) => a.slug === slug)

  if (!articleEn) {
    notFound()
  }

  const articleByLang: Record<Language, typeof articleEn> = {
    en: articleEn,
    fr: articleFr ?? articleEn,
    ar: articleAr ?? articleEn,
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <BlogPostContent articleByLang={articleByLang} />
        </div>
      </article>

      <Footer />
    </main>
  )
}