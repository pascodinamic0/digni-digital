import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'

export async function GET() {
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }
  const { db } = gate

  const { data: posts } = await db.from('blog_posts').select('*').order('updated_at', { ascending: false })
  return NextResponse.json({ posts: posts ?? [] })
}

export async function POST(request: Request) {
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }
  const { user, db } = gate

  let body: {
    slug?: string
    title?: string
    excerpt?: string
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

  if (!body.slug?.trim() || !body.title?.trim() || !body.bodyMd?.trim()) {
    return NextResponse.json({ error: 'slug, title, bodyMd required' }, { status: 400 })
  }

  const locale = body.locale ?? 'us-en'
  const status = body.status ?? 'draft'
  const publishedAt =
    status === 'published' ? new Date().toISOString() : null

  const { data, error } = await db
    .from('blog_posts')
    .upsert(
      {
        slug: body.slug.trim(),
        title: body.title.trim(),
        excerpt: body.excerpt ?? null,
        body_md: body.bodyMd,
        locale,
        status,
        published_at: publishedAt,
        cover_image_url: body.coverImageUrl ?? null,
        tags: body.tags ?? null,
        category: body.category ?? null,
        read_time: body.readTime ?? null,
        created_by: user.id,
      },
      { onConflict: 'slug,locale' }
    )
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ post: data })
}
