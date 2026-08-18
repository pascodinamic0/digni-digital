'use client'

import { motion, useReducedMotion } from 'framer-motion'

/**
 * Soft brand atmosphere for heroes.
 * Static by default — motion only when the user allows it and prefers richness over battery.
 */
export default function PremiumHeroBackdrop() {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <>
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 bottom-12 h-80 w-80 rounded-full bg-success/15 blur-3xl"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      </>
    )
  }

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-accent/18 dark:bg-accent/22 blur-3xl"
        initial={{ opacity: 0.45, scale: 0.96 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-12 h-80 w-80 rounded-full bg-success/16 dark:bg-success/20 blur-3xl"
        initial={{ opacity: 0.4, scale: 0.96 }}
        animate={{ opacity: 0.65, scale: 1 }}
        transition={{ duration: 1.35, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
    </>
  )
}
