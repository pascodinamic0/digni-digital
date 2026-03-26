'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'

type Contact = {
  id: string
  full_name: string | null
  email: string | null
  phone: string | null
  company: string | null
  source: string | null
  notes: string | null
  tags: string[] | null
  created_at: string
  updated_at: string
}

type Deal = { id: string; contact_id: string }

export function ContactsClient() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [deals, setDeals] = useState<Deal[]>([])
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState<string | null>(null)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    source: '',
    notes: '',
  })
  const [newLead, setNewLead] = useState({ fullName: '', email: '', phone: '', company: '', source: 'Website' })

  const load = useCallback(async () => {
    setLoading(true)
    setMsg(null)
    try {
      const res = await fetch('/api/admin/crm')
      const j = await res.json()
      if (!res.ok) throw new Error(j.error || 'Failed')
      setContacts((j.contacts as Contact[]) ?? [])
      setDeals((j.deals as Deal[]) ?? [])
    } catch (e) {
      setMsg(e instanceof Error ? e.message : 'Error')
      setContacts([])
      setDeals([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  const dealCountByContact = useMemo(() => {
    const m = new Map<string, number>()
    for (const d of deals) {
      m.set(d.contact_id, (m.get(d.contact_id) ?? 0) + 1)
    }
    return m
  }, [deals])

  const openEdit = (c: Contact) => {
    setEditingId(c.id)
    setForm({
      fullName: c.full_name ?? '',
      email: c.email ?? '',
      phone: c.phone ?? '',
      company: c.company ?? '',
      source: c.source ?? '',
      notes: c.notes ?? '',
    })
  }

  const saveEdit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingId) return
    setMsg(null)
    const res = await fetch(`/api/admin/crm/contacts/${editingId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: form.fullName,
        email: form.email || null,
        phone: form.phone || null,
        company: form.company || null,
        source: form.source || null,
        notes: form.notes || null,
      }),
    })
    const j = await res.json()
    if (!res.ok) {
      setMsg(j.error || 'Save failed')
      return
    }
    setEditingId(null)
    await load()
  }

  const addContact = async (e: React.FormEvent) => {
    e.preventDefault()
    setMsg(null)
    const res = await fetch('/api/admin/crm/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: newLead.fullName,
        email: newLead.email || undefined,
        phone: newLead.phone || undefined,
        company: newLead.company || undefined,
        source: newLead.source,
      }),
    })
    const j = await res.json()
    if (!res.ok) {
      setMsg(j.error || 'Failed')
      return
    }
    setNewLead({ fullName: '', email: '', phone: '', company: '', source: 'Website' })
    await load()
  }

  if (loading) {
    return (
      <div className="flex items-center gap-3 text-muted">
        <span
          className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-border-accent border-t-accent"
          aria-hidden
        />
        Loading contacts…
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {msg && (
        <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {msg}
        </p>
      )}

      <section className="card-glass rounded-2xl p-5 md:p-6">
        <span className="section-label">Add</span>
        <h2 className="font-display mb-4 text-xl font-semibold text-text">New contact</h2>
        <form onSubmit={addContact} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <label className="text-sm text-muted sm:col-span-2 lg:col-span-1">
            Full name
            <input
              required
              className="mt-1 block w-full rounded-lg border border-border bg-background px-3 py-2 text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
              value={newLead.fullName}
              onChange={(e) => setNewLead((p) => ({ ...p, fullName: e.target.value }))}
            />
          </label>
          <label className="text-sm text-muted">
            Email
            <input
              type="email"
              className="mt-1 block w-full rounded-lg border border-border bg-background px-3 py-2 text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
              value={newLead.email}
              onChange={(e) => setNewLead((p) => ({ ...p, email: e.target.value }))}
            />
          </label>
          <label className="text-sm text-muted">
            Phone
            <input
              type="tel"
              className="mt-1 block w-full rounded-lg border border-border bg-background px-3 py-2 text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
              value={newLead.phone}
              onChange={(e) => setNewLead((p) => ({ ...p, phone: e.target.value }))}
            />
          </label>
          <label className="text-sm text-muted">
            Company
            <input
              className="mt-1 block w-full rounded-lg border border-border bg-background px-3 py-2 text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
              value={newLead.company}
              onChange={(e) => setNewLead((p) => ({ ...p, company: e.target.value }))}
            />
          </label>
          <label className="text-sm text-muted">
            Source
            <input
              className="mt-1 block w-full rounded-lg border border-border bg-background px-3 py-2 text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
              value={newLead.source}
              onChange={(e) => setNewLead((p) => ({ ...p, source: e.target.value }))}
            />
          </label>
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90 sm:w-auto"
            >
              Add contact
            </button>
          </div>
        </form>
      </section>

      <section className="card-glass overflow-hidden rounded-2xl">
        <div className="border-b border-border-light/80 px-5 py-4">
          <h2 className="font-display text-lg font-semibold text-text">Directory</h2>
          <p className="mt-1 text-sm text-muted">Select a row to edit—changes persist via the API.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-border-light/60 bg-surface/50 text-[11px] font-semibold uppercase tracking-wider text-muted">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Company</th>
                <th className="px-4 py-3">Deals</th>
                <th className="px-4 py-3 w-28" />
              </tr>
            </thead>
            <tbody>
              {contacts.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-muted">
                    No contacts yet—add one above.
                  </td>
                </tr>
              ) : (
                contacts.map((c) => (
                  <tr key={c.id} className="border-b border-border-light/40 hover:bg-surface-light/20">
                    <td className="px-4 py-3 font-medium text-text">{c.full_name ?? '—'}</td>
                    <td className="px-4 py-3 text-muted">{c.email ?? '—'}</td>
                    <td className="px-4 py-3 text-muted">{c.company ?? '—'}</td>
                    <td className="px-4 py-3 tabular-nums text-muted">{dealCountByContact.get(c.id) ?? 0}</td>
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-accent transition-colors hover:bg-accent/10"
                        onClick={() => openEdit(c)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {editingId && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-background/80 p-4 backdrop-blur-sm sm:items-center"
          role="dialog"
          aria-modal
          aria-labelledby="contact-edit-title"
          onClick={() => setEditingId(null)}
        >
          <div
            className="card-glass max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="contact-edit-title" className="font-display text-xl font-semibold text-text">
              Edit contact
            </h2>
            <form onSubmit={saveEdit} className="mt-4 space-y-3">
              <label className="block text-sm text-muted">
                Full name
                <input
                  required
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-text"
                  value={form.fullName}
                  onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                />
              </label>
              <label className="block text-sm text-muted">
                Email
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-text"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                />
              </label>
              <label className="block text-sm text-muted">
                Phone
                <input
                  type="tel"
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-text"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                />
              </label>
              <label className="block text-sm text-muted">
                Company
                <input
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-text"
                  value={form.company}
                  onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                />
              </label>
              <label className="block text-sm text-muted">
                Source
                <input
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-text"
                  value={form.source}
                  onChange={(e) => setForm((f) => ({ ...f, source: e.target.value }))}
                />
              </label>
              <label className="block text-sm text-muted">
                Notes
                <textarea
                  rows={4}
                  className="mt-1 w-full resize-none rounded-lg border border-border bg-background px-3 py-2 text-text"
                  value={form.notes}
                  onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                />
              </label>
              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  type="submit"
                  className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-on-accent hover:opacity-90"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted hover:bg-surface-light/60"
                  onClick={() => setEditingId(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
