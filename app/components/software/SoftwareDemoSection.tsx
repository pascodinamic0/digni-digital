'use client'

import type { ReactNode } from 'react'
import JourneyDemoHeader from '@/app/components/JourneyDemoHeader'
import { useLanguage } from '@/app/context/LocaleContext'
import {
  getFlowNextCta,
  resolveFlowScrollAnchor,
  type AiReceptionistScrollAnchor,
} from '@/lib/ai-receptionist-flow'
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

export default function SoftwareDemoSection({
  activeNav,
  moduleTitle,
  children,
  className = '',
  ...header
}: Props) {
  const language = useLanguage()
  const nextCta = getFlowNextCta(language, header.step, header.anchorId)
  const scrollAnchor = resolveFlowScrollAnchor(header.step, header.anchorId)

  return (
    <section
      id={scrollAnchor}
      className={`software-demo-section scroll-mt-28 border-b border-[var(--software-border)] py-12 md:py-16 lg:py-20 ${className}`}
      aria-labelledby={header.titleId}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="software-demo-layout flex flex-col gap-8 xl:grid xl:grid-cols-[minmax(0,280px)_minmax(0,1fr)] xl:items-start xl:gap-10">
          <JourneyDemoHeader
            {...header}
            variant="software"
            align="left"
            nextCta={nextCta ?? undefined}
            className="mb-0 max-w-2xl xl:sticky xl:top-24"
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
