import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }

  const { data, error } = await gate.db.from('blog_posts').select('*').eq('id', id).maybeSingle()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  if (!data) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
  return NextResponse.json({ post: data })
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }
  const { db } = gate

  let body: {
    slug?: string
    title?: string
    excerpt?: string | null
    bodyMd?: string
    locale?: string
    status?: 'draft' | 'review' | 'published'
    coverImageUrl?: string | null
    tags?: string[] | null
    category?: string | null
    readTime?: string | null
  }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const updates: Record<string, unknown> = {}
  if (body.slug !== undefined) updates.slug = body.slug.trim()
  if (body.title !== undefined) updates.title = body.title.trim()
  if (body.excerpt !== undefined) updates.excerpt = body.excerpt
  if (body.bodyMd !== undefined) updates.body_md = body.bodyMd
  if (body.locale !== undefined) updates.locale = body.locale.trim()
  if (body.coverImageUrl !== undefined) updates.cover_image_url = body.coverImageUrl
  if (body.tags !== undefined) updates.tags = body.tags
  if (body.category !== undefined) updates.category = body.category
  if (body.readTime !== undefined) updates.read_time = body.readTime

  if (body.status !== undefined) {
    updates.status = body.status
    if (body.status === 'published') {
      updates.published_at = new Date().toISOString()
    } else {
      updates.published_at = null
    }
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: 'No fields to update' }, { status: 400 })
  }

  const { data, error } = await db.from('blog_posts').update(updates).eq('id', id).select().single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ ok: true, post: data })
}
