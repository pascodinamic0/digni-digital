'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'

const caseStudies = [
  {
    id: 'healthcare-clinic',
    industry: 'Healthcare',
    title: 'Regional Healthcare Clinic',
    client: 'MedCare Clinic Network',
    duration: '6 weeks',
    location: 'Lagos, Nigeria',
    challenge: 'Manual appointment booking system leading to 40% no-shows, lost revenue, and frustrated patients. Staff spending 3+ hours daily on scheduling conflicts.',
    solution: [
      'Custom patient portal with online booking',
      'Automated SMS and email reminders',
      'Staff dashboard for schedule management',
      'Integration with existing medical records system',
      'Payment processing for consultations'
    ],
    results: [
      { metric: '85%', description: 'Reduction in no-shows', type: 'improvement' },
      { metric: '$50k', description: 'Additional monthly revenue', type: 'revenue' },
      { metric: '3 hours', description: 'Daily time savings for staff', type: 'efficiency' },
      { metric: '95%', description: 'Patient satisfaction score', type: 'satisfaction' }
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Twilio', 'Stripe'],
    testimonial: {
      quote: "Digni Digital transformed our entire patient experience. The booking system alone has saved us countless hours and significantly improved our revenue.",
      author: "Dr. Sarah Okafor",
      position: "Chief Medical Officer"
    }
  },
  {
    id: 'real-estate-agency',
    industry: 'Real Estate',
    title: 'Premium Real Estate Agency',
    client: 'Elite Properties Group',
    duration: '4 weeks',
    location: 'Accra, Ghana',
    challenge: 'Agents spending 5+ hours per property proposal, losing deals to faster competitors. Inconsistent proposal quality affecting brand reputation.',
    solution: [
      'AI-powered proposal generation system',
      'Property database with automated valuations',
      'Client portal for document sharing',
      'Mobile app for agents',
      'CRM integration for lead tracking'
    ],
    results: [
      { metric: '90%', description: 'Faster proposal delivery', type: 'efficiency' },
      { metric: '40%', description: 'Higher close rate', type: 'improvement' },
      { metric: '25', description: 'More deals per month', type: 'volume' },
      { metric: '$200k', description: 'Increased monthly revenue', type: 'revenue' }
    ],
    technologies: ['React Native', 'Express.js', 'MongoDB', 'AWS S3', 'OpenAI API'],
    testimonial: {
      quote: "Our agents can now create professional proposals in minutes instead of hours. This has been a game-changer for our competitive advantage.",
      author: "Kwame Asante",
      position: "Managing Director"
    }
  },
  {
    id: 'digital-agency',
    industry: 'Marketing',
    title: 'Digital Marketing Agency',
    client: 'GrowthMax Digital',
    duration: '3 weeks',
    location: 'Cape Town, South Africa',
    challenge: 'Inconsistent proposal quality and pricing leading to 60% rejection rate. Manual client reporting consuming 20+ hours weekly.',
    solution: [
      'Standardized proposal templates',
      'Dynamic pricing calculator',
      'Automated client reporting dashboard',
      'Project management integration',
      'Client communication portal'
    ],
    results: [
      { metric: '75%', description: 'Increase in acceptance rate', type: 'improvement' },
      { metric: '60%', description: 'Time saved on proposals', type: 'efficiency' },
      { metric: '$100k', description: 'Annual revenue increase', type: 'revenue' },
      { metric: '20 hours', description: 'Weekly time savings', type: 'efficiency' }
    ],
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Chart.js', 'SendGrid'],
    testimonial: {
      quote: "The proposal system has completely transformed our sales process. We're closing more deals and spending less time on admin work.",
      author: "Thandiwe Mthembu",
      position: "Founder & CEO"
    }
  },
  {
    id: 'ecommerce-store',
    industry: 'E-commerce',
    title: 'Fashion E-commerce Platform',
    client: 'AfroStyle Boutique',
    duration: '8 weeks',
    location: 'Nairobi, Kenya',
    challenge: 'Low conversion rates, high cart abandonment, and poor mobile experience. Manual inventory management causing stockouts.',
    solution: [
      'Mobile-first e-commerce platform',
      'Automated inventory management',
      'Personalized product recommendations',
      'Multi-payment gateway integration',
      'Social media integration'
    ],
    results: [
      { metric: '150%', description: 'Increase in conversion rate', type: 'improvement' },
      { metric: '65%', description: 'Reduction in cart abandonment', type: 'improvement' },
      { metric: '300%', description: 'Mobile sales increase', type: 'growth' },
      { metric: '$75k', description: 'Monthly revenue growth', type: 'revenue' }
    ],
    technologies: ['Shopify Plus', 'React', 'Node.js', 'Stripe', 'Mailchimp'],
    testimonial: {
      quote: "Our online sales have tripled since the new platform launch. The mobile experience is incredible and our customers love it.",
      author: "Amina Hassan",
      position: "Store Owner"
    }
  }
]

const industries = ['All', 'Healthcare', 'Real Estate', 'Marketing', 'E-commerce']

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All')
  const [expandedStudy, setExpandedStudy] = useState<string | null>(null)

  const filteredStudies = selectedIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry)

  const getResultColor = (type: string) => {
    switch (type) {
      case 'revenue': return 'text-success'
      case 'improvement': return 'text-accent'
      case 'efficiency': return 'text-info'
      case 'satisfaction': return 'text-purple'
      case 'volume': return 'text-orange-400'
      case 'growth': return 'text-success'
      default: return 'text-accent'
    }
  }

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
              Case Studies
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 px-2">
              Proof that transformation{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">works.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed px-2">
              Real businesses, real results, real growth. See how we've helped companies across Africa and beyond scale without the chaos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <AnimatedSection className="py-12 bg-surface/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                aria-pressed={selectedIndustry === industry}
                aria-label={`Filter case studies by ${industry}`}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedIndustry === industry
                    ? 'bg-accent text-background'
                    : 'bg-surface border border-white/10 text-muted hover:text-white hover:border-accent/50'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Case Studies Grid */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12">
            {filteredStudies.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-8 md:p-12"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Study Info */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-muted text-sm">{study.duration}</span>
                      <span className="text-muted text-sm">{study.location}</span>
                    </div>
                    
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                      {study.title}
                    </h2>
                    
                    <p className="text-muted text-lg mb-8 leading-relaxed">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    
                    {expandedStudy === study.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-6 mb-8"
                      >
                        <div>
                          <h4 className="font-semibold mb-3">Solution Delivered</h4>
                          <ul className="space-y-2">
                            {study.solution.map((item, j) => (
                              <li key={j} className="flex items-start gap-2 text-muted">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, j) => (
                              <span
                                key={j}
                                className="px-3 py-1 bg-surface-light rounded-full text-xs text-muted-dark"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="card p-6 bg-surface-light">
                          <blockquote className="text-muted italic mb-4">
                            "{study.testimonial.quote}"
                          </blockquote>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                              <span className="font-display font-bold text-accent text-sm">
                                {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <p className="font-semibold">{study.testimonial.author}</p>
                              <p className="text-muted text-sm">{study.testimonial.position}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    <button
                      onClick={() => setExpandedStudy(expandedStudy === study.id ? null : study.id)}
                      aria-expanded={expandedStudy === study.id}
                      aria-label={expandedStudy === study.id ? 'Collapse case study details' : 'Expand case study details'}
                      className="text-accent hover:text-accent-light transition-colors font-medium"
                    >
                      {expandedStudy === study.id ? 'Show Less' : 'Read Full Case Study'}
                    </button>
                  </div>
                  
                  {/* Results */}
                  <div>
                    <h3 className="font-display text-xl font-bold mb-6">Key Results</h3>
                    <div className="space-y-6">
                      {study.results.map((result, j) => (
                        <div key={j} className="text-center">
                          <div className={`font-display text-3xl font-bold mb-2 ${getResultColor(result.type)}`}>
                            {result.metric}
                          </div>
                          <p className="text-muted text-sm">{result.description}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8">
                      <a
                        href="https://calendly.com/pascal-digny/consultation-meeting"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full text-center"
                      >
                        Get Similar Results
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-muted text-lg mb-8">
            Every business is unique, but the principles of growth remain the same. Let's discuss how we can create similar results for your business.
          </p>
          <a
            href="https://calendly.com/pascal-digny/consultation-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4"
          >
            Start Your Transformation
          </a>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  )
}