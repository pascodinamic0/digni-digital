'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import AnimatedSection from './components/AnimatedSection'
import FloatingShapes from './components/FloatingShapes'

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-mesh">
      <FloatingShapes />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium">
            Growth Infrastructure Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 max-w-4xl"
        >
          We Build Growth Infrastructures That{' '}
          <span className="gradient-text">Turn Chaos Into Clients.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-muted max-w-2xl mb-10 leading-relaxed"
        >
          Strategic systems, intelligent automation, and purpose-built products
          that help ambitious businesses scale without the chaos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <a
            href="https://calendly.com/pascal-digny/consultation-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Consultation
          </a>
          <Link href="/products" className="btn-secondary">
            Explore Our Products
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap gap-8"
        >
          {[
            { value: '50+', label: 'Businesses Transformed' },
            { value: 'Since 2019', label: '' },
            { value: 'Africa & Beyond', label: '' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-white font-semibold">{stat.value}</span>
              {stat.label && <span className="text-muted">{stat.label}</span>}
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  )
}

// Problems Section
function Problems() {
  const problems = [
    {
      title: 'Leads leak due to disconnected tools',
      description: "Your CRM, website, and sales process don't talk to each other. Prospects fall through the cracks.",
    },
    {
      title: 'Slow, manual processes stall growth',
      description: 'Time wasted on repetitive tasks means missed opportunities and frustrated teams.',
    },
    {
      title: 'Poor customer journeys cause churn',
      description: 'Confusing touchpoints and inconsistent messaging drive potential clients away.',
    },
    {
      title: 'No visibility: decisions without data',
      description: "Flying blind without proper analytics means you can't optimize what you can't measure.",
    },
  ]

  return (
    <AnimatedSection className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">The Problems We Solve</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Every day you delay fixing these issues,<br />
            <span className="text-muted">you&apos;re leaving money on the table</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-8 group"
            >
              <div className="flex gap-4">
                <div className="w-1 h-full bg-accent/30 group-hover:bg-accent transition-colors rounded-full" />
                <div>
                  <h3 className="font-display text-xl font-semibold mb-3">{problem.title}</h3>
                  <p className="text-muted leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

// Services Section
function Services() {
  const services = [
    {
      title: 'Website Development',
      desc: 'Custom, high-performance websites that convert visitors into customers. From landing pages to complex web applications.',
      tags: ['Responsive Design', 'SEO Optimized', 'Fast Loading'],
    },
    {
      title: 'Mobile Applications',
      desc: 'Native and cross-platform mobile apps for iOS and Android. Beautiful, functional, and built for scale.',
      tags: ['iOS', 'Android', 'Cross-Platform'],
    },
    {
      title: 'Custom SaaS Development',
      desc: 'We build software products from scratch. Turn your idea into a fully functional SaaS platform.',
      tags: ['Full-Stack', 'Scalable', 'Cloud-Native'],
    },
    {
      title: 'SEO & Search Marketing',
      desc: 'Dominate search rankings and drive organic traffic. Technical SEO, content strategy, and link building.',
      tags: ['Technical SEO', 'Content', 'Analytics'],
    },
    {
      title: 'Social Media Marketing',
      desc: 'Strategic social media management that builds brand awareness and drives engagement across all platforms.',
      tags: ['Strategy', 'Content Creation', 'Paid Ads'],
    },
    {
      title: 'Development Courses',
      desc: 'Learn to build with our expert-led courses. From coding basics to advanced software architecture.',
      tags: ['Self-Paced', 'Mentorship', 'Certification'],
    },
  ]

  return (
    <AnimatedSection id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Full-Stack Digital Services<br />
            <span className="gradient-text">For Modern Businesses</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            From websites to mobile apps, SEO to custom software — we deliver complete digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-8 group hover:border-accent/50"
            >
              <h3 className="font-display text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted text-sm mb-6 leading-relaxed">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 bg-surface-light rounded-full text-xs text-muted-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-secondary mr-4">View All Services</Link>
          <a
            href="https://calendly.com/pascal-digny/consultation-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </AnimatedSection>
  )
}

// Solutions Section
function Solutions() {
  const solutions = [
    {
      title: 'Lead Generation & Growth',
      problem: 'Struggling to attract quality leads consistently?',
      solution: 'We build comprehensive lead generation engines: optimized websites, conversion funnels, targeted advertising, and SEO strategies.',
      impact: 'Predictable pipeline of qualified prospects flowing into your business every month.',
    },
    {
      title: 'Operational Efficiency',
      problem: "Manual processes eating up your team's time?",
      solution: 'Custom CRM systems, automated workflows, seamless integrations, and real-time analytics dashboards.',
      impact: '10x productivity increase and error-free operations that scale with your growth.',
    },
    {
      title: 'Customer Experience Transformation',
      problem: 'Losing clients due to poor experience?',
      solution: 'End-to-end customer journey mapping, personalized messaging systems, and retention automation.',
      impact: 'Higher customer satisfaction, increased lifetime value, and powerful referral engines.',
    },
  ]

  return (
    <AnimatedSection id="solutions" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Solutions</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            We don&apos;t just fix problems.<br />
            <span className="gradient-text">We build growth engines.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="animated-border p-8 h-full flex flex-col"
            >
              <h3 className="font-display text-2xl font-bold mb-6 text-accent">{sol.title}</h3>

              <div className="space-y-6 flex-1">
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-dark">Problem</span>
                  <p className="text-muted mt-1">{sol.problem}</p>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-dark">Solution</span>
                  <p className="text-white mt-1">{sol.solution}</p>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-dark">Impact</span>
                  <p className="text-success mt-1">{sol.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <Link href="/solutions" className="btn-secondary">Explore Our Solutions</Link>
          <a
            href="https://calendly.com/pascal-digny/consultation-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Strategy Session
          </a>
        </div>
      </div>
    </AnimatedSection>
  )
}

// Products Section
function Products() {
  const comingSoon = [
    { initial: 'C', name: 'CRM Lite', desc: 'Simple, powerful customer relationship management.' },
    { initial: 'I', name: 'Invoice AI', desc: 'Automated invoicing and payment tracking.' },
    { initial: 'S', name: 'Social Assistant', desc: 'AI-powered social media management.' },
  ]

  return (
    <AnimatedSection id="products" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4">
            We don&apos;t just consult. We build SaaS.
          </h2>
          <p className="text-muted text-lg">Powerful, affordable tools for every stage of growth.</p>
        </div>

        {/* Featured Product */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-8 md:p-12 mb-8 glow-accent-hover"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-success/20 text-success text-xs font-bold rounded-full">NEW</span>
                <h3 className="font-display text-3xl font-bold">ProposalAgent</h3>
              </div>
              <p className="text-2xl text-accent font-medium mb-4">Speak. We structure. You send.</p>
              <p className="text-muted text-lg mb-6">
                Turn voice notes into client-ready proposals with AI-powered structuring.
                Proposals in minutes, not hours.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 bg-surface-light rounded-lg text-sm font-medium">10x Faster</span>
                <span className="px-4 py-2 bg-surface-light rounded-lg text-sm font-medium">AI-Powered</span>
                <span className="px-4 py-2 bg-surface-light rounded-lg text-sm font-medium">Brand Ready</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="btn-primary">Try Free</a>
                <Link href="/products" className="btn-secondary">Learn More</Link>
              </div>
            </div>
            <div className="w-full lg:w-96 h-64 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="font-display text-4xl font-bold text-accent">P</span>
                </div>
                <span className="text-muted">ProposalAgent Preview</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coming Soon Products */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {comingSoon.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card p-6 opacity-60"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-surface-light rounded-lg flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-muted">{product.initial}</span>
                </div>
                <div>
                  <h4 className="font-display font-semibold">{product.name}</h4>
                  <span className="text-xs text-muted-dark uppercase">Coming Soon</span>
                </div>
              </div>
              <p className="text-muted text-sm">{product.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/products" className="text-accent hover:text-accent-light transition-colors font-medium">
            View all products
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-muted italic">
            &quot;Even if you can&apos;t hire us directly, you can still grow with our tools.&quot;
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

// Animated Counter Component
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

// Stats Section
function Stats() {
  const stats = [
    { value: 7, suffix: '+', label: 'Years Experience' },
    { value: 100, suffix: '+', label: 'Businesses Transformed' },
    { value: 95, suffix: '%', label: 'Client Satisfaction' },
    { value: 12, suffix: '+', label: 'Countries Served' },
  ]

  return (
    <AnimatedSection id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Proven Track Record</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Numbers that demonstrate our<br />
            <span className="gradient-text">commitment to client success</span>
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

        <div className="text-center mt-12">
          <Link href="/about" className="btn-secondary">Learn More About Us</Link>
        </div>
      </div>
    </AnimatedSection>
  )
}

// Case Studies Section
function CaseStudies() {
  const [expanded, setExpanded] = useState<number | null>(null)

  const studies = [
    {
      industry: 'Healthcare',
      title: 'Healthcare Clinic',
      duration: '6 weeks',
      problem: 'Manual appointment booking leading to 40% no-shows and lost revenue',
      results: [
        { value: '85%', label: 'Reduction in no-shows' },
        { value: '3x', label: 'Faster proposal creation' },
        { value: '$50k', label: 'Additional monthly revenue' },
      ],
    },
    {
      industry: 'Real Estate',
      title: 'Real Estate Agency',
      duration: '4 weeks',
      problem: 'Agents spending 5+ hours per property proposal, losing deals to faster competitors',
      results: [
        { value: '90%', label: 'Faster proposal delivery' },
        { value: '40%', label: 'Higher close rate' },
        { value: '25', label: 'More deals per month' },
      ],
    },
    {
      industry: 'Marketing',
      title: 'Digital Agency',
      duration: '3 weeks',
      problem: 'Inconsistent proposal quality and pricing leading to 60% rejection rate',
      results: [
        { value: '75%', label: 'Increase in acceptance rate' },
        { value: '60%', label: 'Time saved on proposals' },
        { value: '$100k', label: 'Annual revenue increase' },
      ],
    },
  ]

  return (
    <AnimatedSection id="case-studies" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Case Studies</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4">
            Proof that transformation works.
          </h2>
          <p className="text-muted text-lg">Real businesses, real results, real growth.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {studies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card p-8 cursor-pointer group"
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                  {study.industry}
                </span>
                <span className="text-muted text-sm">{study.duration}</span>
              </div>

              <h3 className="font-display text-xl font-bold mb-4">{study.title}</h3>

              <p className="text-muted text-sm mb-6">{study.problem}</p>

              <motion.div
                initial={false}
                animate={{ height: expanded === i ? 'auto' : 0, opacity: expanded === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="space-y-4 pt-4 border-t border-white/10">
                  {study.results.map((result, j) => (
                    <div key={j} className="flex justify-between items-center">
                      <span className="text-muted text-sm">{result.label}</span>
                      <span className="font-display text-xl font-bold text-success">{result.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="mt-4 text-accent text-sm font-medium group-hover:text-accent-light transition-colors">
                {expanded === i ? 'Click to collapse' : 'Click to expand'}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/case-studies" className="btn-secondary">View All Case Studies</Link>
        </div>
      </div>
    </AnimatedSection>
  )
}

// CTA Section - Book Consultation
function CTASection() {
  return (
    <AnimatedSection className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Decorative border frame */}
          <div className="absolute -inset-px bg-gradient-to-br from-accent/40 via-accent/10 to-accent/40 rounded-3xl" />

          <div className="relative bg-surface rounded-3xl p-12 md:p-16 lg:p-20">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-accent/50 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-accent/50 rounded-br-3xl" />

            <div className="text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block px-5 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium tracking-wide mb-8"
              >
                Start Your Transformation
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Ready to Scale<br />
                <span className="gradient-text">Without the Chaos?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
              >
                Book a free consultation call. We&apos;ll analyze your current systems,
                identify growth blockers, and map out a custom strategy for your business.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
              >
                <a
                  href="https://calendly.com/pascal-digny/consultation-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 bg-accent hover:bg-accent-light text-background font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(212,168,83,0.4)]"
                >
                  <span className="text-lg">Book Your Free Consultation</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center gap-8 text-sm text-muted"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span>30-min Strategy Call</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span>No Obligation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full" />
                  <span>Actionable Insights</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}


// Main Page Component
export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Problems />
      <Services />
      <Solutions />
      <Products />
      <Stats />
      <CaseStudies />
      <CTASection />
      <Footer />
    </main>
  )
}
