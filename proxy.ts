import createMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { legacyLocaleRedirects, routing } from './i18n/routing'
import { detectLocaleFromRequest } from './i18n/locale-detection'
import { updateSession } from './lib/supabase/middleware'

const CANONICAL_HOST = 'digni-digital-llc.com'

/** Paths that must refresh the Supabase session (auth cookie + getUser). Marketing pages skip this to avoid a network round-trip on every navigation. */
function shouldRefreshSupabaseSession(pathname: string): boolean {
  if (
    pathname.startsWith('/admin') ||
    pathname.startsWith('/auth') ||
    pathname.startsWith('/api/admin') ||
    pathname.startsWith('/api/learn')
  ) {
    return true
  }
  // LMS lives under /[locale]/learn/...
  return pathname.split('/').some((segment) => segment === 'learn')
}

export default async function proxy(request: NextRequest) {
  const host = request.headers.get('host') ?? ''
  const normalizedHost = host.toLowerCase().replace(/:\d+$/, '')

  if (normalizedHost === CANONICAL_HOST || normalizedHost === `www.${CANONICAL_HOST}`) {
    const url = request.nextUrl
    const proto = request.headers.get('x-forwarded-proto') ?? 'https'
    const isWrongHost = normalizedHost.startsWith('www.')
    const isHttp = proto === 'http'
    if (isWrongHost || isHttp) {
      const canonicalUrl = new URL(url.pathname + url.search, `https://${CANONICAL_HOST}`)
      return NextResponse.redirect(canonicalUrl, 301)
    }
  }

  const pathname = request.nextUrl.pathname

  const legacySegment = pathname.split('/').filter(Boolean)[0]
  const canonicalLocale = legacySegment ? legacyLocaleRedirects[legacySegment] : undefined
  if (canonicalLocale) {
    const rest = pathname.slice(legacySegment.length + 1)
    const destination = new URL(`/${canonicalLocale}${rest}${request.nextUrl.search}`, request.url)
    return NextResponse.redirect(destination, 301)
  }

  // Non-localized admin/auth/API: session refresh for protected surfaces.
  if (
    pathname.startsWith('/admin') ||
    pathname.startsWith('/auth') ||
    pathname.startsWith('/api/admin') ||
    pathname.startsWith('/api/learn')
  ) {
    const response = NextResponse.next({ request })
    response.headers.set('x-pathname', pathname)
    return updateSession(request, response)
  }

  const countryHeader = request.headers.get('x-vercel-ip-country')
  const acceptLanguage = request.headers.get('accept-language')
  const defaultLocale = detectLocaleFromRequest(countryHeader, acceptLanguage)

  const handleI18nRouting = createMiddleware({
    ...routing,
    defaultLocale,
  })

  const response = handleI18nRouting(request)
  const resolvedPath = request.nextUrl.pathname
  if (response && resolvedPath) {
    response.headers.set('x-pathname', resolvedPath)
  }
  const next = response ?? NextResponse.next({ request })
  if (shouldRefreshSupabaseSession(resolvedPath)) {
    return updateSession(request, next)
  }
  return next
}

export const config = {
  matcher: [
    '/((?!api|trpc|_next|_vercel|sitemap\\.xml|robots\\.txt|.*\\..*).*)',
    '/api/admin/:path*',
    '/api/learn/:path*',
  ],
}
