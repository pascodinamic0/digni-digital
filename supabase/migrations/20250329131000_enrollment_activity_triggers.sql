-- Keep last_activity_at in sync without granting students UPDATE on enrollments

CREATE OR REPLACE FUNCTION public.touch_enrollment_activity_from_lesson_progress()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.enrollments e
  SET last_activity_at = now()
  FROM public.lessons l
  JOIN public.modules m ON m.id = l.module_id
  WHERE l.id = NEW.lesson_id
    AND e.course_id = m.course_id
    AND e.user_id = NEW.user_id;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_lesson_progress_touch_activity ON public.lesson_progress;
CREATE TRIGGER trg_lesson_progress_touch_activity
  AFTER INSERT OR UPDATE ON public.lesson_progress
  FOR EACH ROW EXECUTE FUNCTION public.touch_enrollment_activity_from_lesson_progress();

CREATE OR REPLACE FUNCTION public.touch_enrollment_activity_from_assignment()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.enrollments e
  SET last_activity_at = now()
  FROM public.assignments a
  JOIN public.lessons l ON l.id = a.lesson_id
  JOIN public.modules m ON m.id = l.module_id
  WHERE a.id = NEW.assignment_id
    AND e.course_id = m.course_id
    AND e.user_id = NEW.user_id;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_assignment_submission_touch_activity ON public.assignment_submissions;
CREATE TRIGGER trg_assignment_submission_touch_activity
  AFTER INSERT OR UPDATE ON public.assignment_submissions
  FOR EACH ROW EXECUTE FUNCTION public.touch_enrollment_activity_from_assignment();
