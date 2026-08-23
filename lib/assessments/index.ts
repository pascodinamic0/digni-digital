import type { AssessmentServiceId, ServiceAssessmentConfig } from './types'
import type { Language } from '@/app/i18n/translations'
import { aiEmployeeAssessmentEn } from './ai-employee'
import { futureReadyAssessmentEn } from './future-ready-graduate'
import { agenticSoftwaresAssessmentEn } from './agentic-softwares'
import { localizeAssessment } from './localize'

const configs: Record<AssessmentServiceId, ServiceAssessmentConfig> = {
 'ai-employee': aiEmployeeAssessmentEn,
 'future-ready': futureReadyAssessmentEn,
 'agentic-softwares': agenticSoftwaresAssessmentEn,
}

export function getServiceAssessmentConfig(
 serviceId: AssessmentServiceId,
 language: Language = 'en',
): ServiceAssessmentConfig {
 return localizeAssessment(configs[serviceId], language)
}

export { ASSESSMENT_PATHS, getAssessmentPath } from './paths'
export { computeMatchPercent, getResultBand, maxAssessmentPoints } from './score'
export type {
 AssessmentAccent,
 AssessmentChoice,
 AssessmentCopy,
 AssessmentCustomResult,
 AssessmentQuestion,
 AssessmentResultBand,
 AssessmentServiceId,
 ServiceAssessmentConfig,
} from './types'
