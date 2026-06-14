export type AssessmentServiceId = 'ai-employee' | 'future-ready' | 'agentic-softwares'

export type AssessmentAccent = 'accent' | 'success' | 'info'

export type AssessmentChoiceInsight = {
 title: string
 why: string
}

export type AssessmentChoice = {
 id: string
 label: string
 /** Higher = stronger fit for this service (0 to 10 typical per question). */
 points: number
 /** Shown on results + included in downloadable report when this answer is selected. */
 insight?: AssessmentChoiceInsight
}

export type AssessmentQuestion = {
 id: string
 prompt: string
 choices: AssessmentChoice[]
}

export type AssessmentResultBand = {
 minPercent: number
 label: string
 description: string
 /** Why this service matters at this fit level (optional; used on results + download). */
 whyService?: string[]
 /** Practical next steps based on fit (optional; used on results + download). */
 suggestions?: string[]
}

/** Personalized insight when a specific answer is selected. */
export type ChoiceInsight = {
 headline: string
 why: string
}

export type ChoiceInsightMap = Record<string, Record<string, ChoiceInsight>>

/** Fixed results screen with optional match score + custom copy. */
export type AssessmentCustomResult = {
 headline: string
 body: string
 ctaIntro: string
 primaryCta: string
 warning: string
}

export type AssessmentCopy = {
 metaTitle: string
 metaDescription: string
 eyebrow: string
 introTitle: string
 introSubtitle: string
 introBullets: [string, string, string]
 startCta: string
 progressLabel: string
 back: string
 next: string
 finish: string
 answerAll: string
 resultEyebrow: string
 resultTitle: string
 matchLabel: string
 whyHeading?: string
 whySubtitle?: string
 suggestionsHeading?: string
 downloadReport?: string
 printReport?: string
 reportFilePrefix?: string
 bands: AssessmentResultBand[]
 nextStepsTitle: string
 primaryCta: string
 secondaryCta: string
 backToService: string
 retake: string
}

/** Service level “why this matters” bullets keyed by fit band (matches band thresholds). */
export type AssessmentWhyBullets = {
 excellent: string[]
 strong: string[]
 moderate: string[]
 explore: string[]
}

export type ServiceAssessmentConfig = {
 serviceId: AssessmentServiceId
 serviceName: string
 servicePath: `/${string}`
 accent: AssessmentAccent
 copy: AssessmentCopy
 questions: AssessmentQuestion[]
 choiceInsights?: ChoiceInsightMap
 /** When set, results show this copy instead of match % and band labels. */
 customResult?: AssessmentCustomResult
}

export type PersonalizedInsight = {
 headline: string
 why: string
 question: string
 answer: string
}

export type AssessmentReport = {
 serviceName: string
 matchPercent: number
 bandLabel: string
 bandDescription: string
 personalized: PersonalizedInsight[]
 whyService: string[]
 suggestions: string[]
 answersSummary: { question: string; answer: string }[]
 generatedAt: string
}
