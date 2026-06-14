import type { AssessmentServiceId } from './types'

export const ASSESSMENT_PATHS: Record<AssessmentServiceId, `/${string}`> = {
 'ai-employee': '/ai-receptionist/assessment',
 'future-ready': '/future-ready-graduate/assessment',
 'agentic-softwares': '/agentic-softwares/assessment',
}

export function getAssessmentPath(serviceId: AssessmentServiceId): `/${string}` {
 return ASSESSMENT_PATHS[serviceId]
}
