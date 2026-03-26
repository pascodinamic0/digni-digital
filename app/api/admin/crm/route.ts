import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'

export async function GET() {
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }
  const { db } = gate

  const [{ data: pipelines }, { data: stages }, { data: deals }, { data: contacts }] = await Promise.all([
    db.from('pipelines').select('*').order('sort_order'),
    db.from('pipeline_stages').select('*').order('sort_order'),
    db.from('deals').select('*').order('updated_at', { ascending: false }),
    db.from('contacts').select('*').order('created_at', { ascending: false }),
  ])

  return NextResponse.json({
    pipelines: pipelines ?? [],
    stages: stages ?? [],
    deals: deals ?? [],
    contacts: contacts ?? [],
  })
}
