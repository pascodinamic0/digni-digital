import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'
import { normalizeOffering } from '@/lib/future-ready-offerings'

type OfferingPatch = {
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

function buildUpdates(body: OfferingPatch) {
  const updates: Record<string, unknown> = {}

  if (body.slug !== undefined) updates.slug = body.slug.trim()
  if (body.name !== undefined) updates.name = body.name.trim()
  if (body.price !== undefined) updates.price = body.price.trim()
  if (body.period !== undefined) updates.period = body.period.trim()
  if (body.priceOptions !== undefined) updates.price_options = body.priceOptions
  if (body.description !== undefined) updates.description = body.description.trim()
  if (body.features !== undefined) updates.features = body.features.map((feature) => feature.trim()).filter(Boolean)
  if (body.popular !== undefined) updates.popular = body.popular
  if (body.comingSoon !== undefined) updates.coming_soon = body.comingSoon
  if (body.isNew !== undefined) updates.is_new = body.isNew
  if (body.spotsAvailable !== undefined) updates.spots_available = body.spotsAvailable
  if (body.isVisible !== undefined) updates.is_visible = body.isVisible
  if (body.sortOrder !== undefined) updates.sort_order = body.sortOrder

  if (body.audience !== undefined) {
    if (!AUDIENCES.has(body.audience)) return { error: 'Invalid audience' }
    updates.audience = body.audience
  }

  if (body.ctaMode !== undefined) {
    if (!CTA_MODES.has(body.ctaMode)) return { error: 'Invalid CTA mode' }
    updates.cta_mode = body.ctaMode
  }

  return { updates }
}

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }

  const { data, error } = await gate.db.from('program_offerings').select('*').eq('id', id).maybeSingle()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  if (!data) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  return NextResponse.json({ offering: normalizeOffering(data) })
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }

  let body: OfferingPatch
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const result = buildUpdates(body)
  if ('error' in result) {
    return NextResponse.json({ error: result.error }, { status: 400 })
  }

  if (Object.keys(result.updates).length === 0) {
    return NextResponse.json({ error: 'No fields to update' }, { status: 400 })
  }

  const { data, error } = await gate.db
    .from('program_offerings')
    .update(result.updates)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ offering: normalizeOffering(data) })
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }

  const { error } = await gate.db.from('program_offerings').delete().eq('id', id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
