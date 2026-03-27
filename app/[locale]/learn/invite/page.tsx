import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createAdminClient } from '@/lib/supabase/admin'
import { enrollUserFromInvite } from '@/lib/lms/invite-enrollment'
import { findAuthUserByEmail } from '@/lib/lms/find-user-by-email'
import { hashInviteToken } from '@/lib/lms/invite-token'

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ token?: string }>
}

function Card({
  title,
  body,
  locale,
}: {
  title: string
  body: React.ReactNode
  locale: string
}) {
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-border-light/80 bg-surface/80 p-8">
      <h1 className="font-display text-xl font-semibold text-text">{title}</h1>
      <div className="mt-4 text-sm leading-relaxed text-muted">{body}</div>
      <Link
        href={`/${locale}/learn/login`}
        className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
      >
        Go to sign in
      </Link>
    </div>
  )
}

export default async function LearnInvitePage({ params, searchParams }: Props) {
  const { locale } = await params
  const { token } = await searchParams
  const raw = token?.trim()

  if (!raw) {
    return (
      <Card
        locale={locale}
        title="Missing invitation token"
        body="This link is incomplete. Open the invitation from your email, or contact support if you need help."
      />
    )
  }

  const admin = createAdminClient()
  const hash = hashInviteToken(raw)
  const { data: inv } = await admin
    .from('lms_invites')
    .select('id, email, course_id, expires_at, used_at, revoked_at')
    .eq('token_hash', hash)
    .maybeSingle()

  if (!inv) {
    return (
      <Card
        locale={locale}
        title="Invalid invitation"
        body="We couldn’t verify this link. It may have been mistyped, replaced by a newer invite, or already used."
      />
    )
  }

  if (inv.revoked_at) {
    return <Card locale={locale} title="Invite revoked" body="This invitation is no longer valid. Please contact your program administrator." />
  }

  if (inv.used_at) {
    redirect(`/${locale}/learn/login?invite=used`)
  }

  if (new Date(inv.expires_at) < new Date()) {
    return (
      <Card
        locale={locale}
        title="Invite expired"
        body="This link has expired. Ask your administrator to send a new invitation."
      />
    )
  }

  const existing = await findAuthUserByEmail(admin, inv.email)
  if (existing) {
    const r = await enrollUserFromInvite(
      admin,
      { id: inv.id, email: inv.email, course_id: inv.course_id },
      existing.id,
      existing.email ?? undefined
    )
    if (!r.ok) {
      return <Card locale={locale} title="Could not enroll" body={r.error} />
    }
    redirect(`/${locale}/learn/login?invite=accepted`)
  }

  const site = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '')
  const redirectTo = `${site}/auth/callback?invite_id=${encodeURIComponent(inv.id)}&next=${encodeURIComponent(`/${locale}/learn/welcome`)}`

  const { data: gen, error: gErr } = await admin.auth.admin.generateLink({
    type: 'invite',
    email: inv.email,
    options: { redirectTo },
  })

  const actionLink =
    gen && typeof gen === 'object' && 'properties' in gen && gen.properties && typeof gen.properties === 'object'
      ? (gen.properties as { action_link?: string }).action_link
      : undefined

  if (gErr || !actionLink) {
    return (
      <Card
        locale={locale}
        title="Could not start account setup"
        body={gErr?.message ?? 'No signup link was returned. Try again or contact support.'}
      />
    )
  }

  redirect(actionLink)
}
