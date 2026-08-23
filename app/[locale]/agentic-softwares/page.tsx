'use client'

import { use } from 'react'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import HowDigniWorks from '@/app/components/HowDigniWorks'
import AnimatedSection from '@/app/components/AnimatedSection'
import { getAssessmentPath } from '@/lib/assessments/paths'
import { SimpleHero, SectionHeading, CapabilityBlock } from '@/app/components/marketing'
import { Boxes } from 'lucide-react'
import ServiceAssessmentLink from '@/app/components/ServiceAssessmentLink'
import StripeCheckoutButton from '@/app/components/StripeCheckoutButton'
import { getCtaButtonText, getBookingLinkProps } from '@/app/config/cta.config'
import { useLanguage } from '@/app/context/LocaleContext'
import { getServicePageJsonLd, jsonLdScriptProps } from '@/lib/agent-readiness'

import {
  agenticSoftwaresCopy,
  localizeAgentic,
} from '@/app/i18n/agenticSystemsPage'


type AgenticSoftwaresPageProps = {
  params: Promise<{ locale: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default function AgenticSoftwaresPage({ params, searchParams }: AgenticSoftwaresPageProps) {
  const { locale } = use(params)
  use(searchParams ?? Promise.resolve({}))
  const language = useLanguage()
  const copy = agenticSoftwaresCopy[language]
  const cta = getCtaButtonText(language)
  const pageJsonLd = getServicePageJsonLd('agentic-softwares', locale)
  const ourApps = [
    {
      title: 'AMS',
      description: localizeAgentic(
        language,
        'Run your entire school from one platform — academics, fees, invoices, payments, attendance, grades, parent and student portals, and branded school websites. Built for African schools with 8 roles and 76+ workflows.'
      ),
      category: localizeAgentic(language, 'Education'),
      status: localizeAgentic(language, 'Live'),
      link: 'https://ams-xi-two.vercel.app/',
      tech: ['Next.js', 'Supabase', 'Stripe', 'Real-time messaging'],
    },
    {
      title: 'DigniGuide',
      description: localizeAgentic(
        language,
        'The intelligent business guide — chat by voice or text to explore AI Employee, Agentic Softwares, training programs, and book your onboarding demo when you are ready.',
      ),
      category: localizeAgentic(language, 'AI Guide & Sales'),
      status: localizeAgentic(language, 'Live'),
      link: '/digni',
      tech: ['Next.js', 'OpenRouter', 'Web Speech', 'Streaming chat'],
    },
    {
      title: 'SwiftDrop',
      description: localizeAgentic(
        language,
        'Local food and grocery delivery — connect customers to restaurants, groceries, and pharmacies. Prepay items, pay delivery in cash on arrival, and track every order from kitchen to door.',
      ),
      category: localizeAgentic(language, 'Marketplace & Delivery'),
      status: localizeAgentic(language, 'Live'),
      link: 'https://swift-drop-chi.vercel.app/',
      tech: ['Next.js', 'Vercel', 'Payments', 'Live order tracking'],
    },
    {
      title: 'Proposal Agent',
      description: localizeAgentic(language, 'AI creates proposals. Minutes, not hours.'),
      category: localizeAgentic(language, 'Business Automation'),
      status: localizeAgentic(language, 'Beta'),
      link: 'https://voicetoproposal.ai',
      tech: ['Next.js', 'OpenAI API', 'Supabase', 'Stripe'],
    },
    {
      title: 'TaskFlow Pro',
      description: localizeAgentic(language, 'Project management. AI insights. Team collaboration.'),
      category: localizeAgentic(language, 'Productivity'),
      status: localizeAgentic(language, 'Beta'),
      link: 'https://taskflow-pro.com',
      tech: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
    },
    {
      title: 'Kabinda Lodge',
      description:
        localizeAgentic(language, 'Run the hotel from anywhere, bookings, rooms, keys, and payments in one command center. Role-based access, smart door cards, and full visibility for investors and staff.'),
      category: localizeAgentic(language, 'Hospitality'),
      status: localizeAgentic(language, 'Live'),
      link: 'https://kabinda-lodge.com/',
      tech: ['Next.js', 'OpenAI', 'Supabase', 'Stripe'],
    },
    {
      title: 'DispatchFlow',
      description: localizeAgentic(
        language,
        'Request. Track. Deliver. Procurement, dispatch, and inventory in one calm platform for multi-branch enterprise operations — especially across African markets.',
      ),
      category: localizeAgentic(language, 'Logistics & Operations'),
      status: localizeAgentic(language, 'Live'),
      link: 'https://dispatch-flow-one.vercel.app/',
      tech: ['Next.js 15', 'Supabase', 'Postgres RLS', 'Recharts'],
    },
    {
      title: 'ContentCraft AI',
      description: localizeAgentic(language, 'AI writes your marketing. Fast.'),
      category: localizeAgentic(language, 'Marketing'),
      status: localizeAgentic(language, 'Beta'),
      link: 'https://contentcraft-ai.com',
      tech: ['Vue.js', 'GPT-4', 'Redis', 'AWS'],
    }
  ]

  const services = [
    {
      title: localizeAgentic(language, 'Ops Running in 7–14 Days'),
      description: localizeAgentic(language, 'Stop babysitting one critical workflow—fast. For startups that need time back now. 7 days–2 weeks.'),
      process: [localizeAgentic(language, 'Agent Design'), localizeAgentic(language, 'Workflow Automation'), localizeAgentic(language, 'AI Integration'), localizeAgentic(language, 'Testing & Launch')],
      timeline: localizeAgentic(language, '7 days–2 weeks'),
      icon: '🤖'
    },
    {
      title: localizeAgentic(language, 'Scale Without Extra Headcount'),
      description: localizeAgentic(language, 'Replace manual ops that force hiring with systems that keep up as you grow. 2 weeks–1 month.'),
      process: [localizeAgentic(language, 'Agent Architecture'), localizeAgentic(language, 'Autonomous Workflow Design'), localizeAgentic(language, 'LLM Integration'), localizeAgentic(language, 'Deployment & Training')],
      timeline: localizeAgentic(language, '2 weeks–1 month'),
      icon: '🏢'
    },
    {
      title: localizeAgentic(language, 'Own the System That Runs It'),
      description: localizeAgentic(language, 'A full platform you own—so operations keep running without you as the glue. 1 month–3 months.'),
      process: [localizeAgentic(language, 'Agent Strategy'), localizeAgentic(language, 'Platform Architecture'), localizeAgentic(language, 'Multi-Agent Development'), localizeAgentic(language, 'Go-to-Market Support')],
      timeline: localizeAgentic(language, '1 month–3 months'),
      icon: '☁️'
    }
  ]

  const caseStudies = [
    {
      title: 'Proposal Agent',
      type: localizeAgentic(language, 'Internal Project'),
      industry: localizeAgentic(language, 'Business Automation'),
      challenge: localizeAgentic(language, 'Manual proposals. Slow. Lost deals.'),
      solution: localizeAgentic(language, 'AI creates proposals. Minutes. Professional. Shipped.'),
      results: [
        { metric: '90%', description: localizeAgentic(language, 'Faster proposal creation') },
        { metric: '10k+', description: localizeAgentic(language, 'Proposals generated') },
        { metric: '4.8/5', description: localizeAgentic(language, 'User satisfaction rating') }
      ],
      tech: ['Next.js', 'OpenAI API', 'Supabase', 'Stripe'],
      timeline: localizeAgentic(language, '3 months'),
      status: localizeAgentic(language, 'Live & Growing')
    },
    {
      title: 'HealthTrack Pro',
      type: localizeAgentic(language, 'Client Project'),
      industry: localizeAgentic(language, 'Healthcare'),
      challenge: localizeAgentic(language, 'Needed patient management. HIPAA. Insurance.'),
      solution: localizeAgentic(language, 'Built it. Scheduling. Billing. Patient portal.'),
      results: [
        { metric: '60%', description: localizeAgentic(language, 'Reduction in administrative time') },
        { metric: '$200k', description: localizeAgentic(language, 'Annual cost savings') },
        { metric: '95%', description: localizeAgentic(language, 'Patient satisfaction score') }
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      timeline: localizeAgentic(language, '4 months'),
      status: localizeAgentic(language, 'Successfully Deployed')
    },
    {
      title: 'Kabinda Lodge',
      type: localizeAgentic(language, 'Client Project'),
      industry: localizeAgentic(language, 'Hospitality'),
      challenge:
        localizeAgentic(language, 'Owners needed to run the property from a distance, block rooms on demand, see real performance, and stop key handoffs that bypass the front desk. Payments and restaurant service had to stay in one auditable flow.'),
      solution:
        localizeAgentic(language, 'A full hotel OS: online stays and conference-room booking, role-based access from super admin to restaurant lead, Stripe-backed payment methods, and smart cards issued from the dashboard so room access stays tied to the system.'),
      results: [
        { metric: '4+', description: localizeAgentic(language, 'Role levels from owner to front desk & restaurant') },
        { metric: '360°', description: localizeAgentic(language, 'Operations, bookings, and access in one dashboard') },
        { metric: localizeAgentic(language, 'Live'), description: localizeAgentic(language, 'Production guest booking & smart access') }
      ],
      tech: ['Next.js', 'OpenAI', 'Supabase', 'Stripe'],
      timeline: localizeAgentic(language, '2 months'),
      status: localizeAgentic(language, 'Live'),
      link: 'https://kabinda-lodge.com/'
    },
    {
      title: 'DispatchFlow',
      type: localizeAgentic(language, 'Internal Project'),
      industry: localizeAgentic(language, 'Logistics & Operations'),
      challenge:
        localizeAgentic(language, 'Multi-branch teams lost requests in email, dispatch status in WhatsApp, and inventory in spreadsheets — leadership had no single morning view of what was in transit.'),
      solution:
        localizeAgentic(language, 'A unified ops platform: procurement requests with approvals, dispatch control with driver assignments, inventory tied to deliveries, role-based dashboards, and Postgres RLS per organization.'),
      results: [
        { metric: '3', description: localizeAgentic(language, '3 core modules in one system of record') },
        { metric: '5', description: localizeAgentic(language, '5 role-based views with Postgres RLS') },
        { metric: localizeAgentic(language, 'Live'), description: localizeAgentic(language, 'Mobile-ready dispatch status updates') },
      ],
      tech: ['Next.js 15', 'Supabase', 'PostgreSQL RLS', 'Recharts'],
      timeline: localizeAgentic(language, '2 months'),
      status: localizeAgentic(language, 'Live'),
      link: 'https://dispatch-flow-one.vercel.app/',
    },
  ]

  const process = [
    {
      phase: localizeAgentic(language, 'Discovery'),
      duration: localizeAgentic(language, '1 day'),
      activities: [localizeAgentic(language, 'Stakeholder interviews'), localizeAgentic(language, 'Agent & workflow definition'), localizeAgentic(language, 'Technical feasibility'), localizeAgentic(language, 'Project roadmap')],
      deliverables: [localizeAgentic(language, 'Requirements document'), localizeAgentic(language, 'Agent architecture spec'), localizeAgentic(language, 'Project timeline'), localizeAgentic(language, 'Cost estimate')]
    },
    {
      phase: localizeAgentic(language, 'Design'),
      duration: localizeAgentic(language, '1 week'),
      activities: [localizeAgentic(language, 'Agent architecture design'), localizeAgentic(language, 'Autonomous workflow mapping'), localizeAgentic(language, 'Database design'), localizeAgentic(language, 'API specification')],
      deliverables: [localizeAgentic(language, 'Agent design doc'), localizeAgentic(language, 'Workflow diagrams'), localizeAgentic(language, 'Database schema'), localizeAgentic(language, 'API documentation')]
    },
    {
      phase: localizeAgentic(language, 'Development'),
      duration: localizeAgentic(language, '2-10 weeks'),
      activities: [localizeAgentic(language, 'Agent implementation'), localizeAgentic(language, 'Workflow automation'), localizeAgentic(language, 'LLM integration'), localizeAgentic(language, 'QA & optimization')],
      deliverables: [localizeAgentic(language, 'Working agentic software'), localizeAgentic(language, 'Test reports'), localizeAgentic(language, 'Documentation'), localizeAgentic(language, 'Training materials')]
    },
    {
      phase: localizeAgentic(language, 'Launch & Support'),
      duration: localizeAgentic(language, 'Ongoing'),
      activities: [localizeAgentic(language, 'Deployment to production'), localizeAgentic(language, 'Agent tuning'), localizeAgentic(language, 'Performance monitoring'), localizeAgentic(language, 'Continuous improvement')],
      deliverables: [localizeAgentic(language, 'Live agentic application'), localizeAgentic(language, 'Support documentation'), localizeAgentic(language, 'Monitoring setup'), localizeAgentic(language, 'Maintenance plan')]
    }
  ]

  return (
    <main className="marketing-simple">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScriptProps(pageJsonLd)}
      />
      <SimpleHero
        badge={copy.heroBadge}
        title={copy.heroTitlePrefix}
        titleHighlight={copy.heroTitleHighlight}
        subtitle={copy.heroDescription}
        primaryCta={{ href: getAssessmentPath('agentic-softwares'), label: copy.heroCta }}
        secondaryCta={{
          href: getBookingLinkProps().href,
          label: cta.discussProject,
          external: true,
        }}
      />
      <div className="border-b border-border bg-background pb-10">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ServiceAssessmentLink serviceId="agentic-softwares" />
        </div>
      </div>

      <HowDigniWorks className="border-b border-border py-20 bg-background" />

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            title={copy.applicationsTitle}
            titleHighlight={copy.applicationsHighlight}
            supporting={copy.applicationsSubtitle}
            className="mb-4"
          />
          {ourApps
            .filter((app) => app.title !== 'TaskFlow Pro' && app.title !== 'ContentCraft AI')
            .map((app) => (
              <CapabilityBlock
                key={app.title}
                label={`${app.category} · ${app.status}`}
                title={app.title}
                supporting={app.description}
                icon={<Boxes className="h-6 w-6" aria-hidden />}
                cta={
                  app.status === localizeAgentic(language, 'Live') ||
                  app.status === localizeAgentic(language, 'Beta')
                    ? {
                        href: app.link,
                        label: copy.viewApplication,
                        external: !app.link.startsWith('/'),
                      }
                    : undefined
                }
              />
            ))}
        </div>
      </section>

      {/* Services */}
      <AnimatedSection id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {copy.servicesTitle}{' '}
              <br />
              <span className="gradient-text">{copy.servicesHighlight}</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              {copy.servicesSubtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 md:p-8 hover:border-info/50 group"
              >
                <div className="text-center mb-6 md:mb-8">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-info/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl md:text-3xl">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-4 group-hover:text-info transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-6">{service.description}</p>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-dark">{copy.timelineLabel}</span>
                    <span className="text-info font-medium">{service.timeline}</span>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark mb-2 block">{copy.processLabel}</span>
                    <div className="space-y-2">
                      {service.process.map((step, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-info/10 rounded-full flex items-center justify-center text-xs font-bold text-info">
                            {j + 1}
                          </div>
                          <span className="text-sm text-muted">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    {...getBookingLinkProps()}
                    className="btn-secondary w-full text-center"
                  >
                    {cta.discussProject}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Case Studies */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {copy.storiesTitle}{' '}
              <br />
              <span className="gradient-text">{copy.storiesHighlight}</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              {copy.storiesSubtitle}
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies
              .filter((study) => study.title !== 'HealthTrack Pro')
              .map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="card p-6 md:p-8 lg:p-12"
              >
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          study.type === localizeAgentic(language, 'Internal Project') 
                            ? 'bg-accent/10 text-accent' 
                            : 'bg-info/10 text-info'
                        }`}>
                          {study.type}
                        </span>
                        <span className="px-3 py-1 bg-surface-light text-muted-dark text-xs font-medium rounded-full">
                          {study.industry}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold">{study.title}</h3>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-dark">{copy.challengeLabel}</span>
                        <p className="text-muted mt-2 leading-relaxed">{study.challenge}</p>
                      </div>

                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-dark">{copy.solutionLabel}</span>
                        <p className="text-text mt-2 leading-relaxed">{study.solution}</p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                        <div>
                          <span className="text-xs uppercase tracking-wider text-muted-dark">{copy.timelineLabel.replace(':', '')}</span>
                          <p className="text-info font-medium mt-1">{study.timeline}</p>
                        </div>
                        <div>
                          <span className="text-xs uppercase tracking-wider text-muted-dark">{copy.statusLabel}</span>
                          <p className="text-accent font-medium mt-1">{study.status}</p>
                        </div>
                      </div>

                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-dark">{copy.technologiesLabel}</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {study.tech.map((tech, j) => (
                            <span
                              key={j}
                              className="px-3 py-1 bg-surface-light rounded-full text-xs text-muted-dark"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {'link' in study && study.link ? (
                        <a
                          href={study.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex w-full sm:w-auto justify-center text-center"
                        >
                          {copy.liveProduct}
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-6 lg:mt-0">
                    <h4 className="font-display text-lg md:text-xl font-bold mb-4 md:mb-6">{copy.resultsLabel}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-6">
                      {study.results.map((result, j) => (
                        <div key={j} className="text-center">
                          <div className="font-display text-2xl md:text-3xl font-bold text-info mb-2">
                            {result.metric}
                          </div>
                          <p className="text-muted text-sm">{result.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {copy.processTitle}{' '}
              <br />
              <span className="gradient-text">{copy.processHighlight}</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              {copy.processSubtitle}
            </p>
          </div>

          <div className="space-y-8">
            {process.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 md:p-8"
              >
                <div className="grid lg:grid-cols-4 gap-4 md:gap-6">
                  <div>
                    <div className="flex items-center gap-3 md:gap-4 mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-info/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-display font-bold text-info text-sm md:text-base">{i + 1}</span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-lg md:text-xl font-bold">{phase.phase}</h3>
                        <span className="text-info text-sm font-medium">{phase.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark mb-2 block">{copy.activitiesLabel}</span>
                    <div className="space-y-1">
                      {phase.activities.map((activity, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-info rounded-full" />
                          <span className="text-sm text-muted">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <span className="text-xs uppercase tracking-wider text-muted-dark mb-2 block">{copy.deliverablesLabel}</span>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {phase.deliverables.map((deliverable, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          <span className="text-sm text-muted">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <section className="border-t border-border bg-surface py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="type-h2 font-display font-bold text-text">{copy.finalTitle}</h2>
          <p className="type-body mx-auto mt-4 max-w-2xl leading-relaxed text-muted">{copy.finalDescription}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <StripeCheckoutButton
              plan="agentic_deposit"
              className="btn-primary w-full px-8 py-3 text-center sm:w-auto"
              redirectingLabel={cta.checkoutRedirecting}
            >
              {cta.payProjectDeposit}
            </StripeCheckoutButton>
            <Link
              href={getAssessmentPath('agentic-softwares')}
              className="type-body font-medium text-accent underline-offset-4 hover:underline"
            >
              {copy.heroCta} →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}