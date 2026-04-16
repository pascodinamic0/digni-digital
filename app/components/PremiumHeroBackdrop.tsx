'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function PremiumHeroBackdrop() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-accent/20 dark:bg-accent/25 blur-3xl"
        animate={shouldReduceMotion ? { opacity: 0.6 } : { x: [0, 25, -10, 0], y: [0, -20, 15, 0], scale: [1, 1.08, 0.95, 1] }}
        transition={shouldReduceMotion ? { duration: 0.2 } : { duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-12 h-80 w-80 rounded-full bg-success/20 dark:bg-success/25 blur-3xl"
        animate={shouldReduceMotion ? { opacity: 0.6 } : { x: [0, -30, 12, 0], y: [0, 20, -12, 0], scale: [1, 0.94, 1.06, 1] }}
        transition={shouldReduceMotion ? { duration: 0.2 } : { duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
    </>
  )
}
