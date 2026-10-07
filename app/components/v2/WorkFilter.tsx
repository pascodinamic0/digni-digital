'use client'
import { useState } from 'react'

/** Sector filter for the server-rendered case list (children). Filtering is pure CSS via data-f. */
export default function WorkFilter({ label, options, children }: {
  label: string; options: { key: string; label: string; count: number }[]; children: React.ReactNode
}) {
  const [f, setF] = useState('all')
  return (
    <>
      <div className="filters" role="toolbar" aria-label={label}>
        {options.map((o) => (
          <button key={o.key} type="button" aria-pressed={f === o.key} className={f === o.key ? 'on' : ''} onClick={() => setF(o.key)}>
            {o.label}<span>{o.count}</span>
          </button>
        ))}
      </div>
      <div className="cases" data-f={f}>{children}</div>
    </>
  )
}
