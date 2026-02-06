'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import ScrollIndicator from '../components/ScrollIndicator'
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

const team = [
  {
    name: 'Pascal Digny',
    role: 'Founder & CEO',
    bio: 'Full-stack developer and business strategist with 7+ years of experience building growth infrastructures for businesses across Africa and beyond.',
    expertise: ['Full-Stack Development', 'Business Strategy', 'Growth Hacking', 'Team Leadership'],
    image: '/team/pascal.jpg' // Placeholder
  },
  {
    name: 'Technical Team',
    role: 'Development Specialists',
    bio: 'Our network of expert developers, designers, and digital marketers who bring diverse skills and perspectives to every project.',
    expertise: ['Frontend Development', 'Backend Development', 'UI/UX Design', 'Digital Marketing'],
    image: '/team/team.jpg' // Placeholder
  }
]

const values = [
  {
    title: 'Growth-Focused',
    description: 'Every solution we build is designed to drive measurable business growth and ROI.',
    icon: '📈'
  },
  {
    title: 'Quality First',
    description: 'We never compromise on quality. Every project meets our high standards before delivery.',
    icon: '⭐'
  },
  {
    title: 'Client Partnership',
    description: 'We work as an extension of your team, not just another vendor.',
    icon: '🤝'
  },
  {
    title: 'Innovation',
    description: 'We stay ahead of technology trends to give our clients competitive advantages.',
    icon: '🚀'
  }
]

const timeline = [
  {
    year: '2019',
    title: 'Founded Digni Digital',
    description: 'Started with a mission to help African businesses leverage technology for growth.'
  },
  {
    year: '2020',
    title: 'First 10 Clients',
    description: 'Successfully delivered websites and digital solutions for local businesses.'
  },
  {
    year: '2021',
    title: 'Expanded Services',
    description: 'Added mobile app development and digital marketing to our service portfolio.'
  },
  {
    year: '2022',
    title: 'International Growth',
    description: 'Began serving clients across multiple countries and continents.'
  },
  {
    year: '2023',
    title: 'SaaS Products',
    description: 'Launched our first SaaS product and began building our product suite.'
  },
  {
    year: '2024',
    title: 'Growth Infrastructure',
    description: 'Evolved into a full growth infrastructure agency with proven methodologies.'
  },
  {
    year: '2025',
    title: 'AI Integration',
    description: 'Integrated AI-powered solutions into our service offerings and launched ProposalAgent.'
  },
  {
    year: '2026',
    title: 'Market Leadership',
    description: 'Established as a leading growth infrastructure agency with 150+ successful transformations.'
  }
]

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 px-2">
              <span className="gradient-text">About Us</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed px-2">
              We democratize access to opportunity through technology that serves humanity first. Founded in 2019, we help small businesses capture every lead and ensure students graduate with job-ready skills.
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
                  Digni Digital was born from a simple observation: too many businesses were struggling with disconnected tools, manual processes, and missed opportunities. We saw talented entrepreneurs held back by technology barriers rather than empowered by them.
                </p>
                <p>
                  Founded in 2019, we started with a mission to democratize access to high-quality digital solutions. What began as a small web development service has evolved into a comprehensive growth infrastructure agency over the past 8 years.
                </p>
                <p>
                  Today, we don't just build websites or apps – we architect complete growth systems that turn chaos into clients. Our approach combines strategic thinking, technical excellence, AI-powered solutions, and deep understanding of business growth.
                </p>
                <p>
                  Our latest innovations include AI-integrated solutions and advanced automation platforms.
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
              <h3 className="font-display text-2xl font-bold mb-4">Deep Discovery</h3>
              <p className="text-muted leading-relaxed mb-4">
                We don't start with solutions. We start by understanding your business, your customers, and your unique challenges. Every project begins with comprehensive discovery.
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
              <h3 className="font-display text-2xl font-bold mb-4">Strategic Implementation</h3>
              <p className="text-muted leading-relaxed mb-4">
                We build solutions that integrate seamlessly with your existing operations while positioning you for future growth. No disruption, just enhancement.
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
              <h3 className="font-display text-2xl font-bold mb-4">Continuous Optimization</h3>
              <p className="text-muted leading-relaxed mb-4">
                Launch is just the beginning. We monitor, analyze, and continuously optimize your systems to ensure maximum ROI and sustained growth.
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

      {/* Our Values */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Our Values
            </h2>
            <p className="text-muted text-lg">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-8 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-display text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* What Makes Us Different */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              What Makes Us Different
            </h2>
            <p className="text-muted text-lg">Why businesses choose Digni Digital</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">01</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-3">Human First Technology</h3>
                  <p className="text-muted leading-relaxed">
                    We don't replace humans with technology – we amplify human potential. Our AI solutions work alongside your team, not instead of them.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">02</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-3">Proven Track Record</h3>
                  <p className="text-muted leading-relaxed">
                    8+ years in business, 150+ successful transformations, 98% client satisfaction rate. Our results speak for themselves.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">03</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-3">End-to-End Partnership</h3>
                  <p className="text-muted leading-relaxed">
                    From strategy to implementation to ongoing optimization – we're with you every step of the way. No handoffs, no gaps.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">04</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-3">ROI-Focused Solutions</h3>
                  <p className="text-muted leading-relaxed">
                    Every solution we build is designed to deliver measurable business value. We track results, not just features.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-8 bg-gradient-to-br from-accent/5 to-success/5">
              <h3 className="font-display text-2xl font-bold mb-6">Our Promise</h3>
              <blockquote className="text-lg italic text-muted leading-relaxed mb-6">
                "We don't just deliver projects – we deliver transformation. Every business we work with should be measurably better after our partnership than before."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="font-display font-bold text-accent">PD</span>
                </div>
                <div>
                  <div className="font-semibold">Pascal Digny</div>
                  <div className="text-sm text-muted">Founder & CEO</div>
                </div>
              </div>
            </div>
          </div>
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
                Never miss another lead with our 24/7 AI-powered employee that handles calls, qualifies prospects, and books appointments automatically.
              </p>
              <Link href="/ai-receptionist" className="text-accent hover:text-accent-light font-medium text-sm">
                Learn More →
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
                Future Ready Graduate
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Transform your educational institution with our comprehensive program that guarantees students graduate with job ready digital skills.
              </p>
              <Link href="/future-ready-graduate" className="text-success hover:text-success-light font-medium text-sm">
                Learn More →
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
                Custom SaaS
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Build custom software solutions tailored to your unique business challenges, from concept to deployment with ongoing optimization.
              </p>
              <Link href="/custom-saas" className="text-info hover:text-info-light font-medium text-sm">
                Learn More →
              </Link>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="text-muted text-lg">The people behind the growth</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="card p-8"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-2xl font-bold text-accent">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-accent font-medium mb-4">{member.role}</p>
                    <p className="text-muted text-sm mb-6 leading-relaxed">{member.bio}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, j) => (
                          <span
                            key={j}
                            className="px-3 py-1 bg-surface-light rounded-full text-xs text-muted-dark"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
            Let's discuss how we can help transform your business with the right growth infrastructure.
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