"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ConversationMockups from "@/app/components/ConversationMockups";
import ContactDirectoryDemo from "@/app/components/ContactDirectoryDemo";
import LeadPipelineDemo from "@/app/components/LeadPipelineDemo";
import CalendarBookingDemo from "@/app/components/CalendarBookingDemo";
import PerformancePulseDemo from "@/app/components/PerformancePulseDemo";

const TABS = [
  {
    id: "conversations",
    label: "Conversations",
    component: ConversationMockups,
  },
  { id: "contacts", label: "Contacts", component: ContactDirectoryDemo },
  { id: "pipeline", label: "Pipeline", component: LeadPipelineDemo },
  { id: "calendar", label: "Calendar", component: CalendarBookingDemo },
  { id: "growth", label: "Growth", component: PerformancePulseDemo },
];

export default function AiCommandCenterTabs() {
  const [activeTabId, setActiveTabId] = useState(TABS[0].id);

  const ActiveComponent =
    TABS.find((t) => t.id === activeTabId)?.component || TABS[0].component;

  return (
    <section className="relative isolate overflow-hidden bg-surface py-24 sm:py-32 border-b border-[var(--software-border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Inside Your AI Employee Command Center
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted">
            One platform to manage every conversation, contact, and appointment.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
          <div className="flex space-x-2 rounded-xl bg-surface-raised p-1 ring-1 ring-[var(--software-border)]">
            {TABS.map((tab) => {
              const isActive = activeTabId === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`
                    relative rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 outline-none
                    ${isActive ? "text-accent" : "text-muted hover:text-text hover:bg-surface"}
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-[var(--software-canvas)] shadow-sm rounded-lg border border-[var(--software-border)]"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[600px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTabId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="h-full w-full pointer-events-auto">
                {/*
                   We have to wrap the demo components in a div that kills their internal max-widths/margins if they use section tags
                   Alternatively we can just render them. Most of our demo components are self-contained sections.
                   For best visual fit, we might want to tweak the demo components to not have py-24 paddings if they are inside a tab,
                   but rendering them as-is is the first step.
                 */}
                <div className="[&>section]:py-0 [&>section]:bg-transparent [&>section]:border-none">
                  <ActiveComponent />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
