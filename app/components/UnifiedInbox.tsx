'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { getJourneyPhaseTitle } from '@/lib/ai-receptionist-flow'
import SoftwareDemoSection from '@/app/components/software/SoftwareDemoSection'
import SoftwareModuleToolbar from '@/app/components/software/SoftwareModuleToolbar'
import SocialPlatformIcon from './SocialPlatformIcon'
import DemoPersonAvatar from '@/app/components/DemoPersonAvatar'
import ChatChannelIconBadge from '@/app/components/ChatChannelIconBadge'
import { getInboxConversationAvatarSrc } from '@/lib/demo-contact-avatars'

type ConversationStatus = 'qualified' | 'appointment-booked' | 'in-progress' | 'follow-up' | 'new-lead'
type ConversationChannel = 'website' | 'whatsapp' | 'sms' | 'instagram' | 'facebook'

interface Conversation {
  id: number
  contact: string
  channel: string
  channelType: ConversationChannel
  lastMessage: string
  time: string
  unread: number
  status: ConversationStatus
  avatar: string
}

const UnifiedInbox = () => {
  const language = useLanguage()
  const t = translations[language].aiEmployeeProductDemos.inbox
  const [selectedConversation, setSelectedConversation] = useState(0)
  const [showConversationDetail, setShowConversationDetail] = useState(false)

  const conversations: Conversation[] = t.conversations

  const selectedConv = conversations[selectedConversation]

  const getStatusColor = (status: ConversationStatus) => {
    switch (status) {
      case 'qualified': return 'text-success bg-success/10 border-success/30'
      case 'appointment-booked': return 'text-success bg-success/10 border-success/30'
      case 'in-progress': return 'text-info bg-info/10 border-info/30'
      case 'follow-up': return 'text-warning bg-warning/10 border-warning/30'
      case 'new-lead': return 'text-success bg-success/10 border-success/30'
      default: return 'text-muted bg-muted/10 border-muted/30'
    }
  }

  const getStatusText = (status: ConversationStatus) => {
    switch (status) {
      case 'qualified': return t.statuses.qualified
      case 'appointment-booked': return t.statuses['appointment-booked']
      case 'in-progress': return t.statuses['in-progress']
      case 'follow-up': return t.statuses['follow-up']
      case 'new-lead': return t.statuses['new-lead']
      default: return 'Unknown'
    }
  }

  const handleConversationClick = (index: number) => {
    setSelectedConversation(index)
    setShowConversationDetail(true)
  }

  const getChannelIcon = (channelType: ConversationChannel) => {
    switch (channelType) {
      case 'website':
        return (
          <svg className="w-3 h-3 text-success" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
            <path d="M3 12H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M12 3C14.5 5.8 16 8.8 16 12C16 15.2 14.5 18.2 12 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M12 3C9.5 5.8 8 8.8 8 12C8 15.2 9.5 18.2 12 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        )
      case 'whatsapp':
        return (
          <SocialPlatformIcon platform="whatsapp" className="w-3 h-3 text-success" />
        )
      case 'sms':
        return (
          <svg className="w-3 h-3 text-success" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6.5C4 5.7 4.7 5 5.5 5H18.5C19.3 5 20 5.7 20 6.5V14.5C20 15.3 19.3 16 18.5 16H9L5 19V16H5.5C4.7 16 4 15.3 4 14.5V6.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M8 10H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M8 13H13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        )
      case 'instagram':
        return (
          <SocialPlatformIcon platform="instagram" className="w-3 h-3 text-success" />
        )
      case 'facebook':
        return (
          <SocialPlatformIcon platform="facebook" className="w-3 h-3 text-success" />
        )
      default:
        return null
    }
  }

  const sw =
    translations[language].aiEmployeeSoftware ?? translations.en.aiEmployeeSoftware
  const hp = sw.heroPreview

  const filterChips = [
    t.statuses['new-lead'],
    t.statuses.qualified,
    t.statuses['appointment-booked'],
  ]

  return (
    <SoftwareDemoSection
      step={1}
      journeyPhase={getJourneyPhaseTitle(language, 1)}
      badge={t.badge}
      title={t.title}
      titleHighlight={t.titleHighlight}
      subtitle={t.subtitle}
      titleId="inbox-title"
      activeNav="conversations"
      moduleTitle={sw.nav.conversations}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="software-inbox-app"
      >
        <SoftwareModuleToolbar
          title={t.dashboardTitle}
          subtitle={t.activeCount}
          statusLabel={t.activeStatus}
          tabs={[
            { id: 'inbox', label: hp.inboxTab, active: true },
            { id: 'pipeline', label: hp.pipelineTab },
          ]}
          trailing={
            <div className="hidden flex-wrap gap-1.5 sm:flex">
              {filterChips.map((chip, i) => (
                <span
                  key={chip}
                  className={`rounded-md px-2 py-1 text-[10px] font-medium md:text-[11px] ${
                    i === 0
                      ? 'bg-[var(--software-nav-active)] text-accent'
                      : 'border border-[var(--software-border)] text-[var(--software-text-muted)]'
                  }`}
                >
                  {chip}
                </span>
              ))}
            </div>
          }
        />

        <div className="software-inbox-panes min-h-0 flex-1">
          <div
            className={`software-inbox-list flex min-h-[280px] flex-col border-[var(--software-border)] md:min-h-0 md:w-[34%] md:max-w-[320px] md:border-r ${
              showConversationDetail ? 'hidden md:flex' : 'flex w-full'
            }`}
          >
            <div className="border-b border-[var(--software-border)] p-3">
              <div className="flex items-center gap-2 rounded-lg border border-[var(--software-border)] bg-[var(--software-content)] px-3 py-2 text-sm text-[var(--software-text-muted)] focus-within:border-accent/40">
                <svg className="h-4 w-4 shrink-0 opacity-60" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                  <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  className="min-w-0 flex-1 border-none bg-transparent text-sm text-[var(--software-text)] outline-none placeholder:text-[var(--software-text-muted)]"
                  aria-label={t.searchAriaLabel}
                />
              </div>
            </div>

            <div className="flex-1 space-y-0.5 overflow-y-auto p-2" role="listbox" aria-label={t.listAriaLabel}>
              {conversations.map((conv, index) => (
                <motion.button
                  key={conv.id}
                  type="button"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  onClick={() => handleConversationClick(index)}
                  data-active={selectedConversation === index}
                  className="software-conversation-row w-full rounded-lg p-2.5 text-left md:p-3"
                >
                  <div className="flex items-start gap-2.5">
                    <div className="relative shrink-0">
                      <DemoPersonAvatar
                        name={conv.contact}
                        src={getInboxConversationAvatarSrc(conv.id)}
                        size="md"
                        shape="lg"
                        className={
                          selectedConversation === index
                            ? 'ring-2 ring-accent/40'
                            : ''
                        }
                      />
                      <div className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded border border-[var(--software-border)] bg-[var(--software-panel)]">
                        {getChannelIcon(conv.channelType)}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-0.5 flex items-center justify-between gap-2">
                        <h4 className="truncate text-xs font-semibold text-[var(--software-text)] md:text-[13px]">
                          {conv.contact}
                        </h4>
                        <span className="shrink-0 text-[10px] text-[var(--software-text-muted)]">{conv.time}</span>
                      </div>
                      <span
                        className={`mb-1 inline-block rounded px-1.5 py-0.5 text-[9px] font-medium border ${getStatusColor(conv.status)}`}
                      >
                        {getStatusText(conv.status)}
                      </span>
                      <p className="truncate text-[11px] text-[var(--software-text-muted)]">{conv.lastMessage}</p>
                    </div>
                    {conv.unread > 0 ? (
                      <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-on-accent">
                        {conv.unread}
                      </span>
                    ) : null}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedConversation}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.2 }}
              className={`software-inbox-thread flex min-h-[320px] min-w-0 flex-1 flex-col md:min-h-0 ${
                showConversationDetail ? 'flex w-full' : 'hidden md:flex'
              }`}
            >
              <div className="flex shrink-0 items-center gap-3 border-b border-[var(--software-border)] bg-[var(--software-panel)] px-3 py-3 md:px-4">
                <button
                  type="button"
                  onClick={() => setShowConversationDetail(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--software-border)] text-[var(--software-text-muted)] md:hidden"
                  aria-label="Back to conversations"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <div className="relative shrink-0">
                  <DemoPersonAvatar
                    name={selectedConv.contact}
                    src={getInboxConversationAvatarSrc(selectedConv.id)}
                    size="md"
                    shape="lg"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded border border-[var(--software-border)] bg-[var(--software-panel)]">
                    {getChannelIcon(selectedConv.channelType)}
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="truncate text-sm font-semibold text-[var(--software-text)]">{selectedConv.contact}</h4>
                  <p className="truncate text-[11px] text-[var(--software-text-muted)]">{selectedConv.channel}</p>
                </div>
                <span className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-medium ${getStatusColor(selectedConv.status)}`}>
                  {getStatusText(selectedConv.status)}
                </span>
              </div>

              <div className="flex-1 space-y-3 overflow-y-auto p-3 md:p-4">
                <div className="flex justify-start">
                  <div className="flex max-w-[88%] items-start gap-2">
                    <ChatChannelIconBadge className="mt-0.5">
                      {getChannelIcon(selectedConv.channelType)}
                    </ChatChannelIconBadge>
                    <div>
                      <div className="rounded-2xl rounded-bl-md border border-[var(--software-border)] bg-[var(--software-panel)] px-3.5 py-2.5">
                        <p className="text-sm leading-relaxed text-[var(--software-text)]">{t.detailMessages.aiIntro}</p>
                      </div>
                      <p className="mt-1 ml-1 text-[10px] text-[var(--software-text-muted)]">{t.detailMessages.aiIntroMeta}</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[88%]">
                    <div className="rounded-2xl rounded-br-md bg-accent px-3.5 py-2.5 text-on-accent">
                      <p className="text-sm leading-relaxed">{t.detailMessages.userRequest}</p>
                    </div>
                    <p className="mt-1 mr-1 text-right text-[10px] text-[var(--software-text-muted)]">
                      {t.detailMessages.userRequestTime}
                    </p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="flex max-w-[88%] items-start gap-2">
                    <ChatChannelIconBadge className="mt-0.5">
                      {getChannelIcon(selectedConv.channelType)}
                    </ChatChannelIconBadge>
                    <div>
                      <div className="rounded-2xl rounded-bl-md border border-[var(--software-border)] bg-[var(--software-panel)] px-3.5 py-2.5">
                        <p className="text-sm leading-relaxed text-[var(--software-text)]">{t.detailMessages.aiFollowUp}</p>
                      </div>
                      <p className="mt-1 ml-1 text-[10px] text-[var(--software-text-muted)]">{t.detailMessages.aiFollowUpMeta}</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[88%]">
                    <div className="rounded-2xl rounded-br-md bg-accent px-3.5 py-2.5 text-on-accent">
                      <p className="text-sm leading-relaxed">{selectedConv.lastMessage}</p>
                    </div>
                    <p className="mt-1 mr-1 text-right text-[10px] text-[var(--software-text-muted)]">{selectedConv.time}</p>
                  </div>
                </div>
              </div>

              <div className="shrink-0 border-t border-[var(--software-border)] bg-[var(--software-panel)] p-3 md:p-4">
                <p className="mb-2 flex items-center gap-2 text-[11px] font-medium text-[var(--software-text-muted)]">
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-accent/10 text-accent">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M13 3L4 14h7v7l9-11h-7V3z" />
                    </svg>
                  </span>
                  {t.suggestedActionsLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="rounded-lg border border-accent/25 bg-accent/10 px-3 py-1.5 text-[11px] font-semibold text-accent"
                  >
                    {t.actionSchedule}
                  </button>
                  <button
                    type="button"
                    className="rounded-lg border border-[var(--software-border)] bg-[var(--software-sidebar)] px-3 py-1.5 text-[11px] font-medium text-[var(--software-text)]"
                  >
                    {t.actionPricing}
                  </button>
                  <button
                    type="button"
                    className="rounded-lg border border-[var(--software-border)] bg-[var(--software-sidebar)] px-3 py-1.5 text-[11px] font-medium text-[var(--software-text)]"
                  >
                    {t.actionCrm}
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <aside className="software-inbox-rail hidden min-h-0 w-[220px] shrink-0 flex-col border-l xl:flex">
            <div className="border-b border-[var(--software-border)] px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--software-text-muted)]">
                {t.dashboardSubtitle}
              </p>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto p-3">
              {t.stats.slice(0, 3).map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-[var(--software-border)] bg-[var(--software-sidebar)] p-3"
                >
                  <p className={`font-display text-lg font-bold tabular-nums ${stat.valueClass}`}>{stat.value}</p>
                  <p className="mt-0.5 text-[10px] text-[var(--software-text-muted)]">{stat.label}</p>
                </div>
              ))}
              <div className="rounded-lg border border-accent/25 bg-accent/10 p-3">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-accent">{t.activeStatus}</p>
                <p className="mt-1 text-xs leading-relaxed text-[var(--software-text-muted)]">{t.activeCount}</p>
              </div>
            </div>
          </aside>
        </div>
      </motion.div>
    </SoftwareDemoSection>
  )
}

export default UnifiedInbox
