'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import { getJourneyPhaseTitle } from '@/lib/ai-receptionist-flow'
import JourneyDemoHeader from '@/app/components/JourneyDemoHeader'
import SocialPlatformIcon from './SocialPlatformIcon'

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

  return (
    <section className="py-24 bg-surface" aria-labelledby="inbox-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <JourneyDemoHeader
          step={1}
          journeyPhase={getJourneyPhaseTitle(language, 1)}
          badge={t.badge}
          title={t.title}
          titleHighlight={t.titleHighlight}
          subtitle={t.subtitle}
          titleId="inbox-title"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border-light backdrop-blur-xl bg-gradient-to-br from-surface-light/80 via-surface/90 to-surface-light/80 shadow-demo-card max-w-6xl mx-auto"
        >
          {/* Gradient overlay for premium feel */}
          <div className="absolute inset-0 bg-gradient-to-br from-success/5 via-transparent to-success/[0.08] pointer-events-none" />
          
          {/* Dashboard Header */}
          <div className="relative bg-surface-light/50 backdrop-blur-sm border-b border-border p-4 md:p-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-success to-success-light rounded-xl flex items-center justify-center shadow-lg shadow-demo-icon">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-background" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-bold">{t.dashboardTitle}</h3>
                  <p className="text-muted text-xs md:text-sm">{t.dashboardSubtitle}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-6">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 bg-success rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-2.5 h-2.5 bg-success rounded-full animate-ping opacity-75" />
                  </div>
                  <span className="text-success text-xs md:text-sm font-medium">{t.activeStatus}</span>
                </div>
                <div className="hidden sm:block text-xs md:text-sm text-muted px-3 py-1.5 bg-surface/50 rounded-full border border-border">
                  {t.activeCount}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="relative flex flex-col md:flex-row min-h-[500px] md:h-[500px]">
            {/* Conversations List */}
            <div className={`${showConversationDetail ? 'hidden md:block' : 'block'} w-full md:w-2/5 lg:w-1/3 border-r border-border overflow-hidden flex flex-col`}>
              {/* Search */}
              <div className="p-3 md:p-4 border-b border-border">
                <div className="flex items-center gap-2 text-sm text-muted bg-surface/50 rounded-xl px-4 py-2.5 border border-border focus-within:border-success/30 transition-colors">
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                    <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="text"
                    placeholder={t.searchPlaceholder}
                    className="bg-transparent border-none outline-none flex-1 text-text placeholder-muted text-sm"
                    aria-label={t.searchAriaLabel}
                  />
                </div>
              </div>

              {/* Conversation Items */}
              <div className="flex-1 overflow-y-auto space-y-1 p-2" role="listbox" aria-label={t.listAriaLabel}>
                {conversations.map((conv, index) => (
                  <motion.button
                    key={conv.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleConversationClick(index)}
                    className={`w-full p-3 md:p-4 rounded-xl text-left transition-all duration-200 ${
                      selectedConversation === index
                        ? 'bg-gradient-to-r from-success/15 to-success/5 border border-success/30 shadow-lg shadow-demo-icon'
                        : 'hover:bg-surface-light/50 border border-transparent'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Avatar with channel icon */}
                      <div className="relative flex-shrink-0">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-semibold text-sm ${
                          selectedConversation === index 
                            ? 'bg-success/30 text-success' 
                            : 'bg-success/10 text-success'
                        }`}>
                          {conv.avatar}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-surface rounded-md flex items-center justify-center text-xs shadow-sm border border-border-light">
                          {getChannelIcon(conv.channelType)}
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1 gap-2">
                          <h4 className="font-semibold text-text text-sm truncate">{conv.contact}</h4>
                          <span className="text-[10px] md:text-xs text-muted flex-shrink-0">{conv.time}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-[10px] px-2 py-0.5 rounded-full border ${getStatusColor(conv.status)}`}>
                            {getStatusText(conv.status)}
                          </span>
                        </div>
                        
                        <p className="text-xs text-muted truncate">{conv.lastMessage}</p>
                        
                        {conv.unread > 0 && (
                          <div className="flex justify-end mt-2">
                            <span className="bg-success text-background text-[10px] w-5 h-5 rounded-full font-bold flex items-center justify-center shadow-lg shadow-demo-icon">
                              {conv.unread}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Conversation Detail */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedConversation}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className={`${showConversationDetail ? 'block' : 'hidden md:block'} w-full md:w-3/5 lg:w-2/3 flex flex-col`}
              >
                {/* Conversation Header */}
                <div className="p-3 md:p-4 border-b border-border bg-surface-light/30 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    {/* Back button for mobile */}
                    <button 
                      onClick={() => setShowConversationDetail(false)}
                      className="md:hidden w-9 h-9 rounded-lg bg-surface/50 border border-border-light flex items-center justify-center text-muted hover:text-text transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    
                    <div className="relative">
                      <div className="w-10 h-10 md:w-11 md:h-11 bg-success/20 rounded-xl flex items-center justify-center text-success font-semibold text-sm">
                        {selectedConv.avatar}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-surface rounded-md flex items-center justify-center text-xs shadow-sm border border-border-light">
                        {getChannelIcon(selectedConv.channelType)}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-text text-sm md:text-base truncate">{selectedConv.contact}</h4>
                      <p className="text-xs text-muted">{selectedConv.channel}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs border ${getStatusColor(selectedConv.status)}`}>
                      {getStatusText(selectedConv.status)}
                    </span>
                  </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-gradient-to-b from-transparent to-surface/30">
                  {/* AI Message */}
                  <div className="flex justify-start">
                    <div className="flex items-start gap-2 max-w-[85%]">
                      <div className="w-7 h-7 bg-gradient-to-br from-success to-success-light rounded-lg flex items-center justify-center mt-1 flex-shrink-0 shadow-lg shadow-demo-icon">
                        <svg className="w-3.5 h-3.5 text-background" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M13 3L4 14h7v7l9-11h-7V3z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="bg-gradient-to-br from-success/15 to-success/5 border border-success/20 px-4 py-3 rounded-2xl rounded-bl-md backdrop-blur-sm">
                          <p className="text-sm text-text leading-relaxed">{t.detailMessages.aiIntro}</p>
                        </div>
                        <p className="text-[10px] text-muted mt-1.5 ml-1">{t.detailMessages.aiIntroMeta}</p>
                      </div>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="max-w-[85%]">
                      <div className="bg-gradient-to-br from-success to-success-light text-background px-4 py-3 rounded-2xl rounded-br-md shadow-lg shadow-demo-icon">
                        <p className="text-sm leading-relaxed">{t.detailMessages.userRequest}</p>
                      </div>
                      <p className="text-[10px] text-muted mt-1.5 text-right mr-1">{t.detailMessages.userRequestTime}</p>
                    </div>
                  </div>

                  {/* AI Message */}
                  <div className="flex justify-start">
                    <div className="flex items-start gap-2 max-w-[85%]">
                      <div className="w-7 h-7 bg-gradient-to-br from-success to-success-light rounded-lg flex items-center justify-center mt-1 flex-shrink-0 shadow-lg shadow-demo-icon">
                        <svg className="w-3.5 h-3.5 text-background" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M13 3L4 14h7v7l9-11h-7V3z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="bg-gradient-to-br from-success/15 to-success/5 border border-success/20 px-4 py-3 rounded-2xl rounded-bl-md backdrop-blur-sm">
                          <p className="text-sm text-text leading-relaxed">{t.detailMessages.aiFollowUp}</p>
                        </div>
                        <p className="text-[10px] text-muted mt-1.5 ml-1">{t.detailMessages.aiFollowUpMeta}</p>
                      </div>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="max-w-[85%]">
                      <div className="bg-gradient-to-br from-success to-success-light text-background px-4 py-3 rounded-2xl rounded-br-md shadow-lg shadow-demo-icon">
                        <p className="text-sm leading-relaxed">{selectedConv.lastMessage}</p>
                      </div>
                      <p className="text-[10px] text-muted mt-1.5 text-right mr-1">{selectedConv.time}</p>
                    </div>
                  </div>
                </div>

                {/* AI Actions */}
                <div className="p-3 md:p-4 border-t border-border bg-surface-light/30 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-xs text-muted mb-3">
                    <div className="w-5 h-5 bg-success/10 rounded-md flex items-center justify-center">
                      <svg className="w-3 h-3 text-success" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13 3L4 14h7v7l9-11h-7V3z"/>
                      </svg>
                    </div>
                    <span>{t.suggestedActionsLabel}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-3 py-1.5 bg-success/10 text-success text-xs rounded-lg border border-success/20 hover:bg-success/20 hover:border-success/40 transition-all duration-200 font-medium">
                      {t.actionSchedule}
                    </button>
                    <button className="px-3 py-1.5 bg-success/10 text-success text-xs rounded-lg border border-success/20 hover:bg-success/20 hover:border-success/40 transition-all duration-200 font-medium">
                      {t.actionPricing}
                    </button>
                    <button className="px-3 py-1.5 bg-info/10 text-info text-xs rounded-lg border border-info/20 hover:bg-info/20 hover:border-info/40 transition-all duration-200 font-medium">
                      {t.actionCrm}
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Dashboard Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-8 md:mt-12"
        >
          {(
            t.stats
          ).map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className={`text-center p-4 md:p-6 bg-gradient-to-br ${stat.card} rounded-xl md:rounded-2xl border backdrop-blur-sm`}
            >
              <div className={`text-2xl md:text-3xl font-display font-bold ${stat.valueClass} mb-1 md:mb-2`}>{stat.value}</div>
              <p className="text-muted text-xs md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default UnifiedInbox
