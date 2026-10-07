'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { guideCopy, speechLang } from '@/content/v2/guide'
import { LINKS, langOf } from '@/content/v2/locales'

type Msg = { id: string; role: 'user' | 'assistant'; content: string }
type SR = new () => {
  continuous: boolean; interimResults: boolean; lang: string; start(): void; stop(): void
  onresult: ((e: { resultIndex: number; results: { length: number; [i: number]: { [j: number]: { transcript: string } } } }) => void) | null
  onend: (() => void) | null; onerror: (() => void) | null
}
const uid = () => `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`

/** DigniGuide conversation UI. Streams from /api/digni/chat with the page locale. */
export default function GuideChat({ locale, variant = 'panel' }: { locale: string; variant?: 'panel' | 'page' }) {
  const lang = langOf(locale)
  const t = guideCopy[lang]
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [listening, setListening] = useState(false)
  const [canSpeak, setCanSpeak] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const recRef = useRef<InstanceType<SR> | null>(null)

  useEffect(() => {
    const w = window as unknown as { SpeechRecognition?: SR; webkitSpeechRecognition?: SR }
    setCanSpeak(Boolean(w.SpeechRecognition || w.webkitSpeechRecognition))
  }, [])
  useEffect(() => { listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' }) }, [msgs, loading])

  const stream = useCallback(async (history: Msg[]) => {
    const res = await fetch('/api/digni/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'text/event-stream' },
      body: JSON.stringify({ locale, messages: history.map((m) => ({ role: m.role, content: m.content })) }),
    })
    if (!res.ok) throw new Error(t.error)
    const reader = res.body?.getReader()
    if (!reader) return
    const dec = new TextDecoder()
    const id = uid()
    let text = ''
    let buf = ''
    setMsgs((p) => [...p, { id, role: 'assistant', content: '' }])
    for (;;) {
      const { done, value } = await reader.read()
      if (done) break
      buf += dec.decode(value, { stream: true })
      const parts = buf.split('\n\n')
      buf = parts.pop() ?? ''
      for (const part of parts) {
        const line = part.trim()
        if (!line.startsWith('data:')) continue
        let data: { type: string; content?: string } | null = null
        try { data = JSON.parse(line.slice(5)) } catch { data = null }
        if (data?.type === 'delta' && data.content) {
          text += data.content
          setMsgs((p) => p.map((m) => (m.id === id ? { ...m, content: text } : m)))
        }
        if (data?.type === 'error') throw new Error(t.error)
      }
    }
  }, [locale, t.error])

  const send = useCallback(async (raw: string) => {
    const text = raw.trim()
    if (!text || loading) return
    setError(null)
    const next = [...msgs, { id: uid(), role: 'user' as const, content: text }]
    setMsgs(next)
    setInput('')
    setLoading(true)
    try { await stream(next) } catch {
      setError(t.error)
      setMsgs((p) => p.filter((m) => !(m.role === 'assistant' && !m.content.trim())))
    } finally { setLoading(false); inputRef.current?.focus() }
  }, [loading, msgs, stream, t.error])

  function listen() {
    const w = window as unknown as { SpeechRecognition?: SR; webkitSpeechRecognition?: SR }
    const Ctor = w.SpeechRecognition || w.webkitSpeechRecognition
    if (!Ctor) return
    if (listening && recRef.current) { recRef.current.stop(); setListening(false); return }
    const rec = new Ctor()
    rec.lang = speechLang[lang]
    rec.onresult = (e) => { let s = ''; for (let i = e.resultIndex; i < e.results.length; i++) s += e.results[i][0].transcript; setInput(s) }
    rec.onend = () => setListening(false)
    rec.onerror = () => setListening(false)
    recRef.current = rec
    rec.start()
    setListening(true)
  }

  return (
    <div className={`gchat gchat--${variant}`}>
      <div className="gchat__list" ref={listRef} aria-live="polite">
        {msgs.length === 0 ? (
          <div className="gchat__intro">
            <p>{t.welcome}</p>
            <ul className="gchat__sugs">
              {t.suggestions.map((s) => <li key={s}><button type="button" onClick={() => void send(s)}>{s}</button></li>)}
            </ul>
          </div>
        ) : (
          <ul className="gchat__msgs">
            {msgs.map((m) => <li key={m.id} className={`gmsg gmsg--${m.role}`} dir="auto">{m.content || '…'}</li>)}
            {loading && msgs.at(-1)?.role === 'user' && <li className="gmsg gmsg--assistant gmsg--wait">{t.thinking}</li>}
          </ul>
        )}
        {error && <p className="form__err" role="alert">{error} <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></p>}
      </div>
      <form className="gchat__bar" onSubmit={(e) => { e.preventDefault(); void send(input) }}>
        <textarea
          ref={inputRef} value={input} rows={1} dir="auto" placeholder={t.placeholder} aria-label={t.placeholder} disabled={loading}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); void send(input) } }}
        />
        {canSpeak && (
          <button type="button" className={`gchat__icon ${listening ? 'on' : ''}`} onClick={listen} aria-label={listening ? t.voiceStop : t.voiceStart}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>
          </button>
        )}
        <button type="submit" className="gchat__send" disabled={loading || !input.trim()} aria-label={t.send}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </button>
      </form>
      <div className="gchat__foot">
        {msgs.length > 0 && <button type="button" onClick={() => { setMsgs([]); setError(null) }}>{t.newChat}</button>}
        <a href={LINKS.booking} target="_blank" rel="noopener noreferrer">{t.book} ↗</a>
      </div>
    </div>
  )
}
