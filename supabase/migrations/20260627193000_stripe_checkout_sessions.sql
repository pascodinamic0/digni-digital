-- Stripe Checkout session ledger for webhook idempotency and admin visibility.
CREATE TABLE IF NOT EXISTS public.stripe_checkout_sessions (
  stripe_session_id TEXT PRIMARY KEY,
  stripe_event_id TEXT UNIQUE,
  plan TEXT NOT NULL,
  locale TEXT,
  mode TEXT,
  status TEXT,
  payment_status TEXT,
  customer_email TEXT,
  customer_id TEXT,
  subscription_id TEXT,
  amount_total BIGINT,
  currency TEXT,
  raw JSONB NOT NULL DEFAULT '{}'::jsonb,
  fulfilled_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_stripe_checkout_sessions_customer_email
  ON public.stripe_checkout_sessions (lower(customer_email));

CREATE INDEX IF NOT EXISTS idx_stripe_checkout_sessions_plan_created
  ON public.stripe_checkout_sessions (plan, created_at DESC);

DROP TRIGGER IF EXISTS stripe_checkout_sessions_updated_at ON public.stripe_checkout_sessions;
CREATE TRIGGER stripe_checkout_sessions_updated_at
  BEFORE UPDATE ON public.stripe_checkout_sessions
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

ALTER TABLE public.stripe_checkout_sessions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "stripe_checkout_sessions_admin_all" ON public.stripe_checkout_sessions;
CREATE POLICY "stripe_checkout_sessions_admin_all"
  ON public.stripe_checkout_sessions FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());
