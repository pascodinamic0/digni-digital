import { AdminPageHeader } from '@/app/admin/components/AdminPageHeader'
import { BlogTopicsClient } from './blog-topics-client'

export default function BlogTopicsPage() {
  return (
    <div>
      <AdminPageHeader
        label="Publishing"
        title="Blog topic queue"
        description="Discovery agent finds untold AI career and growth topics. Approve, then publish to the live blog (DB layer). File locales: commit or run locale fills for full parity."
      />
      <BlogTopicsClient />
    </div>
  )
}
