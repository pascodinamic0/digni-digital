import { AdminPageHeader } from '@/app/admin/components/AdminPageHeader'
import { BlogHubClient } from './blog-hub-client'

export default function BlogPage() {
  return (
    <div>
      <AdminPageHeader
        label="Publishing"
        title="Blog"
        description="Full marketing catalog, database drafts, social queue, and an agent handoff for Cursor or OpenAI."
      />
      <BlogHubClient />
    </div>
  )
}
