'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/** Adds .in to [data-reveal] elements as they scroll into view; light parallax on [data-parallax]. */
export default function Reveal() {
  const path = usePathname()
  useEffect(() => {
    const root = document.documentElement
    root.classList.add('js')
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.in)'))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!('IntersectionObserver' in window) || reduce) {
      els.forEach((e) => e.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target) } }),
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
    )
    els.forEach((e) => io.observe(e))
    const hero = document.querySelector<HTMLElement>('[data-parallax]')
    let raf = 0
    const onScroll = () => {
      if (!hero) return
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 900)
        hero.style.transform = `translate3d(0, ${y * 0.18}px, 0) scale(1.06)`
      })
    }
    if (hero) window.addEventListener('scroll', onScroll, { passive: true })
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [path])
  return null
}
