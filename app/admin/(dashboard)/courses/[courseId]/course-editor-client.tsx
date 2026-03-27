'use client'

import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { defaultLocale } from '@/i18n/routing'
import type { AssignmentRow, CourseRow, LessonRow, ModuleRow } from '@/lib/types/database'
import { CourseSubnav } from './course-subnav'

type QuizQuestionRow = {
  id: string
  prompt: string
  sort_order: number
  choice_a: string
  choice_b: string
  choice_c: string
  choice_d: string
  correct_index: number
}

type QuizBundle = {
  id: string
  lesson_id: string
  title: string
  pass_percent: number
  quiz_questions: QuizQuestionRow[]
}

type Lesson = LessonRow & { assignments?: AssignmentRow[]; quizzes?: QuizBundle[] }
type ModuleWithLessons = ModuleRow & { lessons: Lesson[] }

export function CourseEditorClient({ courseId }: { courseId: string }) {
  const router = useRouter()
  const [course, setCourse] = useState<CourseRow | null>(null)
  const [modules, setModules] = useState<ModuleWithLessons[]>([])
  const [loading, setLoading] = useState(true)
  const [msg, setMsg] = useState<string | null>(null)
  const [savingMeta, setSavingMeta] = useState(false)

  const [meta, setMeta] = useState({ slug: '', title: '', description: '', sort_order: '0', published: true })

  const [newModuleTitle, setNewModuleTitle] = useState('')
  const [lessonDrafts, setLessonDrafts] = useState<Record<string, { title: string; body: string; video_url: string }>>({})

  const load = useCallback(async () => {
    setLoading(true)
    setMsg(null)
    try {
      const res = await fetch(`/api/admin/lms/courses/${courseId}`)
      const j = await res.json()
      if (!res.ok) throw new Error(j.error || 'Failed to load course')
      const c = j.course as CourseRow
      setCourse(c)
      setMeta({
        slug: c.slug,
        title: c.title,
        description: c.description ?? '',
        sort_order: String(c.sort_order),
        published: c.published !== false,
      })
      setModules((j.modules as ModuleWithLessons[]) ?? [])
    } catch (e) {
      setMsg(e instanceof Error ? e.message : 'Error')
      setCourse(null)
      setModules([])
    } finally {
      setLoading(false)
    }
  }, [courseId])

  useEffect(() => {
    load()
  }, [load])

  const saveMeta = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!course) return
    setSavingMeta(true)
    setMsg(null)
    try {
      const res = await fetch(`/api/admin/lms/courses/${courseId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          slug: meta.slug,
          title: meta.title,
          description: meta.description || null,
          sort_order: Number.parseInt(meta.sort_order, 10) || 0,
          published: meta.published,
        }),
      })
      const j = await res.json()
      if (!res.ok) throw new Error(j.error || 'Save failed')
      setCourse(j.course as CourseRow)
      await load()
    } catch (e) {
      setMsg(e instanceof Error ? e.message : 'Error')
    } finally {
      setSavingMeta(false)
    }
  }

  const deleteCourse = async () => {
    if (!course || !confirm(`Delete "${course.title}" and all modules/lessons?`)) return
    setMsg(null)
    const res = await fetch(`/api/admin/lms/courses/${courseId}`, { method: 'DELETE' })
    const j = await res.json()
    if (!res.ok) {
      setMsg(j.error || 'Delete failed')
      return
    }
    router.push('/admin')
  }

  const addModule = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newModuleTitle.trim()) return
    setMsg(null)
    const res = await fetch('/api/admin/lms/modules', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        courseId,
        title: newModuleTitle.trim(),
        sort_order: modules.length,
      }),
    })
    const j = await res.json()
    if (!res.ok) {
      setMsg(j.error || 'Failed to add module')
      return
    }
    setNewModuleTitle('')
    await load()
  }

  const patchModule = async (id: string, title: string) => {
    setMsg(null)
    const res = await fetch(`/api/admin/lms/modules/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    })
    const j = await res.json()
    if (!res.ok) {
      setMsg(j.error || 'Update failed')
      return
    }
    await load()
  }

  const deleteModule = async (id: string, title: string) => {
    if (!confirm(`Delete module "${title}" and its lessons?`)) return
    setMsg(null)
    const res = await fetch(`/api/admin/lms/modules/${id}`, { method: 'DELETE' })
    const j = await res.json()
    if (!res.ok) {
      setMsg(j.error || 'Delete failed')
      return
    }
    await load()
  }

  const reorderModules = async (ordered: ModuleWithLessons[]) => {
    setMsg(null)
    const res = await fetch('/api/admin/lms/reorder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        entity: 'modules',
        items: ordered.map((m, i) => ({ id: m.id, sort_order: i })),
      }),
    })
    const j = await res.json()
    if (!res.ok) {
      setMsg(j.error || 'Reorder failed')
      return
    }
    await load()
  }

  const moveModule = (index: number, dir: -1 | 1) => {
    const next = [...modules]
    const j = index + dir
    if (j < 0 || j >= next.length) return
    ;[next[index], next[j]] = [next[j], next[index]]
    void reorderModules(next)
  }

  const addLesson = async (moduleId: string, e: React.FormEvent) => {
    e.preventDefault()
    const draft = lessonDrafts[moduleId] ?? { title: '', body: '', video_url: '' }
    if (!draft.title.trim()) return
    setMsg(null)
    const mod = modules.find((m) => m.id === moduleId)
    const res = await fetch('/api/admin/lms/lessons', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        moduleId,
        title: draft.title.trim(),
        body: draft.body || null,
        video_url: draft.video_url.trim() || null,
        sort_order: mod ? mod.lessons.length : 0,
      }),
    })
    const j = await res.json()
    if (!res.ok) {
      setMsg(j.error || 'Failed to add lesson')
      return
    }
    setLessonDrafts((d) => ({ ...d, [moduleId]: { title: '', body: '', video_url: '' } }))
    await load()
  }

  const saveLesson = async (lesson: Lesson) => {
    setMsg(null)
    const res = await fetch(`/api/admin/lms/lessons/${lesson.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: lesson.title,
        body: lesson.body,
        video_url: lesson.video_url,
      }),
    })
    const j = await res.json()
    if (!res.ok) {
      setMsg(j.error || 'Save failed')
      return
    }
    await load()
  }

  const deleteLesson = async (id: string, title: string) => {
    if (!confirm(`Delete lesson "${title}"?`)) return
    setMsg(null)
    const res = await fetch(`/api/admin/lms/lessons/${id}`, { method: 'DELETE' })
    const j = await res.json()
    if (!res.ok) {
      setMsg(j.error || 'Delete failed')
      return
    }
    await load()
  }

  const reorderLessons = async (moduleId: string, lessonsOrdered: Lesson[]) => {
    setMsg(null)
    const res = await fetch('/api/admin/lms/reorder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        entity: 'lessons',
        items: lessonsOrdered.map((l, i) => ({ id: l.id, sort_order: i })),
      }),
    })
    const j = await res.json()
    if (!res.ok) {
      setMsg(j.error || 'Reorder failed')
      return
    }
    await load()
  }

  const moveLesson = (moduleId: string, lessons: Lesson[], index: number, dir: -1 | 1) => {
    const next = [...lessons]
    const j = index + dir
    if (j < 0 || j >= next.length) return
    ;[next[index], next[j]] = [next[j], next[index]]
    void reorderLessons(moduleId, next)
  }

  if (loading || !course) {
    return (
      <div className="flex items-center gap-3 text-muted">
        <span
          className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-border-accent border-t-accent"
          aria-hidden
        />
        {loading ? 'Loading course…' : 'Course not found.'}
      </div>
    )
  }

  const learnUrl = `/${defaultLocale}/learn/${course.slug}`

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <Link href="/admin" className="text-sm font-medium text-accent hover:underline">
            ← Overview
          </Link>
          <h1 className="font-display mt-2 text-3xl font-bold tracking-tight text-text md:text-4xl">{course.title}</h1>
          <p className="mt-1 text-sm text-muted">
            Learner URL:{' '}
            <a href={learnUrl} className="font-mono text-accent underline-offset-2 hover:underline" target="_blank" rel="noreferrer">
              {learnUrl}
            </a>
          </p>
        </div>
        <button
          type="button"
          className="rounded-xl border border-destructive/40 px-4 py-2 text-sm font-medium text-destructive hover:bg-destructive/10"
          onClick={() => void deleteCourse()}
        >
          Delete course
        </button>
      </div>

      <CourseSubnav courseId={courseId} />

      {msg && (
        <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">{msg}</p>
      )}

      <section className="card-glass rounded-2xl p-5 md:p-6">
        <span className="section-label">Course</span>
        <h2 className="font-display mb-4 text-xl font-semibold text-text">Metadata</h2>
        <p className="mb-4 text-sm text-muted">
          Changing <strong className="text-text">slug</strong> changes the learner URL above; bookmarks and emails with the old link will break until updated.
        </p>
        <form onSubmit={saveMeta} className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm text-muted">
            Slug
            <input
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 font-mono text-sm text-text"
              value={meta.slug}
              onChange={(e) => setMeta((m) => ({ ...m, slug: e.target.value }))}
            />
          </label>
          <label className="text-sm text-muted">
            Sort order
            <input
              type="number"
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-text"
              value={meta.sort_order}
              onChange={(e) => setMeta((m) => ({ ...m, sort_order: e.target.value }))}
            />
          </label>
          <label className="text-sm text-muted sm:col-span-2">
            Title
            <input
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-text"
              value={meta.title}
              onChange={(e) => setMeta((m) => ({ ...m, title: e.target.value }))}
              required
            />
          </label>
          <label className="text-sm text-muted sm:col-span-2">
            Description
            <textarea
              className="mt-1 min-h-[88px] w-full rounded-lg border border-border bg-background px-3 py-2 text-text"
              value={meta.description}
              onChange={(e) => setMeta((m) => ({ ...m, description: e.target.value }))}
            />
          </label>
          <label className="flex items-center gap-2 text-sm text-muted sm:col-span-2">
            <input
              type="checkbox"
              className="rounded border-border"
              checked={meta.published}
              onChange={(e) => setMeta((m) => ({ ...m, published: e.target.checked }))}
            />
            Published (for future use if you list this program publicly; enrolled learners keep access either way)
          </label>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={savingMeta}
              className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-background disabled:opacity-60"
            >
              {savingMeta ? 'Saving…' : 'Save course'}
            </button>
          </div>
        </form>
      </section>

      <section className="card-glass rounded-2xl p-5 md:p-6">
        <span className="section-label">Structure</span>
        <h2 className="font-display mb-4 text-xl font-semibold text-text">Modules & lessons</h2>

        <form onSubmit={addModule} className="mb-8 flex flex-wrap items-end gap-3 border-b border-border-light/60 pb-8">
          <label className="min-w-[200px] flex-1 text-sm text-muted">
            New module title
            <input
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-text"
              value={newModuleTitle}
              onChange={(e) => setNewModuleTitle(e.target.value)}
              placeholder="e.g. Week 1 — Foundations"
            />
          </label>
          <button type="submit" className="rounded-xl border border-border-accent/50 px-4 py-2.5 text-sm font-medium text-accent hover:bg-accent/10">
            Add module
          </button>
        </form>

        <div className="space-y-6">
          {modules.length === 0 ? (
            <p className="text-sm text-muted">No modules yet. Add one above.</p>
          ) : (
            modules.map((mod, mi) => (
              <div key={mod.id} className="rounded-xl border border-border-light/80 bg-surface/40 p-4 md:p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <ModuleTitleEditor
                    initialTitle={mod.title}
                    onSave={(title) => void patchModule(mod.id, title)}
                  />
                  <div className="ml-auto flex flex-wrap gap-1">
                    <button
                      type="button"
                      className="rounded-lg border border-border px-2 py-1 text-xs text-muted hover:text-text"
                      onClick={() => moveModule(mi, -1)}
                      disabled={mi === 0}
                      aria-label="Move module up"
                    >
                      ↑
                    </button>
                    <button
                      type="button"
                      className="rounded-lg border border-border px-2 py-1 text-xs text-muted hover:text-text"
                      onClick={() => moveModule(mi, 1)}
                      disabled={mi === modules.length - 1}
                      aria-label="Move module down"
                    >
                      ↓
                    </button>
                    <button
                      type="button"
                      className="rounded-lg border border-destructive/30 px-2 py-1 text-xs text-destructive hover:bg-destructive/10"
                      onClick={() => void deleteModule(mod.id, mod.title)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <ul className="mt-4 space-y-4 border-t border-border-light/50 pt-4">
                  {mod.lessons.map((lesson, li) => (
                    <li key={lesson.id} className="rounded-lg border border-border-light/60 bg-background/60 p-3">
                      <LessonEditor
                        lesson={lesson}
                        onSave={(l) => void saveLesson(l)}
                        onDelete={() => void deleteLesson(lesson.id, lesson.title)}
                        onMoveUp={() => moveLesson(mod.id, mod.lessons, li, -1)}
                        onMoveDown={() => moveLesson(mod.id, mod.lessons, li, 1)}
                        canUp={li > 0}
                        canDown={li < mod.lessons.length - 1}
                        onReload={() => void load()}
                      />
                    </li>
                  ))}
                </ul>

                <form
                  onSubmit={(e) => addLesson(mod.id, e)}
                  className="mt-4 grid gap-2 rounded-lg border border-dashed border-border-medium/50 p-3 sm:grid-cols-2"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted sm:col-span-2">New lesson</span>
                  <input
                    className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-text"
                    placeholder="Title"
                    value={lessonDrafts[mod.id]?.title ?? ''}
                    onChange={(e) =>
                      setLessonDrafts((d) => ({
                        ...d,
                        [mod.id]: { ...(d[mod.id] ?? { title: '', body: '', video_url: '' }), title: e.target.value },
                      }))
                    }
                  />
                  <input
                    className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-text"
                    placeholder="Video URL (optional)"
                    value={lessonDrafts[mod.id]?.video_url ?? ''}
                    onChange={(e) =>
                      setLessonDrafts((d) => ({
                        ...d,
                        [mod.id]: { ...(d[mod.id] ?? { title: '', body: '', video_url: '' }), video_url: e.target.value },
                      }))
                    }
                  />
                  <textarea
                    className="min-h-[72px] rounded-lg border border-border bg-background px-3 py-2 text-sm text-text sm:col-span-2"
                    placeholder="Body (HTML or plain text)"
                    value={lessonDrafts[mod.id]?.body ?? ''}
                    onChange={(e) =>
                      setLessonDrafts((d) => ({
                        ...d,
                        [mod.id]: { ...(d[mod.id] ?? { title: '', body: '', video_url: '' }), body: e.target.value },
                      }))
                    }
                  />
                  <div className="sm:col-span-2">
                    <button type="submit" className="rounded-lg bg-accent/90 px-4 py-2 text-xs font-semibold text-background">
                      Add lesson
                    </button>
                  </div>
                </form>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  )
}

function ModuleTitleEditor({ initialTitle, onSave }: { initialTitle: string; onSave: (t: string) => void }) {
  const [title, setTitle] = useState(initialTitle)
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    setTitle(initialTitle)
  }, [initialTitle])

  return editing ? (
    <form
      className="flex flex-1 flex-wrap items-center gap-2"
      onSubmit={(e) => {
        e.preventDefault()
        onSave(title.trim())
        setEditing(false)
      }}
    >
      <input
        className="min-w-[200px] flex-1 rounded-lg border border-border bg-background px-3 py-2 font-display text-lg font-semibold text-text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />
      <button type="submit" className="rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-background">
        Save
      </button>
      <button type="button" className="text-xs text-muted hover:text-text" onClick={() => setEditing(false)}>
        Cancel
      </button>
    </form>
  ) : (
    <button type="button" className="text-left font-display text-lg font-semibold text-text hover:text-accent" onClick={() => setEditing(true)}>
      {initialTitle}
      <span className="ml-2 text-xs font-normal text-muted">(edit)</span>
    </button>
  )
}

function LessonEditor({
  lesson,
  onSave,
  onDelete,
  onMoveUp,
  onMoveDown,
  canUp,
  canDown,
  onReload,
}: {
  lesson: Lesson
  onSave: (l: Lesson) => void
  onDelete: () => void
  onMoveUp: () => void
  onMoveDown: () => void
  canUp: boolean
  canDown: boolean
  onReload: () => void
}) {
  const [title, setTitle] = useState(lesson.title)
  const [body, setBody] = useState(lesson.body ?? '')
  const [video_url, setVideoUrl] = useState(lesson.video_url ?? '')
  const [uploading, setUploading] = useState(false)
  const [newAsg, setNewAsg] = useState({ title: '', instructions: '' })
  const [quizSaving, setQuizSaving] = useState(false)
  const [quizTitle, setQuizTitle] = useState('Lesson quiz')
  const [quizPass, setQuizPass] = useState('80')
  const [quizQs, setQuizQs] = useState<
    { prompt: string; choice_a: string; choice_b: string; choice_c: string; choice_d: string; correct_index: number }[]
  >([{ prompt: '', choice_a: '', choice_b: '', choice_c: '', choice_d: '', correct_index: 0 }])

  const assignments = lesson.assignments ?? []
  const hasFile = !!(lesson.video_storage_path && lesson.video_storage_path.length > 0)

  useEffect(() => {
    setTitle(lesson.title)
    setBody(lesson.body ?? '')
    setVideoUrl(lesson.video_url ?? '')
  }, [lesson])

  useEffect(() => {
    const qz = lesson.quizzes?.[0]
    if (qz?.quiz_questions?.length) {
      setQuizTitle(qz.title)
      setQuizPass(String(qz.pass_percent))
      setQuizQs(
        [...qz.quiz_questions]
          .sort((a, b) => a.sort_order - b.sort_order)
          .map((q) => ({
            prompt: q.prompt,
            choice_a: q.choice_a,
            choice_b: q.choice_b,
            choice_c: q.choice_c,
            choice_d: q.choice_d,
            correct_index: q.correct_index,
          }))
      )
    } else {
      setQuizTitle('Lesson quiz')
      setQuizPass('80')
      setQuizQs([{ prompt: '', choice_a: '', choice_b: '', choice_c: '', choice_d: '', correct_index: 0 }])
    }
  }, [lesson])

  const uploadVideo = async (file: File) => {
    setUploading(true)
    try {
      const fd = new FormData()
      fd.append('file', file)
      const res = await fetch(`/api/admin/lms/lessons/${lesson.id}/video`, { method: 'POST', body: fd })
      const j = await res.json()
      if (!res.ok) throw new Error(j.error || 'Upload failed')
      onReload()
    } catch (e) {
      alert(e instanceof Error ? e.message : 'Upload error')
    } finally {
      setUploading(false)
    }
  }

  const removeUploadedVideo = async () => {
    if (!confirm('Remove uploaded video from this lesson?')) return
    const res = await fetch(`/api/admin/lms/lessons/${lesson.id}/video`, { method: 'DELETE' })
    const j = await res.json()
    if (!res.ok) {
      alert(j.error || 'Failed')
      return
    }
    onReload()
  }

  const addAssignment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newAsg.title.trim()) return
    const res = await fetch('/api/admin/lms/assignments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        lessonId: lesson.id,
        title: newAsg.title.trim(),
        instructions: newAsg.instructions.trim() || null,
        sort_order: assignments.length,
      }),
    })
    const j = await res.json()
    if (!res.ok) {
      alert(j.error || 'Failed')
      return
    }
    setNewAsg({ title: '', instructions: '' })
    onReload()
  }

  const deleteAssignment = async (id: string) => {
    if (!confirm('Delete this assignment?')) return
    const res = await fetch(`/api/admin/lms/assignments/${id}`, { method: 'DELETE' })
    const j = await res.json()
    if (!res.ok) {
      alert(j.error || 'Failed')
      return
    }
    onReload()
  }

  const saveQuiz = async (e: React.FormEvent) => {
    e.preventDefault()
    setQuizSaving(true)
    try {
      const passNum = Number.parseInt(quizPass, 10)
      const questions = quizQs
        .filter((q) => q.prompt.trim())
        .map((q) => ({
          prompt: q.prompt.trim(),
          choice_a: q.choice_a.trim(),
          choice_b: q.choice_b.trim(),
          choice_c: q.choice_c.trim(),
          choice_d: q.choice_d.trim(),
          correct_index: q.correct_index,
        }))
      const res = await fetch(`/api/admin/lms/lessons/${lesson.id}/quiz`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: quizTitle.trim() || 'Lesson quiz',
          passPercent: Number.isFinite(passNum) ? passNum : 80,
          questions,
        }),
      })
      const j = await res.json()
      if (!res.ok) throw new Error(j.error || 'Save failed')
      onReload()
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Error')
    } finally {
      setQuizSaving(false)
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <input
          className="min-w-[160px] flex-1 rounded border border-border bg-background px-2 py-1.5 text-sm font-medium text-text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex gap-1">
          <button type="button" className="rounded border border-border px-2 py-0.5 text-xs" disabled={!canUp} onClick={onMoveUp}>
            ↑
          </button>
          <button type="button" className="rounded border border-border px-2 py-0.5 text-xs" disabled={!canDown} onClick={onMoveDown}>
            ↓
          </button>
          <button
            type="button"
            className="rounded border border-accent/40 px-2 py-0.5 text-xs text-accent"
            onClick={() => onSave({ ...lesson, title: title.trim(), body: body || null, video_url: video_url.trim() || null })}
          >
            Save
          </button>
          <button type="button" className="rounded border border-destructive/30 px-2 py-0.5 text-xs text-destructive" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>

      <div className="rounded-lg border border-border-light/80 bg-surface/30 p-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">Video</p>
        <p className="mb-2 text-xs text-muted">
          Upload MP4/WebM (max 500MB) for hosted playback, or paste an embed URL (YouTube/Vimeo) below. Uploaded file takes priority for learners.
        </p>
        {hasFile ? (
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-accent">Stored video attached</span>
            <button type="button" className="text-xs text-destructive underline" onClick={() => void removeUploadedVideo()}>
              Remove upload
            </button>
          </div>
        ) : (
          <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-muted">
            <span className="rounded border border-border px-3 py-1.5 hover:bg-surface-light/50">
              {uploading ? 'Uploading…' : 'Choose video file'}
            </span>
            <input
              type="file"
              accept="video/mp4,video/webm,video/quicktime,video/x-m4v"
              className="sr-only"
              disabled={uploading}
              onChange={(e) => {
                const f = e.target.files?.[0]
                e.target.value = ''
                if (f) void uploadVideo(f)
              }}
            />
          </label>
        )}
        <input
          className="mt-2 w-full rounded border border-border bg-background px-2 py-1.5 text-xs text-muted"
          placeholder="Or embed URL (optional)"
          value={video_url}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
      </div>

      <textarea
        className="min-h-[100px] w-full rounded border border-border bg-background px-2 py-1.5 text-sm text-text"
        placeholder="Lesson body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <div className="rounded-lg border border-dashed border-border-medium/60 p-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">Assignments</p>
        <ul className="mb-3 space-y-2">
          {assignments.map((a) => (
            <li key={a.id} className="flex items-start justify-between gap-2 text-sm">
              <span>
                <span className="font-medium text-text">{a.title}</span>
                {a.instructions && <span className="mt-0.5 block text-xs text-muted line-clamp-2">{a.instructions}</span>}
              </span>
              <button type="button" className="shrink-0 text-xs text-destructive" onClick={() => void deleteAssignment(a.id)}>
                Remove
              </button>
            </li>
          ))}
          {assignments.length === 0 && <li className="text-xs text-muted">No assignments yet.</li>}
        </ul>
        <form onSubmit={addAssignment} className="grid gap-2 sm:grid-cols-2">
          <input
            className="rounded border border-border bg-background px-2 py-1.5 text-sm"
            placeholder="Assignment title"
            value={newAsg.title}
            onChange={(e) => setNewAsg((s) => ({ ...s, title: e.target.value }))}
          />
          <button type="submit" className="rounded bg-accent/90 px-3 py-1.5 text-xs font-semibold text-background">
            Add assignment
          </button>
          <textarea
            className="min-h-[56px] rounded border border-border bg-background px-2 py-1.5 text-sm sm:col-span-2"
            placeholder="Instructions for the learner (optional)"
            value={newAsg.instructions}
            onChange={(e) => setNewAsg((s) => ({ ...s, instructions: e.target.value }))}
          />
        </form>
      </div>

      <div className="rounded-lg border border-dashed border-border-medium/60 p-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">Quiz (MCQ)</p>
        <p className="mb-3 text-xs text-muted">
          Optional. Learners must pass (score ≥ pass %) to mark the lesson complete. Clear all question prompts and save to remove the quiz.
        </p>
        <form onSubmit={saveQuiz} className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <label className="text-xs text-muted">
              Title
              <input
                className="mt-1 w-full min-w-[160px] rounded border border-border bg-background px-2 py-1.5 text-sm"
                value={quizTitle}
                onChange={(e) => setQuizTitle(e.target.value)}
              />
            </label>
            <label className="text-xs text-muted">
              Pass %
              <input
                type="number"
                min={1}
                max={100}
                className="mt-1 w-20 rounded border border-border bg-background px-2 py-1.5 text-sm"
                value={quizPass}
                onChange={(e) => setQuizPass(e.target.value)}
              />
            </label>
          </div>
          {quizQs.map((q, qi) => (
            <div key={qi} className="rounded border border-border-light/60 bg-surface/20 p-3">
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="text-xs font-medium text-text">Question {qi + 1}</span>
                {quizQs.length > 1 && (
                  <button
                    type="button"
                    className="text-xs text-destructive"
                    onClick={() => setQuizQs((rows) => rows.filter((_, i) => i !== qi))}
                  >
                    Remove
                  </button>
                )}
              </div>
              <input
                className="mb-2 w-full rounded border border-border bg-background px-2 py-1.5 text-sm"
                placeholder="Prompt"
                value={q.prompt}
                onChange={(e) => setQuizQs((rows) => rows.map((r, i) => (i === qi ? { ...r, prompt: e.target.value } : r)))}
              />
              {(['choice_a', 'choice_b', 'choice_c', 'choice_d'] as const).map((k, oi) => (
                <div key={k} className="mb-1 flex items-center gap-2">
                  <input
                    type="radio"
                    name={`correct-${lesson.id}-${qi}`}
                    className="shrink-0"
                    checked={q.correct_index === oi}
                    onChange={() => setQuizQs((rows) => rows.map((r, i) => (i === qi ? { ...r, correct_index: oi } : r)))}
                    aria-label={`Correct answer ${oi + 1}`}
                  />
                  <input
                    className="flex-1 rounded border border-border bg-background px-2 py-1 text-xs"
                    placeholder={`Choice ${oi + 1}`}
                    value={q[k]}
                    onChange={(e) =>
                      setQuizQs((rows) => rows.map((r, i) => (i === qi ? { ...r, [k]: e.target.value } : r)))
                    }
                  />
                </div>
              ))}
            </div>
          ))}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="rounded border border-border px-3 py-1.5 text-xs text-muted hover:text-text"
              onClick={() =>
                setQuizQs((rows) => [
                  ...rows,
                  { prompt: '', choice_a: '', choice_b: '', choice_c: '', choice_d: '', correct_index: 0 },
                ])
              }
            >
              Add question
            </button>
            <button
              type="submit"
              disabled={quizSaving}
              className="rounded bg-accent/90 px-4 py-1.5 text-xs font-semibold text-background disabled:opacity-60"
            >
              {quizSaving ? 'Saving…' : 'Save quiz'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
