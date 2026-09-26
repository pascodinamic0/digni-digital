'use client'

import { Link } from '@/i18n/navigation'
import ClientLogos from '@/app/components/ClientLogos'
import HowDigniWorks from '@/app/components/HowDigniWorks'
import {
  SimpleHero,
  SectionHeading,
  ProofQuote,
  FinalCtaBand,
  SplitProofSection,
  ProofVisual,
} from '@/app/components/marketing'
import PageProofBlock from '@/app/components/marketing/PageProofBlock'
import { ctaConfig, getBookingLinkProps } from '@/app/config/cta.config'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations, type Language } from '@/app/config/translations'
import { getProofVisual } from '@/lib/proof-visuals/registry'
import { howDigniWorksByLanguage } from '@/app/i18n/howDigniWorks'

type HomeHeroCopy = (typeof translations)['en']['home']['hero']

type HomeTrustedByCopy = {
  badge: string
  title: string
  titleHighlight?: string
  subtitle?: string
}

type HomePageClientProps = {
  language: Language
  hero: HomeHeroCopy
  trustedBy: HomeTrustedByCopy
}

function ExposureSection() {
  const language = useLanguage()
  const f = translations[language].home.fighting

  return (
    <PageProofBlock
      page="home"
      sectionId="exposure"
      id="exposure"
      surface="background"
      priority
      heading={{
        label: f.badge,
        title: f.title,
        titleHighlight: f.subtitle,
        supporting: f.realProblems,
      }}
      stats={[
        { value: f.missedLeadsStat, label: f.missedLeadsStatLabel, hint: f.missedLeadsProblem },
        { value: f.skillsGapStat, label: f.skillsGapStatLabel, hint: f.skillsGapProblem },
        { value: f.techDivideStat, label: f.techDivideStatLabel, hint: f.techDivideProblem },
      ]}
    />
  )
}

function CoverageSection() {
  const language = useLanguage()
  const f = translations[language].home.fighting
  const w = translations[language].home.whatWeDo

  const pillars = [
    {
      sectionId: 'coverage-growth' as const,
      label: w.forBusinesses,
      title: f.missedLeads,
      supporting: `${f.missedLeadsProblem} ${f.missedLeadsSolution}`,
      outcome: f.missedLeadsOutcome,
      cta: { href: '/ai-receptionist/assessment', label: w.aiEmployeePrimaryCta },
    },
    {
      sectionId: 'coverage-talent' as const,
      label: w.forSchools,
      title: f.skillsGap,
      supporting: `${f.skillsGapProblem} ${f.skillsGapSolution}`,
      outcome: f.skillsGapOutcome,
      cta: { href: '/future-ready-graduate/assessment', label: w.futureReadyPrimaryCta },
    },
    {
      sectionId: 'coverage-operations' as const,
      label: w.forUniqueNeeds,
      title: f.techDivide,
      supporting: `${f.techDivideProblem} ${f.techDivideSolution}`,
      outcome: f.techDivideOutcome,
      cta: { href: '/agentic-softwares/assessment', label: w.agenticSoftwaresPrimaryCta },
    },
  ]

  return (
    <section id="coverage" className="border-b border-border bg-surface">
      <div className="marketing-simple mx-auto max-w-3xl px-6 py-16 md:py-20">
        <SectionHeading
          label={w.badge}
          title={w.title}
          titleHighlight={w.subtitle}
          supporting={w.whatWeDoDescription}
        />
      </div>
      {pillars.map((pillar, index) => (
        <PageProofBlock
          key={pillar.sectionId}
          page="home"
          sectionId={pillar.sectionId}
          reverse={index % 2 === 1}
          surface={index % 2 === 0 ? 'background' : 'surface'}
          heading={{
            label: pillar.label,
            title: pillar.title,
            supporting: pillar.supporting,
          }}
          footer={
            <>
              <p className="type-body font-medium text-text/90">{pillar.outcome}</p>
              <Link
                href={pillar.cta.href}
                className="type-body mt-4 inline-block font-medium text-accent underline-offset-4 hover:underline"
              >
                {pillar.cta.label} →
              </Link>
            </>
          }
        />
      ))}
      <div className="marketing-simple mx-auto max-w-3xl px-6 pb-16">
        <p className="type-body text-muted">
          {w.notSureSubtitle}{' '}
          <Link href={ctaConfig.digniPath} className="font-medium text-accent underline-offset-4 hover:underline">
            {w.notSureTitle} →
          </Link>
        </p>
      </div>
    </section>
  )
}

function ProofSection() {
  const language = useLanguage()
  const p = translations[language].home.proofBand
  const c = translations[language].home.caseStudies
  const config = getProofVisual('home', 'proof')

  return (
    <SplitProofSection
      id="proven-track-record"
      reverse
      surface="background"
      heading={{
        label: p.badge,
        title: p.title,
        titleHighlight: p.subtitle,
        supporting: p.supporting,
      }}
      footer={
        <>
          <ProofQuote quote={p.quote1} name={p.quote1Name} role={p.quote1Role} />
          <ProofQuote quote={p.quote2} name={p.quote2Name} role={p.quote2Role} note={p.quote2Note} />
          <Link
            href="/case-studies"
            className="type-body mt-6 inline-block font-medium text-accent underline-offset-4 hover:underline"
          >
            {c.viewAll} →
          </Link>
        </>
      }
      visual={config ? <ProofVisual config={config} language={language} /> : null}
    />
  )
}

function ProcessProofSection() {
  const language = useLanguage()
  const t = howDigniWorksByLanguage[language]
  const config = getProofVisual('home', 'process')

  return (
    <SplitProofSection
      id="how-we-install"
      surface="surface"
      heading={{
        label: t.badge,
        title: t.title,
        titleHighlight: t.titleHighlight,
        supporting: t.subtitle,
      }}
      visual={config ? <ProofVisual config={config} language={language} /> : null}
    />
  )
}

function HomeFinalCta() {
  const language = useLanguage()
  const cta = translations[language].home.ctaSection
  const ctaT = translations[language].cta
  const booking = getBookingLinkProps()

  return (
    <FinalCtaBand
      title={`${cta.title}${cta.titleHighlight}`}
      subtitle={cta.mechanism}
      primaryCta={{
        href: ctaConfig.digniPath,
        label: ctaT.findBiggestExposure ?? ctaT.seeWhatsExposed ?? ctaT.getStarted,
      }}
      secondaryCta={{
        href: booking.href,
        label: ctaT.bookDemo,
        external: true,
      }}
    />
  )
}

export default function HomePageClient({ language, hero, trustedBy }: HomePageClientProps) {
  return (
    <main className="marketing-simple">
      <SimpleHero
        badge={hero.badge}
        title={hero.title}
        titleHighlight={hero.titleHighlight}
        subtitle={hero.subtitle}
        primaryCta={{ href: ctaConfig.digniPath, label: hero.ourStory }}
        secondaryCta={{ href: '/services', label: hero.whatWeDo }}
      />
      <ClientLogos
        badge={trustedBy.badge}
        title={trustedBy.title}
        titleHighlight={trustedBy.titleHighlight}
        subtitle={trustedBy.subtitle}
      />
      <ExposureSection />
      <CoverageSection />
      <ProofSection />
      <ProcessProofSection />
      <HowDigniWorks className="marketing-simple border-b border-border bg-background py-20" />
      <HomeFinalCta />
    </main>
  )
}
