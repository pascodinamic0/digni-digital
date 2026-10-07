import { routing } from '@/i18n/routing'

export const locales = routing.locales
export type Locale = (typeof locales)[number]
export type Lang = 'en' | 'fr' | 'es' | 'de' | 'ar'
export type L = Record<Lang, string>
export type LL = Record<Lang, string[]>

export const localeMeta: Record<Locale, { label: string; short: string; lang: Lang; hreflang: string; dir: 'ltr' | 'rtl'; og: string }> = {
  'us-en': { label: 'English', short: 'EN', lang: 'en', hreflang: 'en', dir: 'ltr', og: 'en_US' },
  'fr-fr': { label: 'Français', short: 'FR', lang: 'fr', hreflang: 'fr', dir: 'ltr', og: 'fr_FR' },
  'es-es': { label: 'Español', short: 'ES', lang: 'es', hreflang: 'es', dir: 'ltr', og: 'es_ES' },
  'de-de': { label: 'Deutsch', short: 'DE', lang: 'de', hreflang: 'de', dir: 'ltr', og: 'de_DE' },
  'sa-ar': { label: 'العربية', short: 'AR', lang: 'ar', hreflang: 'ar', dir: 'rtl', og: 'ar_SA' },
}

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v)
export const langOf = (locale: string): Lang => (isLocale(locale) ? localeMeta[locale].lang : 'en')

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://digni-digital-llc.com'

/** Single source for contact points used across the site. */
export const LINKS = {
  booking: 'https://calendar.app.google/xP2APV1Zqbke8JKu6',
  whatsapp: 'https://wa.me/243822378097',
  whatsappLabel: '+243 822 378 097',
  phoneDrc: '+243822378097',
  phoneDrcLabel: '+243 822 378 097',
  phoneKenya: '+254702593518',
  phoneKenyaLabel: '+254 702 593 518',
  email: 'growth@digni-digital-llc.com',
  linkedin: 'https://www.linkedin.com/company/digni-digital-llc',
}
