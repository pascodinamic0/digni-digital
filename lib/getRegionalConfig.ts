import { getCountryFromLocale } from '@/i18n/routing'
import type { Locale } from '@/i18n/routing'

export interface RegionalConfig {
  country: string
  locale: Locale
  currency: string
  /** Active promo codes for this region (e.g. for offers page) */
  activePromoCodes: string[]
  /** Primary contact email for this region */
  contactEmail: string
  /** Booking/calendar URL for strategy calls */
  bookingUrl: string
  /** Optional phone number for display */
  phone?: string
  /** Optional timezone for display/scheduling */
  timezone?: string
}

const defaultConfig: Omit<RegionalConfig, 'country' | 'locale'> = {
  currency: 'USD',
  activePromoCodes: [],
  contactEmail: 'hq@digni-digital-llc.com',
  bookingUrl: 'https://calendar.app.google/xP2APV1Zqbke8JKu6',
  timezone: 'UTC',
}

const regionalOverrides: Partial<Record<string, Partial<Omit<RegionalConfig, 'country' | 'locale'>>>> = {
  us: {
    currency: 'USD',
    activePromoCodes: ['WELCOME2025'],
    contactEmail: 'hq@digni-digital-llc.com',
    bookingUrl: 'https://calendar.app.google/xP2APV1Zqbke8JKu6',
    timezone: 'America/New_York',
  },
  ca: {
    currency: 'CAD',
    activePromoCodes: ['CANADA2025'],
    contactEmail: 'ca@digni-digital-llc.com',
    bookingUrl: 'https://calendar.app.google/xP2APV1Zqbke8JKu6',
    timezone: 'America/Toronto',
  },
  fr: {
    currency: 'EUR',
    activePromoCodes: ['FRANCE2025'],
    contactEmail: 'fr@digni-digital-llc.com',
    bookingUrl: 'https://calendar.app.google/xP2APV1Zqbke8JKu6',
    timezone: 'Europe/Paris',
  },
  de: {
    currency: 'EUR',
    activePromoCodes: ['DEUTSCHLAND2025'],
    contactEmail: 'de@digni-digital-llc.com',
    bookingUrl: 'https://calendar.app.google/xP2APV1Zqbke8JKu6',
    timezone: 'Europe/Berlin',
  },
  es: {
    currency: 'EUR',
    activePromoCodes: ['ESPANA2025'],
    contactEmail: 'es@digni-digital-llc.com',
    bookingUrl: 'https://calendar.app.google/xP2APV1Zqbke8JKu6',
    timezone: 'Europe/Madrid',
  },
  sa: {
    currency: 'SAR',
    activePromoCodes: ['GCC2025'],
    contactEmail: 'me@digni-digital-llc.com',
    bookingUrl: 'https://calendar.app.google/xP2APV1Zqbke8JKu6',
    timezone: 'Asia/Riyadh',
  },
}

/**
 * Returns region-specific config (promo codes, currency, contact, booking URL)
 * based on the locale's country code. Use in server components or API routes.
 */
export function getRegionalConfig(locale: Locale | string): RegionalConfig {
  const country = getCountryFromLocale(locale)
  const overrides = regionalOverrides[country]
  return {
    country,
    locale: locale as Locale,
    ...defaultConfig,
    ...overrides,
  }
}
