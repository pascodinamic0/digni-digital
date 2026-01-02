'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import AnimatedSection from '../components/AnimatedSection'
import FloatingShapes from '../components/FloatingShapes'

const contactMethods = [
  {
    title: 'Book a Consultation',
    description: 'Schedule a free 30-minute strategy call to discuss your project',
    icon: '📅',
    action: 'Book Now',
    href: 'https://calendly.com/pascal-digny/consultation-meeting',
    primary: true
  },
  {
    title: 'Send an Email',
    description: 'Reach out directly for questions or project inquiries',
    icon: '✉️',
    action: 'hello@dignidigital.com',
    href: 'mailto:hello@dignidigital.com'
  },
  {
    title: 'WhatsApp',
    description: 'Quick questions? Message us on WhatsApp',
    icon: '💬',
    action: 'Message Us',
    href: 'https://wa.me/1234567890' // Replace with actual WhatsApp number
  },
  {
    title: 'LinkedIn',
    description: 'Connect with us professionally on LinkedIn',
    icon: '💼',
    action: 'Connect',
    href: 'https://linkedin.com/company/digni-digital' // Replace with actual LinkedIn
  }
]

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. Simple websites take 2-4 weeks, while custom SaaS applications can take 8-16 weeks. We provide detailed timelines during our consultation.'
  },
  {
    question: 'Do you work with businesses outside Africa?',
    answer: 'Absolutely! While we\'re based in Africa, we serve clients globally. We work with businesses across different time zones and have experience with international projects.'
  },
  {
    question: 'What\'s included in your consultation?',
    answer: 'Our free consultation includes a business analysis, technology audit, growth opportunity identification, and a custom strategy roadmap. No obligation, just actionable insights.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer various support packages including maintenance, updates, hosting, and optimization services. We believe in long-term partnerships with our clients.'
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We work across various industries including healthcare, real estate, e-commerce, professional services, and more. Our growth infrastructure approach adapts to any business model.'
  },
  {
    question: 'Can you help with existing systems?',
    answer: 'Definitely! We can audit, optimize, and integrate with your existing systems. Sometimes the best solution is improving what you already have rather than starting from scratch.'
  }
]

export default function ContactPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    projectType: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with your preferred form handling service
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
              Get In Touch
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Let's Build Something<br />
              <span className="gradient-text">Amazing Together</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business? We'd love to hear about your project and discuss how we can help you achieve your growth goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <AnimatedSection className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Choose Your Preferred Way to Connect
            </h2>
            <p className="text-muted text-lg">
              We're here to help and respond quickly to all inquiries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`card p-8 text-center group hover:border-accent/50 ${
                  method.primary ? 'border-accent/30 glow-accent' : ''
                }`}
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="font-display text-xl font-bold mb-3">{method.title}</h3>
                <p className="text-muted text-sm mb-6 leading-relaxed">{method.description}</p>
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`${method.primary ? 'btn-primary' : 'btn-secondary'} w-full`}
                >
                  {method.action}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Form */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Send Us a Message
            </h2>
            <p className="text-muted text-lg">
              Prefer to write? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
          
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="card p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-surface-light border border-white/10 rounded-lg focus:border-accent/50 focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-surface-light border border-white/10 rounded-lg focus:border-accent/50 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-surface-light border border-white/10 rounded-lg focus:border-accent/50 focus:outline-none transition-colors"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-surface-light border border-white/10 rounded-lg focus:border-accent/50 focus:outline-none transition-colors"
                >
                  <option value="">Select a project type</option>
                  <option value="website">Website Development</option>
                  <option value="mobile-app">Mobile Application</option>
                  <option value="saas">Custom SaaS</option>
                  <option value="seo">SEO & Marketing</option>
                  <option value="automation">Business Automation</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-surface-light border border-white/10 rounded-lg focus:border-accent/50 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
              />
            </div>
            
            <div className="text-center">
              <button type="submit" className="btn-primary text-lg px-8 py-4">
                Send Message
              </button>
              <p className="text-muted text-sm mt-4">
                We'll respond within 24 hours with next steps
              </p>
            </div>
          </motion.form>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-muted text-lg">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 cursor-pointer"
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-display font-semibold text-lg pr-4">{faq.question}</h3>
                  <span className="text-accent text-xl flex-shrink-0">
                    {expandedFaq === i ? '−' : '+'}
                  </span>
                </div>
                
                <motion.div
                  initial={false}
                  animate={{ height: expandedFaq === i ? 'auto' : 0, opacity: expandedFaq === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-muted mt-4 leading-relaxed">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-muted text-lg mb-8">
            The best way to get answers is to talk directly. Book a free consultation and we'll address all your questions personally.
          </p>
          <a
            href="https://calendly.com/pascal-digny/consultation-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4"
          >
            Book Free Consultation
          </a>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  )
}