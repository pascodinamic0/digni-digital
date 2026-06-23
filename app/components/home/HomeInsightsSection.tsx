'use client'

import { Link } from '@/i18n/navigation'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { articlesEn, articlesFr, articlesAr, articlesDe, articlesEs } from '@/content/blog'
import type { BlogArticle } from '@/content/blog'
import SectionChapter from '@/app/components/patterns/SectionChapter'
import InsightCardRow from '@/app/components/patterns/InsightCardRow'

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

const articlesByLanguage: Record<string, BlogArticle[]> = {
  en: articlesEn,
  fr: articlesFr,
  ar: articlesAr,
  de: articlesDe,
  es: articlesEs,
}

function getArticles(language: string) {
  const list = articlesByLanguage[language] ?? articlesEn
  return [...list].sort((a, b) => Date.parse(b.publishDate) - Date.parse(a.publishDate))
}

export default function HomeInsightsSection() {
  const language = useLanguage()
  const copy = translations[language].home.insights
  const articles = getArticles(language).slice(0, 3)

  const cards = articles.map((article) => ({
    title: article.title,
    excerpt: stripHtml(article.excerpt).slice(0, 140) + (article.excerpt.length > 140 ? '…' : ''),
    href: `/blog/${article.slug}`,
  }))

  return (
    <SectionChapter
      id="home-insights"
      index="06"
      label={copy.badge}
      title={<span className="gradient-text">{copy.title}</span>}
      subtitle={copy.subtitle}
      variant="alt"
    >
      <InsightCardRow cards={cards} readMoreLabel={copy.readMore} />
      <div className="mt-8">
        <Link href="/blog" className="view-link hover:text-accent transition-colors">
          {copy.viewAll} &gt;
        </Link>
      </div>
    </SectionChapter>
  )
}
