'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import SocialPlatformIcon from '@/app/components/SocialPlatformIcon'
import DemoPersonAvatar from '@/app/components/DemoPersonAvatar'
import { getConversationDemoVisitor } from '@/lib/demo-contact-avatars'
import type { InboxConversationT } from '@/app/i18n/aiEmployeeProductDemos'

type ChannelType = InboxConversationT['channelType'] | 'google'

type HeroMessage = {
  sender: 'visitor' | 'ai'
  text: string
  meta: string
}

const INBOX_ID_BY_CHANNEL: Record<string, number> = {
  website: 1,
  whatsapp: 2,
  sms: 3,
  instagram: 4,
  facebook: 5,
}

const HERO_MESSAGE_LIMIT = 4
const MESSAGE_STEP_MS = 1100
const CHANNEL_HOLD_MS = 2400

function resolveChannelType(channelId: string): ChannelType {
  if (channelId === 'google') return 'google'
  if (
    channelId === 'website' ||
    channelId === 'whatsapp' ||
    channelId === 'sms' ||
    channelId === 'instagram' ||
    channelId === 'facebook'
  ) {
    return channelId
  }
  return 'website'
}

function ChannelIcon({ channelType }: { channelType: ChannelType }) {
  switch (channelType) {
    case 'website':
      return (
        <svg className="h-3.5 w-3.5 shrink-0 text-success" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 12H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'whatsapp':
      return <SocialPlatformIcon platform="whatsapp" className="h-3.5 w-3.5 shrink-0 text-success" />
    case 'sms':
      return (
        <svg className="h-3.5 w-3.5 shrink-0 text-success" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 6.5C4 5.7 4.7 5 5.5 5H18.5C19.3 5 20 5.7 20 6.5V14.5C20 15.3 19.3 16 18.5 16H9L5 19V16H5.5C4.7 16 4 15.3 4 14.5V6.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'instagram':
      return <SocialPlatformIcon platform="instagram" className="h-3.5 w-3.5 shrink-0 text-success" />
    case 'facebook':
      return <SocialPlatformIcon platform="facebook" className="h-3.5 w-3.5 shrink-0 text-success" />
    case 'google':
      return <SocialPlatformIcon platform="google" className="h-3.5 w-3.5 shrink-0 text-success" />
  }
}

export default function AiEmployeeHeroChatPreview() {
  const language = useLanguage()
  const demos = translations[language].aiEmployeeProductDemos
  const liveLabel = demos.conversations.liveLabel
  const conversations = demos.conversations.items
  const inboxById = useMemo(
    () => new Map(demos.inbox.conversations.map((conversation) => [conversation.id, conversation])),
    [demos.inbox.conversations]
  )

  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)
  const [readyToAdvance, setReadyToAdvance] = useState(false)

  const activeConversation = conversations[activeIndex]!
  const channelType = resolveChannelType(activeConversation.id)
  const inboxLead = inboxById.get(INBOX_ID_BY_CHANNEL[activeConversation.id] ?? -1)
  const visitor = getConversationDemoVisitor(activeConversation.id)

  const contactName = inboxLead?.contact ?? visitor?.name ?? activeConversation.title
  const avatarSrc = visitor?.avatarSrc
  const channelLabel = inboxLead?.channel ?? activeConversation.platform

  const messages: HeroMessage[] = useMemo(
    () =>
      activeConversation.messages.slice(0, HERO_MESSAGE_LIMIT).map((message) => ({
        sender: message.sender,
        text: message.text,
        meta: message.sender === 'ai' ? `AI · ${message.time}` : message.time,
      })),
    [activeConversation.messages]
  )

  useEffect(() => {
    setActiveIndex(0)
    setVisibleCount(1)
    setReadyToAdvance(false)
  }, [language])

  useEffect(() => {
    setVisibleCount(1)
    setReadyToAdvance(false)
  }, [activeIndex])

  useEffect(() => {
    if (readyToAdvance) return

    if (visibleCount >= messages.length) {
      const holdTimer = window.setTimeout(() => setReadyToAdvance(true), CHANNEL_HOLD_MS)
      return () => window.clearTimeout(holdTimer)
    }

    const stepTimer = window.setTimeout(() => setVisibleCount((count) => count + 1), MESSAGE_STEP_MS)
    return () => window.clearTimeout(stepTimer)
  }, [visibleCount, messages.length, readyToAdvance])

  useEffect(() => {
    if (!readyToAdvance) return

    const advanceTimer = window.setTimeout(() => {
      setActiveIndex((index) => (index + 1) % conversations.length)
    }, 400)

    return () => window.clearTimeout(advanceTimer)
  }, [readyToAdvance, conversations.length])

  return (
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[320px]">
      <div
        className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent/25 via-success/10 to-transparent blur-2xl"
        aria-hidden
      />

      <div
        className="relative flex h-[420px] flex-col overflow-hidden rounded-[2rem] border border-border/80 bg-surface shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)] ring-1 ring-white/10 sm:h-[440px]"
        aria-live="polite"
        aria-label={activeConversation.platform}
      >
        <div className="relative h-[65px] shrink-0 border-b border-border/80 bg-surface/95">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeConversation.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24 }}
              className="absolute inset-0 flex items-center gap-3 px-4 py-3 backdrop-blur-sm"
            >
              <DemoPersonAvatar
                name={contactName}
                src={avatarSrc}
                size="md"
                className="ring-1 ring-border-light"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate font-display text-sm font-semibold text-text">{contactName}</p>
                <p className="flex items-center gap-1.5 truncate text-xs text-muted">
                  <ChannelIcon channelType={channelType} />
                  {channelLabel}
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-2 py-0.5 text-[10px] font-semibold text-success">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" aria-hidden />
                {liveLabel}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="min-h-0 flex-1 overflow-hidden bg-background/95 p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeConversation.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24 }}
              className="flex h-full flex-col justify-end gap-2.5 overflow-hidden"
            >
              {messages.slice(0, visibleCount).map((message, index) => (
                <motion.div
                  key={`${activeConversation.id}-${message.sender}-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex shrink-0 ${message.sender === 'ai' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[88%] ${message.sender === 'ai' ? 'text-left' : 'text-right'}`}>
                    <div
                      className={`inline-block line-clamp-3 rounded-2xl px-3.5 py-2 text-sm leading-snug ${
                        message.sender === 'ai'
                          ? 'rounded-tl-md border border-border-light bg-surface text-text'
                          : 'rounded-tr-md bg-accent text-on-accent'
                      }`}
                    >
                      {message.text}
                    </div>
                    <p className="type-caption mt-1 px-0.5 text-muted">{message.meta}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          className="flex h-[45px] shrink-0 items-center justify-center gap-1.5 border-t border-border/60 bg-surface/90 px-4"
          role="tablist"
          aria-label={demos.conversations.channelSelectorTitle}
        >
          {conversations.map((conversation, index) => {
            const isActive = index === activeIndex
            const dotChannel = resolveChannelType(conversation.id)
            return (
              <span
                key={conversation.id}
                role="tab"
                aria-selected={isActive}
                aria-label={conversation.title}
                className={`inline-flex h-7 w-7 items-center justify-center rounded-full border transition-colors duration-300 ${
                  isActive
                    ? 'border-accent/40 bg-accent/15'
                    : 'border-border/60 bg-background/40 opacity-60'
                }`}
              >
                <ChannelIcon channelType={dotChannel} />
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
