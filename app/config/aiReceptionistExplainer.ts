import type { Language } from '@/app/i18n/translations'

/**
 * Locale-specific explainer videos for the AI receptionist page.
 * Add entries when assets exist (same section, swapped src + copy per language).
 */
export type AiReceptionistExplainerCopy = {
  src: string
  badge: string
  title: string
  description: string
}

export const aiReceptionistExplainerByLanguage: Partial<
  Record<Language, AiReceptionistExplainerCopy>
> = {
  en: {
    src: '/Aymi Explainer Video .mp4',
    badge: 'Why it breaks',
    title: 'Broken businesses and operations',
    description:
      'A quick walkthrough: what drives leads away, overloads your team, and blocks growth—and why the right infrastructure matters more than working harder.',
  },
  fr: {
    src: '/Entreprises___Opérations_Défaillantes.mp4',
    badge: 'Pourquoi ça casse',
    title: 'Entreprises et opérations défaillantes',
    description:
      'Vue d’ensemble : ce qui fait fuir les leads, alourdit l’équipe et empêche la croissance—et pourquoi l’infrastructure compte plus que l’effort.',
  },
}
