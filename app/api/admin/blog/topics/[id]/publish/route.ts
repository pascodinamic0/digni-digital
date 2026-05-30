import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'
import { getAiCareerJobBySlug } from '@/lib/ai-career-jobs/catalog'
import { buildCareerGuideArticle } from '@/lib/ai-career-jobs/build-career-guide-article'
import { buildBlogAgentPrompt } from '@/lib/blog/agent-prompt'
import { getFileBlogCatalogEntries } from '@/lib/blog/file-catalog'

type Params = { params: Promise<{ id: string }> }

export async function POST(_request: Request, { params }: Params) {
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }

  const { id } = await params
  const { data: topic, error: fetchErr } = await gate.db
    .from('blog_topic_proposals')
    .select('*')
    .eq('id', id)
    .maybeSingle()

  if (fetchErr || !topic) {
    return NextResponse.json({ error: fetchErr?.message ?? 'Topic not found' }, { status: 404 })
  }

  if ((topic as { status: string }).status !== 'approved') {
    return NextResponse.json(
      { error: 'Approve the topic before publishing.' },
      { status: 400 }
    )
  }

  await gate.db
    .from('blog_topic_proposals')
    .update({ status: 'generating', error_message: null })
    .eq('id', id)

  try {
    return await publishTopic(gate, topic, id)
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Publish failed'
    await gate.db
      .from('blog_topic_proposals')
      .update({ status: 'failed', error_message: message })
      .eq('id', id)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

async function publishTopic(
  gate: { db: import('@supabase/supabase-js').SupabaseClient; user: { id: string } },
  topic: Record<string, unknown>,
  id: string
) {
  const slug = topic.proposed_slug as string
  let title = topic.fancy_title as string
  let excerpt = (topic.research_summary as string)?.slice(0, 280) ?? ''
  let bodyHtml = ''

  const catalogJob = getAiCareerJobBySlug(slug)
  if (catalogJob) {
    const article = buildCareerGuideArticle(catalogJob, 250)
    title = article.title
    excerpt = article.excerpt
    bodyHtml = article.content
  } else {
    const key = process.env.OPENAI_API_KEY
    if (!key) {
      await gate.db
        .from('blog_topic_proposals')
        .update({ status: 'failed', error_message: 'OPENAI_API_KEY required for non-catalog topics' })
        .eq('id', id)
      return NextResponse.json({ error: 'OPENAI_API_KEY required for custom topics' }, { status: 503 })
    }

    const all = getFileBlogCatalogEntries()
    const instruction = `Write a full HTML blog post (viral 2026 structure: hook, problem, mechanism, proof, prompts, references, CTA) for career: ${topic.fancy_title} (${topic.plain_title}). Slug: ${slug}. Audience: ${topic.target_audience}. Include external links with rel noopener.`
    const prompt = buildBlogAgentPrompt(instruction, [], all)

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL ?? 'gpt-4o-mini',
        temperature: 0.65,
        messages: [
          {
            role: 'system',
            content:
              'Return JSON: {"title","excerpt","bodyHtml"} where bodyHtml is complete HTML using h2,h3,ul,ol,blockquote,figure with img, hr, and links.',
          },
          { role: 'user', content: prompt },
        ],
      }),
    })
    const raw = await res.json()
    const text = raw.choices?.[0]?.message?.content
    if (!res.ok || typeof text !== 'string') {
      await gate.db
        .from('blog_topic_proposals')
        .update({ status: 'failed', error_message: 'OpenAI generation failed' })
        .eq('id', id)
      return NextResponse.json({ error: 'Generation failed' }, { status: 502 })
    }
    try {
      const cleaned = text.replace(/^```json\s*/i, '').replace(/\s*```$/i, '').trim()
      const parsed = JSON.parse(cleaned) as {
        title?: string
        excerpt?: string
        bodyHtml?: string
      }
      title = parsed.title ?? title
      excerpt = parsed.excerpt ?? excerpt
      bodyHtml = parsed.bodyHtml ?? ''
    } catch {
      await gate.db
        .from('blog_topic_proposals')
        .update({ status: 'failed', error_message: 'Invalid JSON from model' })
        .eq('id', id)
      return NextResponse.json({ error: 'Invalid model output' }, { status: 502 })
    }
  }

  if (!bodyHtml.trim()) {
    await gate.db
      .from('blog_topic_proposals')
      .update({ status: 'failed', error_message: 'Empty body' })
      .eq('id', id)
    return NextResponse.json({ error: 'Empty article body' }, { status: 500 })
  }

  const tags = Array.isArray(topic.suggested_tags) ? topic.suggested_tags : []
  const now = new Date().toISOString()

  const { data: post, error: postErr } = await gate.db
    .from('blog_posts')
    .upsert(
      {
        slug,
        locale: 'us-en',
        title,
        excerpt,
        body_md: bodyHtml,
        status: 'published',
        published_at: now,
        category: topic.category ?? 'Future of Work',
        tags,
        read_time: '11 min read',
        cover_image_url: catalogJob
          ? `/blog/illustrations/ai-careers/${catalogJob.id}.svg`
          : null,
      },
      { onConflict: 'slug,locale' }
    )
    .select()
    .single()

  if (postErr) {
    await gate.db
      .from('blog_topic_proposals')
      .update({ status: 'failed', error_message: postErr.message })
      .eq('id', id)
    return NextResponse.json({ error: postErr.message }, { status: 500 })
  }

  await gate.db
    .from('blog_topic_proposals')
    .update({
      status: 'published',
      blog_post_id: post.id,
      published_at: now,
      reviewed_at: now,
    })
    .eq('id', id)

  return NextResponse.json({
    ok: true,
    post,
    liveUrl: `/us-en/blog/${slug}`,
    note: 'File-based locales: run generate-blog-locale-fills or commit content/blog for full parity.',
  })
}
