'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const ChannelsDiagram = () => {
  const [activeChannel, setActiveChannel] = useState<string | null>(null)

  const channels = [
    {
      id: 'website',
      name: 'Website Chat',
      description: 'Live chat widget on your website',
      color: 'from-info to-info',
      icon: '🌐',
      stats: '24/7 Available'
    },
    {
      id: 'sms',
      name: 'SMS Messages',
      description: 'Text message conversations',
      color: 'from-success to-success',
      icon: '💬',
      stats: '<2s Response'
    },
    {
      id: 'facebook',
      name: 'Facebook Messenger',
      description: 'Facebook page messaging',
      color: 'from-info to-info',
      icon: '📘',
      stats: 'Auto-Reply'
    },
    {
      id: 'instagram',
      name: 'Instagram DM',
      description: 'Instagram direct messages',
      color: 'from-accent to-purple',
      icon: '📸',
      stats: 'Smart Responses'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      description: 'WhatsApp Business messaging',
      color: 'from-success to-success',
      icon: '📱',
      stats: 'Global Reach'
    },
    {
      id: 'voice',
      name: 'Voice Calls',
      description: 'Phone call handling',
      color: 'from-warning to-destructive',
      icon: '📞',
      stats: 'Never Miss Calls'
    }
  ]

  return (
    <section className="py-24 bg-surface relative" aria-labelledby="channels-title">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-medium text-sm uppercase tracking-wider"
          >
            Multi-Channel Intelligence
          </motion.span>
          <motion.h2
            id="channels-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            One AI System,<br />
            <span className="gradient-text">Every Channel</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-lg max-w-3xl mx-auto"
          >
            Your AI employee seamlessly handles conversations across all platforms, 
            providing consistent, intelligent responses wherever your customers reach out.
          </motion.p>
        </div>

        {/* Main Diagram */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central AI Hub */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center mb-16"
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center shadow-2xl glow-accent">
                <div className="text-6xl md:text-7xl">🧠</div>
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-accent/30 animate-pulse"></div>
              <div className="text-center mt-6">
                <h3 className="font-display text-xl md:text-2xl font-bold text-accent">AI Brain</h3>
                <p className="text-muted text-sm">Super Intelligence</p>
              </div>
            </div>
          </motion.div>

          {/* Channel Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {channels.map((channel, index) => (
              <motion.div
                key={channel.id}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                onHoverStart={() => setActiveChannel(channel.id)}
                onHoverEnd={() => setActiveChannel(null)}
                className="group cursor-pointer"
              >
                <div className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                  activeChannel === channel.id 
                    ? 'border-accent/50 bg-accent/5 scale-105' 
                    : 'border-border-light bg-surface-light hover:border-accent/30'
                }`}>
                  {/* Connection Line to Center */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      whileInView={{ height: '60px', opacity: 0.6 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1 + index * 0.1 }}
                      className="w-0.5 bg-gradient-to-t from-accent to-transparent"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.5 + index * 0.1 }}
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-accent rounded-full"
                    />
                  </div>

                  {/* Channel Icon */}
                  <div className="text-center mb-4">
                    <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${channel.color} flex items-center justify-center text-2xl mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {channel.icon}
                    </div>
                    <h3 className="font-display text-lg font-bold text-text mb-1">
                      {channel.name}
                    </h3>
                    <p className="text-muted text-sm mb-3">
                      {channel.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20">
                      {channel.stats}
                    </div>
                  </div>

                  {/* Animated Pulse */}
                  <motion.div
                    animate={activeChannel === channel.id ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 right-4 w-3 h-3 bg-success rounded-full opacity-80"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connection Animation */}
          <div className="absolute top-32 left-1/2 transform -translate-x-1/2 pointer-events-none">
            {channels.map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 3,
                  delay: 2 + index * 0.5,
                  repeat: Infinity,
                  repeatDelay: 6
                }}
                className="absolute w-2 h-2 bg-accent rounded-full"
                style={{
                  top: `${120 + index * 20}px`,
                  left: `${-10 + (index % 2) * 20}px`
                }}
              />
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2 }}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
          <div className="text-center p-6 bg-surface-light rounded-xl border border-accent/10">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-display text-lg font-bold mb-2">Instant Response</h3>
            <p className="text-muted text-sm">Reply within seconds across all channels simultaneously</p>
          </div>
          <div className="text-center p-6 bg-surface-light rounded-xl border border-accent/10">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="font-display text-lg font-bold mb-2">Consistent Brand Voice</h3>
            <p className="text-muted text-sm">Same professional tone and messaging everywhere</p>
          </div>
          <div className="text-center p-6 bg-surface-light rounded-xl border border-accent/10">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="font-display text-lg font-bold mb-2">Unified Management</h3>
            <p className="text-muted text-sm">All conversations in one dashboard for easy oversight</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ChannelsDiagram