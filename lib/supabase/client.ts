import { createBrowserClient } from '@supabase/ssr'
import { isSupabaseAnonConfigured } from '@/lib/supabase/config'

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()
  if (!url || !key) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY')
  }
  return createBrowserClient(url, key)
}

export function tryCreateBrowserClient() {
  if (!isSupabaseAnonConfigured()) return null
  try {
    return createClient()
  } catch {
    return null
  }
}
