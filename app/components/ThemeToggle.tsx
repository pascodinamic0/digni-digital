'use client'

import { useTheme } from './ThemeProvider'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full bg-surface border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transition-all duration-200"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      role="switch"
      aria-checked={isDark}
    >
      {/* Track */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        {/* Light mode background gradient */}
        <div 
          className={`absolute inset-0 transition-opacity duration-300 ${
            isDark ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            background: 'var(--toggle-gradient-light)'
          }}
        />
        {/* Dark mode background gradient */}
        <div 
          className={`absolute inset-0 transition-opacity duration-300 ${
            isDark ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'var(--toggle-gradient-dark)'
          }}
        />
      </div>

      {/* Toggle Circle */}
      <motion.div
        className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center"
        animate={{
          x: isDark ? 24 : 0
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30
        }}
      >
        {/* Icon inside toggle */}
        {isDark ? (
          <motion.svg
            key="moon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            className="w-3.5 h-3.5 text-text"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </motion.svg>
        ) : (
          <motion.svg
            key="sun"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            className="w-3.5 h-3.5 text-warning"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </motion.svg>
        )}
      </motion.div>
    </button>
  )
}
