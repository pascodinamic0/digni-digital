import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const CANONICAL_HOST = 'digni-digital-llc.com'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? ''
  const normalizedHost = host.toLowerCase().replace(/:\d+$/, '')

  // Only redirect on production domain; leave localhost / dev untouched
  if (normalizedHost !== CANONICAL_HOST && normalizedHost !== `www.${CANONICAL_HOST}`) {
    return NextResponse.next()
  }

  const url = request.nextUrl
  const proto = request.headers.get('x-forwarded-proto') ?? 'https'
  const isWrongHost = normalizedHost.startsWith('www.')
  const isHttp = proto === 'http'

  if (isWrongHost || isHttp) {
    const canonicalUrl = new URL(url.pathname + url.search, `https://${CANONICAL_HOST}`)
    return NextResponse.redirect(canonicalUrl, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static files and Next.js internals.
     * Skip _next, api, favicon, etc.
     */
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:ico|png|jpg|jpeg|gif|webp|svg|mp4|pdf|docx|doc)).*)',
  ],
}
