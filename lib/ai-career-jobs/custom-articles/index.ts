import type { AiCareerJob } from '../types'
import { BODIES_PART1 } from './bodies-part1'
import { BODIES_PART2 } from './bodies-part2'
import { CUSTOM_ARTICLE_META } from './meta'

const ALL_BODIES = { ...BODIES_PART1, ...BODIES_PART2 }

export function getCustomArticleMeta(jobId: string) {
 return CUSTOM_ARTICLE_META[jobId]
}

export function buildCustomArticleBody(job: AiCareerJob): string | null {
 const builder = ALL_BODIES[job.id]
 if (!builder) return null
 return builder(job).trim()
}

export function hasCustomArticle(jobId: string): boolean {
 return jobId in ALL_BODIES && jobId in CUSTOM_ARTICLE_META
}
