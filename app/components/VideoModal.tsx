'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoSrc: string
  title?: string
  description?: string
}

export default function VideoModal({ isOpen, onClose, videoSrc, title, description }: VideoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-surface border border-white/10 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors group"
                aria-label="Close video"
              >
                <svg
                  className="w-6 h-6 text-white group-hover:text-accent transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              {(title || description) && (
                <div className="p-6 pb-4 border-b border-white/10">
                  {title && (
                    <h3 className="font-display text-2xl font-bold mb-2">{title}</h3>
                  )}
                  {description && (
                    <p className="text-muted text-sm leading-relaxed">{description}</p>
                  )}
                </div>
              )}

              {/* Video */}
              <div className="relative aspect-video bg-black">
                <video
                  src={videoSrc}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full"
                  onEnded={onClose}
                  onError={(e) => {
                    console.error('Video playback error:', videoSrc, e)
                    const target = e.target as HTMLVideoElement
                    if (target.error) {
                      console.error('Video error code:', target.error.code, 'Message:', target.error.message)
                    }
                  }}
                  onLoadedData={() => {
                    console.log('Video loaded successfully:', videoSrc)
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
