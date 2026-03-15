'use client'

import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'
import { getCtaButtonText, getBookingLinkProps } from '@/app/config/cta.config'
import { useLanguage } from '@/app/context/LocaleContext'

export default function SimpleNavigation() {
  const language = useLanguage()
  const cta = getCtaButtonText(language)
  return (
    <motion.nav
      aria-label="Main navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-background/95 backdrop-blur-xl border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo href="/ai-receptionist" label="System" />

          <div className="hidden md:flex items-center gap-8">
            <Link href="/case-studies" className="text-muted hover:text-accent transition-colors text-sm font-medium">
              Case Studies
            </Link>
            <a
              {...getBookingLinkProps()}
              className="btn-primary text-sm px-6 py-2"
            >
              {cta.getStarted}
            </a>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
