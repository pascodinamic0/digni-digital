import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'

export async function GET(request: Request) {
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')?.trim()
  const locale = searchParams.get('locale')?.trim() ?? 'us-en'
  if (!slug) {
    return NextResponse.json({ error: 'slug required' }, { status: 400 })
  }

  const { data, error } = await gate.db
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('locale', locale)
    .maybeSingle()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ post: data })
}
