'use client'

import { use } from 'react'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import AnimatedSection from '@/app/components/AnimatedSection'
import SectionBlock from '@/app/components/SectionBlock'
import ScrollIndicator from '@/app/components/ScrollIndicator'
import PremiumHeroBackdrop from '@/app/components/PremiumHeroBackdrop'
import CompanyValuesGrid from '@/app/components/CompanyValuesGrid'
import ClientLogos from '@/app/components/ClientLogos'
import { getBookingLinkProps } from '@/app/config/cta.config'
import { translations } from '@/app/config/translations'
import { useLanguage } from '@/app/context/LocaleContext'
import { withPartnerCount } from '@/lib/site-partners'

const aboutHeroCopy = {
  en: { badge: 'Mission-Driven, Outcome-Focused', years: 'building growth systems', satisfaction: 'client satisfaction' },
  fr: { badge: 'Guidés par la mission, orientés résultats', years: 'à construire des systèmes de croissance', satisfaction: 'de satisfaction client' },
  ar: { badge: 'رسالة واضحة ونتائج ملموسة', years: 'في بناء أنظمة النمو', satisfaction: 'رضا العملاء' },
  de: { badge: 'Missionsgetrieben, ergebnisorientiert', years: 'im Aufbau von Wachstumssystemen', satisfaction: 'Kundenzufriedenheit' },
  es: { badge: 'Impulsados por la misión, enfocados en resultados', years: 'construyendo sistemas de crecimiento', satisfaction: 'satisfacción del cliente' },
}

type AboutPageProps = {
  params: Promise<{ locale: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default function AboutPage({ params, searchParams }: AboutPageProps) {
  use(params)
  use(searchParams ?? Promise.resolve({}))
  const language = useLanguage()
  const t = translations[language].about
  const heroCopy = aboutHeroCopy[language]
  const w = translations[language].home.whatWeDo
  const ctaT = translations[language].cta
  const mission = translations[language].home.mission

  const stats = [
    { value: 10, suffix: '+', label: t.statYears },
    { value: 500, suffix: '+', label: `Projected ${t.statStudents}` },
    { value: 10, suffix: 'k+', label: `Projected ${t.statLeads}` },
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
    { year: '2026', title: t.timeline2026Title, description: t.timeline2026Description }
  ]

  const differentiators = [
    { num: '01', title: t.humanFirstTitle, desc: t.humanFirstDesc },
    { num: '02', title: t.provenTitle, desc: withPartnerCount(t.provenDesc) },
    { num: '03', title: t.partnershipTitle, desc: t.partnershipDesc },
    { num: '04', title: t.roiFocusTitle, desc: t.roiFocusDesc },
  ]

  /** Approximate official UN SDG brand colors for Goals 1, 4, 8 (visual alignment only). */
  const sdgAlignment = [
    {
      goal: 1 as const,
      color: '#E5243B',
      title: t.sdg1Title,
      desc: t.sdg1Desc,
      imageSrc: '/Sustainable_Development_Goal_1.png',
      imageAlt: 'UN Sustainable Development Goal 1 icon',
      learnMoreUrl: 'https://sdgs.un.org/goals/goal1',
    },
    {
      goal: 4 as const,
      color: '#C5192D',
      title: t.sdg4Title,
      desc: t.sdg4Desc,
      imageSrc: '/E_SDG-goals_icons-individual-rgb-04.png',
      imageAlt: 'UN Sustainable Development Goal 4 icon',
      learnMoreUrl: 'https://sdgs.un.org/goals/goal4',
    },
    {
      goal: 8 as const,
      color: '#A21942',
      title: t.sdg8Title,
      desc: t.sdg8Desc,
      imageSrc: '/Sustainable_Development_Goal_8.png',
      imageAlt: 'UN Sustainable Development Goal 8 icon',
      learnMoreUrl: 'https://sdgs.un.org/goals/goal8',
    },
  ]

  return (
    <main>
      <section className="relative isolate min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden bg-gradient-mesh">
        <PremiumHeroBackdrop />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="mb-4 sm:mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 dark:bg-accent/20 px-4 py-2 text-xs font-medium text-accent sm:text-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                {heroCopy.badge}
              </span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 px-2">
              <span className="gradient-text">{t.heroTitle}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed px-2 mb-8">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-2">
              <div className="rounded-full border border-border/80 bg-background/75 dark:bg-surface/70 px-4 py-2 text-xs sm:text-sm text-muted shadow-sm">
                <span className="font-semibold text">10+ years</span> {heroCopy.years}
              </div>
              <div className="rounded-full border border-border/80 bg-background/75 dark:bg-surface/70 px-4 py-2 text-xs sm:text-sm text-muted shadow-sm">
                <span className="font-semibold text">98%</span> {heroCopy.satisfaction}
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ScrollIndicator direction="down" />
        </div>
      </section>

      <AnimatedSection className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 md:mb-5">
              {t.statsTitle}
            </h2>
            <p className="mx-auto max-w-3xl text-base text-muted md:text-lg leading-relaxed px-1">
              {t.statsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="relative overflow-hidden border-t border-border/50 py-16 sm:py-20">
        <div className="absolute inset-0 bg-surface/50" aria-hidden />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <span className="section-label">{t.sdgSectionBadge}</span>
            <h2 className="mt-3 px-1 font-display text-2xl font-bold text-text sm:text-3xl md:text-4xl">
              {t.sdgSectionTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{t.sdgSectionIntro}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {sdgAlignment.map((sdg, i) => (
              <motion.article
                key={sdg.goal}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-background/90 shadow-sm backdrop-blur-sm transition-shadow hover:border-accent/30 hover:shadow-md"
              >
                <div
                  className="flex items-center gap-3 px-4 py-3 sm:px-5"
                  style={{ backgroundColor: sdg.color }}
                >
                  <span className="font-display text-3xl font-bold tabular-nums text-white drop-shadow-sm sm:text-4xl">
                    {sdg.goal}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-md border border-border/60 bg-surface/70">
                    <Image
                      src={sdg.imageSrc}
                      alt={sdg.imageAlt}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <h3 className="font-display text-lg font-bold leading-snug text-text sm:text-xl">{sdg.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">{sdg.desc}</p>
                  <a
                    href={sdg.learnMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-fit items-center rounded-full border border-accent/35 px-4 py-2 text-sm font-medium text-accent transition-colors hover:border-accent hover:bg-accent/10"
                  >
                    Learn more
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-background to-surface opacity-80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 min-w-0">
          <div className="text-center mb-10 sm:mb-14">
            <span className="section-label">{t.storyBadge}</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 text-text px-1">
              {t.ourStoryTitle}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start min-w-0">
            {/* Story card: top accent on mobile, left accent on lg+ */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative min-w-0 rounded-xl sm:rounded-2xl border border-border border-t-[3px] border-t-accent/50 lg:border-t bg-surface/80 backdrop-blur-sm p-5 sm:p-8 md:p-10 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300"
            >
              <div className="hidden lg:block absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-accent/60 to-accent/20 rounded-full" />
              <div className="space-y-5 sm:space-y-6 lg:pl-6">
                <p className="text-text/90 leading-relaxed text-base sm:text-lg">
                  {t.storyP1}
                </p>
                <div className="text-muted leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: t.storyP2 }} />
                <p className="text-muted leading-relaxed text-sm sm:text-base">
                  {t.storyP3}
                </p>
              </div>
            </motion.div>

            {/* Timeline: fixed-width year column + text in flow; line centered on badges */}
            <div className="relative min-w-0">
              <div
                className="pointer-events-none absolute left-5 top-2 bottom-2 w-px -translate-x-1/2 bg-gradient-to-b from-accent/45 via-accent/25 to-transparent"
                aria-hidden
              />
              <ul className="relative m-0 list-none p-0">
                {timeline.map((item, i) => (
                  <motion.li
                    key={`${item.year}-${i}`}
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.35 }}
                    className="relative flex gap-3 sm:gap-4"
                  >
                    <div className="relative z-[1] flex w-10 shrink-0 justify-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent/50 bg-background shadow-sm">
                        <span className="font-display text-[11px] font-bold tabular-nums text-accent sm:text-xs">
                          {item.year}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`min-w-0 flex-1 pt-0.5 pb-6 sm:pb-7 ${
                        i < timeline.length - 1 ? 'border-b border-border/55' : ''
                      }`}
                    >
                      <h4 className="font-display text-base font-bold leading-snug text-text sm:text-lg">{item.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">{item.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <CompanyValuesGrid mission={mission} />
        </div>
      </AnimatedSection>

      <ClientLogos
        badge={t.trustedByBadge}
        title={t.trustedByTitle}
        titleHighlight={t.trustedByTitleHighlight}
        subtitle={t.trustedBySubtitle}
      />

      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionBlock
            label={translations[language].sectionLabels?.ourApproach}
            title={t.approachTitle}
            titleClassName="mb-6"
            className="mb-16"
          >
            <p className="text-center text-lg mb-12">{t.approachSubtitle}</p>
            <div className="grid lg:grid-cols-3 gap-12 text-left">
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
          </SectionBlock>
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
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-text">
            {w.notSureTitle}
          </h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            {w.notSureSubtitle}
          </p>
          <a
            {...getBookingLinkProps()}
            className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4"
          >
            <span>{ctaT.bookStrategy}</span>
          </a>
        </div>
      </AnimatedSection>
    </main>
  )
}
