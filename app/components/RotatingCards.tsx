'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Card {
  title: string
  description: string
  icon?: string
  principle?: string
}

interface RotatingCardsProps {
  cards: Card[]
  autoRotate?: boolean
  rotationInterval?: number
  className?: string
}

export default function RotatingCards({ 
  cards, 
  autoRotate = true, 
  rotationInterval = 4000,
  className = '' 
}: RotatingCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    if (!autoRotate || cards.length <= 1) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % cards.length)
    }, rotationInterval)

    return () => clearInterval(interval)
  }, [autoRotate, rotationInterval, cards.length])

  const goToCard = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      rotateY: direction > 0 ? -45 : 45,
    }),
  }

  return (
    <div className={`relative ${className}`}>
      {/* Main Rotating Card */}
      <div className="relative h-[400px] md:h-[450px] perspective-1000">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              rotateY: { duration: 0.3 },
            }}
            className="card p-8 md:p-10 h-full flex flex-col justify-between group hover:border-accent/50 transition-all duration-300"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="flex-1">
              {cards[currentIndex].icon && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300"
                >
                  {cards[currentIndex].icon}
                </motion.div>
              )}
              
              <motion.h3
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent transition-colors"
              >
                {cards[currentIndex].title}
              </motion.h3>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-muted text-lg leading-relaxed mb-6"
              >
                {cards[currentIndex].description}
              </motion.p>
              
              {cards[currentIndex].principle && (
                <motion.blockquote
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-accent italic text-base font-medium border-l-4 border-accent/50 pl-4 mt-6"
                >
                  "{cards[currentIndex].principle}"
                </motion.blockquote>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      {cards.length > 1 && (
        <div className="flex justify-center gap-3 mt-8">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToCard(index)}
              className={`relative w-12 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-accent' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to ${cards[index].title}`}
            >
              {index === currentIndex && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute inset-0 bg-accent rounded-full"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Navigation Arrows */}
      {cards.length > 1 && (
        <>
          <button
            onClick={() => goToCard((currentIndex - 1 + cards.length) % cards.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-accent/50 transition-all group"
            aria-label="Previous card"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-muted group-hover:text-accent transition-colors">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button
            onClick={() => goToCard((currentIndex + 1) % cards.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-accent/50 transition-all group"
            aria-label="Next card"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-muted group-hover:text-accent transition-colors">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </>
      )}
    </div>
  )
}
