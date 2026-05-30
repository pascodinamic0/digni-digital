import { buildAllCareerGuideArticles } from '@/lib/ai-career-jobs/build-career-guide-article'

/** AI career guide articles — ids 200+ to avoid collision with legacy posts */
export const aiCareerGuideArticles = buildAllCareerGuideArticles(200)
