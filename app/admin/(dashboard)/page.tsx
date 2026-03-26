import Link from 'next/link'
import { requireAdminWithServiceDb } from '@/lib/auth/admin-data'

const TILES = [
  {
    href: '/admin/applications',
    title: 'Program applications',
    blurb: 'Early Access intake, verify payment, send LMS invites.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
        />
      </svg>
    ),
  },
  {
    href: '/admin/affiliates',
    title: 'Affiliates',
    blurb: 'Partner program signups from the site — export to Excel anytime.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
        />
      </svg>
    ),
  },
  {
    href: '/admin/pipeline',
    title: 'Pipeline',
    blurb: 'Deal stages and movement across your sales board.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
        />
      </svg>
    ),
  },
  {
    href: '/admin/contacts',
    title: 'Contacts',
    blurb: 'Directory of people and companies linked to deals.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
  },
  {
    href: '/admin/chat',
    title: 'Live chat',
    blurb: 'Visitor conversations from the site widget.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a48.109 48.109 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    ),
  },
  {
    href: '/admin/blog',
    title: 'Blog',
    blurb: 'Marketing catalog, DB drafts, agent handoff, social queue.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
] as const

export default async function AdminHomePage() {
  const db = await requireAdminWithServiceDb()
  const [appsRes, affRes, dealsRes, contactsRes, chatRes, postsRes] = await Promise.all([
    db.from('program_applications').select('id', { count: 'exact', head: true }),
    db.from('affiliate_applications').select('id', { count: 'exact', head: true }),
    db.from('deals').select('id', { count: 'exact', head: true }),
    db.from('contacts').select('id', { count: 'exact', head: true }),
    db.from('chat_conversations').select('id', { count: 'exact', head: true }),
    db.from('blog_posts').select('id', { count: 'exact', head: true }),
  ])

  const nApps = appsRes.count ?? 0
  const nAffiliates = affRes.error ? 0 : (affRes.count ?? 0)
  const nDeals = dealsRes.count ?? 0
  const nContacts = contactsRes.count ?? 0
  const nChat = chatRes.count ?? 0
  const nPosts = postsRes.count ?? 0

  const stats = [
    { label: 'Applications', value: nApps, href: '/admin/applications' },
    { label: 'Affiliates', value: nAffiliates, href: '/admin/affiliates' },
    { label: 'Open deals', value: nDeals, href: '/admin/pipeline' },
    { label: 'Contacts', value: nContacts, href: '/admin/contacts' },
    { label: 'Chat threads', value: nChat, href: '/admin/chat' },
    { label: 'DB blog rows', value: nPosts, href: '/admin/blog' },
  ] as const

  return (
    <div>
      <header className="mb-8 md:mb-10">
        <span className="section-label">Workspace</span>
        <h1 className="font-display mb-3 text-4xl font-bold tracking-tight md:text-5xl">
          <span className="gradient-text">Overview</span>
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
          Snapshot of applications, pipeline, conversations, and content—same system as the live site.
        </p>
      </header>

      <ul className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((s) => (
          <li key={s.label}>
            <Link
              href={s.href}
              className="flex flex-col rounded-2xl border border-border-accent/40 bg-surface/80 px-4 py-4 transition-colors hover:border-border-accent hover:bg-surface-light/80"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">{s.label}</span>
              <span className="mt-1 font-display text-3xl font-bold tabular-nums text-accent">{s.value}</span>
            </Link>
          </li>
        ))}
      </ul>

      <ul className="grid gap-5 sm:grid-cols-2">
        {TILES.map(({ href, title, blurb, icon }) => (
          <li key={href}>
            <Link
              href={href}
              className="card-glass group hover-lift flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300 hover:border-border-accent"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border-accent/40 bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                {icon}
              </span>
              <div>
                <h2 className="font-display text-xl font-semibold text-text">{title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{blurb}</p>
              </div>
              <span className="text-sm font-medium text-accent opacity-90 transition-opacity group-hover:opacity-100">
                Open →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
