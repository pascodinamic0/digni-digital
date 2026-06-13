'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo, useEffect } from 'react'
import { useLanguage } from '@/app/context/LocaleContext'
import { getJourneyPhaseTitle } from '@/lib/ai-receptionist-flow'
import SoftwareDemoSection from '@/app/components/software/SoftwareDemoSection'
import { translations } from '@/app/config/translations'
import type { ContactRowT } from '@/app/i18n/aiEmployeeProductDemos'
import DemoPersonAvatar from '@/app/components/DemoPersonAvatar'
import { getContactRowAvatarSrc } from '@/lib/demo-contact-avatars'

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
  const [incomingTick, setIncomingTick] = useState(0)
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
  const highlightedRowId = slice[0]?.id

  useEffect(() => {
    const incomingInterval = setInterval(() => {
      setIncomingTick((prev) => prev + 1)
    }, 3400)

    return () => clearInterval(incomingInterval)
  }, [])

  const sw =
    translations[language].aiEmployeeSoftware ?? translations.en.aiEmployeeSoftware

  return (
    <SoftwareDemoSection
      step={3}
      journeyPhase={getJourneyPhaseTitle(language, 3)}
      badge={t.badge}
      title={t.title}
      titleHighlight={t.titleHighlight}
      subtitle={t.subtitle}
      titleId="contact-directory-title"
      titleLayout="inline"
      activeNav="contacts"
      moduleTitle={sw.nav.contacts}
      className={isRtl ? '[direction:rtl]' : ''}
    >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative"
        >
          <div className="relative space-y-4 border-b border-[var(--software-border)] p-4 md:p-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={incomingTick}
                initial={{ opacity: 0, y: -12, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.94 }}
                transition={{ duration: 0.32 }}
                className="absolute top-4 right-4 flex items-center gap-2.5 rounded-full border border-success/40 bg-gradient-to-r from-success/20 to-success/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wide text-success shadow-lg shadow-success/10"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/70 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
                </span>
                +1 new
              </motion.div>
            </AnimatePresence>
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
            <table className="w-full min-w-[680px] text-left text-sm">
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
                  <th className="hidden px-4 py-3 font-semibold lg:table-cell">{t.headers.activity}</th>
                  <th className="hidden px-4 py-3 font-semibold xl:table-cell">{t.headers.tags}</th>
                </tr>
              </thead>
              <tbody>
                {slice.map((row) => (
                  <motion.tr
                    key={row.id}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      x: row.id === highlightedRowId && incomingTick % 2 === 1 ? [0, 8, 0] : 0,
                      backgroundColor:
                        row.id === highlightedRowId && incomingTick % 2 === 1
                          ? 'rgba(45, 212, 191, 0.14)'
                          : 'rgba(0, 0, 0, 0)',
                    }}
                    transition={{ duration: 0.45 }}
                    className="border-b border-border/70 hover:bg-success/[0.04] transition-colors"
                  >
                    <td className="py-3 px-4">
                      <input type="checkbox" className="rounded border-border" aria-label={`Select ${row.name}`} readOnly />
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <DemoPersonAvatar
                          name={row.name}
                          src={getContactRowAvatarSrc(row.id)}
                          size="sm"
                        />
                        <span className="font-medium text-text inline-flex items-center gap-2">
                          {row.name}
                          {row.id === highlightedRowId && incomingTick % 2 === 1 ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-success/40 bg-success/15 px-2 py-0.5 text-[10px] font-semibold text-success">
                              <span className="inline-flex h-2 w-2 rounded-full bg-success animate-pulse" aria-hidden />
                              Live
                            </span>
                          ) : null}
                        </span>
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
                    <td className="whitespace-nowrap px-4 py-3 text-xs text-muted">{row.created}</td>
                    <td className="hidden px-4 py-3 text-xs text-muted lg:table-cell">{row.lastActivity}</td>
                    <td className="hidden px-4 py-3 xl:table-cell">
                      {row.tag ? (
                        <span className="text-xs px-2 py-0.5 rounded-full border border-border bg-surface/50">{row.tag}</span>
                      ) : (
                        <span className="text-muted/40" aria-hidden>
                          ·
                        </span>
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
    </SoftwareDemoSection>
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
