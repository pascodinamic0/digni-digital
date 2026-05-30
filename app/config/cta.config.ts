/**
 * Centralized CTA (Call-to-Action) Configuration
 *
 * For region-specific booking URL, promo codes, and contact info,
 * use getRegionalConfig(locale) from '@/lib/getRegionalConfig' (e.g. with useLocale() from LocaleContext).
 *
 * For localized button text, use getCtaButtonText(language) - components should pass language from useLanguage().
 */

import { translations } from '@/app/config/translations'
import type { Language } from '@/app/i18n/translations'

/** Get localized CTA button text. Use in components with useLanguage() from LocaleContext. */
export function getCtaButtonText(language: Language) {
  return translations[language].cta
}

/** Get localized secondary in-section CTA text (e.g. "Contact us to learn more"). */
export function getSecondaryCtaText(language: Language) {
  return translations[language].cta.contactUsToLearnMore
}

export const ctaConfig = {
  /** Primary site CTA — DigniGuide intelligent chat */
  digniPath: '/digni',

  /** Secondary — book demo / onboarding / sales call (after chat qualification) */
  bookingUrl: 'https://calendar.app.google/xP2APV1Zqbke8JKu6',

  buttonText: {
    getStarted: 'Talk to DigniGuide',
    talkToDigniGuide: 'Talk to DigniGuide',
    bookStrategy: 'Book a Strategy Call',
    bookConsultation: 'Book Your Free Consultation',
    scheduleConsultation: 'Schedule Consultation',
    bookDemo: 'Book Onboarding Demo',
    getSimilarResults: 'Get Similar Results',
    bookStrategicConsultation: 'Book a strategic consultation',
    bookAConsultation: 'Book a consultation',
    exploreProducts: 'Explore Our Products',
    startProject: 'Start Your Project',
    discussProject: 'Discuss Your Project',
  },

  target: '_blank' as const,
  rel: 'noopener noreferrer',
}

export const getDigniPath = () => ctaConfig.digniPath

export const getBookingUrl = () => ctaConfig.bookingUrl

export const getBookingLinkProps = () => ({
  href: ctaConfig.bookingUrl,
  target: ctaConfig.target,
  rel: ctaConfig.rel,
})

export type CtaDestination = 'digni' | 'booking'

export const getPrimaryCtaHref = (destination: CtaDestination = 'digni') =>
  destination === 'booking' ? ctaConfig.bookingUrl : ctaConfig.digniPath

export const getPrimaryCtaLinkProps = (destination: CtaDestination = 'digni') => {
  if (destination === 'booking') return getBookingLinkProps()
  return { href: ctaConfig.digniPath } as const
}
