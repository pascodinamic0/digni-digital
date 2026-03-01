import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-lg">
        <div className="flex items-center justify-center mb-8">
          <div className="w-14 h-14 relative flex items-center justify-center">
            <div className="absolute w-7 h-10 bg-accent transform -skew-x-12 -translate-x-0.5 rounded-sm" style={{ opacity: 0.9 }} />
            <div className="absolute w-7 h-10 bg-accent transform skew-x-12 translate-x-0.5 rounded-sm" style={{ opacity: 0.4 }} />
          </div>
        </div>
        <h1 className="font-display text-6xl font-bold text-text mb-4">404</h1>
        <h2 className="font-display text-2xl font-semibold text-text mb-4">Page Not Found</h2>
        <p className="text-muted mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary px-6 py-3 text-center">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-secondary px-6 py-3 text-center">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}
