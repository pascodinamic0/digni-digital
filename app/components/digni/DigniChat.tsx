'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import Logo from '@/app/components/Logo'
import ThemeToggle from '@/app/components/ThemeToggle'
import LanguageToggler from '@/app/components/LanguageToggler'
import RotatingSuggestions from '@/app/components/digni/RotatingSuggestions'
import { getBookingLinkProps } from '@/app/config/cta.config'
import { digniSuggestions, getDigniLanguageFromLocale, type DigniLanguage } from '@/lib/digni/suggestions'
import { useLocale } from '@/app/context/LocaleContext'
import { Mic, MicOff, Send, Square, Volume2 } from 'lucide-react'

type Message = { id: string; role: 'user' | 'assistant'; content: string }

const copy: Record<
  DigniLanguage,
  {
    title: string
    subtitle: string
    placeholder: string
    send: string
    thinking: string
    bookDemo: string
    newChat: string
    voiceStart: string
    voiceStop: string
    speakReply: string
    errorGeneric: string
    welcome: string
  }
> = {
  en: {
    title: 'DigniGuide',
    subtitle: 'Intelligent guide to Digni Digital services',
    placeholder: 'Message DigniGuide…',
    send: 'Send',
    thinking: 'Thinking…',
    bookDemo: 'Book onboarding demo',
    newChat: 'New chat',
    voiceStart: 'Voice input',
    voiceStop: 'Stop listening',
    speakReply: 'Read aloud',
    errorGeneric: 'Something went wrong. Try again or book a call.',
    welcome:
      'Hi — I’m DigniGuide. Tell me what you’re trying to solve and I’ll help you find the right fit before you book time with our team.',
  },
  fr: {
    title: 'DigniGuide',
    subtitle: 'Guide intelligent des services Digni Digital',
    placeholder: 'Écrire à DigniGuide…',
    send: 'Envoyer',
    thinking: 'Réflexion…',
    bookDemo: 'Réserver une démo',
    newChat: 'Nouvelle conversation',
    voiceStart: 'Entrée vocale',
    voiceStop: 'Arrêter',
    speakReply: 'Lire à voix haute',
    errorGeneric: 'Erreur — réessayez ou réservez un appel.',
    welcome:
      'Bonjour — je suis DigniGuide. Décrivez votre défi et je vous orienterai avant de réserver un appel.',
  },
  es: {
    title: 'DigniGuide',
    subtitle: 'Guía inteligente de servicios Digni Digital',
    placeholder: 'Mensaje a DigniGuide…',
    send: 'Enviar',
    thinking: 'Pensando…',
    bookDemo: 'Reservar demo',
    newChat: 'Nuevo chat',
    voiceStart: 'Voz',
    voiceStop: 'Parar',
    speakReply: 'Leer en voz alta',
    errorGeneric: 'Error — intente de nuevo o reserve una llamada.',
    welcome: 'Hola — soy DigniGuide. Cuénteme su reto y le orientaré antes de agendar con el equipo.',
  },
  de: {
    title: 'DigniGuide',
    subtitle: 'Intelligenter Guide zu Digni Digital',
    placeholder: 'Nachricht an DigniGuide…',
    send: 'Senden',
    thinking: 'Denke nach…',
    bookDemo: 'Demo buchen',
    newChat: 'Neuer Chat',
    voiceStart: 'Sprache',
    voiceStop: 'Stopp',
    speakReply: 'Vorlesen',
    errorGeneric: 'Fehler — erneut versuchen oder Termin buchen.',
    welcome: 'Hallo — ich bin DigniGuide. Beschreiben Sie Ihr Problem, bevor Sie ein Gespräch buchen.',
  },
  ar: {
    title: 'DigniGuide',
    subtitle: 'الدليل الذكي لخدمات Digni Digital',
    placeholder: 'رسالة إلى DigniGuide…',
    send: 'إرسال',
    thinking: 'جارٍ التفكير…',
    bookDemo: 'احجز عرضاً',
    newChat: 'محادثة جديدة',
    voiceStart: 'صوت',
    voiceStop: 'إيقاف',
    speakReply: 'قراءة',
    errorGeneric: 'حدث خطأ — حاول مرة أخرى أو احجز مكالمة.',
    welcome: 'مرحباً — أنا DigniGuide. أخبرني بما تحاول حله قبل حجز وقت مع الفريق.',
  },
}

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

type SpeechRecognitionCtor = new () => {
  continuous: boolean
  interimResults: boolean
  lang: string
  start(): void
  stop(): void
  onresult: ((event: { resultIndex: number; results: { length: number; [i: number]: { [j: number]: { transcript: string } } } }) => void) | null
  onend: (() => void) | null
  onerror: (() => void) | null
}

export default function DigniChat() {
  const locale = useLocale()
  const lang = getDigniLanguageFromLocale(locale)
  const t = copy[lang]
  const booking = getBookingLinkProps()

  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [listening, setListening] = useState(false)
  const [speechSupported, setSpeechSupported] = useState(false)

  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const recognitionRef = useRef<InstanceType<SpeechRecognitionCtor> | null>(null)

  const hasConversation = messages.length > 0

  useEffect(() => {
    setSpeechSupported(
      typeof window !== 'undefined' &&
        Boolean(
          (window as unknown as { SpeechRecognition?: SpeechRecognitionCtor }).SpeechRecognition ||
            (window as unknown as { webkitSpeechRecognition?: SpeechRecognitionCtor }).webkitSpeechRecognition
        )
    )
  }, [])

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, loading])

  const streamReply = useCallback(
    async (history: Message[]) => {
      const res = await fetch('/api/digni/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'text/event-stream' },
        body: JSON.stringify({
          locale,
          messages: history.map((m) => ({ role: m.role, content: m.content })),
        }),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error((err as { error?: string }).error ?? t.errorGeneric)
      }

      const reader = res.body?.getReader()
      if (!reader) {
        const json = (await res.json()) as { message: string }
        return json.message
      }

      const decoder = new TextDecoder()
      let assistantText = ''
      const assistantId = uid()
      setMessages((prev) => [...prev, { id: assistantId, role: 'assistant', content: '' }])

      let buffer = ''
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        const parts = buffer.split('\n\n')
        buffer = parts.pop() ?? ''
        for (const part of parts) {
          const line = part.trim()
          if (!line.startsWith('data:')) continue
          try {
            const data = JSON.parse(line.slice(5)) as { type: string; content?: string; message?: string }
            if (data.type === 'delta' && data.content) {
              assistantText += data.content
              setMessages((prev) =>
                prev.map((m) => (m.id === assistantId ? { ...m, content: assistantText } : m))
              )
            }
            if (data.type === 'error') throw new Error(data.message ?? t.errorGeneric)
          } catch (e) {
            if (!(e instanceof SyntaxError)) throw e
          }
        }
      }
      return assistantText
    },
    [locale, t.errorGeneric]
  )

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim()
      if (!trimmed || loading) return
      setError(null)
      const userMsg: Message = { id: uid(), role: 'user', content: trimmed }
      const nextHistory = [...messages, userMsg]
      setMessages(nextHistory)
      setInput('')
      setLoading(true)
      try {
        await streamReply(nextHistory)
      } catch (e) {
        setError(e instanceof Error ? e.message : t.errorGeneric)
        setMessages((prev) => prev.filter((m) => !(m.role === 'assistant' && !m.content.trim())))
      } finally {
        setLoading(false)
        inputRef.current?.focus()
      }
    },
    [loading, messages, streamReply, t.errorGeneric]
  )

  const toggleListen = () => {
    const SR =
      (window as unknown as { SpeechRecognition?: SpeechRecognitionCtor }).SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: SpeechRecognitionCtor }).webkitSpeechRecognition
    if (!SR) return
    if (listening && recognitionRef.current) {
      recognitionRef.current.stop()
      setListening(false)
      return
    }
    const rec = new SR()
    rec.lang =
      lang === 'fr' ? 'fr-FR' : lang === 'es' ? 'es-ES' : lang === 'de' ? 'de-DE' : lang === 'ar' ? 'ar-SA' : 'en-US'
    rec.onresult = (event) => {
      let transcript = ''
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript
      }
      setInput(transcript)
    }
    rec.onend = () => setListening(false)
    rec.onerror = () => setListening(false)
    recognitionRef.current = rec
    rec.start()
    setListening(true)
  }

  const speakLastAssistant = () => {
    const last = [...messages].reverse().find((m) => m.role === 'assistant' && m.content)
    if (!last || !window.speechSynthesis) return
    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(last.content)
    u.lang =
      lang === 'fr' ? 'fr-FR' : lang === 'es' ? 'es-ES' : lang === 'de' ? 'de-DE' : lang === 'ar' ? 'ar-SA' : 'en-US'
    window.speechSynthesis.speak(u)
  }

  return (
    <div className="digni-chat flex flex-col h-[100dvh] bg-background text-text">
      <header className="flex-shrink-0 border-b border-border bg-background/90 backdrop-blur-xl z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <Logo href="/" label="Home" heightClass="h-10" />
            <div className="min-w-0 hidden sm:block">
              <p className="font-display font-semibold text-sm">{t.title}</p>
              <p className="text-xs text-muted truncate">{t.subtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <LanguageToggler variant="compact" />
            <ThemeToggle />
            {hasConversation && (
              <button type="button" onClick={() => { setMessages([]); setError(null) }} className="hidden sm:block text-xs text-muted hover:text-accent">
                {t.newChat}
              </button>
            )}
            <a {...booking} className="btn-secondary text-xs sm:text-sm px-3 py-2 whitespace-nowrap">
              {t.bookDemo}
            </a>
          </div>
        </div>
      </header>

      <div ref={listRef} className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 min-h-full flex flex-col">
          {!hasConversation ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-8 py-8">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-lg">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent/30 to-success/20 flex items-center justify-center text-2xl border border-accent/30">✦</div>
                <h1 className="font-display text-2xl sm:text-3xl font-bold mb-2">{t.title}</h1>
                <p className="text-muted text-sm sm:text-base">{t.welcome}</p>
              </motion.div>
              <RotatingSuggestions suggestions={digniSuggestions[lang]} onSelect={(s) => void sendMessage(s)} paused={loading} />
            </div>
          ) : (
            <ul className="space-y-6 pb-4">
              {messages.map((m) => (
                <li key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[92%] sm:max-w-[85%] rounded-2xl px-4 py-3 text-sm sm:text-base whitespace-pre-wrap ${
                      m.role === 'user' ? 'bg-accent text-on-accent rounded-br-md' : 'bg-surface border border-border rounded-bl-md'
                    }`}
                  >
                    {m.content || (loading && m.role === 'assistant' ? '…' : '')}
                  </div>
                </li>
              ))}
              {loading && messages.at(-1)?.role === 'user' && (
                <li className="flex justify-start">
                  <div className="bg-surface border border-border rounded-2xl px-4 py-3 text-sm text-muted">{t.thinking}</div>
                </li>
              )}
            </ul>
          )}
          {error && <p className="text-destructive text-sm text-center mt-4" role="alert">{error}</p>}
        </div>
      </div>

      <div className="flex-shrink-0 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-end gap-2 rounded-2xl border border-border bg-surface p-2 sm:p-3 focus-within:border-accent/50">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  void sendMessage(input)
                }
              }}
              placeholder={t.placeholder}
              rows={1}
              disabled={loading}
              className="flex-1 resize-none bg-transparent outline-none text-sm sm:text-base min-h-10 max-h-32 py-2 px-2"
            />
            <div className="flex items-center gap-1 pb-1">
              {speechSupported && (
                <button type="button" onClick={toggleListen} className={`p-2 rounded-xl ${listening ? 'text-destructive' : 'text-muted hover:text-accent'}`} aria-label={listening ? t.voiceStop : t.voiceStart}>
                  {listening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </button>
              )}
              {messages.some((m) => m.role === 'assistant' && m.content) && (
                <button type="button" onClick={speakLastAssistant} className="p-2 rounded-xl text-muted hover:text-accent hidden sm:block" aria-label={t.speakReply}>
                  <Volume2 className="w-5 h-5" />
                </button>
              )}
              <button type="button" onClick={() => void sendMessage(input)} disabled={loading || !input.trim()} className="p-2 rounded-xl bg-accent text-on-accent disabled:opacity-40" aria-label={t.send}>
                {loading ? <Square className="w-5 h-5" /> : <Send className="w-5 h-5" />}
              </button>
            </div>
          </div>
          <p className="text-center text-[11px] text-muted mt-2">
            <Link href="/agentic-softwares" className="hover:text-accent">Agentic Softwares</Link>
            {' · '}
            <Link href="/ai-receptionist" className="hover:text-accent">AI Employee</Link>
            {' · '}
            <a {...booking} className="hover:text-accent">{t.bookDemo}</a>
          </p>
        </div>
      </div>
    </div>
  )
}
