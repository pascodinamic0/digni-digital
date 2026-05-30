'use client'

import { Link } from '@/i18n/navigation'
import { getAiCareerFutureReadySkills } from '@/lib/ai-career-jobs'

type Props = {
  title: string
  subtitle: string
  guideLabel: string
}

export function AiCareerPathsGrid({ title, subtitle, guideLabel }: Props) {
  const careers = getAiCareerFutureReadySkills()

  return (
    <section id="ai-career-paths" className="py-12 sm:py-16 border-t border-border-light/60">
      <div className="text-center mb-8 sm:mb-10">
        <p className="text-xs uppercase tracking-widest text-success font-semibold mb-2">
          {careers.length} paths · guides included
        </p>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-text mb-3">{title}</h3>
        <p className="text-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        <Link
          href="/blog"
          className="inline-block mt-4 text-sm font-medium text-success hover:underline"
        >
          View all career guides on the blog →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 max-h-[min(70vh,720px)] overflow-y-auto pr-1 scrollbar-thin">
        {careers.map((job) => (
          <Link
            key={job.blogSlug ?? job.skill}
            href={job.blogSlug ? `/blog/${job.blogSlug}` : '/blog'}
            className="group card p-4 hover:border-success/40 transition-colors"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0" aria-hidden>
                {job.icon}
              </span>
              <div className="min-w-0">
                <h4 className="font-display text-sm font-bold text-text group-hover:text-success transition-colors leading-snug">
                  {job.skill}
                </h4>
                <p className="text-success text-xs font-semibold mt-1">{job.earning}</p>
                <p className="text-muted text-xs mt-2 line-clamp-2">{job.description}</p>
                <span className="inline-block mt-2 text-[11px] uppercase tracking-wide text-muted-dark group-hover:text-success">
                  {guideLabel} →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
