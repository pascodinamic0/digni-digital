-- Extra lead fields for chat widget (name/email already existed)
ALTER TABLE public.chat_conversations
  ADD COLUMN IF NOT EXISTS visitor_phone TEXT,
  ADD COLUMN IF NOT EXISTS visitor_company TEXT,
  ADD COLUMN IF NOT EXISTS visitor_role TEXT;
