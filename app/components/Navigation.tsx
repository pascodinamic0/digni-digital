'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link, usePathname } from '@/i18n/navigation'
import { getBookingLinkProps } from '@/app/config/cta.config'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import ThemeToggle from './ThemeToggle'
import LanguageToggler from './LanguageToggler'

export default function Navigation() {
  const pathname = usePathname()
  const language = useLanguage()
  const t = translations[language]
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isBlogPage = pathname?.startsWith('/blog') ?? false
  const showSolidNav = scrolled || mobileOpen || isBlogPage
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false)
      }
    }

    if (solutionsOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [solutionsOpen])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const navLinks = [
    { name: t.nav.ourMission, href: '/#our-mission' },
    { name: t.nav.aboutUs, href: '/about' },
    { name: t.nav.caseStudies, href: '/case-studies' },
  ]

  const rightNavLinks = [
    { name: t.nav.articles, href: '/blog' },
    { name: t.nav.contact, href: '/contact' },
  ]

  const solutionLinks = [
    { name: t.nav.aiEmployee, href: '/ai-receptionist', description: t.nav.aiEmployeeDesc },
    { name: t.nav.futureReadyGraduate, href: '/future-ready-graduate', description: t.nav.futureReadyGraduateDesc },
    { name: t.nav.agenticSoftwares, href: '/agentic-softwares', description: t.nav.agenticSoftwaresDesc },
  ]

  return (
    <>
      {/* Backdrop overlay - covers entire screen when mobile menu is open */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMobileOpen(false)}
          className="site-header-overlay fixed inset-0 bg-background z-[45] lg:hidden"
        />
      )}
      
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`site-header-nav fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-background/95 backdrop-blur-xl border-b border-border ${
          showSolidNav ? 'shadow-sm' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 relative flex items-center justify-center">
              <div className="absolute w-5 h-7 bg-accent transform -skew-x-12 -translate-x-0.5 group-hover:skew-x-0 transition-transform duration-300 rounded-sm" style={{ opacity: 0.9 }} />
              <div className="absolute w-5 h-7 bg-accent transform skew-x-12 translate-x-0.5 group-hover:skew-x-0 transition-transform duration-300 rounded-sm" style={{ opacity: 0.4 }} />
            </div>
            <span className="font-display font-semibold text-xl transition-colors duration-300 text-text">Digni Digital LLC</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-accent transition-colors duration-300 text-sm font-medium text-text"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Solutions Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                aria-expanded={solutionsOpen}
                aria-haspopup="true"
                aria-label={`${t.nav.solutions} menu`}
                className="hover:text-accent transition-colors duration-300 text-sm font-medium flex items-center gap-1 text-text"
              >
                {t.nav.solutions}
                <svg className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {solutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  role="menu"
                  aria-label="Solutions submenu"
                  className="absolute top-full left-0 mt-2 w-80 bg-surface border border-border-light rounded-xl shadow-2xl backdrop-blur-xl z-50"
                >
                  <div className="p-2">
                    {solutionLinks.map((solution) => (
                      <Link
                        key={solution.href}
                        href={solution.href}
                        onClick={() => setSolutionsOpen(false)}
                        className="block p-4 rounded-lg hover:bg-foreground/5 transition-colors group"
                      >
                        <div className="font-medium text-text group-hover:text-accent transition-colors">
                          {solution.name}
                        </div>
                        <div className="text-sm text-muted mt-1">
                          {solution.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Navigation Links (Blog) */}
            {rightNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-accent transition-colors duration-300 text-sm font-medium text-text"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <LanguageToggler variant="compact" />
            <ThemeToggle />
            <a
              {...getBookingLinkProps()}
              className="btn-primary text-sm"
            >
              {t.cta.getStarted}
            </a>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle mobile menu"
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 transition-all bg-text ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 transition-all bg-text ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 transition-all bg-text ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-menu"
            role="menu"
            className="site-header-nav-mobile lg:hidden mt-4 pb-4 relative z-50 bg-background"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-text hover:text-accent transition-colors font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Solutions Section */}
            <div className="py-3">
              <div className="text-text font-semibold mb-2">{t.nav.solutions}</div>
              {solutionLinks.map((solution) => (
                <Link
                  key={solution.href}
                  href={solution.href}
                  className="block py-2 pl-4 text-sm text-text hover:text-accent transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {solution.name}
                </Link>
              ))}
            </div>

            {/* Right Navigation Links in Mobile */}
            {rightNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-text hover:text-accent transition-colors font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-border-light">
              <div className="flex items-center gap-2">
                <LanguageToggler variant="full" className="flex-1" />
              </div>
              <div className="flex items-center justify-end flex-1">
                <ThemeToggle />
              </div>
            </div>
            
            <a
              {...getBookingLinkProps()}
              className="btn-primary mt-4 w-full text-center block"
            >
              {t.cta.getStarted}
            </a>
          </motion.div>
        )}
        </div>
      </motion.nav>
    </>
  )
}