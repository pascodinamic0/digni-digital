'use client'

import { useEffect, useState } from 'react'

interface ScrollIndicatorProps {
  direction?: 'down' | 'up'
  className?: string
  onClick?: () => void
}

export default function ScrollIndicator({
  direction = 'down',
  className = '',
  onClick,
}: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let raf = 0
    const handleScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const next =
          direction === 'down'
            ? window.scrollY < window.innerHeight * 0.8
            : window.scrollY > 100
        setIsVisible((prev) => (prev === next ? prev : next))
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [direction])

  if (!isVisible) return null

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (direction === 'down') {
      window.scrollTo({ top: window.scrollY + window.innerHeight * 0.8, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <button
      type="button"
      className={`scroll-hint flex flex-col items-center gap-2 cursor-pointer group ${className}`}
      onClick={handleClick}
      aria-label={direction === 'down' ? 'Scroll down' : 'Scroll to top'}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-accent group-hover:text-accent/80 transition-colors"
        aria-hidden
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
      <span className="text-xs text-muted font-medium uppercase tracking-wider opacity-70">
        {direction === 'down' ? 'Scroll' : 'Top'}
      </span>
    </button>
  )
}
