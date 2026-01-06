'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Message {
  sender: 'visitor' | 'ai'
  text: string
  time: string
}

const ConversationMockups = () => {
  const [activeDemo, setActiveDemo] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)

  const conversations = [
    {
      id: 'website',
      title: 'Website Chat',
      platform: 'Live Chat Widget',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      messages: [
        { sender: 'visitor', text: 'Hi, I need help with pricing for your services', time: '2:34 PM' },
        { sender: 'ai', text: 'Hello! I\'d be happy to help you with pricing information. What type of service are you most interested in?', time: '2:34 PM' },
        { sender: 'visitor', text: 'Custom software development for my restaurant', time: '2:35 PM' },
        { sender: 'ai', text: 'Perfect! For restaurant software solutions, our packages start at $2,997. Would you like me to schedule a consultation to discuss your specific needs?', time: '2:35 PM' }
      ]
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      platform: 'WhatsApp Message',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382C17.007 14.175 15.314 13.5 14.985 13.388C14.656 13.275 14.414 13.219 14.172 13.682C13.93 14.145 13.207 15.238 12.95 15.525C12.694 15.812 12.437 15.868 11.972 15.662C11.507 15.455 9.814 14.955 7.82 13.1C6.2 11.6 5.1 9.825 4.843 9.362C4.586 8.9 4.815 8.7 5.05 8.475C5.27 8.263 5.52 7.95 5.727 7.688C5.933 7.425 6.017 7.225 6.18 6.9C6.343 6.575 6.287 6.275 6.18 6.025C6.074 5.775 5.4 3.975 5.1 3.225C4.8 2.475 4.5 2.625 4.286 2.613C4.072 2.6 3.814 2.6 3.557 2.6C3.3 2.6 2.985 2.7 2.7 3C2.415 3.3 1.8 3.975 1.8 5.325C1.8 6.675 2.7 7.975 2.843 8.175C2.986 8.375 4.5 10.875 6.9 12.075C9.3 13.275 11.4 13.575 11.7 13.725C12 13.875 12.3 13.825 12.557 13.575C12.814 13.325 13.3 12.75 13.5 12.45C13.7 12.15 13.9 12.2 14.172 12.275C14.443 12.35 15.6 12.825 15.9 13.025C16.2 13.225 16.4 13.325 16.5 13.425C16.6 13.525 16.6 13.775 16.4 14.075C16.2 14.375 15.737 14.588 17.472 14.382Z" fill="currentColor"/>
          <path d="M12 2C6.477 2 2 6.477 2 12C2 13.815 2.5 15.515 3.395 16.97L2 22L7.335 20.61C8.78 21.495 10.345 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      messages: [
        { sender: 'visitor', text: 'Hey, saw your ad. Do you do mobile apps?', time: '11:22 AM' },
        { sender: 'ai', text: 'Yes! We specialize in mobile app development. What kind of app are you looking to build?', time: '11:22 AM' },
        { sender: 'visitor', text: 'Fitness tracking app with social features', time: '11:24 AM' },
        { sender: 'ai', text: 'That sounds exciting! Fitness apps with social features typically range from $15k-$35k. I can book you a free strategy call to discuss your vision. Are you available this week?', time: '11:25 AM' }
      ]
    },
    {
      id: 'instagram',
      title: 'Instagram DM',
      platform: 'Instagram Direct',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" stroke="currentColor" strokeWidth="2"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      messages: [
        { sender: 'visitor', text: '👋 Love your recent post about AI! Can you help with automation?', time: '4:15 PM' },
        { sender: 'ai', text: 'Thank you! 🙏 Absolutely, we help businesses automate their workflows. What processes are you looking to streamline?', time: '4:15 PM' },
        { sender: 'visitor', text: 'Customer support and lead follow-up mainly', time: '4:16 PM' },
        { sender: 'ai', text: 'Perfect fit! Our AI systems can handle both seamlessly. We\'ve helped similar businesses reduce response time by 90%. Want to see a demo? 📅', time: '4:17 PM' }
      ]
    },
    {
      id: 'voice-ai',
      title: 'Voice AI',
      platform: 'Live Web Call & Bridge',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C13.1 1 14 1.9 14 3V11C14 12.1 13.1 13 12 13C10.9 13 10 12.1 10 11V3C10 1.9 10.9 1 12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 10V11C19 15.4183 15.4183 19 11 19H10C5.58172 19 2 15.4183 2 11V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 10V11C22 16.5228 17.5228 21 12 21C6.47715 21 2 16.5228 2 11V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 2V6M17 4H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      messages: [
        { sender: 'visitor', text: '📞 Web call initiated from website', time: '10:42 AM' },
        { sender: 'ai', text: 'Hello! I\'m your AI receptionist. I can answer questions and also connect you directly with our team on a live call if needed. How can I help you today?', time: '10:42 AM' },
        { sender: 'visitor', text: 'I have some technical questions about your services', time: '10:43 AM' },
        { sender: 'ai', text: 'I can help with that! Would you like me to bridge this call with our technical team? You\'ll be on a live 3-way call with me and the team, and we can all talk together. Ready to connect?', time: '10:43 AM' }
      ]
    },
    {
      id: 'facebook',
      title: 'Facebook',
      platform: 'AI Auto-Responder',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      messages: [
        { sender: 'visitor', text: 'Hi! I saw your post about AI automation. Can you help with lead management?', time: '3:20 PM' },
        { sender: 'ai', text: 'Hello! Absolutely, I can help! Our AI automatically captures and stores all Facebook inquiries directly to your CRM. I can set up a lead management system that organizes all your leads in one place. Would you like to schedule a free consultation?', time: '3:20 PM' },
        { sender: 'visitor', text: 'Yes! Can you also integrate with our existing customer database?', time: '3:22 PM' },
        { sender: 'ai', text: 'Perfect! We integrate with all major CRM systems and can reactivate contacts from your existing database. I\'ve saved your contact info and scheduled your consultation for tomorrow at 2 PM. I\'ll send confirmation details via Facebook Messenger!', time: '3:22 PM' }
      ]
    },
    {
      id: 'reviews',
      title: 'Reviews',
      platform: 'Reputation Management',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9L17 13.14L18.18 20.02L12 16.77L5.82 20.02L7 13.14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      messages: [
        { sender: 'visitor', text: 'New review: "Amazing service! Response time was incredible" - ⭐⭐⭐⭐⭐', time: '9:15 AM' },
        { sender: 'ai', text: 'Thank you for the wonderful review! Your feedback has been automatically logged in our reputation management system. We\'re monitoring all reviews across platforms to maintain our excellent service standards.', time: '9:15 AM' },
        { sender: 'visitor', text: 'Review response sent automatically', time: '9:15 AM' },
        { sender: 'ai', text: 'Perfect! Your reputation score has been updated. Current rating: 4.9/5.0 across all platforms. All reviews are tracked, categorized, and responded to automatically.', time: '9:16 AM' }
      ]
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % conversations.length)
      setMessageIndex(0)
    }, 15000) // Increased from 8s to 15s for better exploration time

    return () => clearInterval(interval)
  }, [conversations.length])

  useEffect(() => {
    setMessageIndex(0) // Reset when switching demos
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => {
        const maxMessages = conversations[activeDemo].messages.length
        return prev < maxMessages - 1 ? prev + 1 : prev
      })
    }, 2500) // Increased from 1.5s to 2.5s for better readability

    return () => clearInterval(messageInterval)
  }, [activeDemo, conversations])

  const ChatBubble = ({ message, isAI, delay = 0 }: { message: Message; isAI: boolean; delay?: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className={`flex ${isAI ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <div className={`max-w-[80%] ${isAI ? 'order-2' : 'order-1'}`}>
        <div
          className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
            isAI
              ? 'bg-accent/10 text-white border border-accent/20'
              : 'bg-accent text-background'
          } ${isAI ? 'rounded-bl-sm' : 'rounded-br-sm'}`}
        >
          {message.text}
        </div>
        <div className={`text-xs text-muted mt-1 ${isAI ? 'text-left' : 'text-right'}`}>
          {message.time}
        </div>
      </div>
      {isAI && (
        <div className="order-1 mr-3 mt-1">
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-background" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      )}
    </motion.div>
  )

  return (
    <section className="py-24" aria-labelledby="conversations-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-medium text-sm uppercase tracking-wider"
          >
            Real Conversations
          </motion.span>
          <motion.h2
            id="conversations-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            See AI in Action<br />
            <span className="gradient-text">Across Every Platform</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-lg max-w-3xl mx-auto"
          >
            Watch how our AI naturally handles inquiries, qualifies leads, and books appointments 
            with the same intelligence across all communication channels.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {conversations.map((conversation, index) => (
            <motion.div
              key={conversation.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`card p-6 transition-all duration-500 ${
                activeDemo === index ? 'border-accent/50 glow-accent' : ''
              }`}
            >
              {/* Platform Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent">
                  {conversation.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{conversation.title}</h3>
                  <p className="text-muted text-sm">{conversation.platform}</p>
                </div>
                <div className="ml-auto">
                  <div className={`w-3 h-3 rounded-full ${
                    activeDemo === index ? 'bg-success animate-pulse' : 'bg-muted-dark'
                  }`} />
                </div>
              </div>

              {/* Phone Interface for Voice AI */}
              {conversation.id === 'voice-ai' ? (
                <div className="min-h-[300px] flex flex-col items-center justify-center py-8">
                  {/* Phone Icon with Ringing Animation */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="relative mb-6"
                  >
                    {/* Ringing Circles */}
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeOut',
                      }}
                      className="absolute inset-0 border-2 border-accent rounded-full"
                    />
                    <motion.div
                      animate={{
                        scale: [1, 1.8, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeOut',
                        delay: 0.3,
                      }}
                      className="absolute inset-0 border-2 border-accent rounded-full"
                    />
                    {/* Phone Icon */}
                    <div className="relative w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center border-2 border-accent/40">
                      <svg className="w-10 h-10 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9841 21.5573 21.2126 21.3522 21.3997C21.1472 21.5867 20.9053 21.7282 20.6426 21.8148C20.3799 21.9014 20.1025 21.9312 19.828 21.902C16.7425 21.5857 13.7869 20.5341 11.19 18.82C8.77382 17.2148 6.72533 15.0977 5.19 12.62C3.49793 10.0383 2.42529 7.10528 2.05 4.05C2.02087 3.77571 2.05056 3.49844 2.13706 3.23595C2.22357 2.97345 2.36494 2.73178 2.5518 2.52701C2.73866 2.32224 2.96697 2.15899 3.22172 2.04772C3.47647 1.93646 3.75202 1.87988 4.03 1.88H7.05C7.45964 1.87989 7.85723 2.02141 8.17581 2.28048C8.49439 2.53955 8.71455 2.90058 8.8 3.3C8.96532 4.11588 9.21139 4.91305 9.53 5.68C9.69528 6.09343 9.76034 6.54187 9.71948 6.98552C9.67863 7.42917 9.53317 7.85465 9.3 8.23C9.06018 8.60558 8.74557 8.92895 8.38 9.18L7.38 10.18C9.16552 12.5076 11.4924 14.8345 13.82 16.62L14.82 15.62C15.071 15.2544 15.3944 14.9398 15.77 14.7C16.1453 14.4668 16.5708 14.3214 17.0145 14.2805C17.4581 14.2397 17.9066 14.3047 18.32 14.47C19.087 14.7886 19.8841 15.0347 20.7 15.2C21.0994 15.2855 21.4604 15.5056 21.7195 15.8242C21.9786 16.1428 22.1201 16.5404 22.12 16.95L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </motion.div>

                  {/* Caller Info */}
                  <div className="text-center mb-6">
                    <p className="text-sm text-muted mb-1">Incoming Call</p>
                    <h4 className="text-lg font-bold text-white mb-1">AI Web Calls</h4>
                    <p className="text-xs text-muted">Receptionist</p>
                  </div>

                  {/* Call Buttons */}
                  <div className="flex gap-4 mt-4">
                    {/* Decline Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-14 h-14 rounded-full bg-red-500/20 border-2 border-red-500/40 flex items-center justify-center hover:bg-red-500/30 transition-colors"
                    >
                      <svg className="w-6 h-6 text-red-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.button>

                    {/* Answer Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-14 h-14 rounded-full bg-success/20 border-2 border-success/40 flex items-center justify-center hover:bg-success/30 transition-colors"
                    >
                      <svg className="w-6 h-6 text-success" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9841 21.5573 21.2126 21.3522 21.3997C21.1472 21.5867 20.9053 21.7282 20.6426 21.8148C20.3799 21.9014 20.1025 21.9312 19.828 21.902C16.7425 21.5857 13.7869 20.5341 11.19 18.82C8.77382 17.2148 6.72533 15.0977 5.19 12.62C3.49793 10.0383 2.42529 7.10528 2.05 4.05C2.02087 3.77571 2.05056 3.49844 2.13706 3.23595C2.22357 2.97345 2.36494 2.73178 2.5518 2.52701C2.73866 2.32224 2.96697 2.15899 3.22172 2.04772C3.47647 1.93646 3.75202 1.87988 4.03 1.88H7.05C7.45964 1.87989 7.85723 2.02141 8.17581 2.28048C8.49439 2.53955 8.71455 2.90058 8.8 3.3C8.96532 4.11588 9.21139 4.91305 9.53 5.68C9.69528 6.09343 9.76034 6.54187 9.71948 6.98552C9.67863 7.42917 9.53317 7.85465 9.3 8.23C9.06018 8.60558 8.74557 8.92895 8.38 9.18L7.38 10.18C9.16552 12.5076 11.4924 14.8345 13.82 16.62L14.82 15.62C15.071 15.2544 15.3944 14.9398 15.77 14.7C16.1453 14.4668 16.5708 14.3214 17.0145 14.2805C17.4581 14.2397 17.9066 14.3047 18.32 14.47C19.087 14.7886 19.8841 15.0347 20.7 15.2C21.0994 15.2855 21.4604 15.5056 21.7195 15.8242C21.9786 16.1428 22.1201 16.5404 22.12 16.95L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.button>
                  </div>
                </div>
              ) : (
                <>
                  {/* Chat Messages */}
                  <div className="space-y-1 min-h-[300px]">
                    {conversation.messages.slice(0, messageIndex + 1).map((message, msgIndex) => (
                      <ChatBubble
                        key={msgIndex}
                        message={message}
                        isAI={message.sender === 'ai'}
                        delay={activeDemo === index ? msgIndex * 0.3 : 0}
                      />
                    ))}
                    
                    {/* Typing Indicator */}
                    {activeDemo === index && messageIndex < conversation.messages.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start mb-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-background" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                            </svg>
                          </div>
                          <div className="bg-accent/10 border border-accent/20 px-4 py-3 rounded-2xl rounded-bl-sm">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                              <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                              <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </>
              )}

              {/* Platform Indicator */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-xs text-muted">
                  <span>Response Time: &lt;2 seconds</span>
                  <span className="text-success">● Online</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Demo Controls */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {conversations.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveDemo(index)
                  setMessageIndex(0)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeDemo === index ? 'bg-accent scale-125 w-8' : 'bg-muted-dark hover:bg-muted'
                }`}
                aria-label={`View ${conversations[index].title} demo`}
                type="button"
              />
            ))}
          </div>
        </div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          <div className="text-center p-6 bg-surface-light rounded-xl border border-accent/10">
            <div className="text-2xl font-display font-bold text-accent mb-2">&lt;2s</div>
            <p className="text-muted text-sm">Average Response Time</p>
          </div>
          <div className="text-center p-6 bg-surface-light rounded-xl border border-accent/10">
            <div className="text-2xl font-display font-bold text-accent mb-2">24/7</div>
            <p className="text-muted text-sm">Always Available</p>
          </div>
          <div className="text-center p-6 bg-surface-light rounded-xl border border-accent/10">
            <div className="text-2xl font-display font-bold text-accent mb-2">95%</div>
            <p className="text-muted text-sm">Lead Qualification Rate</p>
          </div>
          <div className="text-center p-6 bg-surface-light rounded-xl border border-accent/10">
            <div className="text-2xl font-display font-bold text-accent mb-2">6</div>
            <p className="text-muted text-sm">Supported Channels</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ConversationMockups