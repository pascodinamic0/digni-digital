'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  id?: string
  parallax?: boolean
  stagger?: boolean
}

/** Scroll-linked transforms only when needed; useScroll measures layout and can contribute to forced reflows. */
function ParallaxSection({
  children,
  className = '',
  id,
}: Pick<AnimatedSectionProps, 'children' | 'className' | 'id'>) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8])

  return (
    <motion.section ref={ref} id={id} style={{ y, opacity }} className={className}>
      {children}
    </motion.section>
  )
}

function StandardSection({
  children,
  className = '',
  delay = 0,
  id,
  stagger = false,
}: Omit<AnimatedSectionProps, 'parallax'>) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: stagger ? 0.1 : 0,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.section
      ref={ref}
      id={id}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {stagger ? (
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.section>
  )
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  id,
  parallax = false,
  stagger = false,
}: AnimatedSectionProps) {
  if (parallax) {
    return (
      <ParallaxSection id={id} className={className}>
        {children}
      </ParallaxSection>
    )
  }

  return (
    <StandardSection id={id} className={className} delay={delay} stagger={stagger}>
      {children}
    </StandardSection>
  )
}
