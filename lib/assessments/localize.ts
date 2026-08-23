import type { Language } from '@/app/i18n/translations'
import type {
  AssessmentChoice,
  AssessmentQuestion,
  AssessmentServiceId,
  ServiceAssessmentConfig,
} from './types'
import type { AssessmentOverlay, QuestionOverlay } from './overlay-types'
import { assessmentOverlays } from './overlays'

export type { AssessmentOverlay, QuestionOverlay } from './overlay-types'

function mergeQuestions(
  questions: AssessmentQuestion[],
  overlay: Record<string, QuestionOverlay>,
): AssessmentQuestion[] {
  return questions.map((question) => {
    const q = overlay[question.id]
    if (!q) return question
    return {
      ...question,
      prompt: q.prompt ?? question.prompt,
      choices: question.choices.map((choice: AssessmentChoice) => {
        const c = q.choices?.[choice.id]
        if (!c) return choice
        return {
          ...choice,
          label: c.label ?? choice.label,
          insight: c.insight ?? choice.insight,
        }
      }),
    }
  })
}

export function localizeAssessment(
  base: ServiceAssessmentConfig,
  language: Language,
): ServiceAssessmentConfig {
  if (language === 'en') return base
  const overlay = assessmentOverlays[language]?.[base.serviceId as AssessmentServiceId]
  if (!overlay) return base

  const copy = overlay.copy
    ? {
        ...base.copy,
        ...overlay.copy,
        introBullets: overlay.copy.introBullets ?? base.copy.introBullets,
        bands: overlay.copy.bands ?? base.copy.bands,
      }
    : base.copy

  return {
    ...base,
    serviceName: overlay.serviceName ?? base.serviceName,
    copy,
    questions: overlay.questions ? mergeQuestions(base.questions, overlay.questions) : base.questions,
    customResult: overlay.customResult
      ? { ...base.customResult!, ...overlay.customResult }
      : base.customResult,
  }
}
