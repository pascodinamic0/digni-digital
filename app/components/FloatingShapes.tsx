'use client'

import { motion } from 'framer-motion'

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Speed-themed flowing shapes */}
      <motion.div
        animate={{ 
          y: [-20, 20, -20], 
          rotate: [0, 10, 0],
          x: [0, 5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-[10%] w-32 h-32 border border-accent/20 rounded-lg"
      />
      
      {/* AI-themed circuit pattern */}
      <motion.div
        animate={{ 
          y: [20, -20, 20], 
          rotate: [0, -15, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-40 right-[15%] w-24 h-24 border border-accent/15 rounded-full"
      />
      
      {/* Data flow indicator */}
      <motion.div
        animate={{ 
          y: [-15, 15, -15], 
          rotate: [0, 5, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 left-[20%] w-16 h-16 border border-accent/10"
        style={{ transform: 'rotate(45deg)' }}
      />
      
      {/* Speed dots */}
      <motion.div
        animate={{ 
          y: [10, -10, 10],
          x: [-5, 5, -5]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-60 left-[5%] w-8 h-8 bg-accent/10 rounded-full"
      />
      
      {/* Connection nodes */}
      <motion.div
        animate={{ 
          y: [-10, 10, -10],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-60 right-[10%] w-12 h-12 border border-accent/20 rounded-lg"
      />
      
      {/* Additional speed lines */}
      <motion.div
        animate={{ 
          x: [-100, 100],
          opacity: [0, 1, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-0 w-1 h-20 bg-gradient-to-b from-transparent via-accent/20 to-transparent"
      />
      
      <motion.div
        animate={{ 
          x: [100, -100],
          opacity: [0, 1, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/3 right-0 w-1 h-16 bg-gradient-to-b from-transparent via-success/20 to-transparent"
      />
    </div>
  )
}