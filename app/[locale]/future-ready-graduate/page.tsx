'use client'

import { use, useState, useRef, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import AnimatedSection from '@/app/components/AnimatedSection'
import PremiumHeroBackdrop from '@/app/components/PremiumHeroBackdrop'
import PremiumHeroParallax from '@/app/components/PremiumHeroParallax'
import ScrollIndicator from '@/app/components/ScrollIndicator'
import VideoModal from '@/app/components/VideoModal'
import VideoThumbnail from '@/app/components/VideoThumbnail'
import DemoPresentationDownload from '@/app/components/DemoPresentationDownload'
import EarlyAccessFormModal from '@/app/components/EarlyAccessFormModal'
import StripeCheckoutButton from '@/app/components/StripeCheckoutButton'
import { ctaConfig, getBookingLinkProps } from '@/app/config/cta.config'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { getFutureReadyGraduateJsonLd, jsonLdScriptProps } from '@/lib/agent-readiness'
import {
  type FutureReadyOffering,
  visibleDefaultFutureReadyOfferings,
} from '@/lib/future-ready-offerings'

type FutureReadyGraduatePageProps = {
  params: Promise<{ locale: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default function FutureReadyGraduatePage({ params, searchParams }: FutureReadyGraduatePageProps) {
  const { locale } = use(params)
  use(searchParams ?? Promise.resolve({}))
  const [selectedVideo, setSelectedVideo] = useState<{ src: string; title: string; speaker: string; description: string } | null>(null)
  const [earlyAccessOpen, setEarlyAccessOpen] = useState(false)
  const skillsScrollRef = useRef<HTMLDivElement>(null)
  const language = useLanguage()
  const pageJsonLd = getFutureReadyGraduateJsonLd(locale)

  const digitalSkillsReasons = [
    { icon: '💰', label: 'Freedom trifecta', title: 'Income Freedom', description: 'Build skills that can turn into paid projects, better jobs, and multiple income streams.' },
    { icon: '🌍', label: 'Freedom trifecta', title: 'Location Freedom', description: 'Work with clients, teams, or employers beyond your city, country, or local job market.' },
    { icon: '⏰', label: 'Freedom trifecta', title: 'Time Freedom', description: 'Learn flexible digital work systems you can shape around school, family, or a job.' },
    { icon: '🤖', label: 'AI advantage', title: 'AI-Powered Leverage', description: 'Use modern AI tools to produce faster, compete sooner, and avoid being left behind.' },
    { icon: '🎓', label: 'Proof', title: 'Future-Ready Certification', description: 'Leave with a clear signal that shows you understand practical digital and AI-ready work.' },
    { icon: '🚀', label: 'Pathway', title: 'From Learning to Earning', description: 'Turn lessons into a portfolio, service offers, job readiness, and entrepreneurial action.' },
  ]

  const ctaT = translations[language].cta
  const pageT = translations[language].futureReadyGraduate
  const [pricing, setPricing] = useState<FutureReadyOffering[]>(visibleDefaultFutureReadyOfferings())
  const heroTitles = useMemo(
    () => [
      `${pageT.heroTitleLine1} ${pageT.heroTitleHighlight}`,
      pageT.heroAlternateTitle,
    ],
    [pageT.heroAlternateTitle, pageT.heroTitleHighlight, pageT.heroTitleLine1]
  )
  const [heroTitleIndex, setHeroTitleIndex] = useState(0)
  const pathsHeading = pricing.length === 3 ? pageT.threePaths : pageT.threePaths.replace(/^(Three|Trois)\s+/i, '')

  const outcomes = [
    {
      metric: '85%',
      description: 'Graduate employment rate within 6 months',
      detail: 'Compared to 45% industry average'
    },
    {
      metric: '150%',
      description: 'Average salary increase for graduates',
      detail: 'Versus non-program graduates'
    },
    {
      metric: '95%',
      description: 'Employer satisfaction rating',
      detail: 'From our hiring partner network'
    },
    {
      metric: '85+',
      description: 'Learners per flagship cohort',
      detail: 'Across partner institutions'
    }
  ]


  const caseStudy = {
    school: 'GS Laricharde',
    location: 'Kinshasa, Monga Fula',
    challenge: '45% employed after 12 months. No practical skills.',
    implementation: 'Full program. Final year. September-July. Ministry breaks respected.',
    projections: [
      { metric: '85%', description: 'Target graduate employment rate' },
      { metric: '≥1.4M FC', description: 'Projected starting salary (min. ~$500 equiv.)' },
      { metric: '50+', description: 'Target employer partnerships' },
      { metric: '8 months', description: 'Projected program ROI payback period' }
    ],
    timeline: 'September 2024 - July 2025 (Full Academic Year - Ongoing)',
    testimonial: '"The program timing was perfect. Students learned during school hours, and the breaks gave them time to practice. By graduation, they were genuinely job ready." - GS Laricharde Administration'
  }

  useEffect(() => {
    setHeroTitleIndex(0)
  }, [heroTitles])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHeroTitleIndex((current) => (current + 1) % heroTitles.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [heroTitles.length])

  useEffect(() => {
    let cancelled = false

    async function loadOfferings() {
      try {
        const res = await fetch('/api/future-ready-offerings')
        const data = await res.json()
        if (!cancelled && res.ok && Array.isArray(data.offerings)) {
          setPricing(data.offerings)
        }
      } catch {
        // Keep the static fallback if the CMS table/API is not available yet.
      }
    }

    void loadOfferings()

    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      const carousel = skillsScrollRef.current
      const firstCard = carousel?.firstElementChild as HTMLElement | null

      if (!carousel || !firstCard) {
        return
      }

      const gap = Number.parseFloat(window.getComputedStyle(carousel).columnGap || '0')
      const step = firstCard.getBoundingClientRect().width + gap
      const loopWidth = carousel.scrollWidth / 2
      const nextLeft = carousel.scrollLeft + step

      carousel.scrollTo({
        left: nextLeft >= loopWidth ? nextLeft - loopWidth : nextLeft,
        behavior: nextLeft >= loopWidth ? 'auto' : 'smooth',
      })
    }, 3200)

    return () => window.clearInterval(timer)
  }, [])

  const featuredVideos = [
    {
      src: '/Strive Masiyiwa emphasized that entrepreneurship is a mindset focused on solving real problems, .mp4',
      title: 'Entrepreneurship as Problem-Solving',
      speaker: 'Strive Masiyiwa',
      description: 'The fundamental challenge: entrepreneurship isn\'t about building products, it\'s a mindset focused on solving real problems.',
      thumbnail: null
    },
    {
      src: '/Einstein on What Intelligence Really Means... .mp4',
      title: 'What Intelligence Really Means',
      speaker: 'Albert Einstein',
      description: 'A timeless perspective on intelligence and the importance of thinking differently in an evolving world.',
      thumbnail: null
    },
    {
      src: '/The world evolved. Education didn\u2019t.Look around- cars transformed, cities transformed, communica.mp4',
      title: 'Education Must Evolve',
      speaker: 'Global Thought Leader',
      description: 'The world has transformed in every way, except education. It\'s time for education to catch up with the digital revolution.',
      thumbnail: null
    },
    {
      src: '/Kim Kiyosaki says the school system trains students to follow instructions instead of think crea.mp4',
      title: 'School System vs Creative Thinking',
      speaker: 'Kim Kiyosaki',
      description: 'The school system trains students to follow instructions instead of thinking creatively, a critical insight for modern education.',
      thumbnail: null
    },
    {
      src: '/The era of the solo billionaire may be closer than we think. OpenAI CEO Sam Altman believes one .mp4',
      title: 'The Era of Solo Billionaires',
      speaker: 'Sam Altman',
      description: 'OpenAI CEO Sam Altman believes the era of solo billionaires may be closer than we think, powered by AI and individual capability.',
      thumbnail: null
    },
    {
      src: '/get.mp4',
      title: 'Digital Opportunity',
      speaker: 'Thought Leader',
      description: 'Insights on seizing digital opportunities and building success in the modern economy.',
      thumbnail: null
    }
  ]

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScriptProps(pageJsonLd)}
      />
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
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-success/10 border border-success/30 rounded-full text-success text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              {pageT.heroBadge}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-tight mb-4 sm:mb-6 md:mb-8 px-2 min-h-[3.1em] sm:min-h-[2.7em]">
              <motion.span
                key={heroTitles[heroTitleIndex]}
                initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="block gradient-text"
              >
                {heroTitles[heroTitleIndex]}
              </motion.span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 md:mb-10 px-2">
              {pageT.heroDescription}
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
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2 mt-4 sm:mt-6">
              <a
                {...getBookingLinkProps()}
                className="btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center"
              >
                {ctaT.scheduleConsultation}
              </a>
              <DemoPresentationDownload service="futureReadyGraduate" variant="hero" />
            </div>
          </motion.div>
        </PremiumHeroParallax>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ScrollIndicator direction="down" />
        </div>
      </section>

      {/* Problem vs Opportunity */}
      <AnimatedSection className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-destructive/5 to-success/5" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="section-label mb-4 inline-block">Problem vs Opportunity</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="block">
                {pageT.educationPrefix}
                <span className="text-destructive">{pageT.educationFails}</span>
              </span>
              <span className="mt-3 block gradient-text">
                {pageT.digitalEconomyPrefix}
                {pageT.digitalThrives}
              </span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              {pageT.educationFailsSubtitle}
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* Traditional System Problems */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="card p-8 border-destructive/30 bg-gradient-to-br from-destructive/10 to-destructive/5 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center text-2xl">
                    📉
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text">
                      {pageT.traditionalCrisis}
                    </h3>
                    <p className="text-muted text-sm">{pageT.traditionalCrisisDesc}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-5 bg-destructive/10 border border-destructive/20 rounded-xl">
                    <div className="text-4xl font-display font-bold text-destructive mb-2">40%</div>
                    <p className="text-muted text-sm leading-relaxed">of graduates unemployed 6 months after graduation</p>
                  </div>
                  <div className="p-5 bg-destructive/10 border border-destructive/20 rounded-xl">
                    <div className="text-4xl font-display font-bold text-destructive mb-2">75%</div>
                    <p className="text-muted text-sm leading-relaxed">of employers say graduates lack job ready skills</p>
                  </div>
                  <div className="p-5 bg-destructive/10 border border-destructive/20 rounded-xl">
                    <div className="text-4xl font-display font-bold text-destructive mb-2">$1.7T</div>
                    <p className="text-muted text-sm leading-relaxed">in student debt with poor employment outcomes</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Digital Economy Opportunities */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="card p-8 border-success/30 bg-gradient-to-br from-success/10 to-success/5 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center text-2xl">
                    📈
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text">
                      {pageT.digitalBoom}
                    </h3>
                    <p className="text-muted text-sm">{pageT.digitalBoomDesc}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-5 bg-success/10 border border-success/20 rounded-xl">
                    <div className="text-4xl font-display font-bold text-success mb-2">$4.8T</div>
                    <p className="text-muted text-sm leading-relaxed">global digital economy size by 2025 (growing 15% annually)</p>
                  </div>
                  <div className="p-5 bg-success/10 border border-success/20 rounded-xl">
                    <div className="text-4xl font-display font-bold text-success mb-2">73M</div>
                    <p className="text-muted text-sm leading-relaxed">new freelancers worldwide in 2024 (fastest growing workforce)</p>
                  </div>
                  <div className="p-5 bg-success/10 border border-success/20 rounded-xl">
                    <div className="text-4xl font-display font-bold text-success mb-2">300%</div>
                    <p className="text-muted text-sm leading-relaxed">increase in remote work opportunities since 2020</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Future-ready certification advantages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative mt-20 md:mt-28"
          >
            <div className="pointer-events-none absolute inset-x-8 top-16 h-48 rounded-full bg-success/10 blur-3xl" aria-hidden />
            <div className="relative text-center mb-12">
              <span className="section-label mb-4 inline-block">Future-ready advantage</span>
              <h3 className="font-display text-3xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">{pageT.whyDigitalSkills}</span>
              </h3>
              <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
                {pageT.whyDigitalSkillsDesc}
              </p>
            </div>

            <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {digitalSkillsReasons.map((reason, i) => (
                <div
                  key={reason.title}
                  className={`group relative min-w-0 overflow-hidden rounded-3xl border p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    i < 3
                      ? 'border-success/35 bg-background/85 hover:border-success/60 hover:shadow-success/10'
                      : 'border-border-light bg-surface/75 hover:border-accent/45 hover:shadow-accent/10'
                  }`}
                >
                  <div className={`absolute inset-x-5 top-0 h-px bg-gradient-to-r ${i < 3 ? 'from-transparent via-success to-transparent' : 'from-transparent via-accent to-transparent'}`} />
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border text-3xl shadow-sm ${
                      i < 3 ? 'border-success/25 bg-success/10' : 'border-accent/20 bg-accent/10'
                    }`}>
                      {reason.icon}
                    </div>
                    <span className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] ${
                      i < 3 ? 'border-success/25 bg-success/10 text-success' : 'border-accent/20 bg-accent/10 text-accent'
                    }`}>
                      {reason.label}
                    </span>
                  </div>
                  <h4 className="font-display text-xl font-bold text mb-3">{reason.title}</h4>
                  <p className="text-muted text-sm leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Results */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {pageT.provenResults}<br />
              <span className="gradient-text">{pageT.provenResultsHighlight}</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {outcomes.map((outcome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-success mb-2">
                  {outcome.metric}
                </div>
                <p className="text font-semibold mb-1">{outcome.description}</p>
                <p className="text-muted text-sm">{outcome.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* Case Study */}
          <div className="card p-8 md:p-12">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                    Program in Progress
                  </span>
                  <h3 className="font-display text-2xl font-bold">{caseStudy.school}</h3>
                  <span className="text-muted text-sm">{caseStudy.location}</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark">Challenge</span>
                    <p className="text-muted mt-2 leading-relaxed">{caseStudy.challenge}</p>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark">Implementation</span>
                    <p className="text mt-2 leading-relaxed">{caseStudy.implementation}</p>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark">Timeline</span>
                    <p className="text-success font-medium mt-2">{caseStudy.timeline}</p>
                  </div>

                  <div className="card p-6 bg-success/5 border border-success/20">
                    <blockquote className="text italic leading-relaxed">
                      {caseStudy.testimonial}
                    </blockquote>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-display text-xl font-bold mb-6">Projections</h4>
                <div className="space-y-6">
                  {caseStudy.projections.map((result, i) => (
                    <div key={i} className="text-center">
                      <div className="font-display text-3xl font-bold text-success mb-2">
                        {result.metric}
                      </div>
                      <p className="text-muted text-sm">{result.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Videos from Global Leaders */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {pageT.globalLeaders}<br />
              <span className="gradient-text">{pageT.globalLeadersHighlight}</span>
            </h2>
              <p className="text-muted text-lg max-w-3xl mx-auto">
              {pageT.globalLeadersSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-0 overflow-hidden hover:border-success/50 group cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <VideoThumbnail 
                  src={video.src} 
                  onPlay={() => {}}
                />
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-muted-dark mb-2">
                    {video.speaker}
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2 group-hover:text-success transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {featuredVideos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted">More videos from global leaders coming soon...</p>
            </div>
          )}
        </div>
      </AnimatedSection>

      {/* Digital Economy Skills */}
      <section id="curriculum" className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              {pageT.highDemandSkills}<br />
              <span className="gradient-text">{pageT.highDemandSkillsHighlight}</span>
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              {pageT.highDemandSkillsSubtitle}
            </p>
          </div>

          <div className="relative -mx-4 overflow-hidden px-4 sm:mx-auto sm:max-w-[1008px] sm:px-0 mb-10 sm:mb-16">
            <div
              ref={skillsScrollRef}
              className="flex gap-3 sm:gap-6 pb-4 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide snap-x snap-mandatory scroll-px-4 sm:scroll-px-0"
            >
              {(() => {
                const skills = [
                  {
                    skill: 'AI-Powered Web Development',
                    icon: '🌐',
                    earning: '$40-100/hour',
                    description: 'Build professional websites and web apps using AI tools that let beginners compete with expert developers.',
                    tools: ['Lovable.dev', 'Cursor', 'Vercel', 'Render', 'v0.dev', 'GitHub Copilot'],
                    demand: 'Extremely High'
                  },
                  {
                    skill: 'AI Content Creation & Copywriting',
                    icon: '✍️',
                    earning: '$30-80/hour',
                    description: 'Create high-quality blogs, social media content, and marketing copy using advanced AI writing tools.',
                    tools: ['ChatGPT-4', 'Claude 3.5', 'Midjourney', 'Runway', 'Copy.ai', 'Jasper'],
                    demand: 'Extremely High'
                  },
                  {
                    skill: 'AI-Powered Digital Marketing',
                    icon: '📊',
                    earning: '$25-70/hour',
                    description: 'Leverage AI for social media management, SEO, analytics, and data-driven marketing campaigns.',
                    tools: ['Canva AI', 'Google Analytics AI', 'Meta AI Ads', 'ChatGPT Marketing'],
                    demand: 'Very High'
                  },
                  {
                    skill: 'AI Video Production & Editing',
                    icon: '🎬',
                    earning: '$35-90/hour',
                    description: 'Create professional videos using AI tools for editing, animation, voiceovers, and content generation.',
                    tools: ['Runway ML', 'Pika Labs', 'Synthesia', 'CapCut AI', 'DaVinci Resolve AI'],
                    demand: 'Very High'
                  },
                  {
                    skill: 'AI E-commerce & Store Building',
                    icon: '🛒',
                    earning: '$30-75/hour',
                    description: 'Build and manage online stores using AI-powered platforms that automate product creation and marketing.',
                    tools: ['Shopify AI', 'WooCommerce AI', 'Amazon AI Tools'],
                    demand: 'Growing Fast'
                  },
                  {
                    skill: 'AI Automation & Virtual Assistance',
                    icon: '⚡',
                    earning: '$20-60/hour',
                    description: 'Automate business processes and provide AI-enhanced virtual assistance using cutting-edge tools.',
                    tools: ['Zapier AI', 'Make.com', 'n8n', 'Notion AI'],
                    demand: 'Exploding'
                  },
                  {
                    skill: 'AI Data Annotation & Labeling',
                    icon: '🏷️',
                    earning: '$15-50/hour',
                    description: 'Label and annotate data for AI training. Critical for ML models, demand surged 220%+. Work from anywhere.',
                    tools: ['Scale AI', 'Label Studio', 'Amazon SageMaker', 'Supervisely'],
                    demand: 'Exploding'
                  },
                  {
                    skill: 'AI Image Generation & Editing',
                    icon: '🎨',
                    earning: '$25-80/hour',
                    description: 'Create stunning visuals with AI. Design assets, marketing imagery, and creative content for brands.',
                    tools: ['Midjourney', 'DALL·E 3', 'Adobe Firefly', 'Leonardo.ai', 'Ideogram'],
                    demand: 'Very High'
                  },
                  {
                    skill: 'AI Chatbot Development',
                    icon: '🤖',
                    earning: '$35-100/hour',
                    description: 'Build custom AI assistants and conversational agents. Integrate chatbots into websites and apps.',
                    tools: ['OpenAI API', 'Claude API', 'Voiceflow', 'Botpress', 'LangChain'],
                    demand: 'Very High'
                  },
                  {
                    skill: 'Prompt Engineering',
                    icon: '💬',
                    earning: '$30-90/hour',
                    description: 'Specialize in crafting prompts that get the best from AI. Essential skill for AI-powered workflows.',
                    tools: ['ChatGPT', 'Claude', 'Anthropic', 'Prompt libraries'],
                    demand: 'Growing Fast'
                  },
                  {
                    skill: 'Career Coaching & Training',
                    icon: '🎯',
                    earning: '$40-150/hour',
                    description: 'Help workers reskill and adapt to AI. Human guidance and empathy remain irreplaceable, demand +74%.',
                    tools: ['Coaching platforms', 'Notion AI', 'Loom', 'Zoom'],
                    demand: 'Very High'
                  },
                  {
                    skill: 'AI Meeting Transcription',
                    icon: '📝',
                    earning: '$20-50/hour',
                    description: 'Transcribe meetings, generate summaries, and extract action items. Enable async collaboration globally.',
                    tools: ['Fireflies.ai', 'Otter.ai', 'Clara', 'Krisp', 'Rev'],
                    demand: 'Growing Fast'
                  },
                  {
                    skill: 'AI Integration & Automation',
                    icon: '🔗',
                    earning: '$40-120/hour',
                    description: 'Connect AI tools to business workflows. Custom integrations that embed AI into everyday operations.',
                    tools: ['Zapier', 'Make.com', 'n8n', 'API integrations'],
                    demand: 'Exploding'
                  },
                  {
                    skill: 'AI-Powered Email Marketing',
                    icon: '📧',
                    earning: '$25-70/hour',
                    description: 'High-volume, high-demand. Create campaigns, automate sequences, and optimize with AI copywriting.',
                    tools: ['Copy.ai', 'Jasper', 'Mailchimp AI', 'HubSpot', 'Woodpecker'],
                    demand: 'Very High'
                  }
                ]
                const scrollCards = [...skills, ...skills]

                const SkillCard = ({ item }: { item: typeof skills[0] }) => (
                  <div className="card p-4 sm:p-6 hover:border-success/50 group w-[min(18rem,calc(100vw-2rem))] sm:w-[320px] min-h-[260px] sm:min-h-[300px] flex flex-col flex-shrink-0 snap-start">
                    <div className="text-center mb-3 sm:mb-4">
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 rounded-[1.35rem] border border-success/25 bg-gradient-to-br from-success/20 via-success/10 to-background shadow-lg shadow-success/10 overflow-visible transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3">
                        <div className="absolute inset-1 rounded-[1.05rem] bg-background/75 backdrop-blur-sm" />
                        <div className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-success/20 blur-[2px]" aria-hidden />
                        <span className="relative z-10 flex h-full w-full items-center justify-center text-2xl sm:text-3xl leading-none drop-shadow-sm">
                          {item.icon}
                        </span>
                      </div>
                      <h3 className="font-display text-sm sm:text-base font-bold leading-snug group-hover:text-success transition-colors mb-2">
                        {item.skill}
                      </h3>
                      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-2">
                        <span className="text-success text-sm sm:text-base font-bold">{item.earning}</span>
                        <span className="px-2 py-0.5 bg-success/10 text-success text-xs rounded-full">
                          {item.demand}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted text-xs leading-relaxed mb-3 flex-1 line-clamp-3 sm:line-clamp-none">{item.description}</p>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-muted-dark block mb-1">Key Tools</span>
                      <div className="flex flex-wrap gap-1">
                        {item.tools.slice(0, 4).map((tool, j) => (
                          <span key={j} className="px-2 py-0.5 bg-surface-light text-xs rounded text-muted">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )

                return scrollCards.map((item, i) => (
                  <SkillCard key={`${item.skill}-${i}`} item={item} />
                ))
              })()}
            </div>
          </div>

        </div>
      </section>

      {/* Partnership Requirements */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {pageT.partnershipRequirements}<br />
              <span className="gradient-text">{pageT.partnershipRequirementsHighlight}</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              {pageT.partnershipRequirementsDesc}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* What Schools Provide */}
              <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card p-8"
              >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-info/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl">
                  🏫
                </div>
                <h3 className="font-display text-2xl font-bold text-info">{pageT.whatSchoolsProvide}</h3>
                <p className="text-muted text-sm mt-2">{pageT.whatSchoolsProvideDesc}</p>
                  </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-info rounded-full" />
                    Program Investment
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Partnership fee: <span className="font-medium text">$5,000/semester</span> (5 months) or <span className="font-medium text">$12,000/year</span>, flexible to your budget and academic calendar.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-info rounded-full" />
                    Students (Finalists)
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Provide final-year students who are committed to completing the full program and ready for intensive digital skills training.
                  </p>
                </div>

                  <div>
                  <h4 className="font-semibold text mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-info rounded-full" />
                    Computer Lab Facility
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Existing computer lab with reliable electricity supply and adequate space for student cohorts during program hours.
                  </p>
                        </div>

                <div>
                  <h4 className="font-semibold text mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-info rounded-full" />
                    Computing Equipment
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Computers or laptops for students to use during training sessions. Equipment should be capable of running modern web browsers and basic software.
                  </p>
                  </div>

                  <div>
                  <h4 className="font-semibold text mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-info rounded-full" />
                    Program Integration
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Integrate the program into your academic calendar and provide dedicated time slots for our curriculum delivery.
                  </p>
                    </div>
              </div>
            </motion.div>

            {/* What We Provide */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card p-8"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-success/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl">
                  🚀
                </div>
                <h3 className="font-display text-2xl font-bold text-success">{pageT.whatWeProvide}</h3>
                <p className="text-muted text-sm mt-2">{pageT.whatWeProvideDesc}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    Internet Connectivity
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    We handle all internet connectivity costs and setup, ensuring reliable high-speed internet essential for the program's success.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    Site Facilitator
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Dedicated on-site team representative who follows our proven curriculum and provides direct instruction and support to students.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    AI Tools & Subscriptions
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    We provide and manage all premium AI tool subscriptions (ChatGPT Plus, Claude Pro, GitHub Copilot, etc.) that give students superhero capabilities in the digital economy.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    Complete Curriculum
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Full academic year curriculum with 42 weeks of structured content, assessments, and practical projects aligned with industry needs.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    Ongoing Support
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Continuous program monitoring, progress tracking, and support to ensure successful implementation and student outcomes.
                  </p>
                  </div>
                </div>
              </motion.div>
          </div>

          {/* Partnership Success Factors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 card p-8 bg-gradient-to-br from-success/5 to-info/5 border-success/20"
          >
            <div className="text-center">
              <h3 className="font-display text-2xl font-bold mb-6">
                <span className="gradient-text">Partnership Success Factors</span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                <div>
                  <span className="font-semibold text block mb-2">Student Performance</span>
                  <span className="text-muted">Their determination and commitment drive employment success, or job creation</span>
                </div>
                <div>
                  <span className="font-semibold text block mb-2">Personalized to Talents</span>
                  <span className="text-muted">Guided learning tailored to each person&apos;s gifts, bringing out entrepreneurial talents</span>
                </div>
                <div>
                  <span className="font-semibold text block mb-2">Mutual Commitment</span>
                  <span className="text-muted">Both parties dedicated to student success and program completion</span>
                </div>
                <div>
                  <span className="font-semibold text block mb-2">Continuous Support</span>
                  <span className="text-muted">Ongoing collaboration throughout the academic year</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Pricing */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {pathsHeading}<br />
              <span className="gradient-text">{pageT.threePathsHighlight}</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              {pageT.threePathsSubtitle} <span className="text font-medium">{pageT.noOneLeftBehind}</span>
            </p>
          </div>

          {/* Three Tiers Visual Layout */}
          <div className="relative">
            <div
              className={`grid gap-8 mx-auto ${
                pricing.length === 1
                  ? 'max-w-xl'
                  : pricing.length === 2
                    ? 'max-w-4xl md:grid-cols-2'
                    : 'max-w-6xl md:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {pricing.map((plan, i) => (
                <motion.div
                  key={plan.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`relative card p-8 pt-10 h-full flex flex-col ${
                    plan.popular 
                      ? 'border-success/50 glow-accent' 
                      : plan.spotsAvailable
                        ? 'border-accent/30'
                        : 'border-success/30'
                  }`}
                >
                  {/* Path Indicator – in-flow, responsive, opaque so no overlay or color clash */}
                  <div className="flex flex-wrap justify-center items-center gap-2 mb-4">
                    <span className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-bold whitespace-normal text-center ${
                      plan.audience === 'schools'
                        ? 'bg-surface-light border border-success/60 text-success'
                        : plan.audience === 'professional'
                          ? 'bg-surface-light border border-accent/60 text-accent'
                          : 'bg-surface-light border border-border text-muted'
                    }`}>
                      {plan.audience === 'schools' ? `🏫 ${pageT.forSchools}` : plan.audience === 'professional' ? (
                        <>🏢 {pageT.forProfessional}</>
                      ) : `🌍 ${pageT.guidedLearning}`}
                    </span>
                    {'isNew' in plan && plan.isNew && (
                      <span className="shrink-0 px-3 py-1 bg-surface-light border border-accent/60 text-accent text-xs font-bold rounded-full">
                        {pageT.newLabel}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-bold mb-3 text-center">{plan.name}</h3>
                    <div className="text-center mb-4">
                      {plan.priceOptions ? (
                        <div className="space-y-2 mb-2">
                          {plan.priceOptions.map((opt, j) => (
                            <div key={j} className="font-display text-lg font-bold text-success">
                              {opt.amount}
                              <span className="text-base text-muted font-normal ml-1">{opt.period}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="font-display text-5xl font-bold text-success mb-1">
                          {plan.price}
                          <span className="text-xl text-muted font-normal ml-1">{plan.period}</span>
                        </div>
                      )}
                      <p className="text-muted text-sm leading-relaxed">{plan.description}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 ${
                          plan.audience === 'schools' ? 'bg-success' : plan.audience === 'professional' ? 'bg-accent' : 'bg-muted'
                        }`} />
                        <span className="text-sm text leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {plan.ctaMode === 'guided' && plan.spotsAvailable ? (
                    <div className="space-y-3 w-full">
                      <button
                        type="button"
                        onClick={() => setEarlyAccessOpen(true)}
                        className="btn-primary w-full text-center py-3 block"
                      >
                        {ctaT.bookYourSpot}
                      </button>
                      <StripeCheckoutButton
                        plan="frg_guided"
                        className="btn-secondary w-full text-center py-3"
                        redirectingLabel={ctaT.checkoutRedirecting}
                      >
                        {ctaT.frgPayGuided}
                      </StripeCheckoutButton>
                    </div>
                  ) : plan.ctaMode === 'school' ? (
                    <div className="space-y-3 w-full">
                      <StripeCheckoutButton
                        plan="frg_school_semester"
                        className="btn-primary w-full text-center py-3"
                        redirectingLabel={ctaT.checkoutRedirecting}
                      >
                        {ctaT.frgPaySchoolSemester}
                      </StripeCheckoutButton>
                      <StripeCheckoutButton
                        plan="frg_school_yearly"
                        className="btn-primary w-full text-center py-3"
                        redirectingLabel={ctaT.checkoutRedirecting}
                      >
                        {ctaT.frgPaySchoolYearly}
                      </StripeCheckoutButton>
                      <a
                        {...getBookingLinkProps()}
                        className="btn-secondary w-full text-center py-3 rounded-lg font-semibold transition-all block"
                      >
                        {ctaT.orBookConsultationFirst}
                      </a>
                    </div>
                  ) : plan.ctaMode === 'professional' ? (
                    <div className="space-y-3 w-full">
                      <StripeCheckoutButton
                        plan="frg_professional_monthly"
                        className="btn-primary w-full text-center py-3"
                        redirectingLabel={ctaT.checkoutRedirecting}
                      >
                        {ctaT.frgPayProfessionalMonthly}
                      </StripeCheckoutButton>
                      <a
                        {...getBookingLinkProps()}
                        className="btn-secondary w-full text-center py-3 rounded-lg font-semibold transition-all block"
                      >
                        {ctaT.scheduleConsultation}
                      </a>
                    </div>
                  ) : plan.ctaMode === 'guided' ? (
                    <div className="space-y-3 w-full">
                      <StripeCheckoutButton
                        plan="frg_guided"
                        className="btn-primary w-full text-center py-3"
                        redirectingLabel={ctaT.checkoutRedirecting}
                      >
                        {ctaT.frgPayGuided}
                      </StripeCheckoutButton>
                      <a
                        {...getBookingLinkProps()}
                        className="btn-secondary w-full text-center py-3 rounded-lg font-semibold transition-all block hover:border-accent hover:text-accent"
                      >
                        {ctaT.getStarted}
                      </a>
                    </div>
                  ) : (
                    <a
                      {...getBookingLinkProps()}
                      className="btn-primary w-full text-center py-3 rounded-lg font-semibold transition-all block"
                    >
                      {ctaT.scheduleConsultation}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {pageT.readyToTransform}
          </h2>
          <p className="text-muted text-lg mb-8">
            {pageT.readyToTransformDesc}
          </p>
          <a
            {...getBookingLinkProps()}
            className="btn-primary text-lg px-8 py-4"
          >
            {ctaConfig.buttonText.scheduleConsultation}
          </a>
        </div>
      </AnimatedSection>

      <EarlyAccessFormModal isOpen={earlyAccessOpen} onClose={() => setEarlyAccessOpen(false)} />

      {selectedVideo && selectedVideo.src && (
        <VideoModal
          isOpen={selectedVideo !== null}
          onClose={() => setSelectedVideo(null)}
          videoSrc={selectedVideo.src}
          title={selectedVideo.title}
          description={`${selectedVideo.speaker}: ${selectedVideo.description}`}
        />
      )}
    </main>
  )
}