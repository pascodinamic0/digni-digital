'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { getBookingLinkProps } from '@/app/config/cta.config'
import { computeMatchPercent, getResultBand } from '@/lib/assessments/score'
import type { AssessmentAccent, ServiceAssessmentConfig } from '@/lib/assessments/types'

type Step = 'intro' | 'question' | 'result'

const accentClasses: Record<
  AssessmentAccent,
  {
    ring: string
    bar: string
    badge: string
    glow: string
    bullet: string
    choiceSelected: string
    choiceIdle: string
  }
> = {
  accent: {
    ring: 'stroke-accent',
    bar: 'bg-accent',
    badge: 'border-accent/50 bg-accent/15 text-accent',
    glow: 'shadow-[0_0_60px_-12px_rgba(var(--accent-rgb),0.45)]',
    bullet: 'bg-accent text-background',
    choiceSelected: 'border-accent bg-accent/15 text-text shadow-sm',
    choiceIdle: 'border-border bg-surface-light/80 text-text hover:border-accent/40',
  },
  success: {
    ring: 'stroke-success',
    bar: 'bg-success',
    badge: 'border-success/50 bg-success/15 text-success',
    glow: 'shadow-[0_0_60px_-12px_rgba(34,197,94,0.35)]',
    bullet: 'bg-success text-background',
    choiceSelected: 'border-success bg-success/15 text-text shadow-sm',
    choiceIdle: 'border-border bg-surface-light/80 text-text hover:border-success/40',
  },
  info: {
    ring: 'stroke-info',
    bar: 'bg-info',
    badge: 'border-info/50 bg-info/15 text-info',
    glow: 'shadow-[0_0_60px_-12px_rgba(59,130,246,0.35)]',
    bullet: 'bg-info text-background',
    choiceSelected: 'border-info bg-info/15 text-text shadow-sm',
    choiceIdle: 'border-border bg-surface-light/80 text-text hover:border-info/40',
  },
}

function MatchRing({ percent, accent }: { percent: number; accent: AssessmentAccent }) {
  const { ring } = accentClasses[accent]
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percent / 100) * circumference

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="relative mx-auto h-40 w-40"
      role="img"
      aria-label={`${percent} percent match`}
    >
      <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          className="stroke-border"
          strokeWidth="8"
        />
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          className={ring}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
        />
      </svg>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <span className="font-display text-4xl font-bold text-text">{percent}%</span>
      </motion.div>
    </motion.div>
  )
}

export function ServiceAssessment({ config }: { config: ServiceAssessmentConfig }) {
  const { copy, questions, accent, servicePath, serviceName, customResult } = config
  const styles = accentClasses[accent]
  const booking = getBookingLinkProps()

  const [step, setStep] = useState<Step>('intro')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [error, setError] = useState<string | null>(null)

  const currentQuestion = questions[questionIndex]
  const progress =
    step === 'intro' ? 0 : step === 'result' ? 100 : ((questionIndex + 1) / questions.length) * 100

  const matchPercent = useMemo(
    () => (step === 'result' ? computeMatchPercent(questions, answers) : 0),
    [step, questions, answers],
  )

  const resultBand = useMemo(
    () => (step === 'result' ? getResultBand(copy.bands, matchPercent) : null),
    [step, copy.bands, matchPercent],
  )

  const badgeLabel =
    step === 'result' && customResult ? copy.resultEyebrow : copy.eyebrow

  const selectChoice = (questionId: string, choiceId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: choiceId }))
    setError(null)
  }

  const goNext = () => {
    if (!currentQuestion) return
    if (!answers[currentQuestion.id]) {
      setError(copy.answerAll)
      return
    }
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((i) => i + 1)
    } else {
      setStep('result')
    }
  }

  const goBack = () => {
    setError(null)
    if (step === 'result') {
      setStep('question')
      setQuestionIndex(questions.length - 1)
      return
    }
    if (questionIndex > 0) {
      setQuestionIndex((i) => i - 1)
    } else {
      setStep('intro')
    }
  }

  const retake = () => {
    setAnswers({})
    setQuestionIndex(0)
    setStep('intro')
    setError(null)
  }

  return (
    <main className="relative isolate flex min-h-[100dvh] items-center justify-center bg-gradient-mesh px-4 py-24 sm:px-6 sm:py-28">
      <div
        className="pointer-events-none fixed left-0 top-0 z-50 h-1 w-full bg-border/50"
        aria-hidden
      >
        <motion.div
          className={`h-full ${styles.bar}`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.35 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-lg"
      >
        <div className="card-glass w-full rounded-2xl border-2 border-border-light bg-surface/95 p-6 shadow-lg sm:p-8">
          <span
            className={`inline-flex w-fit items-center rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${styles.badge}`}
          >
            {badgeLabel}
          </span>

          <AnimatePresence mode="wait">
            {step === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                className="mt-6"
              >
                <h1 className="font-display text-2xl font-bold leading-tight text-text sm:text-3xl">
                  {copy.introTitle}
                </h1>
                <p className="mt-4 text-base leading-relaxed text-text/90 sm:text-lg">
                  {copy.introSubtitle}
                </p>
                <ul className="mt-6 space-y-3">
                  {copy.introBullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm sm:text-base text-text/85">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${styles.bullet}`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                      </span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
                <motion.div
                  className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <button
                    type="button"
                    onClick={() => setStep('question')}
                    className="btn-primary w-full px-6 py-3 sm:w-auto"
                  >
                    {copy.startCta}
                  </button>
                  <Link
                    href={servicePath}
                    className="btn-secondary w-full text-center px-6 py-3.5 sm:w-auto"
                  >
                    {copy.backToService}
                  </Link>
                </motion.div>
              </motion.div>
            )}

            {step === 'question' && currentQuestion && (
              <motion.div
                key={`q-${currentQuestion.id}`}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                className="mt-6"
              >
                <p className="text-sm font-medium text-text/70">
                  {copy.progressLabel}{' '}
                  <span className="text-text">
                    {questionIndex + 1} / {questions.length}
                  </span>
                </p>
                <h2 className="font-display mt-3 text-xl font-semibold leading-snug text-text sm:text-2xl">
                  {currentQuestion.prompt}
                </h2>

                <fieldset className="mt-6 space-y-3">
                  <legend className="sr-only">{currentQuestion.prompt}</legend>
                  {currentQuestion.choices.map((choice) => {
                    const selected = answers[currentQuestion.id] === choice.id
                    return (
                      <label
                        key={choice.id}
                        className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 px-4 py-3.5 text-sm transition-colors sm:text-base ${
                          selected ? styles.choiceSelected : styles.choiceIdle
                        }`}
                      >
                        <input
                          type="radio"
                          name={currentQuestion.id}
                          className="mt-1 accent-[var(--accent)]"
                          checked={selected}
                          onChange={() => selectChoice(currentQuestion.id, choice.id)}
                        />
                        <span className="leading-relaxed">{choice.label}</span>
                      </label>
                    )
                  })}
                </fieldset>

                {error && (
                  <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-400">
                    {error}
                  </p>
                )}

                <motion.div className="mt-8 flex flex-wrap gap-3">
                  <button type="button" onClick={goBack} className="btn-secondary px-6 py-2.5">
                    {copy.back}
                  </button>
                  <button type="button" onClick={goNext} className="btn-primary px-8 py-2.5">
                    {questionIndex < questions.length - 1 ? copy.next : copy.finish}
                  </button>
                </motion.div>
              </motion.div>
            )}

            {step === 'result' && (customResult || resultBand) && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6"
              >
                {customResult && resultBand ? (
                  <>
                    <h2 className="font-display mt-3 text-xl font-bold leading-snug text-text sm:text-2xl">
                      {customResult.headline}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-text/90 sm:text-lg">
                      {customResult.body}
                    </p>

                    <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-text/70">
                      <span className="gradient-text">{matchPercent}%</span> {copy.resultTitle}
                    </p>

                    <div
                      className={`mt-4 rounded-xl border-2 border-border-light bg-background/60 p-6 text-center sm:p-8 ${styles.glow}`}
                    >
                      <p className="text-xs font-semibold uppercase tracking-wider text-text/70">
                        {copy.matchLabel}
                      </p>
                      <MatchRing percent={matchPercent} accent={accent} />
                      <p className="mt-4 text-lg font-semibold text-text">{resultBand.label}</p>
                      <p className="mt-3 text-sm leading-relaxed text-text/85 sm:text-base">
                        {resultBand.description}
                      </p>
                    </div>

                    <div
                      className={`mt-8 rounded-xl border-2 border-border-light bg-background/60 p-5 sm:p-6 ${styles.glow}`}
                    >
                      <p className="text-sm leading-relaxed text-text/85 sm:text-base">
                        {customResult.ctaIntro}
                      </p>
                      <motion.div
                        className="mt-5"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                      >
                        <a {...booking} className="btn-primary w-full py-3 text-center">
                          {customResult.primaryCta}
                        </a>
                      </motion.div>
                      <p className="mt-5 rounded-lg border border-destructive/25 bg-background/50 px-3 py-2.5 text-sm font-medium leading-relaxed text-destructive">
                        <span className="font-semibold">Warning:</span> {customResult.warning}
                      </p>
                    </div>
                  </>
                ) : (
                  resultBand && (
                    <>
                      <p className="text-sm font-semibold uppercase tracking-wide text-text/70">
                        {copy.resultEyebrow}
                      </p>
                      <h2 className="font-display mt-2 text-xl font-bold leading-snug text-text sm:text-2xl">
                        <span className="gradient-text">{matchPercent}%</span> {copy.resultTitle}
                      </h2>

                      <div
                        className={`mt-8 rounded-xl border-2 border-border-light bg-background/60 p-6 text-center sm:p-8 ${styles.glow}`}
                      >
                        <p className="text-xs font-semibold uppercase tracking-wider text-text/70">
                          {copy.matchLabel}
                        </p>
                        <MatchRing percent={matchPercent} accent={accent} />
                        <p className="mt-4 text-lg font-semibold text-text">{resultBand.label}</p>
                        <p className="mt-3 text-sm leading-relaxed text-text/85 sm:text-base">
                          {resultBand.description}
                        </p>
                      </div>

                      <div className="mt-8 rounded-xl border border-border bg-surface-light/50 p-5 sm:p-6">
                        <p className="text-sm font-semibold text-text">{copy.nextStepsTitle}</p>
                        <p className="mt-1 text-sm text-text/80">
                          {serviceName} — based on your answers, here is what we recommend.
                        </p>
                        <motion.div
                          className="mt-5 flex flex-col gap-3"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <a {...booking} className="btn-primary w-full py-3 text-center">
                            {copy.primaryCta}
                          </a>
                          <Link href={servicePath} className="btn-secondary w-full py-3 text-center">
                            {copy.secondaryCta}
                          </Link>
                        </motion.div>
                      </div>
                    </>
                  )
                )}

                <div className="mt-8 flex flex-wrap gap-4 text-sm">
                  <button
                    type="button"
                    onClick={retake}
                    className="font-medium text-accent hover:text-accent-light underline-offset-4 hover:underline"
                  >
                    {copy.retake}
                  </button>
                  <Link
                    href={servicePath}
                    className="text-text/70 hover:text-text underline-offset-4 hover:underline"
                  >
                    {copy.backToService}
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </main>
  )
}
