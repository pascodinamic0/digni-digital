-- One-time welcome video flag for learners (after invite signup)

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS lms_welcome_video_seen_at TIMESTAMPTZ;

COMMENT ON COLUMN public.profiles.lms_welcome_video_seen_at IS 'Set when learner dismisses the post-invite welcome screen.';
