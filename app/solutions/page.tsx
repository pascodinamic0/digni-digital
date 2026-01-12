'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'

const solutions = [
  {
    id: 'lead-generation',
    title: 'Lead Generation & Growth',
    subtitle: 'Turn Visitors Into Customers',
    problem: 'Struggling to attract quality leads consistently? Your current marketing efforts aren\'t generating the pipeline you need to grow.',
    solution: 'We build comprehensive lead generation engines that work 24/7. From optimized websites and conversion funnels to targeted advertising and SEO strategies that bring qualified prospects to your door.',
    impact: 'Predictable pipeline of qualified prospects flowing into your business every month, with clear ROI tracking and optimization.',
    features: [
      'High-Converting Landing Pages',
      'Lead Capture & Nurturing Systems',
      'SEO & Content Marketing',
      'Paid Advertising Management',
      'Conversion Rate Optimization',
      'Analytics & Attribution Tracking'
    ],
    deliverables: [
      'Custom lead generation website',
      'Email marketing automation',
      'Social media advertising campaigns',
      'SEO strategy and implementation',
      'Lead scoring and qualification system',
      'Monthly performance reports'
    ],
    timeline: '4-8 weeks',
    investment: 'Starting from $5,000'
  },
  {
    id: 'operational-efficiency',
    title: 'Operational Efficiency',
    subtitle: 'Automate Your Way to Scale',
    problem: 'Manual processes eating up your team\'s time? Disconnected tools causing errors and inefficiencies? You\'re spending more time on admin than growing your business.',
    solution: 'Custom CRM systems, automated workflows, seamless integrations, and real-time analytics dashboards that eliminate manual work and give you complete visibility into your operations.',
    impact: '10x productivity increase and error-free operations that scale with your growth, freeing your team to focus on high-value activities.',
    features: [
      'Custom CRM Development',
      'Workflow Automation',
      'System Integrations',
      'Real-time Dashboards',
      'Process Optimization',
      'Team Collaboration Tools'
    ],
    deliverables: [
      'Fully integrated CRM system',
      'Automated business processes',
      'Real-time analytics dashboard',
      'Team training and documentation',
      'System maintenance and support',
      'Performance monitoring setup'
    ],
    timeline: '6-12 weeks',
    investment: 'Starting from $10,000'
  },
  {
    id: 'customer-experience',
    title: 'Customer Experience Transformation',
    subtitle: 'Delight Every Customer, Every Time',
    problem: 'Losing clients due to poor experience? Inconsistent touchpoints and confusing customer journeys are driving potential clients away before they can see your value.',
    solution: 'End-to-end customer journey mapping, personalized messaging systems, retention automation, and experience optimization that turns customers into raving fans.',
    impact: 'Higher customer satisfaction, increased lifetime value, and powerful referral engines that drive organic growth through word-of-mouth.',
    features: [
      'Customer Journey Mapping',
      'Personalization Systems',
      'Retention Automation',
      'Feedback Collection & Analysis',
      'Loyalty Program Development',
      'Customer Support Optimization'
    ],
    deliverables: [
      'Complete customer journey audit',
      'Personalized communication system',
      'Automated retention campaigns',
      'Customer feedback platform',
      'Loyalty program implementation',
      'Customer success metrics dashboard'
    ],
    timeline: '6-10 weeks',
    investment: 'Starting from $7,500'
  }
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Audit',
    description: 'We analyze your current systems, identify bottlenecks, and map out opportunities for growth.',
    duration: '1-2 weeks'
  },
  {
    step: '02',
    title: 'Strategy & Planning',
    description: 'Custom growth infrastructure blueprint tailored to your business goals and constraints.',
    duration: '1 week'
  },
  {
    step: '03',
    title: 'Development & Implementation',
    description: 'Building and deploying your growth systems with regular progress updates and feedback loops.',
    duration: '4-10 weeks'
  },
  {
    step: '04',
    title: 'Testing & Optimization',
    description: 'Rigorous testing, performance optimization, and fine-tuning for maximum impact.',
    duration: '1-2 weeks'
  },
  {
    step: '05',
    title: 'Launch & Support',
    description: 'Smooth launch with team training, documentation, and ongoing support for continued success.',
    duration: 'Ongoing'
  }
]

export default function SolutionsPage() {
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
              Our Solutions
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 px-2">
              We don't just fix problems.{' '}
              <br className="hidden sm:block" />
              <span className="gradient-text">We build growth engines.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed px-2">
              Comprehensive growth infrastructure solutions that transform chaos into clients and turn your business into a predictable, scalable growth machine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-16">
            {solutions.map((solution, i) => (
              <motion.div
                key={solution.id}
                id={solution.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="animated-border p-8 md:p-12"
              >
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-accent">
                      {solution.title}
                    </h2>
                    <p className="text-xl font-medium mb-8 text-muted">
                      {solution.subtitle}
                    </p>
                    
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-sm uppercase tracking-wider text-muted-dark mb-3">The Problem</h4>
                        <p className="text-muted leading-relaxed">{solution.problem}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm uppercase tracking-wider text-muted-dark mb-3">Our Solution</h4>
                        <p className="text-white leading-relaxed">{solution.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm uppercase tracking-wider text-muted-dark mb-3">The Impact</h4>
                        <p className="text-success leading-relaxed">{solution.impact}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="card p-6 bg-surface-light">
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <span className="text-muted text-sm">Timeline</span>
                          <p className="font-semibold">{solution.timeline}</p>
                        </div>
                        <div>
                          <span className="text-muted text-sm">Investment</span>
                          <p className="font-display text-xl font-bold text-accent">{solution.investment}</p>
                        </div>
                      </div>
                      
                      <a
                        href="https://calendly.com/pascal-digny/consultation-meeting"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full text-center"
                      >
                        Get Started
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-4">What's Included</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, j) => (
                          <li key={j} className="flex items-center gap-2 text-muted">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-4">Key Deliverables</h4>
                      <ul className="space-y-2">
                        {solution.deliverables.map((deliverable, j) => (
                          <li key={j} className="flex items-center gap-2 text-muted">
                            <div className="w-1.5 h-1.5 bg-success rounded-full" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Our Proven Process
            </h2>
            <p className="text-muted text-lg">
              A systematic approach to building your growth infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, i) => (
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
                <p className="text-muted text-sm mb-2 leading-relaxed">{step.description}</p>
                <span className="text-xs text-accent font-medium">{step.duration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Comparison Section */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Before vs. After
            </h2>
            <p className="text-muted text-lg">
              See the transformation our solutions deliver
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8 border-destructive/20"
            >
              <h3 className="font-display text-2xl font-bold mb-6 text-destructive">
                Before: The Chaos
              </h3>
              <ul className="space-y-4">
                {[
                  'Manual processes eating up valuable time',
                  'Disconnected tools causing data silos',
                  'Inconsistent customer experiences',
                  'No visibility into what\'s working',
                  'Team burnout from repetitive tasks',
                  'Missed opportunities and lost revenue',
                  'Scaling feels impossible and overwhelming'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted">
                    <span className="text-destructive mt-1">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8 border-success/20"
            >
              <h3 className="font-display text-2xl font-bold mb-6 text-success">
                After: The Growth Engine
              </h3>
              <ul className="space-y-4">
                {[
                  'Automated systems running 24/7',
                  'Integrated tools providing unified insights',
                  'Consistent, delightful customer journeys',
                  'Real-time analytics and optimization',
                  'Team focused on high-value activities',
                  'Predictable revenue and growth',
                  'Scaling becomes systematic and sustainable'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted">
                    <span className="text-success mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Your Growth Engine?
          </h2>
          <p className="text-muted text-lg mb-8">
            Let's discuss which solution is right for your business and create a custom implementation plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/pascal-digny/consultation-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Book Strategy Session
            </a>
            <a
              href="/case-studies"
              className="btn-secondary text-lg px-8 py-4"
            >
              See Success Stories
            </a>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  )
}