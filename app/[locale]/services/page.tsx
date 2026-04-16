'use client'

import { use } from 'react'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import AnimatedSection from '@/app/components/AnimatedSection'
import PremiumHeroBackdrop from '@/app/components/PremiumHeroBackdrop'
import PremiumHeroParallax from '@/app/components/PremiumHeroParallax'
import ScrollIndicator from '@/app/components/ScrollIndicator'
import { getBookingLinkProps } from '@/app/config/cta.config'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import type { ServicesPageCardId } from '@/app/i18n/servicesPage'

const SERVICE_CARD_META: Record<
  ServicesPageCardId,
  { icon: string; color: 'accent' | 'success' | 'info' }
> = {
  'ai-receptionist': { icon: '🤖', color: 'accent' },
  'future-ready-graduate': { icon: '🎓', color: 'success' },
  'agentic-softwares': { icon: '⚙️', color: 'info' },
}

type ServicesPageProps = {
  params: Promise<{ locale: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default function ServicesPage({ params, searchParams }: ServicesPageProps) {
  use(params)
  use(searchParams ?? Promise.resolve({}))
  const language = useLanguage()
  const t = translations[language]
  const sp = t.servicesPage
  const servicesLabel = t.sectionLabels?.services ?? 'Our Services'
  return (
    <main>
      {/* Hero Section */}
      <section className="relative isolate min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden bg-gradient-mesh">
        <PremiumHeroBackdrop />
        <PremiumHeroParallax className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="section-label block mb-4 sm:mb-6">{servicesLabel}</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 px-2">
              Solutions That{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">Drive Real Impact</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed px-2">
              AI systems. Graduate programs. Agentic Softwares. Results from day one.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-2 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-full border border-border/80 bg-background/75 dark:bg-surface/70 px-4 py-2 text-xs sm:text-sm text-muted backdrop-blur-sm shadow-sm"
              >
                <span className="font-semibold text">10+ years</span> building growth systems
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-full border border-border/80 bg-background/75 dark:bg-surface/70 px-4 py-2 text-xs sm:text-sm text-muted backdrop-blur-sm shadow-sm"
              >
                <span className="font-semibold text">98%</span> client satisfaction
              </motion.div>
            </div>
          </motion.div>
        </PremiumHeroParallax>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ScrollIndicator direction="down" />
        </div>
      </section>

      {/* Services Grid - Clean Card Design */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sp.cards.map((service, i) => {
              const meta = SERVICE_CARD_META[service.id]
              const color = meta.color
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="card p-8 hover:border-accent/50 group flex flex-col h-full"
                >
                  <div className="mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform ${
                        color === 'accent'
                          ? 'bg-accent/10'
                          : color === 'success'
                            ? 'bg-success/10'
                            : 'bg-info/10'
                      }`}
                    >
                      {meta.icon}
                    </div>
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        color === 'accent'
                          ? 'text-accent'
                          : color === 'success'
                            ? 'text-success'
                            : 'text-info'
                      }`}
                    >
                      {service.subtitle}
                    </span>
                    <Link href={service.link}>
                      <h3 className="font-display text-2xl font-bold mt-2 mb-4 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>
                    </Link>
                  </div>

                  <p className="text-muted mb-6 leading-relaxed flex-grow">{service.description}</p>

                  <div className="mb-6 space-y-2">
                    {service.outcomes.map((outcome, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            color === 'accent'
                              ? 'bg-accent'
                              : color === 'success'
                                ? 'bg-success'
                                : 'bg-info'
                          }`}
                        />
                        <span className="text-sm text-muted">{outcome}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-6 pt-6 border-t border-light">
                    <h4 className="font-semibold text-sm mb-3 uppercase tracking-wider text-muted-dark">
                      {sp.labels.keyFeatures}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.deliverables.map((item, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <div
                            className={`w-1 h-1 rounded-full mt-2 flex-shrink-0 ${
                              color === 'accent'
                                ? 'bg-accent'
                                : color === 'success'
                                  ? 'bg-success'
                                  : 'bg-info'
                            }`}
                          />
                          <span className="text-xs text-muted leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-sm mb-3 uppercase tracking-wider text-muted-dark">
                      {sp.labels.technologies}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, j) => (
                        <span
                          key={j}
                          className="px-2 py-1 bg-surface-light rounded text-xs text-muted-dark"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6 pt-6 border-t border-border-light">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-xs uppercase tracking-wider text-muted-dark">
                        {sp.labels.timeline}
                      </span>
                      <span className="font-semibold text-sm text-left sm:text-right">{service.timeline}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-auto">
                    <Link
                      href={service.link}
                      className={`btn-primary text-center ${
                        color === 'accent'
                          ? ''
                          : color === 'success'
                            ? 'bg-success hover:bg-success/90'
                            : 'bg-info hover:bg-info/90'
                      }`}
                    >
                      {service.primaryCta}
                    </Link>
                    <a {...getBookingLinkProps()} className="btn-secondary text-center">
                      {service.secondaryCta}
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section, aligned with home.stats */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {sp.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <p className="text-text font-semibold mb-1">{stat.label}</p>
                <p className="text-muted text-sm">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">{sp.bottomCta.title}</h2>
          <p className="text-muted text-lg mb-8">{sp.bottomCta.subtitle}</p>
          <a {...getBookingLinkProps()} className="btn-primary text-lg px-8 py-4">
            {t.cta.bookConsultation}
          </a>
        </div>
      </AnimatedSection>
    </main>
  )
}
