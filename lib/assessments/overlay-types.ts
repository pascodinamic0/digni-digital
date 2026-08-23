import type { AssessmentCopy, AssessmentCustomResult } from './types'

export type QuestionOverlay = {
  prompt?: string
  choices?: Record<string, { label?: string; insight?: { title: string; why: string } }>
}

export type AssessmentOverlay = {
  serviceName?: string
  copy?: Partial<AssessmentCopy>
  questions?: Record<string, QuestionOverlay>
  customResult?: Partial<AssessmentCustomResult>
}
