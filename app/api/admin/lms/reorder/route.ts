import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'
import { parseSortOrder } from '@/lib/lms/validate'

type Item = { id: string; sort_order: number }

export async function POST(request: Request) {
  const gate = await verifyAdminApi()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })
  const { db } = gate

  let body: { entity?: 'modules' | 'lessons'; items?: Item[] }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (body.entity !== 'modules' && body.entity !== 'lessons') {
    return NextResponse.json({ error: 'entity must be modules or lessons' }, { status: 400 })
  }
  if (!Array.isArray(body.items) || body.items.length === 0) {
    return NextResponse.json({ error: 'items required' }, { status: 400 })
  }

  const table = body.entity === 'modules' ? 'modules' : 'lessons'
  for (const it of body.items) {
    if (!it.id) continue
    const so = parseSortOrder(it.sort_order, 0)
    const { error } = await db.from(table).update({ sort_order: so }).eq('id', it.id)
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
