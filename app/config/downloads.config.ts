/**
 * Download assets configuration
 *
 * PDF files live in /public. Name them by language for clarity:
 *
 * Future Ready Graduate:
 * - en: Digni Digital - Future-Ready Graduate Program.pdf (existing)
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

export const downloadsConfig = {
  futureReadyGraduate: {
    en: '/Digni%20Digital%20-%20Future-Ready%20Graduate%20Program.pdf',
    fr: '/future-ready-graduate-fr.pdf',
    ar: '/future-ready-graduate-ar.pdf',
  },
  aiEmployee: {
    en: '/The_AI_Employee_Growth_Engine.pdf',
    fr: '/ai-employee-fr.pdf',
    ar: '/ai-employee-ar.pdf',
  },
} as const
