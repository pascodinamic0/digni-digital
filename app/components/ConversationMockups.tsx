'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import SocialPlatformIcon from './SocialPlatformIcon'

interface Message {
  sender: 'visitor' | 'ai'
  text: string
  time: string
}

interface Conversation {
  id: string
  title: string
  platform: string
  icon: React.ReactNode
  messages: Message[]
  industry: string
}

const ConversationMockups = () => {
  const [activeDemo, setActiveDemo] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)

  const conversations: Conversation[] = [
    {
      id: 'website',
      title: 'Website Chat',
      platform: 'Live Chat Widget',
      industry: 'Dental Practice',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      messages: [
        { sender: 'visitor', text: 'Hi, I saw your ad about teeth whitening. How much does it cost?', time: '2:34 PM' },
        { sender: 'ai', text: 'Hi! Great question. Our professional whitening starts at $299. Quick question, are you currently a patient with us, or would this be your first visit?', time: '2:34 PM' },
        { sender: 'visitor', text: 'First visit. Is that price for in-office or take-home?', time: '2:35 PM' },
        { sender: 'ai', text: 'That\'s for our in-office Zoom whitening, results in one visit. For new patients, we include a free consultation. When works better for you: this week or next week?', time: '2:35 PM' },
        { sender: 'visitor', text: 'This week if possible. I have a wedding coming up.', time: '2:36 PM' },
        { sender: 'ai', text: 'Perfect timing! I have Thursday at 2pm or Friday at 10am open. Which works for you?', time: '2:36 PM' },
        { sender: 'visitor', text: 'Thursday 2pm works great', time: '2:37 PM' },
        { sender: 'ai', text: '✅ Done! You\'re booked for Thursday at 2pm with Dr. Martinez. I\'ll send confirmation to your email. Anything else you need before the big day?', time: '2:37 PM' }
      ]
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      platform: 'WhatsApp Business',
      industry: 'HVAC Company',
      icon: (
        <SocialPlatformIcon platform="whatsapp" className="w-5 h-5" />
      ),
      messages: [
        { sender: 'visitor', text: 'Hey my AC stopped working. It\'s 95 degrees here 😰', time: '11:22 AM' },
        { sender: 'ai', text: 'That\'s miserable! Let me help you fast. Is your AC not turning on at all, or is it running but not cooling?', time: '11:22 AM' },
        { sender: 'visitor', text: 'It\'s running but just blowing warm air', time: '11:23 AM' },
        { sender: 'ai', text: 'Got it, likely a refrigerant or compressor issue. We can have a tech there today. Are you at a residential address?', time: '11:23 AM' },
        { sender: 'visitor', text: 'Yes, house in Cedar Park. How much for the service call?', time: '11:24 AM' },
        { sender: 'ai', text: '$89 diagnostic fee, waived if you proceed with repair. We have a slot at 2pm or 4:30pm today. Which works?', time: '11:24 AM' },
        { sender: 'visitor', text: '2pm please! Can you text me when they\'re on the way?', time: '11:25 AM' },
        { sender: 'ai', text: '✅ Booked! Mike will be there at 2pm. You\'ll get a text when he\'s 15 min out + his photo so you know who to expect. Stay cool! 🧊', time: '11:25 AM' }
      ]
    },
    {
      id: 'instagram',
      title: 'Instagram DM',
      platform: 'Instagram Direct',
      industry: 'Med Spa',
      icon: (
        <SocialPlatformIcon platform="instagram" className="w-5 h-5" />
      ),
      messages: [
        { sender: 'visitor', text: 'Love your before/afters! 😍 How much for lip filler?', time: '4:15 PM' },
        { sender: 'ai', text: 'Thank you! 💕 Our lip filler starts at $650/syringe. Most clients need 1-2 for natural results. Have you had filler before?', time: '4:15 PM' },
        { sender: 'visitor', text: 'No first time! I want fuller but still natural looking', time: '4:16 PM' },
        { sender: 'ai', text: 'You\'ll love it! First-timers usually do 1 syringe, subtle but noticeable. We\'re running 15% off for new clients this month. Want me to book you a free consult?', time: '4:16 PM' },
        { sender: 'visitor', text: 'Yes! Do you have anything Saturday?', time: '4:17 PM' },
        { sender: 'ai', text: 'Saturday works! I have 11am or 2pm with Dr. Kim, she\'s amazing with natural lips. Which do you prefer?', time: '4:17 PM' },
        { sender: 'visitor', text: '2pm is perfect!', time: '4:18 PM' },
        { sender: 'ai', text: '✅ You\'re all set! Saturday 2pm with Dr. Kim. I\'ll DM you our address + parking tips. See you then! 💋', time: '4:18 PM' }
      ]
    },
    {
      id: 'facebook',
      title: 'Facebook',
      platform: 'Messenger',
      industry: 'Roofing Company',
      icon: (
        <SocialPlatformIcon platform="facebook" className="w-5 h-5" />
      ),
      messages: [
        { sender: 'visitor', text: 'Hi, the storm damaged my roof. Do you do free inspections?', time: '3:20 PM' },
        { sender: 'ai', text: 'Yes, absolutely free, no obligation. Sorry to hear about the storm damage. Is it a residential home or commercial building?', time: '3:20 PM' },
        { sender: 'visitor', text: 'Residential. I can see some shingles in my yard 😬', time: '3:21 PM' },
        { sender: 'ai', text: 'That needs attention fast before the next rain. We work with all major insurance companies too. What\'s your zip code? I\'ll check our availability in your area.', time: '3:21 PM' },
        { sender: 'visitor', text: '78613', time: '3:22 PM' },
        { sender: 'ai', text: 'Perfect, we cover Cedar Park! I can get an inspector out tomorrow morning or Thursday afternoon. Which works better?', time: '3:22 PM' },
        { sender: 'visitor', text: 'Tomorrow morning would be great', time: '3:23 PM' },
        { sender: 'ai', text: '✅ Done! Jake will be there tomorrow between 9-11am. He\'ll take photos, check for hidden damage, and give you a full report, even help with your insurance claim if needed. See you then! 🏠', time: '3:23 PM' }
      ]
    },
    {
      id: 'sms',
      title: 'SMS',
      platform: 'Text Message',
      industry: 'Law Firm',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      messages: [
        { sender: 'visitor', text: 'I was in a car accident last week. Do I need a lawyer?', time: '9:15 AM' },
        { sender: 'ai', text: 'I\'m sorry to hear that. Was anyone injured, including yourself?', time: '9:15 AM' },
        { sender: 'visitor', text: 'Yes my back has been hurting since. The other driver ran a red light.', time: '9:16 AM' },
        { sender: 'ai', text: 'That\'s important, back injuries can be serious and the other driver was clearly at fault. Have you seen a doctor yet?', time: '9:16 AM' },
        { sender: 'visitor', text: 'Going tomorrow. Should I wait to call you?', time: '9:17 AM' },
        { sender: 'ai', text: 'No, don\'t wait. Insurance companies move fast and what you say now matters. Our consultation is free, no obligation. We only get paid if you win. Can you talk today?', time: '9:17 AM' },
        { sender: 'visitor', text: 'Yes I can do 3pm', time: '9:18 AM' },
        { sender: 'ai', text: '✅ Perfect. Attorney Martinez will call you at 3pm sharp. Keep any photos, police reports, and medical records handy. We\'ll make sure you\'re protected. Talk soon.', time: '9:18 AM' }
      ]
    },
    {
      id: 'google',
      title: 'Google',
      platform: 'Google Business Chat',
      industry: 'Auto Repair',
      icon: (
        <SocialPlatformIcon platform="google" className="w-5 h-5" />
      ),
      messages: [
        { sender: 'visitor', text: 'How much for an oil change? 2019 Honda Accord', time: '10:30 AM' },
        { sender: 'ai', text: 'For your 2019 Accord, synthetic oil change is $59.99. Includes filter, top-offs, and 21-point inspection. How many miles since your last change?', time: '10:30 AM' },
        { sender: 'visitor', text: 'About 7000 miles. Due for one', time: '10:31 AM' },
        { sender: 'ai', text: 'Yep, you\'re due! We can usually get you in and out in 30 minutes. Are you looking for today or do you want to schedule ahead?', time: '10:31 AM' },
        { sender: 'visitor', text: 'Today if possible, I\'m off work', time: '10:32 AM' },
        { sender: 'ai', text: 'Perfect timing! We have openings at 1pm and 3:30pm today. We\'re at 1234 Main Street. Which slot works?', time: '10:32 AM' },
        { sender: 'visitor', text: '1pm works. Do I need to wait or can I drop it off?', time: '10:33 AM' },
        { sender: 'ai', text: '✅ Booked for 1pm! You can wait (we have wifi + coffee) or drop off and we\'ll text when it\'s ready. See you at 1! 🚗', time: '10:33 AM' }
      ]
    }
  ]

  const [isTyping, setIsTyping] = useState(false)
  const [conversationComplete, setConversationComplete] = useState(false)

  // Handle conversation progression
  useEffect(() => {
    // Reset state when conversation changes
    setMessageIndex(0)
    setIsTyping(false)
    setConversationComplete(false)
  }, [activeDemo])

  useEffect(() => {
    if (conversationComplete) return

    const currentMessages = conversations[activeDemo].messages
    const maxMessages = currentMessages.length

    // If we've shown all messages, mark as complete and wait before switching
    if (messageIndex >= maxMessages - 1) {
      setIsTyping(false)
      setConversationComplete(true)
      
      // Wait 3 seconds then switch to next conversation
      const switchTimeout = setTimeout(() => {
        setActiveDemo((prev) => (prev + 1) % conversations.length)
      }, 3000)
      
      return () => clearTimeout(switchTimeout)
    }

    // Determine next message sender
    const nextMessage = currentMessages[messageIndex + 1]
    const nextIsAI = nextMessage?.sender === 'ai'

    // If next message is from AI, show typing indicator first
    if (nextIsAI) {
      setIsTyping(true)
      const typingTimeout = setTimeout(() => {
        setIsTyping(false)
        setMessageIndex((prev) => prev + 1)
      }, 2500) // Slower typing - 2.5 seconds to show typing indicator
      
      return () => clearTimeout(typingTimeout)
    } else {
      // Visitor message - show after a delay (simulates them typing)
      const messageTimeout = setTimeout(() => {
        setMessageIndex((prev) => prev + 1)
      }, 1800) // 1.8 second delay before visitor message appears
      
      return () => clearTimeout(messageTimeout)
    }
  }, [messageIndex, activeDemo, conversations, conversationComplete])

  const ChatBubble = ({ message, isAI }: { message: Message; isAI: boolean }) => (
    <div className={`flex ${isAI ? 'justify-start' : 'justify-end'} mb-3`}>
      <div className={`max-w-[85%] ${isAI ? 'order-2' : 'order-1'}`}>
        <div
          className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
            isAI
              ? 'bg-surface-light border border-border-light text-text'
              : 'bg-accent text-background'
          } ${isAI ? 'rounded-tl-sm' : 'rounded-tr-sm'}`}
        >
          {message.text}
        </div>
        <div className={`text-[10px] text-muted mt-1 px-1 ${isAI ? 'text-left' : 'text-right'}`}>
          {message.time}
        </div>
      </div>
      {isAI && (
        <div className="order-1 mr-2 mt-1 flex-shrink-0">
          <div className="w-7 h-7 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-background" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 3L4 14h7v7l9-11h-7V3z"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  )

  return (
    <section className="py-24 bg-gradient-to-b from-background to-surface" aria-labelledby="conversations-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-semibold uppercase tracking-wide mb-4"
          >
            See It In Action
          </motion.span>
          <motion.h2
            id="conversations-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Real Conversations.<br />
            <span className="gradient-text">Real Bookings.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-lg md:text-xl max-w-3xl mx-auto"
          >
            Watch how leads go from "just browsing" to booked appointments in under 4 minutes. 
            Every channel. Every time. No human required.
          </motion.p>
        </div>

        {/* Main Demo Area */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Active Conversation */}
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Phone Frame */}
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-success/20 rounded-[3rem] blur-2xl opacity-50" />
              <div className="relative bg-surface border border-border-light rounded-3xl p-2 shadow-2xl">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-background rounded-b-2xl" />
                
                {/* Screen */}
                <div className="bg-background rounded-[2rem] overflow-hidden">
                  {/* Header */}
                  <div className="bg-surface/80 backdrop-blur-xl px-4 py-3 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        {conversations[activeDemo].icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-semibold text-sm text-text">{conversations[activeDemo].title}</h3>
                        <p className="text-xs text-muted">{conversations[activeDemo].industry}</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                        <span className="text-[10px] text-success font-medium">Live</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Messages */}
                  <div className="h-[420px] overflow-y-auto p-4 space-y-1 scrollbar-thin">
                    {conversations[activeDemo].messages.slice(0, messageIndex + 1).map((message, msgIndex) => (
                      <ChatBubble
                        key={`${activeDemo}-${msgIndex}`}
                        message={message}
                        isAI={message.sender === 'ai'}
                      />
                    ))}
                    
                    {/* Typing Indicator - only show when AI is typing */}
                    {isTyping && (
                      <div className="flex justify-start mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center">
                            <svg className="w-3.5 h-3.5 text-background" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M13 3L4 14h7v7l9-11h-7V3z"/>
                            </svg>
                          </div>
                          <div className="bg-surface-light border border-border-light px-5 py-3.5 rounded-2xl rounded-tl-sm">
                            <div className="flex items-center gap-1">
                              <span className="w-2.5 h-2.5 bg-accent rounded-full animate-[typing_1.4s_ease-in-out_infinite]" style={{ animationDelay: '0ms' }} />
                              <span className="w-2.5 h-2.5 bg-accent rounded-full animate-[typing_1.4s_ease-in-out_infinite]" style={{ animationDelay: '200ms' }} />
                              <span className="w-2.5 h-2.5 bg-accent rounded-full animate-[typing_1.4s_ease-in-out_infinite]" style={{ animationDelay: '400ms' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Input Bar */}
                  <div className="p-3 border-t border-border bg-surface/50">
                    <div className="flex items-center gap-2 bg-surface-light rounded-full px-4 py-2">
                      <span className="text-muted text-sm flex-1">Type a message...</span>
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-background" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Channel Selector */}
          <div className="flex flex-col justify-center">
            <h3 className="font-display text-2xl font-bold mb-6 text-center lg:text-left">
              Works on Every Channel
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {conversations.map((conv, index) => (
                <motion.button
                  key={conv.id}
                  onClick={() => {
                    setActiveDemo(index)
                    setMessageIndex(0)
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                    activeDemo === index
                      ? 'bg-accent/10 border-accent/50 shadow-lg shadow-accent/10'
                      : 'bg-surface border-border hover:border-border-medium'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                    activeDemo === index ? 'bg-accent text-background' : 'bg-surface-light text-muted'
                  }`}>
                    {conv.icon}
                  </div>
                  <p className="font-medium text-sm text-text">{conv.title}</p>
                  <p className="text-xs text-muted mt-0.5">{conv.industry}</p>
                </motion.button>
              ))}
            </div>
            
            {/* Progress Indicator */}
            <div className="flex gap-1.5 mt-8 justify-center lg:justify-start">
              {conversations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveDemo(index)
                    setMessageIndex(0)
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeDemo === index ? 'w-8 bg-accent' : 'w-1.5 bg-foreground/20 hover:bg-foreground/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '<2s', label: 'Response Time', icon: '⚡' },
            { value: '24/7', label: 'Always On', icon: '🌙' },
            { value: '100%', label: 'Lead Capture', icon: '🎯' },
            { value: '6+', label: 'Channels', icon: '📱' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-surface border border-border"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="font-display text-3xl font-bold text-accent mb-1">{stat.value}</div>
              <p className="text-muted text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ConversationMockups
