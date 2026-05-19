import type { AssessmentServiceId, ServiceAssessmentConfig } from './types'
import { aiEmployeeAssessmentEn } from './ai-employee'
import { futureReadyAssessmentEn } from './future-ready-graduate'
import { agenticSoftwaresAssessmentEn } from './agentic-softwares'

const configs: Record<AssessmentServiceId, ServiceAssessmentConfig> = {
  'ai-employee': aiEmployeeAssessmentEn,
  'future-ready': futureReadyAssessmentEn,
  'agentic-softwares': agenticSoftwaresAssessmentEn,
}

export function getServiceAssessmentConfig(
  serviceId: AssessmentServiceId,
): ServiceAssessmentConfig {
  return configs[serviceId]
}

export { ASSESSMENT_PATHS, getAssessmentPath } from './paths'
export { computeMatchPercent, getResultBand, maxAssessmentPoints } from './score'
export type {
  AssessmentAccent,
  AssessmentChoice,
  AssessmentCopy,
  AssessmentQuestion,
  AssessmentResultBand,
  AssessmentServiceId,
  ServiceAssessmentConfig,
} from './types'
