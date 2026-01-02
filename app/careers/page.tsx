'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import FloatingShapes from '../components/FloatingShapes'

const openPositions = [
  {
    title: 'Senior Full-Stack Developer',
    type: 'Full-time',
    location: 'Remote (Africa/Europe timezone)',
    salary: '$40,000 - $60,000',
    description: 'Join our core development team building growth infrastructure solutions for businesses across Africa and beyond.',
    requirements: [
      '5+ years of full-stack development experience',
      'Expert in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS/Azure)',
      'Strong understanding of database design',
      'Experience with API development and integration',
      'Excellent communication skills in English'
    ],
    responsibilities: [
      'Develop custom web applications and SaaS products',
      'Collaborate with clients on technical requirements',
      'Mentor junior developers and contribute to code reviews',
      'Participate in architecture decisions and technical planning',
      'Ensure code quality and best practices'
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Fully remote work environment',
      'Professional development budget',
      'Health insurance coverage',
      'Flexible working hours',
      'Annual team retreat'
    ]
  },
  {
    title: 'Digital Marketing Specialist',
    type: 'Full-time',
    location: 'Remote (Africa timezone)',
    salary: '$25,000 - $40,000',
    description: 'Lead digital marketing campaigns and growth strategies for our diverse client portfolio.',
    requirements: [
      '3+ years of digital marketing experience',
      'Expertise in SEO, SEM, and social media marketing',
      'Experience with marketing automation tools',
      'Strong analytical and data interpretation skills',
      'Content creation and copywriting abilities',
      'Knowledge of African markets preferred'
    ],
    responsibilities: [
      'Develop and execute digital marketing strategies',
      'Manage client social media accounts and campaigns',
      'Create content for various digital channels',
      'Analyze campaign performance and optimize ROI',
      'Collaborate with development team on marketing websites'
    ],
    benefits: [
      'Competitive salary with commission structure',
      'Remote work flexibility',
      'Access to premium marketing tools',
      'Professional certification support',
      'Creative freedom in campaign development',
      'Direct client interaction opportunities'
    ]
  },
  {
    title: 'UI/UX Designer',
    type: 'Contract',
    location: 'Remote (Global)',
    salary: '$30 - $50 per hour',
    description: 'Create beautiful, user-centered designs for web applications, mobile apps, and SaaS products.',
    requirements: [
      '4+ years of UI/UX design experience',
      'Proficiency in Figma, Adobe Creative Suite',
      'Strong portfolio showcasing web and mobile designs',
      'Understanding of user research and testing methodologies',
      'Experience with design systems and component libraries',
      'Knowledge of frontend development principles'
    ],
    responsibilities: [
      'Design user interfaces for web and mobile applications',
      'Conduct user research and usability testing',
      'Create wireframes, prototypes, and design systems',
      'Collaborate with developers on implementation',
      'Maintain brand consistency across all projects'
    ],
    benefits: [
      'Flexible contract arrangements',
      'Work on diverse, challenging projects',
      'Direct collaboration with international clients',
      'Portfolio building opportunities',
      'Potential for long-term partnership',
      'Creative freedom and autonomy'
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
    title: 'Health Coverage',
    description: 'Comprehensive health insurance coverage for you and your family.',
    icon: '🏥'
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
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-mesh">
        <FloatingShapes />
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium mb-6">
              Join Our Team
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Build the Future<br />
              <span className="gradient-text">With Us</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Join a remote-first team that's transforming businesses across Africa and beyond. Work on meaningful projects, grow your skills, and make a real impact.
            </p>
          </motion.div>
        </div>
      </section>

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
                      href="mailto:careers@dignidigital.com?subject=Application for Senior Full-Stack Developer"
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
              href="mailto:careers@dignidigital.com"
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