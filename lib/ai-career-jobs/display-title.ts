import type { AiCareerJob } from './types'

/** Public facing title: always the searchable plain title. */
export function displayJobTitle(job: AiCareerJob): string {
 return job.plainTitle
}
