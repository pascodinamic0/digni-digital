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
            Digital Transformation Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 max-w-4xl"
        >
          We Believe Technology Should{' '}
          <span className="gradient-text">Serve Humanity.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-muted max-w-3xl mb-10 leading-relaxed"
        >
          We build technology that amplifies human potential, creates opportunity where barriers exist, 
          and ensures that progress serves everyone — not just those who can afford it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <Link href="/about" className="btn-primary">
            Our Story
          </Link>
          <Link href="#what-we-do" className="btn-secondary">
            What We Do
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap gap-8"
        >
          {[
            { value: '150+', label: 'Businesses Transformed' },
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

// Mission & Values Section
function MissionValues() {
  const mission = {
    title: "Our Mission",
    statement: "To democratize access to opportunity through technology that serves humanity first.",
    description: "We believe every business should capture every lead, every student should graduate job-ready, and every organization should have access to enterprise-level technology — regardless of size or budget."
  }

  const values = [
    {
      title: 'Human-First Technology',
      description: 'We build technology that amplifies human potential, not replaces it. Every solution we create makes people more effective, not obsolete.',
      icon: '🤝',
      principle: 'Technology should serve people, not the other way around.'
    },
    {
      title: 'Opportunity Equality',
      description: 'Small businesses deserve the same advantages as Fortune 500 companies. Students from any background deserve job-ready skills.',
      icon: '⚖️',
      principle: 'Access to opportunity should not depend on privilege or resources.'
    },
    {
      title: 'Immediate Impact',
      description: 'We measure success by real-world outcomes: leads captured, students employed, businesses transformed. Results matter more than features.',
      icon: '⚡',
      principle: 'Every solution must deliver measurable value from day one.'
    },
    {
      title: 'Sustainable Growth',
      description: 'We build systems that grow with you, not solutions that become obsolete. Long-term partnerships over short-term profits.',
      icon: '🌱',
      principle: 'True success is measured in decades, not quarters.'
    }
  ]

  return (
    <AnimatedSection id="our-mission" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">{mission.title}</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-8 max-w-4xl mx-auto">
            {mission.statement}
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            {mission.description}
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Values</span>
          <h3 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
            What We <span className="gradient-text">Stand For</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card p-8 group hover:border-accent/50"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                  {value.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-muted mb-4 leading-relaxed">
                    {value.description}
                  </p>
                  <blockquote className="text-accent italic text-sm font-medium border-l-2 border-accent/30 pl-4">
                    "{value.principle}"
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

// What We're Fighting For Section
function WhatWereFightingFor() {
  const challenges = [
    {
      title: 'The Missed Opportunity Crisis',
      problem: 'Small businesses lose $62 billion annually to missed leads',
      reality: 'Every missed call is someone choosing your competitor. Every delayed response is lost revenue. Every manual process is a bottleneck that costs you customers.',
      ourFight: 'We fight for a world where no business loses customers due to technological limitations.',
      icon: '📞',
      stat: '$62B',
      statLabel: 'Lost annually to missed leads'
    },
    {
      title: 'The Skills Gap Emergency',
      problem: '40% of graduates are unemployed 6 months after graduation',
      reality: 'Students spend years learning theory but graduate without practical, income-generating skills. The education system is failing to prepare them for the digital economy.',
      ourFight: 'We fight for a world where every graduate has the skills employers actually need.',
      icon: '🎓',
      stat: '40%',
      statLabel: 'Graduate unemployment rate'
    },
    {
      title: 'The Digital Divide',
      problem: 'Enterprise technology is locked behind million-dollar budgets',
      reality: 'Small businesses and schools can\'t access the same tools that Fortune 500 companies use. This creates an unfair competitive advantage based on budget, not merit.',
      ourFight: 'We fight for technological equality — where your impact matters more than your budget.',
      icon: '⚖️',
      stat: '10:1',
      statLabel: 'Enterprise vs SMB tech advantage'
    }
  ]

  return (
    <AnimatedSection id="what-were-fighting-for" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">What We're Fighting For</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            These Problems Keep Us<br />
            <span className="gradient-text">Up At Night</span>
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            We didn't start this company to build another tech startup. We started it to solve problems that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card p-8 hover:border-red-500/50 group relative overflow-hidden"
            >
              {/* Gradient background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl" />
              
              <div className="relative">
                {/* Stat - Prominent and Bold */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-display text-5xl md:text-6xl font-bold text-red-400 leading-none">
                      {challenge.stat}
                    </span>
                  </div>
                  <p className="text-red-400/80 text-sm font-medium uppercase tracking-wider">
                    {challenge.statLabel}
                  </p>
                </div>

                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {challenge.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {challenge.title}
                  </h3>
                </div>

                {/* Problem */}
                <div className="mb-4 pb-4 border-b border-white/10">
                  <span className="text-xs uppercase tracking-wider text-muted-dark block mb-2">
                    The Problem
                  </span>
                  <p className="text-red-400 font-semibold text-sm leading-relaxed">
                    {challenge.problem}
                  </p>
                </div>

                {/* Reality */}
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-wider text-muted-dark block mb-2">
                    The Reality
                  </span>
                  <p className="text-muted text-sm leading-relaxed">
                    {challenge.reality}
                  </p>
                </div>

                {/* Our Fight */}
                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs uppercase tracking-wider text-accent block mb-2">
                    Our Fight
                  </span>
                  <p className="text-accent font-medium text-sm leading-relaxed">
                    {challenge.ourFight}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card p-12 bg-gradient-to-br from-accent/5 to-success/5">
            <h3 className="font-display text-3xl font-bold mb-4">
              This Is Why We Exist
            </h3>
            <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
              We don&apos;t just build technology. We solve problems that cost businesses revenue and prevent students from getting jobs. 
              Every solution delivers measurable results — captured leads, employed graduates, transformed businesses.
            </p>
            <Link href="#what-we-do" className="btn-primary text-lg px-8 py-4">
              View Our Solutions
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

// What We Do Section
function WhatWeDo() {
  const services = [
    {
      title: 'AI Receptionist Systems',
      subtitle: 'For Growing Businesses',
      description: 'Deploy intelligent reception systems that capture every lead, qualify prospects, and book appointments 24/7 — so you never miss another opportunity.',
      approach: 'We don\'t just install software. We study your business, understand your customers, and build AI that represents your brand perfectly.',
      outcomes: ['300% increase in lead capture', '24/7 customer service', 'Zero missed opportunities', 'Seamless CRM integration'],
      icon: '🤖',
      link: '/ai-receptionist',
      color: 'accent',
      primaryCta: 'See How It Works',
      secondaryCta: 'Book a Demo'
    },
    {
      title: 'Future-Ready Graduate Programs',
      subtitle: 'For Educational Institutions',
      description: 'Transform your curriculum with practical digital skills training that guarantees your students graduate job-ready with real income potential.',
      approach: 'We partner with schools to redesign education around employability, connecting students directly with hiring partners.',
      outcomes: ['85% graduate employment rate', 'Direct employer partnerships', 'Real-world skill development', 'Measurable ROI tracking'],
      icon: '🎓',
      link: '/future-ready-graduate',
      color: 'success',
      primaryCta: 'View Program Details',
      secondaryCta: 'Schedule Consultation'
    },
    {
      title: 'Custom SaaS Development',
      subtitle: 'For Unique Challenges',
      description: 'Build custom software solutions that solve your specific problems — from concept to deployment, with ongoing support and optimization.',
      approach: 'We become your technical co-founders, understanding your vision and building technology that grows with your business.',
      outcomes: ['Scalable architecture', 'Enterprise-grade security', 'Ongoing optimization', 'Full ownership of code'],
      icon: '⚙️',
      link: '/custom-saas',
      color: 'blue-400',
      primaryCta: 'Explore Process',
      secondaryCta: 'Discuss Your Project'
    }
  ]

  return (
    <AnimatedSection id="what-we-do" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Three Ways We<br />
            <span className="gradient-text">Fight Back</span>
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            Every service we offer directly addresses one of the critical problems we're fighting. 
            This isn't about technology for technology's sake — it's about impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card p-8 hover:border-accent/50 group flex flex-col"
            >
              {/* Header */}
              <div className="mb-6">
                <div className={`w-14 h-14 bg-${service.color}/10 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <span className={`text-${service.color} text-xs font-semibold uppercase tracking-wider`}>
                  {service.subtitle}
                </span>
                <h3 className="font-display text-2xl font-bold mt-2 mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Key Outcomes */}
              <div className="mb-6 space-y-2">
                {service.outcomes.slice(0, 3).map((outcome, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 bg-${service.color} rounded-full flex-shrink-0`} />
                    <span className="text-sm text-muted">{outcome}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 mt-auto">
                <Link 
                  href={service.link}
                  className="btn-primary text-center text-sm py-2.5"
                >
                  {service.primaryCta}
                </Link>
                <a
                  href="https://calendly.com/pascal-digny/consultation-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center text-sm py-2.5"
                >
                  {service.secondaryCta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="relative overflow-hidden">
            {/* Enhanced gradient background with glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-success/20 rounded-3xl blur-2xl opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-success/15 rounded-3xl" />
            
            {/* Decorative border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-accent/30" />
            
            <div className="relative card p-12 md:p-16 bg-gradient-to-br from-accent/10 via-surface to-success/10 border-2 border-accent/20">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-accent/40 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-success/40 rounded-br-3xl" />
              
              <div className="relative z-10">
                {/* Dynamic animated lightbulb */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="inline-block mb-6 relative"
                >
                  {/* Pulsing glow behind bulb */}
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute inset-0 bg-accent/30 rounded-2xl blur-xl"
                  />
                  
                  {/* Rotating glow ring */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className="absolute inset-0 border-2 border-accent/40 rounded-2xl"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                    }}
                  />
                  
                  {/* Main bulb container with flicker */}
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-accent/40"
                  >
                    {/* Lightbulb emoji with brightness animation */}
                    <motion.div
                      animate={{
                        filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="text-4xl md:text-5xl"
                    >
                      💡
                    </motion.div>
                    
                    {/* Sparkle particles */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-accent rounded-full"
                        animate={{
                          x: [
                            Math.cos((i * 60) * Math.PI / 180) * 0,
                            Math.cos((i * 60) * Math.PI / 180) * 30,
                            Math.cos((i * 60) * Math.PI / 180) * 0,
                          ],
                          y: [
                            Math.sin((i * 60) * Math.PI / 180) * 0,
                            Math.sin((i * 60) * Math.PI / 180) * 30,
                            Math.sin((i * 60) * Math.PI / 180) * 0,
                          ],
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: 'easeInOut',
                        }}
                        style={{
                          left: '50%',
                          top: '50%',
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
                
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
                  Not Sure Which Service You Need?
                </h3>
                <p className="text-lg md:text-xl text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
                  Let&apos;s discuss your challenges and find the right solution together.
                </p>
                <a
                  href="https://calendly.com/pascal-digny/consultation-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-accent hover:bg-accent-light text-background font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(212,168,83,0.4)] text-lg"
                >
                  <span>Book a Strategy Call</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

// Products Section
function Products() {
  const flagshipProducts = [
    {
      name: 'AI Receptionist™',
      tagline: 'Never miss a lead again',
      description: 'AI-powered reception system that handles calls, qualifies leads, and books appointments 24/7.',
      features: ['24/7 Call Handling', 'Lead Qualification', 'Appointment Booking', 'CRM Integration', 'Multi-language Support', 'Analytics Dashboard'],
      pricing: { starter: '$297/month', pro: '$497/month', enterprise: 'Custom' },
      icon: '🤖',
      gradient: 'from-accent/20 to-accent/5',
      status: 'LIVE'
    },
    {
      name: 'Future-Ready Graduate™',
      tagline: 'Students with real income skills',
      description: 'Complete employability program that transforms students into job-ready professionals.',
      features: ['Digital Skills Training', 'Portfolio Development', 'Job Placement Support', 'Income Tracking', 'Employer Network', 'Success Metrics'],
      pricing: { starter: '$1,997/student', pro: '$2,997/student', enterprise: 'Custom' },
      icon: '🎓',
      gradient: 'from-success/20 to-success/5',
      status: 'LIVE'
    }
  ]

  return (
    <AnimatedSection id="products" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4">
            Two Flagship Solutions.<br />
            <span className="gradient-text">Immediate Impact.</span>
          </h2>
          <p className="text-muted text-lg">Ready-to-deploy systems that solve critical business and education challenges.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {flagshipProducts.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="card p-8 md:p-12 glow-accent-hover"
            >
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-success/20 text-success text-xs font-bold rounded-full">{product.status}</span>
                </div>
                <div className={`w-20 h-20 bg-gradient-to-br ${product.gradient} rounded-2xl mx-auto mb-4 flex items-center justify-center text-4xl`}>
                  {product.icon}
                </div>
                <h3 className="font-display text-3xl font-bold mb-2">{product.name}</h3>
                <p className="text-xl text-accent font-medium mb-4">{product.tagline}</p>
              </div>

              <p className="text-muted text-lg mb-8 text-center leading-relaxed">
                {product.description}
              </p>

              <div className="grid grid-cols-2 gap-2 mb-8">
                {product.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    <span className="text-sm text-muted">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mb-8">
                <div className="text-2xl font-display font-bold text-accent mb-2">
                  Starting at {product.pricing.starter}
                </div>
                <div className="text-sm text-muted">
                  Pro: {product.pricing.pro} • Enterprise: {product.pricing.enterprise}
                </div>
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://calendly.com/pascal-digny/consultation-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 text-center"
                >
                  Get Started
                </a>
                <Link href="/products" className="btn-secondary flex-1 text-center">
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-muted italic mb-8">
            &quot;Two solutions. Unlimited possibilities. Immediate results.&quot;
          </p>
          <Link href="/products" className="text-accent hover:text-accent-light transition-colors font-medium">
            View detailed product information →
          </Link>
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
    { value: 300, suffix: '%', label: 'Lead Conversion Increase', sublabel: 'AI Receptionist™ Results' },
    { value: 85, suffix: '%', label: 'Graduate Employment Rate', sublabel: 'Future-Ready Graduate™ Success' },
    { value: 24, suffix: '/7', label: 'Always-On Service', sublabel: 'Never Miss Another Lead' },
    { value: 98, suffix: '%', label: 'Client Satisfaction', sublabel: 'Across Both Solutions' },
  ]

  return (
    <AnimatedSection id="proven-track-record" className="py-24 relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Proven Track Record</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Real Results from<br />
            <span className="gradient-text">Real Implementations</span>
          </h2>
          <p className="text-muted text-lg mt-4">
            Data-driven outcomes from our flagship solutions
          </p>
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
              <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white font-semibold mb-1">{stat.label}</p>
              <p className="text-muted text-sm">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-display font-bold mb-2">AI Receptionist™</h3>
              <p className="text-muted text-sm">Deployed across 50+ businesses, handling 10,000+ leads monthly</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card p-6"
            >
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-display font-bold mb-2">Future-Ready Graduate™</h3>
              <p className="text-muted text-sm">Training 500+ students annually with 85% job placement success</p>
            </motion.div>
          </div>
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
      solution: 'AI Receptionist™',
      industry: 'Healthcare',
      title: 'Regional Medical Center',
      duration: '2 weeks implementation',
      problem: 'Missing 40% of after-hours calls, losing $80k monthly in potential revenue',
      results: [
        { value: '100%', label: 'Call capture rate' },
        { value: '300%', label: 'Lead conversion increase' },
        { value: '$240k', label: 'Additional monthly revenue' },
      ],
      icon: '🤖',
      color: 'accent'
    },
    {
      solution: 'Future-Ready Graduate™',
      industry: 'Education',
      title: 'Technical University',
      duration: '6 months program',
      problem: 'Only 45% of graduates finding employment within 12 months of graduation',
      results: [
        { value: '85%', label: 'Graduate employment rate' },
        { value: '150%', label: 'Average salary increase' },
        { value: '95%', label: 'Employer satisfaction' },
      ],
      icon: '🎓',
      color: 'success'
    },
    {
      solution: 'AI Receptionist™',
      industry: 'Real Estate',
      title: 'Premium Property Group',
      duration: '1 week implementation',
      problem: 'Losing high-value leads during off-hours and weekends, inconsistent follow-up',
      results: [
        { value: '24/7', label: 'Lead response time' },
        { value: '250%', label: 'Qualified leads increase' },
        { value: '$180k', label: 'Additional quarterly sales' },
      ],
      icon: '🤖',
      color: 'accent'
    },
  ]

  return (
    <AnimatedSection id="case-studies" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Case Studies</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4">
            Real Implementations.<br />
            <span className="gradient-text">Real Results.</span>
          </h2>
          <p className="text-muted text-lg">See how our flagship solutions deliver immediate impact.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {studies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card p-8 cursor-pointer group hover:border-accent/50"
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 bg-${study.color}/10 rounded-lg flex items-center justify-center text-xl`}>
                  {study.icon}
                </div>
                <div>
                  <span className={`px-3 py-1 bg-${study.color}/10 text-${study.color} text-xs font-medium rounded-full whitespace-nowrap`}>
                    {study.solution}
                  </span>
                </div>
              </div>

              <span className="text-muted-dark text-xs uppercase tracking-wider">{study.industry}</span>
              <h3 className="font-display text-xl font-bold mb-4">{study.title}</h3>

              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider text-muted-dark">Challenge</span>
                <p className="text-muted text-sm mt-1">{study.problem}</p>
              </div>

              <motion.div
                initial={false}
                animate={{ height: expanded === i ? 'auto' : 0, opacity: expanded === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <span className="text-xs uppercase tracking-wider text-muted-dark">Results</span>
                  {study.results.map((result, j) => (
                    <div key={j} className="flex justify-between items-center">
                      <span className="text-muted text-sm">{result.label}</span>
                      <span className={`font-display text-xl font-bold text-${study.color}`}>{result.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className={`mt-4 text-${study.color} text-sm font-medium group-hover:text-${study.color}-light transition-colors`}>
                {expanded === i ? 'Click to collapse' : 'Click to expand'}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/case-studies" className="btn-secondary">View All Case Studies</Link>
            <a
              href="https://calendly.com/pascal-digny/consultation-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Similar Results
            </a>
          </div>
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
                Let&apos;s Create Impact Together
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                Technology Should Serve<br />
                <span className="gradient-text">Everyone.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
              >
                Join us in building technology that amplifies human potential and creates opportunity 
                for businesses and students who need it most.
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
      <MissionValues />
      <WhatWereFightingFor />
      <WhatWeDo />
      <Stats />
      <CaseStudies />
      <CTASection />
      <Footer />
    </main>
  )
}
