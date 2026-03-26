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
    stageId?: string
    title?: string | null
    context?: string | null
    valueCents?: number | null
  }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const row: Record<string, unknown> = {}
  if (body.stageId !== undefined) row.stage_id = body.stageId
  if (body.title !== undefined) row.title = body.title
  if (body.context !== undefined) row.context = body.context
  if (body.valueCents !== undefined) row.value_cents = body.valueCents

  if (Object.keys(row).length === 0) {
    return NextResponse.json({ error: 'Provide stageId, title, context, or valueCents' }, { status: 400 })
  }

  const { error } = await db.from('deals').update(row).eq('id', id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ ok: true })
}
