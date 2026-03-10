'use client'

import { motion } from 'framer-motion'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import AnimatedSection from '@/app/components/AnimatedSection'

const openPositions = [
  {
    title: 'Executive Virtual Assistant',
    type: 'Full-time',
    location: 'Remote (Africa/Europe timezone)',
    salary: '$18,000 - $28,000',
    description: 'Support our leadership team and clients with administrative excellence. Manage calendars, communications, and operations that keep growth projects on track.',
    requirements: [
      '2+ years of executive or administrative assistant experience',
      'Proficiency in Google Workspace, Microsoft 365, and scheduling tools',
      'Excellent written and verbal communication in English',
      'Strong organizational and time-management skills',
      'Experience with CRM tools (HubSpot, Salesforce, or similar)',
      'Ability to work across Africa/Europe time zones'
    ],
    responsibilities: [
      'Manage calendars, scheduling, and meeting coordination',
      'Handle email triage and client communications',
      'Prepare reports, presentations, and meeting materials',
      'Support project coordination and follow-up tasks',
      'Maintain organized systems for documents and workflows'
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Fully remote work environment',
      'Professional development budget',
      'Flexible working hours',
      'Direct exposure to growth operations',
      'Stable, long-term engagement'
    ]
  },
  {
    title: 'Virtual Assistant — Operations & Support',
    type: 'Full-time',
    location: 'Remote (Africa timezone)',
    salary: '$15,000 - $24,000',
    description: 'Keep our client operations running smoothly. Handle customer inquiries, data entry, and support tasks that enable our growth infrastructure to scale.',
    requirements: [
      '1+ years of VA, customer support, or operations experience',
      'Strong attention to detail and accuracy',
      'Comfort with spreadsheets, databases, and basic tools',
      'Clear written communication in English',
      'Reliable internet and quiet workspace',
      'Self-motivated with minimal supervision'
    ],
    responsibilities: [
      'Respond to client inquiries and support tickets',
      'Perform data entry and CRM updates',
      'Assist with onboarding and offboarding workflows',
      'Support internal documentation and process tracking',
      'Coordinate with team on task handoffs and deadlines'
    ],
    benefits: [
      'Competitive salary with growth potential',
      'Remote work flexibility',
      'Structured training and onboarding',
      'Clear career progression path',
      'Supportive team environment',
      'Consistent, predictable workload'
    ]
  },
  {
    title: 'Virtual Assistant — Social Media & Content',
    type: 'Contract',
    location: 'Remote (Global)',
    salary: '$12 - $22 per hour',
    description: 'Support our digital presence and client campaigns. Create and schedule content, manage social accounts, and help grow audiences across platforms.',
    requirements: [
      '1+ years of social media or content support experience',
      'Familiarity with Meta Business Suite, LinkedIn, and scheduling tools',
      'Basic graphic design skills (Canva or similar)',
      'Strong written English and attention to detail',
      'Understanding of content calendars and posting best practices',
      'Ability to work independently and meet deadlines'
    ],
    responsibilities: [
      'Schedule and publish social media content',
      'Draft captions and light copy for posts',
      'Create simple graphics and visual assets',
      'Monitor engagement and compile basic analytics',
      'Support content calendar planning and coordination'
    ],
    benefits: [
      'Flexible contract arrangements',
      'Work on diverse client brands',
      'Portfolio-building opportunities',
      'Potential for long-term partnership',
      'Creative input on content strategy',
      'Remote-first, async-friendly workflow'
    ]
  }
]

const values = [
  {
    title: 'Growth Mindset',
    description: 'We believe in continuous learning and improvement, both personally and professionally.',
    icon: '🚀'
  },
  {
    title: 'Client Success',
    description: 'Our clients\' success is our success. We go above and beyond to deliver exceptional results.',
    icon: '🎯'
  },
  {
    title: 'Quality First',
    description: 'We never compromise on quality. Every project meets our high standards before delivery.',
    icon: '⭐'
  },
  {
    title: 'Remote Culture',
    description: 'We embrace remote work and have built systems that enable effective collaboration across time zones.',
    icon: '🌍'
  },
  {
    title: 'Innovation',
    description: 'We stay ahead of technology trends and encourage creative problem-solving approaches.',
    icon: '💡'
  },
  {
    title: 'Work-Life Balance',
    description: 'We believe great work comes from well-rested, fulfilled team members.',
    icon: '⚖️'
  }
]

const perks = [
  {
    title: 'Fully Remote',
    description: 'Work from anywhere with reliable internet. We provide the tools you need to succeed.',
    icon: '🏠'
  },
  {
    title: 'Flexible Hours',
    description: 'Core collaboration hours with flexibility to work when you\'re most productive.',
    icon: '⏰'
  },
  {
    title: 'Learning Budget',
    description: 'Annual budget for courses, conferences, books, and professional development.',
    icon: '📚'
  },
  {
    title: 'Latest Tech',
    description: 'We provide modern equipment and access to the best tools and software.',
    icon: '💻'
  },
  {
    title: 'Wellness Stipend',
    description: 'Annual stipend for wellness activities, home office setup, or tools that support your wellbeing.',
    icon: '🌱'
  },
  {
    title: 'Team Retreats',
    description: 'Annual team gatherings to connect, collaborate, and explore new destinations.',
    icon: '✈️'
  }
]

export default function CareersPage() {
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
              Join Our Team
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 px-2">
              Build the Future{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">With Us</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed px-2">
              Join a remote-first team that's transforming businesses across Africa and beyond. Work on meaningful projects, grow your skills, and make a real impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats — Proof Section */}
      <AnimatedSection className="py-16 bg-surface/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { metric: '100%', label: 'Remote team' },
              { metric: '5+', label: 'Countries represented' },
              { metric: '3', label: 'Live products shipped' },
              { metric: '50+', label: 'Client projects delivered' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-2">{stat.metric}</div>
                <p className="text-muted text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Join Us */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Why Work With Digni Digital?
            </h2>
            <p className="text-muted text-lg">
              We're building something special, and we want you to be part of it
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Open Positions */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Open Positions
            </h2>
            <p className="text-muted text-lg">
              Find your next career opportunity with us
            </p>
          </div>
          
          <div className="space-y-8">
            {openPositions.map((position, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-8 md:p-12"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                        {position.type}
                      </span>
                      <span className="text-muted text-sm">{position.location}</span>
                      <span className="text-success font-medium text-sm">{position.salary}</span>
                    </div>
                    
                    <h3 className="font-display text-3xl font-bold mb-4">{position.title}</h3>
                    <p className="text-muted text-lg mb-8 leading-relaxed">{position.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4">Requirements</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, j) => (
                            <li key={j} className="flex items-start gap-2 text-muted text-sm">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-4">Responsibilities</h4>
                        <ul className="space-y-2">
                          {position.responsibilities.map((resp, j) => (
                            <li key={j} className="flex items-start gap-2 text-muted text-sm">
                              <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="card p-6 bg-surface-light mb-6">
                      <h4 className="font-semibold mb-4">Benefits</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, j) => (
                          <li key={j} className="flex items-start gap-2 text-muted text-sm">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a
                      href={`mailto:careers@digni-digital-llc.com?subject=Application for ${encodeURIComponent(position.title)}`}
                      className="btn-primary w-full text-center"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Perks & Benefits */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Perks & Benefits
            </h2>
            <p className="text-muted text-lg">
              We take care of our team so they can do their best work
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-8 text-center"
              >
                <div className="text-4xl mb-4">{perk.icon}</div>
                <h3 className="font-display text-xl font-bold mb-4">{perk.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Application Process */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Our Hiring Process
            </h2>
            <p className="text-muted text-lg">
              A transparent, respectful process designed to find the right fit
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Application', description: 'Submit your application with portfolio/resume' },
              { step: '02', title: 'Screening', description: 'Initial review and phone/video screening call' },
              { step: '03', title: 'Interview', description: 'Technical/skills assessment and culture fit interview' },
              { step: '04', title: 'Decision', description: 'Final decision and offer (within 1 week)' }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-xl font-bold text-accent">{step.step}</span>
                </div>
                <h3 className="font-display font-bold mb-3">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-muted text-lg mb-8">
            We're always looking for talented individuals. Send us your resume and tell us how you'd like to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@digni-digital-llc.com"
              className="btn-primary text-lg px-8 py-4"
            >
              Send Your Resume
            </a>
            <a
              href="/contact"
              className="btn-secondary text-lg px-8 py-4"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  )
}