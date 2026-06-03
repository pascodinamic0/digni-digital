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

/** Dedicated anchor for the Ads Manager product demo (between calendar and reputation). */
export const FLOW_STEP_ADS_ANCHOR = 'flow-step-ads' as const

/** Optional social planner demo (feature flag); not in the main journey scroll chain. */
export const FLOW_STEP_SOCIAL_PLANNER = 'flow-step-social-planner' as const

export type AiReceptionistFlowStepId = (typeof AI_RECEPTIONIST_FLOW_STEP_IDS)[number]

export type AiReceptionistScrollAnchor =
  | AiReceptionistFlowStepId
  | typeof FLOW_STEP_ADS_ANCHOR
  | typeof FLOW_STEP_SOCIAL_PLANNER

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

/** Summary timeline block after product demos. */
export const FLOW_TIMELINE_ANCHOR = 'timeline-title' as const

type FlowNextLabels = Record<Language, string>

type FlowNextEntry = {
  /** First matching element in the DOM wins (supports optional sections). */
  targets: readonly string[]
  labels: FlowNextLabels
}

const FLOW_NEXT_BY_ANCHOR: Partial<Record<AiReceptionistScrollAnchor, FlowNextEntry>> = {
  'flow-step-1': {
    targets: ['flow-step-2'],
    labels: {
      en: 'Watch the instant reply',
      fr: 'Voir la réponse instantanée',
      ar: 'شاهد الرد الفوري',
      de: 'Sofortantwort ansehen',
      es: 'Ver la respuesta al instante',
    },
  },
  'flow-step-2': {
    targets: ['flow-step-3'],
    labels: {
      en: 'See every contact saved',
      fr: 'Voir chaque contact enregistré',
      ar: 'شاهد كل جهة اتصال محفوظة',
      de: 'Gespeicherte Kontakte ansehen',
      es: 'Ver cada contacto guardado',
    },
  },
  'flow-step-3': {
    targets: ['flow-step-4'],
    labels: {
      en: 'Follow the deal pipeline',
      fr: 'Suivre le pipeline',
      ar: 'تابع مسار الصفقات',
      de: 'Pipeline verfolgen',
      es: 'Seguir el pipeline',
    },
  },
  'flow-step-4': {
    targets: ['flow-step-5'],
    labels: {
      en: 'Watch the calendar fill',
      fr: 'Voir le calendrier se remplir',
      ar: 'شاهد المواعيد تُحجز تلقائياً',
      de: 'Kalender füllt sich live',
      es: 'Ver llenarse el calendario',
    },
  },
  'flow-step-5': {
    targets: [FLOW_STEP_ADS_ANCHOR],
    labels: {
      en: 'Open paid growth',
      fr: 'Ouvrir la croissance payante',
      ar: 'افتح النمو المدفوع',
      de: 'Paid Growth öffnen',
      es: 'Abrir crecimiento de pago',
    },
  },
  [FLOW_STEP_ADS_ANCHOR]: {
    targets: ['flow-step-6'],
    labels: {
      en: 'See ratings climb',
      fr: 'Voir les notes monter',
      ar: 'شاهد التقييمات ترتفع',
      de: 'Bewertungen steigen sehen',
      es: 'Ver subir las valoraciones',
    },
  },
  'flow-step-6': {
    targets: [FLOW_TIMELINE_ANCHOR],
    labels: {
      en: 'Map the full journey',
      fr: 'Cartographier le parcours complet',
      ar: 'ارسم الرحلة كاملة',
      de: 'Gesamte Journey ansehen',
      es: 'Ver el recorrido completo',
    },
  },
}

export function resolveFlowScrollAnchor(
  step: 1 | 2 | 3 | 4 | 5 | 6,
  anchorId?: AiReceptionistScrollAnchor,
): AiReceptionistScrollAnchor {
  return anchorId ?? flowStepAnchor(step)
}

export function getFlowNextCta(
  locale: Language,
  step: 1 | 2 | 3 | 4 | 5 | 6,
  anchorId?: AiReceptionistScrollAnchor,
): { label: string; targets: readonly string[] } | null {
  const current = resolveFlowScrollAnchor(step, anchorId)
  const entry = FLOW_NEXT_BY_ANCHOR[current]
  if (!entry) return null
  return {
    label: entry.labels[locale] ?? entry.labels.en,
    targets: entry.targets,
  }
}

export function scrollToFlowTargets(targets: readonly string[]): void {
  if (typeof document === 'undefined') return
  for (const id of targets) {
    const el = document.getElementById(id)
    if (!el) continue
    const top = el.getBoundingClientRect().top + window.scrollY - 96
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
    return
  }
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
