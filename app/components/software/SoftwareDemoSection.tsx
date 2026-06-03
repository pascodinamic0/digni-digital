'use client'

import type { ReactNode } from 'react'
import JourneyDemoHeader from '@/app/components/JourneyDemoHeader'
import { useLanguage } from '@/app/context/LocaleContext'
import { getFlowNextCta, type AiReceptionistScrollAnchor } from '@/lib/ai-receptionist-flow'
import ProductWorkspaceFrame from './ProductWorkspaceFrame'
import type { SoftwareNavId } from './software-nav'

type HeaderProps = {
  step: 1 | 2 | 3 | 4 | 5 | 6
  journeyPhase: string
  badge: string
  title: string
  titleHighlight: string
  subtitle: string
  titleId: string
  titleLayout?: 'stacked' | 'inline'
  anchorId?: AiReceptionistScrollAnchor
}

type Props = HeaderProps & {
  activeNav: SoftwareNavId
  moduleTitle?: string
  children: ReactNode
  className?: string
}

/**
 * Product demo block: software-style section header + in-app workspace frame.
 */
export default function SoftwareDemoSection({
  activeNav,
  moduleTitle,
  children,
  className = '',
  ...header
}: Props) {
  const language = useLanguage()
  const nextCta = getFlowNextCta(language, header.step, header.anchorId)

  return (
    <section
      className={`software-demo-section border-b border-[var(--software-border)] py-12 md:py-16 lg:py-20 ${className}`}
      aria-labelledby={header.titleId}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="software-demo-layout grid items-start gap-8 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,340px)_1fr]">
          <JourneyDemoHeader
            {...header}
            variant="software"
            align="left"
            nextCta={nextCta ?? undefined}
            className="mb-0 lg:sticky lg:top-24"
          />
          <div className="software-demo-stage min-w-0 w-full">
            <ProductWorkspaceFrame
              activeNav={activeNav}
              moduleTitle={moduleTitle}
              presentation="demo"
              className="software-demo-frame"
            >
              {children}
            </ProductWorkspaceFrame>
          </div>
        </div>
      </div>
    </section>
  )
}
