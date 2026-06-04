/**
 * Standard blog / career-guide SEO + intent system.
 * Aligns with blog-resource-audit skill (90+ gate).
 */

export type ArticleIntentType = 'informational' | 'commercial' | 'mixed'

/** Required coverage for career guides and flagship posts. */
export const ARTICLE_INTENT_SECTIONS = [
  'what-is-it',
  'why-it-matters',
  'how-it-works',
  'who-should-learn',
  'skills-required',
  'tools-required',
  'salary-earnings',
  'career-paths',
  'mistakes-to-avoid',
  'real-examples',
  'ai-future-block',
  'checklist',
  'faq-6-plus',
  'digni-bridge',
  'next-steps',
] as const

export type ArticleIntentMeta = {
  primaryKeyword: string
  secondaryKeywords: string[]
  relatedQuestions: string[]
  longTail: string[]
  intent: ArticleIntentType
}

/** Default title pattern: searchable plain title first. */
export function careerGuideTitle(plainTitle: string, suffix = 'Career Guide (2026)'): string {
  return `${plainTitle}: ${suffix}`
}

export function careerGuideExcerpt(plainTitle: string, timeSaved: string): string {
  return `Become a ${plainTitle}: what it is, why it matters, tools, salary, career paths, checklist, and FAQs—for search and AI citation. Typical time saved: ${timeSaved}.`
}

export function careerGuideTags(plainTitle: string): string[] {
  return [plainTitle, 'AI careers', 'future of work', 'Future Ready', 'freelance income', 'Digni Digital']
}

/** Score dimensions (max 100) — mirror blog-resource-audit rubric. */
export const ARTICLE_SCORE_RUBRIC = {
  searchIntent: 20,
  educationalQuality: 20,
  aiCitation: 20,
  topicalAuthority: 15,
  readerValue: 15,
  commercialRelevance: 10,
  passThreshold: 90,
} as const
