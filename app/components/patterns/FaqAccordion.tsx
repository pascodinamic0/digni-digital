'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export type FaqItem = {
  question: string
  answer: string
}

type FaqAccordionProps = {
  items: FaqItem[]
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-border border border-border rounded-lg overflow-hidden">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question} className="bg-background">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="type-body font-semibold text-text">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-4 type-body text-muted leading-relaxed">{item.answer}</div>
            )}
          </div>
        )
      })}
    </div>
  )
}
