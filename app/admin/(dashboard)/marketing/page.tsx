import { AdminPageHeader } from '@/app/admin/components/AdminPageHeader'
import { MarketingClient } from './marketing-client'

export default function MarketingSettingsPage() {
  return (
    <div>
      <AdminPageHeader
        label="Site"
        title="Marketing sections"
        description="Show or hide optional demo blocks on public pages without deploying code. The same toggle is linked from the Admin overview as “Marketing.”"
      />
      <MarketingClient />
    </div>
  )
}
