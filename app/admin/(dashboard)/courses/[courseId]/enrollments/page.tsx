import { notFound } from 'next/navigation'
import { requireAdminWithServiceDb } from '@/lib/auth/admin-data'
import { EnrollmentsClient } from './enrollments-client'

export default async function AdminCourseEnrollmentsPage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params
  const db = await requireAdminWithServiceDb()
  const { data: course, error } = await db.from('courses').select('id, title').eq('id', courseId).maybeSingle()
  if (error || !course) notFound()

  return <EnrollmentsClient courseId={courseId} courseTitle={course.title} />
}
