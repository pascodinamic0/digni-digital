import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import {
  SITE_FEATURE_FLAG_KEYS,
  SITE_FEATURE_FLAG_META,
  type SiteFeatureFlagKey,
} from '@/lib/site-feature-flags-constants'
import { verifyAdminApi } from '@/lib/auth/admin-api'
import { locales } from '@/i18n/routing'

const ALLOWED_KEYS = new Set<string>(Object.values(SITE_FEATURE_FLAG_KEYS))

export async function GET() {
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }

  const { data, error } = await gate.db.from('site_feature_flags').select('flag_key, enabled').order('flag_key')

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  /** Ensure defined keys appear even before first insert */
  const byKey = new Map((data ?? []).map((row) => [row.flag_key, row.enabled]))

  const flags = Object.values(SITE_FEATURE_FLAG_KEYS).map((key) => ({
    flagKey: key,
    enabled: byKey.has(key) ? Boolean(byKey.get(key)) : true,
    ...(SITE_FEATURE_FLAG_META[key as SiteFeatureFlagKey] ?? {
      label: key,
      description: '',
    }),
  }))

  return NextResponse.json({ flags })
}

export async function PATCH(request: Request) {
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const flagKey =
    typeof body === 'object' && body !== null && 'flagKey' in body
      ? String((body as { flagKey?: unknown }).flagKey ?? '').trim()
      : ''
  const enabled =
    typeof body === 'object' &&
    body !== null &&
    'enabled' in body &&
    typeof (body as { enabled?: unknown }).enabled === 'boolean'
      ? (body as { enabled: boolean }).enabled
      : null

  if (!flagKey || !ALLOWED_KEYS.has(flagKey) || enabled === null) {
    return NextResponse.json({ error: 'flagKey and enabled (boolean) are required' }, { status: 400 })
  }

  const { error } = await gate.db.from('site_feature_flags').upsert(
    { flag_key: flagKey, enabled },
    { onConflict: 'flag_key' },
  )

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  for (const locale of locales) {
    revalidatePath(`/${locale}/ai-receptionist`)
  }

  return NextResponse.json({ ok: true, flagKey, enabled })
}
