import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'

export async function POST(request: Request) {
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }
  const { user, db } = gate

  let body: {
    contactId?: string
    pipelineId?: string
    stageId?: string
    title?: string
    context?: string
    valueCents?: number
  }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body.contactId || !body.pipelineId || !body.stageId) {
    return NextResponse.json({ error: 'contactId, pipelineId, stageId required' }, { status: 400 })
  }

  const { data, error } = await db
    .from('deals')
    .insert({
      contact_id: body.contactId,
      pipeline_id: body.pipelineId,
      stage_id: body.stageId,
      title: body.title ?? null,
      context: body.context ?? null,
      value_cents: body.valueCents ?? null,
      owner_id: user.id,
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ deal: data })
}
