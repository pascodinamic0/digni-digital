'use client'

import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function AIReceptionistFooter() {
  const links = {
    services: [
      { name: 'AI Employee', href: '/ai-receptionist' },
      { name: 'Future Ready Graduate', href: '/future-ready-graduate' },
      { name: 'Custom SaaS Development', href: '/custom-saas' },
    ],
    resources: [
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog', href: '/blog' },
      { name: 'Our Mission', href: '/#our-mission' },
      { name: 'What We Fight For', href: '/#what-were-fighting-for' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
  }

  return (
    <footer id="contact" className="border-t border-white/5">
      {/* Standard Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6 group cursor-pointer">
                <div className="w-10 h-10 relative flex items-center justify-center">
                  <div className="absolute w-5 h-7 bg-accent transform -skew-x-12 -translate-x-0.5 group-hover:skew-x-0 transition-transform duration-300 rounded-sm" style={{ opacity: 0.9 }} />
                  <div className="absolute w-5 h-7 bg-accent transform skew-x-12 translate-x-0.5 group-hover:skew-x-0 transition-transform duration-300 rounded-sm" style={{ opacity: 0.4 }} />
                </div>
                <span className="font-display font-semibold text-xl">Digni Digital LLC</span>
              </Link>
              <p className="text-muted mb-6 max-w-sm">
                Technology should serve humanity. We build digital solutions that create 
                real impact for businesses, schools, and communities.
              </p>
              <a
                href="https://calendly.com/pascal-digny/consultation-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get Started
              </a>
            </div>

            <div>
              <h4 className="font-display font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                {links.services.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                {links.resources.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {links.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted text-sm">
              &copy; {new Date().getFullYear()} Digni Digital. All rights reserved.
            </p>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}
