/**
 * Download assets configuration
 *
 * PDF files live in /public. Translations that don't have a dedicated
 * PDF yet fall back to the English version automatically.
 *
 * To add a translated PDF, drop it into /public with the filename
 * listed below and remove the null entry:
 *   - future-ready-graduate-fr.pdf
 *   - future-ready-graduate-ar.pdf
 *   - ai-employee-fr.pdf
 *   - ai-employee-ar.pdf
 */

export type DownloadLanguage = 'en' | 'fr' | 'ar'

/** Supported locales for PDF downloads (de/es fall back to en) */
const downloadLocales: DownloadLanguage[] = ['en', 'fr', 'ar']

export function getDownloadUrl(
  config: Record<DownloadLanguage, string | null>,
  language: string
): string {
  const lang = downloadLocales.includes(language as DownloadLanguage) ? (language as DownloadLanguage) : 'en'
  return config[lang] ?? config.en!
}

export function hasDownload(
  config: Record<DownloadLanguage, string | null>,
  language: string
): boolean {
  const lang = downloadLocales.includes(language as DownloadLanguage) ? (language as DownloadLanguage) : 'en'
  return config[lang] != null
}

export const downloadsConfig = {
  futureReadyGraduate: {
    en: '/Digni%20Digital%20-%20Future-Ready%20Graduate%20Program.pdf',
    fr: null,
    ar: null,
  },
  aiEmployee: {
    en: '/The_AI_Employee_Growth_Engine.pdf',
    fr: null,
    ar: null,
  },
} as const
