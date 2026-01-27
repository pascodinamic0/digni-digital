import Link from 'next/link'

export default function SimpleFooter() {
  return (
    <footer className="py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Link href="/ai-receptionist" className="flex items-center justify-center gap-3 mb-6 group cursor-pointer">
            <div className="w-10 h-10 relative flex items-center justify-center">
              <div className="absolute w-5 h-7 bg-accent transform -skew-x-12 -translate-x-0.5 group-hover:skew-x-0 transition-transform duration-300 rounded-sm" style={{ opacity: 0.9 }} />
              <div className="absolute w-5 h-7 bg-accent transform skew-x-12 translate-x-0.5 group-hover:skew-x-0 transition-transform duration-300 rounded-sm" style={{ opacity: 0.4 }} />
            </div>
            <span className="font-display font-semibold text-xl">Digni Digital LLC</span>
          </Link>
          <p className="text-muted mb-8 max-w-lg mx-auto leading-relaxed">
            We build operational infrastructure that allows service businesses to grow without friction, waste, or human bottlenecks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="/case-studies" className="text-muted hover:text-white transition-colors text-sm">
              Case Studies
            </Link>
            <a
              href="https://calendly.com/pascal-digny/consultation-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-6 py-2"
            >
              Get Started
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-muted text-sm">
            &copy; {new Date().getFullYear()} Digni Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
