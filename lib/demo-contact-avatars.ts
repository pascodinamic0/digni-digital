/** Stable demo headshots for AI Employee product UI (contacts directory + unified inbox). */

const AVATAR_BASE = '/demos/avatars/v2'

const CONTACT_ROW_AVATARS: Record<string, string> = {
  n1: `${AVATAR_BASE}/contact-n1.jpg`,
  n2: `${AVATAR_BASE}/contact-n2.jpg`,
  n3: `${AVATAR_BASE}/contact-n3.jpg`,
  n4: `${AVATAR_BASE}/contact-n4.jpg`,
  n5: `${AVATAR_BASE}/contact-n5.jpg`,
}

const INBOX_AVATARS: Record<number, string> = {
  1: `${AVATAR_BASE}/inbox-1.jpg`,
  2: `${AVATAR_BASE}/inbox-2.jpg`,
  3: `${AVATAR_BASE}/inbox-3.jpg`,
  4: `${AVATAR_BASE}/inbox-4.jpg`,
  5: `${AVATAR_BASE}/inbox-5.jpg`,
}

export function getContactRowAvatarSrc(rowId: string): string | undefined {
  return CONTACT_ROW_AVATARS[rowId]
}

export function getInboxConversationAvatarSrc(conversationId: number): string | undefined {
  return INBOX_AVATARS[conversationId]
}

/** Visitor identity per channel in ConversationMockups demos */
export const CONVERSATION_DEMO_VISITORS: Record<
  string,
  { name: string; avatarSrc: string }
> = {
  website: { name: 'Jordan M.', avatarSrc: `${AVATAR_BASE}/inbox-1.jpg` },
  whatsapp: { name: 'Marcus W.', avatarSrc: `${AVATAR_BASE}/inbox-2.jpg` },
  instagram: { name: 'Elena R.', avatarSrc: `${AVATAR_BASE}/inbox-4.jpg` },
  facebook: { name: 'James W.', avatarSrc: `${AVATAR_BASE}/inbox-2.jpg` },
  sms: { name: 'Keisha P.', avatarSrc: `${AVATAR_BASE}/contact-n3.jpg` },
  google: { name: 'Alex K.', avatarSrc: `${AVATAR_BASE}/contact-n5.jpg` },
}

export function getConversationDemoVisitor(channelId: string) {
  return CONVERSATION_DEMO_VISITORS[channelId]
}
