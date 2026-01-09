'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
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

  const navLinks = [
    { name: 'Our Mission', href: '/#our-mission' },
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
  ]

  const rightNavLinks = [
    { name: 'Articles', href: '/blog' },
  ]

  const solutionLinks = [
    { 
      name: 'AI Employee', 
      href: '/ai-receptionist',
      description: 'Never miss a lead with 24/7 AI-powered employee'
    },
    { 
      name: 'Future Ready Graduate', 
      href: '/future-ready-graduate',
      description: 'Transform students into job ready professionals'
    },
    { 
      name: 'Custom SaaS', 
      href: '/custom-saas',
      description: 'Tailored software solutions for unique challenges'
    },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 relative flex items-center justify-center">
              <div className="absolute w-5 h-7 bg-accent/90 transform -skew-x-12 -translate-x-0.5 group-hover:skew-x-0 transition-transform duration-300" />
              <div className="absolute w-5 h-7 bg-accent/40 transform skew-x-12 translate-x-0.5 group-hover:skew-x-0 transition-transform duration-300" />
            </div>
            <span className="font-display font-semibold text-xl">Digni Digital LLC</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted hover:text-white transition-colors duration-200 text-sm font-medium"
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
                aria-label="Solutions menu"
                className="text-muted hover:text-white transition-colors duration-200 text-sm font-medium flex items-center gap-1"
              >
                Solutions
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
                  className="absolute top-full left-0 mt-2 w-80 bg-surface border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl z-50"
                >
                  <div className="p-2">
                    {solutionLinks.map((solution) => (
                      <Link
                        key={solution.name}
                        href={solution.href}
                        onClick={() => setSolutionsOpen(false)}
                        className="block p-4 rounded-lg hover:bg-white/5 transition-colors group"
                      >
                        <div className="font-medium text-white group-hover:text-accent transition-colors">
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
                key={link.name}
                href={link.href}
                className="text-muted hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="https://calendly.com/pascal-digny/consultation-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Get Started
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
              <span className={`h-0.5 bg-white transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 bg-white transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            id="mobile-menu"
            role="menu"
            className="lg:hidden mt-4 pb-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-3 text-muted hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Solutions Section */}
            <div className="py-3">
              <div className="text-muted font-medium mb-2">Solutions</div>
              {solutionLinks.map((solution) => (
                <Link
                  key={solution.name}
                  href={solution.href}
                  className="block py-2 pl-4 text-sm text-muted hover:text-white transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {solution.name}
                </Link>
              ))}
            </div>

            {/* Right Navigation Links in Mobile */}
            {rightNavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-3 text-muted hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <a
              href="https://calendly.com/pascal-digny/consultation-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 w-full text-center block"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}