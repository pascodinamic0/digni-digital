/**
 * CTAButton - Reusable Call-to-Action Button Component
 *
 * Primary destination is DigniGuide (/digni). Use destination="booking" for calendar links.
 */

import { Link } from '@/i18n/navigation'
import { ctaConfig, getBookingLinkProps, type CtaDestination } from '@/app/config/cta.config'

interface CTAButtonProps {
  text?: string
  'aria-label'?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showArrow?: boolean
  fullWidth?: boolean
  destination?: CtaDestination
}

export function CTAButton({
  text = ctaConfig.buttonText.talkToDigniGuide,
  'aria-label': ariaLabel = 'Talk to DigniGuide',
  variant = 'primary',
  size = 'md',
  className = '',
  showArrow = false,
  fullWidth = false,
  destination = 'digni',
}: CTAButtonProps) {
  const sizeClasses = {
    sm: 'text-sm px-4 py-2',
    md: 'px-6 py-3',
    lg: 'text-lg px-8 py-4',
  }

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

  const arrow = showArrow ? (
    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ) : null

  if (destination === 'digni') {
    return (
      <Link href={ctaConfig.digniPath} aria-label={ariaLabel} className={baseClasses}>
        <span>{text}</span>
        {arrow}
      </Link>
    )
  }

  const linkProps = getBookingLinkProps()
  return (
    <a href={linkProps.href} target={linkProps.target} rel={linkProps.rel} aria-label={ariaLabel} className={baseClasses}>
      <span>{text}</span>
      {arrow}
    </a>
  )
}

interface CTAButtonStyledProps {
  text?: string
  'aria-label'?: string
  className?: string
  showArrow?: boolean
  children?: React.ReactNode
  destination?: CtaDestination
}

export function CTAButtonStyled({
  text,
  'aria-label': ariaLabel = 'Talk to DigniGuide',
  className = '',
  showArrow = false,
  children,
  destination = 'digni',
}: CTAButtonStyledProps) {
  if (destination === 'digni') {
    return (
      <Link href={ctaConfig.digniPath} aria-label={ariaLabel} className={className}>
        {children || (
          <>
            <span>{text || ctaConfig.buttonText.talkToDigniGuide}</span>
            {showArrow && (
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            )}
          </>
        )}
      </Link>
    )
  }

  const linkProps = getBookingLinkProps()
  return (
    <a href={linkProps.href} target={linkProps.target} rel={linkProps.rel} aria-label={ariaLabel} className={className}>
      {children || (
        <>
          <span>{text || ctaConfig.buttonText.bookDemo}</span>
          {showArrow && (
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          )}
        </>
      )}
    </a>
  )
}

export default CTAButton
