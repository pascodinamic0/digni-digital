'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      const raw = localStorage.getItem('theme')
      const savedTheme: Theme | null =
        raw === 'light' || raw === 'dark' ? raw : null
      // Explicit user choice overrides; otherwise default to dark (not OS preference).
      const initialTheme: Theme = savedTheme ?? 'dark'
      setTheme(initialTheme)
      document.documentElement.setAttribute('data-theme', initialTheme)
    }
  }, [])

  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme)
  }

  // Always provide the context, even during SSR
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
