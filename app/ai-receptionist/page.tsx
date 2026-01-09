'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import ConversationMockups from '../components/ConversationMockups'
import UnifiedInbox from '../components/UnifiedInbox'
import BusinessTimeline from '../components/BusinessTimeline'

export default function AIReceptionistPage() {
  const features = [
    {
      title: '24/7 Call Handling',
      description: 'Never miss a call again. Our AI answers every call, even when you\'re sleeping, on vacation, or in meetings.',
      icon: '📞'
    },
    {
      title: 'Intelligent Lead Qualification',
      description: 'AI asks the right questions to qualify leads before they reach your team, saving time and improving conversion rates.',
      icon: '🎯'
    },
    {
      title: 'Appointment Booking',
      description: 'Seamlessly book appointments directly into your calendar system with real-time availability checking.',
      icon: '📅'
    },
    {
      title: 'CRM Integration',
      description: 'Automatically log all interactions, update contact information, and trigger follow-up sequences.',
      icon: '🔗'
    },
    {
      title: 'Multi-Language Support',
      description: 'Serve customers in their preferred language with natural conversation capabilities.',
      icon: '🌍'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Track call volume, conversion rates, and ROI with detailed reporting and insights.',
      icon: '📊'
    },
    {
      title: 'Database Reactivation Campaigns',
      description: 'Automatically re-engage dormant contacts from your database with personalized campaigns that bring cold leads back to life.',
      icon: '🔄'
    },
    {
      title: 'Reputation Management',
      description: 'Monitor reviews across all platforms, automatically respond to feedback, and maintain your 5-star reputation effortlessly.',
      icon: '⭐'
    },
    {
      title: 'Smart Lead Scoring',
      description: 'AI automatically scores and prioritizes leads based on behavior, engagement, and fit so you focus on the hottest prospects first.',
      icon: '🎯'
    }
  ]

  const pricing = [
    {
      name: 'AI Employee Pro',
      price: '$449',
      period: '/month',
      description: 'Complete AI employee solution for your business',
      features: [
        'Unlimited calls & messages',
        'All communication channels',
        'Advanced lead qualification',
        'Appointment booking & scheduling',
        'CRM integrations',
        'Multi language support',
        'Custom AI training',
        'Priority support',
        'Analytics dashboard',
        'Custom scripts & workflows'
      ],
      popular: true
    }
  ]

  const caseStudy = {
    company: 'Regional Medical Center',
    industry: 'Healthcare',
    challenge: 'Missing 40% of after hours calls, losing $80k monthly in potential revenue from missed appointments and consultations.',
    solution: 'Deployed AI Employee with medical-specific training, HIPAA compliance, and integration with their existing patient management system.',
    results: [
      { metric: '100%', description: 'Call capture rate (up from 60%)' },
      { metric: '$240k', description: 'Additional monthly revenue' },
      { metric: '85%', description: 'Patient satisfaction increase' },
      { metric: '2 weeks', description: 'Full implementation time' }
    ]
  }

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-mesh">
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
              AI Employee Systems
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Never Miss Another<br />
              <span className="gradient-text">Lead Again</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-10">
              Deploy intelligent AI employees that capture every opportunity, qualify prospects, 
              and book appointments 24/7 — so you can focus on serving customers instead of chasing them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/pascal-digny/consultation-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                Schedule Demo
              </a>
              <a
                href="/Digni%20Digital%20-%20Revised.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4"
              >
                View Presentation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Every Missed Call Is Money<br />
            <span className="text-destructive">Walking Out The Door</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card p-6">
              <div className="text-3xl font-display font-bold text-destructive mb-2">40%</div>
              <p className="text-muted text-sm">of calls go unanswered during business hours</p>
            </div>
            <div className="card p-6">
              <div className="text-3xl font-display font-bold text-destructive mb-2">$62B</div>
              <p className="text-muted text-sm">lost annually by small businesses to missed leads</p>
            </div>
            <div className="card p-6">
              <div className="text-3xl font-display font-bold text-destructive mb-2">78%</div>
              <p className="text-muted text-sm">of customers call competitors after no answer</p>
            </div>
          </div>
          <p className="text-muted text-lg">
            Your competitors are capturing the leads you're missing. It's time to level the playing field.
          </p>
        </div>
      </AnimatedSection>


      {/* Conversation Mockups */}
      <ConversationMockups />

      {/* Unified Inbox */}
      <UnifiedInbox />

      {/* Business Timeline */}
      <BusinessTimeline />

      {/* Features */}
      <AnimatedSection id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Enterprise-Grade AI<br />
              <span className="gradient-text">At Small Business Prices</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              Everything you need to capture, qualify, and convert every lead that calls your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-8 hover:border-accent/50 group"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-display text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Case Study */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Success Story</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Real Results from<br />
              <span className="gradient-text">Real Implementation</span>
            </h2>
          </div>

          <div className="card p-8 md:p-12">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                    {caseStudy.industry}
                  </span>
                  <h3 className="font-display text-2xl font-bold">{caseStudy.company}</h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark">Challenge</span>
                    <p className="text-muted mt-2 leading-relaxed">{caseStudy.challenge}</p>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark">Solution</span>
                    <p className="text-white mt-2 leading-relaxed">{caseStudy.solution}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-display text-xl font-bold mb-6">Results</h4>
                <div className="space-y-6">
                  {caseStudy.results.map((result, i) => (
                    <div key={i} className="text-center">
                      <div className="font-display text-3xl font-bold text-accent mb-2">
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

      {/* Pricing */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              One Plan,<br />
              <span className="gradient-text">Everything Included</span>
            </h2>
            <p className="text-muted text-lg">
              Complete AI employee solution with all features included.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-md w-full">
              {pricing.map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="card p-8 border-accent/50 glow-accent"
                >
                  <div className="text-center mb-4">
                    <span className="px-4 py-2 bg-accent/20 text-accent text-sm font-bold rounded-full">
                      COMPLETE SOLUTION
                    </span>
                  </div>

                  <div className="text-center mb-8">
                    <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="font-display text-5xl font-bold text-accent mb-2">
                      {plan.price}
                      <span className="text-xl text-muted font-normal">{plan.period}</span>
                    </div>
                    <p className="text-muted text-sm">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-white">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://calendly.com/pascal-digny/consultation-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center text-lg py-4"
                  >
                    Get Started Today
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Stop Missing Leads?
          </h2>
          <p className="text-muted text-lg mb-8">
            See how AI Employee can transform your business in a live demo. 
            No commitment required.
          </p>
          <a
            href="https://calendly.com/pascal-digny/consultation-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4"
          >
            Schedule Your Demo
          </a>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  )
}