import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'
import { getFileBlogCatalogEntries } from '@/lib/blog/file-catalog'
import { buildBlogAgentPrompt } from '@/lib/blog/agent-prompt'

type Body = {
  instruction?: string
  selectedSlugs?: string[]
}

export async function POST(request: Request) {
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }

  let body: Body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const instruction = body.instruction?.trim()
  if (!instruction) {
    return NextResponse.json({ error: 'instruction required' }, { status: 400 })
  }

  const all = getFileBlogCatalogEntries()
  const slugSet = new Set((body.selectedSlugs ?? []).filter(Boolean))
  const selected = all.filter((p) => slugSet.has(p.slug))

  const userPrompt = buildBlogAgentPrompt(instruction, selected, all)
  const key = process.env.OPENAI_API_KEY
  const model = process.env.OPENAI_MODEL ?? 'gpt-4o-mini'

  if (!key) {
    return NextResponse.json({
      ok: false,
      reason: 'no_openai',
      message: 'Set OPENAI_API_KEY in .env.local to generate in-app, or copy the handoff from the Blog → Agent tab.',
      assembledPrompt: userPrompt,
    })
  }

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      temperature: 0.7,
      messages: [
        {
          role: 'system',
          content:
            'You output only valid JSON with keys title, slug, excerpt, bodyMd. Slug must be lowercase kebab-case.',
        },
        { role: 'user', content: userPrompt },
      ],
    }),
  })

  const raw = await res.json()
  if (!res.ok) {
    return NextResponse.json(
      { ok: false, error: raw.error?.message ?? 'OpenAI request failed', assembledPrompt: userPrompt },
      { status: 502 }
    )
  }

  const text = raw.choices?.[0]?.message?.content
  if (!text || typeof text !== 'string') {
    return NextResponse.json({ ok: false, error: 'Empty model response', assembledPrompt: userPrompt }, { status: 502 })
  }

  let parsed: { title?: string; slug?: string; excerpt?: string; bodyMd?: string }
  try {
    const cleaned = text.replace(/^```json\s*/i, '').replace(/\s*```$/i, '').trim()
    parsed = JSON.parse(cleaned) as typeof parsed
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Model did not return valid JSON', raw: text.slice(0, 2000), assembledPrompt: userPrompt },
      { status: 502 }
    )
  }

  if (!parsed.title || !parsed.slug || !parsed.bodyMd) {
    return NextResponse.json({ ok: false, error: 'Missing title, slug, or bodyMd in model output', parsed }, { status: 502 })
  }

  return NextResponse.json({
    ok: true,
    model,
    title: parsed.title,
    slug: parsed.slug,
    excerpt: parsed.excerpt ?? '',
    bodyMd: parsed.bodyMd,
  })
}
