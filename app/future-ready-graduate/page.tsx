'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import VideoModal from '../components/VideoModal'
import VideoThumbnail from '../components/VideoThumbnail'
import { ctaConfig, getBookingLinkProps } from '@/app/config/cta.config'

export default function FutureReadyGraduatePage() {
  const [selectedVideo, setSelectedVideo] = useState<{ src: string; title: string; speaker: string; description: string } | null>(null)

  const trimesterPlan = [
    {
      trimester: 'First Trimester',
      period: 'September - December',
      focus: 'Digital Foundation & Web Development',
      modules: ['Digital Foundation Skills', 'Web Development Basics'],
      weeks: '16 weeks (before Christmas break)',
      icon: '🍂'
    },
    {
      trimester: 'Second Trimester', 
      period: 'January - April',
      focus: 'Marketing & Professional Branding',
      modules: ['Digital Marketing & Analytics', 'Professional Portfolio'],
      weeks: '14 weeks (before Easter break)',
      icon: '🌱'
    },
    {
      trimester: 'Third Trimester',
      period: 'April - July',
      focus: 'Job Readiness & Industry Placement',
      modules: ['Job Readiness & Placement', 'Industry Internships'],
      weeks: '12 weeks (graduation preparation)',
      icon: '🎓'
    }
  ]

  const outcomes = [
    {
      metric: '85%',
      description: 'Graduate employment rate within 6 months',
      detail: 'Compared to 45% industry average'
    },
    {
      metric: '150%',
      description: 'Average salary increase for graduates',
      detail: 'Versus non-program graduates'
    },
    {
      metric: '95%',
      description: 'Employer satisfaction rating',
      detail: 'From our hiring partner network'
    },
    {
      metric: '500+',
      description: 'Students trained annually',
      detail: 'Across partner institutions'
    }
  ]


  const caseStudy = {
    school: 'Riverside Technical High School',
    location: 'Lagos, Nigeria',
    challenge: 'Only 45% of graduates finding employment within 12 months. Students lacked practical digital skills that employers needed.',
    implementation: 'Integrated full-year Future Ready Graduate program into final year curriculum, following the September-July academic calendar with modules perfectly timed around ministry breaks.',
    results: [
      { metric: '85%', description: 'Graduate employment rate' },
      { metric: '₦240k', description: 'Average starting salary (up from ₦120k)' },
      { metric: '50+', description: 'Employer partnerships established' },
      { metric: '8 months', description: 'Program ROI payback period' }
    ],
    timeline: 'September 2024 - July 2025 (Full Academic Year)',
    testimonial: '"The program timing was perfect. Students learned during school hours, and the breaks gave them time to practice. By graduation, they were genuinely job ready." - Principal Mary Adebayo'
  }

  const pricing = [
    {
      name: 'School Partnership Program',
      price: '$500',
      period: '/month',
      description: 'Complete Future Ready Graduate program for schools and institutions',
      audience: 'schools',
      features: [
        'Full academic year curriculum (42 weeks)',
        'On-site facilitator and support',
        'Internet connectivity included',
        'Premium AI tools & subscriptions',
        'All learning materials provided',
        'Progress tracking and reporting',
        'Student assessment and certification',
        'Ongoing program support',
        'Job readiness training',
        'Partnership success guarantee'
      ],
      popular: true,
      comingSoon: false
    },
    {
      name: 'Online Course',
      price: '$25',
      period: ' one-time',
      description: 'Complete digital skills program for everyone - learn from anywhere, start earning online',
      features: [
        'Full digital skills curriculum (start from scratch)',
        'Learn from home, school, university, or vocational center',
        'AI-powered tools and techniques for making money online',
        'Self-paced learning - study on your own schedule',
        'Community support and peer learning forums',
        'Digital certificates upon completion',
        'Lifetime access to all course materials',
        'Portfolio building and job placement resources',
        'Learn how to use AI to compete with experts',
        'Start earning while you learn'
      ],
      popular: false,
      comingSoon: true,
      audience: 'everyone'
    }
  ]

  const featuredVideos = [
    {
      src: '/Strive Masiyiwa emphasized that entrepreneurship is a mindset focused on solving real problems, .mp4',
      title: 'Entrepreneurship as Problem-Solving',
      speaker: 'Strive Masiyiwa',
      description: 'The fundamental challenge: entrepreneurship isn\'t about building products—it\'s a mindset focused on solving real problems.',
      thumbnail: null
    },
    {
      src: '/Einstein on What Intelligence Really Means... .mp4',
      title: 'What Intelligence Really Means',
      speaker: 'Albert Einstein',
      description: 'A timeless perspective on intelligence and the importance of thinking differently in an evolving world.',
      thumbnail: null
    },
    {
      src: '/The world evolved. Education didn\u2019t.Look around- cars transformed, cities transformed, communica.mp4',
      title: 'Education Must Evolve',
      speaker: 'Global Thought Leader',
      description: 'The world has transformed in every way—except education. It\'s time for education to catch up with the digital revolution.',
      thumbnail: null
    },
    {
      src: '/Kim Kiyosaki says the school system trains students to follow instructions instead of think crea.mp4',
      title: 'School System vs Creative Thinking',
      speaker: 'Kim Kiyosaki',
      description: 'The school system trains students to follow instructions instead of thinking creatively—a critical insight for modern education.',
      thumbnail: null
    },
    {
      src: '/The era of the solo billionaire may be closer than we think. OpenAI CEO Sam Altman believes one .mp4',
      title: 'The Era of Solo Billionaires',
      speaker: 'Sam Altman',
      description: 'OpenAI CEO Sam Altman believes the era of solo billionaires may be closer than we think, powered by AI and individual capability.',
      thumbnail: null
    },
    {
      src: '/get.mp4',
      title: 'Digital Opportunity',
      speaker: 'Thought Leader',
      description: 'Insights on seizing digital opportunities and building success in the modern economy.',
      thumbnail: null
    }
  ]

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
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-success/10 border border-success/30 rounded-full text-success text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Future Ready Graduate Program
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-tight mb-4 sm:mb-6 md:mb-8 px-2">
              Turn Your Graduates Into{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">Industry-Ready Professionals</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 md:mb-10 px-2">
              Transform your final-year students into job-ready professionals. We provide internet, facilitators, and curriculum. You provide students and facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
              <a
                {...getBookingLinkProps()}
                className="btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center"
              >
                {ctaConfig.buttonText.scheduleConsultation}
              </a>
              <a
                href="/Digni%20Digital%20-%20Future-Ready%20Graduate%20Program.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center"
              >
                View Demo Presentation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Academic Calendar Integration */}
      <AnimatedSection className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-success/5 via-transparent to-success/10" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Designed for the<br />
              <span className="gradient-text">National Academic Calendar</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              Our program is perfectly structured to work with your existing September-July school year,
              respecting all ministry-scheduled breaks and holidays.
            </p>
          </div>

          {/* Calendar Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="w-16 h-16 bg-success/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl">
                📅
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Full School Year</h3>
              <p className="text-muted text-sm">September to July (222 school days)</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card p-6 text-center"
            >
              <div className="w-16 h-16 bg-success/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl">
                🔄
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Three Trimesters</h3>
              <p className="text-muted text-sm">Structured around ministry breaks</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card p-6 text-center"
            >
              <div className="w-16 h-16 bg-success/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl">
                🎯
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Seamless Integration</h3>
              <p className="text-muted text-sm">No disruption to existing curriculum</p>
            </motion.div>
          </div>

          {/* Trimester Breakdown */}
          <div className="space-y-8">
            {trimesterPlan.map((trimester, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-8 hover:border-success/50 group"
              >
                <div className="grid lg:grid-cols-4 gap-6 items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center text-3xl">
                      {trimester.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold group-hover:text-success transition-colors">
                        {trimester.trimester}
                      </h3>
                      <span className="text-success text-sm font-medium">{trimester.period}</span>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark block mb-2">Focus Area</span>
                    <p className="text font-semibold">{trimester.focus}</p>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark block mb-2">Duration</span>
                    <p className="text-muted">{trimester.weeks}</p>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark block mb-2">Core Modules</span>
                    <div className="space-y-1">
                      {trimester.modules.map((module, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-success rounded-full" />
                          <span className="text-sm text-muted">{module}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Dates Callout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 card p-8 bg-gradient-to-br from-success/5 to-success/10 border-success/20"
          >
            <div className="text-center">
              <h3 className="font-display text-2xl font-bold mb-4 text-success">
                2025-2026 Academic Year Integration
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <span className="font-semibold text block">Program Start</span>
                  <span className="text-muted">Monday, September 1, 2025</span>
                </div>
                <div>
                  <span className="font-semibold text block">Respects All Breaks</span>
                  <span className="text-muted">October, Christmas, February & Easter</span>
                </div>
                <div>
                  <span className="font-semibold text block">Graduation Ready</span>
                  <span className="text-muted">July 2-4, 2026</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Problem vs Opportunity */}
      <AnimatedSection className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-destructive/5 to-success/5" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Education <span className="text-destructive">Fails</span>, Digital Economy <span className="text-success">Thrives</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              The digital revolution offers unprecedented opportunities. Position your students at the forefront of this transformation.
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* Traditional System Problems */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="card p-8 border-destructive/30 bg-gradient-to-br from-destructive/10 to-destructive/5 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center text-2xl">
                    📉
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text">
                      Traditional Education Crisis
                    </h3>
                    <p className="text-muted text-sm">The harsh reality of conventional graduation outcomes</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-5 bg-destructive/10 border border-destructive/20 rounded-xl">
                    <div className="text-4xl font-display font-bold text-destructive mb-2">40%</div>
                    <p className="text-muted text-sm leading-relaxed">of graduates unemployed 6 months after graduation</p>
                  </div>
                  <div className="p-5 bg-destructive/10 border border-destructive/20 rounded-xl">
                    <div className="text-4xl font-display font-bold text-destructive mb-2">75%</div>
                    <p className="text-muted text-sm leading-relaxed">of employers say graduates lack job ready skills</p>
                  </div>
                  <div className="p-5 bg-destructive/10 border border-destructive/20 rounded-xl">
                    <div className="text-4xl font-display font-bold text-destructive mb-2">$1.7T</div>
                    <p className="text-muted text-sm leading-relaxed">in student debt with poor employment outcomes</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Digital Economy Opportunities */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="card p-8 border-success/30 bg-gradient-to-br from-success/10 to-success/5 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center text-2xl">
                    📈
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text">
                      Digital Economy Boom
                    </h3>
                    <p className="text-muted text-sm">The explosive growth of remote digital opportunities</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-5 bg-success/10 border border-success/20 rounded-xl">
                    <div className="text-4xl font-display font-bold text-success mb-2">$4.8T</div>
                    <p className="text-muted text-sm leading-relaxed">global digital economy size by 2025 (growing 15% annually)</p>
                  </div>
                  <div className="p-5 bg-success/10 border border-success/20 rounded-xl">
                    <div className="text-4xl font-display font-bold text-success mb-2">73M</div>
                    <p className="text-muted text-sm leading-relaxed">new freelancers worldwide in 2024 (fastest growing workforce)</p>
                  </div>
                  <div className="p-5 bg-success/10 border border-success/20 rounded-xl">
                    <div className="text-4xl font-display font-bold text-success mb-2">300%</div>
                    <p className="text-muted text-sm leading-relaxed">increase in remote work opportunities since 2020</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Why Digital Skills Are the Future */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card p-10 bg-gradient-to-br from-success/10 via-success/5 to-transparent border-success/30"
          >
            <div className="text-center mb-10">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">Why Digital Skills Are the Future</span>
              </h3>
              <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
                The digital economy offers unprecedented advantages that traditional careers simply cannot match.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-surface-light/50 rounded-xl border border-white/5 hover:border-success/30 transition-colors">
                <div className="w-16 h-16 bg-success/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl">
                  🌍
                </div>
                <h4 className="font-semibold text mb-2">Global Access</h4>
                <p className="text-muted text-sm leading-relaxed">Work with clients from anywhere in the world, not limited by local job market</p>
              </div>

              <div className="text-center p-6 bg-surface-light/50 rounded-xl border border-white/5 hover:border-success/30 transition-colors">
                <div className="w-16 h-16 bg-success/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl">
                  💰
                </div>
                <h4 className="font-semibold text mb-2">Higher Earning</h4>
                <p className="text-muted text-sm leading-relaxed">Digital skills command premium rates - often 2-5x local salaries</p>
              </div>

              <div className="text-center p-6 bg-surface-light/50 rounded-xl border border-white/5 hover:border-success/30 transition-colors">
                <div className="w-16 h-16 bg-success/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl">
                  🏠
                </div>
                <h4 className="font-semibold text mb-2">Location Freedom</h4>
                <p className="text-muted text-sm leading-relaxed">Work from home, coffee shops, or anywhere with internet connection</p>
              </div>

              <div className="text-center p-6 bg-surface-light/50 rounded-xl border border-white/5 hover:border-success/30 transition-colors">
                <div className="w-16 h-16 bg-success/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl">
                  🚀
                </div>
                <h4 className="font-semibold text mb-2">Instant Start</h4>
                <p className="text-muted text-sm leading-relaxed">Begin earning immediately - no waiting for job applications or interviews</p>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Featured Videos from Global Leaders */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Global Leaders<br />
              <span className="gradient-text">Supporting Our Mission</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              Listen to world-renowned figures discuss the same principles and values that drive our Future Ready Graduate program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-0 overflow-hidden hover:border-success/50 group cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <VideoThumbnail 
                  src={video.src} 
                  onPlay={() => {}}
                />
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-muted-dark mb-2">
                    {video.speaker}
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2 group-hover:text-success transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {featuredVideos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted">More videos from global leaders coming soon...</p>
            </div>
          )}
        </div>
      </AnimatedSection>

      {/* Digital Economy Skills */}
      <AnimatedSection id="curriculum" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              High-Demand Digital Skills<br />
              <span className="gradient-text">That Actually Pay</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              The digital economy is exploding with opportunities. With 2026 AI tools like Lovable.dev, Cursor, and advanced AI platforms, 
              beginners can now compete with expert-level professionals in these lucrative fields—if they master the right AI-powered skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                skill: 'AI-Powered Web Development',
                icon: '🌐',
                earning: '$40-100/hour',
                description: 'Build professional websites and web apps using AI tools that let beginners compete with expert developers.',
                tools: ['Lovable.dev', 'Cursor', 'Vercel', 'Render', 'v0.dev', 'GitHub Copilot'],
                demand: 'Extremely High'
              },
              {
                skill: 'AI Content Creation & Copywriting',
                icon: '✍️',
                earning: '$30-80/hour',
                description: 'Create high-quality blogs, social media content, and marketing copy using advanced AI writing tools.',
                tools: ['ChatGPT-4', 'Claude 3.5', 'Midjourney', 'Runway', 'Copy.ai', 'Jasper'],
                demand: 'Extremely High'
              },
              {
                skill: 'AI-Powered Digital Marketing',
                icon: '📊',
                earning: '$25-70/hour',
                description: 'Leverage AI for social media management, SEO, analytics, and data-driven marketing campaigns.',
                tools: ['Canva AI', 'Google Analytics AI', 'Meta AI Ads', 'ChatGPT Marketing'],
                demand: 'Very High'
              },
              {
                skill: 'AI Video Production & Editing',
                icon: '🎬',
                earning: '$35-90/hour',
                description: 'Create professional videos using AI tools for editing, animation, voiceovers, and content generation.',
                tools: ['Runway ML', 'Pika Labs', 'Synthesia', 'CapCut AI', 'DaVinci Resolve AI'],
                demand: 'Very High'
              },
              {
                skill: 'AI E-commerce & Store Building',
                icon: '🛒',
                earning: '$30-75/hour',
                description: 'Build and manage online stores using AI-powered platforms that automate product creation and marketing.',
                tools: ['Shopify AI', 'WooCommerce AI', 'Amazon AI Tools'],
                demand: 'Growing Fast'
              },
              {
                skill: 'AI Automation & Virtual Assistance',
                icon: '⚡',
                earning: '$20-60/hour',
                description: 'Automate business processes and provide AI-enhanced virtual assistance using cutting-edge tools.',
                tools: ['Zapier AI', 'Make.com', 'n8n', 'Notion AI'],
                demand: 'Exploding'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 hover:border-success/50 group"
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-success/10 rounded-2xl mx-auto mb-3 flex items-center justify-center text-3xl">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold group-hover:text-success transition-colors mb-2">
                    {item.skill}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-success font-bold text-lg">{item.earning}</span>
                    <span className="px-2 py-1 bg-success/10 text-success text-xs rounded-full">
                      {item.demand}
                    </span>
                  </div>
                  </div>

                <p className="text-muted text-sm leading-relaxed mb-4">{item.description}</p>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark block mb-2">Key Tools</span>
                    <div className="flex flex-wrap gap-1">
                      {item.tools.map((tool, j) => (
                        <span key={j} className="px-2 py-1 bg-surface-light text-xs rounded text-muted">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AI Advantage Callout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 bg-gradient-to-br from-success/5 to-success/10 border-success/20"
          >
            <div className="text-center">
              <h3 className="font-display text-2xl font-bold mb-4">
                <span className="gradient-text">The 2026 AI Advantage</span>
              </h3>
              <p className="text-muted text-lg mb-6 max-w-3xl mx-auto">
                With cutting-edge 2026 AI tools like Lovable.dev and Cursor, your students can compete with expert-level professionals from day one and start earning immediately.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <span className="font-semibold text block mb-2">🚀 Expert-Level Output</span>
                  <span className="text-muted">AI tools like Cursor and Lovable.dev enable beginners to build professional-grade projects</span>
                </div>
                <div>
                  <span className="font-semibold text block mb-2">💡 Future-Proof Skills</span>
                  <span className="text-muted">Master the AI tools that define 2026 and beyond, not outdated methods</span>
                </div>
                <div>
                  <span className="font-semibold text block mb-2">💰 Immediate Income</span>
                  <span className="text-muted">Start earning with real projects while learning, not after graduation</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Partnership Requirements */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Partnership<br />
              <span className="gradient-text">Requirements</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              A successful partnership requires commitment from both sides. Here's what we each bring to ensure student success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* What Schools Provide */}
              <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card p-8"
              >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-info/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl">
                  🏫
                </div>
                <h3 className="font-display text-2xl font-bold text-info">What Schools Provide</h3>
                <p className="text-muted text-sm mt-2">Your essential contributions to the partnership</p>
                  </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-info rounded-full" />
                    Students (Finalists)
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Provide final-year students who are committed to completing the full program and ready for intensive digital skills training.
                  </p>
                </div>

                  <div>
                  <h4 className="font-semibold text mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-info rounded-full" />
                    Computer Lab Facility
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Existing computer lab with reliable electricity supply and adequate space for student cohorts during program hours.
                  </p>
                        </div>

                <div>
                  <h4 className="font-semibold text mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-info rounded-full" />
                    Computing Equipment
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Computers or laptops for students to use during training sessions. Equipment should be capable of running modern web browsers and basic software.
                  </p>
                  </div>

                  <div>
                  <h4 className="font-semibold text mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-info rounded-full" />
                    Program Integration
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Integrate the program into your academic calendar and provide dedicated time slots for our curriculum delivery.
                  </p>
                    </div>
              </div>
            </motion.div>

            {/* What We Provide */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card p-8"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-success/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl">
                  🚀
                </div>
                <h3 className="font-display text-2xl font-bold text-success">What We Provide</h3>
                <p className="text-muted text-sm mt-2">Our comprehensive support and resources</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    Internet Connectivity
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    We handle all internet connectivity costs and setup, ensuring reliable high-speed internet essential for the program's success.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    Site Facilitator
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Dedicated on-site team representative who follows our proven curriculum and provides direct instruction and support to students.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    AI Tools & Subscriptions
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    We provide and manage all premium AI tool subscriptions (ChatGPT Plus, Claude Pro, GitHub Copilot, etc.) that give students superhero capabilities in the digital economy.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    Complete Curriculum
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Full academic year curriculum with 42 weeks of structured content, assessments, and practical projects aligned with industry needs.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    Ongoing Support
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Continuous program monitoring, progress tracking, and support to ensure successful implementation and student outcomes.
                  </p>
                  </div>
                </div>
              </motion.div>
          </div>

          {/* Partnership Success Factors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 card p-8 bg-gradient-to-br from-success/5 to-info/5 border-success/20"
          >
            <div className="text-center">
              <h3 className="font-display text-2xl font-bold mb-6">
                <span className="gradient-text">Partnership Success Factors</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <span className="font-semibold text block mb-2">Student Performance</span>
                  <span className="text-muted">Their determination and commitment drive employment success</span>
                </div>
                <div>
                  <span className="font-semibold text block mb-2">Mutual Commitment</span>
                  <span className="text-muted">Both parties dedicated to student success and program completion</span>
                </div>
                <div>
                  <span className="font-semibold text block mb-2">Continuous Support</span>
                  <span className="text-muted">Ongoing collaboration throughout the academic year</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Results */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Proven Results<br />
              <span className="gradient-text">Across Africa</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {outcomes.map((outcome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-success mb-2">
                  {outcome.metric}
                </div>
                <p className="text font-semibold mb-1">{outcome.description}</p>
                <p className="text-muted text-sm">{outcome.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* Case Study */}
          <div className="card p-8 md:p-12">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                    Success Story
                  </span>
                  <h3 className="font-display text-2xl font-bold">{caseStudy.school}</h3>
                  <span className="text-muted text-sm">{caseStudy.location}</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark">Challenge</span>
                    <p className="text-muted mt-2 leading-relaxed">{caseStudy.challenge}</p>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark">Implementation</span>
                    <p className="text mt-2 leading-relaxed">{caseStudy.implementation}</p>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark">Timeline</span>
                    <p className="text-success font-medium mt-2">{caseStudy.timeline}</p>
                  </div>

                  <div className="card p-6 bg-success/5 border border-success/20">
                    <blockquote className="text italic leading-relaxed">
                      {caseStudy.testimonial}
                    </blockquote>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-display text-xl font-bold mb-6">Results</h4>
                <div className="space-y-6">
                  {caseStudy.results.map((result, i) => (
                    <div key={i} className="text-center">
                      <div className="font-display text-3xl font-bold text-success mb-2">
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
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Two Paths to<br />
              <span className="gradient-text">Digital Success</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Choose the path that fits your needs. <span className="text font-medium">No one gets left behind.</span>
            </p>
          </div>

          {/* Two Paths Visual Layout */}
          <div className="relative">
            {/* Two Column Grid */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`relative card p-8 h-full flex flex-col ${
                    plan.popular 
                      ? 'border-success/50 glow-accent' 
                      : plan.comingSoon 
                        ? 'border-accent/30 opacity-90' 
                        : 'border-success/30'
                  }`}
                >
                  {/* Path Indicator */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`px-4 py-1.5 rounded-full text-xs font-bold ${
                      plan.audience === 'schools'
                        ? 'bg-success/20 text-success border border-success/30'
                        : 'bg-accent/20 text-accent border border-accent/30'
                    }`}>
                      {plan.audience === 'schools' ? '🏫 FOR SCHOOLS' : '🌍 FOR EVERYONE'}
                    </div>
                  </div>

                  {/* Coming Soon Badge */}
                  {plan.comingSoon && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-warning/20 text-warning text-xs font-bold rounded-full">
                        COMING SOON
                      </span>
                    </div>
                  )}

                  {/* Content */}
                  <div className="mt-4 mb-6">
                    <h3 className="font-display text-2xl font-bold mb-3 text-center">{plan.name}</h3>
                    <div className="text-center mb-4">
                      <div className="font-display text-5xl font-bold text-success mb-1">
                        {plan.price}
                        <span className="text-xl text-muted font-normal ml-1">{plan.period}</span>
                      </div>
                      <p className="text-muted text-sm leading-relaxed">{plan.description}</p>
                    </div>

                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 ${
                          plan.audience === 'schools' ? 'bg-success' : 'bg-accent'
                        }`} />
                        <span className="text-sm text leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {plan.comingSoon ? (
                    <a
                      href="https://forms.gle/jEZAAVf7u8ba1pEK9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full text-center py-3 block"
                    >
                      Reserve Early Access
                    </a>
                  ) : (
                    <a
                      {...getBookingLinkProps()}
                      className={`w-full text-center py-3 rounded-lg font-semibold transition-all ${
                        plan.audience === 'schools'
                          ? 'btn-primary'
                          : 'btn-secondary hover:border-accent hover:text-accent'
                      }`}
                    >
                      {plan.name.includes('School') ? 'Start Partnership' : ctaConfig.buttonText.getStarted}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Student Outcomes?
          </h2>
          <p className="text-muted text-lg mb-8">
            Let's discuss how Future Ready Graduate can work for your institution. 
            See curriculum details and success metrics in a personalized consultation.
          </p>
          <a
            {...getBookingLinkProps()}
            className="btn-primary text-lg px-8 py-4"
          >
            {ctaConfig.buttonText.scheduleConsultation}
          </a>
        </div>
      </AnimatedSection>

      {selectedVideo && selectedVideo.src && (
        <VideoModal
          isOpen={selectedVideo !== null}
          onClose={() => setSelectedVideo(null)}
          videoSrc={selectedVideo.src}
          title={selectedVideo.title}
          description={`${selectedVideo.speaker}: ${selectedVideo.description}`}
        />
      )}

      <Footer />
    </main>
  )
}