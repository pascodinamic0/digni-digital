-- Digni Digital: profiles, LMS, CRM, chat, content
-- Run in Supabase SQL editor or via supabase db push

-- Extensions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Roles
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('student', 'admin', 'staff');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- Profiles must exist before is_admin() (function body references public.profiles)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users (id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  role public.app_role NOT NULL DEFAULT 'student',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Helper: avoid RLS recursion on profiles (defined after profiles table)
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role IN ('admin', 'staff')
  );
$$;

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1))
  );
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "profiles_select_own_or_admin"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id OR public.is_admin());

CREATE POLICY "profiles_update_own"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "profiles_admin_all"
  ON public.profiles FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Program applications (Early Access / Future Ready intake)
DO $$ BEGIN
  CREATE TYPE public.application_status AS ENUM (
    'submitted',
    'payment_pending',
    'payment_verified',
    'invited',
    'enrolled',
    'rejected'
  );
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS public.program_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  profession TEXT NOT NULL,
  why_join TEXT NOT NULL,
  commit_ready TEXT NOT NULL,
  paid_program TEXT NOT NULL,
  locale TEXT NOT NULL DEFAULT 'us-en',
  status public.application_status NOT NULL DEFAULT 'submitted',
  admin_notes TEXT,
  verified_by UUID REFERENCES public.profiles (id),
  invited_user_id UUID REFERENCES auth.users (id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_program_applications_email ON public.program_applications (lower(email));
CREATE INDEX IF NOT EXISTS idx_program_applications_status ON public.program_applications (status);

DO $$
BEGIN
  ALTER TABLE public.program_applications ADD CONSTRAINT program_applications_email_key UNIQUE (email);
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

CREATE TRIGGER program_applications_updated_at
  BEFORE UPDATE ON public.program_applications
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

ALTER TABLE public.program_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "applications_admin_all"
  ON public.program_applications FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- LMS
CREATE TABLE IF NOT EXISTS public.courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.modules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID NOT NULL REFERENCES public.courses (id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id UUID NOT NULL REFERENCES public.modules (id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  body TEXT,
  video_url TEXT,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

DO $$ BEGIN
  CREATE TYPE public.enrollment_status AS ENUM ('pending', 'active', 'completed', 'cancelled');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS public.enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users (id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES public.courses (id) ON DELETE CASCADE,
  status public.enrollment_status NOT NULL DEFAULT 'active',
  invited_at TIMESTAMPTZ,
  enrolled_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, course_id)
);

CREATE TABLE IF NOT EXISTS public.lesson_progress (
  user_id UUID NOT NULL REFERENCES auth.users (id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES public.lessons (id) ON DELETE CASCADE,
  completed_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, lesson_id)
);

ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;

-- Courses: enrolled or admin
CREATE POLICY "courses_read_enrolled_or_admin"
  ON public.courses FOR SELECT
  USING (
    public.is_admin()
    OR EXISTS (
      SELECT 1 FROM public.enrollments e
      WHERE e.course_id = courses.id AND e.user_id = auth.uid() AND e.status IN ('active', 'completed', 'pending')
    )
  );

CREATE POLICY "courses_admin_write"
  ON public.courses FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "modules_read_enrolled_or_admin"
  ON public.modules FOR SELECT
  USING (
    public.is_admin()
    OR EXISTS (
      SELECT 1 FROM public.enrollments e
      WHERE e.course_id = modules.course_id AND e.user_id = auth.uid() AND e.status IN ('active', 'completed', 'pending')
    )
  );

CREATE POLICY "modules_admin_write"
  ON public.modules FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "lessons_read_enrolled_or_admin"
  ON public.lessons FOR SELECT
  USING (
    public.is_admin()
    OR EXISTS (
      SELECT 1 FROM public.enrollments e
      JOIN public.modules m ON m.course_id = e.course_id
      WHERE m.id = lessons.module_id AND e.user_id = auth.uid() AND e.status IN ('active', 'completed', 'pending')
    )
  );

CREATE POLICY "lessons_admin_write"
  ON public.lessons FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "enrollments_read_own_or_admin"
  ON public.enrollments FOR SELECT
  USING (user_id = auth.uid() OR public.is_admin());

CREATE POLICY "enrollments_admin_insert"
  ON public.enrollments FOR INSERT
  WITH CHECK (public.is_admin());

CREATE POLICY "enrollments_admin_update"
  ON public.enrollments FOR UPDATE
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "lesson_progress_own_or_admin"
  ON public.lesson_progress FOR ALL
  USING (user_id = auth.uid() OR public.is_admin())
  WITH CHECK (user_id = auth.uid() OR public.is_admin());

-- CRM
CREATE TABLE IF NOT EXISTS public.contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT,
  phone TEXT,
  full_name TEXT,
  company TEXT,
  source TEXT,
  tags TEXT[] DEFAULT '{}',
  user_id UUID REFERENCES auth.users (id) ON DELETE SET NULL,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.pipelines (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.pipeline_stages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pipeline_id UUID NOT NULL REFERENCES public.pipelines (id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.deals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_id UUID NOT NULL REFERENCES public.contacts (id) ON DELETE CASCADE,
  pipeline_id UUID NOT NULL REFERENCES public.pipelines (id) ON DELETE CASCADE,
  stage_id UUID NOT NULL REFERENCES public.pipeline_stages (id) ON DELETE RESTRICT,
  title TEXT,
  context TEXT,
  value_cents BIGINT,
  currency TEXT NOT NULL DEFAULT 'USD',
  owner_id UUID REFERENCES public.profiles (id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_deals_stage ON public.deals (stage_id);

CREATE TRIGGER contacts_updated_at
  BEFORE UPDATE ON public.contacts
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

CREATE TRIGGER deals_updated_at
  BEFORE UPDATE ON public.deals
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pipelines ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pipeline_stages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "crm_admin_all"
  ON public.contacts FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "pipelines_admin_all"
  ON public.pipelines FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "pipeline_stages_admin_all"
  ON public.pipeline_stages FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "deals_admin_all"
  ON public.deals FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Chat
CREATE TABLE IF NOT EXISTS public.chat_conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  visitor_token TEXT NOT NULL UNIQUE,
  visitor_email TEXT,
  visitor_name TEXT,
  visitor_phone TEXT,
  visitor_company TEXT,
  visitor_role TEXT,
  page_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID NOT NULL REFERENCES public.chat_conversations (id) ON DELETE CASCADE,
  body TEXT NOT NULL,
  sender TEXT NOT NULL CHECK (sender IN ('visitor', 'admin')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_chat_messages_conv ON public.chat_messages (conversation_id, created_at);

ALTER TABLE public.chat_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "chat_conversations_admin"
  ON public.chat_conversations FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "chat_messages_admin"
  ON public.chat_messages FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Blog / content (DB-backed for agent pipeline)
DO $$ BEGIN
  CREATE TYPE public.blog_post_status AS ENUM ('draft', 'review', 'published');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL,
  locale TEXT NOT NULL DEFAULT 'us-en',
  title TEXT NOT NULL,
  excerpt TEXT,
  body_md TEXT NOT NULL,
  status public.blog_post_status NOT NULL DEFAULT 'draft',
  published_at TIMESTAMPTZ,
  created_by UUID REFERENCES auth.users (id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (slug, locale)
);

CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON public.blog_posts (status, locale);

CREATE TRIGGER blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "blog_posts_public_read_published"
  ON public.blog_posts FOR SELECT
  USING (status = 'published');

CREATE POLICY "blog_posts_admin_all"
  ON public.blog_posts FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Social queue (phase 7)
DO $$ BEGIN
  CREATE TYPE public.social_post_status AS ENUM ('queued', 'publishing', 'published', 'failed');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS public.social_post_queue (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  blog_post_id UUID REFERENCES public.blog_posts (id) ON DELETE SET NULL,
  provider TEXT NOT NULL,
  payload JSONB NOT NULL DEFAULT '{}',
  status public.social_post_status NOT NULL DEFAULT 'queued',
  scheduled_for TIMESTAMPTZ,
  last_error TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TRIGGER social_post_queue_updated_at
  BEFORE UPDATE ON public.social_post_queue
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

ALTER TABLE public.social_post_queue ENABLE ROW LEVEL SECURITY;

CREATE POLICY "social_queue_admin"
  ON public.social_post_queue FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Seed: default pipeline + Future Ready course (ids stable for app code; safe to re-run)
INSERT INTO public.pipelines (id, name, sort_order)
VALUES ('00000000-0000-4000-8000-000000000001', 'Sales', 0)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.pipeline_stages (id, pipeline_id, name, sort_order)
VALUES
  ('00000000-0000-4000-8000-000000000011', '00000000-0000-4000-8000-000000000001', 'New lead', 0),
  ('00000000-0000-4000-8000-000000000012', '00000000-0000-4000-8000-000000000001', 'Qualified', 1),
  ('00000000-0000-4000-8000-000000000013', '00000000-0000-4000-8000-000000000001', 'Demo / intent', 2),
  ('00000000-0000-4000-8000-000000000014', '00000000-0000-4000-8000-000000000001', 'Won / booked', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.courses (id, slug, title, description, sort_order)
VALUES (
  '00000000-0000-4000-8000-000000000101',
  'future-ready-graduate',
  'Future-Ready Graduate Program',
  'Three trimesters: digital foundation, marketing & branding, job readiness & placement.',
  0
)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.modules (id, course_id, title, sort_order)
VALUES
  ('00000000-0000-4000-8000-000000000201', '00000000-0000-4000-8000-000000000101', 'First trimester — Digital foundation & web', 0),
  ('00000000-0000-4000-8000-000000000202', '00000000-0000-4000-8000-000000000101', 'Second trimester — Marketing & professional branding', 1),
  ('00000000-0000-4000-8000-000000000203', '00000000-0000-4000-8000-000000000101', 'Third trimester — Job readiness & placement', 2)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.lessons (id, module_id, title, body, sort_order)
VALUES
  ('00000000-0000-4000-8000-000000000301', '00000000-0000-4000-8000-000000000201', 'Welcome & orientation', 'Use this space for lesson content, links, and assignments.', 0),
  ('00000000-0000-4000-8000-000000000302', '00000000-0000-4000-8000-000000000202', 'Module kickoff', 'Replace with your curriculum.', 0),
  ('00000000-0000-4000-8000-000000000303', '00000000-0000-4000-8000-000000000203', 'Placement prep', 'Replace with your curriculum.', 0)
ON CONFLICT (id) DO NOTHING;
