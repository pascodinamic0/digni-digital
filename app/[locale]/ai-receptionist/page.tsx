'use client'

import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import Navigation from '@/app/components/Navigation'
import AIReceptionistFooter from '@/app/components/AIReceptionistFooter'
import AnimatedSection from '@/app/components/AnimatedSection'
import ClientJourneyDemo from '@/app/components/ClientJourneyDemo'
import ConversationMockups from '@/app/components/ConversationMockups'
import UnifiedInbox from '@/app/components/UnifiedInbox'
import BusinessTimeline from '@/app/components/BusinessTimeline'
import DemoPresentationDownload from '@/app/components/DemoPresentationDownload'
import { useTheme } from '@/app/components/ThemeProvider'
import { ctaConfig, getBookingLinkProps } from '@/app/config/cta.config'

function AIEmployeeCTASection() {
  const { theme } = useTheme()
  return (
    <div className="relative bg-surface rounded-3xl p-12 md:p-16 lg:p-20 overflow-hidden">
      <div className={`absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 rounded-tl-3xl ${'border-border-foreground'}`} />
      <div className={`absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 rounded-br-3xl ${'border-border-foreground'}`} />
      <div className="text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-block px-5 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium tracking-wide mb-6 uppercase"
        >
          Limited Availability
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          We&apos;re Not Replacing Your Team.
          <br />
          <span className="gradient-text">We&apos;re Amplifying Them.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          We give them superpowers—so they can focus on delivery instead of manual work. Stay ahead. Dominate your market.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-accent font-semibold text-base md:text-lg mb-10"
        >
          We serve one client per market. Your spot is either yours or your competitor&apos;s.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <a
            {...getBookingLinkProps()}
            className="group relative inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-light text-background font-bold px-10 py-5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-lg shadow-lg shadow-accent/25"
          >
            <span>Secure Your Position Now</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm text-muted"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full" />
            <span>One client per market</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full" />
            <span>30-min Strategy Call</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full" />
            <span>No obligation</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function AIReceptionistPage() {
  const capabilities = [
    {
      number: '01',
      title: 'Instant Response',
      description: 'Reply in under 2 seconds. No delay. No lost leads.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: 'accent'
    },
    {
      number: '02',
      title: 'Smart Qualification',
      description: 'Asks the right questions. Sends only ready buyers.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: 'success'
    },
    {
      number: '03',
      title: 'Auto Booking',
      description: 'Leads book themselves. Your calendar fills.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      color: 'info'
    },
    {
      number: '04',
      title: 'Follow-Up System',
      description: 'Keeps following until they book or say no.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: 'purple'
    },
    {
      number: '05',
      title: 'Multi-Channel',
      description: 'Calls, WhatsApp, email. One inbox.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: 'accent'
    },
    {
      number: '06',
      title: 'Revenue Recovery',
      description: 'Wakes up cold leads. Turns them into sales.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: 'success'
    }
  ]

  const pricing = [
    {
      name: 'Done-For-You System',
      limited: true,
      limitedLabel: 'Limited availability',
      setupFee: '$2,000',
      setupLabel: 'one-time setup',
      price: '$449',
      originalPrice: '$500',
      period: '/month',
      description: 'Done-for-you. No software to manage. Live in 24h.',
      included: [
        'Live in 24 hours',
        'All channels (phone, WhatsApp, email)',
        'Custom qualification',
        'Calendar booking',
        'CRM connected',
        'We manage it',
        'Performance tracked',
        'Unlimited usage'
      ],
      note: 'If you pay for ads, you can afford the system that makes them work.'
    }
  ]

  const caseStudy = {
    company: 'Regional Medical Center',
    industry: 'Healthcare',
    context: '$15k/month in ads. System couldn\'t handle the leads.',
    challenge: '40% of leads missed. Going cold. $80k/month lost.',
    solution: 'Done-for-you system live in 18 hours. Handles all intake.',
    results: [
      { metric: '100%', description: 'Every lead answered. Instantly.' },
      { metric: 'Zero', description: 'No cold leads. System follows up.' },
      { metric: '18 hours', description: 'Decision to live.' },
      { metric: '85%', description: 'Better conversion from instant response.' }
    ]
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'accent': return { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/30', gradient: 'from-accent/20 to-accent/5' }
      case 'success': return { bg: 'bg-success/10', text: 'text-success', border: 'border-success/30', gradient: 'from-success/20 to-success/5' }
      case 'info': return { bg: 'bg-info/10', text: 'text-info', border: 'border-info/30', gradient: 'from-info/20 to-info/5' }
      case 'purple': return { bg: 'bg-purple/10', text: 'text-purple', border: 'border-purple/30', gradient: 'from-purple/20 to-purple/5' }
      default: return { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/30', gradient: 'from-accent/20 to-accent/5' }
    }
  }

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative isolate min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden bg-gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-destructive/10 border border-destructive/30 rounded-full text-destructive text-xs sm:text-sm font-semibold mb-4 sm:mb-6 uppercase tracking-wide">
              You're Losing Money Right Now
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-4 sm:mb-6 md:mb-8 px-2">
              Your Ads Are Generating Leads.{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">Your Team Is Losing Them.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 md:mb-10 px-2">
              Slow reply = lost sale. We respond in <span className="text-accent font-semibold">under 2 seconds</span>. 
              Qualify. Book. 24/7. You sleep. It works.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
              <a
                {...getBookingLinkProps()}
                className="btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center"
              >
                Stop Losing Leads Today
              </a>
              <DemoPresentationDownload service="aiEmployee" variant="hero" label="Download Demo Presentation" />
            </div>
            <p className="text-muted/60 text-sm mt-4">Live in 24 hours. No software to manage. Done-for-you.</p>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-destructive/10 border border-destructive/20 rounded-full text-destructive text-xs font-semibold mb-6 uppercase tracking-wide">
              The Math Doesn't Lie
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              This Isn't a Marketing Problem.<br />
              <span className="text-destructive">This Is a Cash Leak.</span>
            </h2>
            <p className="text-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              4 hours late = competitor wins. Your ad spend? Wasted.
            </p>
          </div>
          
          {/* The brutal truth */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-destructive/20 to-destructive/5 border border-destructive/20 p-8 text-center"
            >
              <div className="font-display text-5xl md:text-6xl font-bold text-destructive mb-3">40%</div>
              <p className="text-text font-medium mb-2">of your calls go unanswered</p>
              <p className="text-muted text-sm">Half your ad spend. Gone.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-destructive/20 to-destructive/5 border border-destructive/20 p-8 text-center"
            >
              <div className="font-display text-5xl md:text-6xl font-bold text-destructive mb-3">78%</div>
              <p className="text-text font-medium mb-2">call your competitor next</p>
              <p className="text-muted text-sm">They call your competitor next. Simple.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-destructive/20 to-destructive/5 border border-destructive/20 p-8 text-center"
            >
              <div className="font-display text-5xl md:text-6xl font-bold text-destructive mb-3">5 min</div>
              <p className="text-text font-medium mb-2">is all you have</p>
              <p className="text-muted text-sm">5 min late = 80% fewer conversions. Clock's ticking.</p>
            </motion.div>
          </div>

          {/* The problems */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card p-6 border-destructive/10 hover:border-destructive/30"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-text mb-2">Slow Response</h3>
              <p className="text-muted text-sm leading-relaxed">
                Lead at 2pm. You call 6pm. Too late. <span className="text-destructive font-medium">Ad spend burned.</span>
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card p-6 border-destructive/10 hover:border-destructive/30"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-text mb-2">Missed Messages</h3>
              <p className="text-muted text-sm leading-relaxed">
                Message at 11pm. You sleep. They buy elsewhere. <span className="text-destructive font-medium">Gone by morning.</span>
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="card p-6 border-destructive/10 hover:border-destructive/30"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-text mb-2">No Follow-Up</h3>
              <p className="text-muted text-sm leading-relaxed">
                "I'll call tomorrow." Becomes never. <span className="text-destructive font-medium">Revenue gone.</span>
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-8 rounded-2xl bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 border border-accent/20"
          >
            <p className="text-text text-xl md:text-2xl font-display font-semibold mb-2">
              This isn't a sales problem. It's a systems problem.
            </p>
            <p className="text-muted text-lg">
              The fix isn't "try harder." The fix is infrastructure that never sleeps.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Client Journey Demo - Before vs After */}
      <ClientJourneyDemo />

      {/* Conversation Mockups */}
      <ConversationMockups />

      {/* Unified Inbox */}
      <UnifiedInbox />

      {/* Business Timeline */}
      <BusinessTimeline />

      {/* How It Works - Redesigned */}
      <AnimatedSection id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-semibold uppercase tracking-wide mb-4"
            >
              The System
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold mb-6"
            >
              Six Capabilities.<br />
              <span className="gradient-text">One System.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted text-lg max-w-2xl mx-auto"
            >
              We run it. You grow.
            </motion.p>
          </div>

          {/* Capability Cards - Visual grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
            {capabilities.map((capability, i) => {
              const colors = getColorClasses(capability.color)
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`relative p-6 rounded-2xl bg-gradient-to-br ${colors.gradient} border ${colors.border} backdrop-blur-sm hover:border-opacity-50 transition-all duration-300 group`}
                >
                  {/* Number badge */}
                  <div className="absolute -top-2 -left-2 w-10 h-10 bg-surface rounded-xl border border-border-light flex items-center justify-center shadow-lg">
                    <span className={`font-display font-bold text-sm ${colors.text}`}>{capability.number}</span>
                  </div>
                  
                  <div className="flex items-start gap-4 pt-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0 ${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                      {capability.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold mb-2 text-text group-hover:text-accent transition-colors">
                        {capability.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">{capability.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Time to Value - Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent via-accent/90 to-purple p-8 md:p-12"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-foreground/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-foreground/5 rounded-full blur-2xl" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-foreground/10 rounded-full text-foreground/80 text-xs font-medium mb-4 backdrop-blur-sm border border-border-light">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Time to Value
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-text mb-4">
                  Live in 24 Hours
                </h3>
                <p className="text-foreground/80 text-lg max-w-lg leading-relaxed">
                  Live in 24 hours. No setup. No training. We run it. You sell.
                </p>
              </div>
              
              <div className="flex flex-col items-center md:items-end gap-4">
                <div className="text-center md:text-right">
                  <div className="font-display text-6xl md:text-7xl font-bold text-text mb-2">24h</div>
                  <p className="text-foreground/60 text-sm">From decision to operation</p>
                </div>
                <a
                  {...getBookingLinkProps()}
                  className="inline-flex items-center gap-2 bg-on-accent text-accent font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
                >
                  {ctaConfig.buttonText.getStarted}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Clear Qualification Section - Glassmorphism (MOVED BEFORE PRICING) */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-semibold uppercase tracking-wide mb-4"
            >
              Clear Qualification
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold mb-6"
            >
              This system is not for everyone.<br />
              <span className="gradient-text">Here's who it serves.</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Who This Is For */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-gradient-to-br from-success/10 via-success/5 to-transparent border border-success/20 p-8"
            >
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-success">Who This Is For</h3>
                </div>
                
                <ul className="space-y-4">
                  {[
                    'Running Facebook, Instagram, or WhatsApp ads',
                    'Selling $500+ per transaction',
                    'Appointments or consultations required',
                    'Missing leads from slow response',
                    'Spending $1k+ monthly on ads',
                    'Want every lead you pay for'
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 bg-success/20 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-muted text-sm leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Who This Is NOT For */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-gradient-to-br from-destructive/10 via-destructive/5 to-transparent border border-destructive/20 p-8"
            >
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-destructive">Not The Right Fit</h3>
                </div>
                
                <ul className="space-y-4">
                  {[
                    'No paid ads',
                    'Products under $100',
                    'No appointments needed',
                    'Already capturing 100% of leads',
                    'Need ad strategy, not intake',
                    'Want to self-manage software'
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 bg-destructive/20 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-muted text-sm leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Case Study */}
      <AnimatedSection className="py-24">
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
                    <span className="text-xs uppercase tracking-wider text-muted-dark">Context</span>
                    <p className="text-muted mt-2 leading-relaxed">{caseStudy.context}</p>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark">Challenge</span>
                    <p className="text-muted mt-2 leading-relaxed">{caseStudy.challenge}</p>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark">Solution</span>
                    <p className="text-text mt-2 leading-relaxed">{caseStudy.solution}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-display text-xl font-bold mb-6">Outcomes</h4>
                <div className="space-y-6">
                  {caseStudy.results.map((result, i) => (
                    <div key={i} className="text-center">
                      <div className="font-display text-3xl font-bold text-accent mb-2">
                        {result.metric}
                      </div>
                      <p className="text-muted text-sm leading-relaxed">{result.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Pricing */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Fixed Pricing,<br />
              <span className="gradient-text">Complete System</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto leading-relaxed">
              One price. Everything included. No per-call fees. No hidden costs.
            </p>
          </div>

          <div className="flex justify-center mb-8">
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
                  <div className="text-center mb-6">
                    {plan.limited && (
                      <span className="inline-block px-3 py-1.5 bg-destructive/20 text-destructive text-xs font-semibold rounded-full border border-destructive/30 mb-4">
                        {plan.limitedLabel || 'Limited availability'}
                      </span>
                    )}
                    <h3 className="font-display text-2xl font-bold text-text mb-1">{plan.name}</h3>
                    <p className="text-muted text-sm">{plan.description}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 mb-8">
                    {plan.setupFee && (
                      <div className="flex-1 min-w-0 rounded-xl bg-surface/80 border border-border/50 px-5 py-4 flex flex-col justify-center text-center">
                        <div className="text-muted text-[11px] uppercase tracking-wider font-medium mb-1">{plan.setupLabel || 'Setup'}</div>
                        <div className="font-display text-xl font-bold text-text">{plan.setupFee}</div>
                      </div>
                    )}
                    <div className="flex-1 min-w-0 rounded-xl bg-accent/10 border border-accent/20 px-5 py-5 flex flex-col justify-center text-center">
                      <div className="text-muted text-[11px] uppercase tracking-wider font-medium mb-1">Monthly</div>
                      <div className="flex items-baseline justify-center gap-2 flex-wrap">
                        {plan.originalPrice && (
                          <span className="font-display text-base text-muted line-through">{plan.originalPrice}{plan.period}</span>
                        )}
                        <span className="font-display text-3xl font-bold text-accent">
                          {plan.price}
                          <span className="text-base font-normal text-muted">{plan.period}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-6">
                    {plan.included.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-text">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-muted text-xs text-center mb-6 leading-relaxed">
                    {plan.note}
                  </p>

                  <a
                    {...getBookingLinkProps()}
                    className="btn-primary w-full text-center text-lg py-4"
                  >
                    Install Follow-Up Infrastructure
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </AnimatedSection>

      {/* Strong CTA - One step from footer */}
      <AnimatedSection className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/15" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-px bg-gradient-to-br from-accent/40 via-accent/10 to-accent/40 rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden">
              <AIEmployeeCTASection />
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <AIReceptionistFooter />
    </main>
  )
}
