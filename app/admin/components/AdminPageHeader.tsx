type Props = {
  title: string
  description?: string
  /** Small uppercase label above the title (matches marketing `.section-label`) */
  label?: string
}

export function AdminPageHeader({ title, description, label }: Props) {
  return (
    <header className="mb-8 md:mb-10">
      {label ? <span className="section-label">{label}</span> : null}
      <h1 className="font-display mb-2 text-3xl font-bold tracking-tight text-text md:text-4xl">{title}</h1>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </header>
  )
}
