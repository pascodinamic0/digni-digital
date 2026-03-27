import { CourseEditorClient } from './course-editor-client'

export default async function AdminCourseEditorPage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params
  return <CourseEditorClient courseId={courseId} />
}
