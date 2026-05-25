import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../context/Theme'
import { SectionLink } from './SectionLink'
import {
  IconArrowRight,
  IconClose,
  IconGraduation,
  IconMenu,
  IconMoon,
  IconSun,
} from './Icon'

type LinkItem =
  | { kind: 'route'; to: string; label: string; exact?: boolean }
  | { kind: 'section'; id: string; label: string }

const links: LinkItem[] = [
  { kind: 'route', to: '/', label: 'Bosh sahifa', exact: true },
  { kind: 'section', id: 'about', label: 'Platforma haqida' },
  { kind: 'section', id: 'features', label: 'Imkoniyatlar' },
  { kind: 'section', id: 'process', label: 'Jarayon' },
  { kind: 'section', id: 'results', label: 'Natijalar' },
  { kind: 'section', id: 'contact', label: 'Aloqa' },
]

const linkBase =
  'rounded-full px-3.5 py-2 text-sm font-medium transition text-ink-700 hover:bg-brand-50 hover:text-brand-600 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white'
const linkActive = 'bg-brand-50 text-brand-600 dark:bg-white/10 dark:text-white'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-lg shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)] dark:bg-slate-950/75'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
        <Link to="/" className="group flex shrink-0 items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 via-accent-violet to-accent-rose text-white shadow-[0_8px_24px_-8px_rgba(79,93,228,0.6)] transition group-hover:scale-105">
            <IconGraduation size={22} />
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-500 dark:text-brand-300">
              Qarshi tumani 3-son
            </span>
            <span className="block text-sm font-bold text-ink-900 dark:text-white">Texnikum raqamli platforma</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) =>
            l.kind === 'section' ? (
              <li key={l.id}>
                <SectionLink sectionId={l.id} className={linkBase}>
                  {l.label}
                </SectionLink>
              </li>
            ) : (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.exact}
                  className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ''}`}
                >
                  {l.label}
                </NavLink>
              </li>
            ),
          )}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <button
            aria-label="Mavzu o'zgartirish"
            onClick={toggle}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink-900/10 bg-white/80 text-ink-900 transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            {theme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
          </button>
          <Link
            to="/dashboard"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-violet px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(79,93,228,0.7)] transition hover:-translate-y-0.5 sm:inline-flex"
          >
            Tizimga kirish
            <IconArrowRight size={14} />
          </Link>
          <button
            aria-label="Menyu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink-900/10 bg-white/80 text-ink-900 lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            {open ? <IconClose size={18} /> : <IconMenu size={18} />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-[80vh] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mb-4 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-[0_18px_50px_-18px_rgba(15,23,42,0.25)] backdrop-blur dark:border-white/10 dark:bg-slate-900/95">
          <ul className="flex flex-col gap-1">
            {links.map((l) =>
              l.kind === 'section' ? (
                <li key={l.id}>
                  <SectionLink
                    sectionId={l.id}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-ink-700 hover:bg-brand-50 dark:text-slate-300 dark:hover:bg-white/5"
                  >
                    {l.label}
                  </SectionLink>
                </li>
              ) : (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.exact}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-sm font-medium ${
                        isActive ? 'bg-brand-50 text-brand-600 dark:bg-white/10 dark:text-white' : 'text-ink-700 hover:bg-brand-50 dark:text-slate-300 dark:hover:bg-white/5'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ),
            )}
            <li className="pt-2">
              <Link
                to="/dashboard"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-accent-violet px-5 py-3 text-sm font-semibold text-white"
              >
                Tizimga kirish <IconArrowRight size={14} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
