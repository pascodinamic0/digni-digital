-- Blog topic discovery queue for admin approval workflow
DO $$ BEGIN
  CREATE TYPE public.blog_topic_status AS ENUM (
    'pending',
    'approved',
    'rejected',
    'generating',
    'published',
    'failed'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS public.blog_topic_proposals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  fancy_title TEXT NOT NULL,
  plain_title TEXT,
  proposed_slug TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'Future of Work',
  source TEXT NOT NULL DEFAULT 'discovery_agent',
  research_summary TEXT,
  target_audience TEXT,
  suggested_tags TEXT[] DEFAULT '{}',
  reference_urls TEXT[] DEFAULT '{}',
  status public.blog_topic_status NOT NULL DEFAULT 'pending',
  blog_post_id UUID REFERENCES public.blog_posts (id) ON DELETE SET NULL,
  error_message TEXT,
  discovered_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  reviewed_at TIMESTAMPTZ,
  reviewed_by UUID REFERENCES public.profiles (id) ON DELETE SET NULL,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (proposed_slug)
);

CREATE INDEX IF NOT EXISTS idx_blog_topic_proposals_status ON public.blog_topic_proposals (status, discovered_at DESC);

CREATE TRIGGER blog_topic_proposals_updated_at
  BEFORE UPDATE ON public.blog_topic_proposals
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

ALTER TABLE public.blog_topic_proposals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "blog_topic_proposals_admin_all"
  ON public.blog_topic_proposals FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

COMMENT ON TABLE public.blog_topic_proposals IS 'AI-discovered blog topics awaiting admin approval before generation/publish.';
