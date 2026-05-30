import { buildDigniSystemPrompt } from '@/lib/digni/system-prompt'
import {
  getOpenRouterConfig,
  openRouterChatCompletion,
  openRouterErrorMessage,
  type ChatCompletionMessage,
} from '@/lib/digni/openrouter'

export const runtime = 'nodejs'
export const maxDuration = 60

type ChatMessage = { role: 'user' | 'assistant'; content: string }
type Body = { messages?: ChatMessage[]; locale?: string }

function sseLine(data: unknown): string {
  return `data: ${JSON.stringify(data)}\n\n`
}

export async function POST(request: Request) {
  let body: Body
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const messages = body.messages?.filter(
    (m): m is ChatMessage =>
      (m.role === 'user' || m.role === 'assistant') &&
      typeof m.content === 'string' &&
      m.content.trim().length > 0
  )

  if (!messages?.length) {
    return Response.json({ error: 'messages required' }, { status: 400 })
  }

  const locale = body.locale ?? 'us-en'
  const openRouter = getOpenRouterConfig()

  if (!openRouter) {
    return Response.json(
      {
        error:
          'Chat is temporarily unavailable. Email support@digni-digital-llc.com or use our contact page.',
        code: 'no_openrouter',
      },
      { status: 503 }
    )
  }

  const chatMessages: ChatCompletionMessage[] = [
    { role: 'system', content: buildDigniSystemPrompt(locale) },
    ...messages.slice(-24).map((m) => ({ role: m.role, content: m.content.trim() })),
  ]

  const useStream = request.headers.get('accept')?.includes('text/event-stream')

  if (!useStream) {
    const res = await openRouterChatCompletion(openRouter, chatMessages, { stream: false })
    const raw = await res.json()
    if (!res.ok) {
      return Response.json(
        { error: openRouterErrorMessage(raw), code: 'openrouter_error' },
        { status: 502 }
      )
    }
    const text = raw.choices?.[0]?.message?.content
    if (!text || typeof text !== 'string') {
      return Response.json({ error: 'Empty model response', code: 'empty' }, { status: 502 })
    }
    return Response.json({ message: text })
  }

  const res = await openRouterChatCompletion(openRouter, chatMessages, { stream: true })

  if (!res.ok) {
    const raw = await res.json().catch(() => ({}))
    return Response.json({ error: openRouterErrorMessage(raw) }, { status: 502 })
  }

  const encoder = new TextEncoder()
  const reader = res.body?.getReader()
  if (!reader) return Response.json({ error: 'No stream body' }, { status: 502 })

  const stream = new ReadableStream({
    async start(controller) {
      const decoder = new TextDecoder()
      let buffer = ''
      try {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          buffer += decoder.decode(value, { stream: true })
          const lines = buffer.split('\n')
          buffer = lines.pop() ?? ''
          for (const line of lines) {
            const trimmed = line.trim()
            if (!trimmed.startsWith('data:')) continue
            const payload = trimmed.slice(5).trim()
            if (payload === '[DONE]') {
              controller.enqueue(encoder.encode(sseLine({ type: 'done' })))
              continue
            }
            try {
              const parsed = JSON.parse(payload) as {
                choices?: Array<{ delta?: { content?: string } }>
              }
              const delta = parsed.choices?.[0]?.delta?.content
              if (delta) controller.enqueue(encoder.encode(sseLine({ type: 'delta', content: delta })))
            } catch {
              /* skip malformed chunks */
            }
          }
        }
      } catch (err) {
        controller.enqueue(
          encoder.encode(
            sseLine({ type: 'error', message: err instanceof Error ? err.message : 'Stream error' })
          )
        )
      } finally {
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    },
  })
}
