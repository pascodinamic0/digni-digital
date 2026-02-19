import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import BlogPostContent from '@/app/blog/BlogPostContent'
import { getArticleBySlugForLocale } from '@/lib/blog'
import { allArticlesEn } from '@/lib/blog'
import type { Language } from '@/app/i18n/translations'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const data = getArticleBySlugForLocale(locale, slug)
  if (!data) {
    return { title: 'Article Not Found | Digni Digital Blog' }
  }
  const lang = locale.includes('fr') ? 'fr' : 'en'
  const article = data[lang as Language] ?? data.en
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
  const locales = ['us-en', 'fr-fr', 'ca-en', 'ca-fr']
  return locales.flatMap((locale) =>
    allArticlesEn.map((article) => ({ locale, slug: article.slug }))
  )
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params
  const data = getArticleBySlugForLocale(locale, slug)

  if (!data) {
    notFound()
  }

  const articleByLang: Record<Language, typeof data.en> = {
    en: data.en,
    fr: data.fr,
    ar: data.ar,
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
