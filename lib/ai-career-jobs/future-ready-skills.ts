import { AI_CAREER_JOBS } from './catalog'

export type FutureReadySkillCard = {
  skill: string
  icon: string
  earning: string
  description: string
  tools: string[]
  demand: string
  blogSlug?: string
}

/** Maps catalog jobs to Future Ready program skill carousel cards */
export function getAiCareerFutureReadySkills(): FutureReadySkillCard[] {
  return AI_CAREER_JOBS.map((job) => ({
    skill: job.fancyTitle,
    icon: job.icon,
    earning: job.earning,
    description: job.description,
    tools: job.tools.slice(0, 5),
    demand: job.demand,
    blogSlug: job.slug,
  }))
}
