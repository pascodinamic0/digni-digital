/**
 * CTALink - Inline Call-to-Action Link Component
 * 
 * Used for inline links in blog content and other text.
 * Uses centralized configuration for the booking URL.
 * Update the URL in app/config/cta.config.ts to change all CTA links.
 */

import { ctaConfig, getBookingLinkProps } from '@/app/config/cta.config'

interface CTALinkProps {
  /** Link text - defaults to "Book a consultation" */
  text?: string
  /** Accessible label for screen readers - defaults to link text when not provided */
  'aria-label'?: string
  /** Additional CSS classes */
  className?: string
}

export function CTALink({
  text = ctaConfig.buttonText.bookAConsultation,
  'aria-label': ariaLabel,
  className = '',
}: CTALinkProps) {
  const linkProps = getBookingLinkProps()

  return (
    <a
      href={linkProps.href}
      target={linkProps.target}
      rel={linkProps.rel}
      aria-label={ariaLabel ?? text}
      className={className}
    >
      {text}
    </a>
  )
}

/**
 * Helper function to generate CTA link HTML string
 * Used in blog content where we need inline HTML strings
 */
export function getCTALinkHtml(text: string = ctaConfig.buttonText.bookAConsultation): string {
  return `<a href="${ctaConfig.bookingUrl}" target="${ctaConfig.target}" rel="${ctaConfig.rel}">${text}</a>`
}

/**
 * Helper to create booking link for use in JSX strings or templates
 */
export function getBookingLink() {
  return ctaConfig.bookingUrl
}

export default CTALink
