'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface ScrollIndicatorProps {
  direction?: 'down' | 'up'
  className?: string
  onClick?: () => void
}

export default function ScrollIndicator({ 
  direction = 'down', 
  className = '',
  onClick 
}: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (direction === 'down') {
        setIsVisible(window.scrollY < window.innerHeight * 0.8)
      } else {
        setIsVisible(window.scrollY > 100)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [direction])

  if (!isVisible) return null

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (direction === 'down') {
      window.scrollTo({ 
        top: window.scrollY + window.innerHeight * 0.8, 
        behavior: 'smooth' 
      })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: direction === 'down' ? -10 : 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col items-center gap-2 cursor-pointer group ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={direction === 'down' ? 'Scroll down' : 'Scroll to top'}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleClick()
        }
      }}
    >
      <motion.div
        animate={{ 
          y: direction === 'down' ? [0, 8, 0] : [0, -8, 0]
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
        className="flex flex-col items-center"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-accent group-hover:text-accent/80 transition-colors"
        >
          {direction === 'down' ? (
            <path 
              d="M7 10L12 15L17 10" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          ) : (
            <path 
              d="M17 14L12 9L7 14" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          )}
        </svg>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-accent/60 group-hover:text-accent/50 transition-colors -mt-2"
        >
          {direction === 'down' ? (
            <path 
              d="M7 10L12 15L17 10" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          ) : (
            <path 
              d="M17 14L12 9L7 14" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          )}
        </svg>
      </motion.div>
      <motion.span
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-xs text-muted font-medium uppercase tracking-wider"
      >
        {direction === 'down' ? 'Scroll' : 'Top'}
      </motion.span>
    </motion.div>
  )
}
