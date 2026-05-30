'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  suggestions: string[]
  onSelect: (text: string) => void
  paused?: boolean
}

export default function RotatingSuggestions({ suggestions, onSelect, paused = false }: Props) {
  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [phase, setPhase] = useState<'typing' | 'hold' | 'erasing'>('typing')
  const current = suggestions[index % suggestions.length] ?? ''

  useEffect(() => {
    if (paused || !suggestions.length) return
    const full = current
    if (phase === 'typing') {
      if (displayText.length < full.length) {
        const t = setTimeout(() => setDisplayText(full.slice(0, displayText.length + 1)), 32)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setPhase('hold'), 50)
      return () => clearTimeout(t)
    }
    if (phase === 'hold') {
      const t = setTimeout(() => setPhase('erasing'), 2400)
      return () => clearTimeout(t)
    }
    if (displayText.length > 0) {
      const t = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 18)
      return () => clearTimeout(t)
    }
    setIndex((i) => (i + 1) % suggestions.length)
    setPhase('typing')
  }, [current, displayText, phase, paused, suggestions.length])

  useEffect(() => {
    setDisplayText('')
    setPhase('typing')
  }, [index])

  if (!suggestions.length) return null

  return (
    <div className="w-full max-w-2xl mx-auto">
      <p className="text-xs uppercase tracking-wider text-muted mb-3 text-center">Try asking</p>
      <AnimatePresence mode="wait">
        <motion.button
          key={index}
          type="button"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          onClick={() => onSelect(current)}
          className="group w-full text-left rounded-2xl border border-border bg-surface/80 hover:border-accent/50 px-4 py-3 sm:px-5 sm:py-4 transition-colors"
        >
          <span className="font-mono text-sm sm:text-base text-muted group-hover:text-text">
            {displayText}
            <span className="inline-block w-0.5 h-[1em] bg-accent ml-0.5 align-middle animate-pulse" aria-hidden />
          </span>
        </motion.button>
      </AnimatePresence>
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {suggestions.slice(0, 4).map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => onSelect(s)}
            className="text-xs px-3 py-1.5 rounded-full border border-border text-muted hover:text-accent hover:border-accent/40"
          >
            {s.length > 42 ? `${s.slice(0, 40)}…` : s}
          </button>
        ))}
      </div>
    </div>
  )
}
