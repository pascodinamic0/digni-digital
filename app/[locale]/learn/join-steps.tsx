type Props = { variant?: 'login' | 'pending' }

/**
 * Explains how a new client gets from payment to the portal (invite + same email for magic link).
 */
export function LearnJoinSteps({ variant = 'login' }: Props) {
  return (
    <div className="card-glass mb-10 rounded-2xl border border-border-accent/25 p-6 md:p-8">
      <span className="section-label">Your path into the course</span>
      <h2 className="font-display mt-2 text-xl font-semibold tracking-tight text-text md:text-2xl">
        {variant === 'pending' ? 'No course access yet?' : 'How new clients join'}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Access is invite-only: there isn&apos;t a public catalog. After you join our program, we add you to this learning experience.
      </p>
      <ol className="mt-6 space-y-4 border-t border-border-light/60 pt-6 text-sm leading-relaxed text-muted">
        <li className="flex gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 font-display text-xs font-bold text-accent">
            1
          </span>
          <span>
            <strong className="text-text">Complete payment</strong> — Finish checkout for your program and send any proof we asked for (e.g. WhatsApp screenshot).
          </span>
        </li>
        <li className="flex gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 font-display text-xs font-bold text-accent">
            2
          </span>
          <span>
            <strong className="text-text">We add you in the system</strong> — Our team enrolls your email in the program. New accounts receive a{' '}
            <strong className="text-text">secure invite email</strong> to set a password. If you already have an account, you’re enrolled without a duplicate invite.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 font-display text-xs font-bold text-accent">
            3
          </span>
          <span>
            <strong className="text-text">Sign in with the same email</strong> — Use the email we have on file. Request a magic link below, or sign in with the password you set from the invite.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 font-display text-xs font-bold text-accent">
            4
          </span>
          <span>
            <strong className="text-text">Open your training</strong> — After sign-in you’ll see your syllabus, lessons, videos, and assignments.
          </span>
        </li>
      </ol>
    </div>
  )
}
