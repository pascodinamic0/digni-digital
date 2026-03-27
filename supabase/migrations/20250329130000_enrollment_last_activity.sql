ALTER TABLE public.enrollments
  ADD COLUMN IF NOT EXISTS last_activity_at TIMESTAMPTZ;

COMMENT ON COLUMN public.enrollments.last_activity_at IS 'Updated on lesson progress and assignment submission.';
