'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { getJourneyDemosIntro } from '@/lib/ai-receptionist-flow'

export default function JourneyDemosIntro() {
  const language = useLanguage()
  const copy = getJourneyDemosIntro(language)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-2xl md:text-3xl font-bold text-text mb-3"
      >
        {copy.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="text-muted text-sm md:text-base max-w-2xl mx-auto"
      >
        {copy.subtitle}
      </motion.p>
    </div>
  )
}
