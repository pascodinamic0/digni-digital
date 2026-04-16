'use client'

import { useState } from 'react'
import { useLocale } from '@/app/context/LocaleContext'
import type { CheckoutPlanKey } from '@/lib/stripe/checkout-plans'

type StripeCheckoutButtonProps = {
  plan: CheckoutPlanKey
  className?: string
  children: React.ReactNode
  disabled?: boolean
  redirectingLabel?: string
}

export default function StripeCheckoutButton({
  plan,
  className,
  children,
  disabled,
  redirectingLabel = 'Redirecting…',
}: StripeCheckoutButtonProps) {
  const locale = useLocale()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onClick() {
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan, locale }),
      })
      const data = (await res.json()) as { url?: string; error?: string }
      if (!res.ok) {
        setError(data.error ?? 'Something went wrong')
        return
      }
      if (data.url) {
        window.location.href = data.url
        return
      }
      setError('No redirect URL')
    } catch {
      setError('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full">
      <button type="button" onClick={onClick} disabled={disabled || loading} className={className}>
        {loading ? redirectingLabel : children}
      </button>
      {error ? <p className="text-destructive text-sm mt-2 text-center">{error}</p> : null}
    </div>
  )
}
