/** Stable demo headshots for AI Employee product UI (contacts directory + unified inbox). */

const CONTACT_ROW_AVATARS: Record<string, string> = {
  n1: '/demos/avatars/contact-n1.jpg',
  n2: '/demos/avatars/contact-n2.jpg',
  n3: '/demos/avatars/contact-n3.jpg',
  n4: '/demos/avatars/contact-n4.jpg',
  n5: '/demos/avatars/contact-n5.jpg',
}

const INBOX_AVATARS: Record<number, string> = {
  1: '/demos/avatars/inbox-1.jpg',
  2: '/demos/avatars/inbox-2.jpg',
  3: '/demos/avatars/inbox-3.jpg',
  4: '/demos/avatars/inbox-4.jpg',
  5: '/demos/avatars/inbox-5.jpg',
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
  website: { name: 'Sarah J.', avatarSrc: '/demos/avatars/inbox-1.jpg' },
  whatsapp: { name: 'Mike C.', avatarSrc: '/demos/avatars/inbox-2.jpg' },
  instagram: { name: 'Elena R.', avatarSrc: '/demos/avatars/inbox-4.jpg' },
  facebook: { name: 'James W.', avatarSrc: '/demos/avatars/contact-n4.jpg' },
  sms: { name: 'Riley P.', avatarSrc: '/demos/avatars/contact-n3.jpg' },
  google: { name: 'Alex K.', avatarSrc: '/demos/avatars/contact-n5.jpg' },
}

export function getConversationDemoVisitor(channelId: string) {
  return CONVERSATION_DEMO_VISITORS[channelId]
}
