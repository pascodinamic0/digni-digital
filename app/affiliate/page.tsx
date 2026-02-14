'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import { ctaConfig, getBookingLinkProps } from '@/app/config/cta.config'

export default function AffiliatePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    tiktok: '',
    youtube: '',
    audienceSize: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with backend/email service
    console.log('Affiliate application:', formData)
    setFormSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // How It Works - 4 Steps
  const steps = [
    {
      number: '01',
      title: 'Apply',
      description: 'Submit your application with your social media profiles and audience information.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <line x1="20" y1="8" x2="20" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="23" y1="11" x2="17" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      number: '02',
      title: 'Get Approved',
      description: 'Receive your unique affiliate link, tracking dashboard, and marketing assets.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: '03',
      title: 'Create Content',
      description: 'Produce authentic UGC videos showcasing how our products solve real problems.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="23 7 16 12 23 17 23 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      number: '04',
      title: 'Earn Commissions',
      description: 'Get paid for every successful referral. Monthly payouts directly to your account.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]

  // Products to promote
  const products = [
    {
      name: 'AI Employee',
      tagline: 'Never miss a lead again',
      price: '$449/month',
      commission: '20% recurring',
      target: 'Service businesses running paid ads',
      description: 'AI-powered system that handles calls, qualifies leads, and books appointments 24/7.',
      icon: '🤖',
      color: 'accent',
      link: '/ai-receptionist'
    },
    {
      name: 'Digni Digital Literacy Program',
      tagline: 'Students with real income skills',
      price: '$500/month',
      commission: '20% recurring',
      target: 'Schools & universities',
      description: 'Complete employability program transforming students into job-ready professionals.',
      icon: '🎓',
      color: 'success',
      link: '/future-ready-graduate'
    },
    {
      name: 'Custom SaaS',
      tagline: 'Your vision, built to scale',
      price: 'Custom pricing',
      commission: '10% of project value',
      target: 'Businesses with unique challenges',
      description: 'Custom software solutions built from concept to deployment.',
      icon: '⚙️',
      color: 'info',
      link: '/custom-saas'
    }
  ]

  // Benefits
  const benefits = [
    {
      title: 'Competitive Commissions',
      description: 'Earn 10-20% on every sale you generate. Recurring commissions on subscription products.',
      icon: '💰'
    },
    {
      title: 'Marketing Assets',
      description: 'Access to professional graphics, video scripts, and promotional materials.',
      icon: '🎨'
    },
    {
      title: 'Real-Time Tracking',
      description: 'Monitor your referrals, conversions, and earnings in your personal dashboard.',
      icon: '📊'
    },
    {
      title: 'Monthly Payouts',
      description: 'Reliable monthly payments via bank transfer or PayPal. No minimum threshold.',
      icon: '📅'
    },
    {
      title: 'Dedicated Support',
      description: 'Direct access to our affiliate team for questions, strategies, and optimization.',
      icon: '🤝'
    },
    {
      title: 'Exclusive Bonuses',
      description: 'Performance bonuses, early access to new products, and special promotions.',
      icon: '🎁'
    }
  ]

  // Ideal affiliates
  const idealAffiliates = [
    {
      title: 'Social Media Influencers',
      description: 'Business, tech, or entrepreneurship focused creators with engaged audiences.',
      icon: '📱'
    },
    {
      title: 'YouTube Creators',
      description: 'Channels covering business, productivity, AI, or education topics.',
      icon: '▶️'
    },
    {
      title: 'TikTok & Reels Creators',
      description: 'Short-form content creators in the business and tech space.',
      icon: '🎬'
    },
    {
      title: 'Business Coaches',
      description: 'Consultants helping businesses grow and optimize operations.',
      icon: '📈'
    },
    {
      title: 'Marketing Agencies',
      description: 'Agencies looking for white-label or referral partnerships.',
      icon: '🏢'
    },
    {
      title: 'Tech Bloggers',
      description: 'Writers covering AI, SaaS, business technology, and digital transformation.',
      icon: '✍️'
    }
  ]

  // FAQ
  const faqs = [
    {
      question: 'What are the commission rates?',
      answer: 'You earn 20% recurring commission on AI Employee and Digni Digital Literacy Program subscriptions, and 10% on Custom SaaS projects. Commissions are paid for as long as the customer remains active.'
    },
    {
      question: 'When and how do I get paid?',
      answer: 'Payments are processed monthly, typically within the first week of each month. We support bank transfers and PayPal. There\'s no minimum payout threshold.'
    },
    {
      question: 'What kind of content should I create?',
      answer: 'Authentic UGC works best — product demos, before/after results, problem-solution stories, and honest reviews. We provide content guidelines and scripts to help you get started.'
    },
    {
      question: 'Do I need a large following to join?',
      answer: 'No. We value engagement and authenticity over follower count. Micro-influencers with niche audiences often outperform larger accounts.'
    },
    {
      question: 'Will I receive training on the products?',
      answer: 'Yes! All approved affiliates get access to product training, demo accounts, and regular updates so you can speak confidently about our solutions.'
    },
    {
      question: 'How is my referral tracked?',
      answer: 'You receive a unique affiliate link and tracking code. When someone clicks your link, they\'re cookied for 90 days, so you get credit even if they don\'t buy immediately.'
    }
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
            className="text-center mb-8 sm:mb-12"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-xs sm:text-sm font-semibold mb-4 sm:mb-6 uppercase tracking-wide">
              Partner Program
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 max-w-5xl mx-auto text-center"
          >
            Earn While Helping Businesses{' '}
            <span className="gradient-text">Transform.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed text-center"
          >
            Join our affiliate program and earn commissions by creating authentic content 
            that helps businesses capture more leads, students get job-ready, and organizations 
            access enterprise-level technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#apply"
              className="btn-primary text-base sm:text-lg px-8 py-4 w-full sm:w-auto text-center"
            >
              Apply Now
            </a>
            <a
              {...getBookingLinkProps()}
              className="btn-secondary text-base sm:text-lg px-8 py-4 w-full sm:w-auto text-center"
            >
              Book a Call
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-8 mt-12 sm:mt-16"
          >
            {[
              { value: 'Up to 20%', label: 'Commission Rate' },
              { value: '90 Days', label: 'Cookie Duration' },
              { value: 'Monthly', label: 'Payouts' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-display font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY Section - The Mission */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Why Join Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Join a <span className="gradient-text">Movement</span>, Not Just a Program
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto leading-relaxed">
              We believe technology should serve humanity. When you partner with us, 
              you're not just earning commissions — you're helping democratize access 
              to opportunity for businesses and students who need it most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📞',
                title: 'Help Businesses Capture Every Lead',
                description: 'Small businesses lose $62 billion annually to missed leads. Our AI Employee ensures they never miss another opportunity.',
                stat: '$62B',
                statLabel: 'in missed leads annually'
              },
              {
                icon: '🎓',
                title: 'Help Students Get Job-Ready',
                description: '40% of graduates are unemployed 6 months after graduation. Our program gives them real, income-generating skills.',
                stat: '40%',
                statLabel: 'graduate unemployment rate'
              },
              {
                icon: '⚙️',
                title: 'Democratize Enterprise Tech',
                description: 'Enterprise software is locked behind million-dollar budgets. We build custom solutions accessible to everyone.',
                stat: '10:1',
                statLabel: 'enterprise vs SMB tech gap'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="card p-8 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-3xl font-display font-bold text-accent mb-1">{item.stat}</div>
                <div className="text-xs text-muted uppercase tracking-wider mb-4">{item.statLabel}</div>
                <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* HOW Section - The Process */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Four Simple Steps to{' '}
              <span className="gradient-text">Start Earning</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              From application to your first commission — here's exactly how the process works.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                {/* Connector Line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent/50 to-accent/10 -translate-x-1/2" />
                )}
                
                <div className="card p-8 text-center h-full hover:border-accent/50 transition-colors">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl text-accent mb-6">
                    {step.icon}
                  </div>
                  <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                    Step {step.number}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* WHAT Section - Products to Promote */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">What You'll Promote</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Three Products That{' '}
              <span className="gradient-text">Solve Real Problems</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              Each product addresses a critical challenge. Your content helps the right audience 
              discover solutions that can transform their business or career.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="card p-8 hover:border-accent/50 transition-colors"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${
                  product.color === 'accent' ? 'bg-accent/10' :
                  product.color === 'success' ? 'bg-success/10' :
                  'bg-info/10'
                }`}>
                  {product.icon}
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-2">{product.name}</h3>
                <p className={`text-sm font-medium mb-4 ${
                  product.color === 'accent' ? 'text-accent' :
                  product.color === 'success' ? 'text-success' :
                  'text-info'
                }`}>
                  {product.tagline}
                </p>
                
                <p className="text-muted text-sm mb-6 leading-relaxed">{product.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Price:</span>
                    <span className="font-semibold">{product.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Your Commission:</span>
                    <span className="font-semibold text-success">{product.commission}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Target:</span>
                    <span className="text-right">{product.target}</span>
                  </div>
                </div>

                <Link 
                  href={product.link}
                  className="text-accent hover:text-accent-light text-sm font-medium transition-colors"
                >
                  Learn more about this product →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Benefits</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Everything You Need to{' '}
              <span className="gradient-text">Succeed</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              We set you up for success with competitive commissions, professional resources, 
              and dedicated support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 hover:border-accent/50 transition-colors"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="font-display text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Who This Is For Section */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Ideal Partners</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Who We're{' '}
              <span className="gradient-text">Looking For</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              If you create content for business owners, entrepreneurs, educators, or tech enthusiasts, 
              you're a great fit for our program.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {idealAffiliates.map((affiliate, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 card hover:border-accent/50 transition-colors"
              >
                <div className="text-3xl flex-shrink-0">{affiliate.icon}</div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-2">{affiliate.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{affiliate.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Application Form + Book a Call Section */}
      <AnimatedSection id="apply" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Get Started</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Ready to{' '}
              <span className="gradient-text">Join Us?</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              Apply now to become an affiliate partner, or book a call to learn more about the program.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <h3 className="font-display text-2xl font-bold mb-6">Apply Now</h3>
              
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🎉</div>
                  <h4 className="font-display text-xl font-bold mb-2">Application Received!</h4>
                  <p className="text-muted">
                    Thank you for applying. We'll review your application and get back to you within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-light rounded-lg focus:border-accent focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-light rounded-lg focus:border-accent focus:outline-none transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="instagram" className="block text-sm font-medium mb-2">
                        Instagram
                      </label>
                      <input
                        type="text"
                        id="instagram"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-light rounded-lg focus:border-accent focus:outline-none transition-colors"
                        placeholder="@username"
                      />
                    </div>
                    <div>
                      <label htmlFor="tiktok" className="block text-sm font-medium mb-2">
                        TikTok
                      </label>
                      <input
                        type="text"
                        id="tiktok"
                        name="tiktok"
                        value={formData.tiktok}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-light rounded-lg focus:border-accent focus:outline-none transition-colors"
                        placeholder="@username"
                      />
                    </div>
                    <div>
                      <label htmlFor="youtube" className="block text-sm font-medium mb-2">
                        YouTube
                      </label>
                      <input
                        type="text"
                        id="youtube"
                        name="youtube"
                        value={formData.youtube}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-light rounded-lg focus:border-accent focus:outline-none transition-colors"
                        placeholder="Channel URL"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="audienceSize" className="block text-sm font-medium mb-2">
                      Total Audience Size *
                    </label>
                    <select
                      id="audienceSize"
                      name="audienceSize"
                      required
                      value={formData.audienceSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-light rounded-lg focus:border-accent focus:outline-none transition-colors"
                    >
                      <option value="">Select your audience size</option>
                      <option value="1-5k">1,000 - 5,000</option>
                      <option value="5-10k">5,000 - 10,000</option>
                      <option value="10-50k">10,000 - 50,000</option>
                      <option value="50-100k">50,000 - 100,000</option>
                      <option value="100k+">100,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Why are you interested in partnering with us?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-light rounded-lg focus:border-accent focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your content and audience..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary py-4 text-lg"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </motion.div>

            {/* Book a Call */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8 flex flex-col"
            >
              <h3 className="font-display text-2xl font-bold mb-6">Prefer to Talk?</h3>
              
              <p className="text-muted mb-8 leading-relaxed">
                Not sure if the affiliate program is right for you? Book a quick call with our 
                team to learn more about the products, commission structure, and how we can 
                support your content creation.
              </p>

              <div className="space-y-4 mb-8 flex-grow">
                {[
                  'Learn about our products in detail',
                  'Understand the commission structure',
                  'Get answers to your specific questions',
                  'Discuss content ideas and strategies',
                  'Explore custom partnership opportunities'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    <span className="text-muted">{item}</span>
                  </div>
                ))}
              </div>

              <a
                {...getBookingLinkProps()}
                className="btn-primary w-full py-4 text-lg text-center"
              >
                {ctaConfig.buttonText.bookStrategy}
              </a>

              <p className="text-center text-muted text-sm mt-4">
                30-minute call • No obligation
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Common{' '}
              <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-display font-bold pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === i ? 'auto' : 0,
                    opacity: openFaq === i ? 1 : 0
                  }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-muted leading-relaxed">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="card p-12 md:p-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Start Earning <span className="gradient-text">Today</span>
            </h2>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
              Join our affiliate program and help businesses and students access the technology 
              they need to thrive — while earning competitive commissions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#apply"
                className="btn-primary text-lg px-8 py-4"
              >
                Apply Now
              </a>
              <a
                {...getBookingLinkProps()}
                className="btn-secondary text-lg px-8 py-4"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  )
}
