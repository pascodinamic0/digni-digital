import { AdminPageHeader } from '@/app/admin/components/AdminPageHeader'
import { ContactsClient } from './contacts-client'

export default function ContactsPage() {
  return (
    <div>
      <AdminPageHeader
        label="People"
        title="Contacts"
        description="Everyone in your pipeline—create, list, and update records; tied to deals on the Pipeline board."
      />
      <ContactsClient />
    </div>
  )
}
