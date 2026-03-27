'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { CourseRow } from '@/lib/types/database'

type CourseListItem = CourseRow & { module_count: number; enrollment_count: number }

export function CoursesListClient() {
  const router = useRouter()
  const [courses, setCourses] = useState<CourseListItem[]>([])
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState<string | null>(null)
  const [creating, setCreating] = useState(false)
  const [newCourse, setNewCourse] = useState({ slug: '', title: '', description: '', sort_order: '0' })

  const load = useCallback(async () => {
    setLoading(true)
    setMsg(null)
    try {
      const res = await fetch('/api/admin/lms/courses')
      const j = await res.json()
      if (!res.ok) throw new Error(j.error || 'Failed to load')
      const list = (j.courses as CourseListItem[]) ?? []
      setCourses(list)
      if (list.length === 1) {
        router.replace(`/admin/courses/${list[0].id}`)
        return
      }
    } catch (e) {
      setMsg(e instanceof Error ? e.message : 'Error')
      setCourses([])
    } finally {
      setLoading(false)
    }
  }, [router])

  useEffect(() => {
    void load()
  }, [load])

  const createCourse = async (e: React.FormEvent) => {
    e.preventDefault()
    setMsg(null)
    setCreating(true)
    try {
      const res = await fetch('/api/admin/lms/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: newCourse.slug,
          title: newCourse.title,
          description: newCourse.description || null,
          sort_order: Number.parseInt(newCourse.sort_order, 10) || 0,
        }),
      })
      const j = await res.json()
      if (!res.ok) throw new Error(j.error || 'Create failed')
      const id = (j.course as { id: string }).id
      setNewCourse({ slug: '', title: '', description: '', sort_order: '0' })
      router.push(`/admin/courses/${id}`)
    } catch (e) {
      setMsg(e instanceof Error ? e.message : 'Error')
    } finally {
      setCreating(false)
    }
  }

  const deleteCourse = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This removes all modules and lessons.`)) return
    setMsg(null)
    const res = await fetch(`/api/admin/lms/courses/${id}`, { method: 'DELETE' })
    const j = await res.json()
    if (!res.ok) {
      setMsg(j.error || 'Delete failed')
      return
    }
    await load()
  }

  if (loading) {
    return (
      <div className="flex items-center gap-3 text-muted">
        <span
          className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-border-accent border-t-accent"
          aria-hidden
        />
        Loading…
      </div>
    )
  }

  const hasMultiple = courses.length > 1

  return (
    <div className="space-y-8">
      {msg && (
        <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {msg}
        </p>
      )}

      {courses.length === 0 && (
        <section className="card-glass rounded-2xl p-5 md:p-6">
          <span className="section-label">Setup</span>
          <h2 className="font-display mb-2 text-xl font-semibold text-text">Create your course</h2>
          <p className="mb-6 text-sm text-muted">
            One title, one URL slug, and one learner experience. After this, you&apos;ll add modules, lessons, and media in the editor.
          </p>
          <form onSubmit={createCourse} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <label className="text-sm text-muted">
              URL slug
              <input
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 font-mono text-sm text-text"
                value={newCourse.slug}
                onChange={(e) => setNewCourse((s) => ({ ...s, slug: e.target.value }))}
                placeholder="e.g. future-ready"
                required
              />
            </label>
            <label className="text-sm text-muted sm:col-span-2">
              Display title
              <input
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-text"
                value={newCourse.title}
                onChange={(e) => setNewCourse((s) => ({ ...s, title: e.target.value }))}
                required
              />
            </label>
            <label className="text-sm text-muted">
              Sort order
              <input
                type="number"
                className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-text"
                value={newCourse.sort_order}
                onChange={(e) => setNewCourse((s) => ({ ...s, sort_order: e.target.value }))}
              />
            </label>
            <label className="text-sm text-muted sm:col-span-2 lg:col-span-4">
              Short description (optional)
              <textarea
                className="mt-1 min-h-[72px] w-full rounded-lg border border-border bg-background px-3 py-2 text-text"
                value={newCourse.description}
                onChange={(e) => setNewCourse((s) => ({ ...s, description: e.target.value }))}
              />
            </label>
            <div className="sm:col-span-2 lg:col-span-4">
              <button
                type="submit"
                disabled={creating}
                className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-opacity disabled:opacity-60"
              >
                {creating ? 'Creating…' : 'Create and open editor'}
              </button>
            </div>
          </form>
        </section>
      )}

      {hasMultiple && (
        <>
          <section className="card-glass rounded-2xl p-5 md:p-6">
            <span className="section-label">Add another</span>
            <h2 className="font-display mb-4 text-xl font-semibold text-text">Extra course record</h2>
            <p className="mb-4 text-sm text-muted">
              You normally run a single program. Only add another row if you truly need a separate learner experience.
            </p>
            <form onSubmit={createCourse} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <label className="text-sm text-muted">
                URL slug
                <input
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 font-mono text-sm text-text"
                  value={newCourse.slug}
                  onChange={(e) => setNewCourse((s) => ({ ...s, slug: e.target.value }))}
                  placeholder="e.g. other-program"
                  required
                />
              </label>
              <label className="text-sm text-muted sm:col-span-2">
                Title
                <input
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-text"
                  value={newCourse.title}
                  onChange={(e) => setNewCourse((s) => ({ ...s, title: e.target.value }))}
                  required
                />
              </label>
              <label className="text-sm text-muted">
                Sort order
                <input
                  type="number"
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-text"
                  value={newCourse.sort_order}
                  onChange={(e) => setNewCourse((s) => ({ ...s, sort_order: e.target.value }))}
                />
              </label>
              <label className="text-sm text-muted sm:col-span-2 lg:col-span-4">
                Description (optional)
                <textarea
                  className="mt-1 min-h-[72px] w-full rounded-lg border border-border bg-background px-3 py-2 text-text"
                  value={newCourse.description}
                  onChange={(e) => setNewCourse((s) => ({ ...s, description: e.target.value }))}
                />
              </label>
              <div className="sm:col-span-2 lg:col-span-4">
                <button
                  type="submit"
                  disabled={creating}
                  className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-background transition-opacity disabled:opacity-60"
                >
                  {creating ? 'Creating…' : 'Create & open editor'}
                </button>
              </div>
            </form>
          </section>

          <section className="card-glass overflow-hidden rounded-2xl">
            <div className="border-b border-border-light/80 px-5 py-4 md:px-6">
              <h2 className="font-display text-lg font-semibold text-text">All course records</h2>
              <p className="mt-1 text-sm text-muted">Module and enrollment counts from the database.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border-light/80 bg-surface/50 text-muted">
                    <th className="px-5 py-3 font-medium md:px-6">Title</th>
                    <th className="px-3 py-3 font-medium">Slug</th>
                    <th className="px-3 py-3 font-medium tabular-nums">Modules</th>
                    <th className="px-3 py-3 font-medium tabular-nums">Learners</th>
                    <th className="px-5 py-3 font-medium md:px-6">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((c) => (
                    <tr key={c.id} className="border-b border-border-light/50 last:border-0">
                      <td className="px-5 py-3 font-medium text-text md:px-6">{c.title}</td>
                      <td className="px-3 py-3 font-mono text-xs text-muted">{c.slug}</td>
                      <td className="px-3 py-3 tabular-nums text-muted">{c.module_count}</td>
                      <td className="px-3 py-3 tabular-nums text-muted">{c.enrollment_count}</td>
                      <td className="px-5 py-3 md:px-6">
                        <div className="flex flex-wrap gap-2">
                          <Link
                            href={`/admin/courses/${c.id}`}
                            className="rounded-lg border border-border-accent/50 px-3 py-1.5 text-xs font-medium text-accent hover:bg-accent/10"
                          >
                            Edit
                          </Link>
                          <button
                            type="button"
                            className="rounded-lg border border-destructive/30 px-3 py-1.5 text-xs font-medium text-destructive hover:bg-destructive/10"
                            onClick={() => void deleteCourse(c.id, c.title)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
