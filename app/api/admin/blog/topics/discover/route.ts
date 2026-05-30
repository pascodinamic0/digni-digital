import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'
import { AI_CAREER_JOBS } from '@/lib/ai-career-jobs/catalog'
import {
  buildDiscoveryPrompt,
  DISCOVERY_SEED_TOPICS,
  type TopicProposalSeed,
} from '@/lib/blog/topic-discovery'
import { getFileBlogCatalogEntries } from '@/lib/blog/file-catalog'

async function insertSeeds(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  db: { from: (table: string) => any },
  seeds: TopicProposalSeed[]
): Promise<{ inserted: number; skipped: number }> {
  let inserted = 0
  let skipped = 0
  for (const s of seeds) {
    const { error } = await db.from('blog_topic_proposals').insert({
      fancy_title: s.fancyTitle,
      plain_title: s.plainTitle,
      proposed_slug: s.proposedSlug,
      research_summary: s.researchSummary,
      target_audience: s.targetAudience,
      suggested_tags: s.suggestedTags,
      reference_urls: s.referenceUrls,
      source: 'discovery_agent',
      status: 'pending',
    })
    if (error?.code === '23505') skipped++
    else if (!error) inserted++
    else skipped++
  }
  return { inserted, skipped }
}

async function runDiscovery(
  db: import('@supabase/supabase-js').SupabaseClient,
  useOpenAi: boolean
) {
  const fileSlugs = getFileBlogCatalogEntries().map((p) => p.slug)
  const catalogSlugs = new Set([...fileSlugs, ...AI_CAREER_JOBS.map((j) => j.slug)])

  const seeds: TopicProposalSeed[] = [...DISCOVERY_SEED_TOPICS]

  const key = process.env.OPENAI_API_KEY
  const model = process.env.OPENAI_MODEL ?? 'gpt-4o-mini'

  if (useOpenAi && key) {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        temperature: 0.8,
        messages: [
          {
            role: 'system',
            content: 'Output valid JSON only — an array of topic objects.',
          },
          { role: 'user', content: buildDiscoveryPrompt([...catalogSlugs]) },
        ],
      }),
    })
    const raw = await res.json()
    const text = raw.choices?.[0]?.message?.content
    if (res.ok && typeof text === 'string') {
      try {
        const cleaned = text.replace(/^```json\s*/i, '').replace(/\s*```$/i, '').trim()
        const parsed = JSON.parse(cleaned) as TopicProposalSeed[]
        if (Array.isArray(parsed)) {
          for (const t of parsed) {
            if (t.proposedSlug && !catalogSlugs.has(t.proposedSlug)) {
              seeds.push(t)
            }
          }
        }
      } catch {
        /* fall back to seeds only */
      }
    }
  }

  return insertSeeds(db, seeds)
}

export async function POST(request: Request) {
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }

  let useOpenAi = true
  try {
    const body = await request.json()
    if (body?.mode === 'seeds_only') useOpenAi = false
  } catch {
    /* default discover */
  }

  const result = await runDiscovery(gate.db, useOpenAi)
  return NextResponse.json({
    ok: true,
    ...result,
    openAiUsed: Boolean(useOpenAi && process.env.OPENAI_API_KEY),
    message:
      result.inserted > 0
        ? `Queued ${result.inserted} new topic proposal(s).`
        : 'No new topics (duplicates skipped). Run again later or enable OPENAI_API_KEY for fresh ideas.',
  })
}

/** Cron-safe discovery — Bearer CRON_SECRET */
export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET
  const auth = request.headers.get('authorization')
  const token = auth?.startsWith('Bearer ') ? auth.slice(7) : null

  if (!cronSecret || token !== cronSecret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { createAdminClient } = await import('@/lib/supabase/admin')
  const db = createAdminClient()
  const result = await runDiscovery(db, true)
  return NextResponse.json({
    ok: true,
    ...result,
    openAiUsed: Boolean(process.env.OPENAI_API_KEY),
    message:
      result.inserted > 0
        ? `Cron queued ${result.inserted} new topic proposal(s).`
        : 'Cron: no new topics (duplicates skipped).',
  })
}
