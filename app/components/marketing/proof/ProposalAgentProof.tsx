'use client'

import { Mic, FileText, Send } from 'lucide-react'

export default function ProposalAgentProof() {
  return (
    <div className="p-4 sm:p-6">
      <div className="rounded-xl border border-border bg-background p-4">
        <div className="mb-4 flex items-center gap-2 text-muted">
          <Mic className="h-4 w-4 text-accent" aria-hidden />
          <span className="type-caption font-semibold uppercase tracking-wider">Voice brief captured</span>
        </div>
        <p className="type-small text-text">
          &ldquo;12-page security audit proposal for a clinic in Nairobi. Include timeline and pricing tiers.&rdquo;
        </p>
        <div className="mt-4 flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2">
          <FileText className="h-4 w-4 shrink-0 text-success" aria-hidden />
          <span className="type-caption text-muted">Proposal draft · 11 sections · Ready to send</span>
          <Send className="ml-auto h-4 w-4 text-accent" aria-hidden />
        </div>
      </div>
    </div>
  )
}
