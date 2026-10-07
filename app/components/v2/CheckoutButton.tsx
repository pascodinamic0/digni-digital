'use client'
import { useState } from 'react'
import type { CheckoutPlanKey } from '@/lib/stripe/checkout-plans'

/** Starts a Stripe Checkout session via /api/checkout (unchanged API). */
export default function CheckoutButton({ plan, locale, label, busy, className = 'btn btn--accent' }: {
  plan: CheckoutPlanKey; locale: string; label: string; busy: string; className?: string
}) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  async function go() {
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ plan, locale }) })
      const data = (await res.json().catch(() => ({}))) as { url?: string; error?: string }
      if (res.ok && data.url) { window.location.href = data.url; return }
      setError(data.error ?? 'Checkout is unavailable right now. Please book a call.')
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="checkout">
      <button type="button" className={className} onClick={go} disabled={loading}>{loading ? busy : label}<span className="arr" aria-hidden>→</span></button>
      {error && <p className="form__err" role="alert">{error}</p>}
    </div>
  )
}
