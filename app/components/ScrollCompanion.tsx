'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

type ScrollSection = {
  element: HTMLElement
  label: string
  top: number
}

type ScrollDirection = 'up' | 'down'

const HIDE_DELAY_MS = 1500
const NAV_OFFSET_PX = 88

function cleanLabel(value: string | null | undefined, fallback: string) {
  const compact = value?.replace(/\s+/g, ' ').trim()
  if (!compact) return fallback

  return compact.length > 42 ? `${compact.slice(0, 39).trim()}...` : compact
}

function labelForSection(element: HTMLElement, index: number) {
  const explicitLabel = element.dataset.scrollCompanionLabel || element.dataset.scrollLabel
  const sectionLabel = element.querySelector<HTMLElement>('.section-label')
  const heading = element.querySelector<HTMLElement>('h1, h2, h3')

  if (index === 0) {
    return cleanLabel(explicitLabel || heading?.textContent, 'Start')
  }

  return cleanLabel(explicitLabel || sectionLabel?.textContent || heading?.textContent, `Section ${index + 1}`)
}

function getSections() {
  const discovered = Array.from(document.querySelectorAll<HTMLElement>('main section'))

  return discovered
    .filter((element) => {
      const rect = element.getBoundingClientRect()
      const hasExplicitLabel = Boolean(element.dataset.scrollCompanionLabel || element.dataset.scrollLabel)

      return hasExplicitLabel || (rect.height >= 320 && rect.width > 0)
    })
    .map((element, index) => ({
      element,
      label: labelForSection(element, index),
      top: element.getBoundingClientRect().top + window.scrollY,
    }))
    .sort((a, b) => a.top - b.top)
}

function scrollToSection(section: ScrollSection) {
  const top = Math.max(0, section.element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET_PX)

  window.scrollTo({
    top,
    behavior: 'smooth',
  })
}

function DirectionGlyph({ direction }: { direction: ScrollDirection }) {
  const points = direction === 'up' ? '12 5 5 12 8 12 8 19 16 19 16 12 19 12' : '12 19 19 12 16 12 16 5 8 5 8 12 5 12'

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <polygon points={points} fill="currentColor" />
    </svg>
  )
}

function CompanionButton({
  direction,
  label,
  progress,
  onClick,
}: {
  direction: ScrollDirection
  label: string
  progress: number
  onClick: () => void
}) {
  const reduceMotion = useReducedMotion()
  const isUp = direction === 'up'
  const action = isUp ? 'Back' : 'Next'
  const sideClass = isUp
    ? 'left-1 top-[58%] sm:left-2 sm:top-1/2'
    : 'right-1 top-[58%] sm:right-2 sm:top-1/2'
  const tooltipClass = isUp
    ? 'left-11 text-left origin-left'
    : 'right-11 text-right origin-right'

  const initialX = isUp ? -12 : 12
  const rotateY = reduceMotion ? 0 : isUp ? -8 : 8

  return (
    <motion.button
      type="button"
      aria-label={`${action}: ${label}`}
      onClick={onClick}
      initial={{ opacity: 0, x: initialX, scale: 0.98, rotateY }}
      animate={{ opacity: 0.72, x: 0, scale: 1, rotateY }}
      exit={{ opacity: 0, x: initialX, scale: 0.98, rotateY }}
      whileHover={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1.02, rotateY: 0, z: 10 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: reduceMotion ? 0.12 : 0.22, ease: 'easeOut' }}
      className={`group fixed z-40 grid h-20 w-8 -translate-y-1/2 place-items-center overflow-visible border border-white/10 bg-background/28 text-accent shadow-lg shadow-black/20 outline-none backdrop-blur-md transition-colors hover:border-accent/35 hover:bg-background/45 focus-visible:ring-2 focus-visible:ring-accent sm:h-28 sm:w-9 ${sideClass}`}
      style={{
        transformStyle: 'preserve-3d',
        borderRadius: isUp ? '0 999px 999px 0' : '999px 0 0 999px',
      }}
    >
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/8 via-transparent to-accent/10" />
      <span className="pointer-events-none absolute inset-y-3 w-px rounded-full bg-white/10">
        <span
          className="absolute bottom-0 block w-px rounded-full bg-gradient-to-t from-success to-accent shadow-[0_0_10px_rgba(var(--accent-rgb),0.45)]"
          style={{ height: `${Math.max(8, Math.round(progress * 100))}%` }}
        />
      </span>

      <span className="relative grid h-7 w-7 place-items-center rounded-full border border-accent/20 bg-accent/10 text-accent shadow-sm shadow-accent/10">
        <DirectionGlyph direction={direction} />
      </span>

      <span className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 scale-95 rounded-full border border-white/10 bg-background/80 px-3 py-2 text-text opacity-0 shadow-xl shadow-black/25 backdrop-blur-xl transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 sm:block ${tooltipClass}`}>
        <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-accent">
            {action}
        </span>
        <span className="block max-w-[10rem] truncate text-xs font-semibold leading-tight">
          {label}
        </span>
      </span>
    </motion.button>
  )
}

export default function ScrollCompanion() {
  const pathname = usePathname()
  const [sections, setSections] = useState<ScrollSection[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [lastDirection, setLastDirection] = useState<ScrollDirection>('down')
  const sectionsRef = useRef<ScrollSection[]>([])
  const hideTimerRef = useRef<number | null>(null)
  const lastScrollYRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  const rescanSections = useCallback(() => {
    const nextSections = getSections()
    sectionsRef.current = nextSections
    setSections(nextSections)
  }, [])

  const updateState = useCallback(
    (showControls: boolean) => {
      const currentSections = sectionsRef.current
      const nextSections = currentSections.length ? currentSections : getSections()
      if (!currentSections.length && nextSections.length) {
        sectionsRef.current = nextSections
        setSections(nextSections)
      }

      const scrollY = window.scrollY
      const direction: ScrollDirection = scrollY < lastScrollYRef.current ? 'up' : 'down'
      const anchor = scrollY + window.innerHeight * 0.42
      const nextIndex = nextSections.reduce((current, section, index) => (section.top <= anchor ? index : current), 0)

      lastScrollYRef.current = scrollY
      setLastDirection(direction)
      setActiveIndex((current) => (current === nextIndex ? current : nextIndex))

      if (showControls && nextSections.length > 1 && document.documentElement.scrollHeight > window.innerHeight * 1.35) {
        setIsVisible(true)

        if (hideTimerRef.current) {
          window.clearTimeout(hideTimerRef.current)
        }

        hideTimerRef.current = window.setTimeout(() => {
          setIsVisible(false)
        }, HIDE_DELAY_MS)
      }
    },
    []
  )

  useEffect(() => {
    const scanTimer = window.setTimeout(() => {
      rescanSections()
      lastScrollYRef.current = window.scrollY
      updateState(false)
    }, 120)

    return () => window.clearTimeout(scanTimer)
  }, [pathname, rescanSections, updateState])

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return

      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null
        updateState(true)
      })
    }

    const handleResize = () => {
      rescanSections()
      updateState(false)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)

      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current)
      }

      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current)
      }
    }
  }, [rescanSections, updateState])

  const previousSection = sections[activeIndex - 1]
  const nextSection = sections[activeIndex + 1]
  const progress = useMemo(() => {
    if (sections.length <= 1) return 0
    return Math.min(1, Math.max(0, activeIndex / (sections.length - 1)))
  }, [activeIndex, sections.length])

  if (sections.length <= 1) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {previousSection && (
            <CompanionButton
              key={`up-${previousSection.label}-${lastDirection}`}
              direction="up"
              label={previousSection.label}
              progress={progress}
              onClick={() => scrollToSection(previousSection)}
            />
          )}
          {nextSection && (
            <CompanionButton
              key={`down-${nextSection.label}-${lastDirection}`}
              direction="down"
              label={nextSection.label}
              progress={progress}
              onClick={() => scrollToSection(nextSection)}
            />
          )}
        </>
      )}
    </AnimatePresence>
  )
}
