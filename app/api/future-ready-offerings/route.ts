import { NextResponse } from 'next/server'
import { createAdminClient, isSupabaseServiceConfigured } from '@/lib/supabase/admin'
import { normalizeOffering, visibleDefaultFutureReadyOfferings } from '@/lib/future-ready-offerings'

export async function GET() {
  if (!isSupabaseServiceConfigured()) {
    return NextResponse.json({ offerings: visibleDefaultFutureReadyOfferings() })
  }

  const db = createAdminClient()
  const { data, error } = await db
    .from('program_offerings')
    .select('*')
    .eq('is_visible', true)
    .order('sort_order', { ascending: true })

  if (error) {
    return NextResponse.json({ offerings: visibleDefaultFutureReadyOfferings() })
  }

  return NextResponse.json({ offerings: (data ?? []).map(normalizeOffering) })
}
