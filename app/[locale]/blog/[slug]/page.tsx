import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostContent from '@/app/blog/BlogPostContent'
import { getArticleBySlugForLocale } from '@/lib/blog'
import { allArticlesEn } from '@/lib/blog'
import { routing } from '@/i18n/routing'
import type { Language } from '@/app/i18n/translations'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://digni-digital-llc.com'

function parsePublishDateToISO(dateStr: string): string {
  const parsed = new Date(dateStr)
  return isNaN(parsed.getTime()) ? new Date().toISOString().split('T')[0] : parsed.toISOString().split('T')[0]
}

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const data = getArticleBySlugForLocale(locale, slug)
  if (!data) {
    return { title: 'Article Not Found | Digni Digital Blog' }
  }
  const lang = (locale.includes('fr') ? 'fr' : locale.includes('es') ? 'es' : locale.includes('ar') ? 'ar' : 'en') as Language
  const article = data[lang] ?? data.en
  const canonicalUrl = `${SITE_URL}/${locale}/blog/${slug}`
  const ogImage = slug === 'ai-automation-scaling-business-growth'
    ? [{ url: `${SITE_URL}/blog/its-time-to-expand.gif`, width: 600, height: 400, alt: article.title }]
    : undefined
  return {
    title: `${article.title} | Digni Digital Blog`,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      url: canonicalUrl,
      ...(ogImage && { images: ogImage }),
    },
  }
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
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
    de: data.de,
    es: data.es,
  }

  const article = data.en
  const canonicalUrl = `${SITE_URL}/${locale}/blog/${slug}`
  const datePublished = parsePublishDateToISO(article.publishDate)
  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    url: canonicalUrl,
    datePublished,
    dateModified: datePublished,
    author: { '@type': 'Person', name: article.author },
    publisher: {
      '@type': 'Organization',
      name: 'Digni Digital',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/Favicon.png` },
    },
  }

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 pt-20">
          <BlogPostContent articleByLang={articleByLang} />
        </div>
      </article>
    </main>
  )
}
