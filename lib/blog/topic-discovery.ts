import type { AiCareerJob } from '@/lib/ai-career-jobs/types'

export type TopicProposalSeed = {
  fancyTitle: string
  plainTitle: string
  proposedSlug: string
  researchSummary: string
  targetAudience: string
  suggestedTags: string[]
  referenceUrls: string[]
}

/** Static seeds so discovery works without OpenAI */
export const DISCOVERY_SEED_TOPICS: TopicProposalSeed[] = [
  {
    fancyTitle: 'Synthetic Data Steward',
    plainTitle: 'AI Training Dataset Curator',
    proposedSlug: 'synthetic-data-steward-ai-training-curator-career',
    researchSummary:
      'Model labs need domain experts to structure datasets; remote-friendly role growing with RLHF demand.',
    targetAudience: 'Career switchers with niche expertise (law, medicine, coding)',
    suggestedTags: ['AI careers', 'data labeling', 'remote work'],
    referenceUrls: ['https://www.mercor.com/resources/experts/new-artificial-intelligence-job-opportunities/'],
  },
  {
    fancyTitle: 'Answer Engine Reputation Architect',
    plainTitle: 'AI Brand Mention Specialist',
    proposedSlug: 'answer-engine-reputation-architect-ai-brand-career',
    researchSummary:
      'Brands optimizing for ChatGPT/Perplexity citations; adjacent to GEO roles cited in EU hiring data 2026.',
    targetAudience: 'Marketers and founders in competitive B2B niches',
    suggestedTags: ['GEO', 'AI search', 'brand'],
    referenceUrls: ['https://searchqualify.com/blog/new-types-of-jobs-created-by-ai-2026'],
  },
  {
    fancyTitle: 'Multimodal Short-Form Director',
    plainTitle: 'AI Reels & TikTok Producer',
    proposedSlug: 'multimodal-short-form-director-ai-reels-career',
    researchSummary:
      'Upwork/Fiverr report triple-digit growth in AI video editing demand; operators who ship hooks win retainers.',
    targetAudience: 'Creators and social media freelancers',
    suggestedTags: ['short-form video', 'AI editing', 'freelance'],
    referenceUrls: ['https://www.upwork.com/resources/freelance-skills'],
  },
]

export function jobToTopicSeed(job: AiCareerJob): TopicProposalSeed {
  return {
    fancyTitle: job.fancyTitle,
    plainTitle: job.plainTitle,
    proposedSlug: job.slug,
    researchSummary: job.description,
    targetAudience: 'Future Ready students and career switchers building AI-era income',
    suggestedTags: job.fancyTitle.split(' ').slice(0, 3).concat(['AI careers', 'Future Ready']),
    referenceUrls: job.references.map((r) => r.href),
  }
}

export function buildDiscoveryPrompt(existingSlugs: string[]): string {
  return `You are a research agent for Digni Digital (Future Ready employability, AI careers).

Find 5 NEW blog topic ideas for untold AI-assisted careers people can do with ChatGPT, Claude, Gemini, and no-code tools—not hype roles, but practical freelance income paths (like thumbnail designer, AI video editor, meeting notes specialist).

Already covered slugs (do NOT repeat):
${existingSlugs.slice(0, 80).join('\n')}

Return JSON array only:
[{"fancyTitle":"...","plainTitle":"...","proposedSlug":"kebab-case-career","researchSummary":"2 sentences","targetAudience":"...","suggestedTags":["..."],"referenceUrls":["https://..."]}]

Use credible reference URLs (official docs, WEF, platform blogs). Fancy titles must sound premium.`
}
