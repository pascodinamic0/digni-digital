/**
 * Re-export translations from i18n. All components use this for backward compatibility.
 * Full translations include: nav, cta, download, footer, home, blog, about, contact
 */
export { translations } from '@/app/i18n/translations'
export type { Language, TranslationKeys } from '@/app/i18n/translations'

/** @deprecated Use translations[language] - kept for components expecting nested nav/cta/footer */
export type Translations = typeof import('@/app/i18n/translations').translations.en
