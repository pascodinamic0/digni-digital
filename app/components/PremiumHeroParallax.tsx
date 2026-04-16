'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { type ReactNode, useRef } from 'react'

export default function PremiumHeroParallax({
  children,
  className,
  parallaxPx = -36,
}: {
  children: ReactNode
  className?: string
  parallaxPx?: number
}) {
  const shouldReduceMotion = useReducedMotion()
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, parallaxPx])

  return (
    <div ref={heroRef} className={className}>
      <motion.div style={shouldReduceMotion ? undefined : { y: heroContentY }}>{children}</motion.div>
    </div>
  )
}

