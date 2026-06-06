'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export interface BlogFaqItem {
  question: string
  answer: string
}

interface BlogFaqAccordionProps {
  title: string
  subtitle?: string
  faqs: BlogFaqItem[]
}

export default function BlogFaqAccordion({ title, subtitle, faqs }: BlogFaqAccordionProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  if (!faqs.length) return null

  return (
    <section className="blog-faq-section mt-12" aria-labelledby="blog-faq-heading">
      <div className="text-center mb-10">
        <h2 id="blog-faq-heading" className="font-display text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>
        {subtitle ? <p className="text-muted text-lg">{subtitle}</p> : null}
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = expandedFaq === i
          return (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card p-6 cursor-pointer"
              onClick={() => setExpandedFaq(isOpen ? null : i)}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              aria-label={isOpen ? `Collapse FAQ: ${faq.question}` : `Expand FAQ: ${faq.question}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setExpandedFaq(isOpen ? null : i)
                }
              }}
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className="font-display font-semibold text-lg pr-4 text-left">{faq.question}</h3>
                <span className="text-accent text-xl flex-shrink-0" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </div>

              <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                className="overflow-hidden"
              >
                <p className="text-muted mt-4 leading-relaxed text-left">{faq.answer}</p>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
