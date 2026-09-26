import type { ProofVisualConfig } from './types'

export const futureReadyProofVisuals: ProofVisualConfig[] = [
  {
    kind: 'react-demo',
    sectionId: 'problem',
    proofIntent: 'Certificate without portfolio evidence',
    demoId: 'portfolio-gap',
    i18nKey: 'futureReady.problem',
  },
  {
    kind: 'stat-panel',
    sectionId: 'outcomes',
    proofIntent: 'Knowledge, capability, evidence, honest GS Laricharde status',
    i18nKey: 'futureReady.outcomes',
    statKeys: ['stat1', 'stat2', 'stat3'],
  },
  {
    kind: 'react-demo',
    sectionId: 'case-study',
    proofIntent: 'Named school partnership',
    demoId: 'client-logos',
    i18nKey: 'futureReady.caseStudy',
  },
  {
    kind: 'diagram',
    sectionId: 'skills',
    proofIntent: 'Future Ready process',
    diagramId: 'process',
    i18nKey: 'futureReady.skills',
  },
]

export function getFutureReadyProofVisual(sectionId: string): ProofVisualConfig | undefined {
  return futureReadyProofVisuals.find((v) => v.sectionId === sectionId)
}
