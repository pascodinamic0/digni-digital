-- Affiliate program applications (public form → admin dashboard + export)

CREATE TABLE IF NOT EXISTS public.affiliate_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  instagram TEXT,
  tiktok TEXT,
  youtube TEXT,
  audience_size TEXT,
  message TEXT,
  locale TEXT NOT NULL DEFAULT 'us-en',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_affiliate_applications_created_at ON public.affiliate_applications (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_affiliate_applications_email ON public.affiliate_applications (lower(email));

ALTER TABLE public.affiliate_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "affiliate_applications_admin_all"
  ON public.affiliate_applications FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());
