'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type ColorType = 'blue' | 'accent' | 'success' | 'purple' | 'orange'

interface Step {
  id: string
  title: string
  description: string
  icon: JSX.Element
  metrics: string[]
  color: ColorType
}

const BusinessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps: Step[] = [
    {
      id: 'lead',
      title: 'Lead Arrives',
      description: 'Customer reaches out via any channel',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="8.5" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 8V14L17 11L20 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      metrics: ['Website', 'SMS', 'Social', 'Phone'],
      color: 'blue'
    },
    {
      id: 'response',
      title: 'Instant AI Reply',
      description: 'AI responds within 2 seconds with personalized message',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      metrics: ['<2s Response', '24/7 Available', 'Natural Language', 'Context Aware'],
      color: 'accent'
    },
    {
      id: 'qualification',
      title: 'Contact Saved',
      description: 'AI captures and stores all contact information automatically to your CRM',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M19 7L21 9L19 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      metrics: ['Auto Contact Capture', 'CRM Integration', 'Database Storage', 'Info Validation'],
      color: 'success'
    },
    {
      id: 'appointment',
      title: 'Appointment Booked',
      description: 'AI schedules meeting directly into your calendar',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
          <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 14H16M8 18H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      metrics: ['Real-time Sync', 'Auto Confirmation', 'Reminder Setup', 'Calendar Block'],
      color: 'purple'
    },
    {
      id: 'followup',
      title: 'Smart Follow-Up',
      description: 'Automated nurture sequence with database reactivation keeps leads warm until meeting',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 10L20 14M20 10L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      metrics: ['Database Reactivation', 'Email Sequences', 'SMS Reminders', 'Engagement Tracking'],
      color: 'orange'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [steps.length])

  const getColorClasses = (color: ColorType, isActive = false) => {
    const colors = {
      blue: {
        bg: isActive ? 'bg-blue-500' : 'bg-blue-500/20',
        text: 'text-blue-400',
        border: 'border-blue-400/30',
        glow: 'shadow-blue-500/20'
      },
      accent: {
        bg: isActive ? 'bg-accent' : 'bg-accent/20',
        text: 'text-accent',
        border: 'border-accent/30',
        glow: 'shadow-accent/20'
      },
      success: {
        bg: isActive ? 'bg-success' : 'bg-success/20',
        text: 'text-success',
        border: 'border-success/30',
        glow: 'shadow-success/20'
      },
      purple: {
        bg: isActive ? 'bg-purple-500' : 'bg-purple-500/20',
        text: 'text-purple-400',
        border: 'border-purple-400/30',
        glow: 'shadow-purple-500/20'
      },
      orange: {
        bg: isActive ? 'bg-orange-500' : 'bg-orange-500/20',
        text: 'text-orange-400',
        border: 'border-orange-400/30',
        glow: 'shadow-orange-500/20'
      }
    }
    return colors[color] || colors.accent
  }

  return (
    <section className="py-24" aria-labelledby="timeline-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-medium text-sm uppercase tracking-wider"
          >
            Business Impact
          </motion.span>
          <motion.h2
            id="timeline-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            From First Contact<br />
            <span className="gradient-text">To Closed Deal</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-lg max-w-3xl mx-auto"
          >
            Watch how our AI transforms every lead into a structured sales opportunity, 
            automatically moving prospects through your funnel while you focus on closing deals.
          </motion.p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-surface-light">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-accent via-success via-purple-500 to-orange-500"
                initial={{ width: '0%' }}
                animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              />
            </div>

            {/* Timeline Steps */}
            <div className="grid grid-cols-5 gap-8">
              {steps.map((step, index) => {
                const isActive = index <= activeStep
                const isCurrent = index === activeStep
                const colorClasses = getColorClasses(step.color, isActive)

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Step Circle */}
                    <div className="flex justify-center mb-6">
                      <motion.div
                        className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                          isActive 
                            ? `${colorClasses.bg} ${colorClasses.border} shadow-lg ${colorClasses.glow}` 
                            : 'bg-surface border-muted-dark/30'
                        }`}
                        animate={isCurrent ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className={isActive ? 'text-white' : 'text-muted'}>
                          {step.icon}
                        </div>
                      </motion.div>
                    </div>

                    {/* Step Content */}
                    <div className="text-center">
                      <h3 className={`font-display text-lg font-bold mb-2 transition-colors duration-300 ${
                        isActive ? colorClasses.text : 'text-muted'
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-muted text-sm mb-4 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Metrics */}
                      <div className="space-y-2">
                        {step.metrics.map((metric, metricIndex) => (
                          <motion.div
                            key={metricIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isCurrent ? { opacity: 1, x: 0 } : { opacity: 0.6, x: 0 }}
                            transition={{ delay: metricIndex * 0.1 }}
                            className={`text-xs px-3 py-1 rounded-full border ${
                              isCurrent 
                                ? `${colorClasses.bg} ${colorClasses.border} text-white` 
                                : 'bg-surface-light border-muted-dark/30 text-muted'
                            }`}
                          >
                            {metric}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Step Number */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      <div className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                        isActive ? 'bg-white text-background' : 'bg-muted-dark text-muted'
                      }`}>
                        {index + 1}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const isActive = index <= activeStep
            const isCurrent = index === activeStep
            const colorClasses = getColorClasses(step.color, isActive)

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                {/* Step Circle */}
                <div className="flex flex-col items-center">
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                      isActive 
                        ? `${colorClasses.bg} ${colorClasses.border} shadow-lg ${colorClasses.glow}` 
                        : 'bg-surface border-muted-dark/30'
                    }`}
                    animate={isCurrent ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className={isActive ? 'text-white' : 'text-muted'}>
                      {step.icon}
                    </div>
                  </motion.div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-16 bg-surface-light mt-4" />
                  )}
                </div>

                {/* Step Content */}
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                      isActive ? 'bg-white text-background' : 'bg-muted-dark text-muted'
                    }`}>
                      {index + 1}
                    </div>
                    <h3 className={`font-display text-lg font-bold transition-colors duration-300 ${
                      isActive ? colorClasses.text : 'text-muted'
                    }`}>
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2">
                    {step.metrics.map((metric, metricIndex) => (
                      <motion.div
                        key={metricIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isCurrent ? { opacity: 1, scale: 1 } : { opacity: 0.6, scale: 1 }}
                        transition={{ delay: metricIndex * 0.1 }}
                        className={`text-xs px-3 py-1 rounded-full border ${
                          isCurrent 
                            ? `${colorClasses.bg} ${colorClasses.border} text-white` 
                            : 'bg-surface-light border-muted-dark/30 text-muted'
                        }`}
                      >
                        {metric}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Timeline Controls */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeStep === index ? 'bg-accent scale-125' : 'bg-muted-dark hover:bg-muted'
                }`}
                aria-label={`View step ${index + 1}: ${steps[index].title}`}
              />
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-3 gap-8 mt-16 p-8 bg-surface-light rounded-2xl border border-accent/10"
        >
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-accent mb-2">3x</div>
            <p className="text-muted text-sm">Faster Lead Response</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-success mb-2">85%</div>
            <p className="text-muted text-sm">Lead-to-Appointment Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-display font-bold text-blue-400 mb-2">24/7</div>
            <p className="text-muted text-sm">Never Miss Another Lead</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BusinessTimeline