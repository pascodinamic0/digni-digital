'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { getAiEmployeeInboundFlow } from '@/app/i18n/aiEmployeeInboundFlow'
import AnimatedSection from '@/app/components/AnimatedSection'
import InboundLeadGenerationMap from '@/app/components/InboundLeadGenerationMap'

export default function InboundLeadFlowSection() {
  const language = useLanguage()
  const copy = getAiEmployeeInboundFlow(language)
  const reduceMotion = useReducedMotion()

  return (
    <AnimatedSection
      className="relative py-20 md:py-32 overflow-hidden bg-background"
      aria-labelledby="inbound-flow-title"
    >
      <div
        className="absolute inset-x-0 top-1/3 h-96 max-w-4xl mx-auto bg-[radial-gradient(ellipse_at_center,rgba(var(--accent-rgb),0.08),transparent_70%)] pointer-events-none"
        aria-hidden
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.header
          className="text-center mb-10 md:mb-14 max-w-3xl mx-auto"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">{copy.eyebrow}</p>
          <h2
            id="inbound-flow-title"
            className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-text mb-4 leading-tight tracking-tight"
          >
            {copy.inboundHeading}
          </h2>
          <p className="text-lg text-text/90 font-medium leading-relaxed max-w-2xl mx-auto italic">
            {copy.inboundEmotionalLead}
          </p>
          <p className="text-muted text-base leading-relaxed max-w-2xl mx-auto mt-3">{copy.inboundSubtext}</p>
          <p className="mt-5 text-sm font-semibold text-warning/90 max-w-xl mx-auto leading-relaxed">
            {copy.inboundStakesLine}
          </p>
        </motion.header>

        <InboundLeadGenerationMap
          sources={copy.sources}
          hubTitle={copy.hubTitle}
          hubSubtitle={copy.hubSubtitle}
          convergeLabel={copy.convergeLabel}
          capturedLabel={copy.capturedLabel}
          entryPointsLabel={copy.entryPointsLabel}
          hubChannels={[...copy.hubChannels]}
        />
      </div>
    </AnimatedSection>
  )
}
