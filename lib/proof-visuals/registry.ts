import type { Language } from '@/app/config/translations'
import type { ProofPageId, ProofVisualConfig } from './types'
import { homeProofVisuals, getHomeProofVisual } from './home'
import { aiReceptionistProofVisuals, getAiReceptionistProofVisual } from './ai-receptionist'
import { futureReadyProofVisuals, getFutureReadyProofVisual } from './future-ready'
import { agenticProofVisuals, getAgenticProofVisual } from './agentic-systems'
import { aboutProofVisuals, getAboutProofVisual } from './about'
import { solutionsProofVisuals, getSolutionsProofVisual } from './solutions'
import { productsProofVisuals, getProductsProofVisual } from './products'
import { digniProofVisuals, getDigniProofVisual } from './digni'

const PAGE_VISUALS: Record<ProofPageId, ProofVisualConfig[]> = {
  home: homeProofVisuals,
  'ai-receptionist': aiReceptionistProofVisuals,
  'future-ready': futureReadyProofVisuals,
  'agentic-systems': agenticProofVisuals,
  about: aboutProofVisuals,
  solutions: solutionsProofVisuals,
  products: productsProofVisuals,
  digni: digniProofVisuals,
}

export function getProofVisualsForPage(page: ProofPageId): ProofVisualConfig[] {
  return PAGE_VISUALS[page]
}

export function getProofVisual(page: ProofPageId, sectionId: string): ProofVisualConfig | undefined {
  switch (page) {
    case 'home':
      return getHomeProofVisual(sectionId)
    case 'ai-receptionist':
      return getAiReceptionistProofVisual(sectionId)
    case 'future-ready':
      return getFutureReadyProofVisual(sectionId)
    case 'agentic-systems':
      return getAgenticProofVisual(sectionId)
    case 'about':
      return getAboutProofVisual(sectionId)
    case 'solutions':
      return getSolutionsProofVisual(sectionId)
    case 'products':
      return getProductsProofVisual(sectionId)
    case 'digni':
      return getDigniProofVisual(sectionId)
    default:
      return undefined
  }
}

export function getAllProofVisualPrompts(): Array<{ page: ProofPageId; sectionId: string; proofIntent: string; assetPath?: string }> {
  return (Object.entries(PAGE_VISUALS) as [ProofPageId, ProofVisualConfig[]][]).flatMap(
    ([page, configs]) =>
      configs
        .filter((c) => c.kind === 'editorial-image')
        .map((c) => ({
          page,
          sectionId: c.sectionId,
          proofIntent: c.proofIntent,
          assetPath: c.kind === 'editorial-image' ? c.assetPath : undefined,
        }))
  )
}

export type { ProofPageId, ProofVisualConfig, ProofVisualKind } from './types'
export { PROOF_ASSETS } from './assets'
