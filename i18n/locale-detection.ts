import type { Locale } from './routing'
import { locales, defaultLocale } from './routing'

/**
 * Map ISO 3166-1 alpha-2 country codes to preferred locale for that country.
 * Used when x-vercel-ip-country is present.
 */
const countryToLocale: Record<string, Locale> = {
  US: 'us-en',
  CA: 'us-en', // overridden by accept-language if user prefers French
  FR: 'fr-fr',
  DE: 'de-de',
  AT: 'de-de',
  // CH handled above (fr/de by preference)
  ES: 'es-es',
  MX: 'es-es',
  SA: 'sa-ar',
  AE: 'sa-ar',
  EG: 'sa-ar',
  // Add more as needed
}

/**
 * Parse accept-language header and return ordered list of (language, quality).
 * e.g. "fr-FR,fr;q=0.9,en;q=0.8" -> [['fr', 1], ['fr', 0.9], ['en', 0.8]]
 */
function parseAcceptLanguage(header: string | null): Array<{ lang: string; q: number }> {
  if (!header) return []
  return header
    .split(',')
    .map((part) => {
      const [locale, qPart] = part.trim().split(';q=')
      const lang = locale?.split('-')[0]?.toLowerCase() ?? ''
      const q = qPart ? parseFloat(qPart) : 1
      return { lang, q }
    })
    .filter((x) => x.lang.length === 2)
    .sort((a, b) => b.q - a.q)
}

/**
 * Best locale for this country + accept-language.
 * - If country has a single obvious locale (e.g. FR -> fr-fr), use it.
 * - If country has multiple (e.g. CA -> us-en or fr-fr), pick by accept-language.
 */
export function detectLocaleFromRequest(
  countryHeader: string | null,
  acceptLanguageHeader: string | null
): Locale {
  const country = countryHeader?.toUpperCase()?.trim() || null
  const preferred = parseAcceptLanguage(acceptLanguageHeader)

  if (country === 'CA') {
    const wantsFr = preferred.some((p) => p.lang === 'fr')
    return wantsFr ? 'fr-fr' : 'us-en'
  }

  if (country === 'CH') {
    const wantsFr = preferred.some((p) => p.lang === 'fr')
    const wantsDe = preferred.some((p) => p.lang === 'de')
    if (wantsFr) return 'fr-fr'
    if (wantsDe) return 'de-de'
    return 'us-en'
  }

  const countryLocale = country ? countryToLocale[country] : null
  if (countryLocale) return countryLocale

  for (const { lang } of preferred) {
    const match = locales.find((l) => l.endsWith(`-${lang}`))
    if (match) return match
  }

  return defaultLocale
}
