import Link from 'next/link'
import type { SyllabusModule } from '@/lib/lms/learner-course-syllabus'

type Props = {
  locale: string
  courseSlug: string
  modules: SyllabusModule[]
  access: Map<string, { unlocked: boolean }>
  done: Set<string>
  currentLessonId?: string | null
}

export function CourseSyllabusSidebar({ locale, courseSlug, modules, access, done, currentLessonId }: Props) {
  return (
    <nav className="rounded-2xl border border-border-light/80 bg-surface/50 p-4" aria-label="Course outline">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted">Course outline</p>
      <Link
        href={`/${locale}/learn/${courseSlug}`}
        className={`mb-4 block rounded-lg px-2 py-1.5 text-sm font-medium ${
          !currentLessonId ? 'bg-accent/15 text-accent' : 'text-muted hover:text-text'
        }`}
      >
        Overview
      </Link>
      <ul className="space-y-4">
        {modules.map((mod) => (
          <li key={mod.id}>
            <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted">{mod.title}</p>
            <ul className="space-y-1">
              {mod.lessons.map((lesson) => {
                const s = access.get(lesson.id)
                const unlocked = s?.unlocked ?? false
                const active = currentLessonId === lesson.id
                return (
                  <li key={lesson.id}>
                    {unlocked ? (
                      <Link
                        href={`/${locale}/learn/${courseSlug}/${lesson.id}`}
                        className={`flex items-center justify-between gap-2 rounded-lg px-2 py-2 text-sm transition-colors ${
                          active
                            ? 'bg-accent/15 font-medium text-accent ring-1 ring-inset ring-accent/30'
                            : 'text-text hover:bg-accent/10'
                        }`}
                      >
                        <span className="line-clamp-2">{lesson.title}</span>
                        {done.has(lesson.id) ? (
                          <span className="shrink-0 text-[10px] text-success">Done</span>
                        ) : null}
                      </Link>
                    ) : (
                      <span className="flex items-center justify-between gap-2 rounded-lg px-2 py-2 text-sm text-muted opacity-70">
                        <span className="line-clamp-2">{lesson.title}</span>
                        <span className="shrink-0 text-[10px]">Locked</span>
                      </span>
                    )}
                  </li>
                )
              })}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
