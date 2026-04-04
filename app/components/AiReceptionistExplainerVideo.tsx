'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import {
  aiReceptionistExplainerByLanguage,
  type AiReceptionistExplainerCopy,
} from '@/app/config/aiReceptionistExplainer'
import AnimatedSection from '@/app/components/AnimatedSection'

export default function AiReceptionistExplainerVideo() {
  const language = useLanguage()
  const copy: AiReceptionistExplainerCopy | undefined =
    aiReceptionistExplainerByLanguage[language]

  if (!copy) {
    return null
  }

  return (
    <AnimatedSection className="py-16 bg-background border-y border-border-light">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-semibold uppercase tracking-wide mb-4"
          >
            {copy.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight"
          >
            {copy.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            {copy.description}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden border border-border-light bg-black shadow-2xl shadow-black/20"
        >
          <div className="relative aspect-video">
            <video
              className="absolute inset-0 w-full h-full object-contain bg-black select-none"
              controls
              controlsList="nodownload"
              disablePictureInPicture
              playsInline
              preload="metadata"
              title={copy.title}
              onContextMenu={(e) => e.preventDefault()}
            >
              <source src={encodeURI(copy.src)} type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
