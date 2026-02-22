'use client'

import { Link } from '@/i18n/navigation'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-text mb-2">
            Terms of Service
          </h1>
          <p className="text-muted text-sm mb-10">
            Last updated: {new Date().toLocaleDateString('en-US')}
          </p>
          <div className="prose prose-invert prose-sm max-w-none text-muted space-y-6">
            <p>
              By using the Digni Digital LLC website and services, you agree to these terms. If you do not agree, please do not use our site or services.
            </p>
            <h2 className="font-display font-semibold text-text text-lg mt-8">Use of the site</h2>
            <p>
              You may use our website for lawful purposes only. You may not attempt to gain unauthorized access to our systems, scrape or misuse content, or use the site in any way that could harm us or third parties.
            </p>
            <h2 className="font-display font-semibold text-text text-lg mt-8">Services and agreements</h2>
            <p>
              Specific services (e.g. AI Employee, Digni Digital Literacy, Agentic SaaS) are subject to separate agreements, statements of work, or terms presented at the time of engagement.
            </p>
            <h2 className="font-display font-semibold text-text text-lg mt-8">Intellectual property</h2>
            <p>
              Content on this site (text, graphics, logos, software) is owned by Digni Digital LLC or its licensors and is protected by copyright and other laws. You may not copy, modify, or distribute it without our written permission.
            </p>
            <h2 className="font-display font-semibold text-text text-lg mt-8">Limitation of liability</h2>
            <p>
              To the extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from your use of the site or our services. Our liability is limited to the amount you paid us in the twelve months before the claim.
            </p>
            <h2 className="font-display font-semibold text-text text-lg mt-8">Changes and contact</h2>
            <p>
              We may update these terms from time to time; the &quot;Last updated&quot; date will change. Continued use after changes constitutes acceptance. Questions: <a href="mailto:hq@digni-digital-llc.com" className="text-accent hover:underline">hq@digni-digital-llc.com</a> or <Link href="/contact" className="text-accent hover:underline">Contact</Link>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
