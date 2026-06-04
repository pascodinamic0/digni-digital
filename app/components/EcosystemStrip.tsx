'use client'

import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import AnimatedSection from '@/app/components/AnimatedSection'
import type { EcosystemTranslations } from '@/lib/positioning/ecosystem'

type EcosystemCopy = EcosystemTranslations

const COLUMNS = [
  { key: 'grow' as const, link: '/ai-receptionist', icon: '📈', color: 'accent' as const },
  { key: 'learn' as const, link: '/future-ready-graduate', icon: '🎓', color: 'success' as const },
  { key: 'scale' as const, link: '/agentic-softwares', icon: '⚙️', color: 'info' as const },
]

function columnCopy(e: EcosystemCopy, key: (typeof COLUMNS)[number]['key']) {
  if (key === 'grow') return { label: e.growLabel, title: e.growTitle, desc: e.growDesc }
  if (key === 'learn') return { label: e.learnLabel, title: e.learnTitle, desc: e.learnDesc }
  return { label: e.scaleLabel, title: e.scaleTitle, desc: e.scaleDesc }
}

type Props = {
  ecosystem: EcosystemCopy
  className?: string
  id?: string
}

export default function EcosystemStrip({
  ecosystem: e,
  className = 'py-24 bg-background',
  id = 'ecosystem',
}: Props) {
  return (
    <AnimatedSection id={id} className={className}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-label">{e.badge}</span>
          <h2 className="type-h2 font-display font-bold mt-4">
            {e.title}
            <br />
            <span className="gradient-text">{e.titleHighlight}</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {COLUMNS.map((col, i) => {
            const copy = columnCopy(e, col.key)
            return (
              <motion.div
                key={col.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={col.link}
                  className={`card block h-full p-8 transition-colors group ${
                    col.color === 'accent'
                      ? 'hover:border-accent/50'
                      : col.color === 'success'
                        ? 'hover:border-success/50'
                        : 'hover:border-info/50'
                  }`}
                >
                  <span
                    className={`type-caption font-bold uppercase tracking-wider ${
                      col.color === 'accent'
                        ? 'text-accent'
                        : col.color === 'success'
                          ? 'text-success'
                          : 'text-info'
                    }`}
                  >
                    {copy.label}
                  </span>
                  <div className="type-h3 mt-4 mb-3" aria-hidden>
                    {col.icon}
                  </div>
                  <h3 className="type-h4 font-display font-bold mb-3 group-hover:text-accent transition-colors">
                    {copy.title}
                  </h3>
                  <p className="type-small text-muted leading-relaxed">{copy.desc}</p>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
