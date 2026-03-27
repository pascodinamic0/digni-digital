-- LMS: uploaded lesson videos (private storage), assignments + submissions

ALTER TABLE public.courses
  ADD COLUMN IF NOT EXISTS published BOOLEAN NOT NULL DEFAULT true;

ALTER TABLE public.lessons
  ADD COLUMN IF NOT EXISTS video_storage_path TEXT;

COMMENT ON COLUMN public.lessons.video_storage_path IS 'Path in lms-videos bucket; playback via signed URL API.';

CREATE TABLE IF NOT EXISTS public.assignments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID NOT NULL REFERENCES public.lessons (id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  instructions TEXT,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_assignments_lesson ON public.assignments (lesson_id);

CREATE TABLE IF NOT EXISTS public.assignment_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assignment_id UUID NOT NULL REFERENCES public.assignments (id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users (id) ON DELETE CASCADE,
  body TEXT NOT NULL,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (assignment_id, user_id)
);

CREATE INDEX IF NOT EXISTS idx_assignment_submissions_user ON public.assignment_submissions (user_id);

CREATE TRIGGER assignment_submissions_updated_at
  BEFORE UPDATE ON public.assignment_submissions
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

ALTER TABLE public.assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assignment_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "assignments_read_enrolled_or_admin"
  ON public.assignments FOR SELECT
  USING (
    public.is_admin()
    OR EXISTS (
      SELECT 1
      FROM public.lessons l
      JOIN public.modules m ON m.id = l.module_id
      JOIN public.enrollments e ON e.course_id = m.course_id
      WHERE l.id = assignments.lesson_id
        AND e.user_id = auth.uid()
        AND e.status IN ('active', 'completed', 'pending')
    )
  );

CREATE POLICY "assignments_admin_write"
  ON public.assignments FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "assignment_submissions_select_own_or_admin"
  ON public.assignment_submissions FOR SELECT
  USING (user_id = auth.uid() OR public.is_admin());

CREATE POLICY "assignment_submissions_insert_enrolled"
  ON public.assignment_submissions FOR INSERT
  WITH CHECK (
    user_id = auth.uid()
    AND EXISTS (
      SELECT 1
      FROM public.assignments a
      JOIN public.lessons l ON l.id = a.lesson_id
      JOIN public.modules m ON m.id = l.module_id
      JOIN public.enrollments e ON e.course_id = m.course_id
      WHERE a.id = assignment_submissions.assignment_id
        AND e.user_id = auth.uid()
        AND e.status IN ('active', 'completed', 'pending')
    )
  );

CREATE POLICY "assignment_submissions_update_own_or_admin"
  ON public.assignment_submissions FOR UPDATE
  USING (user_id = auth.uid() OR public.is_admin())
  WITH CHECK (user_id = auth.uid() OR public.is_admin());

CREATE POLICY "assignment_submissions_delete_own_or_admin"
  ON public.assignment_submissions FOR DELETE
  USING (user_id = auth.uid() OR public.is_admin());

-- Private bucket; uploads via service role in admin API; reads via signed URLs from API
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'lms-videos',
  'lms-videos',
  false,
  524288000,
  ARRAY['video/mp4', 'video/webm', 'video/quicktime', 'video/x-m4v']::text[]
)
ON CONFLICT (id) DO UPDATE SET
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;
