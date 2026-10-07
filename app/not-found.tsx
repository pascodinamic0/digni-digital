import Link from 'next/link'
import { fontVars } from './fonts'
import './globals.css'
import './v2.css'

/** Global 404 for paths outside a locale (root layout is a passthrough, so render <html>). */
export default function NotFound() {
  return (
    <html lang="en" data-theme="light" className={fontVars}>
      <body>
        <main className="nf">
          <div className="wrap nf__in">
            <p className="eyebrow">404</p>
            <h1 className="h1">This page moved or never existed.</h1>
            <p className="lead">The site was rebuilt recently. Try one of these instead.</p>
            <div className="hero__ctas">
              <Link className="btn btn--dark" href="/us-en">Home</Link>
              <Link className="btn btn--line" href="/us-en/work">Work</Link>
              <Link className="btn btn--line" href="/us-en/services">Services</Link>
              <Link className="btn btn--line" href="/us-en/contact">Contact</Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
