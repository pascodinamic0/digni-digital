import type { ProofVisualConfig } from './types'

export const aboutProofVisuals: ProofVisualConfig[] = [
  {
    kind: 'diagram',
    sectionId: 'story',
    proofIntent: 'Installer timeline',
    diagramId: 'process',
    i18nKey: 'about.story',
  },
  {
    kind: 'diagram',
    sectionId: 'approach',
    proofIntent: 'Identify through optimize',
    diagramId: 'process',
    i18nKey: 'about.approach',
  },
  {
    kind: 'react-demo',
    sectionId: 'differentiator',
    proofIntent: 'Named clients we install for',
    demoId: 'client-logos',
    i18nKey: 'about.differentiator',
  },
]

export function getAboutProofVisual(sectionId: string): ProofVisualConfig | undefined {
  return aboutProofVisuals.find((v) => v.sectionId === sectionId)
}
