import type { AssessmentServiceId } from './types'

/** Assessment pages live under each service page (V2 URL structure). */
export const ASSESSMENT_PATHS: Record<AssessmentServiceId, `/${string}`> = {
  'ai-employee': '/services/ai-employee/assessment',
  'future-ready': '/services/future-ready/assessment',
  'agentic-softwares': '/services/agentic-systems/assessment',
}

export function getAssessmentPath(serviceId: AssessmentServiceId): `/${string}` {
  return ASSESSMENT_PATHS[serviceId]
}
