import type { ProofVisualConfig } from './types'
import { PROOF_ASSETS } from './assets'

export const aiReceptionistProofVisuals: ProofVisualConfig[] = [
  {
    kind: 'stat-panel',
    sectionId: 'problem-stats',
    proofIntent: 'Cost of unanswered inbound',
    i18nKey: 'aiReceptionist.problemStats',
    statKeys: ['stat1', 'stat2', 'stat3'],
  },
  {
    kind: 'proof-carousel',
    sectionId: 'proof',
    proofIntent: 'Named case study carousel',
    i18nKey: 'aiReceptionist.proof',
  },
  {
    kind: 'editorial-image',
    sectionId: 'mobile-app',
    proofIntent: 'Real mobile app mockup asset',
    assetPath: PROOF_ASSETS.aiReceptionist.mobileApp,
    i18nKey: 'aiReceptionist.mobileApp',
  },
  {
    kind: 'diagram',
    sectionId: 'inbound-flow',
    proofIntent: 'Inbound source map',
    diagramId: 'inbound-map',
    i18nKey: 'aiReceptionist.inboundFlow',
  },
]

export function getAiReceptionistProofVisual(sectionId: string): ProofVisualConfig | undefined {
  return aiReceptionistProofVisuals.find((v) => v.sectionId === sectionId)
}
