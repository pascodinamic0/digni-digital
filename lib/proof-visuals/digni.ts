import type { ProofVisualConfig } from './types'

export const digniProofVisuals: ProofVisualConfig[] = [
  {
    kind: 'react-demo',
    sectionId: 'diagnostic',
    proofIntent: 'DigniGuide chat diagnostic',
    demoId: 'chat-preview',
    variant: 'dashboard',
    i18nKey: 'digni.diagnostic',
  },
  {
    kind: 'react-demo',
    sectionId: 'assessment',
    proofIntent: 'Exposure map result',
    demoId: 'assessment-result',
    i18nKey: 'digni.assessment',
  },
  {
    kind: 'react-demo',
    sectionId: 'booking',
    proofIntent: 'Next step after diagnostic',
    demoId: 'chat-preview',
    variant: 'dashboard',
    i18nKey: 'digni.booking',
  },
]

export function getDigniProofVisual(sectionId: string): ProofVisualConfig | undefined {
  return digniProofVisuals.find((v) => v.sectionId === sectionId)
}
