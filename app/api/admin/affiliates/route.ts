import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'
import type { AffiliateApplicationRow } from '@/lib/types/database'

function csvCell(value: string | null | undefined): string {
  const s = String(value ?? '')
  if (/[",\n\r]/.test(s)) {
    return `"${s.replace(/"/g, '""')}"`
  }
  return s
}

function rowsToCsv(rows: AffiliateApplicationRow[]): string {
  const headers = [
    'Submitted',
    'Name',
    'Email',
    'Phone',
    'Instagram',
    'TikTok',
    'YouTube',
    'Audience size',
    'Message',
    'Locale',
  ]
  const lines = [headers.join(',')]
  for (const r of rows) {
    lines.push(
      [
        csvCell(r.created_at),
        csvCell(r.name),
        csvCell(r.email),
        csvCell(r.phone),
        csvCell(r.instagram),
        csvCell(r.tiktok),
        csvCell(r.youtube),
        csvCell(r.audience_size),
        csvCell(r.message),
        csvCell(r.locale),
      ].join(',')
    )
  }
  return lines.join('\r\n')
}

export async function GET(request: Request) {
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }
  const { db } = gate

  const { searchParams } = new URL(request.url)
  const format = searchParams.get('format')

  const { data: rows, error } = await db
    .from('affiliate_applications')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  const list = (rows ?? []) as AffiliateApplicationRow[]

  if (format === 'csv') {
    // UTF-8 BOM helps Excel recognize encoding when opening the file
    const csv = '\uFEFF' + rowsToCsv(list)
    const filename = `affiliate-applications-${new Date().toISOString().slice(0, 10)}.csv`
    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    })
  }

  return NextResponse.json({ rows: list })
}
