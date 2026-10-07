export default function Faq({ items, title }: { items: [string, string][]; title: string }) {
  return (
    <section className="sec">
      <div className="wrap">
        <h2 className="h2 center" data-reveal>{title}</h2>
        <div className="faq">
          {items.map(([q, a], i) => (
            <details key={q} data-reveal style={{ ['--d' as string]: `${i * 50}ms` }} open={i === 0}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
