'use client'

import { createContext, useContext, useState, useEffect, useCallback } from 'react'

export type Language = 'en' | 'fr' | 'ar'

const STORAGE_KEY = 'digni-language'
const COOKIE_NAME = 'digni-language'
const COOKIE_MAX_AGE_DAYS = 365

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null
    if (stored && (stored === 'en' || stored === 'fr' || stored === 'ar')) {
      setLanguageState(stored)
    }
    setMounted(true)
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    if (typeof window === 'undefined') return
    localStorage.setItem(STORAGE_KEY, lang)
    document.cookie = `${COOKIE_NAME}=${lang}; path=/; max-age=${COOKIE_MAX_AGE_DAYS * 86400}; SameSite=Lax`
    // Reload to ensure all content (including static/cached) renders in new language
    window.location.reload()
  }, [])

  useEffect(() => {
    if (mounted && typeof document !== 'undefined') {
      document.documentElement.lang = language === 'ar' ? 'ar' : language === 'fr' ? 'fr' : 'en'
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    }
  }, [language, mounted])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
