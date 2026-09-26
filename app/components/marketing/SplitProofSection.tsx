'use client'

import type { ReactNode } from 'react'
import AnimatedSection from '@/app/components/AnimatedSection'
import SectionHeading, { type SectionHeadingProps } from '@/app/components/marketing/SectionHeading'

export type SplitProofSectionProps = {
  id?: string
  reverse?: boolean
  className?: string
  surface?: 'default' | 'surface' | 'background'
  heading: SectionHeadingProps
  visual: ReactNode
  footer?: ReactNode
  /** Wider layout for dashboard demos */
  wide?: boolean
}

const SURFACE_CLASS = {
  default: '',
  surface: 'bg-surface',
  background: 'bg-background',
} as const

export default function SplitProofSection({
  id,
  reverse = false,
  className = '',
  surface = 'default',
  heading,
  visual,
  footer,
  wide = false,
}: SplitProofSectionProps) {
  const maxWidth = wide ? 'max-w-[1400px]' : 'max-w-7xl'

  return (
    <AnimatedSection
      id={id}
      className={`split-proof-section border-b border-border py-16 md:py-20 lg:py-24 ${SURFACE_CLASS[surface]} ${className}`}
    >
      <div className={`mx-auto ${maxWidth} px-4 sm:px-6`}>
        <div
          className={`split-proof-grid grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16 ${
            reverse ? 'split-proof-grid--reverse' : ''
          }`}
        >
          <div className="split-proof-copy min-w-0 xl:sticky xl:top-24 xl:self-start">
            <SectionHeading {...heading} align="left" />
            {footer ? <div className="mt-6">{footer}</div> : null}
          </div>
          <div className="split-proof-visual min-w-0 w-full">{visual}</div>
        </div>
      </div>
    </AnimatedSection>
  )
}
