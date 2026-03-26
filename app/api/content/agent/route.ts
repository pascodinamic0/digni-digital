import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'

/** Secured draft creation for agents / automation — send header Authorization: Bearer <ADMIN_CONTENT_API_SECRET> */
export async function POST(request: Request) {
  const secret = process.env.ADMIN_CONTENT_API_SECRET
  if (!secret) {
    return NextResponse.json({ error: 'ADMIN_CONTENT_API_SECRET not configured' }, { status: 503 })
  }

  const auth = request.headers.get('authorization')
  const token = auth?.startsWith('Bearer ') ? auth.slice(7) : null
  if (token !== secret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: { slug?: string; title?: string; excerpt?: string; bodyMd?: string; locale?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body.slug?.trim() || !body.title?.trim() || !body.bodyMd?.trim()) {
    return NextResponse.json({ error: 'slug, title, bodyMd required' }, { status: 400 })
  }

  const admin = createAdminClient()
  const { data, error } = await admin
    .from('blog_posts')
    .upsert(
      {
        slug: body.slug.trim(),
        title: body.title.trim(),
        excerpt: body.excerpt ?? null,
        body_md: body.bodyMd,
        locale: body.locale ?? 'us-en',
        status: 'draft',
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
