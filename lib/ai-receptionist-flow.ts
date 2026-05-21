import type { Language } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'

export const AI_RECEPTIONIST_FLOW_STEP_IDS = [
  'flow-step-1',
  'flow-step-2',
  'flow-step-3',
  'flow-step-4',
  'flow-step-5',
  'flow-step-6',
] as const

export type AiReceptionistFlowStepId = (typeof AI_RECEPTIONIST_FLOW_STEP_IDS)[number]

export function flowStepAnchor(step: 1 | 2 | 3 | 4 | 5 | 6): AiReceptionistFlowStepId {
  return `flow-step-${step}` as AiReceptionistFlowStepId
}

/** Timeline phase title for step N (client-journey label above demo headline). */
export function getJourneyPhaseTitle(locale: Language, step: 1 | 2 | 3 | 4 | 5 | 6): string {
  const steps = translations[locale]?.aiEmployeeProductDemos?.timeline?.steps
  const fallback = translations.en.aiEmployeeProductDemos.timeline.steps
  const list = steps?.length === 6 ? steps : fallback
  return list[step - 1]?.title ?? ''
}

export function getFlowStepPrefix(locale: Language): string {
  const map: Record<Language, string> = {
    en: 'Step',
    fr: 'Étape',
    ar: 'خطوة',
    de: 'Schritt',
    es: 'Paso',
  }
  return map[locale] ?? 'Step'
}

export function getJourneyDemosIntro(locale: Language): { title: string; subtitle: string } {
  const map: Record<Language, { title: string; subtitle: string }> = {
    en: {
      title: 'The client journey, live',
      subtitle: 'Six steps from first touch to post-sale — each block below is the product at that stage.',
    },
    fr: {
      title: 'Le parcours client, en direct',
      subtitle: 'Six étapes du premier contact à l’après-vente — chaque bloc ci-dessous montre le produit à ce stade.',
    },
    ar: {
      title: 'رحلة العميل، مباشرة',
      subtitle: 'ست خطوات من أول تواصل إلى ما بعد البيع — كل قسم يعرض المنتج في تلك المرحلة.',
    },
    de: {
      title: 'Die Client Journey, live',
      subtitle: 'Sechs Schritte vom Erstkontakt bis After-Sales — jeder Block zeigt das Produkt in dieser Phase.',
    },
    es: {
      title: 'El recorrido del cliente, en vivo',
      subtitle: 'Seis pasos del primer contacto al postventa — cada bloque muestra el producto en esa etapa.',
    },
  }
  return map[locale] ?? map.en
}
