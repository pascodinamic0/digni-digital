import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'
import { normalizeOffering } from '@/lib/future-ready-offerings'

type OfferingPayload = {
  slug?: string
  name?: string
  price?: string
  period?: string
  priceOptions?: { amount: string; period: string }[]
  description?: string
  audience?: string
  features?: string[]
  popular?: boolean
  comingSoon?: boolean
  isNew?: boolean
  spotsAvailable?: number | null
  ctaMode?: string
  isVisible?: boolean
  sortOrder?: number
}

const AUDIENCES = new Set(['schools', 'professional', 'everyone', 'custom'])
const CTA_MODES = new Set(['school', 'professional', 'guided', 'consultation'])

function cleanPayload(body: OfferingPayload) {
  const slug = body.slug?.trim()
  const name = body.name?.trim()
  const price = body.price?.trim()
  const period = body.period?.trim()
  const description = body.description?.trim()

  if (!slug || !name || !price || !period || !description) {
    return { error: 'slug, name, price, period, and description are required' }
  }

  if (body.audience && !AUDIENCES.has(body.audience)) {
    return { error: 'Invalid audience' }
  }

  if (body.ctaMode && !CTA_MODES.has(body.ctaMode)) {
    return { error: 'Invalid CTA mode' }
  }

  return {
    data: {
      slug,
      name,
      price,
      period,
      price_options: body.priceOptions ?? [],
      description,
      audience: body.audience ?? 'custom',
      features: body.features?.map((feature) => feature.trim()).filter(Boolean) ?? [],
      popular: body.popular ?? false,
      coming_soon: body.comingSoon ?? false,
      is_new: body.isNew ?? false,
      spots_available: body.spotsAvailable ?? null,
      cta_mode: body.ctaMode ?? 'consultation',
      is_visible: body.isVisible ?? true,
      sort_order: body.sortOrder ?? 0,
    },
  }
}

export async function GET() {
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }

  const { data, error } = await gate.db.from('program_offerings').select('*').order('sort_order', { ascending: true })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ offerings: (data ?? []).map(normalizeOffering) })
}

export async function POST(request: Request) {
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }

  let body: OfferingPayload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const payload = cleanPayload(body)
  if ('error' in payload) {
    return NextResponse.json({ error: payload.error }, { status: 400 })
  }

  const { data, error } = await gate.db.from('program_offerings').insert(payload.data).select().single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ offering: normalizeOffering(data) })
}
