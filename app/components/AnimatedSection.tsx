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

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  id,
  parallax = false,
  stagger = false
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: 'easeOut',
        when: "beforeChildren",
        staggerChildren: stagger ? 0.1 : 0
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  if (parallax) {
    return (
      <motion.section
        ref={ref}
        id={id}
        style={{ y, opacity }}
        className={className}
      >
        {children}
      </motion.section>
    )
  }

  return (
    <motion.section
      ref={ref}
      id={id}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
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