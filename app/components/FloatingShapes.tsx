'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function FloatingShapes() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Array<{ x: number; y: number; duration: number; delay: number }>>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 100,
        y: (e.clientY / window.innerHeight - 0.5) * 100,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    // Initialize particles only on client side
    if (typeof window !== 'undefined') {
      setParticles(
        Array.from({ length: 6 }, () => ({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          duration: 3 + Math.random() * 2,
          delay: Math.random() * 2,
        }))
      )
    }
  }, [])

  const shapes = [
    {
      initialX: '10%',
      initialY: '20%',
      size: 'w-32 h-32 md:w-40 md:h-40',
      delay: 0,
      duration: 8,
      type: 'square'
    },
    {
      initialX: '80%',
      initialY: '15%',
      size: 'w-24 h-24 md:w-32 md:h-32',
      delay: 1,
      duration: 10,
      type: 'circle'
    },
    {
      initialX: '15%',
      initialY: '70%',
      size: 'w-20 h-20 md:w-28 md:h-28',
      delay: 2,
      duration: 12,
      type: 'diamond'
    },
    {
      initialX: '75%',
      initialY: '75%',
      size: 'w-28 h-28 md:w-36 md:h-36',
      delay: 0.5,
      duration: 9,
      type: 'square'
    },
    {
      initialX: '50%',
      initialY: '10%',
      size: 'w-16 h-16 md:w-20 md:h-20',
      delay: 1.5,
      duration: 7,
      type: 'circle'
    },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 md:w-[500px] md:h-[500px] bg-accent/10 rounded-full blur-3xl"
        style={{
          x: useTransform(useSpring(mousePosition.x * 0.5), (v) => v),
          y: useTransform(useSpring(mousePosition.y * 0.5), (v) => v),
        }}
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-[400px] md:h-[400px] bg-success/10 rounded-full blur-3xl"
        style={{
          x: useTransform(useSpring(mousePosition.x * -0.3), (v) => v),
          y: useTransform(useSpring(mousePosition.y * -0.3), (v) => v),
        }}
      />

      {/* Floating geometric shapes with parallax */}
      {shapes.map((shape, i) => {
        const mouseX = useSpring(mousePosition.x * (0.02 + i * 0.01), { stiffness: 50, damping: 20 })
        const mouseY = useSpring(mousePosition.y * (0.02 + i * 0.01), { stiffness: 50, damping: 20 })
        const x = useTransform(mouseX, (v) => v)
        const y = useTransform(mouseY, (v) => v)
        
        return (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: shape.delay }}
          className={`absolute ${shape.size}`}
          style={{
            left: shape.initialX,
            top: shape.initialY,
            x: x,
            y: y,
          }}
        >
          {shape.type === 'circle' && (
            <motion.div
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: shape.duration,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-full h-full border-2 border-accent/20 rounded-full backdrop-blur-sm bg-accent/5"
            />
          )}
          {shape.type === 'square' && (
            <motion.div
              animate={{
                y: [15, -15, 15],
                rotate: [0, 90, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: shape.duration,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-full h-full border-2 border-accent/25 rounded-xl backdrop-blur-sm bg-accent/5"
            />
          )}
          {shape.type === 'diamond' && (
            <motion.div
              animate={{
                y: [-15, 15, -15],
                rotate: [0, 45, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: shape.duration,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-full h-full border-2 border-success/20 backdrop-blur-sm bg-success/5"
              style={{ transform: 'rotate(45deg)' }}
            />
          )}
        </motion.div>
        )
      })}

      {/* Animated connecting lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <motion.path
          d="M 100 200 Q 400 100 700 200 T 1300 200"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4A853" stopOpacity="0" />
            <stop offset="50%" stopColor="#D4A853" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#D4A853" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-accent/30 rounded-full"
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: 0,
          }}
          animate={{
            y: [undefined, -100, undefined],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeOut',
          }}
          style={{
            left: `${10 + i * 15}%`,
          }}
        />
      ))}
    </div>
  )
}