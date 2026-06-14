export type AiCareerJob = {
 id: string
 /** Fancy market facing role title */
 fancyTitle: string
 /** Plain language subtitle for clarity */
 plainTitle: string
 slug: string
 icon: string
 earning: string
 demand: 'Exploding' | 'Extremely High' | 'Very High' | 'Growing Fast'
 description: string
 tools: string[]
 /** Hours saved per typical deliverable (marketing claim, sourced in blog) */
 timeSaved: string
 /** Why clients hire this role */
 hireReason: string
 references: { label: string; href: string }[]
 prompts: { label: string; prompt: string }[]
 learningSteps: string[]
 hook: string
}
