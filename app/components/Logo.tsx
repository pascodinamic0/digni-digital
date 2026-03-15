'use client'

import { Link } from '@/i18n/navigation'

const LOGO_MARK_SIZE = 40

interface LogoProps {
  href?: string
  label?: string
  className?: string
}

export default function Logo({ href = '/', label = 'Digni Digital LLC', className = '' }: LogoProps) {
  const content = (
    <>
      <span className="logo-mark flex items-center justify-center shrink-0 text-accent" aria-hidden>
        <svg
          width={LOGO_MARK_SIZE}
          height={LOGO_MARK_SIZE}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:[&_.bar]:skew-x-0"
        >
          <rect
            className="bar"
            x="4"
            y="8"
            width="10"
            height="24"
            rx="2"
            fill="currentColor"
            fillOpacity="0.9"
            style={{ transform: 'skewX(-12deg)', transformOrigin: 'center' }}
          />
          <rect
            className="bar"
            x="26"
            y="8"
            width="10"
            height="24"
            rx="2"
            fill="currentColor"
            fillOpacity="0.4"
            style={{ transform: 'skewX(12deg)', transformOrigin: 'center' }}
          />
        </svg>
      </span>
      <span className="font-body font-semibold text-xl tracking-tight text-text truncate max-w-[calc(210px-48px)]">
        {label}
      </span>
    </>
  )

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 group transition-colors duration-300 ${className}`}
      aria-label={label}
    >
      {content}
    </Link>
  )
}
