import type { AssessmentQuestion } from './types'

export function maxAssessmentPoints(questions: AssessmentQuestion[]): number {
 return questions.reduce((sum, q) => {
 const max = Math.max(...q.choices.map((c) => c.points))
 return sum + max
 }, 0)
}

export function computeMatchPercent(
 questions: AssessmentQuestion[],
 answers: Record<string, string>,
): number {
 const max = maxAssessmentPoints(questions)
 if (max <= 0) return 0

 let earned = 0
 for (const q of questions) {
 const choiceId = answers[q.id]
 const choice = q.choices.find((c) => c.id === choiceId)
 if (choice) earned += choice.points
 }

 return Math.round((earned / max) * 100)
}

export function getResultBand<T extends { minPercent: number }>(
 bands: T[],
 percent: number,
): T {
 const sorted = [...bands].sort((a, b) => b.minPercent - a.minPercent)
 return sorted.find((b) => percent >= b.minPercent) ?? sorted[sorted.length - 1]!
}
