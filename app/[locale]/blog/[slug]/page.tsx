import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostContent from '@/app/blog/BlogPostContent'
import { getArticleBySlugForLocale, allArticlesEn } from '@/lib/blog'
import { fetchDbArticleBySlug } from '@/lib/blog/db-article-by-slug'
import { mergeArticleBundleWithOverrides, fetchPublishedBlogOverrides } from '@/lib/blog-merge'
import { createClient } from '@/lib/supabase/server'
import { routing } from '@/i18n/routing'
import { BRAND_LOGO_PATH } from '@/lib/site-assets'
import type { Language } from '@/app/i18n/translations'
import { AGENT_DATA_LAST_UPDATED, jsonLdScriptProps } from '@/lib/agent-readiness'

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
  let data = getArticleBySlugForLocale(locale, slug)
  if (!data) {
    const supabase = await createClient()
    const dbArticle = await fetchDbArticleBySlug(supabase, locale, slug)
    if (!dbArticle) return { title: 'Article Not Found | Digni Digital Blog' }
    data = { en: dbArticle, fr: dbArticle, ar: dbArticle, de: dbArticle, es: dbArticle }
  }
  const overrides = await fetchPublishedBlogOverrides(slug)
  const merged = mergeArticleBundleWithOverrides(data, overrides)
  const lang = (locale.includes('fr') ? 'fr' : locale.includes('es') ? 'es' : locale.includes('ar') ? 'ar' : locale.includes('de') ? 'de' : 'en') as Language
  const article = merged[lang] ?? merged.en
  const canonicalUrl = `${SITE_URL}/${locale}/blog/${slug}`
  const ogImage = article.coverImageUrl
    ? [{ url: article.coverImageUrl, width: 1200, height: 630, alt: article.title }]
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
  let data = getArticleBySlugForLocale(locale, slug)

  if (!data) {
    const supabase = await createClient()
    const dbArticle = await fetchDbArticleBySlug(supabase, locale, slug)
    if (!dbArticle) notFound()
    data = { en: dbArticle, fr: dbArticle, ar: dbArticle, de: dbArticle, es: dbArticle }
  }

  const overrides = await fetchPublishedBlogOverrides(slug)
  const merged = mergeArticleBundleWithOverrides(data, overrides)

  const articleByLang: Record<Language, typeof data.en> = {
    en: merged.en,
    fr: merged.fr,
    ar: merged.ar,
    de: merged.de,
    es: merged.es,
  }

  const lang = (locale.includes('fr') ? 'fr' : locale.includes('es') ? 'es' : locale.includes('ar') ? 'ar' : locale.includes('de') ? 'de' : 'en') as Language
  const article = articleByLang[lang] ?? articleByLang.en
  const canonicalUrl = `${SITE_URL}/${locale}/blog/${slug}`
  const datePublished = parsePublishDateToISO(article.publishDate)
  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    url: canonicalUrl,
    mainEntityOfPage: canonicalUrl,
    inLanguage: locale,
    datePublished,
    dateModified: AGENT_DATA_LAST_UPDATED,
    author: { '@type': 'Person', name: article.author },
    ...(article.coverImageUrl
      ? { image: article.coverImageUrl }
      : {}),
    publisher: {
      '@type': 'Organization',
      name: 'Digni Digital',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}${BRAND_LOGO_PATH}` },
    },
  }

  const faqJsonLd =
    article.faqs && article.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: article.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScriptProps(blogPostingJsonLd)}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScriptProps(faqJsonLd)}
        />
      ) : null}
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20">
          <BlogPostContent articleByLang={articleByLang} />
        </div>
      </article>
    </main>
  )
}
