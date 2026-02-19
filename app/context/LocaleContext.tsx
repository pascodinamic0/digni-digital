'use client'

import { createContext, useContext } from 'react'

export type Locale = string
export type Language = 'en' | 'fr' | 'ar' | 'de' | 'es'

interface LocaleContextValue {
  locale: Locale
  language: Language
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({
  children,
  locale,
}: {
  children: React.ReactNode
  locale: Locale
}) {
  const lang =
    locale.includes('fr') ? 'fr'
    : locale.includes('ar') ? 'ar'
    : locale.includes('de') ? 'de'
    : locale.includes('es') ? 'es'
    : 'en'
  return (
    <LocaleContext.Provider value={{ locale, language: lang }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocaleContext() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocaleContext must be used within LocaleProvider')
  return ctx
}

/** Language for translations (en/fr/ar). Use with translations[language]. */
export function useLanguage(): Language {
  return useLocaleContext().language
}

/** Full locale (e.g. us-en, fr-fr). Use with getRegionalConfig(locale). */
export function useLocale(): Locale {
  return useLocaleContext().locale
}
