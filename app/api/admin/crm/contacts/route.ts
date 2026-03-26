import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'

export async function POST(request: Request) {
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }
  const { db } = gate

  let body: {
    email?: string
    phone?: string
    fullName?: string
    company?: string
    source?: string
    tags?: string[]
  }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body.fullName?.trim()) {
    return NextResponse.json({ error: 'fullName required' }, { status: 400 })
  }

  const { data, error } = await db
    .from('contacts')
    .insert({
      email: body.email ?? null,
      phone: body.phone ?? null,
      full_name: body.fullName,
      company: body.company ?? null,
      source: body.source ?? 'manual',
      tags: body.tags ?? [],
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ contact: data })
}
