'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import AnimatedSection from '@/app/components/AnimatedSection'
import ScrollIndicator from '@/app/components/ScrollIndicator'
import { ctaConfig, getBookingLinkProps } from '@/app/config/cta.config'

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

const stats = [
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Students Trained' },
  { value: 10, suffix: 'k+', label: 'Leads Captured' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
]

const timeline = [
  { year: '2019', title: 'Founded', description: 'Started helping African businesses grow with tech.' },
  { year: '2020', title: 'First Clients', description: 'Websites and digital solutions delivered.' },
  { year: '2021', title: 'Expanded', description: 'Added apps and marketing.' },
  { year: '2022', title: 'International', description: 'Clients across continents.' },
  { year: '2023', title: 'SaaS', description: 'First product launched.' },
  { year: '2024', title: 'Growth Systems', description: 'Full infrastructure agency.' },
  { year: '2025', title: 'AI', description: 'AI solutions. ProposalAgent.' },
  { year: '2026', title: '150+ Clients', description: 'Market leader.' }
]

export default function AboutPage() {
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
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              About Us
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 px-2">
              <span className="gradient-text">About Us</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed px-2">
              An American company started in Kenya by a refugee youth—driven by hunger and greatness to build a world where everyone is enabled, empowered, and connected to the technology and skills that change lives.
            </p>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ScrollIndicator direction="down" />
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-50" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
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
        </div>
      </AnimatedSection>

      {/* Our Story */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-muted leading-relaxed">
                <p>
                  We are an American-registered company that started in Kenya—founded by a refugee youth who refused to accept the rules and limitations set upon him. Driven by hunger and greatness, he chose to fail forward: to keep pushing, dreaming, and building toward a better world.
                </p>
                <p>
                  That dream is simple and urgent: <strong className="text-foreground">everyone enabled, empowered, and connected</strong> to the same technology and skills that have long been reserved for elites and elite kids. Businesses shouldn’t lose leads because they can’t afford big systems. Students shouldn’t graduate without the skills employers hire for. We build the fixes—AI that captures every lead, curricula that make graduates job-ready, and agentic software that perceives, reasons, and acts—scaling with you.
                </p>
                <p>
                  Founded 2019. Started with websites. Now: AI systems, graduate programs, Agentic Softwares. We don’t just build websites—we build systems that get you clients and students jobs.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-accent">{item.year}</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold mb-2">{item.title}</h4>
                    <p className="text-muted text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Approach */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Our Approach
            </h2>
            <p className="text-muted text-lg">How we deliver transformational results</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-3xl mb-6">
                🔍
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Discovery</h3>
              <p className="text-muted leading-relaxed mb-4">
                We learn your business first. Then we build.
              </p>
              <ul className="text-sm text-muted space-y-2">
                <li>• Business process analysis</li>
                <li>• Customer journey mapping</li>
                <li>• Technology audit</li>
                <li>• Growth bottleneck identification</li>
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
              <h3 className="font-display text-2xl font-bold mb-4">Build</h3>
              <p className="text-muted leading-relaxed mb-4">
                We fit into what you have. No disruption. Just upgrade.
              </p>
              <ul className="text-sm text-muted space-y-2">
                <li>• Phased rollout approach</li>
                <li>• Team training & support</li>
                <li>• Integration with existing systems</li>
                <li>• Minimal business disruption</li>
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
              <h3 className="font-display text-2xl font-bold mb-4">Optimize</h3>
              <p className="text-muted leading-relaxed mb-4">
                We keep improving. Launch is day one. We make it better.
              </p>
              <ul className="text-sm text-muted space-y-2">
                <li>• Performance monitoring</li>
                <li>• Data-driven improvements</li>
                <li>• Regular strategy reviews</li>
                <li>• Ongoing technical support</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* What Makes Us Different */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              What Makes Us Different
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Why businesses and schools choose Digni Digital
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {[
              { num: '01', title: 'Human First', desc: 'AI helps your team. Doesn\'t replace them.' },
              { num: '02', title: 'Proven', desc: '8 years. 150+ clients. 98% satisfaction.' },
              { num: '03', title: 'Full Partnership', desc: 'Strategy. Build. Optimize. We\'re there. No handoffs.' },
              { num: '04', title: 'ROI Focus', desc: 'We track revenue. Leads. Jobs. Not just features.' },
            ].map((item, i) => (
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
            <h3 className="font-display text-xl md:text-2xl font-bold mb-4 text-text">Our Promise</h3>
            <blockquote className="text-muted text-base md:text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
              &ldquo;A better world is one where everyone is enabled, empowered, and connected—to the same technology and skills that elites get. You&apos;ll have more leads, more revenue, or more employed grads. Or we failed.&rdquo;
            </blockquote>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="relative w-24 h-24 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-accent/20">
                <Image
                  src="/images/pascal-digny-headshot.png"
                  alt="Pascal Digny - Founder & CEO"
                  fill
                  className="object-cover object-center"
                  sizes="96px"
                  priority
                />
              </div>
              <div className="text-center">
                <div className="font-semibold text-text">Pascal Digny</div>
                <div className="text-sm text-muted">Founder & CEO</div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Our Services Overview */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h2>
            <p className="text-muted text-lg">Three core solutions that drive real business impact</p>
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
                AI Employee
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                AI answers calls. Qualifies. Books. 24/7.
              </p>
              <Link href="/ai-receptionist" className="text-accent hover:text-accent-light font-medium text-sm">
                See How It Captures Leads →
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
                Digni Digital Literacy Program
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                85% employed. We bring curriculum and internet. You bring students.
              </p>
              <Link href="/future-ready-graduate" className="text-success hover:text-success-light font-medium text-sm">
                Explore the Curriculum →
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
                Agentic Softwares
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                AI-native software that perceives, reasons, and acts autonomously.
              </p>
              <Link href="/agentic-softwares" className="text-info hover:text-info-light font-medium text-sm">
                See What We Build →
              </Link>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Work Together?
          </h2>
            <p className="text-muted text-lg mb-8">
              Tell us your problem. We'll find the fix.
            </p>
          <a
            {...getBookingLinkProps()}
            className="btn-primary text-lg px-8 py-4"
          >
            {ctaConfig.buttonText.bookConsultation}
          </a>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  )
}