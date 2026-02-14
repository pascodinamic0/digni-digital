'use client'

import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../config/translations'
import { getBookingLinkProps } from '@/app/config/cta.config'

interface Article {
  title: string
  slug: string
  excerpt: string
  category: string
  readTime: string
  publishDate: string
  author: string
  tags: string[]
  content: string
}

interface BlogPostContentProps {
  article: Article
}

export default function BlogPostContent({ article }: BlogPostContentProps) {
  const { language } = useLanguage()
  const t = translations[language].blog
  const cta = translations[language].cta

  return (
    <>
      <Link 
        href="/blog" 
        className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors mb-8"
        aria-label="Back to blog listing"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {t.backToBlog}
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
            {article.category}
          </span>
          <span className="text-muted text-sm">{article.readTime}</span>
        </div>
        
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {article.title}
        </h1>
        
        <div className="flex items-center gap-4 text-muted">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-accent to-success rounded-full flex items-center justify-center text-sm font-bold text-background">
              {article.author.split(' ').map(n => n[0]).join('')}
            </div>
            <span>{t.by} {article.author}</span>
          </div>
          <span>•</span>
          <span>{article.publishDate}</span>
        </div>
      </header>

      <div 
        className="blog-content max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
        aria-label="Article content"
      />

      <div className="mt-12 pt-8 border-t border-white/10">
        <h3 className="font-display text-lg font-bold mb-4">{t.tags}</h3>
        <div className="flex flex-wrap gap-2">
          {article.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-surface text-sm rounded-lg">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12 p-8 bg-surface rounded-lg text-center">
        {['Future of Work', 'Digni Digital Literacy'].includes(article.category) ? (
          <>
            <h3 className="font-display text-2xl font-bold mb-4">
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
            <h3 className="font-display text-2xl font-bold mb-4">
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
