'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import AnimatedSection from '@/app/components/AnimatedSection'
import ScrollIndicator from '@/app/components/ScrollIndicator'
import StorybookModal from '@/app/components/StorybookModal'
import ClientLogos from '@/app/components/ClientLogos'
import { ctaConfig, getBookingLinkProps } from '@/app/config/cta.config'
import { translations } from '@/app/config/translations'
import { useLanguage } from '@/app/context/LocaleContext'

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

export default function AboutPage() {
  const [storybookOpen, setStorybookOpen] = useState(false)
  const language = useLanguage()
  const t = translations[language].about

  const stats = [
    { value: 8, suffix: '+', label: t.statYears },
    { value: 500, suffix: '+', label: t.statStudents },
    { value: 10, suffix: 'k+', label: t.statLeads },
    { value: 98, suffix: '%', label: t.statSatisfaction },
  ]

  const timeline = [
    { year: '2019', title: 'Founded', description: 'Started helping African businesses grow with tech.' },
    { year: '2020', title: 'First Clients', description: 'Websites and digital solutions delivered.' },
    { year: '2021', title: 'Expanded', description: 'Added apps and marketing.' },
    { year: '2022', title: 'International', description: 'Clients across continents.' },
    { year: '2023', title: 'SaaS', description: 'First product launched.' },
    { year: '2024', title: 'Growth Systems', description: 'Full infrastructure agency.' },
    { year: '2025', title: 'AI', description: 'AI solutions. ProposalAgent.' },
    { year: '2026', title: '150+ Clients', description: 'Market leader.' }
  ]

  const differentiators = [
    { num: '01', title: t.humanFirstTitle, desc: t.humanFirstDesc },
    { num: '02', title: t.provenTitle, desc: t.provenDesc },
    { num: '03', title: t.partnershipTitle, desc: t.partnershipDesc },
    { num: '04', title: t.roiFocusTitle, desc: t.roiFocusDesc },
  ]

  return (
    <main>
      <Navigation />
      
      <section className="relative isolate min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden bg-gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              {t.badge}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 px-2">
              <span className="gradient-text">{t.heroTitle}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed px-2">
              {t.heroSubtitle}
            </p>
          </motion.div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ScrollIndicator direction="down" />
        </div>
      </section>

      <AnimatedSection className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {t.statsTitle}
            </h2>
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
                <div className="font-display text-5xl md:text-6xl font-bold text-accent mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
                {t.ourStoryTitle}
              </h2>
              <div className="space-y-6 text-muted leading-relaxed">
                <p>{t.storyP1}</p>
                <p dangerouslySetInnerHTML={{ __html: t.storyP2 }} />
                <p>{t.storyP3}</p>
                <button
                  onClick={() => setStorybookOpen(true)}
                  className="mt-8 btn-primary inline-flex items-center gap-2"
                >
                  <span>{t.takeTheJourney}</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-accent">{item.year}</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold mb-2">{item.title}</h4>
                    <p className="text-muted text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <StorybookModal isOpen={storybookOpen} onClose={() => setStorybookOpen(false)} />

      <ClientLogos title={t.trustedByTitle} />

      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {t.approachTitle}
            </h2>
            <p className="text-muted text-lg">{t.approachSubtitle}</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-3xl mb-6">
                🔍
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">{t.discoveryTitle}</h3>
              <p className="text-muted leading-relaxed mb-4">{t.discoveryDesc}</p>
              <ul className="text-sm text-muted space-y-2">
                <li>• {t.discoveryBullet1}</li>
                <li>• {t.discoveryBullet2}</li>
                <li>• {t.discoveryBullet3}</li>
                <li>• {t.discoveryBullet4}</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card p-8"
            >
              <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center text-3xl mb-6">
                🛠️
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">{t.buildTitle}</h3>
              <p className="text-muted leading-relaxed mb-4">{t.buildDesc}</p>
              <ul className="text-sm text-muted space-y-2">
                <li>• {t.buildBullet1}</li>
                <li>• {t.buildBullet2}</li>
                <li>• {t.buildBullet3}</li>
                <li>• {t.buildBullet4}</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card p-8"
            >
              <div className="w-16 h-16 bg-info/10 rounded-2xl flex items-center justify-center text-3xl mb-6">
                📈
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">{t.optimizeTitle}</h3>
              <p className="text-muted leading-relaxed mb-4">{t.optimizeDesc}</p>
              <ul className="text-sm text-muted space-y-2">
                <li>• {t.optimizeBullet1}</li>
                <li>• {t.optimizeBullet2}</li>
                <li>• {t.optimizeBullet3}</li>
                <li>• {t.optimizeBullet4}</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t.differentTitle}
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              {t.differentSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card p-6 lg:p-8 flex flex-col border-border hover:border-accent/40 transition-colors"
              >
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center mb-5 flex-shrink-0">
                  <span className="text-accent font-display font-bold text-sm">{item.num}</span>
                </div>
                <h3 className="font-display text-lg font-bold mb-2 text-text">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed mt-auto">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-gradient-to-br from-accent/5 to-transparent p-8 md:p-10 text-center flex flex-col items-center"
          >
            <h3 className="font-display text-xl md:text-2xl font-bold mb-4 text-text">{t.promiseTitle}</h3>
            <blockquote className="text-muted text-base md:text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
              &ldquo;{t.promiseQuote}&rdquo;
            </blockquote>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="relative w-24 h-24 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-accent/20">
                <Image
                  src="/images/pascal-digny-headshot.png"
                  alt={`${t.founderName} - ${t.founderRole}`}
                  fill
                  className="object-cover object-center"
                  sizes="96px"
                  priority
                />
              </div>
              <div className="text-center">
                <div className="font-semibold text-text">{t.founderName}</div>
                <div className="text-sm text-muted">{t.founderRole}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {t.servicesTitle}
            </h2>
            <p className="text-muted text-lg">{t.servicesSubtitle}</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-8 text-center group hover:border-accent/50"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
                🤖
              </div>
              <h3 className="font-display text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                {t.aiEmployeeTitle}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {t.aiEmployeeDesc}
              </p>
              <Link href="/ai-receptionist" className="text-accent hover:text-accent-light font-medium text-sm">
                {t.aiEmployeeCta} →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card p-8 text-center group hover:border-success/50"
            >
              <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
                🎓
              </div>
              <h3 className="font-display text-xl font-bold mb-4 group-hover:text-success transition-colors">
                {t.literacyTitle}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {t.literacyDesc}
              </p>
              <Link href="/future-ready-graduate" className="text-success hover:text-success-light font-medium text-sm">
                {t.literacyCta} →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card p-8 text-center group hover:border-info/50"
            >
              <div className="w-16 h-16 bg-info/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
                ⚙️
              </div>
              <h3 className="font-display text-xl font-bold mb-4 group-hover:text-info transition-colors">
                {t.agenticTitle}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {t.agenticDesc}
              </p>
              <Link href="/agentic-softwares" className="text-info hover:text-info-light font-medium text-sm">
                {t.agenticCta} →
              </Link>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {t.ctaTitle}
          </h2>
            <p className="text-muted text-lg mb-8">
              {t.ctaSubtitle}
            </p>
          <a
            {...getBookingLinkProps()}
            className="btn-primary text-lg px-8 py-4"
          >
            {ctaConfig.buttonText.bookConsultation}
          </a>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  )
}
