import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../context/Theme'
import {
  IconBarChart,
  IconBook,
  IconCalendar,
  IconClose,
  IconFile,
  IconGraduation,
  IconGrid,
  IconLightBulb,
  IconLock,
  IconMail,
  IconMenu,
  IconMoon,
  IconSun,
  IconUser,
  IconUsers,
  IconWallet,
} from './Icon'

const landingLinks = [
  { to: '/', label: 'Bosh sahifa', icon: <IconBook size={16} /> },
  { to: '/#about', label: 'Platforma haqida', icon: <IconLightBulb size={16} /> },
  { to: '/#features', label: 'Imkoniyatlar', icon: <IconLightBulb size={16} /> },
]

const dashLinks = [
  { to: '/dashboard', label: 'Dashboard', icon: <IconGrid size={16} /> },
  { to: '/students', label: "O'quvchilar", icon: <IconUser size={16} /> },
  { to: '/teachers', label: "O'qituvchilar", icon: <IconUsers size={16} /> },
  { to: '/schedule', label: 'Dars jadvali', icon: <IconCalendar size={16} /> },
  { to: '/payments', label: "To'lovlar", icon: <IconWallet size={16} /> },
  { to: '/reports', label: 'Hisobotlar', icon: <IconFile size={16} /> },
  { to: '/statistics', label: 'Statistika', icon: <IconBarChart size={16} /> },
  { to: '/security', label: 'Xavfsizlik', icon: <IconLock size={16} /> },
  { to: '/contact', label: 'Aloqa', icon: <IconMail size={16} /> },
]

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
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link to="/" className="group flex shrink-0 items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 via-accent-violet to-accent-rose text-white shadow-[0_8px_24px_-8px_rgba(79,93,228,0.6)] transition group-hover:scale-105">
            <IconGraduation size={22} />
          </span>
          <span className="leading-tight">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-500 dark:text-brand-300">
              Qarshi tumani 3-so...
            </span>
            <span className="block text-sm font-bold text-ink-900 dark:text-white">Raqamli platforma</span>
          </span>
        </Link>

        <ul className="hidden flex-1 items-center justify-center gap-1 overflow-x-auto xl:flex scrollbar-hidden">
          {landingLinks.concat(dashLinks).map((l) => (
            <li key={l.to + l.label} className="shrink-0">
              {l.to.startsWith('/#') ? (
                <a
                  href={l.to}
                  className="rounded-full px-3 py-2 text-[13px] font-medium text-ink-700 transition hover:bg-brand-50 hover:text-brand-600 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                >
                  {l.label}
                </a>
              ) : (
                <NavLink
                  to={l.to}
                  end={l.to === '/' || l.to === '/dashboard'}
                  className={({ isActive }) =>
                    `rounded-full px-3 py-2 text-[13px] font-medium transition ${
                      isActive
                        ? 'bg-brand-500 text-white shadow-[0_8px_20px_-8px_rgba(79,93,228,0.6)]'
                        : 'text-ink-700 hover:bg-brand-50 hover:text-brand-600 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              )}
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <button
            aria-label="Mavzu o'zgartirish"
            onClick={toggle}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink-900/10 bg-white/80 text-ink-900 transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            {theme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
          </button>
          <button
            aria-label="Menyu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink-900/10 bg-white/80 text-ink-900 xl:hidden dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            {open ? <IconClose size={18} /> : <IconMenu size={18} />}
          </button>
        </div>
      </nav>

      <div
        className={`xl:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        } transition-opacity`}
      >
        <div className="mx-4 mb-4 max-h-[80vh] overflow-y-auto rounded-2xl border border-white/60 bg-white/95 p-4 shadow-[0_18px_50px_-18px_rgba(15,23,42,0.25)] backdrop-blur dark:border-white/10 dark:bg-slate-900/95">
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-300">Landing</div>
          <ul className="mt-2 mb-3 flex flex-col gap-1">
            {landingLinks.map((l) =>
              l.to.startsWith('/#') ? (
                <li key={l.label}>
                  <a
                    href={l.to}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-brand-50 dark:text-slate-300 dark:hover:bg-white/5"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-50 text-brand-500 dark:bg-white/5">
                      {l.icon}
                    </span>
                    {l.label}
                  </a>
                </li>
              ) : (
                <li key={l.label}>
                  <NavLink
                    to={l.to}
                    end
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium ${
                        isActive
                          ? 'bg-brand-500 text-white'
                          : 'text-ink-700 hover:bg-brand-50 dark:text-slate-300 dark:hover:bg-white/5'
                      }`
                    }
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/15">{l.icon}</span>
                    {l.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-300">Boshqaruv</div>
          <ul className="mt-2 flex flex-col gap-1">
            {dashLinks.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/dashboard'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium ${
                      isActive
                        ? 'bg-gradient-to-r from-brand-500 to-accent-violet text-white'
                        : 'text-ink-700 hover:bg-brand-50 dark:text-slate-300 dark:hover:bg-white/5'
                    }`
                  }
                >
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/15">{l.icon}</span>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
