'use client'

import { Phone, GraduationCap, Workflow } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import ClientLogos from '@/app/components/ClientLogos'
import HowDigniWorks from '@/app/components/HowDigniWorks'
import {
  SimpleHero,
  SectionHeading,
  CapabilityBlock,
  ProofQuote,
  FinalCtaBand,
} from '@/app/components/marketing'
import { ctaConfig, getBookingLinkProps } from '@/app/config/cta.config'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations, type Language } from '@/app/config/translations'

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
    <section className="marketing-simple border-b border-border bg-background py-20">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          label={f.badge}
          title={f.title}
          titleHighlight={f.subtitle}
          supporting={f.realProblems}
        />
      </div>
    </section>
  )
}

function CoverageSection() {
  const language = useLanguage()
  const f = translations[language].home.fighting
  const w = translations[language].home.whatWeDo

  const pillars = [
    {
      label: w.forBusinesses,
      title: f.missedLeads,
      supporting: `${f.missedLeadsProblem} ${f.missedLeadsSolution}`,
      outcome: f.missedLeadsOutcome,
      cta: { href: '/ai-receptionist/assessment', label: w.aiEmployeePrimaryCta },
      icon: <Phone className="h-6 w-6" aria-hidden />,
    },
    {
      label: w.forSchools,
      title: f.skillsGap,
      supporting: `${f.skillsGapProblem} ${f.skillsGapSolution}`,
      outcome: f.skillsGapOutcome,
      cta: { href: '/future-ready-graduate/assessment', label: w.futureReadyPrimaryCta },
      icon: <GraduationCap className="h-6 w-6" aria-hidden />,
    },
    {
      label: w.forUniqueNeeds,
      title: f.techDivide,
      supporting: `${f.techDivideProblem} ${f.techDivideSolution}`,
      outcome: f.techDivideOutcome,
      cta: { href: '/agentic-softwares/assessment', label: w.agenticSoftwaresPrimaryCta },
      icon: <Workflow className="h-6 w-6" aria-hidden />,
    },
  ]

  return (
    <section id="coverage" className="marketing-simple bg-surface py-20">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          label={w.badge}
          title={w.title}
          titleHighlight={w.subtitle}
          supporting={w.whatWeDoDescription}
          className="mb-4"
        />
        {pillars.map((pillar) => (
          <CapabilityBlock key={pillar.title} {...pillar} />
        ))}
        <p className="type-body mt-8 text-muted">
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

  return (
    <section id="proven-track-record" className="marketing-simple border-y border-border bg-background py-20">
      <div className="mx-auto max-w-3xl space-y-12 px-6">
        <SectionHeading label={p.badge} title={p.title} titleHighlight={p.subtitle} supporting={p.supporting} />
        <ProofQuote quote={p.quote1} name={p.quote1Name} role={p.quote1Role} />
        <ProofQuote quote={p.quote2} name={p.quote2Name} role={p.quote2Role} note={p.quote2Note} />
        <Link
          href="/case-studies"
          className="type-body inline-block font-medium text-accent underline-offset-4 hover:underline"
        >
          {c.viewAll} →
        </Link>
      </div>
    </section>
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
  const ctaT = translations[language].cta

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
      <HowDigniWorks className="marketing-simple border-b border-border bg-surface py-20" />
      <HomeFinalCta />
    </main>
  )
}
