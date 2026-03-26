import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'

export async function GET() {
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }
  const { db } = gate

  const { data: rows } = await db.from('social_post_queue').select('*').order('created_at', { ascending: false })
  return NextResponse.json({ items: rows ?? [] })
}

export async function POST(request: Request) {
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }
  const { db } = gate

  let body: { blogPostId?: string; provider?: string; payload?: Record<string, unknown>; scheduledFor?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body.provider?.trim()) {
    return NextResponse.json({ error: 'provider required (e.g. linkedin, x)' }, { status: 400 })
  }

  const { data, error } = await db
    .from('social_post_queue')
    .insert({
      blog_post_id: body.blogPostId ?? null,
      provider: body.provider,
      payload: body.payload ?? {},
      status: 'queued',
      scheduled_for: body.scheduledFor ?? null,
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ item: data })
}
