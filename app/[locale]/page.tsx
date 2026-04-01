'use client'

import { use, useState, useEffect, useRef, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import AnimatedSection from '@/app/components/AnimatedSection'
import ScrollIndicator from '@/app/components/ScrollIndicator'
import GlobalPresenceMap from '@/app/components/GlobalPresenceMap'
import ClientLogos from '@/app/components/ClientLogos'
import { useTheme } from '@/app/components/ThemeProvider'
import { getBookingLinkProps } from '@/app/config/cta.config'
import { useLanguage, useLocale } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { formatMissedLeadsUsdStat, MISSED_LEADS_USD } from '@/lib/formatMissedLeadsUsdStat'

const TYPING_INTERVAL_MS = 80
const PAUSE_WHEN_COMPLETE_MS = 1800

// Hero Section — keyed by language so it remounts and shows correct translations when locale changes
function Hero() {
  const language = useLanguage()
  const t = translations[language].home.hero
  const badgeOptions = useMemo(() => [t.badge1, t.badge2, t.badge3], [t.badge1, t.badge2, t.badge3])
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)
  const [targetPhrase, setTargetPhrase] = useState<string>(t.badge1)
  const [displayedText, setDisplayedText] = useState<string>('')
  const [isTyping, setIsTyping] = useState(true)
  const indexRef = useRef(0)
  const targetRef = useRef(t.badge1)
  const phraseIndexRef = useRef(0)
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Typewriter: when target phrase changes, clear and type it out character by character
  useEffect(() => {
    targetRef.current = targetPhrase
    setDisplayedText('')
    indexRef.current = 0
    setIsTyping(true)

    const id = setInterval(() => {
      const currentTarget = targetRef.current
      const i = indexRef.current
      if (i >= currentTarget.length) {
        clearInterval(id)
        setIsTyping(false)
        pauseTimeoutRef.current = setTimeout(() => {
          setDisplayedText('')
          const next = (phraseIndexRef.current + 1) % badgeOptions.length
          phraseIndexRef.current = next
          setTargetPhrase(badgeOptions[next])
          pauseTimeoutRef.current = null
        }, PAUSE_WHEN_COMPLETE_MS)
        return
      }
      indexRef.current = i + 1
      setDisplayedText(currentTarget.slice(0, i + 1))
    }, TYPING_INTERVAL_MS)

    return () => {
      clearInterval(id)
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current)
        pauseTimeoutRef.current = null
      }
    }
  }, [targetPhrase, badgeOptions])

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

  return (
    <section key={language} className="home-hero relative isolate min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden bg-background">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        src="/hero-bg.mp4"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ${videoReady ? 'opacity-70' : 'opacity-30'}`}
      >
        <track kind="captions" srcLang="en" label="English" src="/hero-bg-captions.vtt" />
      </video>
      {/* Simple semi-transparent overlay for text readability */}
      <div className="absolute inset-0 bg-[image:var(--overlay-scrim-soft)] bg-cover" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 sm:mb-6"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-xs sm:text-sm font-medium">
            {displayedText}
            {isTyping && (
              <span className="inline-block w-0.5 h-4 sm:h-[1.1em] bg-accent ml-0.5 align-middle animate-pulse" aria-hidden />
            )}
          </span>
        </motion.div>

        {/* Plain h1 for LCP: motion.* with opacity:0 deferred paint until hydration + animation */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 max-w-4xl px-2 text-text">
          {t.title}
          <br />
          <span className="gradient-text hero-highlight">{t.titleHighlight}</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mb-6 sm:mb-8 md:mb-10 leading-relaxed px-2"
        >
          {t.subtitle}
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
  const values = [
    { title: m.humanFirst, description: m.humanFirstDesc, icon: '🤝', principle: m.humanFirstPrinciple },
    { title: m.equalAccess, description: m.equalAccessDesc, icon: '⚖️', principle: m.equalAccessPrinciple },
    { title: m.realResults, description: m.realResultsDesc, icon: '⚡', principle: m.realResultsPrinciple },
    { title: m.builtToLast, description: m.builtToLastDesc, icon: '🌱', principle: m.builtToLastPrinciple },
  ]

  return (
    <AnimatedSection id="our-mission" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">{m.title}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-8 max-w-4xl mx-auto">
            {m.statement}
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            {m.description}
          </p>
        </motion.div>

        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">{m.valuesTitle}</span>
          <h3 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
            {m.valuesSubtitle}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card p-8 group hover:border-accent/50"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                  {value.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-muted mb-4 leading-relaxed">
                    {value.description}
                  </p>
                  <blockquote className="text-accent italic text-sm font-medium border-l-2 border-accent/30 pl-4">
                    "{value.principle}"
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

// Our 2026 Commitment Section
function Commitment2026() {
  const language = useLanguage()
  const c = translations[language].home.commitment2026

  return (
    <AnimatedSection id="our-2026-commitment" className="py-24 md:py-28 relative overflow-hidden">
      {/* Distinct background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-background to-surface opacity-90" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header: badge + headline with emphasis on numbers */}
        <div className="text-center mb-14">
          <span className="section-label">{c.badge}</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-5 max-w-4xl mx-auto leading-tight gradient-text">
            {c.title}
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto">
            {c.subtitle}
          </p>
        </div>

        {/* Two pillars as prominent stat cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="relative rounded-2xl border-2 border-accent/30 bg-accent/5 p-8 md:p-10 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform" />
            <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/20 text-4xl flex-shrink-0">
                💼
              </div>
              <div className="flex-1">
                <div className="font-display text-5xl md:text-6xl font-bold text-accent mb-1">100</div>
                <h3 className="font-display text-lg font-bold text-text mb-2">
                  {c.pillar1Title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{c.pillar1Desc}</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="relative rounded-2xl border-2 border-success/30 bg-success/5 p-8 md:p-10 hover:border-success/50 hover:bg-success/10 transition-all duration-300 group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-success/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform" />
            <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-success/20 text-4xl flex-shrink-0">
                🎓
              </div>
              <div className="flex-1">
                <div className="font-display text-5xl md:text-6xl font-bold text-success mb-1">10,000</div>
                <h3 className="font-display text-lg font-bold text-text mb-2">
                  {c.pillar2Title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{c.pillar2Desc}</p>
              </div>
            </div>
          </motion.div>
        </div>
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
    { title: f.missedLeads, problem: f.missedLeadsProblem, solution: f.missedLeadsSolution, outcome: f.missedLeadsOutcome, icon: '📞', stat: missedLeadsStat, statLabel: f.missedLeadsStatLabel },
    { title: f.skillsGap, problem: f.skillsGapProblem, solution: f.skillsGapSolution, outcome: f.skillsGapOutcome, icon: '🎓', stat: f.skillsGapStat, statLabel: f.skillsGapStatLabel },
    { title: f.techDivide, problem: f.techDivideProblem, solution: f.techDivideSolution, outcome: f.techDivideOutcome, icon: '⚖️', stat: f.techDivideStat, statLabel: f.techDivideStatLabel },
  ]

  return (
    <AnimatedSection id="what-were-fighting-for" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">{f.badge}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            {f.title}<br />
            <span className="gradient-text">{f.subtitle}</span>
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            {f.realProblems}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card p-8 hover:border-destructive/50 group relative overflow-hidden"
            >
              {/* Gradient background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/5 rounded-full blur-3xl" />
              
              <div className="relative">
                {/* Stat - Prominent and Bold */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-display text-5xl md:text-6xl font-bold text-destructive leading-none">
                      {challenge.stat}
                    </span>
                  </div>
                  <p className="text-destructive/80 text-sm font-medium uppercase tracking-wider">
                    {challenge.statLabel}
                  </p>
                </div>

                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {challenge.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-text">
                    {challenge.title}
                  </h3>
                </div>

                {/* Problem */}
                <div className="mb-4 pb-4 border-b border-light">
                  <span className="text-xs uppercase tracking-wider text-muted-dark block mb-2">
                    {f.theProblem}
                  </span>
                  <p className="text-destructive font-semibold text-sm leading-relaxed">
                    {challenge.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-wider text-muted-dark block mb-2">
                    {f.theSolution}
                  </span>
                  <p className="text-muted text-sm leading-relaxed">
                    {challenge.solution}
                  </p>
                </div>

                {/* Outcome */}
                <div className="pt-4 border-t border-light">
                  <span className="text-xs uppercase tracking-wider text-accent block mb-2">
                    {f.theOutcome}
                  </span>
                  <p className="text-accent font-medium text-sm leading-relaxed">
                    {challenge.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="flex justify-center mt-12">
        <ScrollIndicator direction="down" />
      </div>
    </AnimatedSection>
  )
}

// What We Do Section
function WhatWeDo() {
  const language = useLanguage()
  const w = translations[language].home.whatWeDo
  const ctaT = translations[language].cta
  const services = [
    {
      title: w.aiEmployeeTitle,
      subtitle: w.forBusinesses,
      description: w.aiEmployeeDesc,
      approach: w.aiEmployeeApproach,
      outcomes: [w.aiEmployeeOutcome1, w.aiEmployeeOutcome2, w.aiEmployeeOutcome3, w.aiEmployeeOutcome4],
      icon: '🤖',
      link: '/ai-receptionist',
      color: 'accent' as const,
      primaryCta: w.aiEmployeePrimaryCta,
      secondaryCta: w.aiEmployeeSecondaryCta,
    },
    {
      title: w.futureReadyTitle,
      subtitle: w.forSchools,
      description: w.futureReadyDesc,
      approach: w.futureReadyApproach,
      outcomes: [w.futureReadyOutcome1, w.futureReadyOutcome2, w.futureReadyOutcome3, w.futureReadyOutcome4],
      icon: '🎓',
      link: '/future-ready-graduate',
      color: 'success' as const,
      primaryCta: w.futureReadyPrimaryCta,
      secondaryCta: w.futureReadySecondaryCta,
    },
    {
      title: w.agenticSoftwaresTitle,
      subtitle: w.forUniqueNeeds,
      description: w.agenticSoftwaresDesc,
      approach: w.agenticSoftwaresApproach,
      outcomes: [w.agenticSoftwaresOutcome1, w.agenticSoftwaresOutcome2, w.agenticSoftwaresOutcome3, w.agenticSoftwaresOutcome4],
      icon: '⚙️',
      link: '/agentic-softwares',
      color: 'info' as const,
      primaryCta: w.agenticSoftwaresPrimaryCta,
      secondaryCta: w.agenticSoftwaresSecondaryCta,
    },
  ]

  return (
    <AnimatedSection id="what-we-do" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">{w.badge}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            {w.title}<br />
            <span className="gradient-text">{w.subtitle}</span>
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            {w.whatWeDoDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card p-8 hover:border-accent/50 group flex flex-col"
            >
              {/* Header */}
              <div className="mb-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform ${
                  service.color === 'accent' ? 'bg-accent/10' :
                  service.color === 'success' ? 'bg-success/10' :
                  'bg-info/10'
                }`}>
                  {service.icon}
                </div>
                <span className={`text-xs font-semibold uppercase tracking-wider ${
                  service.color === 'accent' ? 'text-accent' :
                  service.color === 'success' ? 'text-success' :
                  'text-info'
                }`}>
                  {service.subtitle}
                </span>
                <h3 className="font-display text-2xl font-bold mt-2 mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Key Outcomes */}
              <div className="mb-6 space-y-2">
                {service.outcomes.slice(0, 3).map((outcome, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      service.color === 'accent' ? 'bg-accent' :
                      service.color === 'success' ? 'bg-success' :
                      'bg-info'
                    }`} />
                    <span className="text-sm text-muted">{outcome}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 mt-auto">
                <Link 
                  href={service.link}
                  className="btn-primary text-center text-sm py-2.5"
                >
                  {service.primaryCta}
                </Link>
                <a
                  {...getBookingLinkProps()}
                  className="btn-secondary text-center text-sm py-2.5"
                >
                  {service.secondaryCta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="relative overflow-hidden">
            {/* Enhanced gradient background with glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-success/20 rounded-3xl blur-2xl opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-success/15 rounded-3xl" />
            
            <div className="relative p-12 md:p-16 bg-gradient-to-br from-accent/10 via-surface to-success/10 border-2 border-transparent hover:border-border-foreground transition-all duration-300 rounded-3xl">
              
              <div className="relative z-10">
                {/* Dynamic animated lightbulb */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="inline-block mb-6 relative"
                >
                  {/* Pulsing glow behind bulb */}
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
                  
                  {/* Rotating glow ring */}
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
                  
                  {/* Main bulb container with flicker */}
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
                    {/* Lightbulb emoji with brightness animation */}
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
                    
                    {/* Sparkle particles */}
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
                
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-text">
                  {w.notSureTitle}
                </h3>
                <p className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
                  {w.notSureSubtitle}
                </p>
                <a
                  {...getBookingLinkProps()}
                  className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-light text-background font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-lg"
                >
                  <span>{ctaT.bookStrategy}</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
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
              <p className="text-muted text-sm">{s.aiEmployeeCardSub}</p>
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

// Case Studies Section
function CaseStudies() {
  const [expanded, setExpanded] = useState<number | null>(null)
  const language = useLanguage()
  const c = translations[language].home.caseStudies
  const studies = [
    {
      solution: 'AI Employee™',
      industry: c.healthcare,
      title: c.study1Title,
      duration: c.study1Duration,
      problem: c.study1Problem,
      results: [
        { value: '100%', label: c.study1Result1 },
        { value: '300%', label: c.study1Result2 },
        { value: '$240k', label: c.study1Result3 },
      ],
      icon: '🤖',
      color: 'accent' as const
    },
    {
      solution: 'Future-Ready Graduate Program',
      industry: c.education,
      title: c.study2Title,
      duration: c.study2Duration,
      problem: c.study2Problem,
      results: [
        { value: '85%', label: c.study2Result1 },
        { value: '150%', label: c.study2Result2 },
        { value: '95%', label: c.study2Result3 },
      ],
      icon: '🎓',
      color: 'success' as const
    },
    {
      solution: 'Agentic Softwares',
      industry: c.software,
      title: c.study3Title,
      duration: c.study3Duration,
      problem: c.study3Problem,
      results: [
        { value: '90%', label: c.study3Result1 },
        { value: '10k+', label: c.study3Result2 },
        { value: '4.8/5', label: c.study3Result3 },
      ],
      icon: '⚙️',
      color: 'purple' as const
    },
  ]

  return (
    <AnimatedSection id="case-studies" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">{c.badge}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4">
            {c.title}<br />
            <span className="gradient-text">{c.subtitle}</span>
          </h2>
          <p className="text-muted text-lg">{c.realClients || 'Real clients. Real numbers.'}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {studies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card p-8 cursor-pointer group hover:border-accent/50"
              onClick={() => setExpanded(expanded === i ? null : i)}
              role="button"
              tabIndex={0}
              aria-expanded={expanded === i}
              aria-label={expanded === i ? `Collapse case study: ${study.title}` : `Expand case study: ${study.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setExpanded(expanded === i ? null : i)
                }
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${
                  study.color === 'accent' ? 'bg-accent/10' : study.color === 'purple' ? 'bg-purple/10' : 'bg-success/10'
                }`}>
                  {study.icon}
                </div>
                <div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${
                    study.color === 'accent' ? 'bg-accent/10 text-accent' : study.color === 'purple' ? 'bg-purple/10 text-purple' : 'bg-success/10 text-success'
                  }`}>
                    {study.solution}
                  </span>
                </div>
              </div>

              <span className="text-muted-dark text-xs uppercase tracking-wider">{study.industry}</span>
              <h3 className="font-display text-xl font-bold mb-4">{study.title}</h3>

              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider text-muted-dark">{c.challenge}</span>
                <p className="text-muted text-sm mt-1">{study.problem}</p>
              </div>

              <motion.div
                initial={false}
                animate={{ height: expanded === i ? 'auto' : 0, opacity: expanded === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="space-y-4 pt-4 border-t border-border-light">
                  <span className="text-xs uppercase tracking-wider text-muted-dark">{c.results}</span>
                  {study.results.map((result, j) => (
                    <div key={j} className="flex justify-between items-center gap-4">
                      <span className="text-muted text-sm flex-1 min-w-0">{result.label}</span>
                      <span className={`font-display text-xl font-bold whitespace-nowrap shrink-0 ${
                        study.color === 'accent' ? 'text-accent' : study.color === 'purple' ? 'text-purple' : 'text-success'
                      }`}>{result.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className={`mt-4 text-sm font-medium transition-colors ${
                study.color === 'accent' 
                  ? 'text-accent group-hover:text-accent-light' 
                  : study.color === 'purple'
                    ? 'text-purple group-hover:text-purple-light'
                    : 'text-success group-hover:text-success/80'
              }`}>
                {expanded === i ? c.clickCollapse : c.clickExpand}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/case-studies" className="btn-secondary">{c.viewAll}</Link>
            <a
              {...getBookingLinkProps()}
              className="btn-primary"
            >
              {translations[language].cta.getSimilarResults}
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

// CTA Section - Book Consultation
function CTASection() {
  const { theme } = useTheme()
  const language = useLanguage()
  const cta = translations[language].home.ctaSection
  const ctaT = translations[language].cta
  return (
    <AnimatedSection className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
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
                className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed"
              >
                {cta.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.42 }}
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
                <a
                  {...getBookingLinkProps()}
                  className="group relative inline-flex items-center gap-3 bg-accent hover:bg-accent-light text-background font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <span className="text-lg">{ctaT.bookConsultation}</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
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
// Growth operator: Proof (Stats, CaseStudies) before conversion CTAs (WhatWeDo, CTA)
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
      <CaseStudies />
      <WhatWeDo />
      <GlobalPresence />
      <CTASection />
    </main>
  )
}
