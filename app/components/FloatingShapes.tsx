'use client'

import { motion } from 'framer-motion'

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-[10%] w-32 h-32 border border-accent/20 rounded-lg"
      />
      <motion.div
        animate={{ y: [20, -20, 20], rotate: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-40 right-[15%] w-24 h-24 border border-accent/15 rounded-full"
      />
      <motion.div
        animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 left-[20%] w-16 h-16 border border-accent/10"
        style={{ transform: 'rotate(45deg)' }}
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-60 left-[5%] w-8 h-8 bg-accent/10 rounded-full"
      />
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-60 right-[10%] w-12 h-12 border border-accent/20 rounded-lg"
      />
    </div>
  )
}