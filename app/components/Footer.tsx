import Link from 'next/link'

export default function Footer() {
  const links = {
    services: [
      { name: 'Web Development', href: '/services#web-development' },
      { name: 'Mobile Apps', href: '/services#mobile-apps' },
      { name: 'Custom SaaS', href: '/services#custom-saas' },
      { name: 'SEO', href: '/services#seo' },
      { name: 'Social Media', href: '/services#social-media' },
      { name: 'Courses', href: '/services#courses' },
    ],
    products: [
      { name: 'ProposalAgent', href: '/products#proposal-agent' },
      { name: 'CRM Lite', href: '/products#crm-lite' },
      { name: 'Invoice AI', href: '/products#invoice-ai' },
      { name: 'Social Assistant', href: '/products#social-assistant' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
    ],
  }

  return (
    <footer id="contact" className="py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="w-10 h-10 relative flex items-center justify-center">
                <div className="absolute w-5 h-7 bg-accent/90 transform -skew-x-12 -translate-x-0.5 group-hover:skew-x-0 transition-transform duration-300" />
                <div className="absolute w-5 h-7 bg-accent/40 transform skew-x-12 translate-x-0.5 group-hover:skew-x-0 transition-transform duration-300" />
              </div>
              <span className="font-display font-semibold text-xl">Digni Digital LLC</span>
            </Link>
            <p className="text-muted mb-6 max-w-sm">
              We Build Growth Infrastructures That Turn Chaos Into Clients.
              Strategic systems, intelligent automation, and purpose-built products.
            </p>
            <a
              href="https://calendly.com/pascal-digny/consultation-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Consultation
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
            <h4 className="font-display font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {links.products.map((link) => (
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
          <p className="text-muted text-sm">
            Trusted by Businesses Across Africa & Beyond
          </p>
        </div>
      </div>
    </footer>
  )
}