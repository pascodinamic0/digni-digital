'use client'
import { LINKS } from '@/content/v2/locales'
import { useState } from 'react'

export type ContactLabels = {
  name: string; org: string; email: string; service: string; message: string
  send: string; sending: string; sent: string; error: string; privacy: string
  options: Record<string, string>
}

export default function ContactForm({ t, defaultService = '' }: { t: ContactLabels; defaultService?: string }) {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const d = new FormData(form)
    if (d.get('website')) return // honeypot
    setState('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: d.get('name'), email: d.get('email'), company: d.get('org'),
          projectType: d.get('service') || undefined, message: d.get('message'),
        }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setState('sent')
      form.reset()
    } catch {
      setState('error')
    }
  }
  if (state === 'sent') return <p className="form__ok" role="status">{t.sent}</p>
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__row">
        <label><span>{t.name}</span><input name="name" required autoComplete="name" /></label>
        <label><span>{t.org}</span><input name="org" autoComplete="organization" /></label>
      </div>
      <div className="form__row">
        <label><span>{t.email}</span><input name="email" type="email" required autoComplete="email" dir="auto" /></label>
        <label><span>{t.service}</span>
          <select name="service" defaultValue={defaultService}>
            <option value="">—</option>
            {Object.entries(t.options).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </label>
      </div>
      <label><span>{t.message}</span><textarea name="message" rows={5} required /></label>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <button className="btn btn--accent" type="submit" disabled={state === 'sending'}>
        {state === 'sending' ? t.sending : t.send}<span className="arr" aria-hidden>→</span>
      </button>
      {state === 'error' && (
        <p className="form__err" role="alert">
          {t.error}{' '}
          <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" dir="ltr">WhatsApp {LINKS.whatsappLabel}</a>
          {' · '}
          <a href={`mailto:${LINKS.email}`} dir="ltr">{LINKS.email}</a>
        </p>
      )}
      <p className="form__note">{t.privacy}</p>
    </form>
  )
}
