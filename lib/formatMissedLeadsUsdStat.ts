import { localeToHreflang, type Locale } from '@/i18n/routing'

/** US SMB missed-leads estimate (USD), single source for compact stat display. */
export const MISSED_LEADS_USD = 62_000_000_000

function intlLocaleForRoute(routeLocale: string): string {
  if (routeLocale in localeToHreflang) {
    return localeToHreflang[routeLocale as Locale]
  }
  return 'en-US'
}

/**
 * Compact USD string for hero stats (e.g. $62B) respecting the active route locale.
 */
export function formatMissedLeadsUsdStat(amountUsd: number, routeLocale: string): string {
  const intlLocale = intlLocaleForRoute(routeLocale)
  return new Intl.NumberFormat(intlLocale, {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 0,
  }).format(amountUsd)
}
