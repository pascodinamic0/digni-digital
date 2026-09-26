import type { ProofVisualConfig } from './types'

export const solutionsProofVisuals: ProofVisualConfig[] = [
  {
    kind: 'react-demo',
    sectionId: 'lead-gen',
    proofIntent: 'Inbound response coverage',
    demoId: 'chat-preview',
    variant: 'dashboard',
    i18nKey: 'solutions.leadGen',
  },
  {
    kind: 'diagram',
    sectionId: 'ops-efficiency',
    proofIntent: 'Inbound connected to one system',
    diagramId: 'inbound-map',
    i18nKey: 'solutions.opsEfficiency',
  },
  {
    kind: 'react-demo',
    sectionId: 'customer-experience',
    proofIntent: 'Multi-channel response',
    demoId: 'chat-preview',
    variant: 'dashboard',
    i18nKey: 'solutions.customerExperience',
  },
  {
    kind: 'stat-panel',
    sectionId: 'results',
    proofIntent: 'Verified client results',
    i18nKey: 'solutions.results',
    statKeys: ['stat1', 'stat2', 'stat3'],
  },
  {
    kind: 'comparison',
    sectionId: 'before-after',
    proofIntent: 'Leaky bucket vs growth loop',
    i18nKey: 'solutions.beforeAfter',
  },
]

export function getSolutionsProofVisual(sectionId: string): ProofVisualConfig | undefined {
  return solutionsProofVisuals.find((v) => v.sectionId === sectionId)
}
