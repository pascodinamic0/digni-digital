import { redirect } from 'next/navigation'

/** @deprecated Use /admin/pipeline — kept for old links and bookmarks. */
export default function CrmRedirectPage() {
  redirect('/admin/pipeline')
}
