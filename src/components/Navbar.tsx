import { useEffect, useState } from 'react'
import { IconClose, IconGraduation, IconMenu } from './Icon'

const links = [
  { href: '#about', label: "Ob'ekt va predmet" },
  { href: '#goals', label: 'Maqsad' },
  { href: '#features', label: 'Amaliy ahamiyat' },
  { href: '#process', label: 'Jarayon' },
  { href: '#results', label: 'Natijalar' },
  { href: '#contact', label: 'Aloqa' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)]' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-violet text-white shadow-[0_8px_24px_-8px_rgba(79,93,228,0.6)] transition group-hover:scale-105">
            <IconGraduation size={22} />
          </span>
          <span className="leading-tight">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-500">Texnikum</span>
            <span className="block text-base font-bold text-ink-900">Qarshi tumani 3-son</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-700 transition hover:bg-brand-50 hover:text-brand-600"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-violet px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(79,93,228,0.7)] transition hover:shadow-[0_18px_40px_-12px_rgba(79,93,228,0.8)] hover:-translate-y-0.5"
          >
            Bog&apos;lanish
          </a>
        </div>

        <button
          aria-label="Menyu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-2xl bg-white/80 text-ink-900 shadow-[0_8px_24px_-8px_rgba(15,23,42,0.12)] lg:hidden"
        >
          {open ? <IconClose size={22} /> : <IconMenu size={22} />}
        </button>
      </nav>

      <div
        className={`lg:hidden ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} transition-opacity`}
      >
        <div className="mx-4 mb-4 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-[0_18px_50px_-18px_rgba(15,23,42,0.25)] backdrop-blur">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-ink-700 transition hover:bg-brand-50 hover:text-brand-600"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-violet px-5 py-3 text-sm font-semibold text-white"
              >
                Bog&apos;lanish
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
