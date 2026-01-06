'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

type ConversationStatus = 'qualified' | 'appointment-booked' | 'in-progress' | 'follow-up' | 'new-lead'

const UnifiedInbox = () => {
  const [selectedConversation, setSelectedConversation] = useState(0)

  const conversations = [
    {
      id: 1,
      contact: 'Sarah Johnson',
      channel: 'Website Chat',
      channelIcon: '🌐',
      lastMessage: 'Perfect! When can we schedule the consultation?',
      time: '2 min ago',
      unread: 2,
      status: 'qualified',
      avatar: 'SJ'
    },
    {
      id: 2,
      contact: 'Mike Chen',
      channel: 'WhatsApp',
      channelIcon: '📱',
      lastMessage: 'Thanks for the quick response! I\'ll check my calendar.',
      time: '5 min ago',
      unread: 0,
      status: 'appointment-booked',
      avatar: 'MC'
    },
    {
      id: 3,
      contact: 'Restaurant Owner',
      channel: 'SMS',
      channelIcon: '💬',
      lastMessage: 'AI: I\'d be happy to help you with pricing information...',
      time: '12 min ago',
      unread: 1,
      status: 'in-progress',
      avatar: 'RO'
    },
    {
      id: 4,
      contact: 'FitTrack Startup',
      channel: 'Instagram DM',
      channelIcon: '📸',
      lastMessage: 'That sounds exciting! Fitness apps typically range...',
      time: '1 hr ago',
      unread: 0,
      status: 'follow-up',
      avatar: 'FT'
    },
    {
      id: 5,
      contact: 'Local Business',
      channel: 'Facebook Messenger',
      channelIcon: '💙',
      lastMessage: 'AI: Our automation solutions can definitely help...',
      time: '2 hr ago',
      unread: 3,
      status: 'new-lead',
      avatar: 'LB'
    }
  ]

  const selectedConv = conversations[selectedConversation]

  const getStatusColor = (status: ConversationStatus) => {
    switch (status) {
      case 'qualified': return 'text-success bg-success/10'
      case 'appointment-booked': return 'text-accent bg-accent/10'
      case 'in-progress': return 'text-blue-400 bg-blue-400/10'
      case 'follow-up': return 'text-orange-400 bg-orange-400/10'
      case 'new-lead': return 'text-purple-400 bg-purple-400/10'
      default: return 'text-muted bg-muted/10'
    }
  }

  const getStatusText = (status: ConversationStatus) => {
    switch (status) {
      case 'qualified': return 'Qualified'
      case 'appointment-booked': return 'Booked'
      case 'in-progress': return 'Active'
      case 'follow-up': return 'Follow-up'
      case 'new-lead': return 'New Lead'
      default: return 'Unknown'
    }
  }

  return (
    <section className="py-24 bg-surface" aria-labelledby="inbox-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-medium text-sm uppercase tracking-wider"
          >
            Unified Management
          </motion.span>
          <motion.h2
            id="inbox-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            All Conversations<br />
            <span className="gradient-text">In One Dashboard</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-lg max-w-3xl mx-auto"
          >
            Monitor and manage every customer interaction from a single, powerful interface. 
            See real-time AI performance, lead status, and conversation history across all channels.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="card p-0 overflow-hidden max-w-6xl mx-auto"
        >
          {/* Dashboard Header */}
          <div className="bg-surface-light border-b border-white/10 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-background" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Conversations</h3>
                  <p className="text-muted text-sm">AI Receptionist Dashboard</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-success">AI Active</span>
                </div>
                <div className="text-sm text-muted">
                  5 active conversations
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-[500px]">
            {/* Conversations List */}
            <div className="w-1/2 border-r border-white/10 overflow-y-auto">
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-sm text-muted">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                    <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="bg-transparent border-none outline-none flex-1 text-white placeholder-muted"
                  />
                </div>
              </div>

              <div className="space-y-1 p-2">
                {conversations.map((conv, index) => (
                  <motion.div
                    key={conv.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedConversation(index)}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedConversation === index
                        ? 'bg-accent/10 border border-accent/30'
                        : 'hover:bg-surface-light border border-transparent'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-medium text-sm">
                          {conv.avatar}
                        </div>
                        <div className="absolute -bottom-1 -right-1 text-lg">
                          {conv.channelIcon}
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-white truncate">{conv.contact}</h4>
                          <span className="text-xs text-muted">{conv.time}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-muted">{conv.channel}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(conv.status)}`}>
                            {getStatusText(conv.status)}
                          </span>
                        </div>
                        
                        <p className="text-sm text-muted truncate">{conv.lastMessage}</p>
                        
                        {conv.unread > 0 && (
                          <div className="flex justify-end mt-2">
                            <span className="bg-accent text-background text-xs px-2 py-1 rounded-full font-medium">
                              {conv.unread}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Conversation Detail */}
            <div className="w-1/2 flex flex-col">
              {/* Conversation Header */}
              <div className="p-4 border-b border-white/10 bg-surface-light">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-medium">
                      {selectedConv.avatar}
                    </div>
                    <div className="absolute -bottom-1 -right-1 text-sm">
                      {selectedConv.channelIcon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-white">{selectedConv.contact}</h4>
                    <p className="text-sm text-muted">{selectedConv.channel}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs ${getStatusColor(selectedConv.status)}`}>
                    {getStatusText(selectedConv.status)}
                  </div>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                <div className="flex justify-start">
                  <div className="flex items-start gap-2 max-w-[80%]">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-background" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div>
                      <div className="bg-accent/10 border border-accent/20 px-4 py-2 rounded-2xl rounded-bl-sm">
                        <p className="text-sm text-white">Hello! I'd be happy to help you with pricing information. What type of service are you most interested in?</p>
                      </div>
                      <p className="text-xs text-muted mt-1">AI • 2:34 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="max-w-[80%]">
                    <div className="bg-accent text-background px-4 py-2 rounded-2xl rounded-br-sm">
                      <p className="text-sm">Custom software development for my restaurant</p>
                    </div>
                    <p className="text-xs text-muted mt-1 text-right">2:35 PM</p>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="flex items-start gap-2 max-w-[80%]">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-1">
                      <svg className="w-3 h-3 text-background" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div>
                      <div className="bg-accent/10 border border-accent/20 px-4 py-2 rounded-2xl rounded-bl-sm">
                        <p className="text-sm text-white">Perfect! For restaurant software solutions, our packages start at $2,997. Would you like me to schedule a consultation to discuss your specific needs?</p>
                      </div>
                      <p className="text-xs text-muted mt-1">AI • 2:35 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="max-w-[80%]">
                    <div className="bg-accent text-background px-4 py-2 rounded-2xl rounded-br-sm">
                      <p className="text-sm">{selectedConv.lastMessage}</p>
                    </div>
                    <p className="text-xs text-muted mt-1 text-right">{selectedConv.time}</p>
                  </div>
                </div>
              </div>

              {/* AI Actions */}
              <div className="p-4 border-t border-white/10 bg-surface-light">
                <div className="flex items-center gap-2 text-sm text-muted mb-2">
                  <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                  <span>AI Suggested Actions:</span>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/30 hover:bg-accent/20 transition-colors">
                    Schedule Consultation
                  </button>
                  <button className="px-3 py-1 bg-success/10 text-success text-xs rounded-full border border-success/30 hover:bg-success/20 transition-colors">
                    Send Pricing Details
                  </button>
                  <button className="px-3 py-1 bg-blue-400/10 text-blue-400 text-xs rounded-full border border-blue-400/30 hover:bg-blue-400/20 transition-colors">
                    Add to CRM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dashboard Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          <div className="text-center p-6 bg-surface-light rounded-xl border border-accent/10">
            <div className="text-2xl font-display font-bold text-accent mb-2">47</div>
            <p className="text-muted text-sm">Conversations Today</p>
          </div>
          <div className="text-center p-6 bg-surface-light rounded-xl border border-success/10">
            <div className="text-2xl font-display font-bold text-success mb-2">23</div>
            <p className="text-muted text-sm">Qualified Leads</p>
          </div>
          <div className="text-center p-6 bg-surface-light rounded-xl border border-blue-400/10">
            <div className="text-2xl font-display font-bold text-blue-400 mb-2">12</div>
            <p className="text-muted text-sm">Appointments Booked</p>
          </div>
          <div className="text-center p-6 bg-surface-light rounded-xl border border-orange-400/10">
            <div className="text-2xl font-display font-bold text-orange-400 mb-2">98%</div>
            <p className="text-muted text-sm">Response Rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default UnifiedInbox