'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import FloatingShapes from '../components/FloatingShapes'

export default function CustomSaaSPage() {
  const ourApps = [
    {
      title: 'Proposal Agent',
      description: 'AI-powered proposal generation platform that helps businesses create winning proposals in minutes.',
      category: 'Business Automation',
      status: 'Live',
      link: 'https://proposal-agent.com',
      tech: ['Next.js', 'OpenAI API', 'Supabase', 'Stripe'],
      icon: '📝'
    },
    {
      title: 'TaskFlow Pro',
      description: 'Advanced project management and team collaboration platform with AI-driven insights.',
      category: 'Productivity',
      status: 'Beta',
      link: 'https://taskflow-pro.com',
      tech: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
      icon: '⚡'
    },
    {
      title: 'DataViz Studio',
      description: 'Interactive data visualization tool that transforms complex datasets into compelling stories.',
      category: 'Analytics',
      status: 'Coming Soon',
      link: '#',
      tech: ['D3.js', 'Python', 'FastAPI', 'MongoDB'],
      icon: '📊'
    },
    {
      title: 'ContentCraft AI',
      description: 'Content creation platform that generates marketing copy, blogs, and social media content.',
      category: 'Marketing',
      status: 'Live',
      link: 'https://contentcraft-ai.com',
      tech: ['Vue.js', 'GPT-4', 'Redis', 'AWS'],
      icon: '✍️'
    }
  ]

  const services = [
    {
      title: 'MVP Development',
      description: 'Turn your idea into a working product in 8-12 weeks. Perfect for startups and new business ventures.',
      process: ['Discovery & Planning', 'UI/UX Design', 'Core Development', 'Testing & Launch'],
      timeline: '8-12 weeks',
      icon: '🚀'
    },
    {
      title: 'Enterprise Software',
      description: 'Custom business applications that scale with your organization. Built for performance and security.',
      process: ['Requirements Analysis', 'Architecture Design', 'Development & Integration', 'Deployment & Training'],
      timeline: '3-6 months',
      icon: '🏢'
    },
    {
      title: 'SaaS Platform Development',
      description: 'Complete multi-tenant platforms with subscription management, user roles, and advanced features.',
      process: ['Market Research', 'Platform Architecture', 'Full-Stack Development', 'Go-to-Market Support'],
      timeline: '6-12 months',
      icon: '☁️'
    }
  ]

  const technologies = [
    {
      category: 'Frontend',
      tools: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
      icon: '🎨'
    },
    {
      category: 'Backend',
      tools: ['Node.js', 'Python', 'PHP', 'PostgreSQL', 'MongoDB'],
      icon: '⚙️'
    },
    {
      category: 'Cloud & DevOps',
      tools: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD Pipelines'],
      icon: '☁️'
    },
    {
      category: 'Mobile',
      tools: ['React Native', 'Flutter', 'iOS', 'Android', 'Progressive Web Apps'],
      icon: '📱'
    }
  ]

  const caseStudies = [
    {
      title: 'Proposal Agent',
      type: 'Internal Project',
      industry: 'Business Automation',
      challenge: 'Businesses spend countless hours creating proposals manually, often missing opportunities due to slow turnaround times.',
      solution: 'Developed AI-powered proposal generation platform that creates professional proposals in minutes using advanced language models.',
      results: [
        { metric: '90%', description: 'Faster proposal creation' },
        { metric: '10k+', description: 'Proposals generated' },
        { metric: '4.8/5', description: 'User satisfaction rating' }
      ],
      tech: ['Next.js', 'OpenAI API', 'Supabase', 'Stripe'],
      timeline: '3 months',
      status: 'Live & Growing'
    },
    {
      title: 'HealthTrack Pro',
      type: 'Client Project',
      industry: 'Healthcare',
      challenge: 'Medical practice needed custom patient management system with HIPAA compliance and insurance integration.',
      solution: 'Built comprehensive practice management SaaS with appointment scheduling, billing, and patient portal.',
      results: [
        { metric: '60%', description: 'Reduction in administrative time' },
        { metric: '$200k', description: 'Annual cost savings' },
        { metric: '95%', description: 'Patient satisfaction score' }
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      timeline: '4 months',
      status: 'Successfully Deployed'
    }
  ]

  const process = [
    {
      phase: 'Discovery',
      duration: '1-2 weeks',
      activities: ['Stakeholder interviews', 'Requirements gathering', 'Technical feasibility analysis', 'Project roadmap creation'],
      deliverables: ['Requirements document', 'Technical specification', 'Project timeline', 'Cost estimate']
    },
    {
      phase: 'Design',
      duration: '2-3 weeks',
      activities: ['User experience design', 'System architecture', 'Database design', 'API specification'],
      deliverables: ['UI/UX mockups', 'System architecture diagram', 'Database schema', 'API documentation']
    },
    {
      phase: 'Development',
      duration: '8-20 weeks',
      activities: ['Agile development sprints', 'Regular client reviews', 'Quality assurance testing', 'Performance optimization'],
      deliverables: ['Working software', 'Test reports', 'Documentation', 'Training materials']
    },
    {
      phase: 'Launch & Support',
      duration: 'Ongoing',
      activities: ['Deployment to production', 'User training', 'Performance monitoring', 'Feature enhancements'],
      deliverables: ['Live application', 'Support documentation', 'Monitoring setup', 'Maintenance plan']
    }
  ]

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
            <span className="inline-block px-4 py-2 bg-blue-400/10 border border-blue-400/30 rounded-full text-blue-400 text-sm font-medium mb-6">
              SaaS Innovation & Development
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 md:mb-8">
              From Idea to<br />
              <span className="gradient-text">Industry Leader</span>
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed mb-8 md:mb-10">
              We don't just build software – we create market-defining SaaS platforms. 
              From our own successful applications like Proposal Agent to transformative client solutions, 
              we turn ambitious visions into profitable realities.
            </p>
            <div className="flex justify-center">
              <a
                href="https://calendly.com/pascal-digny/consultation-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                Build Your Success Story
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our SaaS Applications */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">
              Our SaaS<br />
              <span className="gradient-text">Applications</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              We don't just build for clients – we innovate for ourselves. 
              Here are some of the SaaS applications we've developed to solve real-world challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ourApps.map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 md:p-8 hover:border-blue-400/50 group"
              >
                <div className="flex items-start justify-between mb-6 gap-4">
                  <div className="flex items-center gap-3 md:gap-4 min-w-0">
                    <div className="w-12 h-12 bg-blue-400/10 rounded-xl flex items-center justify-center text-xl md:text-2xl flex-shrink-0">
                      {app.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg md:text-xl font-bold group-hover:text-blue-400 transition-colors">
                        {app.title}
                      </h3>
                      <span className="text-sm text-muted-dark">{app.category}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full flex-shrink-0 ${
                    app.status === 'Live' ? 'bg-green-400/10 text-green-400' :
                    app.status === 'Beta' ? 'bg-yellow-400/10 text-yellow-400' :
                    'bg-blue-400/10 text-blue-400'
                  }`}>
                    {app.status}
                  </span>
                </div>

                <p className="text-muted leading-relaxed mb-6">{app.description}</p>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark mb-2 block">Technologies</span>
                    <div className="flex flex-wrap gap-2">
                      {app.tech.map((tech, j) => (
                        <span
                          key={j}
                          className="px-2 py-1 bg-surface-light rounded text-xs text-muted-dark"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {app.status === 'Live' && (
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full"
                    >
                      View Application
                    </a>
                  )}
                  {app.status === 'Beta' && (
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full"
                    >
                      Request Beta Access
                    </a>
                  )}
                  {app.status === 'Coming Soon' && (
                    <button className="btn-outline w-full cursor-not-allowed" disabled>
                      Coming Soon
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Custom Development<br />
              <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              Leveraging our experience building our own successful SaaS applications, 
              we help clients transform their ideas into powerful software solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 md:p-8 hover:border-blue-400/50 group"
              >
                <div className="text-center mb-6 md:mb-8">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-400/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl md:text-3xl">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-6">{service.description}</p>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-dark">Timeline:</span>
                    <span className="text-blue-400 font-medium">{service.timeline}</span>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark mb-2 block">Process</span>
                    <div className="space-y-2">
                      {service.process.map((step, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-blue-400/10 rounded-full flex items-center justify-center text-xs font-bold text-blue-400">
                            {j + 1}
                          </div>
                          <span className="text-sm text-muted">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="https://calendly.com/pascal-digny/consultation-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full text-center"
                  >
                    Discuss Your Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Technologies */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Modern Technology<br />
              <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              We use proven, scalable technologies to build software that performs today and adapts tomorrow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="text-3xl md:text-4xl mb-4">{tech.icon}</div>
                <h3 className="font-display text-base md:text-lg font-bold mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.tools.map((tool, j) => (
                    <div key={j} className="text-sm text-muted">{tool}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Case Studies */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Success Stories<br />
              <span className="gradient-text">Internal & Client Projects</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              From our own innovative SaaS applications to transformative client solutions, 
              see how we turn ideas into successful software products.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="card p-6 md:p-8 lg:p-12"
              >
                <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                          study.type === 'Internal Project' 
                            ? 'bg-purple-400/10 text-purple-400' 
                            : 'bg-blue-400/10 text-blue-400'
                        }`}>
                          {study.type}
                        </span>
                        <span className="px-3 py-1 bg-surface-light text-muted-dark text-xs font-medium rounded-full">
                          {study.industry}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold">{study.title}</h3>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-dark">Challenge</span>
                        <p className="text-muted mt-2 leading-relaxed">{study.challenge}</p>
                      </div>

                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-dark">Solution</span>
                        <p className="text-white mt-2 leading-relaxed">{study.solution}</p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                        <div>
                          <span className="text-xs uppercase tracking-wider text-muted-dark">Timeline</span>
                          <p className="text-blue-400 font-medium mt-1">{study.timeline}</p>
                        </div>
                        <div>
                          <span className="text-xs uppercase tracking-wider text-muted-dark">Status</span>
                          <p className="text-accent font-medium mt-1">{study.status}</p>
                        </div>
                      </div>

                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-dark">Technologies</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {study.tech.map((tech, j) => (
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

                  <div className="mt-6 lg:mt-0">
                    <h4 className="font-display text-lg md:text-xl font-bold mb-4 md:mb-6">Results</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-6">
                      {study.results.map((result, j) => (
                        <div key={j} className="text-center">
                          <div className="font-display text-2xl md:text-3xl font-bold text-blue-400 mb-2">
                            {result.metric}
                          </div>
                          <p className="text-muted text-sm">{result.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Our Development<br />
              <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              Transparent, collaborative, and designed to deliver results on time and on budget.
            </p>
          </div>

          <div className="space-y-8">
            {process.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 md:p-8"
              >
                <div className="grid lg:grid-cols-4 gap-4 md:gap-6">
                  <div>
                    <div className="flex items-center gap-3 md:gap-4 mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="font-display font-bold text-blue-400 text-sm md:text-base">{i + 1}</span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-lg md:text-xl font-bold">{phase.phase}</h3>
                        <span className="text-blue-400 text-sm font-medium">{phase.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-dark mb-2 block">Activities</span>
                    <div className="space-y-1">
                      {phase.activities.map((activity, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                          <span className="text-sm text-muted">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <span className="text-xs uppercase tracking-wider text-muted-dark mb-2 block">Deliverables</span>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {phase.deliverables.map((deliverable, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          <span className="text-sm text-muted">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-muted text-lg mb-8">
            Whether you have an idea for the next big SaaS application or need a custom solution for your business, 
            let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/pascal-digny/consultation-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Start Your Project
            </a>
            <Link href="/case-studies" className="btn-secondary text-lg px-8 py-4">
              View More Case Studies
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  )
}