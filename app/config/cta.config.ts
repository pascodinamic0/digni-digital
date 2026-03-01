/**
 * Centralized CTA (Call-to-Action) Configuration
 *
 * For region-specific booking URL, promo codes, and contact info,
 * use getRegionalConfig(locale) from '@/lib/getRegionalConfig' (e.g. with useLocale() from LocaleContext).
 */

export const ctaConfig = {
  // ============================================
  // PRIMARY BOOKING LINK
  // Update this URL to change all booking buttons
  // ============================================
  bookingUrl: 'https://calendar.app.google/xP2APV1Zqbke8JKu6',

  // ============================================
  // BUTTON TEXT VARIANTS
  // Use different text for different contexts
  // ============================================
  buttonText: {
    // Navigation & Header
    getStarted: 'Get Started',
    
    // Primary CTAs
    bookStrategy: 'Book a Strategy Call',
    bookConsultation: 'Book Your Free Consultation',
    scheduleConsultation: 'Schedule Consultation',
    
    // Secondary CTAs
    bookDemo: 'Book a Demo',
    getSimilarResults: 'Get Similar Results',
    
    // Blog & Content CTAs
    bookStrategicConsultation: 'Book a strategic consultation',
    bookAConsultation: 'Book a consultation',
    
    // Generic
    exploreProducts: 'Explore Our Products',
    startProject: 'Start Your Project',
    discussProject: 'Discuss Your Project',
  },

  // ============================================
  // LINK BEHAVIOR
  // ============================================
  target: '_blank' as const,
  rel: 'noopener noreferrer',
}

// Helper function to get the booking URL
export const getBookingUrl = () => ctaConfig.bookingUrl

// Helper function to get booking link props
export const getBookingLinkProps = () => ({
  href: ctaConfig.bookingUrl,
  target: ctaConfig.target,
  rel: ctaConfig.rel,
})
