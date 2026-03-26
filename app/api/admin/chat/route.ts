import { NextResponse } from 'next/server'
import { verifyAdminApi } from '@/lib/auth/admin-api'

export async function GET() {
  const gate = await verifyAdminApi()
  if (!gate.ok) {
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  }
  const { db } = gate

  const { data: conversations } = await db
    .from('chat_conversations')
    .select('*')
    .order('updated_at', { ascending: false })
    .limit(100)

  const ids = (conversations ?? []).map((c) => c.id)
  const { data: messages } =
    ids.length > 0
      ? await db.from('chat_messages').select('*').in('conversation_id', ids).order('created_at')
      : { data: [] as Record<string, unknown>[] }

  return NextResponse.json({ conversations: conversations ?? [], messages: messages ?? [] })
}
