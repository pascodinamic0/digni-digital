'use client'

import { use, useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import AnimatedSection from '@/app/components/AnimatedSection'
import CompanyValuesGrid from '@/app/components/CompanyValuesGrid'
import ScrollIndicator from '@/app/components/ScrollIndicator'
import ClientLogos from '@/app/components/ClientLogos'
import { useTheme } from '@/app/components/ThemeProvider'
import { ctaConfig, getBookingLinkProps } from '@/app/config/cta.config'
import { useLanguage, useLocale } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { localeToHreflang, type Locale } from '@/i18n/routing'
import { formatMissedLeadsUsdStat, MISSED_LEADS_USD } from '@/lib/formatMissedLeadsUsdStat'
import { withPartnerCount } from '@/lib/site-partners'
import GlowCard from '@/app/components/GlowCard'
import {
  Briefcase,
  GraduationCap,
  Star,
} from 'lucide-react'

const GlobalPresenceMap = dynamic(() => import('@/app/components/GlobalPresenceMap'), {
  loading: () => (
    <div
      className="w-full min-h-[200px] md:min-h-[240px] rounded-2xl bg-surface-light/30 animate-pulse"
      aria-hidden
    />
  ),
})

// Hero Section, keyed by language so it remounts and shows correct translations when locale changes
function Hero() {
  const language = useLanguage()
  const t = translations[language].home.hero
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleReady = () => {
      setVideoReady(true)
    }

    // If the video already loaded before this effect ran, catch it
    if (video.readyState >= 3) {
      setVideoReady(true)
    }

    video.addEventListener('canplay', handleReady)
    video.addEventListener('loadeddata', handleReady)

    // Safety net: force load after a small delay
    const timer = setTimeout(() => {
      try { video.load() } catch {}
    }, 100)

    return () => {
      clearTimeout(timer)
      video.removeEventListener('canplay', handleReady)
      video.removeEventListener('loadeddata', handleReady)
    }
  }, [])

  const [heroProblem, ...heroSolutionParts] = t.subtitle.split(/(?<=[?.!؟])\s+/)
  const heroSolution = heroSolutionParts.join(' ')
  const heroCaptionLabel = {
    en: 'English',
    fr: 'Français',
    ar: 'العربية',
    de: 'Deutsch',
    es: 'Español',
  }[language]

  return (
    <section key={language} className="home-hero relative isolate min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden bg-background">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        src="/hero-bg.mp4"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${videoReady ? 'opacity-70' : 'opacity-30'}`}
      >
        <track kind="captions" srcLang={language} label={heroCaptionLabel} src="/hero-bg-captions.vtt" />
      </video>
      {/* Simple semi-transparent overlay for text readability */}
      <div className="absolute inset-0 bg-[image:var(--overlay-scrim-soft)] bg-cover" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10 w-full">
        {/* Plain h1 for LCP: motion.* with opacity:0 deferred paint until hydration + animation */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 max-w-4xl px-2 text-text">
          {t.title}
          <br />
          <span className="font-serif italic font-light gradient-text hero-highlight">{t.titleHighlight}</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mb-6 sm:mb-8 md:mb-10 leading-relaxed px-2"
        >
          {heroProblem}
          {heroSolution && (
            <span className="gradient-text hero-highlight mt-3 block font-semibold">
              {heroSolution}
            </span>
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10 px-2"
        >
          {[
            { value: t.stat2Value, label: '' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-2 sm:gap-3">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full flex-shrink-0" />
              <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                <span className="text-text text-sm sm:text-base font-semibold">{stat.value}</span>
                {stat.label && <span className="text-text text-sm sm:text-base font-semibold">{stat.label}</span>}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16 px-2"
        >
          <Link href="/about" className="btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center">
            {t.ourStory}
          </Link>
          <Link href="#what-we-do" className="!text-text !border-border-medium hover:!text-accent hover:!border-accent btn-secondary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center">
            {t.whatWeDo}
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ScrollIndicator direction="down" />
      </div>
    </section>
  )
}

// Mission & Values Section
function MissionValues() {
  const language = useLanguage()
  const m = translations[language].home.mission

  return (
    <AnimatedSection id="our-mission" className="py-24 md:py-28 relative overflow-hidden">
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
            <div className="pointer-events-none absolute top-0 right-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-accent/10 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 -translate-x-1/3 translate-y-1/3 rounded-full bg-success/10 blur-3xl" aria-hidden />

            <div className="relative">
              <h2 className="type-h2 font-bold mb-6 gradient-text-brand max-w-3xl mx-auto">
                {m.statement}
              </h2>
              <p className="type-body-lg text-muted max-w-2xl mx-auto leading-relaxed">
                {m.description}
              </p>
            </div>
          </GlowCard>
        </motion.div>

        <div className="flex items-center gap-4 mb-14 md:mb-16 max-w-2xl mx-auto" aria-hidden>
          <div className="flex-1 h-px bg-border" />
          <div className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(var(--accent-rgb),0.45)]" />
          <div className="flex-1 h-px bg-border" />
        </div>

        <CompanyValuesGrid mission={m} />
      </div>
    </AnimatedSection>
  )
}

// Our 2026 Commitment Section
function Commitment2026() {
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
    <AnimatedSection id="our-2026-commitment" className="py-24 md:py-28 border-y border-border/70 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-14">
          <div className="engineered-header-frame mb-6 inline-block">
            <span className="section-label !m-0">{c.badge}</span>
          </div>
          <h2 className="type-h2 font-bold text-text max-w-4xl mx-auto leading-tight">
            {c.title}
          </h2>
          <p className="type-body-lg text-muted mt-5 max-w-2xl mx-auto leading-relaxed">
            {c.subtitle}
          </p>
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

                <h3
                  className={`type-h4 mb-3 font-bold text-text transition-colors duration-300 ${
                    isAccent ? 'group-hover:text-accent' : 'group-hover:text-success'
                  }`}
                >
                  {pillar.title}
                </h3>
                <p className="type-body text-muted leading-relaxed">{pillar.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-10 md:mt-12 max-w-3xl mx-auto text-center"
        >
          <p className="type-body text-muted leading-relaxed">{c.proofLine}</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/future-ready-graduate" className="type-small font-semibold text-accent hover:underline">
              {c.proofLink1Text}
            </Link>
            <span className="hidden sm:inline text-border" aria-hidden>
              ·
            </span>
            <Link href="/careers" className="type-small font-semibold text-accent hover:underline">
              {c.proofLink2Text}
            </Link>
          </div>
          <a {...getBookingLinkProps()} className="btn-primary mt-8 inline-flex px-8 py-3.5">
            {c.ctaPrimary}
          </a>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

// What We're Fighting For Section
function WhatWereFightingFor() {
  const language = useLanguage()
  const locale = useLocale()
  const f = translations[language].home.fighting
  const missedLeadsStat = formatMissedLeadsUsdStat(MISSED_LEADS_USD, locale)
  const challenges = [
    { title: f.missedLeads, problem: f.missedLeadsProblem, solution: f.missedLeadsSolution, outcome: f.missedLeadsOutcome, icon: '📞', stat: missedLeadsStat, statLabel: f.missedLeadsStatLabel, theme: 'accent' as const },
    { title: f.skillsGap, problem: f.skillsGapProblem, solution: f.skillsGapSolution, outcome: f.skillsGapOutcome, icon: '🎓', stat: f.skillsGapStat, statLabel: f.skillsGapStatLabel, theme: 'success' as const },
    { title: f.techDivide, problem: f.techDivideProblem, solution: f.techDivideSolution, outcome: f.techDivideOutcome, icon: '⚖️', stat: f.techDivideStat, statLabel: f.techDivideStatLabel, theme: 'accent' as const },
  ]

  const themeStyles = {
    accent: {
      card: 'border-accent/30 bg-accent/5 hover:border-accent/50 hover:bg-accent/10',
      glow: 'bg-accent/10',
      stat: 'text-accent',
      statLabel: 'text-accent/80',
      iconWrap: 'bg-accent/15',
      problem: 'text-text',
      outcomeLabel: 'text-accent',
      outcome: 'text-accent',
    },
    success: {
      card: 'border-success/30 bg-success/5 hover:border-success/50 hover:bg-success/10',
      glow: 'bg-success/10',
      stat: 'text-success',
      statLabel: 'text-success/80',
      iconWrap: 'bg-success/15',
      problem: 'text-text',
      outcomeLabel: 'text-success',
      outcome: 'text-success',
    },
  }

  return (
    <AnimatedSection id="what-were-fighting-for" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="engineered-header-frame mb-6">
            <span className="section-label !m-0">{f.badge}</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            {f.title}<br />
            <span className="gradient-text">{f.subtitle}</span>
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            {f.realProblems}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, i) => {
            const styles = themeStyles[challenge.theme]

            return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex"
            >
              <div
                className={`group relative flex-1 overflow-hidden rounded-2xl border-2 p-8 transition-all duration-300 ${styles.card}`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl ${styles.glow}`} aria-hidden />

                <div className="relative">
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className={`font-display text-5xl md:text-6xl font-bold leading-none ${styles.stat}`}>
                        {challenge.stat}
                      </span>
                    </div>
                    <p className={`text-sm font-medium uppercase tracking-wider ${styles.statLabel}`}>
                      {challenge.statLabel}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform group-hover:scale-110 ${styles.iconWrap}`}>
                      {challenge.icon}
                    </div>
                    <h3 className="font-display text-xl font-bold text-text">
                      {challenge.title}
                    </h3>
                  </div>

                  <div className="mb-4 pb-4 border-b border-light">
                    <span className="text-xs uppercase tracking-wider text-muted-dark block mb-2">
                      {f.theProblem}
                    </span>
                    <p className={`font-semibold text-sm leading-relaxed ${styles.problem}`}>
                      {challenge.problem}
                    </p>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-wider text-muted-dark block mb-2">
                      {f.theSolution}
                    </span>
                    <p className="text-muted text-sm leading-relaxed">
                      {challenge.solution}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-light">
                    <span className={`text-xs uppercase tracking-wider block mb-2 ${styles.outcomeLabel}`}>
                      {f.theOutcome}
                    </span>
                    <p className={`font-medium text-sm leading-relaxed ${styles.outcome}`}>
                      {challenge.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="flex justify-center mt-12">
        <ScrollIndicator direction="down" />
      </div>
    </AnimatedSection>
  )
}

function ProofReviewStars({ color }: { color: 'accent' | 'success' | 'info' }) {
  const starColor =
    color === 'accent' ? 'text-accent' : color === 'success' ? 'text-success' : 'text-info'

  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-3 w-3 fill-current ${starColor}`} strokeWidth={0} aria-hidden />
      ))}
    </div>
  )
}

type ProofAvatarStyle = 'photo' | 'illustrated' | '3d'

function ProofClientAvatar({
  src,
  alt,
  style,
  color,
}: {
  src: string
  alt: string
  style: ProofAvatarStyle
  color: 'accent' | 'success' | 'info'
}) {
  const ringColor =
    color === 'accent' ? 'ring-accent/50' : color === 'success' ? 'ring-success/50' : 'ring-info/50'

  const frameClass =
    style === 'photo'
      ? 'rounded-full ring-2 ring-offset-2 ring-offset-background'
      : style === 'illustrated'
        ? 'rounded-2xl ring-2 ring-offset-2 ring-offset-background shadow-lg'
        : 'rounded-xl ring-2 ring-offset-2 ring-offset-background shadow-[0_0_24px_-6px_var(--brand-blue)]'

  return (
    <div className={`relative h-14 w-14 shrink-0 overflow-hidden ${frameClass} ${ringColor}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${style === 'illustrated' ? 'scale-105' : ''}`}
        sizes="56px"
      />
    </div>
  )
}

function WhatWeDo() {
  const language = useLanguage()
  const w = translations[language].home.whatWeDo
  const c = translations[language].home.caseStudies
  const ctaT = translations[language].cta
  const services: Array<{
    title: string
    subtitle: string
    description: string
    outcomes: string[]
    icon: string
    link: string
    color: 'accent' | 'success' | 'info'
    primaryCta: string
    secondaryCta: string
    proofClient: string
    proofIndustry: string
    proofDuration: string
    proofHeadshot: string
    proofAvatarStyle: ProofAvatarStyle
    proofResults: Array<{ value: string; label: string }>
  }> = [
    {
      title: w.aiEmployeeTitle,
      subtitle: w.forBusinesses,
      description: w.aiEmployeeApproach,
      outcomes: [w.aiEmployeeOutcome1, w.aiEmployeeOutcome2, w.aiEmployeeOutcome3],
      icon: '🤖',
      link: '/ai-receptionist',
      color: 'accent' as const,
      primaryCta: w.aiEmployeePrimaryCta,
      secondaryCta: w.aiEmployeeSecondaryCta,
      proofClient: c.study1Title,
      proofIndustry: c.healthcare,
      proofDuration: c.study1Duration,
      proofHeadshot: '/case-studies/headshots/healthcare.jpg',
      proofAvatarStyle: 'photo',
      proofResults: [
        { value: '100%', label: c.study1Result1 },
        { value: '300%', label: c.study1Result2 },
      ],
    },
    {
      title: w.futureReadyTitle,
      subtitle: w.forSchools,
      description: w.futureReadyApproach,
      outcomes: [w.futureReadyOutcome1, w.futureReadyOutcome2, w.futureReadyOutcome3],
      icon: '🎓',
      link: '/future-ready-graduate',
      color: 'success' as const,
      primaryCta: w.futureReadyPrimaryCta,
      secondaryCta: w.futureReadySecondaryCta,
      proofClient: c.study2Title,
      proofIndustry: c.education,
      proofDuration: c.study2Duration,
      proofHeadshot: '/case-studies/headshots/education.jpg',
      proofAvatarStyle: 'illustrated',
      proofResults: [
        { value: '85%', label: c.study2Result1 },
        { value: '150%', label: c.study2Result2 },
      ],
    },
    {
      title: w.agenticSoftwaresTitle,
      subtitle: w.forUniqueNeeds,
      description: w.agenticSoftwaresApproach,
      outcomes: [w.agenticSoftwaresOutcome1, w.agenticSoftwaresOutcome2, w.agenticSoftwaresOutcome3],
      icon: '⚙️',
      link: '/agentic-softwares',
      color: 'info' as const,
      primaryCta: w.agenticSoftwaresPrimaryCta,
      secondaryCta: w.agenticSoftwaresSecondaryCta,
      proofClient: c.study3Title,
      proofIndustry: c.software,
      proofDuration: c.study3Duration,
      proofHeadshot: '/case-studies/headshots/software.jpg',
      proofAvatarStyle: '3d',
      proofResults: [
        { value: '90%', label: c.study3Result1 },
        { value: '10k+', label: c.study3Result2 },
      ],
    },
  ]

  return (
    <AnimatedSection id="what-we-do" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">{w.badge}</span>
          <h2 className="type-h2 font-bold mt-4 mb-6">
            {w.title}
            <br />
            <span className="gradient-text">{w.subtitle}</span>
          </h2>
          <p className="type-body-lg text-muted max-w-3xl mx-auto">
            {w.whatWeDoDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`card p-8 group flex flex-col ${
                service.color === 'accent'
                  ? 'hover:border-accent/50'
                  : service.color === 'success'
                    ? 'hover:border-success/50'
                    : 'hover:border-info/50'
              }`}
            >
              <div className="mb-6">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform ${
                    service.color === 'accent'
                      ? 'bg-accent/10'
                      : service.color === 'success'
                        ? 'bg-success/10'
                        : 'bg-info/10'
                  }`}
                >
                  {service.icon}
                </div>
                <span
                  className={`type-caption font-semibold uppercase tracking-wider ${
                    service.color === 'accent'
                      ? 'text-accent'
                      : service.color === 'success'
                        ? 'text-success'
                        : 'text-info'
                  }`}
                >
                  {service.subtitle}
                </span>
                <h3
                  className={`type-h4 font-bold mt-2 mb-4 transition-colors ${
                    service.color === 'accent'
                      ? 'group-hover:text-accent'
                      : service.color === 'success'
                        ? 'group-hover:text-success'
                        : 'group-hover:text-info'
                  }`}
                >
                  {service.title}
                </h3>
              </div>

              <p className="type-body text-muted mb-6 leading-relaxed flex-grow">{service.description}</p>

              <div className="mb-6 space-y-2">
                {service.outcomes.map((outcome, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        service.color === 'accent'
                          ? 'bg-accent'
                          : service.color === 'success'
                            ? 'bg-success'
                            : 'bg-info'
                      }`}
                    />
                    <span className="type-small text-muted">{outcome}</span>
                  </div>
                ))}
              </div>

              <div className="relative mb-6 overflow-hidden rounded-xl border border-border/80 bg-background/60 p-4">
                <div
                  className={`pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full blur-2xl ${
                    service.color === 'accent'
                      ? 'bg-accent/20'
                      : service.color === 'success'
                        ? 'bg-success/20'
                        : 'bg-info/20'
                  }`}
                  aria-hidden
                />
                <div className="relative mb-3 flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <ProofClientAvatar
                      src={service.proofHeadshot}
                      alt={service.proofClient}
                      style={service.proofAvatarStyle}
                      color={service.color}
                    />
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
                        <span className="type-caption uppercase tracking-wider text-muted-dark">
                          {c.realClients}
                        </span>
                      </div>
                      <ProofReviewStars color={service.color} />
                    </div>
                  </div>
                </div>
                <p className="type-small font-semibold text-text">{service.proofClient}</p>
                <p className="type-caption text-muted mt-0.5">
                  {service.proofIndustry} · {service.proofDuration}
                </p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                  {service.proofResults.map((result) => (
                    <span key={result.label} className="type-small">
                      <span
                        className={`font-display font-bold ${
                          service.color === 'accent'
                            ? 'text-accent'
                            : service.color === 'success'
                              ? 'text-success'
                              : 'text-info'
                        }`}
                      >
                        {result.value}
                      </span>{' '}
                      <span className="text-muted">{result.label}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-auto">
                <Link href={service.link} className="btn-primary text-center text-sm py-2.5">
                  {service.primaryCta}
                </Link>
                <a {...getBookingLinkProps()} className="btn-secondary text-center text-sm py-2.5">
                  {service.secondaryCta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/case-studies" className="btn-secondary">
            {c.viewAll}
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-success/20 rounded-3xl blur-2xl opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-success/15 rounded-3xl" />

            <div className="relative p-12 md:p-16 bg-gradient-to-br from-accent/10 via-surface to-success/10 border-2 border-transparent hover:border-border-foreground transition-all duration-300 rounded-3xl">
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="inline-block mb-6 relative"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute inset-0 bg-accent/30 rounded-2xl blur-xl"
                  />

                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute inset-0 border-2 border-accent/40 rounded-2xl"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                    }}
                  />

                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-accent/40"
                  >
                    <motion.div
                      animate={{
                        filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="text-4xl md:text-5xl"
                    >
                      💡
                    </motion.div>

                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-accent rounded-full"
                        animate={{
                          x: [
                            Math.cos((i * 60) * Math.PI / 180) * 0,
                            Math.cos((i * 60) * Math.PI / 180) * 30,
                            Math.cos((i * 60) * Math.PI / 180) * 0,
                          ],
                          y: [
                            Math.sin((i * 60) * Math.PI / 180) * 0,
                            Math.sin((i * 60) * Math.PI / 180) * 30,
                            Math.sin((i * 60) * Math.PI / 180) * 0,
                          ],
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: 'easeInOut',
                        }}
                        style={{
                          left: '50%',
                          top: '50%',
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>

                <h3 className="type-h3 font-bold mb-4 text-text">{w.notSureTitle}</h3>
                <p className="type-body-lg text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
                  {w.notSureSubtitle}
                </p>
                <Link
                  href={ctaConfig.digniPath}
                  className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-light text-background font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <span className="type-body-lg">{ctaT.talkToDigniGuide ?? ctaT.getStarted}</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

// Animated Counter Component
function Counter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, end])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

// Stats Section
function Stats() {
  const language = useLanguage()
  const s = translations[language].home.stats
  const stats = [
    { value: 300, suffix: '%', label: s.stat1Label, sublabel: s.stat1Sublabel },
    { value: 85, suffix: '%', label: s.stat2Label, sublabel: s.stat2Sublabel },
    { value: 24, suffix: '/7', label: s.stat3Label, sublabel: s.stat3Sublabel },
    { value: 98, suffix: '%', label: s.stat4Label, sublabel: s.stat4Sublabel },
  ]

  return (
    <AnimatedSection id="proven-track-record" className="py-24 relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">{s.badge}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            {s.title}<br />
            <span className="gradient-text">{s.subtitle}</span>
          </h2>
          <p className="text-muted text-lg mt-4">
            {s.realNumbers || 'Real numbers. Real clients.'}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-text font-semibold mb-1">{stat.label}</p>
              <p className="text-muted text-sm">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-display font-bold mb-2">{s.aiEmployeeCard}</h3>
              <p className="text-muted text-sm">{withPartnerCount(s.aiEmployeeCardSub)}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card p-6"
            >
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-display font-bold mb-2">{s.futureReadyCard}</h3>
              <p className="text-muted text-sm">{s.futureReadyCardSub}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card p-6"
            >
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="font-display font-bold mb-2">{s.agenticCard}</h3>
              <p className="text-muted text-sm">{s.agenticCardSub}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

// Global Presence Section
function GlobalPresence() {
  const language = useLanguage()
  const g = translations[language].home.globalPresence
  return (
    <AnimatedSection id="global-presence" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">{g.badge}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            {g.title}<br />
            <span className="gradient-text">{g.subtitle}</span>
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            {g.subtext}
          </p>
        </div>

        <GlobalPresenceMap showToggle={true} initialExpanded={false} />
      </div>
    </AnimatedSection>
  )
}

// CTA Section - Book Consultation
function CTASection() {
  const { theme } = useTheme()
  const ctaSectionRef = useRef(null)
  const isCtaSectionInView = useInView(ctaSectionRef, { margin: '-25% 0px -25% 0px' })
  const language = useLanguage()
  const cta = translations[language].home.ctaSection
  const ctaT = translations[language].cta
  const shouldUseLightSection = theme === 'dark' && isCtaSectionInView
  return (
    <AnimatedSection className={`py-32 relative overflow-hidden transition-colors duration-500 ${
      shouldUseLightSection ? 'md:bg-white' : ''
    }`}>
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 transition-colors duration-500 ${
          shouldUseLightSection ? 'md:bg-white' : 'bg-gradient-to-br from-accent/5 via-transparent to-accent/10'
        }`} />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div ref={ctaSectionRef} className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Decorative border frame */}
          <div className="absolute -inset-px bg-gradient-to-br from-accent/40 via-accent/10 to-accent/40 rounded-3xl" />

          <div className="relative bg-surface rounded-3xl p-12 md:p-16 lg:p-20">
            {/* Corner accents */}
            <div className={`absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 rounded-tl-3xl ${
              'border-border-foreground'
            }`} />
            <div className={`absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 rounded-br-3xl ${
              'border-border-foreground'
            }`} />

            <div className="text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block px-5 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium tracking-wide mb-8"
              >
                {cta.badge}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                {cta.title}
                <br />
                <span className="gradient-text">{cta.titleHighlight}</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-text/90 text-base md:text-lg max-w-xl mx-auto mb-10 font-medium"
              >
                {cta.mechanism}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
              >
                <Link
                  href={ctaConfig.digniPath}
                  className="group relative inline-flex items-center gap-3 bg-accent hover:bg-accent-light text-background font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <span className="text-lg">{ctaT.talkToDigniGuide ?? ctaT.getStarted}</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a {...getBookingLinkProps()} className="btn-secondary text-lg px-8 py-4">
                  {ctaT.bookDemo}
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center gap-8 text-sm text-muted"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span>{cta.bullet1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span>{cta.bullet2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span>{cta.bullet3}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}


// Main Page Component
// Growth operator: Proof (Stats) → Offer + proof (WhatWeDo) → conversion (CTA)
type HomePageProps = {
  params: Promise<{ locale: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default function Home({ params, searchParams }: HomePageProps) {
  use(params)
  use(searchParams ?? Promise.resolve({}))
  const language = useLanguage()
  const aboutT = translations[language].about
  return (
    <main>
      <Hero />
      <ClientLogos badge={aboutT.trustedByBadge} title={aboutT.trustedByTitle} subtitle={aboutT.trustedBySubtitle} />
      <MissionValues />
      <Commitment2026 />
      <WhatWereFightingFor />
      <Stats />
      <WhatWeDo />
      <GlobalPresence />
      <CTASection />
    </main>
  )
}
