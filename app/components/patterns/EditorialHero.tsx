'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import { ctaConfig } from '@/app/config/cta.config'

type EditorialHeroProps = {
  index?: string
  greeting?: string
  title: ReactNode
  titleHighlight?: ReactNode
  subtitle: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  children?: ReactNode
}

export default function EditorialHero({
  index = '01',
  greeting,
  title,
  titleHighlight,
  subtitle,
  primaryCta,
  secondaryCta,
  children,
}: EditorialHeroProps) {
  return (
    <section className="marketing-chapter relative min-h-[85vh] flex items-center pt-24 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        src="/hero-bg.mp4"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.08]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-index mb-4">{index}</p>
          {greeting && (
            <p className="type-h4 font-display font-semibold text-muted mb-3">{greeting}</p>
          )}
          <h1 className="editorial-headline max-w-4xl text-balance">
            {title}
            {titleHighlight && (
              <>
                <br />
                <span className="gradient-text">{titleHighlight}</span>
              </>
            )}
          </h1>
          <p className="editorial-subhead mt-6 max-w-2xl">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={primaryCta?.href ?? ctaConfig.digniPath}
              className="btn-primary"
            >
              {primaryCta?.label ?? 'Talk to DigniGuide'}
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-secondary">
                {secondaryCta.label}
              </Link>
            )}
          </div>
          {children}
        </motion.div>
      </div>
    </section>
  )
}
