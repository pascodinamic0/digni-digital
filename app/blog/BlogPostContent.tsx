'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { getBookingLinkProps } from '@/app/config/cta.config'
import { AUTHOR_HEADSHOT_PATH } from '@/lib/site-assets'
import type { Language } from '@/app/i18n/translations'
import type { BlogArticle } from '@/content/blog'
import { BLOG_LISTING_RETURN_SEARCH_KEY } from '@/lib/blog-listing-storage'
import BlogFaqAccordion from '@/app/blog/BlogFaqAccordion'
import { resolveBlogFaqContent } from '@/lib/blog/faq-content'

const HEADSHOT_AUTHOR = 'Pascal Digny'

const FAQ_SECTION_TITLE: Record<Language, string> = {
  en: 'Frequently Asked Questions',
  fr: 'Questions fréquentes',
  ar: 'الأسئلة الشائعة',
  de: 'Häufig gestellte Fragen',
  es: 'Preguntas frecuentes',
}

interface BlogPostContentProps {
  articleByLang: Record<Language, BlogArticle>
}

export default function BlogPostContent({ articleByLang }: BlogPostContentProps) {
  const language = useLanguage()
  const article = articleByLang[language] ?? articleByLang.en
  const bodyHtml = article.content ?? ''
  const { contentBeforeFaq, contentAfterFaq, faqs } = resolveBlogFaqContent(
    bodyHtml,
    article.faqs
  )
  const tags = article.tags ?? []
  const t = translations[language].blog
  const cta = translations[language].cta

  const [blogListingHref, setBlogListingHref] = useState('/blog')

  useEffect(() => {
    try {
      const q = sessionStorage.getItem(BLOG_LISTING_RETURN_SEARCH_KEY)
      setBlogListingHref(q ? `/blog?${q}` : '/blog')
    } catch {
      setBlogListingHref('/blog')
    }
  }, [])

  return (
    <>
      <Link 
        href={blogListingHref}
        className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors mb-8"
        aria-label="Back to blog listing"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {t.backToBlog}
      </Link>

      <header className="mb-8 sm:mb-10 md:mb-12 text-left">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
            {article.category ?? ''}
          </span>
          <span className="text-muted text-sm">{article.readTime}</span>
        </div>
        
        <h1 className="font-display type-h2 font-bold mb-4 sm:mb-6 leading-snug text-left max-w-4xl">
          {article.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-muted text-sm sm:text-base text-left">
          <div className="flex items-center gap-2">
            {article.author === HEADSHOT_AUTHOR ? (
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-border-light/60">
                <Image
                  src={AUTHOR_HEADSHOT_PATH}
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover object-center"
                  sizes="40px"
                />
              </div>
            ) : (
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-accent to-success text-sm font-bold text-background">
                {article.author.split(' ').map(n => n[0]).join('')}
              </div>
            )}
            <span>{t.by} {article.author}</span>
          </div>
          <span className="hidden sm:inline" aria-hidden="true">•</span>
          <span>{article.publishDate}</span>
        </div>
      </header>

      {article.coverImageUrl ? (
        <figure className="mb-10 overflow-hidden rounded-2xl border border-border-light/60 shadow-sm">
          <img
            src={article.coverImageUrl}
            alt={article.title}
            className="max-h-[min(420px,50vh)] w-full object-cover"
            width={1200}
            height={630}
            loading="eager"
            decoding="async"
          />
        </figure>
      ) : null}

      <div
        className="blog-content max-w-none"
        dangerouslySetInnerHTML={{ __html: contentBeforeFaq }}
        aria-label="Article content"
      />

      {faqs.length > 0 ? (
        <BlogFaqAccordion
          title={FAQ_SECTION_TITLE[language]}
          subtitle={article.faqSubtitle}
          faqs={faqs}
        />
      ) : null}

      {contentAfterFaq ? (
        <div
          className="blog-content max-w-none"
          dangerouslySetInnerHTML={{ __html: contentAfterFaq }}
          aria-label="Article continuation"
        />
      ) : null}

      <div className="mt-12 pt-8 border-t border-border-light">
        <h3 className="font-display text-lg font-bold mb-4">{t.tags}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-surface text-sm rounded-lg">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 sm:mt-12 p-5 sm:p-8 bg-surface rounded-lg text-left sm:text-center">
        {['Future of Work', 'Future-Ready Graduate Program'].includes(article.category ?? '') ? (
          <>
            <h3 className="font-display type-h4 font-bold mb-4">
              {t.readyFutureReady}
            </h3>
            <p className="text-muted mb-6">
              {t.readyFutureReadyDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/future-ready-graduate"
                className="btn-primary"
              >
                {t.exploreFutureReady}
              </Link>
              <a
                {...getBookingLinkProps()}
                className="btn-secondary"
              >
                {cta.scheduleConsultation}
              </a>
            </div>
          </>
        ) : (
          <>
            <h3 className="font-display type-h4 font-bold mb-4">
              {t.readyTransform}
            </h3>
            <p className="text-muted mb-6">
              {t.readyTransformDesc}
            </p>
            <a
              {...getBookingLinkProps()}
              className="btn-primary"
            >
              {cta.bookConsultation}
            </a>
          </>
        )}
      </div>
    </>
  )
}
