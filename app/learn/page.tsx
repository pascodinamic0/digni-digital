import { redirect } from 'next/navigation'
import { defaultLocale } from '@/i18n/routing'

/** Redirect bare /learn (no locale) — next-intl uses localePrefix: 'always'. */
export default function LearnRootRedirect() {
  redirect(`/${defaultLocale}/learn`)
}
