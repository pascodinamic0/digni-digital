'use client'

import { useTheme } from './ThemeProvider'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-lg bg-surface-light/50 border border-border-light hover:border-accent/30 focus:outline-none focus:ring-2 focus:ring-2 focus:ring-ring transition-all duration-300 flex items-center justify-center group"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      role="switch"
      aria-checked={isDark}
    >
      {/* Sun Icon */}
      <motion.svg
        initial={false}
        animate={{
          scale: isDark ? 0 : 1,
          rotate: isDark ? -90 : 0,
          opacity: isDark ? 0 : 1
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute w-5 h-5 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </motion.svg>

      {/* Moon Icon */}
      <motion.svg
        initial={false}
        animate={{
          scale: isDark ? 1 : 0,
          rotate: isDark ? 0 : 90,
          opacity: isDark ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute w-5 h-5 text-accent"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </motion.svg>
    </button>
  )
}
