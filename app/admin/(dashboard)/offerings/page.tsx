import { AdminPageHeader } from '@/app/admin/components/AdminPageHeader'
import { OfferingsClient } from './offerings-client'

export default function OfferingsPage() {
  return (
    <div>
      <AdminPageHeader
        label="Programs"
        title="Future Ready Offerings"
        description="Toggle cards on the marketing page, edit the existing paths, or add new offers without touching code."
      />
      <OfferingsClient />
    </div>
  )
}
