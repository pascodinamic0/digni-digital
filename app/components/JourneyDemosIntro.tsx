'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { getJourneyDemosIntro } from '@/lib/ai-receptionist-flow'

export default function JourneyDemosIntro() {
  const language = useLanguage()
  const copy = getJourneyDemosIntro(language)

  return (
    <div className="mx-auto max-w-3xl px-4 pb-2 pt-10 text-center sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-xl font-bold text-[var(--software-text)] md:text-2xl"
      >
        {copy.title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mx-auto mt-2 max-w-2xl text-sm text-[var(--software-text-muted)] md:text-base"
      >
        {copy.subtitle}
      </motion.p>
    </div>
  )
}
