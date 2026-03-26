import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'

export async function GET() {
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }
  const { db } = gate

  const { data: rows, error } = await db
    .from('program_applications')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ rows: rows ?? [] })
}
