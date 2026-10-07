import { clients } from '@/app/config/clients.config'

/** Static grid of the real client logos (optimised copies in /img/logos). */
export default function LogoWall() {
  return (
    <ul className="logos">
      {clients.map((c, i) => {
        const file = c.logo.split('/').pop()!.replace(/\.(png|jpe?g|webp)$/i, '')
        return (
          <li key={c.name} data-reveal style={{ ['--d' as string]: `${(i % 5) * 50}ms` }} title={c.name}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/img/logos/${file}.webp`} alt={c.name} loading="lazy" decoding="async" width={c.w} height={c.h} />
          </li>
        )
      })}
    </ul>
  )
}
