-- Admin-managed Future Ready Graduate offerings.
CREATE TABLE IF NOT EXISTS public.program_offerings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  price TEXT NOT NULL,
  period TEXT NOT NULL,
  price_options JSONB NOT NULL DEFAULT '[]'::jsonb,
  description TEXT NOT NULL,
  audience TEXT NOT NULL DEFAULT 'custom'
    CHECK (audience IN ('schools', 'professional', 'everyone', 'custom')),
  features TEXT[] NOT NULL DEFAULT ARRAY[]::text[],
  popular BOOLEAN NOT NULL DEFAULT false,
  coming_soon BOOLEAN NOT NULL DEFAULT false,
  is_new BOOLEAN NOT NULL DEFAULT false,
  spots_available INT,
  cta_mode TEXT NOT NULL DEFAULT 'consultation'
    CHECK (cta_mode IN ('school', 'professional', 'guided', 'consultation')),
  is_visible BOOLEAN NOT NULL DEFAULT true,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_program_offerings_visible_sort
  ON public.program_offerings (is_visible, sort_order);

DROP TRIGGER IF EXISTS program_offerings_updated_at ON public.program_offerings;
CREATE TRIGGER program_offerings_updated_at
  BEFORE UPDATE ON public.program_offerings
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

ALTER TABLE public.program_offerings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "program_offerings_public_visible_select" ON public.program_offerings;
CREATE POLICY "program_offerings_public_visible_select"
  ON public.program_offerings FOR SELECT
  TO public
  USING (is_visible = true);

DROP POLICY IF EXISTS "program_offerings_admin_all" ON public.program_offerings;
CREATE POLICY "program_offerings_admin_all"
  ON public.program_offerings FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

INSERT INTO public.program_offerings (
  slug,
  name,
  price,
  period,
  price_options,
  description,
  audience,
  features,
  popular,
  coming_soon,
  is_new,
  spots_available,
  cta_mode,
  is_visible,
  sort_order
)
VALUES
  (
    'school-partnership-program',
    'School Partnership Program',
    '$5,000',
    '/semester',
    '[{"amount":"$5,000","period":"/semester (5 months)"},{"amount":"$12,000","period":"/year"}]'::jsonb,
    'Full program. Schools and institutions.',
    'schools',
    ARRAY[
      'Full academic year curriculum (42 weeks)',
      'On-site facilitator and support',
      'Internet connectivity included',
      'Premium AI tools & subscriptions',
      'All learning materials provided',
      'Progress tracking and reporting',
      'Student assessment and certification',
      'Ongoing program support',
      'Job readiness training, and skills to create your own jobs',
      'Guided learning personalized to each student''s talents and gifts',
      'Partnership success guarantee'
    ],
    true,
    false,
    false,
    null,
    'school',
    true,
    10
  ),
  (
    'guided-learning',
    'Guided Learning',
    '$49',
    ' one-time',
    '[]'::jsonb,
    'Digital skills. Personalized to your talents. Learn anywhere. Earn online.',
    'everyone',
    ARRAY[
      'Full digital skills curriculum (start from scratch)',
      'Personalized guided learning, tailored to your unique talents and gifts',
      'Learn from home, school, university, or vocational center',
      'AI-powered tools and techniques for making money online',
      'Guided learning - study on your own schedule with support',
      'Skills that bring out your entrepreneurial potential',
      'Community support and peer learning forums',
      'Digital certificates upon completion',
      'Lifetime access to all course materials',
      'Portfolio building and job placement resources',
      'Learn how to use AI to compete with experts',
      'Start earning while you learn, create jobs or get hired'
    ],
    false,
    false,
    true,
    25,
    'guided',
    false,
    20
  ),
  (
    'professional-institutes',
    'Professional Institutes',
    '$1,000',
    '/vocational center',
    '[]'::jsonb,
    'For each vocational center, training academy, or professional institute.',
    'professional',
    ARRAY[
      'Full professional curriculum for adult learners',
      'Flexible schedule for working professionals',
      'Dedicated facilitator and cohort support',
      'Premium AI tools & subscriptions',
      'All learning materials provided',
      'Progress tracking and certification',
      'Job placement and industry partnerships',
      'Customizable program length',
      'On-site or hybrid delivery options',
      'Partnership success guarantee'
    ],
    false,
    false,
    false,
    null,
    'professional',
    true,
    30
  )
ON CONFLICT (slug) DO NOTHING;
