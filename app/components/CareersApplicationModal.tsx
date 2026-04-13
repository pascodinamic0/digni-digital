'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CAREER_MAX_FILE_BYTES,
  CAREER_MAX_TOTAL_BYTES,
  CAREER_ROLE_LABEL,
  CV_ACCEPT,
  type CareerRoleId,
} from '@/lib/careers-apply-limits'

const PORTFOLIO_ACCEPT =
  '.pdf,.doc,.docx,.png,.jpg,.jpeg,.webp,.zip,application/pdf,image/png,image/jpeg,image/webp,application/zip'

type PresetRole = 'va' | 'designer'

interface CareersApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  /** Set from a job card; omit for footer CTA so the applicant picks a track */
  presetRole?: PresetRole
}

function formatMaxMb(): string {
  return String(Math.floor(CAREER_MAX_FILE_BYTES / (1024 * 1024)))
}

export default function CareersApplicationModal({
  isOpen,
  onClose,
  presetRole,
}: CareersApplicationModalProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [role, setRole] = useState<CareerRoleId>('general')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [timezone, setTimezone] = useState('')
  const [portfolioLink, setPortfolioLink] = useState('')
  const [intro, setIntro] = useState('')
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [portfolioFile, setPortfolioFile] = useState<File | null>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setRole(presetRole ?? 'general')
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, presetRole])

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) {
      setStatus('idle')
      setErrorMsg(null)
      setFullName('')
      setEmail('')
      setPhone('')
      setTimezone('')
      setPortfolioLink('')
      setIntro('')
      setCvFile(null)
      setPortfolioFile(null)
    }
  }, [isOpen])

  const validateFiles = (): string | null => {
    if (!cvFile) return 'Please attach your CV.'
    if (cvFile.size > CAREER_MAX_FILE_BYTES) {
      return `CV must be ${formatMaxMb()}MB or smaller.`
    }
    if (portfolioFile && portfolioFile.size > CAREER_MAX_FILE_BYTES) {
      return `Portfolio file must be ${formatMaxMb()}MB or smaller.`
    }
    const total = cvFile.size + (portfolioFile?.size ?? 0)
    if (total > CAREER_MAX_TOTAL_BYTES) {
      return 'Total upload size is too large. Use smaller files or only the portfolio link.'
    }
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'submitting') return

    const fileErr = validateFiles()
    if (fileErr) {
      setErrorMsg(fileErr)
      setStatus('error')
      return
    }

    setStatus('submitting')
    setErrorMsg(null)

    const resolvedRole: CareerRoleId = presetRole ?? role

    const fd = new FormData()
    fd.set('role', resolvedRole)
    fd.set('fullName', fullName.trim())
    fd.set('email', email.trim())
    fd.set('phone', phone.trim())
    fd.set('timezone', timezone.trim())
    fd.set('portfolioLink', portfolioLink.trim())
    fd.set('intro', intro.trim())
    if (cvFile) fd.set('cv', cvFile)
    if (portfolioFile && portfolioFile.size > 0) fd.set('portfolio', portfolioFile)

    try {
      const res = await fetch('/api/careers/apply', {
        method: 'POST',
        body: fd,
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus('error')
        setErrorMsg(typeof data.error === 'string' ? data.error : 'Something went wrong. Please try again.')
        return
      }
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[image:var(--overlay-scrim)] backdrop-blur-sm bg-cover"
            aria-hidden
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-surface border border-border rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="careers-apply-title"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="min-w-0 flex-1">
                  <h2 id="careers-apply-title" className="font-display text-xl sm:text-2xl font-bold text-text">
                    Apply at Digni Digital
                  </h2>
                  {presetRole && (
                    <p className="text-sm text-accent mt-1 font-medium">{CAREER_ROLE_LABEL[presetRole]}</p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="shrink-0 w-10 h-10 rounded-full border border-border hover:border-accent hover:text-accent flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {status === 'success' ? (
                <div className="py-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-text mb-2">Application sent</h3>
                  <p className="text-muted text-sm mb-6">
                    Thank you. We will review your application and get back to you by email.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full px-6 py-2.5 rounded-lg bg-accent text-white font-medium hover:opacity-90 transition-opacity"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {!presetRole && (
                    <div>
                      <label htmlFor="apply-role" className="block text-sm font-medium text-text mb-1">
                        Position
                      </label>
                      <select
                        id="apply-role"
                        value={role}
                        onChange={(e) => setRole(e.target.value as CareerRoleId)}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-text text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                      >
                        <option value="va">{CAREER_ROLE_LABEL.va}</option>
                        <option value="designer">{CAREER_ROLE_LABEL.designer}</option>
                        <option value="general">{CAREER_ROLE_LABEL.general}</option>
                      </select>
                    </div>
                  )}

                  <div>
                    <label htmlFor="apply-name" className="block text-sm font-medium text-text mb-1">
                      Full name *
                    </label>
                    <input
                      id="apply-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-text text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="apply-email" className="block text-sm font-medium text-text mb-1">
                      Email *
                    </label>
                    <input
                      id="apply-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-text text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="apply-phone" className="block text-sm font-medium text-text mb-1">
                      Phone
                    </label>
                    <input
                      id="apply-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-text text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="apply-tz" className="block text-sm font-medium text-text mb-1">
                      Country or timezone
                    </label>
                    <input
                      id="apply-tz"
                      type="text"
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                      placeholder="e.g. Kenya, EAT"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-text text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="apply-intro" className="block text-sm font-medium text-text mb-1">
                      Why you&apos;re a fit *
                    </label>
                    <textarea
                      id="apply-intro"
                      required
                      rows={4}
                      value={intro}
                      onChange={(e) => setIntro(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-text text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-y min-h-[100px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="apply-portfolio-link" className="block text-sm font-medium text-text mb-1">
                      Portfolio or work link
                    </label>
                    <input
                      id="apply-portfolio-link"
                      type="url"
                      value={portfolioLink}
                      onChange={(e) => setPortfolioLink(e.target.value)}
                      placeholder="https://"
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-text text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="apply-cv" className="block text-sm font-medium text-text mb-1">
                      CV * (PDF or Word, max {formatMaxMb()}MB)
                    </label>
                    <input
                      id="apply-cv"
                      type="file"
                      required
                      accept={CV_ACCEPT}
                      onChange={(e) => setCvFile(e.target.files?.[0] ?? null)}
                      className="w-full text-sm text-muted file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border file:border-border file:bg-background file:text-text"
                    />
                  </div>

                  <div>
                    <label htmlFor="apply-portfolio-file" className="block text-sm font-medium text-text mb-1">
                      Portfolio or recent work (file, optional)
                    </label>
                    <input
                      id="apply-portfolio-file"
                      type="file"
                      accept={PORTFOLIO_ACCEPT}
                      onChange={(e) => setPortfolioFile(e.target.files?.[0] ?? null)}
                      className="w-full text-sm text-muted file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border file:border-border file:bg-background file:text-text"
                    />
                    <p className="text-xs text-muted mt-1">PDF, images, Word, or ZIP, max {formatMaxMb()}MB each.</p>
                  </div>

                  {status === 'error' && errorMsg && (
                    <p className="text-sm text-red-500 dark:text-red-400" role="alert">
                      {errorMsg}
                    </p>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 px-6 py-2.5 rounded-lg border border-border hover:border-accent hover:text-accent text-sm font-medium transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="flex-1 px-6 py-2.5 rounded-lg bg-accent text-white font-medium text-sm hover:opacity-90 disabled:opacity-60 transition-opacity"
                    >
                      {status === 'submitting' ? 'Sending…' : 'Submit application'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
