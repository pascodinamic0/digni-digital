import type { ProofVisualConfig } from './types'

export const productsProofVisuals: ProofVisualConfig[] = [
  {
    kind: 'react-demo',
    sectionId: 'proposal-agent',
    proofIntent: 'ProposalAgent product workflow UI',
    demoId: 'proposal-agent',
    i18nKey: 'products.proposalAgent',
  },
  {
    kind: 'stat-panel',
    sectionId: 'social-proof',
    proofIntent: 'Product usage stats',
    i18nKey: 'products.socialProof',
    statKeys: ['stat1', 'stat2', 'stat3'],
  },
  {
    kind: 'react-demo',
    sectionId: 'coming-soon',
    proofIntent: 'Live products in the suite',
    demoId: 'product-suite',
    i18nKey: 'products.comingSoon',
  },
]

export function getProductsProofVisual(sectionId: string): ProofVisualConfig | undefined {
  return productsProofVisuals.find((v) => v.sectionId === sectionId)
}
