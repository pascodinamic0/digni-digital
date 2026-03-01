/**
 * CTAButton - Reusable Call-to-Action Button Component
 * 
 * Uses centralized configuration for the booking URL.
 * Update the URL in app/config/cta.config.ts to change all CTA buttons.
 */

import { ctaConfig, getBookingLinkProps } from '@/app/config/cta.config'

interface CTAButtonProps {
  /** Button text - defaults to "Get Started" */
  text?: string
  /** Accessible label for screen readers - defaults to "Book a consultation" when not provided */
  'aria-label'?: string
  /** Visual variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  /** Button size */
  size?: 'sm' | 'md' | 'lg'
  /** Additional CSS classes */
  className?: string
  /** Whether to include arrow icon */
  showArrow?: boolean
  /** Full width button */
  fullWidth?: boolean
}

export function CTAButton({
  text = ctaConfig.buttonText.getStarted,
  'aria-label': ariaLabel = 'Book a consultation',
  variant = 'primary',
  size = 'md',
  className = '',
  showArrow = false,
  fullWidth = false,
}: CTAButtonProps) {
  const linkProps = getBookingLinkProps()

  // Size classes
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'px-6 py-3',
    lg: 'text-lg px-8 py-4',
  }

  // Variant classes
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-secondary border-accent text-accent hover:bg-accent hover:text-background',
    ghost: 'text-accent hover:text-accent-light hover:underline',
  }

  const baseClasses = `
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${showArrow ? 'inline-flex items-center gap-2 group' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ')

  return (
    <a
      href={linkProps.href}
      target={linkProps.target}
      rel={linkProps.rel}
      aria-label={ariaLabel}
      className={baseClasses}
    >
      <span>{text}</span>
      {showArrow && (
        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      )}
    </a>
  )
}

/**
 * CTAButtonStyled - For custom styled CTA buttons that need the booking URL
 * 
 * This is useful when you need full control over the styling
 * but still want to use the centralized booking URL.
 */
interface CTAButtonStyledProps {
  text?: string
  /** Accessible label for screen readers - defaults to "Book a consultation" when not provided */
  'aria-label'?: string
  className?: string
  showArrow?: boolean
  children?: React.ReactNode
}

export function CTAButtonStyled({
  text,
  'aria-label': ariaLabel = 'Book a consultation',
  className = '',
  showArrow = false,
  children,
}: CTAButtonStyledProps) {
  const linkProps = getBookingLinkProps()

  return (
    <a
      href={linkProps.href}
      target={linkProps.target}
      rel={linkProps.rel}
      aria-label={ariaLabel}
      className={className}
    >
      {children || (
        <>
          <span>{text || ctaConfig.buttonText.getStarted}</span>
          {showArrow && (
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          )}
        </>
      )}
    </a>
  )
}

export default CTAButton
