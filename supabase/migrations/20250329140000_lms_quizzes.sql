-- LMS: MCQ quizzes per lesson, attempts, pass threshold

CREATE TABLE IF NOT EXISTS public.quizzes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID NOT NULL REFERENCES public.lessons (id) ON DELETE CASCADE,
  title TEXT NOT NULL DEFAULT 'Lesson quiz',
  pass_percent INT NOT NULL DEFAULT 80 CHECK (pass_percent >= 1 AND pass_percent <= 100),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT quizzes_one_per_lesson UNIQUE (lesson_id)
);

CREATE INDEX IF NOT EXISTS idx_quizzes_lesson ON public.quizzes (lesson_id);

CREATE TABLE IF NOT EXISTS public.quiz_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quiz_id UUID NOT NULL REFERENCES public.quizzes (id) ON DELETE CASCADE,
  prompt TEXT NOT NULL,
  sort_order INT NOT NULL DEFAULT 0,
  choice_a TEXT NOT NULL,
  choice_b TEXT NOT NULL,
  choice_c TEXT NOT NULL,
  choice_d TEXT NOT NULL,
  correct_index SMALLINT NOT NULL CHECK (correct_index >= 0 AND correct_index <= 3)
);

CREATE INDEX IF NOT EXISTS idx_quiz_questions_quiz ON public.quiz_questions (quiz_id);

CREATE TABLE IF NOT EXISTS public.quiz_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quiz_id UUID NOT NULL REFERENCES public.quizzes (id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users (id) ON DELETE CASCADE,
  score_percent INT NOT NULL CHECK (score_percent >= 0 AND score_percent <= 100),
  passed BOOLEAN NOT NULL,
  answers JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_quiz_attempts_quiz_user ON public.quiz_attempts (quiz_id, user_id);

ALTER TABLE public.quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "quizzes_read_enrolled_or_admin"
  ON public.quizzes FOR SELECT
  USING (
    public.is_admin()
    OR EXISTS (
      SELECT 1
      FROM public.lessons l
      JOIN public.modules m ON m.id = l.module_id
      JOIN public.enrollments e ON e.course_id = m.course_id
      WHERE l.id = quizzes.lesson_id
        AND e.user_id = auth.uid()
        AND e.status IN ('active', 'completed', 'pending')
    )
  );

CREATE POLICY "quizzes_admin_write"
  ON public.quizzes FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Learners must not read correct_index; questions are served via server-side admin client without answers.
CREATE POLICY "quiz_questions_select_admin"
  ON public.quiz_questions FOR SELECT
  USING (public.is_admin());

CREATE POLICY "quiz_questions_admin_write"
  ON public.quiz_questions FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

CREATE POLICY "quiz_attempts_select_own_or_admin"
  ON public.quiz_attempts FOR SELECT
  USING (user_id = auth.uid() OR public.is_admin());

CREATE POLICY "quiz_attempts_insert_enrolled"
  ON public.quiz_attempts FOR INSERT
  WITH CHECK (
    user_id = auth.uid()
    AND EXISTS (
      SELECT 1
      FROM public.quizzes q
      JOIN public.lessons l ON l.id = q.lesson_id
      JOIN public.modules m ON m.id = l.module_id
      JOIN public.enrollments e ON e.course_id = m.course_id
      WHERE q.id = quiz_attempts.quiz_id
        AND e.user_id = auth.uid()
        AND e.status IN ('active', 'completed', 'pending')
    )
  );

COMMENT ON TABLE public.quizzes IS 'At most one quiz per lesson; MCQ in quiz_questions.';

CREATE OR REPLACE FUNCTION public.touch_enrollment_activity_from_quiz_attempt()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.enrollments e
  SET last_activity_at = now()
  FROM public.quizzes q
  JOIN public.lessons l ON l.id = q.lesson_id
  JOIN public.modules m ON m.id = l.module_id
  WHERE q.id = NEW.quiz_id
    AND e.course_id = m.course_id
    AND e.user_id = NEW.user_id;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_quiz_attempt_touch_activity ON public.quiz_attempts;
CREATE TRIGGER trg_quiz_attempt_touch_activity
  AFTER INSERT ON public.quiz_attempts
  FOR EACH ROW EXECUTE FUNCTION public.touch_enrollment_activity_from_quiz_attempt();
