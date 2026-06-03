import { FLOW_STEP_ADS_ANCHOR } from '@/lib/ai-receptionist-flow'
import type { LucideIcon } from 'lucide-react'
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  Kanban,
  Calendar,
  Megaphone,
  Star,
  Workflow,
  BarChart3,
  Settings,
} from 'lucide-react'

export type SoftwareNavId =
  | 'dashboard'
  | 'conversations'
  | 'contacts'
  | 'opportunities'
  | 'calendar'
  | 'adsManager'
  | 'reputationManager'
  | 'automations'
  | 'reporting'
  | 'settings'

export const SOFTWARE_NAV_ITEMS: { id: SoftwareNavId; Icon: LucideIcon }[] = [
  { id: 'dashboard', Icon: LayoutDashboard },
  { id: 'conversations', Icon: MessageSquare },
  { id: 'contacts', Icon: Users },
  { id: 'opportunities', Icon: Kanban },
  { id: 'calendar', Icon: Calendar },
  { id: 'adsManager', Icon: Megaphone },
  { id: 'reputationManager', Icon: Star },
  { id: 'automations', Icon: Workflow },
  { id: 'reporting', Icon: BarChart3 },
  { id: 'settings', Icon: Settings },
]

/** Nav modules shown on the AI Employee product page (matches journey demos). */
export const AI_EMPLOYEE_OFFER_NAV_IDS: SoftwareNavId[] = [
  'conversations',
  'contacts',
  'opportunities',
  'calendar',
  'adsManager',
  'reputationManager',
]

/** Journey section anchors for sidebar scroll (product page). */
export const AI_EMPLOYEE_NAV_SCROLL_TARGETS: Partial<Record<SoftwareNavId, string>> = {
  conversations: 'flow-step-1',
  contacts: 'flow-step-3',
  opportunities: 'flow-step-4',
  calendar: 'flow-step-5',
  adsManager: FLOW_STEP_ADS_ANCHOR,
  reputationManager: 'flow-step-6',
}

export function getSoftwareNavItems(scope: 'full' | 'offer' = 'full') {
  if (scope === 'full') return SOFTWARE_NAV_ITEMS
  const order = new Map(AI_EMPLOYEE_OFFER_NAV_IDS.map((id, i) => [id, i]))
  return SOFTWARE_NAV_ITEMS.filter((item) => order.has(item.id)).sort(
    (a, b) => (order.get(a.id) ?? 0) - (order.get(b.id) ?? 0),
  )
}

export function scrollToProductNav(id: SoftwareNavId) {
  if (typeof document === 'undefined') return

  const anchorId = AI_EMPLOYEE_NAV_SCROLL_TARGETS[id]
  if (!anchorId) return

  const el = document.getElementById(anchorId)
  if (!el) return

  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function navLabel(
  id: SoftwareNavId,
  labels: Record<SoftwareNavId, string>,
): string {
  return labels[id]
}
