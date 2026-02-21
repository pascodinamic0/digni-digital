/**
 * Download assets configuration
 *
 * PDF files live in /public. Name them by language for clarity:
 *
 * Digni Digital Literacy:
 * - en: Digni Digital - Digni Digital Literacy Program.pdf (existing)
 * - fr: future-ready-graduate-fr.pdf
 * - ar: future-ready-graduate-ar.pdf
 *
 * AI Employee:
 * - en: The_AI_Employee_Growth_Engine.pdf (existing)
 * - fr: ai-employee-fr.pdf
 * - ar: ai-employee-ar.pdf
 *
 * Upload PDFs with -fr and -ar suffixes for French and Arabic.
 */

export type DownloadLanguage = 'en' | 'fr' | 'ar'

/** Supported locales for PDF downloads (de/es fall back to en) */
const downloadLocales: DownloadLanguage[] = ['en', 'fr', 'ar']

export function getDownloadUrl(
  config: Record<DownloadLanguage, string>,
  language: string
): string {
  const lang = downloadLocales.includes(language as DownloadLanguage) ? (language as DownloadLanguage) : 'en'
  return config[lang] ?? config.en
}

export const downloadsConfig = {
  futureReadyGraduate: {
    en: '/Digni%20Digital%20-%20Digni%20Digital%20Literacy%20Program.pdf',
    fr: '/future-ready-graduate-fr.pdf',
    ar: '/future-ready-graduate-ar.pdf',
  },
  aiEmployee: {
    en: '/The_AI_Employee_Growth_Engine.pdf',
    fr: '/ai-employee-fr.pdf',
    ar: '/ai-employee-ar.pdf',
  },
} as const
