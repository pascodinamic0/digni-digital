-- Public marketing toggles (read by anon; mutated by admins only).

CREATE TABLE IF NOT EXISTS public.site_feature_flags (
  flag_key TEXT PRIMARY KEY,
  enabled BOOLEAN NOT NULL DEFAULT true,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

DROP TRIGGER IF EXISTS site_feature_flags_updated_at ON public.site_feature_flags;
CREATE TRIGGER site_feature_flags_updated_at
  BEFORE UPDATE ON public.site_feature_flags
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

ALTER TABLE public.site_feature_flags ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "site_feature_flags_public_select" ON public.site_feature_flags;
CREATE POLICY "site_feature_flags_public_select"
  ON public.site_feature_flags FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "site_feature_flags_admin_all" ON public.site_feature_flags;
CREATE POLICY "site_feature_flags_admin_all"
  ON public.site_feature_flags FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

INSERT INTO public.site_feature_flags (flag_key, enabled)
VALUES ('ai_employee_show_task_queue_demo', true)
ON CONFLICT (flag_key) DO NOTHING;
