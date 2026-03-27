import Link from 'next/link'
import { LearnJoinSteps } from '../join-steps'

type Props = { params: Promise<{ locale: string }> }

export default async function LearnPendingPage({ params }: Props) {
  const { locale } = await params

  return (
    <div>
      <LearnJoinSteps variant="pending" />

      <div className="card-glass rounded-2xl border border-border/80 p-6 text-center md:p-10">
        <span className="section-label">Status</span>
        <h1 className="font-display mt-3 text-2xl font-bold tracking-tight text-text md:text-3xl">
          Access <span className="gradient-text">pending</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
          We don&apos;t see an active enrollment for this account yet. That usually means we haven&apos;t added your email to a course, or you signed in with a different address than the one you gave us at purchase.
        </p>
        <ul className="mx-auto mt-8 max-w-md space-y-3 text-left text-sm text-muted">
          <li className="flex gap-2">
            <span className="text-accent">→</span>
            <span>
              If you <strong className="text-text">just paid</strong>, send your proof (e.g. WhatsApp screenshot) and wait—we&apos;ll enroll you and you&apos;ll get the invite flow described above.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-accent">→</span>
            <span>
              If you <strong className="text-text">already received an invite</strong>, open the login page and use the <strong className="text-text">same email</strong> as in that message.
            </span>
          </li>
        </ul>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href={`/${locale}/learn/login`}
            className="inline-flex min-w-[200px] justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-background shadow-md transition hover:opacity-95"
          >
            Go to sign in
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex min-w-[200px] justify-center rounded-xl border border-border-accent/50 px-6 py-3 text-sm font-semibold text-accent transition hover:bg-accent/10"
          >
            Contact support
          </Link>
        </div>
      </div>
    </div>
  )
}
