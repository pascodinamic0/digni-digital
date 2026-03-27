-- LMS: custom invite tokens (hashed), configurable TTL, audit trail

CREATE TABLE IF NOT EXISTS public.lms_invites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  course_id UUID NOT NULL REFERENCES public.courses (id) ON DELETE CASCADE,
  token_hash TEXT NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  used_at TIMESTAMPTZ,
  revoked_at TIMESTAMPTZ,
  created_by UUID REFERENCES public.profiles (id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT lms_invites_token_hash_key UNIQUE (token_hash)
);

CREATE INDEX IF NOT EXISTS idx_lms_invites_email_lower ON public.lms_invites (lower(email));
CREATE INDEX IF NOT EXISTS idx_lms_invites_course ON public.lms_invites (course_id);
CREATE INDEX IF NOT EXISTS idx_lms_invites_expires ON public.lms_invites (expires_at)
  WHERE used_at IS NULL AND revoked_at IS NULL;

ALTER TABLE public.lms_invites ENABLE ROW LEVEL SECURITY;

CREATE POLICY "lms_invites_admin_all"
  ON public.lms_invites FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

COMMENT ON TABLE public.lms_invites IS 'Custom LMS invite tokens; store only SHA-256 hash of secret.';
