'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import FloatingShapes from '../components/FloatingShapes'

const services = [
  {
    id: 'web-development',
    title: 'Website Development',
    description: 'Custom, high-performance websites that convert visitors into customers. From landing pages to complex web applications.',
    features: [
      'Responsive Design',
      'SEO Optimized',
      'Fast Loading',
      'Mobile-First',
      'Analytics Integration',
      'CMS Integration'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    pricing: 'Starting from $2,500',
    timeline: '2-6 weeks'
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps for iOS and Android. Beautiful, functional, and built for scale.',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-Platform',
      'App Store Optimization',
      'Push Notifications',
      'Offline Functionality'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    pricing: 'Starting from $5,000',
    timeline: '3-8 weeks'
  },
  {
    id: 'custom-saas',
    title: 'Custom SaaS Development',
    description: 'We build software products from scratch. Turn your idea into a fully functional SaaS platform.',
    features: [
      'Full-Stack Development',
      'Scalable Architecture',
      'Cloud-Native',
      'Multi-tenant',
      'Payment Integration',
      'Admin Dashboard'
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'],
    pricing: 'Starting from $15,000',
    timeline: '8-16 weeks'
  },
  {
    id: 'seo',
    title: 'SEO & Search Marketing',
    description: 'Dominate search rankings and drive organic traffic. Technical SEO, content strategy, and link building.',
    features: [
      'Technical SEO Audit',
      'Keyword Research',
      'Content Strategy',
      'Link Building',
      'Local SEO',
      'Analytics & Reporting'
    ],
    technologies: ['Google Analytics', 'Search Console', 'Ahrefs', 'SEMrush'],
    pricing: 'Starting from $1,500/month',
    timeline: 'Ongoing'
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Strategic social media management that builds brand awareness and drives engagement across all platforms.',
    features: [
      'Content Strategy',
      'Content Creation',
      'Community Management',
      'Paid Advertising',
      'Influencer Outreach',
      'Analytics & Reporting'
    ],
    technologies: ['Meta Business', 'LinkedIn Ads', 'Twitter Ads', 'TikTok Ads'],
    pricing: 'Starting from $2,000/month',
    timeline: 'Ongoing'
  },
  {
    id: 'courses',
    title: 'Development Courses',
    description: 'Learn to build with our expert-led courses. From coding basics to advanced software architecture.',
    features: [
      'Self-Paced Learning',
      '1-on-1 Mentorship',
      'Real Projects',
      'Certification',
      'Career Support',
      'Community Access'
    ],
    technologies: ['JavaScript', 'React', 'Node.js', 'Python', 'AWS'],
    pricing: 'Starting from $500',
    timeline: '4-12 weeks'
  },
]

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Full-Stack Digital Services<br />
              <span className="gradient-text">For Modern Businesses</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              From websites to mobile apps, SEO to custom software — we deliver complete digital solutions that drive growth and transform businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-8 md:p-12"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-accent">
                      {service.title}
                    </h2>
                    <p className="text-muted text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="font-semibold mb-4">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, j) => (
                            <li key={j} className="flex items-center gap-2 text-muted">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-4">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, j) => (
                            <span
                              key={j}
                              className="px-3 py-1 bg-surface-light rounded-full text-xs text-muted-dark"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="card p-6 bg-surface-light">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-muted">Investment</span>
                        <span className="font-display text-2xl font-bold text-accent">
                          {service.pricing}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted">Timeline</span>
                        <span className="font-semibold">{service.timeline}</span>
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
                      <a
                        href="https://calendly.com/pascal-digny/consultation-meeting"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex-1 text-center"
                      >
                        Learn More
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-muted text-lg mb-8">
            Let's discuss your project and create a custom solution that drives real results.
          </p>
          <a
            href="https://calendly.com/pascal-digny/consultation-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4"
          >
            Book Your Free Consultation
          </a>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  )
}