import type { EcosystemTranslations } from './ecosystem'

/** Minimal slice of `home.whatWeDo` needed to render EcosystemStrip. */
export type HomeWhatWeDoEcosystemSource = {
  badge: string
  title: string
  subtitle: string
  forBusinesses: string
  forSchools: string
  forUniqueNeeds: string
  aiEmployeeTitle: string
  aiEmployeeDesc: string
  futureReadyTitle: string
  futureReadyDesc: string
  agenticSoftwaresTitle: string
  agenticSoftwaresDesc: string
}

function firstParagraph(text: string) {
  const part = text.split(/\n\n/)[0]?.trim()
  return part || text
}

/** Maps existing home copy to Grow → Learn → Scale strip (no duplicate i18n keys). */
export function ecosystemFromHomeWhatWeDo(w: HomeWhatWeDoEcosystemSource): EcosystemTranslations {
  return {
    badge: w.badge,
    title: w.title,
    titleHighlight: w.subtitle,
    growLabel: w.forBusinesses,
    growTitle: w.aiEmployeeTitle,
    growDesc: firstParagraph(w.aiEmployeeDesc),
    learnLabel: w.forSchools,
    learnTitle: w.futureReadyTitle,
    learnDesc: firstParagraph(w.futureReadyDesc),
    scaleLabel: w.forUniqueNeeds,
    scaleTitle: w.agenticSoftwaresTitle,
    scaleDesc: firstParagraph(w.agenticSoftwaresDesc),
  }
}
