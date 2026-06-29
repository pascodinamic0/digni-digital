import { defineRouting } from 'next-intl/routing'

/**
 * Regional locales: [country]-[language] (e.g. us-en, fr-fr).
 * Used for routing, hreflang, and regional config.
 * One locale per language (no regional variants like ca-en/ca-fr).
 */
export const locales = ['us-en', 'fr-fr', 'es-es', 'de-de', 'sa-ar'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'us-en'

/**
 * Retired locale URL prefixes → canonical locale (301 for Search Console / backlinks).
 * Regional variants were consolidated to one locale per language (see comment on `locales`).
 */
export const legacyLocaleRedirects: Record<string, Locale> = {
  'ca-en': 'us-en',
  'ca-fr': 'fr-fr',
}

/** BCP 47 tags for `<link rel="alternate" hreflang>` — language first, then region (not route segments like us-en). */
export const localeToHreflang: Record<Locale, string> = {
  'us-en': 'en-US',
  'fr-fr': 'fr-FR',
  'es-es': 'es-ES',
  'de-de': 'de-DE',
  'sa-ar': 'ar-SA',
}

/** Locales that share the same language (for message fallback) */
export const localeToMessageLocale: Record<Locale, Locale> = {
  'us-en': 'us-en',
  'fr-fr': 'fr-fr',
  'es-es': 'es-es',
  'de-de': 'de-de',
  'sa-ar': 'sa-ar',
}

export const routing = defineRouting({
  locales: [...locales],
  defaultLocale,
  localePrefix: 'always',
  localeDetection: true,
})

/** Extract country code from locale (e.g. us-en -> us) */
export function getCountryFromLocale(locale: string): string {
  const part = locale.split('-')[0]
  return part?.toLowerCase() ?? 'us'
}

/** Extract language code from locale (e.g. us-en -> en) */
export function getLanguageFromLocale(locale: string): string {
  const part = locale.split('-')[1]
  return part?.toLowerCase() ?? 'en'
}
