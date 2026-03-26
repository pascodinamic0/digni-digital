import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }
  const { db } = gate

  let body: {
    fullName?: string
    email?: string | null
    phone?: string | null
    company?: string | null
    source?: string | null
    notes?: string | null
    tags?: string[]
  }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const row: Record<string, unknown> = {}
  if (body.fullName !== undefined) row.full_name = body.fullName.trim() || null
  if (body.email !== undefined) row.email = body.email?.trim() || null
  if (body.phone !== undefined) row.phone = body.phone?.trim() || null
  if (body.company !== undefined) row.company = body.company?.trim() || null
  if (body.source !== undefined) row.source = body.source?.trim() || null
  if (body.notes !== undefined) row.notes = body.notes?.trim() || null
  if (body.tags !== undefined) row.tags = body.tags

  if (Object.keys(row).length === 0) {
    return NextResponse.json({ error: 'No fields to update' }, { status: 400 })
  }

  const { data, error } = await db.from('contacts').update(row).eq('id', id).select().single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ contact: data })
}
