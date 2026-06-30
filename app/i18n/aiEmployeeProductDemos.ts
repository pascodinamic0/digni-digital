/** Copy for AI Employee product demo sections (pipeline, performance, tasks, contacts). */

export type PipelineColumnT = { id: string; title: string; stat: string; borderClass: string }

export type PipelineCardT = {
 id: string
 /** Lead contact name (person) */
 name: string
 /** Where the lead originated */
 source: string
 /** Short note: intent, need, or who they are */
 context: string
 valueLabel: string
 valueDisplay: string
}

export type AdsCampaignRowT = {
 id: string
 name: string
 platform: 'meta' | 'google' | 'instagram' | 'linkedin' | 'tiktok'
 status: 'active' | 'paused' | 'learning'
 spend: string
 roas: string
 leads: number
 audience: string
}

export type CalendarBookingChannel = 'whatsapp' | 'website' | 'sms' | 'phone' | 'instagram'

export type CalendarBookingEventT = {
 id: string
 title: string
 contact: string
 channel: CalendarBookingChannel
 dayIndex: number
 slotIndex: number
}

export type ContactRowT = {
 id: string
 name: string
 phone: string
 email: string
 business: string
 created: string
 lastActivity: string
 tag: string
 /** Lead source: Facebook, Instagram, WhatsApp, Website chat, etc. */
 source: string
}

export type ConversationDemoT = {
 id: string
 title: string
 platform: string
 industry: string
 messages: { sender: 'visitor' | 'ai'; text: string; time: string }[]
}

export type InboxConversationT = {
 id: number
 contact: string
 channel: string
 channelType: 'website' | 'whatsapp' | 'sms' | 'instagram' | 'facebook'
 lastMessage: string
 time: string
 unread: number
 status: 'qualified' | 'appointment-booked' | 'in-progress' | 'follow-up' | 'new-lead'
 avatar: string
}

export type TimelineStepT = {
 id: string
 title: string
 description: string
 outcomeTitle: string
 outcomeLine: string
 metrics: string[]
}

export type AiEmployeeProductDemosTranslations = {
 conversations: {
 badge: string
 title: string
 titleHighlight: string
 subtitle: string
 liveLabel: string
 inputPlaceholder: string
 channelSelectorTitle: string
 stats: { value: string; label: string; icon: string }[]
 items: ConversationDemoT[]
 }
 inbox: {
 badge: string
 title: string
 titleHighlight: string
 subtitle: string
 dashboardTitle: string
 dashboardSubtitle: string
 activeStatus: string
 activeCount: string
 searchPlaceholder: string
 searchAriaLabel: string
 listAriaLabel: string
 statuses: Record<InboxConversationT['status'], string>
 conversations: InboxConversationT[]
 detailMessages: {
 aiIntro: string
 aiIntroMeta: string
 userRequest: string
 userRequestTime: string
 aiFollowUp: string
 aiFollowUpMeta: string
 }
 suggestedActionsLabel: string
 actionSchedule: string
 actionPricing: string
 actionCrm: string
 stats: { value: string; label: string; card: string; valueClass: string }[]
 }
 timeline: {
 badge: string
 title: string
 titleHighlight: string
 subtitle: string
 steps: TimelineStepT[]
 viewStepLabel: string
 }
 pipeline: {
 badge: string
 title: string
 titleHighlight: string
 subtitle: string
 dashboardTitle: string
 dashboardSubtitle: string
 activeLabel: string
 activeDeals: string
 pipelineName: string
 dealsCount: string
 importBtn: string
 addDeal: string
 allTab: string
 newViewTab: string
 advancedFilters: string
 sortLabel: string
 searchPlaceholder: string
 sourceLabel: string
 manageFields: string
 gridView: string
 listView: string
 columns: PipelineColumnT[]
 cards: PipelineCardT[]
 detailHint: string
 detailNext: string
 dragHint: string
 playDemoLabel: string
 stopDemoLabel: string
 detailModalBody: string
 detailModalNextExample: string
 closeLabel: string
 }
 calendarBooking: {
 badge: string
 title: string
 titleHighlight: string
 subtitle: string
 dashboardSubtitle: string
 weekLabel: string
 daysShort: [string, string, string, string, string]
 timeSlots: string[]
 bookingToast: string
 bookingPulse: string
 confirmedLabel: string
 channels: Record<CalendarBookingChannel, string>
 seed: CalendarBookingEventT[]
 queue: CalendarBookingEventT[]
 }
 performance: {
 badge: string
 title: string
 titleHighlight: string
 subtitle: string
 dashboardTitle: string
 dashboardSubtitle: string
 aggregateLabel: string
 reviewsLabel: string
 newReviewToast: string
 platformGoogle: string
 platformFacebook: string
 platformInstagram: string
 platformYelp: string
 platformWhatsapp: string
 platformBing: string
 }
 adsManager: {
 badge: string
 title: string
 titleHighlight: string
 subtitle: string
 dashboardSubtitle: string
 allTab: string
 activeTab: string
 pausedTab: string
 searchPlaceholder: string
 createBtn: string
 syncLabel: string
 headers: {
 campaign: string
 platform: string
 status: string
 spend: string
 roas: string
 leads: string
 audience: string
 }
 statuses: Record<AdsCampaignRowT['status'], string>
 platforms: Record<AdsCampaignRowT['platform'], string>
 optimizeToast: string
 campaigns: AdsCampaignRowT[]
 }
 tasks: {
 badge: string
 title: string
 titleHighlight: string
 subtitle: string
 moduleTitle: string
 moduleSubtitle: string
 scheduleBtn: string
 newPostBtn: string
 daysShort: [string, string, string, string, string, string, string]
 hintComposer: string
 hintScheduled: string
 hintPublished: string
 postSampleTitle: string
 autoPostBanner: string
 }
 contacts: {
 badge: string
 title: string
 titleHighlight: string
 subtitle: string
 allTab: string
 smartList: string
 advancedFilters: string
 sortLabel: string
 searchPlaceholder: string
 manageFields: string
 headers: {
 name: string
 phone: string
 email: string
 business: string
 source: string
 created: string
 activity: string
 tags: string
 }
 pageOf: string
 rowsPerPage: string
 prev: string
 next: string
 rows: ContactRowT[]
 }
}

const pipelineColumnsEn: PipelineColumnT[] = [
 { id: 'c1', title: 'New lead', stat: '1 lead · $1.1k', borderClass: 'border-t-blue-500' },
 { id: 'c2', title: 'Qualified', stat: '3 leads · $580 to $4.9k', borderClass: 'border-t-warning' },
 { id: 'c3', title: 'Demo / intent', stat: '3 leads · $1.8k to $4.2k', borderClass: 'border-t-rose-400' },
 { id: 'c4', title: 'Won / booked', stat: '1 lead · $3.1k', borderClass: 'border-t-success' },
]

const pipelineCardsEn: PipelineCardT[] = [
 {
 id: 'p1',
 name: 'Sarah Chen',
 source: 'Website chat',
 context: 'Asked about cleaning slots & pricing for next week.',
 valueLabel: 'Deal value',
 valueDisplay: '$1,150',
 },
 {
 id: 'p2',
 name: 'Marcus Webb',
 source: 'Google Local',
 context: 'Needs freight quotes for weekend routes; comparing 2 vendors.',
 valueLabel: 'Deal value',
 valueDisplay: '$2,400',
 },
 {
 id: 'p3',
 name: 'Elena Ruiz',
 source: 'Facebook Lead Ad',
 context: 'Catering for two locations; budget confirmed on the call.',
 valueLabel: 'Deal value',
 valueDisplay: '$3,750',
 },
 {
 id: 'p4',
 name: 'James Okonkwo',
 source: 'Referral',
 context: 'Divorce consult, referred by a former client.',
 valueLabel: 'Deal value',
 valueDisplay: '$1,890',
 },
 {
 id: 'p5',
 name: 'Priya Patel',
 source: 'Instagram DM',
 context: 'Membership + PT bundle; wants to start this month.',
 valueLabel: 'Deal value',
 valueDisplay: '$4,950',
 },
 {
 id: 'p6',
 name: 'David Park',
 source: 'WhatsApp Business',
 context: 'Family dental; asked about insurance & first visit.',
 valueLabel: 'Deal value',
 valueDisplay: '$580',
 },
 {
 id: 'p7',
 name: 'Lisa Morales',
 source: 'Bing Places',
 context: 'Contract review for a small supplier dispute.',
 valueLabel: 'Deal value',
 valueDisplay: '$4,200',
 },
 {
 id: 'p8',
 name: 'Omar Haddad',
 source: 'Google Business',
 context: 'Franchise coffee inquiry; requested territory map.',
 valueLabel: 'Deal value',
 valueDisplay: '$3,100',
 },
]

const conversationDemosEn: ConversationDemoT[] = [
 {
 id: 'website',
 title: 'Website Chat',
 platform: 'Live Chat Widget',
 industry: 'Dental Practice',
 messages: [
 { sender: 'visitor', text: 'Hi, I saw your ad about teeth whitening. How much does it cost?', time: '2:34 PM' },
 { sender: 'ai', text: 'Hi! Professional whitening starts at $299. Are you already a patient, or would this be your first visit?', time: '2:34 PM' },
 { sender: 'visitor', text: 'First visit. Is that for in office or take home?', time: '2:35 PM' },
 { sender: 'ai', text: 'That is for in office whitening, with a free consultation for new patients. Does this week or next week work better?', time: '2:35 PM' },
 { sender: 'visitor', text: 'This week if possible. I have a wedding coming up.', time: '2:36 PM' },
 { sender: 'ai', text: 'Perfect timing. Thursday at 2pm or Friday at 10am are open. Which works?', time: '2:36 PM' },
 { sender: 'visitor', text: 'Thursday 2pm works great', time: '2:37 PM' },
 { sender: 'ai', text: 'Done. You are booked for Thursday at 2pm with Dr. Martinez. I will send confirmation to your email.', time: '2:37 PM' },
 ],
 },
 {
 id: 'whatsapp',
 title: 'WhatsApp',
 platform: 'WhatsApp Business',
 industry: 'HVAC Company',
 messages: [
 { sender: 'visitor', text: 'Hey my AC stopped working. It is 95 degrees here.', time: '11:22 AM' },
 { sender: 'ai', text: 'That is miserable. Is the AC not turning on, or is it running but not cooling?', time: '11:22 AM' },
 { sender: 'visitor', text: 'It is running but just blowing warm air', time: '11:23 AM' },
 { sender: 'ai', text: 'Got it. We can have a tech there today. Are you at a residential address?', time: '11:23 AM' },
 { sender: 'visitor', text: 'Yes, house in Cedar Park. How much for the service call?', time: '11:24 AM' },
 { sender: 'ai', text: '$89 diagnostic fee, waived if you proceed with repair. We have 2pm or 4:30pm today. Which works?', time: '11:24 AM' },
 { sender: 'visitor', text: '2pm please. Can you text me when they are on the way?', time: '11:25 AM' },
 { sender: 'ai', text: 'Booked. Mike will be there at 2pm, and you will get a text when he is 15 minutes out.', time: '11:25 AM' },
 ],
 },
 {
 id: 'instagram',
 title: 'Instagram DM',
 platform: 'Instagram Direct',
 industry: 'Med Spa',
 messages: [
 { sender: 'visitor', text: 'Love your before and afters. How much for lip filler?', time: '4:15 PM' },
 { sender: 'ai', text: 'Thank you. Lip filler starts at $650 per syringe. Have you had filler before?', time: '4:15 PM' },
 { sender: 'visitor', text: 'No, first time. I want fuller but still natural looking.', time: '4:16 PM' },
 { sender: 'ai', text: 'First timers usually do 1 syringe for a subtle result. Want me to book a free consult?', time: '4:16 PM' },
 { sender: 'visitor', text: 'Yes. Do you have anything Saturday?', time: '4:17 PM' },
 { sender: 'ai', text: 'Saturday works. I have 11am or 2pm with Dr. Kim. Which do you prefer?', time: '4:17 PM' },
 { sender: 'visitor', text: '2pm is perfect.', time: '4:18 PM' },
 { sender: 'ai', text: 'You are all set for Saturday at 2pm with Dr. Kim. I will DM the address and parking tips.', time: '4:18 PM' },
 ],
 },
 {
 id: 'facebook',
 title: 'Facebook',
 platform: 'Messenger',
 industry: 'Roofing Company',
 messages: [
 { sender: 'visitor', text: 'Hi, the storm damaged my roof. Do you do free inspections?', time: '3:20 PM' },
 { sender: 'ai', text: 'Yes, free and no obligation. Is it a residential home or commercial building?', time: '3:20 PM' },
 { sender: 'visitor', text: 'Residential. I can see some shingles in my yard.', time: '3:21 PM' },
 { sender: 'ai', text: 'That needs attention before the next rain. What is your zip code? I will check availability.', time: '3:21 PM' },
 { sender: 'visitor', text: '78613', time: '3:22 PM' },
 { sender: 'ai', text: 'Perfect, we cover Cedar Park. Tomorrow morning or Thursday afternoon are open. Which works better?', time: '3:22 PM' },
 { sender: 'visitor', text: 'Tomorrow morning would be great', time: '3:23 PM' },
 { sender: 'ai', text: 'Done. Jake will be there tomorrow between 9 and 11am with a full inspection report.', time: '3:23 PM' },
 ],
 },
 {
 id: 'sms',
 title: 'SMS',
 platform: 'Text Message',
 industry: 'Law Firm',
 messages: [
 { sender: 'visitor', text: 'I was in a car accident last week. Do I need a lawyer?', time: '9:15 AM' },
 { sender: 'ai', text: 'I am sorry to hear that. Was anyone injured, including you?', time: '9:15 AM' },
 { sender: 'visitor', text: 'Yes, my back has hurt since. The other driver ran a red light.', time: '9:16 AM' },
 { sender: 'ai', text: 'That matters. Have you seen a doctor yet?', time: '9:16 AM' },
 { sender: 'visitor', text: 'Going tomorrow. Should I wait to call you?', time: '9:17 AM' },
 { sender: 'ai', text: 'Do not wait. The consultation is free, no obligation, and we only get paid if you win. Can you talk today?', time: '9:17 AM' },
 { sender: 'visitor', text: 'Yes, I can do 3pm', time: '9:18 AM' },
 { sender: 'ai', text: 'Perfect. Attorney Martinez will call you at 3pm sharp. Keep photos, reports, and records handy.', time: '9:18 AM' },
 ],
 },
 {
 id: 'google',
 title: 'Google',
 platform: 'Google Business Chat',
 industry: 'Auto Repair',
 messages: [
 { sender: 'visitor', text: 'How much for an oil change? 2019 Honda Accord', time: '10:30 AM' },
 { sender: 'ai', text: 'For your 2019 Accord, synthetic oil change is $59.99 with filter, top offs, and inspection. How many miles since the last change?', time: '10:30 AM' },
 { sender: 'visitor', text: 'About 7000 miles. Due for one', time: '10:31 AM' },
 { sender: 'ai', text: 'Yes, you are due. Are you looking for today or scheduling ahead?', time: '10:31 AM' },
 { sender: 'visitor', text: 'Today if possible, I am off work', time: '10:32 AM' },
 { sender: 'ai', text: 'We have 1pm and 3:30pm today. Which slot works?', time: '10:32 AM' },
 { sender: 'visitor', text: '1pm works. Do I need to wait or can I drop it off?', time: '10:33 AM' },
 { sender: 'ai', text: 'Booked for 1pm. You can wait with wifi and coffee or drop off and we will text when it is ready.', time: '10:33 AM' },
 ],
 },
]

const inboxConversationsEn: InboxConversationT[] = [
 { id: 1, contact: 'Jordan Mitchell', channel: 'Website Chat', channelType: 'website', lastMessage: 'Perfect. When can we schedule the consultation?', time: '2 min ago', unread: 2, status: 'qualified', avatar: 'JM' },
 { id: 2, contact: 'Marcus Webb', channel: 'WhatsApp', channelType: 'whatsapp', lastMessage: 'Thanks for the quick response. I will check my calendar.', time: '5 min ago', unread: 0, status: 'appointment-booked', avatar: 'MW' },
 { id: 3, contact: 'Restaurant Owner', channel: 'SMS', channelType: 'sms', lastMessage: 'AI: I would be happy to help you with pricing information...', time: '12 min ago', unread: 1, status: 'in-progress', avatar: 'RO' },
 { id: 4, contact: 'FitTrack Startup', channel: 'Instagram DM', channelType: 'instagram', lastMessage: 'That sounds exciting. Fitness apps typically range...', time: '1 hr ago', unread: 0, status: 'follow-up', avatar: 'FT' },
 { id: 5, contact: 'Local Business', channel: 'Facebook Messenger', channelType: 'facebook', lastMessage: 'AI: Our automation solutions can definitely help...', time: '2 hr ago', unread: 3, status: 'new-lead', avatar: 'LB' },
]

const timelineStepsEn: TimelineStepT[] = [
 {
 id: 'lead',
 title: 'Lead Arrives',
 description: 'A new prospect reaches out on any channel.',
 outcomeTitle: 'Nothing slips through',
 outcomeLine: 'Web, social, SMS, and phone funnel into one system. Every first touch is captured.',
 metrics: ['Website', 'SMS', 'Facebook', 'Instagram', 'WhatsApp', 'Phone'],
 },
 {
 id: 'response',
 title: 'Instant AI Reply',
 description: 'AI replies within 2 seconds with a personalized message.',
 outcomeTitle: 'Speed that wins the moment',
 outcomeLine: 'Personal replies in seconds, around the clock, before curiosity turns into a competitor win.',
 metrics: ['<2s Response', '24/7 Live', 'WhatsApp', 'Phone'],
 },
 {
 id: 'qualification',
 title: 'Contact Saved',
 description: 'AI captures contact details and saves them to your CRM.',
 outcomeTitle: 'An audience you actually own',
 outcomeLine: 'Every identity lands in CRM with context, built in list growth, ready for nurture and campaigns.',
 metrics: ['Auto Capture', 'CRM Sync', 'WhatsApp Leads', 'Phone Leads'],
 },
 {
 id: 'appointment',
 title: 'Appointment Booked',
 description: 'AI books the right meeting into your calendar with no back and forth.',
 outcomeTitle: 'Sales time on booked calls',
 outcomeLine: 'The right prospects lock a slot themselves, with fewer flakes and no scheduling volleyball.',
 metrics: ['Calendar Sync', 'Auto Confirm', 'WhatsApp Scheduling', 'Phone Scheduling'],
 },
 {
 id: 'followup',
 title: 'Smart Follow Up',
 description: 'Automated follow up nudges buyers until they are ready.',
 outcomeTitle: "Deals that don't freeze",
 outcomeLine: 'Email, SMS, WhatsApp, and phone nudges keep momentum in control, on your rules.',
 metrics: ['Email Nudges', 'SMS Reminders', 'WhatsApp Nudges', 'Phone Nudges'],
 },
 {
 id: 'post_sale',
 title: 'Post Sale Growth',
 description: 'After the sale, AI drives reviews, offers, retargeting, and referrals.',
 outcomeTitle: 'Reputation and repeat revenue',
 outcomeLine: 'Reviews go out, referrals and upsells follow, and retention marketing runs without adding headcount.',
 metrics: ['Review Requests', 'Upsell Offers', 'Retargeting Ads', 'Referral Program', 'WhatsApp Outreach', 'Phone Outreach'],
 },
]

export const aiEmployeeProductDemosEn: AiEmployeeProductDemosTranslations = {
 conversations: {
 badge: 'See It In Action',
 title: 'Real Conversations.',
 titleHighlight: 'Real Bookings.',
 subtitle: 'Real conversations handled automatically, turned into real bookings. Every channel. Every day. No lead left waiting.',
 liveLabel: 'Live',
 inputPlaceholder: 'Type a message...',
 channelSelectorTitle: 'Works on Every Channel',
 stats: [
 { value: '<2s', label: 'Response Time', icon: '⚡' },
 { value: '24/7', label: 'Always On', icon: '🌙' },
 { value: '100%', label: 'Lead Capture', icon: '🎯' },
 { value: '6+', label: 'Channels', icon: '📱' },
 ],
 items: conversationDemosEn,
 },
 inbox: {
 badge: 'Command Center',
 title: 'Every Lead. Every Channel.',
 titleHighlight: 'One Dashboard.',
 subtitle: 'Monitor AI performance, track lead status, and manage conversations across all channels from one powerful interface. Never lose a lead again.',
 dashboardTitle: 'Conversations',
 dashboardSubtitle: 'AI Employee Dashboard',
 activeStatus: 'AI Active',
 activeCount: '5 active conversations',
 searchPlaceholder: 'Search conversations...',
 searchAriaLabel: 'Search conversations',
 listAriaLabel: 'Conversations',
 statuses: {
 qualified: 'Qualified',
 'appointment-booked': 'Booked',
 'in-progress': 'Active',
 'follow-up': 'Follow up',
 'new-lead': 'New Lead',
 },
 conversations: inboxConversationsEn,
 detailMessages: {
 aiIntro: 'Hello. I would be happy to help you with pricing information. What type of service are you most interested in?',
 aiIntroMeta: 'AI · 2:34 PM',
 userRequest: 'Agentic software development for my restaurant',
 userRequestTime: '2:35 PM',
 aiFollowUp: 'Perfect. For restaurant software solutions, packages start at $2,997. Would you like me to schedule a consultation to discuss your specific needs?',
 aiFollowUpMeta: 'AI · 2:35 PM',
 },
 suggestedActionsLabel: 'AI Suggested Actions',
 actionSchedule: 'Schedule Consultation',
 actionPricing: 'Send Pricing Details',
 actionCrm: 'Add to CRM',
 stats: [
 { value: '47', label: 'Conversations Today', card: 'from success/10 to success/5 border success/20', valueClass: 'text-success' },
 { value: '23', label: 'Qualified Leads', card: 'from success/10 to success/5 border success/20', valueClass: 'text-success' },
 { value: '12', label: 'Appointments Booked', card: 'from info/10 to info/5 border info/20', valueClass: 'text-info' },
 { value: '98%', label: 'Response Rate', card: 'from success/10 to success/5 border success/20', valueClass: 'text-success' },
 ],
 },
 timeline: {
 badge: 'Full client journey',
 title: 'One automation system',
 titleHighlight: 'from first touch to post sale',
 subtitle:
 'Six connected stages, capture, reply, CRM, booking, follow up, and growth, running as a single loop your team does not have to babysit.',
 steps: timelineStepsEn,
 viewStepLabel: 'View step',
 },
 pipeline: {
 badge: 'Pipeline',
 title: 'Leads move without',
 titleHighlight: 'you babysitting the board.',
 subtitle:
 'Four stages. Every lead has a source and a story. Drag cards, or hit Play to watch one person move through the pipeline.',
 dashboardTitle: 'Lead flow',
 dashboardSubtitle: 'AI Employee workspace',
 activeLabel: 'Sync on',
 activeDeals: '8 active leads',
 pipelineName: 'Growth pipeline',
 dealsCount: 'leads',
 importBtn: 'Import',
 addDeal: 'Add lead',
 allTab: 'All',
 newViewTab: '+ View',
 advancedFilters: 'Advanced filters',
 sortLabel: 'Sort (recent)',
 searchPlaceholder: 'Search leads',
 sourceLabel: 'Source',
 manageFields: 'Manage fields',
 gridView: 'Board',
 listView: 'List',
 columns: pipelineColumnsEn,
 cards: pipelineCardsEn,
 detailHint: 'AI notes',
 detailNext: 'Suggested next step',
 dragHint: 'Drag cards between stages, the flow runs automatically; use Stop to pause.',
 playDemoLabel: 'Play flow',
 stopDemoLabel: 'Stop',
 detailModalBody:
 'AI logged who they are, where they came from, intent, and deal value. Your team gets notified when the lead is qualified, not on every message.',
 detailModalNextExample: 'Send calendar link for a 20 minute fit call.',
 closeLabel: 'Close',
 },
 calendarBooking: {
 badge: 'Scheduling',
 title: 'Your week fills',
 titleHighlight: 'while you sell.',
 subtitle:
 'Qualified leads pick a slot from chat, SMS, or phone. The AI blocks time, sends confirmations, and keeps the calendar dense without back and forth.',
 dashboardSubtitle: 'AI Employee · live booking',
 weekLabel: 'This week',
 daysShort: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
 timeSlots: ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'],
 bookingToast: 'New meeting booked',
 bookingPulse: 'Booking…',
 confirmedLabel: 'Confirmed',
 channels: {
 whatsapp: 'WhatsApp',
 website: 'Website chat',
 sms: 'SMS',
 phone: 'Phone',
 instagram: 'Instagram DM',
 },
 seed: [
 {
 id: 'c0',
 title: 'Strategy call',
 contact: 'Jordan M.',
 channel: 'website',
 dayIndex: 0,
 slotIndex: 1,
 },
 {
 id: 'c1',
 title: 'Demo · growth plan',
 contact: 'Marcus W.',
 channel: 'whatsapp',
 dayIndex: 1,
 slotIndex: 3,
 },
 {
 id: 'c2',
 title: 'On site estimate',
 contact: 'Lena R.',
 channel: 'sms',
 dayIndex: 2,
 slotIndex: 0,
 },
 ],
 queue: [
 {
 id: 'c3',
 title: 'Fit call · 20 min',
 contact: 'James W.',
 channel: 'instagram',
 dayIndex: 0,
 slotIndex: 4,
 },
 {
 id: 'c4',
 title: 'Consultation',
 contact: 'Priya N.',
 channel: 'phone',
 dayIndex: 3,
 slotIndex: 2,
 },
 {
 id: 'c5',
 title: 'Proposal review',
 contact: 'Alex T.',
 channel: 'whatsapp',
 dayIndex: 4,
 slotIndex: 1,
 },
 {
 id: 'c6',
 title: 'Discovery call',
 contact: 'Nina K.',
 channel: 'website',
 dayIndex: 2,
 slotIndex: 5,
 },
 ],
 },
 performance: {
 badge: 'Reputation',
 title: 'Local listings,',
 titleHighlight: 'one dashboard.',
 subtitle:
 'Google, social, and review sites in one view, ratings and review volume climb as the AI responds and collects feedback.',
 dashboardTitle: 'Reputation pulse',
 dashboardSubtitle: 'AI Employee · local directories',
 aggregateLabel: 'Blended rating',
 reviewsLabel: 'reviews',
 newReviewToast: 'New 5★ on Google',
 platformGoogle: 'Google Business',
 platformFacebook: 'Facebook',
 platformInstagram: 'Instagram',
 platformYelp: 'Yelp',
 platformWhatsapp: 'WhatsApp Business',
 platformBing: 'Bing Places',
 },
 adsManager: {
 badge: 'Paid growth',
 title: 'Every ad account,',
 titleHighlight: 'one command center.',
 subtitle:
 'Launch, pause, and tune Meta, Google, and social campaigns from the same workspace, with spend and ROAS tied to leads the AI already captured.',
 dashboardSubtitle: 'AI Employee · ads & retargeting',
 allTab: 'All campaigns',
 activeTab: 'Active',
 pausedTab: 'Paused',
 searchPlaceholder: 'Search campaigns…',
 createBtn: 'New campaign',
 syncLabel: 'Syncing ad accounts',
 headers: {
 campaign: 'Campaign',
 platform: 'Platform',
 status: 'Status',
 spend: 'Spend (7d)',
 roas: 'ROAS',
 leads: 'Leads',
 audience: 'Audience',
 },
 statuses: {
 active: 'Active',
 paused: 'Paused',
 learning: 'Learning',
 },
 platforms: {
 meta: 'Meta Ads',
 google: 'Google Ads',
 instagram: 'Instagram',
 linkedin: 'LinkedIn',
 tiktok: 'TikTok',
 },
 optimizeToast: 'Budget shifted to top performing retargeting set',
 campaigns: [
 {
 id: 'a1',
 name: 'Booked call retargeting',
 platform: 'meta',
 status: 'active',
 spend: '$842',
 roas: '4.2×',
 leads: 19,
 audience: 'Website visitors · 14d',
 },
 {
 id: 'a2',
 name: 'High intent local search',
 platform: 'google',
 status: 'active',
 spend: '$1,240',
 roas: '3.8×',
 leads: 24,
 audience: 'Service + city keywords',
 },
 {
 id: 'a3',
 name: 'Spring promo · stories',
 platform: 'instagram',
 status: 'learning',
 spend: '$318',
 roas: '2.1×',
 leads: 8,
 audience: 'Engaged followers',
 },
 {
 id: 'a4',
 name: 'Closed lost nurture',
 platform: 'meta',
 status: 'paused',
 spend: '$96',
 roas: '1.4×',
 leads: 3,
 audience: 'Pipeline · no reply 30d',
 },
 {
 id: 'a5',
 name: 'B2B decision makers',
 platform: 'linkedin',
 status: 'active',
 spend: '$560',
 roas: '5.1×',
 leads: 11,
 audience: 'Job title + industry',
 },
 {
 id: 'a6',
 name: 'UGC offer · TikTok',
 platform: 'tiktok',
 status: 'active',
 spend: '$410',
 roas: '3.3×',
 leads: 14,
 audience: 'Lookalike · purchasers',
 },
 ],
 },
 tasks: {
 badge: 'Social',
 title: 'Plan once.',
 titleHighlight: 'Post everywhere on time.',
 subtitle:
 'Drop content on the calendar, the AI schedules and publishes across channels so nothing goes live by accident.',
 moduleTitle: 'Social planner',
 moduleSubtitle: 'AI Employee · calendar & autopublish',
 scheduleBtn: 'Schedule',
 newPostBtn: 'New post',
 daysShort: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
 hintComposer: 'Writing…',
 hintScheduled: 'Queued for publish',
 hintPublished: 'Published',
 postSampleTitle: 'Spring promo · book this week',
 autoPostBanner: 'Auto posting to connected channels…',
 },
 contacts: {
 badge: 'Directory',
 title: 'Every contact the AI touched,',
 titleHighlight: 'searchable and owned.',
 subtitle:
 'One ledger for names, channels, and last touch, so marketing and sales agree on who is warm without exporting spreadsheets.',
 allTab: 'All',
 smartList: '+ Smart segment',
 advancedFilters: 'Advanced filters',
 sortLabel: 'Sort',
 searchPlaceholder: 'Search contacts',
 manageFields: 'Manage fields',
 headers: {
 name: 'Contact',
 phone: 'Phone',
 email: 'Email',
 business: 'Business',
 source: 'Source',
 created: 'Created',
 activity: 'Last activity',
 tags: 'Tags',
 },
 pageOf: 'Page {page} of {total}',
 rowsPerPage: 'Rows',
 prev: 'Prev',
 next: 'Next',
 rows: [
 {
 id: 'n1',
 name: 'Amina Okoye',
 phone: '+1 555 010 221',
 email: 'amina@example.com',
 business: 'Okoye Wellness',
 source: 'Facebook Lead Ad',
 created: 'Nov 27, 2025 8:38 PM',
 lastActivity: '3 days ago',
 tag: 'Hot',
 },
 {
 id: 'n2',
 name: 'James Okonkwo',
 phone: '+1 555 014 882',
 email: 'james@northwind.io',
 business: 'Northwind Logistics',
 source: 'WhatsApp',
 created: 'Jan 4, 2026 11:02 AM',
 lastActivity: '1 month ago',
 tag: '',
 },
 {
 id: 'n3',
 name: 'Keisha Porter',
 phone: '+1 555 019 003',
 email: 'keisha@summitlegal.com',
 business: 'Summit Legal',
 source: 'Website chat widget',
 created: 'Feb 2, 2026 4:15 PM',
 lastActivity: 'Today',
 tag: 'Booked',
 },
 {
 id: 'n4',
 name: 'Morgan Ellis',
 phone: '+1 555 017 441',
 email: 'morgan@brightfield.cafe',
 business: 'Brightfield Cafe',
 source: 'Instagram DM',
 created: 'Mar 1, 2026 9:00 AM',
 lastActivity: 'Yesterday',
 tag: '',
 },
 {
 id: 'n5',
 name: 'Alex Kim',
 phone: '+1 555 022 901',
 email: 'alex@apexfitness.co',
 business: 'Apex Fitness Studio',
 source: 'Google Local',
 created: 'Mar 10, 2026 2:12 PM',
 lastActivity: '2 hours ago',
 tag: 'New',
 },
 ],
 },
}

const pipelineColumnsFr: PipelineColumnT[] = [
 { id: 'c1', title: 'Nouveau lead', stat: '1 lead · 1 150 €', borderClass: 'border-t-blue-500' },
 { id: 'c2', title: 'Qualifié', stat: '3 leads · 580 to 4 900 €', borderClass: 'border-t-warning' },
 { id: 'c3', title: 'Démo / intention', stat: '3 leads · 1,8 to 4,2 k€', borderClass: 'border-t-rose-400' },
 { id: 'c4', title: 'Gagné / réservé', stat: '1 lead · 3,1 k€', borderClass: 'border-t-success' },
]

const pipelineCardsFr: PipelineCardT[] = [
 { id: 'p1', name: 'Sarah Chen', source: 'Chat site', context: 'Créneaux de ménage et tarifs pour la semaine prochaine.', valueLabel: 'Valeur', valueDisplay: '1 150 €' },
 { id: 'p2', name: 'Marcus Webb', source: 'Google Local', context: 'Devis fret week end ; compare deux prestataires.', valueLabel: 'Valeur', valueDisplay: '2 400 €' },
 { id: 'p3', name: 'Elena Ruiz', source: 'Pub Facebook', context: 'Traiteur pour deux sites ; budget validé à l’appel.', valueLabel: 'Valeur', valueDisplay: '3 750 €' },
 { id: 'p4', name: 'James Okonkwo', source: 'Recommandation', context: 'Consultation divorce, envoyé par un ancien client.', valueLabel: 'Valeur', valueDisplay: '1 890 €' },
 { id: 'p5', name: 'Priya Patel', source: 'DM Instagram', context: 'Abonnement + coaching ; veut commencer ce mois ci.', valueLabel: 'Valeur', valueDisplay: '4 950 €' },
 { id: 'p6', name: 'David Park', source: 'WhatsApp Business', context: 'Dentaire famille ; question mutuelle & 1re visite.', valueLabel: 'Valeur', valueDisplay: '580 €' },
 { id: 'p7', name: 'Lisa Morales', source: 'Bing Places', context: 'Relecture de contrat fournisseur.', valueLabel: 'Valeur', valueDisplay: '4 200 €' },
 { id: 'p8', name: 'Omar Haddad', source: 'Google Business', context: 'Café franchise ; demande carte des zones.', valueLabel: 'Valeur', valueDisplay: '3 100 €' },
]

const conversationDemosFr: ConversationDemoT[] = [
 {
 id: 'website',
 title: 'Chat site web',
 platform: 'Widget de chat',
 industry: 'Cabinet dentaire',
 messages: [
 { sender: 'visitor', text: 'Bonjour, j’ai vu votre annonce sur le blanchiment. Combien ça coûte ?', time: '14:34' },
 { sender: 'ai', text: 'Bonjour. Le blanchiment professionnel commence à 299 €. Êtes vous déjà patient chez nous ou ce serait une première visite ?', time: '14:34' },
 { sender: 'visitor', text: 'Première visite. C’est au cabinet ou à domicile ?', time: '14:35' },
 { sender: 'ai', text: 'C’est au cabinet, avec consultation offerte pour les nouveaux patients. Cette semaine ou la semaine prochaine vous arrange ?', time: '14:35' },
 { sender: 'visitor', text: 'Cette semaine si possible. J’ai un mariage bientôt.', time: '14:36' },
 { sender: 'ai', text: 'Parfait. Jeudi 14h ou vendredi 10h sont disponibles. Quel créneau préférez vous ?', time: '14:36' },
 { sender: 'visitor', text: 'Jeudi 14h c’est parfait', time: '14:37' },
 { sender: 'ai', text: 'C’est réservé pour jeudi à 14h avec le Dr Martinez. La confirmation part par e mail.', time: '14:37' },
 ],
 },
 {
 id: 'whatsapp',
 title: 'WhatsApp',
 platform: 'WhatsApp Business',
 industry: 'Entreprise CVC',
 messages: [
 { sender: 'visitor', text: 'Bonjour, ma clim ne marche plus. Il fait 35 degrés ici.', time: '11:22' },
 { sender: 'ai', text: 'C’est pénible. La clim ne démarre pas du tout, ou elle tourne sans refroidir ?', time: '11:22' },
 { sender: 'visitor', text: 'Elle tourne mais souffle de l’air chaud', time: '11:23' },
 { sender: 'ai', text: 'Compris. On peut envoyer un technicien aujourd’hui. C’est une adresse résidentielle ?', time: '11:23' },
 { sender: 'visitor', text: 'Oui, maison à Cedar Park. Combien coûte le déplacement ?', time: '11:24' },
 { sender: 'ai', text: 'Diagnostic à 89 €, offert si vous lancez la réparation. Créneau à 14h ou 16h30 aujourd’hui. Lequel vous va ?', time: '11:24' },
 { sender: 'visitor', text: '14h s’il vous plaît. Vous pouvez m’envoyer un SMS quand il arrive ?', time: '11:25' },
 { sender: 'ai', text: 'Réservé. Mike sera là à 14h et vous recevrez un SMS 15 minutes avant son arrivée.', time: '11:25' },
 ],
 },
 {
 id: 'instagram',
 title: 'DM Instagram',
 platform: 'Instagram Direct',
 industry: 'Med spa',
 messages: [
 { sender: 'visitor', text: 'J’adore vos avant/après. Combien pour un filler lèvres ?', time: '16:15' },
 { sender: 'ai', text: 'Merci. Le filler lèvres commence à 650 € par seringue. En avez vous déjà fait ?', time: '16:15' },
 { sender: 'visitor', text: 'Non, première fois. Je veux plus de volume mais naturel.', time: '16:16' },
 { sender: 'ai', text: 'Pour une première fois, 1 seringue donne souvent un résultat subtil. Voulez vous une consultation gratuite ?', time: '16:16' },
 { sender: 'visitor', text: 'Oui. Vous avez un créneau samedi ?', time: '16:17' },
 { sender: 'ai', text: 'Oui, 11h ou 14h avec le Dr Kim samedi. Vous préférez lequel ?', time: '16:17' },
 { sender: 'visitor', text: '14h c’est parfait.', time: '16:18' },
 { sender: 'ai', text: 'C’est confirmé pour samedi 14h avec le Dr Kim. Je vous envoie l’adresse et les infos parking en DM.', time: '16:18' },
 ],
 },
 {
 id: 'facebook',
 title: 'Facebook',
 platform: 'Messenger',
 industry: 'Entreprise de toiture',
 messages: [
 { sender: 'visitor', text: 'Bonjour, la tempête a abîmé mon toit. Faites vous des inspections gratuites ?', time: '15:20' },
 { sender: 'ai', text: 'Oui, gratuites et sans engagement. C’est une maison ou un bâtiment professionnel ?', time: '15:20' },
 { sender: 'visitor', text: 'Maison. Je vois des bardeaux dans mon jardin.', time: '15:21' },
 { sender: 'ai', text: 'Il faut vérifier avant la prochaine pluie. Quel est votre code postal ? Je regarde les disponibilités.', time: '15:21' },
 { sender: 'visitor', text: '78613', time: '15:22' },
 { sender: 'ai', text: 'Parfait, nous couvrons Cedar Park. Demain matin ou jeudi après midi sont libres. Qu’est ce qui vous arrange ?', time: '15:22' },
 { sender: 'visitor', text: 'Demain matin ce serait très bien', time: '15:23' },
 { sender: 'ai', text: 'C’est fait. Jake passera demain entre 9h et 11h avec un rapport complet.', time: '15:23' },
 ],
 },
 {
 id: 'sms',
 title: 'SMS',
 platform: 'Message texte',
 industry: 'Cabinet d’avocats',
 messages: [
 { sender: 'visitor', text: 'J’ai eu un accident de voiture la semaine dernière. Ai je besoin d’un avocat ?', time: '09:15' },
 { sender: 'ai', text: 'Je suis désolé. Y a t-il eu des blessures, y compris pour vous ?', time: '09:15' },
 { sender: 'visitor', text: 'Oui, j’ai mal au dos depuis. L’autre conducteur a grillé un feu rouge.', time: '09:16' },
 { sender: 'ai', text: 'C’est important. Avez vous déjà vu un médecin ?', time: '09:16' },
 { sender: 'visitor', text: 'J’y vais demain. Je devrais attendre pour vous appeler ?', time: '09:17' },
 { sender: 'ai', text: 'N’attendez pas. La consultation est gratuite et nous ne sommes payés que si vous gagnez. Pouvez vous parler aujourd’hui ?', time: '09:17' },
 { sender: 'visitor', text: 'Oui, je peux à 15h', time: '09:18' },
 { sender: 'ai', text: 'Parfait. Maître Martinez vous appelle à 15h précises. Gardez photos, rapports et dossiers médicaux à portée de main.', time: '09:18' },
 ],
 },
 {
 id: 'google',
 title: 'Google',
 platform: 'Google Business Chat',
 industry: 'Garage auto',
 messages: [
 { sender: 'visitor', text: 'Combien pour une vidange ? Honda Accord 2019', time: '10:30' },
 { sender: 'ai', text: 'Pour votre Accord 2019, la vidange synthétique est à 59,99 €, filtre et contrôle inclus. Combien de kilomètres depuis la dernière vidange ?', time: '10:30' },
 { sender: 'visitor', text: 'Environ 11 000 km. Il est temps.', time: '10:31' },
 { sender: 'ai', text: 'Oui, c’est le bon moment. Vous voulez passer aujourd’hui ou planifier plus tard ?', time: '10:31' },
 { sender: 'visitor', text: 'Aujourd’hui si possible, je ne travaille pas.', time: '10:32' },
 { sender: 'ai', text: 'Nous avons 13h ou 15h30 aujourd’hui. Quel créneau vous convient ?', time: '10:32' },
 { sender: 'visitor', text: '13h. Je dois attendre ou je peux déposer la voiture ?', time: '10:33' },
 { sender: 'ai', text: 'Réservé pour 13h. Vous pouvez attendre avec wifi et café, ou déposer la voiture et recevoir un SMS quand elle est prête.', time: '10:33' },
 ],
 },
]

const inboxConversationsFr: InboxConversationT[] = [
 { id: 1, contact: 'Jordan Mitchell', channel: 'Chat site web', channelType: 'website', lastMessage: 'Parfait. Quand pouvons nous planifier la consultation ?', time: 'il y a 2 min', unread: 2, status: 'qualified', avatar: 'JM' },
 { id: 2, contact: 'Marcus Webb', channel: 'WhatsApp', channelType: 'whatsapp', lastMessage: 'Merci pour la réponse rapide. Je vérifie mon agenda.', time: 'il y a 5 min', unread: 0, status: 'appointment-booked', avatar: 'MW' },
 { id: 3, contact: 'Restaurateur', channel: 'SMS', channelType: 'sms', lastMessage: 'IA : je peux vous aider avec les informations tarifaires...', time: 'il y a 12 min', unread: 1, status: 'in-progress', avatar: 'RO' },
 { id: 4, contact: 'Startup FitTrack', channel: 'DM Instagram', channelType: 'instagram', lastMessage: 'Ça semble prometteur. Les apps fitness tournent souvent autour de...', time: 'il y a 1 h', unread: 0, status: 'follow-up', avatar: 'FT' },
 { id: 5, contact: 'Commerce local', channel: 'Facebook Messenger', channelType: 'facebook', lastMessage: 'IA : nos automatisations peuvent clairement aider...', time: 'il y a 2 h', unread: 3, status: 'new-lead', avatar: 'LB' },
]

const timelineStepsFr: TimelineStepT[] = [
 { id: 'lead', title: 'Le lead arrive', description: 'Un nouveau prospect écrit sur n’importe quel canal.', outcomeTitle: 'Rien ne se perd', outcomeLine: 'Web, social, SMS et téléphone arrivent dans un seul système. Chaque premier contact est capturé.', metrics: ['Site web', 'SMS', 'Facebook', 'Instagram', 'WhatsApp', 'Téléphone'] },
 { id: 'response', title: 'Réponse IA instantanée', description: 'L’IA répond en moins de 2 secondes avec un message personnalisé.', outcomeTitle: 'La vitesse qui gagne le moment', outcomeLine: 'Des réponses personnelles en quelques secondes, 24/7, avant que la curiosité parte chez un concurrent.', metrics: ['Réponse <2s', '24/7', 'WhatsApp', 'Téléphone'] },
 { id: 'qualification', title: 'Contact enregistré', description: 'L’IA capture les coordonnées et les envoie dans votre CRM.', outcomeTitle: 'Une audience qui vous appartient', outcomeLine: 'Chaque identité arrive dans le CRM avec le contexte, prête pour nurturing et campagnes.', metrics: ['Capture auto', 'Sync CRM', 'Leads WhatsApp', 'Leads téléphone'] },
 { id: 'appointment', title: 'Rendez vous réservé', description: 'L’IA réserve le bon créneau dans votre calendrier, sans aller retour.', outcomeTitle: 'Du temps commercial sur des appels réservés', outcomeLine: 'Les bons prospects bloquent un créneau eux mêmes, avec moins d’absences et zéro ping pong planning.', metrics: ['Sync calendrier', 'Confirmation auto', 'Planning WhatsApp', 'Planning téléphone'] },
 { id: 'followup', title: 'Relance intelligente', description: 'Les relances automatiques font avancer les acheteurs jusqu’au bon moment.', outcomeTitle: 'Des deals qui ne gèlent pas', outcomeLine: 'E mail, SMS, WhatsApp et téléphone gardent l’élan, sous contrôle et selon vos règles.', metrics: ['Relances e mail', 'Rappels SMS', 'Relances WhatsApp', 'Relances téléphone'] },
 { id: 'post_sale', title: 'Croissance après vente', description: 'Après la vente, l’IA déclenche avis, offres, retargeting et recommandations.', outcomeTitle: 'Réputation et revenus récurrents', outcomeLine: 'Les demandes d’avis partent, les upsells suivent, et la fidélisation tourne sans recruter.', metrics: ['Demandes d’avis', 'Offres upsell', 'Retargeting', 'Parrainage', 'WhatsApp', 'Téléphone'] },
]

export const aiEmployeeProductDemosFr: AiEmployeeProductDemosTranslations = {
 ...aiEmployeeProductDemosEn,
 conversations: {
 badge: 'Voir en action',
 title: 'De vraies conversations.',
 titleHighlight: 'De vrais rendez vous.',
 subtitle: 'De vraies conversations gérées automatiquement, transformées en vrais rendez vous. Sur tous les canaux. Chaque jour. Aucun lead en attente.',
 liveLabel: 'En direct',
 inputPlaceholder: 'Écrire un message...',
 channelSelectorTitle: 'Fonctionne sur tous les canaux',
 stats: [
 { value: '<2s', label: 'Temps de réponse', icon: '⚡' },
 { value: '24/7', label: 'Toujours actif', icon: '🌙' },
 { value: '100%', label: 'Capture des leads', icon: '🎯' },
 { value: '6+', label: 'Canaux', icon: '📱' },
 ],
 items: conversationDemosFr,
 },
 inbox: {
 badge: 'Centre de commande',
 title: 'Chaque lead. Chaque canal.',
 titleHighlight: 'Un seul tableau de bord.',
 subtitle: 'Suivez les performances de l’IA, le statut des leads et les conversations sur tous les canaux depuis une interface unique. Ne perdez plus jamais un lead.',
 dashboardTitle: 'Conversations',
 dashboardSubtitle: 'Tableau de bord Employé IA',
 activeStatus: 'IA active',
 activeCount: '5 conversations actives',
 searchPlaceholder: 'Rechercher des conversations...',
 searchAriaLabel: 'Rechercher des conversations',
 listAriaLabel: 'Conversations',
 statuses: {
 qualified: 'Qualifié',
 'appointment-booked': 'Réservé',
 'in-progress': 'Actif',
 'follow-up': 'Relance',
 'new-lead': 'Nouveau lead',
 },
 conversations: inboxConversationsFr,
 detailMessages: {
 aiIntro: 'Bonjour. Je peux vous aider avec les informations tarifaires. Quel type de service vous intéresse le plus ?',
 aiIntroMeta: 'IA · 14:34',
 userRequest: 'Développement de logiciel agentique pour mon restaurant',
 userRequestTime: '14:35',
 aiFollowUp: 'Parfait. Pour un logiciel restaurant, les offres commencent à 2 997 €. Voulez vous que je planifie une consultation pour préciser vos besoins ?',
 aiFollowUpMeta: 'IA · 14:35',
 },
 suggestedActionsLabel: 'Actions suggérées par l’IA',
 actionSchedule: 'Planifier une consultation',
 actionPricing: 'Envoyer les tarifs',
 actionCrm: 'Ajouter au CRM',
 stats: [
 { value: '47', label: 'Conversations aujourd’hui', card: 'from success/10 to success/5 border success/20', valueClass: 'text-success' },
 { value: '23', label: 'Leads qualifiés', card: 'from success/10 to success/5 border success/20', valueClass: 'text-success' },
 { value: '12', label: 'Rendez vous réservés', card: 'from info/10 to info/5 border info/20', valueClass: 'text-info' },
 { value: '98%', label: 'Taux de réponse', card: 'from success/10 to success/5 border success/20', valueClass: 'text-success' },
 ],
 },
 timeline: {
 badge: 'Parcours client complet',
 title: 'Un système d’automation',
 titleHighlight: 'du premier contact à l’après vente',
 subtitle:
 'Six étapes reliées, capture, réponse, CRM, réservation, relance et croissance, dans une seule boucle que votre équipe n’a pas à surveiller.',
 steps: timelineStepsFr,
 viewStepLabel: 'Voir l’étape',
 },
 pipeline: {
 badge: 'Pipeline',
 title: 'Les leads avancent sans que',
 titleHighlight: 'vous surveilliez le tableau.',
 subtitle:
 'Quatre étapes. Chaque lead a une source et un contexte. Glissez les cartes, ou lancez la démo pour voir une personne avancer.',
 dashboardTitle: 'Flux des leads',
 dashboardSubtitle: 'Espace Employé IA',
 activeLabel: 'Sync activée',
 activeDeals: '8 leads actifs',
 pipelineName: 'Pipeline croissance',
 dealsCount: 'leads',
 importBtn: 'Importer',
 addDeal: 'Ajouter un lead',
 allTab: 'Tous',
 newViewTab: '+ Vue',
 advancedFilters: 'Filtres avancés',
 sortLabel: 'Tri (récent)',
 searchPlaceholder: 'Rechercher des leads',
 sourceLabel: 'Source',
 manageFields: 'Champs',
 gridView: 'Tableau',
 listView: 'Liste',
 columns: pipelineColumnsFr,
 cards: pipelineCardsFr,
 detailHint: 'Notes IA',
 detailNext: 'Prochaine étape suggérée',
 dragHint: 'Glissez les cartes, le flux tourne tout seul ; Stop pour pauser.',
 playDemoLabel: 'Lecture',
 stopDemoLabel: 'Stop',
 detailModalBody:
 'L’IA a enregistré leur profil, la source, l’intention et la valeur. Votre équipe n’est notifiée qu’à la qualification.',
 detailModalNextExample: 'Envoyer le lien calendrier pour un appel de 20 minutes.',
 closeLabel: 'Fermer',
 },
 calendarBooking: {
 ...aiEmployeeProductDemosEn.calendarBooking,
 badge: 'Planification',
 title: 'Votre semaine se remplit',
 titleHighlight: 'pendant que vous vendez.',
 subtitle:
 'Les leads qualifiés choisissent un créneau par chat, SMS ou téléphone. L’IA bloque l’horaire, envoie la confirmation, sans ping pong.',
 dashboardSubtitle: 'Employé IA · réservation en direct',
 weekLabel: 'Cette semaine',
 daysShort: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'],
 timeSlots: ['9h00', '10h00', '11h00', '13h00', '14h00', '15h00'],
 bookingToast: 'Nouveau rendez vous réservé',
 bookingPulse: 'Réservation…',
 confirmedLabel: 'Confirmé',
 channels: {
 whatsapp: 'WhatsApp',
 website: 'Chat site',
 sms: 'SMS',
 phone: 'Téléphone',
 instagram: 'DM Instagram',
 },
 seed: [
 {
 id: 'c0',
 title: 'Appel stratégie',
 contact: 'Jordan M.',
 channel: 'website',
 dayIndex: 0,
 slotIndex: 1,
 },
 {
 id: 'c1',
 title: 'Démo · plan croissance',
 contact: 'Marcus W.',
 channel: 'whatsapp',
 dayIndex: 1,
 slotIndex: 3,
 },
 {
 id: 'c2',
 title: 'Devis sur site',
 contact: 'Lena R.',
 channel: 'sms',
 dayIndex: 2,
 slotIndex: 0,
 },
 ],
 queue: [
 {
 id: 'c3',
 title: 'Appel fit · 20 min',
 contact: 'James W.',
 channel: 'instagram',
 dayIndex: 0,
 slotIndex: 4,
 },
 {
 id: 'c4',
 title: 'Consultation',
 contact: 'Priya N.',
 channel: 'phone',
 dayIndex: 3,
 slotIndex: 2,
 },
 {
 id: 'c5',
 title: 'Revue proposition',
 contact: 'Alex T.',
 channel: 'whatsapp',
 dayIndex: 4,
 slotIndex: 1,
 },
 {
 id: 'c6',
 title: 'Appel découverte',
 contact: 'Nina K.',
 channel: 'website',
 dayIndex: 2,
 slotIndex: 5,
 },
 ],
 },
 performance: {
 ...aiEmployeeProductDemosEn.performance,
 badge: 'Réputation',
 title: 'Fiches locales,',
 titleHighlight: 'un tableau de bord.',
 subtitle:
 'Google, réseaux et avis au même endroit, notes et volume montent quand l’IA répond et collecte les retours.',
 dashboardTitle: 'Pulsation réputation',
 dashboardSubtitle: 'Employé IA · annuaires locaux',
 aggregateLabel: 'Note moyenne',
 reviewsLabel: 'avis',
 newReviewToast: 'Nouveau 5★ sur Google',
 platformGoogle: 'Google Business',
 platformFacebook: 'Facebook',
 platformInstagram: 'Instagram',
 platformYelp: 'Yelp',
 platformWhatsapp: 'WhatsApp Business',
 platformBing: 'Bing Places',
 },
 adsManager: {
 ...aiEmployeeProductDemosEn.adsManager,
 badge: 'Croissance payante',
 title: 'Tous vos comptes pub,',
 titleHighlight: 'un seul poste de pilotage.',
 subtitle:
 'Lancez, mettez en pause et optimisez Meta, Google et les réseaux depuis le même espace, avec dépenses et ROAS reliés aux leads déjà capturés par l’IA.',
 dashboardSubtitle: 'Employé IA · pubs & retargeting',
 allTab: 'Toutes les campagnes',
 activeTab: 'Actives',
 pausedTab: 'En pause',
 searchPlaceholder: 'Rechercher une campagne…',
 createBtn: 'Nouvelle campagne',
 syncLabel: 'Synchronisation des comptes pub',
 headers: {
 campaign: 'Campagne',
 platform: 'Plateforme',
 status: 'Statut',
 spend: 'Dépenses (7j)',
 roas: 'ROAS',
 leads: 'Leads',
 audience: 'Audience',
 },
 statuses: { active: 'Active', paused: 'En pause', learning: 'Apprentissage' },
 platforms: {
 meta: 'Meta Ads',
 google: 'Google Ads',
 instagram: 'Instagram',
 linkedin: 'LinkedIn',
 tiktok: 'TikTok',
 },
 optimizeToast: 'Budget réalloué vers le retargeting le plus performant',
 campaigns: [
 {
 id: 'a1',
 name: 'Retargeting RDV réservés',
 platform: 'meta',
 status: 'active',
 spend: '842 €',
 roas: '4,2×',
 leads: 19,
 audience: 'Visiteurs site · 14j',
 },
 {
 id: 'a2',
 name: 'Recherche locale haute intention',
 platform: 'google',
 status: 'active',
 spend: '1 240 €',
 roas: '3,8×',
 leads: 24,
 audience: 'Mots clés service + ville',
 },
 {
 id: 'a3',
 name: 'Promo printemps · stories',
 platform: 'instagram',
 status: 'learning',
 spend: '318 €',
 roas: '2,1×',
 leads: 8,
 audience: 'Abonnés engagés',
 },
 {
 id: 'a4',
 name: 'Relance deals perdus',
 platform: 'meta',
 status: 'paused',
 spend: '96 €',
 roas: '1,4×',
 leads: 3,
 audience: 'Pipeline · sans réponse 30j',
 },
 {
 id: 'a5',
 name: 'Décideurs B2B',
 platform: 'linkedin',
 status: 'active',
 spend: '560 €',
 roas: '5,1×',
 leads: 11,
 audience: 'Poste + secteur',
 },
 {
 id: 'a6',
 name: 'Offre UGC · TikTok',
 platform: 'tiktok',
 status: 'active',
 spend: '410 €',
 roas: '3,3×',
 leads: 14,
 audience: 'Lookalike · acheteurs',
 },
 ],
 },
 tasks: {
 ...aiEmployeeProductDemosEn.tasks,
 badge: 'Social',
 title: 'Planifiez une fois.',
 titleHighlight: 'Publiez à l’heure.',
 subtitle:
 'Posez le contenu sur le calendrier, l’IA planifie et publie sur les canaux connectés.',
 moduleTitle: 'Planificateur social',
 moduleSubtitle: 'Employé IA · calendrier & auto publication',
 scheduleBtn: 'Planifier',
 newPostBtn: 'Nouveau post',
 daysShort: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
 hintComposer: 'Rédaction…',
 hintScheduled: 'En file de publication',
 hintPublished: 'Publié',
 postSampleTitle: 'Promo printemps · réservez cette semaine',
 autoPostBanner: 'Publication automatique sur les canaux…',
 },
 contacts: {
 ...aiEmployeeProductDemosEn.contacts,
 badge: 'Annuaire',
 title: 'Chaque contact touché par l’IA,',
 titleHighlight: 'recherchable et à jour.',
 subtitle:
 'Un registre unique pour noms, canaux et dernier contact, sans exports Excel.',
 allTab: 'Tous',
 smartList: '+ Segment',
 advancedFilters: 'Filtres avancés',
 sortLabel: 'Tri',
 searchPlaceholder: 'Rechercher des contacts',
 manageFields: 'Champs',
 headers: {
 name: 'Contact',
 phone: 'Téléphone',
 email: 'E mail',
 business: 'Entreprise',
 source: 'Source',
 created: 'Créé',
 activity: 'Dernière activité',
 tags: 'Tags',
 },
 pageOf: 'Page {page} sur {total}',
 rowsPerPage: 'Lignes',
 prev: 'Préc.',
 next: 'Suiv.',
 rows: aiEmployeeProductDemosEn.contacts.rows,
 },
}

const pipelineColumnsAr: PipelineColumnT[] = [
 { id: 'c1', title: 'عميل جديد', stat: '1 عميل · ‎$1,150', borderClass: 'border-t-blue-500' },
 { id: 'c2', title: 'مؤهل', stat: '3 عملاء · ‎$580 to $4,900', borderClass: 'border-t-warning' },
 { id: 'c3', title: 'عرض / نية', stat: '3 عملاء · ‎$1.8k to $4.2k', borderClass: 'border-t-rose-400' },
 { id: 'c4', title: 'مكتمل / محجوز', stat: '1 عميل · ‎$3,100', borderClass: 'border-t-success' },
]

const pipelineCardsAr: PipelineCardT[] = [
 { id: 'p1', name: 'سارة تشين', source: 'دردشة الموقع', context: 'سألت عن مواعيد التنظيف والأسعار لأسبوع المقبل.', valueLabel: 'قيمة الصفقة', valueDisplay: '‎$1,150' },
 { id: 'p2', name: 'ماركوس ويب', source: 'جوجل المحلي', context: 'يحتاج عروض شحن لعطلة نهاية الأسبوع؛ يقارن موردين.', valueLabel: 'قيمة الصفقة', valueDisplay: '‎$2,400' },
 { id: 'p3', name: 'إيلينا رويز', source: 'إعلان فيسبوك', context: 'تموين لموقعين؛ تم تأكيد الميزانية في المكالمة.', valueLabel: 'قيمة الصفقة', valueDisplay: '‎$3,750' },
 { id: 'p4', name: 'جيمس أوكونكوو', source: 'إحالة', context: 'استشارة طلاق, إحالة من عميل سابق.', valueLabel: 'قيمة الصفقة', valueDisplay: '‎$1,890' },
 { id: 'p5', name: 'بريا باتيل', source: 'رسائل إنستغرام', context: 'اشتراك + تدريب؛ تريد البدء هذا الشهر.', valueLabel: 'قيمة الصفقة', valueDisplay: '‎$4,950' },
 { id: 'p6', name: 'ديفيد بارك', source: 'واتساب للأعمال', context: 'أسنان عائلية؛ سؤال عن التأمين والزيارة الأولى.', valueLabel: 'قيمة الصفقة', valueDisplay: '‎$580' },
 { id: 'p7', name: 'ليزا موراليس', source: 'بينغ بليس', context: 'مراجعة عقد لمورد صغير.', valueLabel: 'قيمة الصفقة', valueDisplay: '‎$4,200' },
 { id: 'p8', name: 'عمر حداد', source: 'جوجل بيزنس', context: 'استفسار امتياز قهوة؛ طلب خريطة المناطق.', valueLabel: 'قيمة الصفقة', valueDisplay: '‎$3,100' },
]

export const aiEmployeeProductDemosAr: AiEmployeeProductDemosTranslations = {
 ...aiEmployeeProductDemosEn,
 pipeline: {
 badge: 'المسار',
 title: 'العملاء المحتملون يتحركون دون',
 titleHighlight: 'متابعة يدوية للوحة.',
 subtitle:
 'أربع مراحل. لكل عميل مصدر وسياق. اسحب البطاقات أو شغّل العرض لترى شخصًا يتحرك عبر اللوحة.',
 dashboardTitle: 'تدفق العملاء',
 dashboardSubtitle: 'مساحة موظف الذكاء الاصطناعي',
 activeLabel: 'المزامنة قيد التشغيل',
 activeDeals: '8 عملاء محتملون نشطون',
 pipelineName: 'مسار النمو',
 dealsCount: 'عملاء',
 importBtn: 'استيراد',
 addDeal: 'إضافة عميل محتمل',
 allTab: 'الكل',
 newViewTab: '+ عرض',
 advancedFilters: 'مرشحات متقدمة',
 sortLabel: 'ترتيب (الأحدث)',
 searchPlaceholder: 'بحث في العملاء',
 sourceLabel: 'المصدر',
 manageFields: 'الحقول',
 gridView: 'لوحة',
 listView: 'قائمة',
 columns: pipelineColumnsAr,
 cards: pipelineCardsAr,
 detailHint: 'ملاحظات الذكاء الاصطناعي',
 detailNext: 'الخطوة المقترحة التالية',
 dragHint: 'اسحب البطاقات, أو تشغيل لعرض متحرك.',
 playDemoLabel: 'تشغيل العرض',
 stopDemoLabel: 'إيقاف',
 detailModalBody:
 'سجّل الذكاء الاصطناعي من هم، والمصدر، والنية، وقيمة الصفقة. يصل الإشعار للفريق عند التأهيل فقط.',
 detailModalNextExample: 'إرسال رابط التقويم لمكالمة ملاءمة لمدة 20 دقيقة.',
 closeLabel: 'إغلاق',
 },
 performance: {
 ...aiEmployeeProductDemosEn.performance,
 badge: 'السمعة',
 title: 'القوائم المحلية،',
 titleHighlight: 'لوحة واحدة.',
 subtitle:
 'جوجل والشبكات والمراجعات في عرض واحد, ترتفع النقاط والمراجعات مع ردود الذكاء.',
 dashboardTitle: 'نبض السمعة',
 dashboardSubtitle: 'موظف ذكاء · أدلة محلية',
 aggregateLabel: 'متوسط التقييم',
 reviewsLabel: 'مراجعات',
 newReviewToast: '5★ جديدة على جوجل',
 platformGoogle: 'Google Business',
 platformFacebook: 'Facebook',
 platformInstagram: 'Instagram',
 platformYelp: 'Yelp',
 platformWhatsapp: 'واتساب للأعمال',
 platformBing: 'Bing Places',
 },
 tasks: {
 ...aiEmployeeProductDemosEn.tasks,
 badge: 'اجتماعي',
 title: 'خطّط مرة.',
 titleHighlight: 'انشر في الوقت المحدد.',
 subtitle:
 'ضع المحتوى على التقويم, الذكاء يجدول وينشر على القنوات المتصلة.',
 moduleTitle: 'مخطط التواصل',
 moduleSubtitle: 'موظف ذكاء · تقويم ونشر تلقائي',
 scheduleBtn: 'جدولة',
 newPostBtn: 'منشور جديد',
 daysShort: ['إثن', 'ثلا', 'أرب', 'خمي', 'جمع', 'سبت', 'أحد'],
 hintComposer: 'جارٍ الكتابة…',
 hintScheduled: 'في انتظار النشر',
 hintPublished: 'نُشر',
 postSampleTitle: 'عرض الربيع · احجز هذا الأسبوع',
 autoPostBanner: 'جارٍ النشر التلقائي على القنوات…',
 },
 contacts: {
 ...aiEmployeeProductDemosEn.contacts,
 badge: 'الدليل',
 title: 'كل جهة لمستها الذكاء،',
 titleHighlight: 'قابلة للبحث وملكية واضحة.',
 subtitle:
 'سجل واحد للأسماء والقنوات وآخر تفاعل, دون جداول منفصلة.',
 allTab: 'الكل',
 smartList: '+ شريحة',
 advancedFilters: 'مرشحات متقدمة',
 sortLabel: 'ترتيب',
 searchPlaceholder: 'بحث جهات',
 manageFields: 'الحقول',
 headers: {
 name: 'جهة',
 phone: 'هاتف',
 email: 'بريد',
 business: 'نشاط',
 source: 'المصدر',
 created: 'أُنشئ',
 activity: 'آخر نشاط',
 tags: 'وسوم',
 },
 pageOf: 'صفحة {page} من {total}',
 rowsPerPage: 'صفوف',
 prev: 'السابق',
 next: 'التالي',
 rows: aiEmployeeProductDemosEn.contacts.rows,
 },
}

const pipelineColumnsDe: PipelineColumnT[] = [
 { id: 'c1', title: 'Neuer Lead', stat: '1 Lead · 1.150 €', borderClass: 'border-t-blue-500' },
 { id: 'c2', title: 'Qualifiziert', stat: '3 Leads · 580 to 4.900 €', borderClass: 'border-t-warning' },
 { id: 'c3', title: 'Demo / Absicht', stat: '3 Leads · 1,8 to 4,2 k€', borderClass: 'border-t-rose-400' },
 { id: 'c4', title: 'Gewonnen / gebucht', stat: '1 Lead · 3,1 k€', borderClass: 'border-t-success' },
]

const pipelineCardsDe: PipelineCardT[] = [
 { id: 'p1', name: 'Sarah Chen', source: 'Website Chat', context: 'Nach Terminen & Preisen für Reinigung nächste Woche gefragt.', valueLabel: 'Dealwert', valueDisplay: '1.150 €' },
 { id: 'p2', name: 'Marcus Webb', source: 'Google Local', context: 'Frachtangebote fürs Wochenende; vergleicht zwei Anbieter.', valueLabel: 'Dealwert', valueDisplay: '2.400 €' },
 { id: 'p3', name: 'Elena Ruiz', source: 'Facebook Lead Ad', context: 'Catering für zwei Standorte; Budget im Call bestätigt.', valueLabel: 'Dealwert', valueDisplay: '3.750 €' },
 { id: 'p4', name: 'James Okonkwo', source: 'Empfehlung', context: 'Scheidungsberatung, empfohlen von früherem Mandanten.', valueLabel: 'Dealwert', valueDisplay: '1.890 €' },
 { id: 'p5', name: 'Priya Patel', source: 'Instagram DM', context: 'Mitgliedschaft + PT; Start noch diesen Monat.', valueLabel: 'Dealwert', valueDisplay: '4.950 €' },
 { id: 'p6', name: 'David Park', source: 'WhatsApp Business', context: 'Familienzahnarzt; Frage zu Kasse & Erstbesuch.', valueLabel: 'Dealwert', valueDisplay: '580 €' },
 { id: 'p7', name: 'Lisa Morales', source: 'Bing Places', context: 'Vertragsprüfung bei Lieferantenstreit.', valueLabel: 'Dealwert', valueDisplay: '4.200 €' },
 { id: 'p8', name: 'Omar Haddad', source: 'Google Business', context: 'Café Franchise; Karte der Gebiete angefordert.', valueLabel: 'Dealwert', valueDisplay: '3.100 €' },
]

export const aiEmployeeProductDemosDe: AiEmployeeProductDemosTranslations = {
 ...aiEmployeeProductDemosEn,
 pipeline: {
 badge: 'Pipeline',
 title: 'Leads laufen weiter ohne',
 titleHighlight: 'dass Sie das Board hüten.',
 subtitle:
 'Vier Phasen. Jeder Lead hat einen Quellkanal und Kontext. Karten ziehen, oder Demo starten.',
 dashboardTitle: 'Lead Flow',
 dashboardSubtitle: 'KI Mitarbeiter Arbeitsbereich',
 activeLabel: 'Sync aktiv',
 activeDeals: '8 aktive Leads',
 pipelineName: 'Wachstums Pipeline',
 dealsCount: 'Leads',
 importBtn: 'Import',
 addDeal: 'Lead hinzufügen',
 allTab: 'Alle',
 newViewTab: '+ Ansicht',
 advancedFilters: 'Erweiterte Filter',
 sortLabel: 'Sortierung (neu)',
 searchPlaceholder: 'Leads suchen',
 sourceLabel: 'Quelle',
 manageFields: 'Felder',
 gridView: 'Board',
 listView: 'Liste',
 columns: pipelineColumnsDe,
 cards: pipelineCardsDe,
 detailHint: 'KI Notizen',
 detailNext: 'Vorgeschlagener nächster Schritt',
 dragHint: 'Karten ziehen, oder Abspielen für den Flow.',
 playDemoLabel: 'Flow abspielen',
 stopDemoLabel: 'Stop',
 detailModalBody:
 'Die KI protokolliert Person, Quelle, Absicht und Dealwert. Ihr Team wird nur bei qualifiziertem Lead benachrichtigt.',
 detailModalNextExample: 'Kalenderlink für ein 20 Minuten Fit Gespräch senden.',
 closeLabel: 'Schließen',
 },
 performance: {
 ...aiEmployeeProductDemosEn.performance,
 badge: 'Reputation',
 title: 'Lokale Einträge,',
 titleHighlight: 'ein Dashboard.',
 subtitle:
 'Google, Social und Bewertungsportale auf einen Blick, Sterne und Volumen steigen mit KI Antworten.',
 dashboardTitle: 'Reputation Puls',
 dashboardSubtitle: 'KI Mitarbeiter · lokale Verzeichnisse',
 aggregateLabel: 'Durchschnittsnote',
 reviewsLabel: 'Bewertungen',
 newReviewToast: 'Neue 5★ bei Google',
 platformGoogle: 'Google Business',
 platformFacebook: 'Facebook',
 platformInstagram: 'Instagram',
 platformYelp: 'Yelp',
 platformWhatsapp: 'WhatsApp Business',
 platformBing: 'Bing Places',
 },
 tasks: {
 ...aiEmployeeProductDemosEn.tasks,
 badge: 'Social',
 title: 'Einmal planen.',
 titleHighlight: 'Pünktlich posten.',
 subtitle:
 'Inhalt auf den Kalender legen, die KI plant und veröffentlicht auf verbundenen Kanälen.',
 moduleTitle: 'Social Planer',
 moduleSubtitle: 'KI Mitarbeiter · Kalender & Auto Post',
 scheduleBtn: 'Planen',
 newPostBtn: 'Neuer Beitrag',
 daysShort: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
 hintComposer: 'Schreibt…',
 hintScheduled: 'Zur Veröffentlichung geplant',
 hintPublished: 'Veröffentlicht',
 postSampleTitle: 'Frühlings Aktion · diese Woche buchen',
 autoPostBanner: 'Auto Post auf verbundene Kanäle…',
 },
 contacts: {
 ...aiEmployeeProductDemosEn.contacts,
 badge: 'Verzeichnis',
 title: 'Jeder Kontakt, den die KI',
 titleHighlight: 'berührt hat, suchbar.',
 subtitle:
 'Ein Register für Namen, Kanäle und letzte Berührung, ohne Excel Exporte.',
 allTab: 'Alle',
 smartList: '+ Segment',
 advancedFilters: 'Erweiterte Filter',
 sortLabel: 'Sortierung',
 searchPlaceholder: 'Kontakte suchen',
 manageFields: 'Felder',
 headers: {
 name: 'Kontakt',
 phone: 'Telefon',
 email: 'E Mail',
 business: 'Unternehmen',
 source: 'Quelle',
 created: 'Erstellt',
 activity: 'Letzte Aktivität',
 tags: 'Tags',
 },
 pageOf: 'Seite {page} von {total}',
 rowsPerPage: 'Zeilen',
 prev: 'Zurück',
 next: 'Weiter',
 rows: aiEmployeeProductDemosEn.contacts.rows,
 },
}

const pipelineColumnsEs: PipelineColumnT[] = [
 { id: 'c1', title: 'Nuevo lead', stat: '1 lead · US$1.150', borderClass: 'border-t-blue-500' },
 { id: 'c2', title: 'Cualificado', stat: '3 leads · US$580 to 4.900', borderClass: 'border-t-warning' },
 { id: 'c3', title: 'Demo / intención', stat: '3 leads · US$1,8k to 4,2k', borderClass: 'border-t-rose-400' },
 { id: 'c4', title: 'Ganado / reservado', stat: '1 lead · US$3,1k', borderClass: 'border-t-success' },
]

const pipelineCardsEs: PipelineCardT[] = [
 { id: 'p1', name: 'Sarah Chen', source: 'Chat web', context: 'Preguntó por huecos de limpieza y precios para la próxima semana.', valueLabel: 'Valor del deal', valueDisplay: 'US$1.150' },
 { id: 'p2', name: 'Marcus Webb', source: 'Google Local', context: 'Cotizaciones de flete fin de semana; compara dos proveedores.', valueLabel: 'Valor del deal', valueDisplay: 'US$2.400' },
 { id: 'p3', name: 'Elena Ruiz', source: 'Anuncio Facebook', context: 'Catering para dos sedes; presupuesto confirmado en la llamada.', valueLabel: 'Valor del deal', valueDisplay: 'US$3.750' },
 { id: 'p4', name: 'James Okonkwo', source: 'Referido', context: 'Consulta de divorcio, referido por un cliente anterior.', valueLabel: 'Valor del deal', valueDisplay: 'US$1.890' },
 { id: 'p5', name: 'Priya Patel', source: 'DM Instagram', context: 'Membresía + PT; quiere empezar este mes.', valueLabel: 'Valor del deal', valueDisplay: 'US$4.950' },
 { id: 'p6', name: 'David Park', source: 'WhatsApp Business', context: 'Dental familiar; pregunta por seguro y primera visita.', valueLabel: 'Valor del deal', valueDisplay: 'US$580' },
 { id: 'p7', name: 'Lisa Morales', source: 'Bing Places', context: 'Revisión de contrato con proveedor pequeño.', valueLabel: 'Valor del deal', valueDisplay: 'US$4.200' },
 { id: 'p8', name: 'Omar Haddad', source: 'Google Business', context: 'Consulta franquicia de café; pidió mapa de zonas.', valueLabel: 'Valor del deal', valueDisplay: 'US$3.100' },
]

export const aiEmployeeProductDemosEs: AiEmployeeProductDemosTranslations = {
 ...aiEmployeeProductDemosEn,
 pipeline: {
 badge: 'Pipeline',
 title: 'Los leads avanzan sin',
 titleHighlight: 'vigilar el tablero.',
 subtitle:
 'Cuatro etapas. Cada lead tiene origen y contexto. Arrastra tarjetas, o reproduce el flujo.',
 dashboardTitle: 'Flujo de leads',
 dashboardSubtitle: 'Espacio Empleado IA',
 activeLabel: 'Sync activo',
 activeDeals: '8 leads activos',
 pipelineName: 'Pipeline de crecimiento',
 dealsCount: 'leads',
 importBtn: 'Importar',
 addDeal: 'Añadir lead',
 allTab: 'Todos',
 newViewTab: '+ Vista',
 advancedFilters: 'Filtros avanzados',
 sortLabel: 'Orden (reciente)',
 searchPlaceholder: 'Buscar leads',
 sourceLabel: 'Origen',
 manageFields: 'Campos',
 gridView: 'Tablero',
 listView: 'Lista',
 columns: pipelineColumnsEs,
 cards: pipelineCardsEs,
 detailHint: 'Notas IA',
 detailNext: 'Siguiente paso sugerido',
 dragHint: 'Arrastra tarjetas, o Reproducir para animar.',
 playDemoLabel: 'Reproducir flujo',
 stopDemoLabel: 'Detener',
 detailModalBody:
 'La IA registró quién es, el origen, la intención y el valor del deal. Tu equipo recibe aviso cuando el lead está cualificado.',
 detailModalNextExample: 'Enviar enlace de calendario para una llamada de encaje de 20 minutos.',
 closeLabel: 'Cerrar',
 },
 performance: {
 ...aiEmployeeProductDemosEn.performance,
 badge: 'Reputación',
 title: 'Directorios locales,',
 titleHighlight: 'un panel.',
 subtitle:
 'Google, redes y reseñas en una vista, suben estrellas y volumen con la IA.',
 dashboardTitle: 'Pulso de reputación',
 dashboardSubtitle: 'Empleado IA · directorios locales',
 aggregateLabel: 'Nota media',
 reviewsLabel: 'reseñas',
 newReviewToast: 'Nuevo 5★ en Google',
 platformGoogle: 'Google Business',
 platformFacebook: 'Facebook',
 platformInstagram: 'Instagram',
 platformYelp: 'Yelp',
 platformWhatsapp: 'WhatsApp Business',
 platformBing: 'Bing Places',
 },
 tasks: {
 ...aiEmployeeProductDemosEn.tasks,
 badge: 'Social',
 title: 'Planifica una vez.',
 titleHighlight: 'Publica a tiempo.',
 subtitle:
 'Coloca el contenido en el calendario, la IA programa y publica en los canales.',
 moduleTitle: 'Planificador social',
 moduleSubtitle: 'Empleado IA · calendario y auto publicación',
 scheduleBtn: 'Programar',
 newPostBtn: 'Nueva publicación',
 daysShort: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
 hintComposer: 'Escribiendo…',
 hintScheduled: 'En cola de publicación',
 hintPublished: 'Publicado',
 postSampleTitle: 'Promo primavera · reserva esta semana',
 autoPostBanner: 'Auto publicación en canales conectados…',
 },
 contacts: {
 ...aiEmployeeProductDemosEn.contacts,
 badge: 'Directorio',
 title: 'Cada contacto que tocó la IA,',
 titleHighlight: 'buscable y unificado.',
 subtitle:
 'Un registro de nombres, canales y último contacto, sin hojas sueltas.',
 allTab: 'Todos',
 smartList: '+ Segmento',
 advancedFilters: 'Filtros avanzados',
 sortLabel: 'Orden',
 searchPlaceholder: 'Buscar contactos',
 manageFields: 'Campos',
 headers: {
 name: 'Contacto',
 phone: 'Teléfono',
 email: 'Email',
 business: 'Negocio',
 source: 'Origen',
 created: 'Creado',
 activity: 'Última actividad',
 tags: 'Etiquetas',
 },
 pageOf: 'Página {page} de {total}',
 rowsPerPage: 'Filas',
 prev: 'Ant.',
 next: 'Sig.',
 rows: aiEmployeeProductDemosEn.contacts.rows,
 },
}
