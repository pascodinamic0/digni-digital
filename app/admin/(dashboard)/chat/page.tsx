import { requireAdminWithServiceDb } from '@/lib/auth/admin-data'
import { AdminPageHeader } from '@/app/admin/components/AdminPageHeader'

export default async function AdminChatPage() {
  const db = await requireAdminWithServiceDb()
  const { data: conversations } = await db
    .from('chat_conversations')
    .select('*')
    .order('updated_at', { ascending: false })
    .limit(50)

  const ids = (conversations ?? []).map((c) => c.id)
  type ChatMsg = { id: string; conversation_id: string; body: string; sender: string }
  const { data: rawMessages } =
    ids.length > 0
      ? await db.from('chat_messages').select('*').in('conversation_id', ids).order('created_at')
      : { data: [] as ChatMsg[] }

  const messages: ChatMsg[] = (rawMessages ?? []) as ChatMsg[]

  const byConv = new Map<string, ChatMsg[]>()
  for (const m of messages) {
    const cid = m.conversation_id as string
    if (!byConv.has(cid)) byConv.set(cid, [])
    byConv.get(cid)!.push(m)
  }

  return (
    <div>
      <AdminPageHeader
        label="Support"
        title="Live chat"
        description="Visitor conversations from the site widget. Reply via email or WhatsApp for now."
      />
      <div className="space-y-6">
        {(conversations ?? []).map((c) => (
          <div key={c.id} className="card-glass rounded-2xl p-5 md:p-6">
            <div className="text-sm text-muted mb-2">
              {c.id} · updated {new Date(c.updated_at as string).toLocaleString()}
              {c.page_url && (
                <span>
                  {' '}
                  · <span className="text-accent">{String(c.page_url)}</span>
                </span>
              )}
            </div>
            {(c.visitor_name || c.visitor_email) && (
              <div className="text-sm text-text mb-3 space-y-0.5">
                {c.visitor_name && (
                  <p>
                    <span className="font-medium text-muted">Name:</span> {String(c.visitor_name)}
                  </p>
                )}
                {c.visitor_email && (
                  <p>
                    <span className="font-medium text-muted">Email:</span> {String(c.visitor_email)}
                  </p>
                )}
                {c.visitor_phone && (
                  <p>
                    <span className="font-medium text-muted">Phone:</span> {String(c.visitor_phone)}
                  </p>
                )}
                {c.visitor_company && (
                  <p>
                    <span className="font-medium text-muted">Company:</span> {String(c.visitor_company)}
                  </p>
                )}
                {c.visitor_role && (
                  <p>
                    <span className="font-medium text-muted">Role:</span> {String(c.visitor_role)}
                  </p>
                )}
              </div>
            )}
            <ul className="space-y-2 text-sm">
              {(byConv.get(c.id as string) ?? []).map((m) => (
                <li key={m.id as string} className={m.sender === 'visitor' ? 'text-text' : 'text-success'}>
                  <strong>{String(m.sender)}:</strong> {String(m.body)}
                </li>
              ))}
            </ul>
          </div>
        ))}
        {(conversations ?? []).length === 0 && <p className="text-muted">No conversations yet.</p>}
      </div>
    </div>
  )
}
