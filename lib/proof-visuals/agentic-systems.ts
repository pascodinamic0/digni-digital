import type { ProofVisualConfig } from './types'

export const agenticProofVisuals: ProofVisualConfig[] = [
  {
    kind: 'comparison',
    sectionId: 'problem',
    proofIntent: 'Copy-paste workflow vs connected agents',
    i18nKey: 'agentic.problem',
  },
  {
    kind: 'react-demo',
    sectionId: 'apps',
    proofIntent: 'Live product suite with real links',
    demoId: 'product-suite',
    i18nKey: 'agentic.apps',
  },
  {
    kind: 'stat-panel',
    sectionId: 'case-study',
    proofIntent: 'Named deployment metrics',
    i18nKey: 'agentic.caseStudy',
    statKeys: ['stat1', 'stat2', 'stat3'],
  },
  {
    kind: 'diagram',
    sectionId: 'process',
    proofIntent: 'Agentic installer process',
    diagramId: 'process',
    i18nKey: 'agentic.process',
  },
]

export function getAgenticProofVisual(sectionId: string): ProofVisualConfig | undefined {
  return agenticProofVisuals.find((v) => v.sectionId === sectionId)
}
