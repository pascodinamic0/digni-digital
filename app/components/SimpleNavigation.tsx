'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { ctaConfig, getBookingLinkProps } from '@/app/config/cta.config'

export default function SimpleNavigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-xl border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/ai-receptionist" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 relative flex items-center justify-center">
              <div className="absolute w-5 h-7 bg-accent transform -skew-x-12 -translate-x-0.5 group-hover:skew-x-0 transition-transform duration-300 rounded-sm" style={{ opacity: 0.9 }} />
              <div className="absolute w-5 h-7 bg-accent transform skew-x-12 translate-x-0.5 group-hover:skew-x-0 transition-transform duration-300 rounded-sm" style={{ opacity: 0.4 }} />
            </div>
            <span className="font-display font-semibold text-xl">System</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/case-studies" className="text-muted hover:text-white transition-colors text-sm font-medium">
              Case Studies
            </Link>
            <a
              {...getBookingLinkProps()}
              className="btn-primary text-sm px-6 py-2"
            >
              {ctaConfig.buttonText.getStarted}
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
