'use client'

import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-text mb-2">
            Privacy Policy
          </h1>
          <p className="text-muted text-sm mb-10">
            Last updated: {new Date().toLocaleDateString('en-US')}
          </p>
          <div className="prose prose-invert prose-sm max-w-none text-muted space-y-6">
            <p>
              Digni Digital LLC (&quot;we&quot;, &quot;our&quot;) respects your privacy. This policy describes how we collect, use, and protect your information when you use our website and services.
            </p>
            <h2 className="font-display font-semibold text-text text-lg mt-8">Information we collect</h2>
            <p>
              We may collect information you provide directly (e.g. name, email, company when you contact us or subscribe to our newsletter), usage data (e.g. pages visited, referring site), and technical data (e.g. IP address, browser type) for security and analytics.
            </p>
            <h2 className="font-display font-semibold text-text text-lg mt-8">How we use it</h2>
            <p>
              We use your information to respond to inquiries, send requested content or newsletters, improve our site and services, and comply with legal obligations.
            </p>
            <h2 className="font-display font-semibold text-text text-lg mt-8">Sharing and security</h2>
            <p>
              We do not sell your personal data. We may share data with service providers (e.g. email delivery, analytics) under strict agreements. We take reasonable measures to protect your data.
            </p>
            <h2 className="font-display font-semibold text-text text-lg mt-8">Your rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct, delete, or restrict processing of your data, or to opt out of marketing. Contact us to exercise these rights.
            </p>
            <h2 className="font-display font-semibold text-text text-lg mt-8">Contact</h2>
            <p>
              For privacy-related questions: <a href="mailto:hq@digni-digital-llc.com" className="text-accent hover:underline">hq@digni-digital-llc.com</a>. Our full contact details are on the <Link href="/contact" className="text-accent hover:underline">Contact</Link> page.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
