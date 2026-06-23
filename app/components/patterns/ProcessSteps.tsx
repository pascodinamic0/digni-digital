export type ProcessStep = {
  index: string
  title: string
  description: string
}

type ProcessStepsProps = {
  steps: ProcessStep[]
  columns?: 2 | 3
}

export default function ProcessSteps({ steps, columns = 3 }: ProcessStepsProps) {
  const gridClass = columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <div className={`grid gap-4 ${gridClass}`}>
      {steps.map((step) => (
        <div key={step.index} className="process-step">
          <p className="process-step-index">{step.index}</p>
          <h3 className="type-h4 font-display font-bold text-text">{step.title}</h3>
          <p className="type-body mt-2 text-muted leading-relaxed">{step.description}</p>
        </div>
      ))}
    </div>
  )
}
