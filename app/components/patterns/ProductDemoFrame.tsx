import { ReactNode } from 'react'

type ProductDemoFrameProps = {
  label?: string
  title?: string
  children: ReactNode
  dark?: boolean
  className?: string
}

export default function ProductDemoFrame({
  label,
  title,
  children,
  dark = true,
  className = '',
}: ProductDemoFrameProps) {
  return (
    <div
      className={`demo-frame p-4 sm:p-6 ${dark ? 'demo-frame-dark' : ''} ${className}`.trim()}
    >
      {(label || title) && (
        <div className="mb-4 sm:mb-6">
          {label && <span className="section-label">{label}</span>}
          {title && (
            <h3 className={`type-h3 font-display font-bold ${dark ? 'text-white' : 'text-text'}`}>
              {title}
            </h3>
          )}
        </div>
      )}
      {children}
    </div>
  )
}
