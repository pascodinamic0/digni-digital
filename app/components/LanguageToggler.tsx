'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname } from '@/i18n/navigation'
import { useLocale } from '@/app/context/LocaleContext'
import type { Locale } from '@/i18n/routing'

const localeOptions: { locale: Locale; label: string; flag: string }[] = [
  { locale: 'us-en', label: 'English', flag: '🇺🇸' },
  { locale: 'fr-fr', label: 'Français', flag: '🇫🇷' },
  { locale: 'de-de', label: 'Deutsch', flag: '🇩🇪' },
  { locale: 'es-es', label: 'Español', flag: '🇪🇸' },
  { locale: 'sa-ar', label: 'العربية', flag: '🇸🇦' },
]

interface LanguageTogglerProps {
  variant?: 'compact' | 'full'
  className?: string
}

export default function LanguageToggler({ variant = 'compact', className = '' }: LanguageTogglerProps) {
  const currentLocale = useLocale()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    if (open) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  const current = localeOptions.find((l) => l.locale === currentLocale) ?? localeOptions[0]

  return (
    <div className={`relative ${className}`} ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`Language: ${current.label}. Change language`}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-muted hover:text-text hover:bg-foreground/5 transition-colors text-sm font-medium"
      >
        <span aria-hidden className="text-lg">
          {current.flag}
        </span>
        {variant === 'full' && (
          <span className="hidden sm:inline">{current.label}</span>
        )}
        <svg
          className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute top-full right-0 mt-2 min-w-[10rem] py-1 bg-surface border border-border-light rounded-xl shadow-xl z-50"
        >
          {localeOptions.map(({ locale, label, flag }) => {
            const href = `/${locale}${pathname === '/' ? '' : pathname}`
            return (
              <a
                key={locale}
                href={href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className={`block w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors first:rounded-t-xl last:rounded-b-xl ${
                  locale === currentLocale
                    ? 'bg-accent/20 text-accent'
                    : 'text-muted hover:bg-foreground/5 hover:text-text'
                }`}
              >
                <span aria-hidden className="text-lg">{flag}</span>
                <span>{label}</span>
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
