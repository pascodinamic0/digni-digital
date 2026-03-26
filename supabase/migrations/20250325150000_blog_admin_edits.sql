-- Richer blog overrides (Super Admin): cover image, tags, category, read time
ALTER TABLE public.blog_posts
  ADD COLUMN IF NOT EXISTS cover_image_url TEXT,
  ADD COLUMN IF NOT EXISTS tags TEXT[],
  ADD COLUMN IF NOT EXISTS category TEXT,
  ADD COLUMN IF NOT EXISTS read_time TEXT;

COMMENT ON COLUMN public.blog_posts.body_md IS 'Markdown or HTML body; when published, overrides file-based content for this slug+locale.';

-- Public image bucket for blog (uploads via service role in API)
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'blog-images',
  'blog-images',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']::text[]
)
ON CONFLICT (id) DO NOTHING;

DROP POLICY IF EXISTS "blog_images_public_read" ON storage.objects;
CREATE POLICY "blog_images_public_read"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'blog-images');
