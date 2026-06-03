import type { BlogArticle } from '@/content/blog/types'
import { AI_CAREER_JOBS } from './catalog'
import type { AiCareerJob } from './types'
import { buildCustomArticleBody, getCustomArticleMeta } from './custom-articles'
import { coverPath } from './custom-articles/shared'

const PUBLISH_DATE = 'June 3, 2026'
const AUTHOR = 'Pascal Digny'

export function buildCareerGuideArticle(job: AiCareerJob, id: number): BlogArticle {
  const cover = coverPath(job)
  const customMeta = getCustomArticleMeta(job.id)
  const customBody = buildCustomArticleBody(job)

  const title =
    customMeta?.title ??
    `How to Become a ${job.fancyTitle}: ${job.plainTitle} Career Guide (2026)`
  const excerpt =
    customMeta?.excerpt ??
    `Become a ${job.fancyTitle}: learn what clients pay for, tools to use, time saved (${job.timeSaved}), copy-paste prompts, and a 30-day path—without a traditional degree.`
  const readTime = customMeta?.readTime ?? '11 min read'

  const tags = [
    job.fancyTitle,
    job.plainTitle,
    'AI careers',
    'future of work',
    'Future Ready',
    'freelance income',
    'Digni Digital',
  ]

  const content =
    customBody ??
    `<p>Article content pending update for ${job.fancyTitle}.</p>`

  return {
    id,
    title,
    slug: job.slug,
    excerpt,
    category: 'Future of Work',
    readTime,
    publishDate: PUBLISH_DATE,
    author: AUTHOR,
    tags,
    featured: false,
    coverImageUrl: cover,
    content,
  }
}

export function buildAllCareerGuideArticles(startId: number): BlogArticle[] {
  return AI_CAREER_JOBS.map((job, i) => buildCareerGuideArticle(job, startId + i))
}
