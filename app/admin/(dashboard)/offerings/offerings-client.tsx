'use client'

import { useCallback, useEffect, useMemo, useState, type FormEvent } from 'react'
import type { FutureReadyOffering, OfferingAudience, OfferingCtaMode } from '@/lib/future-ready-offerings'

type FormState = {
  slug: string
  name: string
  price: string
  period: string
  description: string
  audience: OfferingAudience
  ctaMode: OfferingCtaMode
  featuresRaw: string
  priceOptionsRaw: string
  spotsAvailable: string
  popular: boolean
  comingSoon: boolean
  isNew: boolean
  isVisible: boolean
  sortOrder: string
}

const emptyForm: FormState = {
  slug: '',
  name: '',
  price: '',
  period: '',
  description: '',
  audience: 'custom',
  ctaMode: 'consultation',
  featuresRaw: '',
  priceOptionsRaw: '',
  spotsAvailable: '',
  popular: false,
  comingSoon: false,
  isNew: false,
  isVisible: true,
  sortOrder: '0',
}

const BOOLEAN_FIELDS: { key: 'isVisible' | 'popular' | 'isNew' | 'comingSoon'; label: string }[] = [
  { key: 'isVisible', label: 'Visible' },
  { key: 'popular', label: 'Popular' },
  { key: 'isNew', label: 'New badge' },
  { key: 'comingSoon', label: 'Coming soon' },
]

function toSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function offeringToForm(offering: FutureReadyOffering): FormState {
  return {
    slug: offering.slug,
    name: offering.name,
    price: offering.price,
    period: offering.period,
    description: offering.description,
    audience: offering.audience,
    ctaMode: offering.ctaMode,
    featuresRaw: offering.features.join('\n'),
    priceOptionsRaw: offering.priceOptions?.map((option) => `${option.amount} | ${option.period}`).join('\n') ?? '',
    spotsAvailable: offering.spotsAvailable === null || offering.spotsAvailable === undefined ? '' : String(offering.spotsAvailable),
    popular: offering.popular,
    comingSoon: offering.comingSoon ?? false,
    isNew: offering.isNew ?? false,
    isVisible: offering.isVisible,
    sortOrder: String(offering.sortOrder),
  }
}

export function OfferingsClient() {
  const [offerings, setOfferings] = useState<FutureReadyOffering[]>([])
  const [form, setForm] = useState<FormState>(emptyForm)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const sortedOfferings = useMemo(
    () => [...offerings].sort((a, b) => a.sortOrder - b.sortOrder),
    [offerings]
  )

  const load = useCallback(async () => {
    const res = await fetch('/api/admin/offerings')
    const data = await res.json()
    if (res.ok) {
      setOfferings(data.offerings ?? [])
    } else {
      setMessage(data.error ?? 'Could not load offerings. Has the migration been applied?')
    }
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  const updateForm = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }))
  }

  const reset = () => {
    setEditingId(null)
    setForm(emptyForm)
    setMessage(null)
  }

  const payload = () => {
    const features = form.featuresRaw
      .split('\n')
      .map((feature) => feature.trim())
      .filter(Boolean)
    const priceOptions = form.priceOptionsRaw
      .split('\n')
      .map((line) => {
        const [amount, ...periodParts] = line.split('|')
        return { amount: amount?.trim() ?? '', period: periodParts.join('|').trim() }
      })
      .filter((option) => option.amount && option.period)

    return {
      slug: form.slug.trim(),
      name: form.name.trim(),
      price: form.price.trim(),
      period: form.period.trim(),
      description: form.description.trim(),
      audience: form.audience,
      ctaMode: form.ctaMode,
      features,
      priceOptions,
      spotsAvailable: form.spotsAvailable.trim() ? Number(form.spotsAvailable) : null,
      popular: form.popular,
      comingSoon: form.comingSoon,
      isNew: form.isNew,
      isVisible: form.isVisible,
      sortOrder: form.sortOrder.trim() ? Number(form.sortOrder) : 0,
    }
  }

  const save = async (event: FormEvent) => {
    event.preventDefault()
    setBusy(true)
    setMessage(null)

    try {
      const res = await fetch(editingId ? `/api/admin/offerings/${editingId}` : '/api/admin/offerings', {
        method: editingId ? 'PATCH' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload()),
      })
      const data = await res.json()
      if (!res.ok) {
        setMessage(data.error ?? 'Save failed')
        return
      }
      reset()
      setMessage(editingId ? 'Offering updated.' : 'Offering added.')
      await load()
    } finally {
      setBusy(false)
    }
  }

  const toggleVisible = async (offering: FutureReadyOffering) => {
    if (!offering.id) return
    setMessage(null)
    const res = await fetch(`/api/admin/offerings/${offering.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isVisible: !offering.isVisible }),
    })
    const data = await res.json()
    if (!res.ok) {
      setMessage(data.error ?? 'Toggle failed')
      return
    }
    await load()
  }

  const remove = async (offering: FutureReadyOffering) => {
    if (!offering.id || !window.confirm(`Delete ${offering.name}?`)) return
    setMessage(null)
    const res = await fetch(`/api/admin/offerings/${offering.id}`, { method: 'DELETE' })
    const data = await res.json()
    if (!res.ok) {
      setMessage(data.error ?? 'Delete failed')
      return
    }
    if (editingId === offering.id) reset()
    await load()
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_420px]">
      <section className="card-glass rounded-2xl p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-display text-xl font-semibold text-text">Live Offer Cards</h2>
            <p className="text-sm text-muted">Visible cards appear on the Future Ready Graduate pricing section.</p>
          </div>
          <button type="button" onClick={reset} className="btn-secondary px-4 py-2 text-sm">
            Add new
          </button>
        </div>

        {message ? (
          <div className="mb-4 rounded-xl border border-border-accent bg-surface-light px-4 py-3 text-sm text-muted">
            {message}
          </div>
        ) : null}

        <div className="space-y-3">
          {sortedOfferings.map((offering) => (
            <article key={offering.slug} className="rounded-2xl border border-border-light bg-surface/70 p-4">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg font-semibold text-text">{offering.name}</h3>
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${offering.isVisible ? 'bg-success/10 text-success' : 'bg-muted/10 text-muted'}`}>
                      {offering.isVisible ? 'Visible' : 'Hidden'}
                    </span>
                    {offering.isNew ? <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">New</span> : null}
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    {offering.price}
                    {offering.period} · {offering.audience} · CTA: {offering.ctaMode}
                  </p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{offering.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button type="button" onClick={() => void toggleVisible(offering)} className="btn-secondary px-3 py-2 text-sm">
                    {offering.isVisible ? 'Hide' : 'Show'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setEditingId(offering.id ?? null)
                      setForm(offeringToForm(offering))
                      setMessage(null)
                    }}
                    className="btn-secondary px-3 py-2 text-sm"
                  >
                    Edit
                  </button>
                  <button type="button" onClick={() => void remove(offering)} className="rounded-lg border border-destructive/40 px-3 py-2 text-sm font-semibold text-destructive transition-colors hover:bg-destructive/10">
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <form onSubmit={(event) => void save(event)} className="card-glass rounded-2xl p-5">
        <h2 className="font-display text-xl font-semibold text-text">{editingId ? 'Edit offering' : 'Add offering'}</h2>
        <div className="mt-5 space-y-4">
          <label className="block text-sm font-medium text-text">
            Name
            <input
              value={form.name}
              onChange={(event) => {
                const name = event.target.value
                updateForm('name', name)
                if (!editingId) updateForm('slug', toSlug(name))
              }}
              className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2 text-sm"
              required
            />
          </label>
          <label className="block text-sm font-medium text-text">
            Slug
            <input value={form.slug} onChange={(event) => updateForm('slug', toSlug(event.target.value))} className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2 text-sm" required />
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="block text-sm font-medium text-text">
              Price
              <input value={form.price} onChange={(event) => updateForm('price', event.target.value)} className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2 text-sm" required />
            </label>
            <label className="block text-sm font-medium text-text">
              Period
              <input value={form.period} onChange={(event) => updateForm('period', event.target.value)} className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2 text-sm" required />
            </label>
          </div>
          <label className="block text-sm font-medium text-text">
            Description
            <textarea value={form.description} onChange={(event) => updateForm('description', event.target.value)} className="mt-1 min-h-20 w-full rounded-xl border border-border bg-surface px-3 py-2 text-sm" required />
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="block text-sm font-medium text-text">
              Audience
              <select value={form.audience} onChange={(event) => updateForm('audience', event.target.value as OfferingAudience)} className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2 text-sm">
                <option value="schools">Schools</option>
                <option value="professional">Professional</option>
                <option value="everyone">Everyone</option>
                <option value="custom">Custom</option>
              </select>
            </label>
            <label className="block text-sm font-medium text-text">
              CTA mode
              <select value={form.ctaMode} onChange={(event) => updateForm('ctaMode', event.target.value as OfferingCtaMode)} className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2 text-sm">
                <option value="school">School checkout</option>
                <option value="professional">Professional checkout</option>
                <option value="guided">Guided checkout</option>
                <option value="consultation">Consultation</option>
              </select>
            </label>
          </div>
          <label className="block text-sm font-medium text-text">
            Features, one per line
            <textarea value={form.featuresRaw} onChange={(event) => updateForm('featuresRaw', event.target.value)} className="mt-1 min-h-32 w-full rounded-xl border border-border bg-surface px-3 py-2 text-sm" />
          </label>
          <label className="block text-sm font-medium text-text">
            Price options, one per line as amount | period
            <textarea value={form.priceOptionsRaw} onChange={(event) => updateForm('priceOptionsRaw', event.target.value)} placeholder="$5,000 | /semester (5 months)" className="mt-1 min-h-20 w-full rounded-xl border border-border bg-surface px-3 py-2 text-sm" />
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="block text-sm font-medium text-text">
              Spots available
              <input type="number" min="0" value={form.spotsAvailable} onChange={(event) => updateForm('spotsAvailable', event.target.value)} className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2 text-sm" />
            </label>
            <label className="block text-sm font-medium text-text">
              Sort order
              <input type="number" value={form.sortOrder} onChange={(event) => updateForm('sortOrder', event.target.value)} className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2 text-sm" />
            </label>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm text-text">
            {BOOLEAN_FIELDS.map(({ key, label }) => (
              <label key={key} className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2">
                <input
                  type="checkbox"
                  checked={form[key]}
                  onChange={(event) => updateForm(key, event.target.checked)}
                />
                {label}
              </label>
            ))}
          </div>
          <div className="flex gap-3 pt-2">
            <button type="submit" disabled={busy} className="btn-primary flex-1 px-4 py-3 text-sm disabled:opacity-60">
              {busy ? 'Saving...' : editingId ? 'Save changes' : 'Create offering'}
            </button>
            {editingId ? (
              <button type="button" onClick={reset} className="btn-secondary px-4 py-3 text-sm">
                Cancel
              </button>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  )
}
