'use client'

import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import { Briefcase, GraduationCap } from 'lucide-react'
import AnimatedSection from '@/app/components/AnimatedSection'
import CompanyValuesGrid from '@/app/components/CompanyValuesGrid'
import GlowCard from '@/app/components/GlowCard'
import { getBookingLinkProps } from '@/app/config/cta.config'
import { useLanguage, useLocale } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { localeToHreflang, type Locale } from '@/i18n/routing'

export function MissionValues({ id = 'our-mission' }: { id?: string }) {
  const language = useLanguage()
  const m = translations[language].home.mission

  return (
    <AnimatedSection id={id} className="py-24 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" aria-hidden />
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" aria-hidden />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[min(100%,42rem)] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 md:mb-20"
        >
          <div className="text-center mb-8 md:mb-10">
            <div className="engineered-header-frame mb-6">
              <span className="section-label !m-0">{m.title}</span>
            </div>
          </div>

          <GlowCard className="relative overflow-hidden p-8 md:p-12 lg:p-14 text-center">
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/[0.07] via-transparent to-success/[0.07]"
              aria-hidden
            />
            <div className="relative">
              <h2 className="type-h2 font-bold mb-6 gradient-text-brand max-w-3xl mx-auto">{m.statement}</h2>
              <p className="type-body-lg text-muted max-w-2xl mx-auto leading-relaxed">{m.description}</p>
            </div>
          </GlowCard>
        </motion.div>

        <CompanyValuesGrid mission={m} />
      </div>
    </AnimatedSection>
  )
}

export function Commitment2026({ id = 'our-2026-commitment' }: { id?: string }) {
  const language = useLanguage()
  const locale = useLocale()
  const c = translations[language].home.commitment2026
  const intlLocale = locale in localeToHreflang ? localeToHreflang[locale as Locale] : 'en-US'
  const formatCommitmentStat = (n: number) => new Intl.NumberFormat(intlLocale).format(n)

  const pillars = [
    {
      value: 10,
      title: c.pillar1Title,
      description: c.pillar1Desc,
      icon: Briefcase,
      theme: 'accent' as const,
    },
    {
      value: 100,
      title: c.pillar2Title,
      description: c.pillar2Desc,
      icon: GraduationCap,
      theme: 'success' as const,
    },
  ]

  return (
    <AnimatedSection id={id} className="py-24 md:py-28 border-y border-border/70 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-14">
          <div className="engineered-header-frame mb-6 inline-block">
            <span className="section-label !m-0">{c.badge}</span>
          </div>
          <h2 className="type-h2 font-bold text-text max-w-4xl mx-auto leading-tight">{c.title}</h2>
          <p className="type-body-lg text-muted mt-5 max-w-2xl mx-auto leading-relaxed">{c.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            const isAccent = pillar.theme === 'accent'

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`card group flex h-full flex-col p-7 md:p-9 ${
                  isAccent ? 'hover:border-accent/50' : 'hover:border-success/50'
                }`}
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 ${
                      isAccent
                        ? 'border-accent/25 bg-accent/10 text-accent'
                        : 'border-success/25 bg-success/10 text-success'
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </div>
                  <span
                    className={`type-h2 font-display font-bold tabular-nums leading-none ${
                      isAccent ? 'text-accent' : 'text-success'
                    }`}
                  >
                    {formatCommitmentStat(pillar.value)}
                  </span>
                </div>
                <h3 className="type-h4 mb-3 font-bold text-text">{pillar.title}</h3>
                <p className="type-body text-muted leading-relaxed">{pillar.description}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-10 md:mt-12 max-w-3xl mx-auto text-center">
          <p className="type-body text-muted leading-relaxed">{c.proofLine}</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/future-ready-graduate" className="type-small font-semibold text-accent hover:underline">
              {c.proofLink1Text}
            </Link>
            <Link href="/careers" className="type-small font-semibold text-accent hover:underline">
              {c.proofLink2Text}
            </Link>
          </div>
          <a {...getBookingLinkProps()} className="btn-primary mt-8 inline-flex px-8 py-3.5">
            {c.ctaPrimary}
          </a>
        </div>
      </div>
    </AnimatedSection>
  )
}
