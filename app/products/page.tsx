'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import { ctaConfig, getBookingLinkProps } from '@/app/config/cta.config'

const featuredProduct = {
  id: 'proposal-agent',
  name: 'ProposalAgent',
  tagline: 'Speak. We structure. You send.',
  description: 'Voice to proposal. AI structures. Minutes, not hours.',
  features: [
    'Voice-to-Text Conversion',
    'AI-Powered Structuring',
    'Brand Customization',
    'Template Library',
    'Client Portal',
    'Analytics Dashboard'
  ],
  benefits: [
    '10x Faster Proposal Creation',
    'Consistent Professional Quality',
    'Higher Conversion Rates',
    'Time Savings',
    'Reduced Errors',
    'Better Client Experience'
  ],
  pricing: {
    starter: { price: '$29', features: ['5 proposals/month', 'Basic templates', 'Email support'] },
    pro: { price: '$79', features: ['25 proposals/month', 'Custom branding', 'Priority support', 'Analytics'] },
    enterprise: { price: '$199', features: ['Unlimited proposals', 'White-label', 'API access', 'Dedicated support'] }
  }
}

const comingSoonProducts = [
  {
    id: 'crm-lite',
    initial: 'C',
    name: 'CRM Lite',
    description: 'CRM for small biz. Contacts. Deals. Simple.',
    features: ['Contact Management', 'Deal Pipeline', 'Email Integration', 'Reporting'],
    launchDate: 'Q2 2024'
  },
  {
    id: 'invoice-ai',
    initial: 'I',
    name: 'Invoice AI',
    description: 'Auto invoices. Payment tracking. Smart reminders.',
    features: ['Auto Invoice Generation', 'Payment Tracking', 'Smart Reminders', 'Tax Compliance'],
    launchDate: 'Q3 2024'
  },
  {
    id: 'social-assistant',
    initial: 'S',
    name: 'Social Assistant',
    description: 'AI content. Scheduling. Analytics. Done.',
    features: ['Content Generation', 'Scheduling', 'Analytics', 'Multi-platform'],
    launchDate: 'Q4 2024'
  },
]

export default function ProductsPage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden bg-gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Our Products
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 px-2">
              We don't just consult.{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">We build SaaS.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed px-2">
              Tools that work. Affordable. Grow with or without us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Product */}
      <AnimatedSection id="proposal-agent" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 md:p-12 mb-16 glow-accent-hover"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-success/20 text-success text-xs font-bold rounded-full">LIVE</span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold">{featuredProduct.name}</h2>
                </div>
                <p className="text-2xl text-accent font-medium mb-6">{featuredProduct.tagline}</p>
                <p className="text-muted text-lg mb-8 leading-relaxed">
                  {featuredProduct.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-semibold mb-4">Features</h4>
                    <ul className="space-y-2">
                      {featuredProduct.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Benefits</h4>
                    <ul className="space-y-2">
                      {featuredProduct.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted">
                          <div className="w-1.5 h-1.5 bg-success rounded-full" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a href="#pricing" className="btn-primary" aria-label="View pricing plans">Try Free</a>
                  <a 
                    {...getBookingLinkProps()}
                    className="btn-secondary"
                    aria-label="Schedule a demo"
                  >
                    Watch Demo
                  </a>
                </div>
              </div>
              
              <div className="w-full h-96 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-accent/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <span className="font-display text-5xl font-bold text-accent">P</span>
                  </div>
                  <span className="text-muted text-lg">ProposalAgent Interface</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pricing Section */}
          <div id="pricing" className="mb-16">
            <div className="text-center mb-12">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Choose Your Plan
              </h3>
              <p className="text-muted text-lg">Start free, scale as you grow</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(featuredProduct.pricing).map(([plan, details], i) => (
                <motion.div
                  key={plan}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`card p-8 ${plan === 'pro' ? 'border-accent/50 glow-accent' : ''}`}
                >
                  {plan === 'pro' && (
                    <div className="text-center mb-4">
                      <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-bold rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h4 className="font-display text-xl font-bold capitalize mb-2">{plan}</h4>
                    <div className="font-display text-4xl font-bold text-accent mb-2">
                      {details.price}
                      <span className="text-lg text-muted font-normal">/month</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {details.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-muted">
                        <div className="w-1.5 h-1.5 bg-success rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    {...getBookingLinkProps()}
                    className={`w-full text-center ${plan === 'pro' ? 'btn-primary' : 'btn-secondary'}`}
                    aria-label={`Get started with ${plan} plan`}
                  >
                    {ctaConfig.buttonText.getStarted}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Coming Soon Products */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Coming Soon
            </h2>
            <p className="text-muted text-lg">More tools to power your growth</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {comingSoonProducts.map((product, i) => (
              <motion.div
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-8 opacity-80 hover:opacity-100 transition-opacity"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-surface-light rounded-xl flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-muted">{product.initial}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{product.name}</h3>
                    <span className="text-xs text-accent uppercase font-medium">{product.launchDate}</span>
                  </div>
                </div>
                
                <p className="text-muted mb-6 leading-relaxed">{product.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-muted text-sm">
                        <div className="w-1 h-1 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  className="btn-secondary w-full" 
                  disabled
                  aria-label={`Notify me when ${product.name} is available`}
                >
                  Notify Me
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-muted text-lg mb-8">
            Can't find what you're looking for? We build custom software solutions tailored to your specific needs.
          </p>
          <a
            {...getBookingLinkProps()}
            className="btn-primary text-lg px-8 py-4"
          >
            Discuss Custom Development
          </a>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  )
}