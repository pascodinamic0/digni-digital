'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import LeadChannelIcon from './LeadChannelIcon'
import { LEAD_CHANNEL_CATALOG, type LeadChannelId } from '@/lib/lead-channels'

const CHANNEL_LABELS: Record<LeadChannelId, string> = {
  whatsapp: 'WhatsApp',
  sms: 'SMS',
  phone: 'Phone',
  ads: 'Paid Ads',
  website: 'Website Chat',
  facebook: 'Facebook Messenger',
  instagram: 'Instagram DM',
  email: 'Email',
  google: 'Google Business',
  tiktok: 'TikTok',
  linkedin: 'LinkedIn',
}

const CHANNEL_STATS: Partial<Record<LeadChannelId, string>> = {
  whatsapp: 'Africa-first',
  sms: '<2s Response',
  phone: 'Never Miss Calls',
  website: '24/7 Available',
  facebook: 'Auto-Reply',
  instagram: 'Smart Responses',
  email: 'Inbox Sync',
  google: 'Local Leads',
  tiktok: 'DM + Comments',
  linkedin: 'B2B Forms',
  ads: 'Lead Forms',
}

const ChannelsDiagram = () => {
  const [activeChannel, setActiveChannel] = useState<string | null>(null)

  const channels = LEAD_CHANNEL_CATALOG.map((meta) => ({
    id: meta.id,
    name: CHANNEL_LABELS[meta.id],
    description: `Unified inbox · ${CHANNEL_LABELS[meta.id]}`,
    stats: CHANNEL_STATS[meta.id] ?? 'Unified inbox',
    beta: meta.beta,
  }))

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
            WhatsApp, SMS, phone, paid ads, web, email, and social — one inbox, one CRM thread per contact.
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto">
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-5">
            {channels.map((channel, index) => (
              <motion.div
                key={channel.id}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
                onHoverStart={() => setActiveChannel(channel.id)}
                onHoverEnd={() => setActiveChannel(null)}
                className="group cursor-pointer"
              >
                <div
                  className={`relative p-4 rounded-2xl border transition-all duration-300 h-full ${
                    activeChannel === channel.id
                      ? 'border-accent/50 bg-accent/5 scale-105'
                      : 'border-border-light bg-surface-light hover:border-accent/30'
                  }`}
                >
                  <div className="text-center mb-2">
                    <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-2 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <LeadChannelIcon channelId={channel.id} className="w-7 h-7" />
                    </div>
                    <h3 className="font-display text-sm font-bold text-text mb-1 line-clamp-2">{channel.name}</h3>
                    <div className="inline-block px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-medium rounded-full border border-accent/20">
                      {channel.stats}
                    </div>
                  </div>

                  <motion.div
                    animate={activeChannel === channel.id ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-3 right-3 w-2.5 h-2.5 bg-success rounded-full opacity-80"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

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
