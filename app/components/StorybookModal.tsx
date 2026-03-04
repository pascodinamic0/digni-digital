'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'

export interface StorySlide {
  id: string
  year?: string
  title: string
  content: string
  highlight?: string
  /** Background image path (e.g. /story/origin.jpg) - add as you provide assets */
  backgroundImage?: string
  /** Background video path (e.g. /story/origin.mp4) - optional, overrides image if both set */
  backgroundVideo?: string
}

const STORY_SLIDES: StorySlide[] = [
  {
    id: 'origin',
    title: 'The Beginning',
    content:
      'We are an American-registered company that started in Kenya—founded by a refugee youth who refused to accept the rules and limitations set upon him. Driven by hunger and greatness, he chose to fail forward: to keep pushing, dreaming, and building toward a better world.',
    highlight: 'Refused to accept the rules',
  },
  {
    id: 'dream',
    title: 'The Dream',
    content:
      'That dream is simple and urgent: everyone enabled, empowered, and connected to the same technology and skills that have long been reserved for elites and elite kids. Businesses shouldn\'t lose leads because they can\'t afford big systems. Students shouldn\'t graduate without the skills employers hire for.',
    highlight: 'Enabled, empowered, and connected',
  },
  {
    id: '2019',
    year: '2019',
    title: 'Founded',
    content: 'Started helping African businesses grow with tech. Websites and digital solutions that leveled the playing field.',
  },
  {
    id: '2020',
    year: '2020',
    title: 'First Clients',
    content: 'Websites and digital solutions delivered. Proof that small budgets could get big results.',
  },
  {
    id: '2021',
    year: '2021',
    title: 'Expanded',
    content: 'Added apps and marketing. The toolkit grew—and so did our impact.',
  },
  {
    id: '2022',
    year: '2022',
    title: 'International',
    content: 'Clients across continents. From Kenya to the world.',
  },
  {
    id: '2023',
    year: '2023',
    title: 'SaaS',
    content: 'First product launched. Systems that scale with our clients.',
  },
  {
    id: '2024',
    year: '2024',
    title: 'Growth Systems',
    content: 'Full infrastructure agency. We don\'t just build—we build systems that get results.',
  },
  {
    id: '2025',
    year: '2025',
    title: 'AI',
    content: 'AI solutions. ProposalAgent. Technology that perceives, reasons, and acts.',
  },
  {
    id: '2026',
    year: '2026',
    title: '150+ Clients',
    content: 'Market leader. AI that captures every lead, curricula that make graduates job-ready, and agentic software that scales with you.',
  },
  {
    id: 'vision',
    title: 'Where We\'re Going',
    content:
      'We build the fixes—AI that captures every lead, curricula that make graduates job-ready, and agentic software that perceives, reasons, and acts—scaling with you. We don\'t just build websites—we build systems that get you clients and students jobs.',
    highlight: 'Systems that get results',
  },
]

interface StorybookModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function StorybookModal({ isOpen, onClose }: StorybookModalProps) {
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen && mounted) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isOpen, mounted])

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i < STORY_SLIDES.length - 1 ? i + 1 : i))
  }, [])

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i > 0 ? i - 1 : i))
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose, goNext, goPrev])

  useEffect(() => {
    if (isOpen) setCurrentIndex(0)
  }, [isOpen])

  if (!mounted || !isOpen) return null

  const slide = STORY_SLIDES[currentIndex]
  const isFirst = currentIndex === 0
  const isLast = currentIndex === STORY_SLIDES.length - 1

  return (
    <AnimatePresence mode="wait">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-sm z-[9999]"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-surface border border-border-light rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors group"
            aria-label="Close story"
          >
            <svg
              className="w-6 h-6 text-text group-hover:text-accent transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Slide content - with optional background media */}
          <div className="flex-1 overflow-y-auto relative min-h-[320px]">
            {/* Background media (image or video) - add paths to STORY_SLIDES as you provide assets */}
            {(slide.backgroundImage || slide.backgroundVideo) && (
              <div className="absolute inset-0 z-0">
                {slide.backgroundVideo ? (
                  <video
                    src={slide.backgroundVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : slide.backgroundImage ? (
                  <Image
                    src={slide.backgroundImage}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 48rem"
                  />
                ) : null}
                {/* Overlay for text readability - adjust opacity to show more/less of the image */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
              </div>
            )}
            <div className="relative z-10 p-8 sm:p-12 pt-14">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[280px]"
                >
                  {slide.year && (
                    <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
                      {slide.year}
                    </span>
                  )}
                  <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-foreground">
                    {slide.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-base sm:text-lg">
                    {slide.content}
                  </p>
                  {slide.highlight && (
                    <p className="mt-6 text-accent font-medium text-sm sm:text-base">
                      — {slide.highlight}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="border-t border-border-light p-4 sm:p-6 flex items-center justify-between gap-4">
            <button
              onClick={goPrev}
              disabled={isFirst}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-medium hover:border-accent hover:text-accent disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-border-medium disabled:hover:text-inherit transition-colors text-sm font-medium"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5 flex-wrap justify-center">
              {STORY_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? 'bg-accent w-6'
                      : 'bg-border-medium hover:bg-border-heavy'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {isLast ? (
              <button
                onClick={onClose}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-medium hover:border-accent hover:text-accent transition-colors text-sm font-medium"
                aria-label="End and leave"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                End & leave
              </button>
            ) : (
              <button
                onClick={goNext}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-medium hover:border-accent hover:text-accent transition-colors text-sm font-medium"
                aria-label="Next slide"
              >
                Next
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
