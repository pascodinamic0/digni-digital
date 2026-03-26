import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'
import { getFileBlogCatalogEntries } from '@/lib/blog/file-catalog'

export async function GET() {
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }

  const { data: dbPosts, error } = await gate.db
    .from('blog_posts')
    .select('id, slug, title, status, locale, excerpt, created_at, updated_at')
    .order('updated_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({
    filePosts: getFileBlogCatalogEntries(),
    dbPosts: dbPosts ?? [],
  })
}
