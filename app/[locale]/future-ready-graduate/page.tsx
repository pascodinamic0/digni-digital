'use client'

import { use, useState, useRef, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import HowDigniWorks from '@/app/components/HowDigniWorks'
import AnimatedSection from '@/app/components/AnimatedSection'
import { SimpleHero, SectionHeading, CapabilityBlock, FinalCtaBand } from '@/app/components/marketing'
import PageProofBlock from '@/app/components/marketing/PageProofBlock'
import { GraduationCap } from 'lucide-react'
import VideoModal from '@/app/components/VideoModal'
import VideoThumbnail from '@/app/components/VideoThumbnail'
import EarlyAccessFormModal from '@/app/components/EarlyAccessFormModal'
import StripeCheckoutButton from '@/app/components/StripeCheckoutButton'
import { getBookingLinkProps } from '@/app/config/cta.config'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { getFutureReadyGraduateJsonLd, jsonLdScriptProps } from '@/lib/agent-readiness'
import { getAssessmentPath } from '@/lib/assessments/paths'
import { visibleDefaultFutureReadyOfferings, type FutureReadyOffering } from '@/lib/future-ready-offerings'
import { getAiCareerFutureReadySkills } from '@/lib/ai-career-jobs'
import { AiCareerPathsGrid } from '@/app/components/AiCareerPathsGrid'
import { getSiteVideoWatchPath, siteVideos } from '@/lib/site-videos'
import { FUTURE_READY_FEATURED_VIDEO_MEDIA } from '@/lib/future-ready-videos'
import {
  futureReadyGraduateLocalCopy,
  futureReadyOfferingDisplayCopy,
} from '@/app/i18n/futureReadyPage'

function watchPathForVideoSrc(src: string): string | null {
  const match = siteVideos.find((video) => video.contentUrl === src)
  return match ? getSiteVideoWatchPath(match.slug) : null
}

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

  const ctaT = translations[language].cta
  const pageT = translations[language].futureReadyGraduate
  const localCopy = futureReadyGraduateLocalCopy[language]
  const digitalSkillsReasons = localCopy.digitalSkillsReasons
  const outcomes = localCopy.outcomes
  const caseStudy = localCopy.caseStudy
  const featuredVideos = localCopy.featuredVideos.map((video, i) => {
    const media = FUTURE_READY_FEATURED_VIDEO_MEDIA[i]
    return media ? { ...video, src: media.youtubeUrl, thumbnail: media.thumbnail } : video
  })
  const assessmentLabel =
    language === 'en' ? "Assess Your Students' Readiness" : translations[language].nav.fitCheck
  const [pricing, setPricing] = useState<FutureReadyOffering[]>(visibleDefaultFutureReadyOfferings())
  const localizedPricing = useMemo(
    () =>
      pricing.map((plan) => {
        const displayCopy = futureReadyOfferingDisplayCopy[language][plan.slug]

        if (!displayCopy) {
          return plan
        }

        const { priceOptions: localizedPriceOptions, ...localizedDisplayCopy } = displayCopy

        return {
          ...plan,
          ...localizedDisplayCopy,
          priceOptions: plan.priceOptions?.map((option, index) => ({
            ...option,
            period: localizedPriceOptions?.[index]?.period ?? option.period,
          })),
        }
      }),
    [language, pricing]
  )
  const pathsHeading = localizedPricing.length === 3 ? pageT.threePaths : pageT.threePaths.replace(/^(Three|Trois|Tres|Drei|ثلاثة)\s+/i, '')

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

  return (
    <main className="marketing-simple">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScriptProps(pageJsonLd)}
      />
      <SimpleHero
        badge={pageT.heroBadge}
        title={pageT.heroTitleLine1}
        titleHighlight={pageT.heroTitleHighlight}
        subtitle={pageT.heroDescription}
        primaryCta={{ href: getAssessmentPath('future-ready'), label: assessmentLabel }}
        secondaryCta={{
          href: getBookingLinkProps().href,
          label: ctaT.scheduleConsultation,
          external: true,
        }}
      />

      <PageProofBlock
        page="future-ready"
        sectionId="problem"
        id="problem"
        surface="surface"
        heading={{
          label: localCopy.labels.problemOpportunity,
          title: pageT.educationPrefix,
          titleHighlight: `${pageT.educationFails} ${pageT.digitalEconomyPrefix}${pageT.digitalThrives}`,
          supporting: pageT.educationFailsSubtitle,
          highlightClassName: 'text-destructive',
        }}
      />

      <PageProofBlock
        page="future-ready"
        sectionId="outcomes"
        reverse
        surface="background"
        heading={{
          label: localCopy.labels.futureReadyAdvantage,
          title: pageT.highDemandSkills,
          titleHighlight: pageT.highDemandSkillsHighlight,
          supporting: pageT.highDemandSkillsSubtitle,
        }}
        stats={outcomes.map((o) => ({ value: o.metric, label: o.description, hint: o.detail }))}
      />

      <PageProofBlock
        page="future-ready"
        sectionId="case-study"
        surface="surface"
        heading={{
          label: localCopy.labels.programInProgress,
          title: pageT.provenResults,
          titleHighlight: pageT.provenResultsHighlight,
          supporting: `${caseStudy.school} — ${caseStudy.location}. ${caseStudy.challenge}`,
        }}
        footer={
          <blockquote className="type-body mt-2 leading-relaxed text-text/90 italic">
            {caseStudy.testimonial}
          </blockquote>
        }
      />

      <HowDigniWorks className="border-b border-border py-20 bg-surface" />

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
            {featuredVideos.map((video, i) => {
              const watchPath = watchPathForVideoSrc(video.src)
              return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-0 overflow-hidden hover:border-success/50 group cursor-pointer"
                onClick={() => {
                  if (watchPath) return
                  setSelectedVideo(video)
                }}
              >
                {watchPath ? (
                  <Link href={watchPath} className="block">
                    <VideoThumbnail
                      src={video.src}
                      poster={video.thumbnail}
                      alt={video.title}
                      onPlay={() => {}}
                    />
                  </Link>
                ) : (
                  <VideoThumbnail
                    src={video.src}
                    poster={video.thumbnail}
                    alt={video.title}
                    onPlay={() => {}}
                  />
                )}
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-muted-dark mb-2">
                    {video.speaker}
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2 group-hover:text-success transition-colors">
                    {watchPath ? (
                      <Link href={watchPath} className="hover:text-success">
                        {video.title}
                      </Link>
                    ) : (
                      video.title
                    )}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {video.description}
                  </p>
                  {watchPath && (
                    <Link href={watchPath} className="type-caption mt-3 inline-block font-medium text-accent hover:underline">
                      Watch page
                    </Link>
                  )}
                </div>
              </motion.div>
            )})}
          </div>

          {featuredVideos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted">{localCopy.labels.emptyVideos}</p>
            </div>
          )}
        </div>
      </AnimatedSection>

      <PageProofBlock
        page="future-ready"
        sectionId="skills"
        reverse
        surface="background"
        heading={{
          title: pageT.highDemandSkills,
          titleHighlight: pageT.highDemandSkillsHighlight,
          supporting: pageT.highDemandSkillsSubtitle,
        }}
      />

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
              className="flex gap-3 sm:gap-6 pt-4 sm:pt-5 pb-4 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide snap-x snap-mandatory scroll-px-4 sm:scroll-px-0"
            >
              {(() => {
                const skills = [
                  ...localCopy.skills,
                  ...getAiCareerFutureReadySkills(),
                ]
                const scrollCards = [...skills, ...skills]

                const SkillCard = ({
                  item,
                }: {
                  item: (typeof skills)[0] & { blogSlug?: string }
                }) => (
                  <div className="future-ready-skill-card card p-4 sm:p-6 w-[min(18rem,calc(100vw-2rem))] sm:w-[320px] min-h-[260px] sm:min-h-[300px] flex flex-col flex-shrink-0 snap-start">
                    <div className="text-center mb-3 sm:mb-4">
                      <div className="future-ready-skill-icon relative w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 rounded-[1.35rem] border border-success/25 bg-gradient-to-br from-success/20 via-success/10 to-background shadow-lg shadow-success/10 overflow-visible transition-transform duration-300">
                        <div className="absolute inset-1 rounded-[1.05rem] bg-background/75 backdrop-blur-sm" />
                        <div className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-success/20 blur-[2px]" aria-hidden />
                        <span className="relative z-10 flex h-full w-full items-center justify-center text-2xl sm:text-3xl leading-none drop-shadow-sm">
                          {item.icon}
                        </span>
                      </div>
                      <h3 className="future-ready-skill-heading font-display text-sm sm:text-base font-bold leading-snug transition-colors mb-2">
                        {'blogSlug' in item && item.blogSlug ? (
                          <Link
                            href={`/blog/${item.blogSlug}`}
                            className="hover:text-success transition-colors"
                          >
                            {item.skill}
                          </Link>
                        ) : (
                          item.skill
                        )}
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
                      <span className="text-xs uppercase tracking-wider text-muted-dark block mb-1">{localCopy.labels.keyTools}</span>
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

          <AiCareerPathsGrid
            title={pageT.aiCareerPathsTitle}
            subtitle={pageT.aiCareerPathsSubtitle}
            guideLabel={pageT.aiCareerGuideLabel}
          />
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
                {localCopy.partnership.schoolProvides.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-semibold text mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-info rounded-full" />
                      {item.title}
                    </h4>
                    <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
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
                {localCopy.partnership.weProvide.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-semibold text mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full" />
                      {item.title}
                    </h4>
                    <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
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
                <span className="gradient-text">{localCopy.partnership.successTitle}</span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                {localCopy.partnership.successFactors.map((factor) => (
                  <div key={factor.title}>
                    <span className="font-semibold text block mb-2">{factor.title}</span>
                    <span className="text-muted">{factor.description}</span>
                  </div>
                ))}
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
                localizedPricing.length === 1
                  ? 'max-w-xl'
                  : localizedPricing.length === 2
                    ? 'max-w-4xl md:grid-cols-2'
                    : 'max-w-6xl md:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {localizedPricing.map((plan, i) => (
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

      <FinalCtaBand
        title={pageT.readyToTransform}
        subtitle={pageT.readyToTransformDesc}
        primaryCta={{ href: getAssessmentPath('future-ready'), label: assessmentLabel }}
        secondaryCta={{
          href: getBookingLinkProps().href,
          label: ctaT.scheduleConsultation,
          external: true,
        }}
      />

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