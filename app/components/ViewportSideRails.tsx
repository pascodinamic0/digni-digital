'use client'

import React from 'react'

export default function ViewportSideRails() {
  return (
    <div className="hidden xl:block">
      {/* Left Rail */}
      <div className="fixed left-0 top-0 bottom-0 w-10 border-r border-border/20 flex items-center justify-center z-[40] bg-background/5 select-none pointer-events-none">
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-dark/40 rotate-180 [writing-mode:vertical-lr]">
          Digni Digital Infrastructure // Growth Agency
        </span>
      </div>
      
      {/* Right Rail */}
      <div className="fixed right-0 top-0 bottom-0 w-10 border-l border-border/20 flex items-center justify-center z-[40] bg-background/5 select-none pointer-events-none">
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-dark/40 [writing-mode:vertical-lr]">
          Est. 2026 // Active System Status: OK
        </span>
      </div>
    </div>
  )
}
