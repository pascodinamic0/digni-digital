'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { X, FileText, Pencil, Sparkles, ExternalLink, ImageIcon } from 'lucide-react'
import { BlogRichEditor } from './blog-rich-editor'

type FileCatalogEntry = {
  slug: string
  title: string
  category: string
  publishDate: string
  publicPath: string
}

type DbPost = {
  id: string
  slug: string
  title: string
  status: string
  locale: string
  excerpt?: string | null
  body_md?: string
  cover_image_url?: string | null
  tags?: string[] | null
  category?: string | null
  read_time?: string | null
  updated_at?: string
}

const SITE_LOCALES = [
  { value: 'us-en', label: 'English' },
  { value: 'fr-fr', label: 'French' },
  { value: 'es-es', label: 'Spanish' },
  { value: 'sa-ar', label: 'Arabic' },
] as const

export function ContentClient() {
  const [posts, setPosts] = useState<DbPost[]>([])
  const [queue, setQueue] = useState<Record<string, unknown>[]>([])
  const [fileCatalog, setFileCatalog] = useState<FileCatalogEntry[]>([])

  const [slug, setSlug] = useState('')
  const [locale, setLocale] = useState<string>('us-en')
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [category, setCategory] = useState('')
  const [readTime, setReadTime] = useState('')
  const [tagsRaw, setTagsRaw] = useState('')
  const [bodyMd, setBodyMd] = useState('')
  const [coverUrl, setCoverUrl] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [status, setStatus] = useState<'draft' | 'review' | 'published'>('draft')

  const [modalOpen, setModalOpen] = useState(false)
  const [loadBusy, setLoadBusy] = useState(false)
  const [saveBusy, setSaveBusy] = useState(false)
  const [coverUploadBusy, setCoverUploadBusy] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)

  /** Per-card locale (preview + default when opening editor) */
  const [cardLocale, setCardLocale] = useState<Record<string, string>>({})

  const getCardLocale = (slugKey: string) => cardLocale[slugKey] ?? 'us-en'

  const load = useCallback(async () => {
    const [p, q, c] = await Promise.all([
      fetch('/api/admin/blog'),
      fetch('/api/admin/social-queue'),
      fetch('/api/admin/blog/catalog'),
    ])
    const pj = await p.json()
    const qj = await q.json()
    const cj = await c.json()
    if (p.ok) setPosts(pj.posts ?? [])
    if (q.ok) setQueue(qj.items ?? [])
    if (c.ok) setFileCatalog(cj.filePosts ?? [])
  }, [])

  useEffect(() => {
    void load()
  }, [load])

  const fileSlugSet = useMemo(() => new Set(fileCatalog.map((f) => f.slug)), [fileCatalog])

  const dbOnlyPosts = useMemo(
    () => posts.filter((p) => !fileSlugSet.has(p.slug)),
    [posts, fileSlugSet]
  )

  const parseTags = () =>
    tagsRaw
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean)

  const resetForm = () => {
    setEditingId(null)
    setSlug('')
    setLocale('us-en')
    setTitle('')
    setExcerpt('')
    setCategory('')
    setReadTime('')
    setTagsRaw('')
    setBodyMd('')
    setCoverUrl('')
    setStatus('draft')
  }

  const uploadCoverFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setCoverUploadBusy(true)
    setMsg(null)
    try {
      const fd = new FormData()
      fd.set('file', file)
      const res = await fetch('/api/admin/blog/upload', { method: 'POST', body: fd })
      const j = await res.json()
      if (!res.ok) {
        setMsg(j.error || 'Upload failed')
        return
      }
      if (typeof j.url === 'string') setCoverUrl(j.url)
    } finally {
      setCoverUploadBusy(false)
      e.target.value = ''
    }
  }

  const uploadImageForEditor = useCallback(async (file: File) => {
    const fd = new FormData()
    fd.set('file', file)
    const res = await fetch('/api/admin/blog/upload', { method: 'POST', body: fd })
    const j = await res.json()
    if (!res.ok) {
      setMsg(j.error || 'Image upload failed')
      return null
    }
    return typeof j.url === 'string' ? j.url : null
  }, [])

  const fetchIntoEditor = async (fileSlug: string, fileLocale: string) => {
    setMsg(null)
    const [fileRes, lookRes] = await Promise.all([
      fetch(
        `/api/admin/blog/file-article?slug=${encodeURIComponent(fileSlug)}&locale=${encodeURIComponent(fileLocale)}`
      ),
      fetch(
        `/api/admin/blog/lookup?slug=${encodeURIComponent(fileSlug)}&locale=${encodeURIComponent(fileLocale)}`
      ),
    ])
    const fileJ = await fileRes.json()
    const lookJ = await lookRes.json()
    const existing = lookRes.ok ? (lookJ.post as DbPost | null) : null

    if (!fileRes.ok && !existing) {
      setMsg(fileJ.error || 'Could not load article')
      return false
    }

    const fileArticle = fileRes.ok ? fileJ.article : null
    setSlug(fileSlug)
    setLocale(fileLocale)
    setEditingId(existing?.id ?? null)
    setStatus((existing?.status as 'draft' | 'review' | 'published') || 'draft')

    setTitle(existing?.title ?? fileArticle?.title ?? '')
    setExcerpt(existing?.excerpt ?? fileArticle?.excerpt ?? '')
    setCategory(existing?.category ?? fileArticle?.category ?? '')
    setReadTime(existing?.read_time ?? fileArticle?.readTime ?? '')
    setTagsRaw(
      existing?.tags?.length
        ? existing.tags.join(', ')
        : fileArticle?.tags?.length
          ? fileArticle.tags.join(', ')
          : ''
    )
    setBodyMd(existing?.body_md ?? fileArticle?.content ?? '')
    setCoverUrl(existing?.cover_image_url ?? '')
    return true
  }

  const openEditFromFile = async (fileSlug: string, loc: string) => {
    setLoadBusy(true)
    try {
      const ok = await fetchIntoEditor(fileSlug, loc)
      if (ok) setModalOpen(true)
    } finally {
      setLoadBusy(false)
    }
  }

  const openEditFromDb = async (id: string) => {
    setLoadBusy(true)
    setMsg(null)
    try {
      const res = await fetch(`/api/admin/blog/${id}`)
      const j = await res.json()
      if (!res.ok) {
        setMsg(j.error || 'Failed to load')
        return
      }
      const post = j.post as DbPost
      setEditingId(post.id)
      setSlug(post.slug)
      setLocale(post.locale)
      setTitle(post.title)
      setExcerpt(post.excerpt ?? '')
      setCategory(post.category ?? '')
      setReadTime(post.read_time ?? '')
      setTagsRaw(post.tags?.join(', ') ?? '')
      setBodyMd(post.body_md ?? '')
      setCoverUrl(post.cover_image_url ?? '')
      setStatus(post.status as 'draft' | 'review' | 'published')
      setModalOpen(true)
    } finally {
      setLoadBusy(false)
    }
  }

  const saveDraft = async (e?: React.FormEvent) => {
    e?.preventDefault()
    setMsg(null)
    setSaveBusy(true)
    const payload = {
      slug,
      title,
      excerpt: excerpt || null,
      bodyMd,
      locale,
      status: 'draft' as const,
      coverImageUrl: coverUrl || null,
      tags: parseTags().length ? parseTags() : null,
      category: category || null,
      readTime: readTime || null,
    }

    try {
      if (editingId) {
        const res = await fetch(`/api/admin/blog/${editingId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...payload, status: 'draft' }),
        })
        const j = await res.json()
        if (!res.ok) {
          setMsg(j.error || 'Failed')
          return
        }
      } else {
        const res = await fetch('/api/admin/blog', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        const j = await res.json()
        if (!res.ok) {
          setMsg(j.error || 'Failed')
          return
        }
        if (j.post?.id) setEditingId(String(j.post.id))
      }
      setMsg('Draft saved.')
      await load()
    } finally {
      setSaveBusy(false)
    }
  }

  const publish = async () => {
    setMsg(null)
    setSaveBusy(true)
    try {
      if (!editingId) {
        const res = await fetch('/api/admin/blog', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            slug,
            title,
            excerpt: excerpt || null,
            bodyMd,
            locale,
            status: 'published',
            coverImageUrl: coverUrl || null,
            tags: parseTags().length ? parseTags() : null,
            category: category || null,
            readTime: readTime || null,
          }),
        })
        const j = await res.json()
        if (!res.ok) {
          setMsg(j.error || 'Failed')
          return
        }
        if (j.post?.id) setEditingId(String(j.post.id))
        setStatus('published')
        setMsg('Published — live site uses this version for this slug and locale.')
        await load()
        return
      }

      const res = await fetch(`/api/admin/blog/${editingId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'published' }),
      })
      if (!res.ok) {
        const j = await res.json()
        setMsg(j.error || 'Failed')
        return
      }
      setStatus('published')
      setMsg('Published — live site uses this version for this slug and locale.')
      await load()
    } finally {
      setSaveBusy(false)
    }
  }

  const unpublish = async () => {
    if (!editingId) return
    setMsg(null)
    const res = await fetch(`/api/admin/blog/${editingId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'draft' }),
    })
    if (!res.ok) {
      const j = await res.json()
      setMsg(j.error || 'Failed')
      return
    }
    setStatus('draft')
    setMsg('Unpublished — site falls back to file-based content.')
    await load()
  }

  const publishFromCard = async (id: string) => {
    const res = await fetch(`/api/admin/blog/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: 'published' }),
    })
    if (!res.ok) {
      const j = await res.json()
      setMsg(j.error || 'Failed')
      return
    }
    await load()
  }

  const closeModal = () => {
    setModalOpen(false)
    setMsg(null)
  }

  const editorKey = `${slug}-${locale}-${editingId ?? 'new'}`

  const dbRowForCard = (slugKey: string, loc: string) =>
    posts.find((p) => p.slug === slugKey && p.locale === loc)

  return (
    <div className="space-y-10">
      {msg && !modalOpen && (
        <p className="rounded-lg border border-border-accent/30 bg-accent/5 px-4 py-3 text-sm text-muted">{msg}</p>
      )}

      <section>
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-label">Articles</span>
            <h2 className="font-display text-xl font-semibold text-text md:text-2xl">Blog library</h2>
            <p className="mt-1 max-w-2xl text-sm text-muted">
              Four cards per row on large screens. Choose a locale on each card, then <strong>Edit</strong> to open the
              rich editor. Images are inserted inline in the article body.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {fileCatalog.map((row) => {
            const loc = getCardLocale(row.slug)
            const db = dbRowForCard(row.slug, loc)
            const cover = db?.cover_image_url
            const st = db?.status ?? 'file'
            return (
              <article
                key={row.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border-light/80 bg-surface/40 shadow-sm transition-shadow hover:border-border-accent/40 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-surface/80 to-muted/20">
                  {cover ? (
                    // eslint-disable-next-line @next/next/no-img-element -- admin arbitrary URLs
                    <img src={cover} alt="" className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <FileText className="h-12 w-12 text-muted/40" aria-hidden />
                    </div>
                  )}
                  <div className="absolute left-2 top-2 flex flex-wrap gap-1">
                    <span className="rounded-md bg-background/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted">
                      {row.category}
                    </span>
                    {st === 'published' && (
                      <span className="rounded-md bg-success/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-success">
                        Live
                      </span>
                    )}
                    {st === 'draft' && (
                      <span className="rounded-md bg-warning/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-warning">
                        Draft
                      </span>
                    )}
                    {st === 'review' && (
                      <span className="rounded-md bg-info/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-info">
                        Review
                      </span>
                    )}
                    {st === 'file' && (
                      <span className="rounded-md bg-background/90 px-2 py-0.5 text-[10px] font-semibold uppercase text-muted">
                        Files only
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h3 className="line-clamp-2 font-display text-base font-semibold leading-snug text-text">{row.title}</h3>
                  <p className="mt-1 text-[11px] font-mono text-muted">{row.slug}</p>

                  <label className="mt-3 space-y-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">Locale</span>
                    <select
                      value={loc}
                      onChange={(e) =>
                        setCardLocale((prev) => ({ ...prev, [row.slug]: e.target.value }))
                      }
                      className="w-full rounded-lg border border-border bg-background px-2 py-2 text-xs text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
                    >
                      {SITE_LOCALES.map((l) => (
                        <option key={l.value} value={l.value}>
                          {l.label}
                        </option>
                      ))}
                    </select>
                  </label>

                  <div className="mt-4 flex flex-1 flex-wrap items-end gap-2">
                    <button
                      type="button"
                      disabled={loadBusy}
                      onClick={() => void openEditFromFile(row.slug, loc)}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-on-accent transition-opacity hover:opacity-90 disabled:opacity-50"
                    >
                      <Pencil className="h-4 w-4" />
                      Edit
                    </button>
                    <a
                      href={row.publicPath}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-border px-3 py-2.5 text-muted transition-colors hover:bg-surface-light/60 hover:text-text"
                      title="View on site"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            )
          })}

          {dbOnlyPosts.map((p) => (
            <article
              key={p.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-dashed border-border-accent/40 bg-accent/5 shadow-sm"
            >
              <div className="relative flex aspect-[16/10] w-full items-center justify-center bg-gradient-to-br from-accent/10 to-transparent">
                {p.cover_image_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.cover_image_url} alt="" className="h-full w-full object-cover" />
                ) : (
                  <Sparkles className="h-10 w-10 text-accent/40" aria-hidden />
                )}
                <span className="absolute left-2 top-2 rounded-md bg-background/90 px-2 py-0.5 text-[10px] font-semibold uppercase text-accent">
                  DB only
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="line-clamp-2 font-display text-base font-semibold text-text">{p.title}</h3>
                <p className="mt-1 text-[11px] font-mono text-muted">
                  {p.slug} · {p.locale}
                </p>
                <p className="mt-2 text-xs text-muted">{p.status}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => void openEditFromDb(p.id)}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-on-accent"
                  >
                    <Pencil className="h-4 w-4" />
                    Edit
                  </button>
                  {p.status !== 'published' && (
                    <button
                      type="button"
                      onClick={() => void publishFromCard(p.id)}
                      className="rounded-xl border border-border px-3 py-2 text-xs font-medium text-muted hover:bg-surface-light/60"
                    >
                      Publish
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[image:var(--overlay-scrim-medium)] bg-cover p-4 pb-8 pt-12 backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="blog-editor-title"
        >
          <div className="relative w-full max-w-3xl rounded-2xl border border-border-light bg-background shadow-2xl">
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-border-light/80 bg-background/95 px-5 py-4 backdrop-blur">
              <div>
                <h2 id="blog-editor-title" className="font-display text-lg font-semibold text-text">
                  Edit article
                </h2>
                <p className="mt-0.5 text-xs text-muted">
                  Rich text — images appear where you place them. Cover is optional for the hero above the headline.
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-lg p-2 text-muted transition-colors hover:bg-surface-light/60 hover:text-text"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={saveDraft} className="space-y-5 px-5 py-5">
              {msg && modalOpen && (
                <p className="rounded-lg border border-border-accent/30 bg-accent/5 px-3 py-2 text-xs text-muted">{msg}</p>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-text">Slug</span>
                  <input
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 font-mono text-sm text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    required
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-text">Locale</span>
                  <select
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
                    value={locale}
                    onChange={(e) => setLocale(e.target.value)}
                  >
                    {SITE_LOCALES.map((l) => (
                      <option key={l.value} value={l.value}>
                        {l.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block text-sm">
                <span className="mb-1 block font-medium text-text">Title</span>
                <input
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-text">Category</span>
                  <input
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-1 block font-medium text-text">Read time</span>
                  <input
                    className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    placeholder="e.g. 8 min read"
                  />
                </label>
              </div>

              <label className="block text-sm">
                <span className="mb-1 block font-medium text-text">Excerpt</span>
                <textarea
                  className="min-h-[64px] w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                />
              </label>

              <label className="block text-sm">
                <span className="mb-1 block font-medium text-text">Tags (comma-separated)</span>
                <input
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
                  value={tagsRaw}
                  onChange={(e) => setTagsRaw(e.target.value)}
                />
              </label>

              <div className="rounded-xl border border-border-light/80 bg-surface/30 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-medium text-text">
                  <ImageIcon className="h-4 w-4 text-accent" aria-hidden />
                  Cover image (hero)
                </div>
                <p className="mb-3 text-xs text-muted">Shown under the headline on the public blog — separate from inline images.</p>
                <div className="flex flex-wrap items-center gap-2">
                  <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-text hover:bg-surface-light/40">
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/gif"
                      className="hidden"
                      onChange={uploadCoverFile}
                      disabled={coverUploadBusy}
                    />
                    {coverUploadBusy ? 'Uploading…' : 'Upload'}
                  </label>
                  <input
                    className="min-w-0 flex-1 rounded-lg border border-border bg-background px-3 py-2 font-mono text-xs text-text outline-none ring-ring focus:border-border-accent focus:ring-2"
                    placeholder="Image URL"
                    value={coverUrl}
                    onChange={(e) => setCoverUrl(e.target.value)}
                  />
                </div>
                {coverUrl ? (
                  <div className="mt-3 max-h-40 overflow-hidden rounded-lg border border-border">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={coverUrl} alt="" className="max-h-40 w-full object-cover" />
                  </div>
                ) : null}
              </div>

              <div>
                <span className="mb-2 block text-sm font-medium text-text">Article body</span>
                <BlogRichEditor
                  key={editorKey}
                  content={bodyMd}
                  onChange={setBodyMd}
                  onUploadImage={uploadImageForEditor}
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                <span>
                  Status: <strong className="text-text">{status}</strong>
                  {editingId ? ` · ${editingId.slice(0, 8)}…` : ''}
                </span>
              </div>

              <div className="flex flex-wrap gap-3 border-t border-border-light/60 pt-5">
                <button
                  type="submit"
                  disabled={saveBusy}
                  className="rounded-xl bg-accent px-6 py-2.5 font-semibold text-on-accent transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {saveBusy ? 'Saving…' : 'Save draft'}
                </button>
                <button
                  type="button"
                  disabled={saveBusy}
                  onClick={() => void publish()}
                  className="rounded-xl border border-accent bg-accent/10 px-6 py-2.5 font-semibold text-accent transition-colors hover:bg-accent/15 disabled:opacity-50"
                >
                  Publish live
                </button>
                {status === 'published' && editingId ? (
                  <button
                    type="button"
                    onClick={() => void unpublish()}
                    className="rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-muted hover:bg-surface-light/60 hover:text-text"
                  >
                    Unpublish
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={() => {
                    resetForm()
                    setModalOpen(false)
                  }}
                  className="rounded-xl border border-border px-4 py-2.5 text-sm text-muted hover:text-text"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <section>
        <span className="section-label">Distribution</span>
        <h2 className="font-display mb-3 text-lg font-semibold text-text">Social queue</h2>
        <ul className="card-glass space-y-2 rounded-2xl p-5 text-sm text-muted">
          {queue.map((q) => (
            <li key={String(q.id)}>
              {String(q.provider)} · {String(q.status)} · {String(q.created_at)}
            </li>
          ))}
          {queue.length === 0 && <li>Empty</li>}
        </ul>
      </section>
    </div>
  )
}
