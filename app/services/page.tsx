'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import { ctaConfig, getBookingLinkProps } from '@/app/config/cta.config'

const services = [
  {
    id: 'ai-receptionist',
    title: 'AI Employee System',
    subtitle: 'Never Miss a Lead',
    description: 'Capture every lead. Qualify. Book. 24/7. Never miss again.',
    features: [
      '24/7 Call Handling',
      'Intelligent Lead Qualification',
      'Appointment Booking',
      'CRM Integration',
      'Multi-Language Support',
      'Analytics Dashboard'
    ],
    technologies: ['AI Voice Technology', 'Natural Language Processing', 'CRM Integration'],
    timeline: '2-4 weeks setup',
    link: '/ai-receptionist',
    icon: '🤖',
    color: 'accent',
    outcomes: ['300% increase in lead capture', '24/7 customer service', 'Zero missed opportunities']
  },
  {
    id: 'future-ready-graduate',
    title: 'Future Ready Graduate Program',
    subtitle: 'Job-Ready Graduates',
    description: '9-month program. 85% employed. Real skills. Real jobs.',
    features: [
      'AI-Powered Web Development',
      'Digital Marketing & Analytics',
      'Professional Portfolio Building',
      'Job Readiness Training',
      'Industry Internships',
      'Career Placement Support'
    ],
    technologies: ['AI Tools', 'Web Development', 'Digital Marketing'],
    timeline: '9 months (3 trimesters)',
    link: '/future-ready-graduate',
    icon: '🎓',
    color: 'success',
    outcomes: ['85% graduate employment rate', 'Direct employer partnerships', 'Real world skill development']
  },
  {
    id: 'custom-saas',
    title: 'Custom SaaS Development',
    subtitle: 'Build Your Vision',
    description: 'Your idea. Our build. Scalable. You own it.',
    features: [
      'Full-Stack Development',
      'Scalable Architecture',
      'Cloud-Native',
      'Multi-tenant Systems',
      'Payment Integration',
      'Admin Dashboard'
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    timeline: '8-16 weeks',
    link: '/custom-saas',
    icon: '⚙️',
    color: 'info',
    outcomes: ['Scalable architecture', 'Enterprise grade security', 'Ongoing optimization']
  },
]

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 px-2">
              Solutions That{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">Drive Real Impact</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed px-2">
              AI systems. Graduate programs. Custom software. Results from day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Clean Card Design */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="card p-8 hover:border-accent/50 group flex flex-col h-full"
              >
                {/* Icon and Header */}
                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform ${
                    service.color === 'accent' ? 'bg-accent/10' :
                    service.color === 'success' ? 'bg-success/10' :
                    'bg-info/10'
                  }`}>
                    {service.icon}
                  </div>
                  <span className={`text-xs font-semibold uppercase tracking-wider ${
                    service.color === 'accent' ? 'text-accent' :
                    service.color === 'success' ? 'text-success' :
                    'text-info'
                  }`}>
                    {service.subtitle}
                  </span>
                  <Link href={service.link}>
                    <h3 className="font-display text-2xl font-bold mt-2 mb-4 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                  </Link>
                </div>

                {/* Description */}
                <p className="text-muted mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Key Outcomes */}
                <div className="mb-6 space-y-2">
                  {service.outcomes.map((outcome, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        service.color === 'accent' ? 'bg-accent' :
                        service.color === 'success' ? 'bg-success' :
                        'bg-info'
                      }`} />
                      <span className="text-sm text-muted">{outcome}</span>
                    </div>
                  ))}
                </div>

                {/* Features Section */}
                <div className="mb-6 pt-6 border-t border-light">
                  <h4 className="font-semibold text-sm mb-3 uppercase tracking-wider text-muted-dark">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.slice(0, 4).map((feature, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <div className={`w-1 h-1 rounded-full mt-2 flex-shrink-0 ${
                          service.color === 'accent' ? 'bg-accent' :
                          service.color === 'success' ? 'bg-success' :
                          'bg-info'
                        }`} />
                        <span className="text-xs text-muted leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-sm mb-3 uppercase tracking-wider text-muted-dark">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, j) => (
                      <span
                        key={j}
                        className="px-2 py-1 bg-surface-light rounded text-xs text-muted-dark"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="mb-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-muted-dark">Timeline</span>
                    <span className="font-semibold text-sm">{service.timeline}</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 mt-auto">
                  <Link
                    href={service.link}
                    className={`btn-primary text-center ${
                      service.color === 'accent' ? '' :
                      service.color === 'success' ? 'bg-success hover:bg-success/90' :
                      'bg-info hover:bg-info/90'
                    }`}
                  >
                    Learn More
                  </Link>
                  <a
                    {...getBookingLinkProps()}
                    className="btn-secondary text-center"
                  >
                    {ctaConfig.buttonText.bookConsultation}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: '150+', label: 'Businesses Transformed', icon: '🚀' },
              { value: '85%', label: 'Graduate Employment Rate', icon: '🎓' },
              { value: '24/7', label: 'AI Support Available', icon: '🤖' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
            <p className="text-muted text-lg mb-8">
              Tell us your problem. We'll build the fix.
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
