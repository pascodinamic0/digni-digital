import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'
import { parseSortOrder } from '@/lib/lms/validate'

export async function POST(request: Request) {
  const gate = await verifyAdminApi()
  if (!gate.ok) return NextResponse.json({ error: gate.error }, { status: gate.status })
  const { db } = gate

  let body: { moduleId?: string; title?: string; body?: string | null; video_url?: string | null; sort_order?: number }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body.moduleId?.trim() || !body.title?.trim()) {
    return NextResponse.json({ error: 'moduleId and title required' }, { status: 400 })
  }

  const { data: mod } = await db.from('modules').select('id').eq('id', body.moduleId).maybeSingle()
  if (!mod) return NextResponse.json({ error: 'Module not found' }, { status: 404 })

  const { data, error } = await db
    .from('lessons')
    .insert({
      module_id: body.moduleId,
      title: body.title.trim(),
      body: body.body ?? null,
      video_url: body.video_url?.trim() || null,
      sort_order: parseSortOrder(body.sort_order, 0),
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ lesson: data })
}
