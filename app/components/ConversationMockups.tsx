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
      id: 'sms',
      title: 'SMS',
      platform: 'Text Message',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % conversations.length)
      setMessageIndex(0)
    }, 8000)

    return () => clearInterval(interval)
  }, [conversations.length])

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => {
        const maxMessages = conversations[activeDemo].messages.length
        return prev < maxMessages - 1 ? prev + 1 : prev
      })
    }, 1500)

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
                  activeDemo === index ? 'bg-accent scale-125' : 'bg-muted-dark hover:bg-muted'
                }`}
                aria-label={`View ${conversations[index].title} demo`}
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
            <div className="text-2xl font-display font-bold text-accent mb-2">6+</div>
            <p className="text-muted text-sm">Supported Channels</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ConversationMockups