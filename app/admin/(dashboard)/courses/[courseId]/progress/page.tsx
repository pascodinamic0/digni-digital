import { notFound } from 'next/navigation'
import { requireAdminWithServiceDb } from '@/lib/auth/admin-data'
import { ProgressClient } from './progress-client'

export default async function AdminCourseProgressPage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params
  const db = await requireAdminWithServiceDb()
  const { data: course, error } = await db.from('courses').select('id, title').eq('id', courseId).maybeSingle()
  if (error || !course) notFound()

  return <ProgressClient courseId={courseId} courseTitle={course.title} />
}
