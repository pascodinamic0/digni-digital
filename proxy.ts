import createMiddleware from 'next-intl/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { routing } from './i18n/routing'
import { detectLocaleFromRequest } from './i18n/locale-detection'

const CANONICAL_HOST = 'digni-digital-llc.com'

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

  const countryHeader = request.headers.get('x-vercel-ip-country')
  const acceptLanguage = request.headers.get('accept-language')
  const defaultLocale = detectLocaleFromRequest(countryHeader, acceptLanguage)

  const handleI18nRouting = createMiddleware({
    ...routing,
    defaultLocale,
  })

  const response = handleI18nRouting(request)
  if (response && request.nextUrl.pathname) {
    response.headers.set('x-pathname', request.nextUrl.pathname)
  }
  return response
}

export const config = {
  matcher: [
    '/((?!api|trpc|_next|_vercel|sitemap\\.xml|robots\\.txt|.*\\..*).*)',
    '/((?!_next/static|_next/image|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\.(?:ico|png|jpg|jpeg|gif|webp|svg|mp4|pdf|docx|doc|xml|txt)).*)',
  ],
}
