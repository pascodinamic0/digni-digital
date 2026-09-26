import type { ProofVisualConfig } from './types'

export const homeProofVisuals: ProofVisualConfig[] = [
  {
    kind: 'stat-panel',
    sectionId: 'exposure',
    proofIntent: 'Three exposure stats: growth, talent, operations',
    i18nKey: 'home.exposure',
    statKeys: ['growth', 'talent', 'ops'],
  },
  {
    kind: 'react-demo',
    sectionId: 'coverage-growth',
    proofIntent: 'AI Employee responds to inbound 24/7',
    demoId: 'chat-preview',
    variant: 'dashboard',
    i18nKey: 'home.coverageGrowth',
  },
  {
    kind: 'react-demo',
    sectionId: 'coverage-talent',
    proofIntent: 'Certificate without portfolio evidence',
    demoId: 'portfolio-gap',
    i18nKey: 'home.coverageTalent',
  },
  {
    kind: 'comparison',
    sectionId: 'coverage-operations',
    proofIntent: 'Manual workflow vs connected growth loop',
    i18nKey: 'home.coverageOperations',
  },
  {
    kind: 'react-demo',
    sectionId: 'proof',
    proofIntent: 'Named client logos',
    demoId: 'client-logos',
    i18nKey: 'home.proof',
  },
  {
    kind: 'diagram',
    sectionId: 'process',
    proofIntent: 'Digni installer process',
    diagramId: 'process',
    i18nKey: 'home.process',
  },
]

export function getHomeProofVisual(sectionId: string): ProofVisualConfig | undefined {
  return homeProofVisuals.find((v) => v.sectionId === sectionId)
}
