'use client'

import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { useLanguage } from '@/app/context/LocaleContext'
import { translations } from '@/app/config/translations'
import type { ContactRowT } from '@/app/i18n/aiEmployeeProductDemos'

function initials(name: string) {
  const p = name.split(/\s+/).filter(Boolean)
  if (p.length >= 2) return (p[0][0] + p[1][0]).toUpperCase()
  return name.slice(0, 2).toUpperCase()
}

const AVATAR_PALETTES = [
  'bg-orange-500/20 text-orange-700 dark:text-orange-300',
  'bg-teal-500/20 text-teal-700 dark:text-teal-300',
  'bg-pink-500/20 text-pink-700 dark:text-pink-300',
  'bg-violet-500/20 text-violet-700 dark:text-violet-300',
  'bg-blue-500/20 text-blue-700 dark:text-blue-300',
]

function avatarClass(name: string) {
  let h = 0
  for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h)
  return AVATAR_PALETTES[Math.abs(h) % AVATAR_PALETTES.length]
}

type SortKey = 'name' | 'created' | null
type SortDir = 'asc' | 'desc'

export default function ContactDirectoryDemo() {
  const language = useLanguage()
  const t = translations[language].aiEmployeeProductDemos.contacts
  const isRtl = language === 'ar'

  const [query, setQuery] = useState('')
  const [sortKey, setSortKey] = useState<SortKey>(null)
  const [sortDir, setSortDir] = useState<SortDir>('asc')
  const [page, setPage] = useState(1)
  const pageSize = 5

  const rows = t.rows

  const sortedFiltered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list: ContactRowT[] = [...rows]
    if (q) {
      list = list.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.email.toLowerCase().includes(q) ||
          r.business.toLowerCase().includes(q) ||
          r.source.toLowerCase().includes(q) ||
          r.phone.replace(/\s/g, '').includes(q)
      )
    }
    if (sortKey === 'name') {
      list.sort((a, b) => {
        const cmp = a.name.localeCompare(b.name, language)
        return sortDir === 'asc' ? cmp : -cmp
      })
    } else if (sortKey === 'created') {
      list.sort((a, b) => {
        const ta = Date.parse(a.created)
        const tb = Date.parse(b.created)
        if (!Number.isNaN(ta) && !Number.isNaN(tb)) {
          const cmp = ta - tb
          return sortDir === 'asc' ? cmp : -cmp
        }
        const cmp = a.id.localeCompare(b.id)
        return sortDir === 'asc' ? cmp : -cmp
      })
    }
    return list
  }, [rows, query, sortKey, sortDir, language])

  const totalPages = Math.max(1, Math.ceil(sortedFiltered.length / pageSize))
  const pageSafe = Math.min(page, totalPages)
  const slice = sortedFiltered.slice((pageSafe - 1) * pageSize, pageSafe * pageSize)

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
    setPage(1)
  }

  const pageLabel = t.pageOf.replace('{page}', String(pageSafe)).replace('{total}', String(totalPages))

  return (
    <section className="py-24 bg-surface" aria-labelledby="contact-directory-title" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-success/10 border border-success/20 rounded-full text-success text-xs font-semibold uppercase tracking-wide mb-4"
          >
            {t.badge}
          </motion.span>
          <motion.h2
            id="contact-directory-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6"
          >
            {t.title} <span className="gradient-text-brand">{t.titleHighlight}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted text-base sm:text-lg max-w-3xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border-light backdrop-blur-xl bg-gradient-to-br from-surface-light/80 via-surface/90 to-surface-light/80 shadow-demo-card max-w-6xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-success/5 via-transparent to-success/[0.08] pointer-events-none" />

          <div className="relative bg-surface-light/50 backdrop-blur-sm border-b border-border p-4 md:p-6 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs px-3 py-1.5 rounded-full bg-success/10 text-success border border-success/20 font-medium">
                {t.allTab}
              </span>
              <button type="button" className="text-xs px-3 py-1.5 rounded-full border border-dashed border-border text-muted">
                {t.smartList}
              </button>
            </div>
            <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-2">
                <button type="button" className="text-xs px-3 py-2 rounded-lg border border-border bg-surface/40 hover:bg-surface-light/60">
                  {t.advancedFilters}
                </button>
                <button type="button" className="text-xs px-3 py-2 rounded-lg border border-border bg-surface/40 hover:bg-surface-light/60">
                  {t.sortLabel}
                </button>
              </div>
              <div className="flex flex-1 flex-col sm:flex-row gap-3 sm:items-center sm:justify-end min-w-0">
                <div className="flex items-center gap-2 rounded-xl border border-border bg-surface/40 px-3 py-2 flex-1 max-w-md">
                  <svg className="w-4 h-4 text-muted flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8" strokeWidth="2" />
                    <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value)
                      setPage(1)
                    }}
                    placeholder={t.searchPlaceholder}
                    className="bg-transparent border-none outline-none flex-1 text-sm text-text placeholder:text-muted"
                    aria-label={t.searchPlaceholder}
                  />
                </div>
                <button
                  type="button"
                  className="text-xs px-3 py-2 rounded-lg border border-border whitespace-nowrap hover:bg-surface-light/60"
                >
                  {t.manageFields}
                </button>
              </div>
            </div>
          </div>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left min-w-[880px]">
              <thead>
                <tr className="border-b border-border bg-surface-light/30 text-xs text-muted uppercase tracking-wide">
                  <th className="py-3 px-4 w-10">
                    <span className="sr-only">Select</span>
                    <input type="checkbox" className="rounded border-border" aria-label="Select all" readOnly />
                  </th>
                  <th className="py-3 px-4">
                    <button
                      type="button"
                      onClick={() => toggleSort('name')}
                      className="inline-flex items-center gap-1 font-semibold hover:text-success"
                    >
                      {t.headers.name}
                      <SortArrows active={sortKey === 'name'} dir={sortDir} />
                    </button>
                  </th>
                  <th className="py-3 px-4 font-semibold">{t.headers.phone}</th>
                  <th className="py-3 px-4 font-semibold">{t.headers.email}</th>
                  <th className="py-3 px-4 font-semibold">{t.headers.business}</th>
                  <th className="py-3 px-4 font-semibold">{t.headers.source}</th>
                  <th className="py-3 px-4">
                    <button
                      type="button"
                      onClick={() => toggleSort('created')}
                      className="inline-flex items-center gap-1 font-semibold hover:text-success"
                    >
                      {t.headers.created}
                      <SortArrows active={sortKey === 'created'} dir={sortDir} />
                    </button>
                  </th>
                  <th className="py-3 px-4 font-semibold">{t.headers.activity}</th>
                  <th className="py-3 px-4 font-semibold">{t.headers.tags}</th>
                </tr>
              </thead>
              <tbody>
                {slice.map((row) => (
                  <motion.tr
                    key={row.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border-b border-border/70 hover:bg-success/[0.04] transition-colors"
                  >
                    <td className="py-3 px-4">
                      <input type="checkbox" className="rounded border-border" aria-label={`Select ${row.name}`} readOnly />
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${avatarClass(row.name)}`}
                        >
                          {initials(row.name)}
                        </div>
                        <span className="font-medium text-text">{row.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-muted whitespace-nowrap">
                      <span className="inline-flex items-center gap-1">
                        <span aria-hidden>📞</span>
                        {row.phone}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-muted">
                      <span className="inline-flex items-center gap-1">
                        <span aria-hidden>✉️</span>
                        {row.email}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-text">{row.business}</td>
                    <td className="py-3 px-4 text-muted text-xs max-w-[140px]">
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-border/80 bg-surface/60 px-2 py-1">
                        {row.source}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-muted whitespace-nowrap text-xs">{row.created}</td>
                    <td className="py-3 px-4 text-muted text-xs">{row.lastActivity}</td>
                    <td className="py-3 px-4">
                      {row.tag ? (
                        <span className="text-xs px-2 py-0.5 rounded-full border border-border bg-surface/50">{row.tag}</span>
                      ) : (
                        <span className="text-muted">—</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-4 border-t border-border bg-surface-light/20">
            <p className="text-xs text-muted">{pageLabel}</p>
            <div className="flex items-center gap-3">
              <label className="text-xs text-muted flex items-center gap-2">
                {t.rowsPerPage}
                <select
                  className="rounded-lg border border-border bg-surface px-2 py-1 text-xs"
                  value={pageSize}
                  disabled
                  aria-readonly
                >
                  <option value={5}>5</option>
                </select>
              </label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={pageSafe <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="text-xs px-3 py-1.5 rounded-lg border border-border disabled:opacity-40 hover:bg-surface-light/60"
                >
                  {t.prev}
                </button>
                <span className="text-xs font-mono px-2 py-1 rounded-md border border-border bg-surface/50">{pageSafe}</span>
                <button
                  type="button"
                  disabled={pageSafe >= totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="text-xs px-3 py-1.5 rounded-lg border border-border disabled:opacity-40 hover:bg-surface-light/60"
                >
                  {t.next}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SortArrows({ active, dir }: { active: boolean; dir: SortDir }) {
  return (
    <span className={`inline-flex flex-col text-[8px] leading-none ${active ? 'text-success' : 'opacity-40'}`} aria-hidden>
      <span className={active && dir === 'asc' ? 'text-success' : ''}>▲</span>
      <span className={active && dir === 'desc' ? 'text-success' : ''}>▼</span>
    </span>
  )
}
