import { AdminPageHeader } from '@/app/admin/components/AdminPageHeader'
import { PipelineBoard } from './pipeline-board'

export default function PipelinePage() {
  return (
    <div>
      <AdminPageHeader
        label="Sales"
        title="Pipeline"
        description="Contacts and deal stages—move cards between columns; edits save to the database."
      />
      <PipelineBoard />
    </div>
  )
}
