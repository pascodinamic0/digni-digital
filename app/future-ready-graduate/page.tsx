'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import VideoModal from '../components/VideoModal'

export default function FutureReadyGraduatePage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

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
      description: 'Complete Future Ready Graduate program for your school',
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
      popular: true
    }
  ]

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
            <span className="inline-block px-4 py-2 bg-success/10 border border-success/30 rounded-full text-success text-sm font-medium mb-6">
              Future Ready Graduate Program
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Turn Your Graduates Into<br />
              <span className="gradient-text">Industry Ready Professionals</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-10">
              We provide everything needed to transform your final-year students into skilled professionals: 
              internet connectivity, expert facilitators, and a proven curriculum that delivers real employment outcomes. 
              Your school provides students and facilities—we handle the rest.
            </p>
            <div className="text-center mb-8">
              <p className="text-muted text-sm mb-4 max-w-2xl mx-auto">
                The core challenge: Many entrepreneurs focus on building products instead of solving real problems. 
                Watch Strive Masiyiwa explain why the entrepreneurship mindset must start with understanding the problem.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsVideoOpen(true)}
                className="btn-primary text-lg px-8 py-4"
              >
                Watch the Challenge Explained
              </button>
              <a
                href="/Digni%20Digital%20-%20Future-Ready%20Graduate%20Program.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4"
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
                    <p className="text-white font-semibold">{trimester.focus}</p>
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
                  <span className="font-semibold text-white block">Program Start</span>
                  <span className="text-muted">Monday, September 1, 2025</span>
                </div>
                <div>
                  <span className="font-semibold text-white block">Respects All Breaks</span>
                  <span className="text-muted">October, Christmas, February & Easter</span>
                </div>
                <div>
                  <span className="font-semibold text-white block">Graduation Ready</span>
                  <span className="text-muted">July 2-4, 2026</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Problem vs Opportunity */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              Traditional Education Is <span className="text-red-400">Failing</span><br />
              While Digital Economy Is <span className="text-success">Exploding</span>
          </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              The old system is broken, but the digital revolution has created unprecedented opportunities. 
              Your students can either be left behind or positioned at the forefront of this transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Traditional System Problems */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold text-red-400 mb-4">
                  📉 Traditional Education Crisis
                </h3>
                <p className="text-muted">The harsh reality of conventional graduation outcomes</p>
              </div>

              <div className="grid gap-6">
                <div className="card p-6 border-red-400/20 bg-red-400/5">
              <div className="text-3xl font-display font-bold text-red-400 mb-2">40%</div>
              <p className="text-muted text-sm">of graduates unemployed 6 months after graduation</p>
            </div>
                <div className="card p-6 border-red-400/20 bg-red-400/5">
              <div className="text-3xl font-display font-bold text-red-400 mb-2">75%</div>
              <p className="text-muted text-sm">of employers say graduates lack job ready skills</p>
            </div>
                <div className="card p-6 border-red-400/20 bg-red-400/5">
              <div className="text-3xl font-display font-bold text-red-400 mb-2">$1.7T</div>
              <p className="text-muted text-sm">in student debt with poor employment outcomes</p>
            </div>
          </div>
            </motion.div>

            {/* Digital Economy Opportunities */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold text-success mb-4">
                  📈 Digital Economy Boom
                </h3>
                <p className="text-muted">The explosive growth of remote digital opportunities</p>
              </div>

              <div className="grid gap-6">
                <div className="card p-6 border-success/20 bg-success/5">
                  <div className="text-3xl font-display font-bold text-success mb-2">$4.8T</div>
                  <p className="text-muted text-sm">global digital economy size by 2025 (growing 15% annually)</p>
                </div>
                <div className="card p-6 border-success/20 bg-success/5">
                  <div className="text-3xl font-display font-bold text-success mb-2">73M</div>
                  <p className="text-muted text-sm">new freelancers worldwide in 2024 (fastest growing workforce)</p>
                </div>
                <div className="card p-6 border-success/20 bg-success/5">
                  <div className="text-3xl font-display font-bold text-success mb-2">300%</div>
                  <p className="text-muted text-sm">increase in remote work opportunities since 2020</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Why Digital Economy is the Future */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="card p-8 bg-gradient-to-br from-success/5 to-success/10 border-success/20"
          >
            <div className="text-center mb-8">
              <h3 className="font-display text-3xl font-bold mb-4">
                <span className="gradient-text">Why Digital Skills Are the Future</span>
              </h3>
              <p className="text-muted text-lg max-w-3xl mx-auto">
                The digital economy offers unprecedented advantages that traditional careers simply cannot match.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl">
                  🌍
                </div>
                <h4 className="font-semibold text-white mb-2">Global Access</h4>
                <p className="text-muted text-sm">Work with clients from anywhere in the world, not limited by local job market</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl">
                  💰
                </div>
                <h4 className="font-semibold text-white mb-2">Higher Earning</h4>
                <p className="text-muted text-sm">Digital skills command premium rates - often 2-5x local salaries</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl">
                  🏠
                </div>
                <h4 className="font-semibold text-white mb-2">Location Freedom</h4>
                <p className="text-muted text-sm">Work from home, coffee shops, or anywhere with internet connection</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl">
                  🚀
                </div>
                <h4 className="font-semibold text-white mb-2">Instant Start</h4>
                <p className="text-muted text-sm">Begin earning immediately - no waiting for job applications or interviews</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-success font-semibold text-lg">
                Your students can capitalize on this massive opportunity from anywhere in the world
              </p>
            </div>
          </motion.div>
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
              The digital economy is exploding with opportunities. With AI tools like ChatGPT and Claude, 
              anyone can now compete professionally in these lucrative fields—if they know the right skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                skill: 'AI-Powered Content Creation',
                icon: '🤖',
                earning: '$25-75/hour',
                description: 'Use AI to create blogs, social media content, and marketing copy that businesses desperately need.',
                tools: ['ChatGPT', 'Claude', 'Jasper', 'Copy.ai'],
                demand: 'Extremely High'
              },
              {
                skill: 'Digital Marketing & Analytics',
                icon: '📊',
                earning: '$20-60/hour',
                description: 'Help businesses grow online through social media, SEO, and data-driven marketing strategies.',
                tools: ['Google Analytics', 'Facebook Ads', 'Canva', 'Hootsuite'],
                demand: 'Very High'
              },
              {
                skill: 'Web Development & Design',
                icon: '🌐',
                earning: '$30-80/hour',
                description: 'Build websites and web applications using modern tools and AI-assisted coding.',
                tools: ['HTML/CSS', 'JavaScript', 'WordPress', 'GitHub Copilot'],
                demand: 'High'
              },
              {
                skill: 'E-commerce & Online Business',
                icon: '🛒',
                earning: '$15-50/hour',
                description: 'Set up and manage online stores, dropshipping, and digital product sales.',
                tools: ['Shopify', 'WooCommerce', 'Amazon FBA', 'Etsy'],
                demand: 'Growing Fast'
              },
              {
                skill: 'Video Editing & Production',
                icon: '🎬',
                earning: '$20-65/hour',
                description: 'Create engaging video content for businesses, YouTubers, and social media.',
                tools: ['DaVinci Resolve', 'Canva Video', 'CapCut', 'Loom'],
                demand: 'Very High'
              },
              {
                skill: 'Virtual Assistance & Automation',
                icon: '⚡',
                earning: '$12-40/hour',
                description: 'Provide remote support and automate business processes using AI and no-code tools.',
                tools: ['Zapier', 'Notion', 'Calendly', 'Slack'],
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
                <span className="gradient-text">The AI Advantage</span>
              </h3>
              <p className="text-muted text-lg mb-6 max-w-3xl mx-auto">
                With AI tools, your students can now compete with experienced professionals from day one. 
                We teach them not just the skills, but how to leverage AI to work faster, smarter, and more creatively.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <span className="font-semibold text-white block mb-2">🚀 10x Productivity</span>
                  <span className="text-muted">AI helps students work faster than traditional methods</span>
                </div>
                <div>
                  <span className="font-semibold text-white block mb-2">💡 Creative Edge</span>
                  <span className="text-muted">Generate ideas and solutions that stand out</span>
                </div>
                <div>
                  <span className="font-semibold text-white block mb-2">💰 Immediate Earning</span>
                  <span className="text-muted">Start freelancing and earning while still learning</span>
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
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl">
                  🏫
                </div>
                <h3 className="font-display text-2xl font-bold text-blue-400">What Schools Provide</h3>
                <p className="text-muted text-sm mt-2">Your essential contributions to the partnership</p>
                  </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    Students (Finalists)
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Provide final-year students who are committed to completing the full program and ready for intensive digital skills training.
                  </p>
                </div>

                  <div>
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    Computer Lab Facility
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Existing computer lab with reliable electricity supply and adequate space for student cohorts during program hours.
                  </p>
                        </div>

                <div>
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    Computing Equipment
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Computers or laptops for students to use during training sessions. Equipment should be capable of running modern web browsers and basic software.
                  </p>
                  </div>

                  <div>
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
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
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    Internet Connectivity
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    We handle all internet connectivity costs and setup, ensuring reliable high-speed internet essential for the program's success.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    Site Facilitator
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Dedicated on-site team representative who follows our proven curriculum and provides direct instruction and support to students.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    AI Tools & Subscriptions
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    We provide and manage all premium AI tool subscriptions (ChatGPT Plus, Claude Pro, GitHub Copilot, etc.) that give students superhero capabilities in the digital economy.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    Complete Curriculum
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Full academic year curriculum with 42 weeks of structured content, assessments, and practical projects aligned with industry needs.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
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
            className="mt-12 card p-8 bg-gradient-to-br from-success/5 to-blue-500/5 border-success/20"
          >
            <div className="text-center">
              <h3 className="font-display text-2xl font-bold mb-6">
                <span className="gradient-text">Partnership Success Factors</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <span className="font-semibold text-white block mb-2">Student Performance</span>
                  <span className="text-muted">Their determination and commitment drive employment success</span>
                </div>
                <div>
                  <span className="font-semibold text-white block mb-2">Mutual Commitment</span>
                  <span className="text-muted">Both parties dedicated to student success and program completion</span>
                </div>
                <div>
                  <span className="font-semibold text-white block mb-2">Continuous Support</span>
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
                <p className="text-white font-semibold mb-1">{outcome.description}</p>
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
                    <p className="text-white mt-2 leading-relaxed">{caseStudy.implementation}</p>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark">Timeline</span>
                    <p className="text-success font-medium mt-2">{caseStudy.timeline}</p>
                  </div>

                  <div className="card p-6 bg-success/5 border border-success/20">
                    <blockquote className="text-white italic leading-relaxed">
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
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Simple School<br />
              <span className="gradient-text">Partnership Pricing</span>
            </h2>
            <p className="text-muted text-lg">
              One transparent monthly fee covers everything your school needs for student success.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-lg w-full">
            {pricing.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="card p-8 border-success/50 glow-accent"
              >
                  <div className="text-center mb-4">
                    <span className="px-4 py-2 bg-success/20 text-success text-sm font-bold rounded-full">
                      COMPLETE PROGRAM
                    </span>
                  </div>

                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="font-display text-5xl font-bold text-success mb-2">
                    {plan.price}
                      <span className="text-xl text-muted font-normal">{plan.period}</span>
                  </div>
                  <p className="text-muted text-sm">{plan.description}</p>
                </div>

                  <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-white">
                        <div className="w-2 h-2 bg-success rounded-full flex-shrink-0" />
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
                    Start Partnership
                </a>
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
            href="https://calendly.com/pascal-digny/consultation-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4"
          >
            Schedule Consultation
          </a>
        </div>
      </AnimatedSection>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc={`/Strive Masiyiwa emphasized that entrepreneurship is a mindset focused on solving real problems, .mp4`}
        title="The Core Challenge: Entrepreneurship as Problem-Solving"
        description="Strive Masiyiwa explains the fundamental challenge: entrepreneurship isn't about building products—it's a mindset focused on solving real problems. In the simplest terms, the challenge is that many entrepreneurs start with solutions instead of understanding the problem first. True entrepreneurship begins by identifying real challenges people face, then creating meaningful solutions. This is the philosophy that drives everything we do at Digni Digital—we solve problems that matter."
      />

      <Footer />
    </main>
  )
}