'use client'

import { useEffect, useState } from 'react'
import { useTheme } from './ThemeProvider'
import { motion } from 'framer-motion'

const toggleButtonClass =
  'relative w-10 h-10 rounded-lg bg-surface-light/50 border border-border-light hover:border-accent/30 focus:outline-none focus:ring-2 focus:ring-2 focus:ring-ring transition-all duration-300 flex items-center justify-center group'

/** Same visuals as motion icons, without animation — avoids SSR/client style drift before mount. */
function StaticThemeIcons({ isDark }: { isDark: boolean }) {
  return (
    <>
      <svg
        className="absolute w-5 h-5 text-accent"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? 'scale(0) rotate(-90deg)' : 'scale(1) rotate(0deg)',
        }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
      <svg
        className="absolute w-5 h-5 text-accent"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(90deg)',
        }}
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    </>
  )
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDark = theme === 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={toggleButtonClass}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
        role="switch"
        aria-checked={isDark}
      >
        <StaticThemeIcons isDark={isDark} />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={toggleButtonClass}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      role="switch"
      aria-checked={isDark}
    >
      <motion.svg
        initial={false}
        animate={{
          scale: isDark ? 0 : 1,
          rotate: isDark ? -90 : 0,
          opacity: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute w-5 h-5 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </motion.svg>

      <motion.svg
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          rotate: isDark ? 0 : 90,
          opacity: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute w-5 h-5 text-accent"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </motion.svg>
    </button>
  )
}
