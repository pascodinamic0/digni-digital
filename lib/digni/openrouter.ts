const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions'

export type ChatCompletionMessage = {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export type OpenRouterConfig = {
  apiKey: string
  model: string
  siteUrl: string
  siteName: string
}

export function getOpenRouterConfig(): OpenRouterConfig | null {
  const apiKey = process.env.OPENROUTER_API_KEY?.trim()
  if (!apiKey) return null

  return {
    apiKey,
    model: process.env.OPENROUTER_MODEL?.trim() || 'openai/gpt-4o-mini',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://digni-digital-llc.com',
    siteName: process.env.OPENROUTER_SITE_NAME?.trim() || 'Digni Digital',
  }
}

export function openRouterHeaders(config: OpenRouterConfig): HeadersInit {
  return {
    Authorization: `Bearer ${config.apiKey}`,
    'Content-Type': 'application/json',
    'HTTP-Referer': config.siteUrl,
    'X-Title': config.siteName,
  }
}

export async function openRouterChatCompletion(
  config: OpenRouterConfig,
  messages: ChatCompletionMessage[],
  options: { stream?: boolean; temperature?: number; maxTokens?: number } = {}
): Promise<Response> {
  const { stream = false, temperature = 0.65, maxTokens = 1200 } = options

  return fetch(OPENROUTER_API_URL, {
    method: 'POST',
    headers: openRouterHeaders(config),
    body: JSON.stringify({
      model: config.model,
      messages,
      temperature,
      max_tokens: maxTokens,
      stream,
    }),
  })
}

export function openRouterErrorMessage(payload: unknown): string {
  if (payload && typeof payload === 'object' && 'error' in payload) {
    const err = (payload as { error?: { message?: string } }).error
    if (err?.message) return err.message
  }
  return 'AI request failed'
}
