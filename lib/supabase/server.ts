import { createServerClient } from '@supabase/ssr'
import type { SupabaseClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
import { isSupabaseAnonConfigured } from '@/lib/supabase/config'

export async function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()
  if (!url || !key) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY')
  }

  const cookieStore = await cookies()

  return createServerClient(url, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        } catch {
          /* Server Component — ignore if not mutable */
        }
      },
    },
  })
}

/** Prefer this on public pages so missing env never becomes a 5xx. */
export async function tryCreateClient(): Promise<SupabaseClient | null> {
  if (!isSupabaseAnonConfigured()) return null
  try {
    return await createClient()
  } catch {
    return null
  }
}
