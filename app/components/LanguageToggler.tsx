'use client'

import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '@/app/context/LanguageContext'
import type { Language } from '@/app/context/LanguageContext'

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
]

interface LanguageTogglerProps {
  /** Compact = icon-only on desktop, full = always show label */
  variant?: 'compact' | 'full'
  className?: string
}

export default function LanguageToggler({ variant = 'compact', className = '' }: LanguageTogglerProps) {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    if (open) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  const current = languages.find((l) => l.code === language) ?? languages[0]

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
          {languages.map(({ code, label, flag }) => (
            <button
              key={code}
              type="button"
              role="menuitem"
              onClick={() => {
                setLanguage(code)
                setOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors first:rounded-t-xl last:rounded-b-xl ${
                code === language
                  ? 'bg-accent/20 text-accent'
                  : 'text-muted hover:bg-foreground/5 hover:text-text'
              }`}
            >
              <span aria-hidden className="text-lg">{flag}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
