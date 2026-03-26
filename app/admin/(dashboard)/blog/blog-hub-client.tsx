'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { ExternalLink, Sparkles, Copy, Check, Search } from 'lucide-react'
import { AdminPanel } from '@/app/admin/components/AdminPanel'
import { ContentClient } from '../content/content-client'
import { buildCursorHandoffMarkdown } from '@/lib/blog/agent-prompt'
import type { FileBlogCatalogEntry } from '@/lib/blog/file-catalog'

type DbPost = {
  id: string
  slug: string
  title: string
  status: string
  locale: string
  excerpt: string | null
  created_at: string
  updated_at: string
}

type Tab = 'marketing' | 'database' | 'agent'

export function BlogHubClient() {
  const [tab, setTab] = useState<Tab>('marketing')
  const [filePosts, setFilePosts] = useState<FileBlogCatalogEntry[]>([])
  const [dbPosts, setDbPosts] = useState<DbPost[]>([])
  const [loadErr, setLoadErr] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [instruction, setInstruction] = useState('')
  const [selectedSlugs, setSelectedSlugs] = useState<Set<string>>(new Set())
  const [genBusy, setGenBusy] = useState(false)
  const [genMsg, setGenMsg] = useState<string | null>(null)
  const [genResult, setGenResult] = useState<{
    title: string
    slug: string
    excerpt: string
    bodyMd: string
  } | null>(null)
  const [copied, setCopied] = useState(false)
  const [assembledPrompt, setAssembledPrompt] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoadErr(null)
    const res = await fetch('/api/admin/blog/catalog')
    const j = await res.json()
    if (!res.ok) {
      setLoadErr(j.error || 'Failed to load catalog')
      return
    }
    setFilePosts(j.filePosts ?? [])
    setDbPosts(j.dbPosts ?? [])
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return filePosts
    return filePosts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.slug.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    )
  }, [filePosts, search])

  const toggleSlug = (slug: string) => {
    setSelectedSlugs((prev) => {
      const n = new Set(prev)
      if (n.has(slug)) n.delete(slug)
      else n.add(slug)
      return n
    })
  }

  const selectedEntries = useMemo(
    () => filePosts.filter((p) => selectedSlugs.has(p.slug)),
    [filePosts, selectedSlugs]
  )

  const copyHandoff = async () => {
    const md = buildCursorHandoffMarkdown(instruction || 'Write a new blog post aligned with Digni Digital voice.', selectedEntries, filePosts)
    await navigator.clipboard.writeText(md)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const runGenerate = async () => {
    setGenBusy(true)
    setGenMsg(null)
    setGenResult(null)
    setAssembledPrompt(null)
    try {
      const res = await fetch('/api/admin/blog/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          instruction: instruction || 'Propose one new flagship blog post for Digni Digital.',
          selectedSlugs: [...selectedSlugs],
        }),
      })
      const j = await res.json()
      if (j.reason === 'no_openai') {
        setAssembledPrompt(typeof j.assembledPrompt === 'string' ? j.assembledPrompt : null)
        setGenMsg('Add OPENAI_API_KEY to generate in-app, or copy the prompt below into Cursor.')
        return
      }
      if (!res.ok || !j.ok) {
        setGenMsg(j.error || 'Generation failed')
        if (typeof j.assembledPrompt === 'string') setAssembledPrompt(j.assembledPrompt)
        return
      }
      if (j.title && j.slug && j.bodyMd) {
        setGenResult({
          title: j.title,
          slug: j.slug,
          excerpt: j.excerpt ?? '',
          bodyMd: j.bodyMd,
        })
        setGenMsg('Draft generated — review below, then save to Database tab or commit to content/blog per workflow.')
      }
    } catch (e) {
      setGenMsg(e instanceof Error ? e.message : 'Error')
    } finally {
      setGenBusy(false)
    }
  }

  return (
    <div className="space-y-8">
      {loadErr ? (
        <p className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">{loadErr}</p>
      ) : null}

      <div className="flex flex-wrap gap-2 border-b border-border-light/80 pb-1">
        {(
          [
            ['marketing', 'Marketing site (files)'],
            ['database', 'Database drafts'],
            ['agent', 'Agent workspace'],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={`rounded-t-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
              tab === id
                ? 'bg-accent/12 text-accent ring-1 ring-inset ring-accent/35'
                : 'text-muted hover:bg-surface-light/60 hover:text-text'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'marketing' && (
        <AdminPanel>
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-lg font-semibold text-text">Published & file-based posts</h2>
              <p className="mt-1 text-sm text-muted">
                English catalog ({filePosts.length} posts). Other locales mirror these slugs on the site.
              </p>
            </div>
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden />
              <input
                type="search"
                placeholder="Search title, slug, category…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-3 text-sm text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
              />
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border-light/60">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="border-b border-border bg-surface/90">
                <tr>
                  <th className="p-3 font-semibold text-text">Title</th>
                  <th className="p-3 font-semibold text-text">Category</th>
                  <th className="p-3 font-semibold text-text">Updated</th>
                  <th className="p-3 font-semibold text-text">View</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => (
                  <tr key={p.slug} className="border-b border-border/40 transition-colors hover:bg-surface-light/30">
                    <td className="p-3">
                      <div className="font-medium text-text">{p.title}</div>
                      <div className="mt-0.5 font-mono text-[11px] text-muted">{p.slug}</div>
                    </td>
                    <td className="p-3 text-muted">{p.category}</td>
                    <td className="p-3 text-muted">{p.publishDate}</td>
                    <td className="p-3">
                      <Link
                        href={p.publicPath}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-accent hover:underline"
                      >
                        Open <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filtered.length === 0 && <p className="mt-4 text-center text-sm text-muted">No posts match your search.</p>}

          {dbPosts.length > 0 && (
            <div className="mt-8 border-t border-border-light/60 pt-6">
              <h3 className="font-display text-base font-semibold text-text">Database copies (same slugs may differ)</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {dbPosts.slice(0, 8).map((r) => (
                  <li key={r.id}>
                    <span className="text-text">{r.title}</span> · {r.status} · {r.locale}
                  </li>
                ))}
                {dbPosts.length > 8 && <li>…and {dbPosts.length - 8} more in the Database tab</li>}
              </ul>
            </div>
          )}
        </AdminPanel>
      )}

      {tab === 'database' && (
        <div className="space-y-6">
          <p className="text-sm text-muted">
            Drafts and publishing for DB-backed posts (agent pipeline, optional future live switch). File-based marketing
            posts remain in <code className="rounded bg-surface px-1 py-0.5 text-xs">content/blog/</code>.
          </p>
          <ContentClient />
        </div>
      )}

      {tab === 'agent' && (
        <div className="space-y-6">
          <AdminPanel>
            <div className="mb-4 flex items-start gap-3">
              <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
              <div>
                <h2 className="font-display text-lg font-semibold text-text">Agent &amp; Cursor handoff</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  Select posts for context, describe what you want next, then <strong>copy the handoff</strong> into Cursor
                  (or any LLM). With <code className="rounded bg-background px-1 text-xs">OPENAI_API_KEY</code> set, you
                  can generate a structured draft here too.
                </p>
              </div>
            </div>

            <label className="mb-3 block text-sm font-medium text-text">Context — tick posts the next article should align with</label>
            <div className="mb-6 max-h-52 overflow-y-auto rounded-xl border border-border-light/80 bg-background/50 p-3">
              {filePosts.length === 0 ? (
                <p className="text-sm text-muted">Loading posts…</p>
              ) : (
                <ul className="space-y-2">
                  {filePosts.map((p) => (
                    <li key={p.slug}>
                      <label className="flex cursor-pointer items-start gap-2 text-sm">
                        <input
                          type="checkbox"
                          checked={selectedSlugs.has(p.slug)}
                          onChange={() => toggleSlug(p.slug)}
                          className="mt-1 rounded border-border"
                        />
                        <span>
                          <span className="font-medium text-text">{p.title}</span>
                          <span className="block font-mono text-[11px] text-muted">{p.slug}</span>
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <label className="mb-2 block text-sm font-medium text-text">Instruction for the agent</label>
            <textarea
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
              placeholder="e.g. Write a 1200-word post on AI receptionists for clinics in the US, CTA to book a call…"
              rows={5}
              className="mb-4 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
            />

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => void copyHandoff()}
                className="inline-flex items-center gap-2 rounded-xl border border-border-accent bg-accent/10 px-4 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/15"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copied' : 'Copy prompt for Cursor'}
              </button>
              <button
                type="button"
                disabled={genBusy}
                onClick={() => void runGenerate()}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                <Sparkles className="h-4 w-4" />
                {genBusy ? 'Generating…' : 'Generate draft (OpenAI)'}
              </button>
            </div>

            {genMsg ? (
              <p className="mt-4 rounded-lg border border-border-accent/30 bg-accent/5 px-4 py-3 text-sm text-muted">{genMsg}</p>
            ) : null}

            {assembledPrompt ? (
              <div className="mt-4">
                <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted">Assembled prompt</label>
                <textarea
                  readOnly
                  value={assembledPrompt}
                  rows={12}
                  className="w-full rounded-xl border border-border bg-background font-mono text-xs text-text"
                />
              </div>
            ) : null}

            {genResult ? (
              <div className="mt-6 space-y-3 rounded-xl border border-border-light/80 bg-surface/80 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">Generated draft</p>
                <p className="font-display text-lg font-semibold text-text">{genResult.title}</p>
                <p className="font-mono text-sm text-accent">{genResult.slug}</p>
                {genResult.excerpt ? <p className="text-sm text-muted">{genResult.excerpt}</p> : null}
                <pre className="max-h-64 overflow-auto rounded-lg border border-border bg-background p-3 text-xs text-text">{genResult.bodyMd}</pre>
                <p className="text-xs text-muted">
                  Paste into the Database tab as a new draft, or commit to <code>content/blog/</code> per your publishing
                  workflow.
                </p>
              </div>
            ) : null}
          </AdminPanel>
        </div>
      )}
    </div>
  )
}
