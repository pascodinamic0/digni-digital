interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  id?: string
  parallax?: boolean
  stagger?: boolean
}

/**
 * Shared section wrapper. Motion is CSS-only so pages do not pay for
 * per-section IntersectionObserver + Framer hydration.
 */
export default function AnimatedSection({
  children,
  className = '',
  id,
}: AnimatedSectionProps) {
  return (
    <section id={id} className={`motion-reveal ${className}`.trim()}>
      {children}
    </section>
  )
}
