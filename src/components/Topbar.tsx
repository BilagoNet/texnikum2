import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useTheme } from '../context/Theme'
import { IconBell, IconMenu, IconMoon, IconSearch, IconSun } from './Icon'

const titles: Record<string, { eyebrow: string; title: string }> = {
  '/dashboard': { eyebrow: 'Boshqaruv paneli', title: 'Dashboard' },
  '/students': { eyebrow: 'Bazalar', title: "O'quvchilar" },
  '/teachers': { eyebrow: 'Bazalar', title: "O'qituvchilar" },
  '/schedule': { eyebrow: "O'quv jarayoni", title: 'Dars jadvali' },
  '/payments': { eyebrow: 'Moliya', title: "To'lovlar" },
  '/reports': { eyebrow: 'Hisobotlar', title: 'Hisobotlar' },
  '/statistics': { eyebrow: 'Analitika', title: 'Statistika' },
  '/security': { eyebrow: 'Tizim', title: 'Xavfsizlik' },
  '/contact': { eyebrow: 'Yordam', title: 'Aloqa' },
}

interface TopbarProps {
  onOpenSidebar: () => void
}

export function Topbar({ onOpenSidebar }: TopbarProps) {
  const { theme, toggle } = useTheme()
  const { pathname } = useLocation()
  const meta = titles[pathname] ?? { eyebrow: 'Tizim', title: 'Sahifa' }
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-30 border-b border-ink-900/5 bg-white/80 backdrop-blur-lg transition-shadow dark:border-white/5 dark:bg-[color:var(--color-surface-card-dark)]/80 ${
        scrolled ? 'shadow-[0_8px_30px_-16px_rgba(15,23,42,0.18)]' : ''
      }`}
    >
      <div className="flex items-center gap-3 px-4 py-3.5 sm:px-6 lg:px-8">
        <button
          aria-label="Sidebar"
          onClick={onOpenSidebar}
          className="grid h-10 w-10 place-items-center rounded-xl border border-ink-900/10 bg-white text-ink-900 lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-white"
        >
          <IconMenu size={18} />
        </button>

        <div className="hidden min-w-0 flex-1 sm:block">
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-500 dark:text-brand-300">
            {meta.eyebrow}
          </div>
          <h1 className="truncate text-base font-extrabold text-ink-900 dark:text-white">{meta.title}</h1>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <div className="relative hidden md:block">
            <IconSearch
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-300"
            />
            <input
              type="search"
              placeholder="Qidirish… (⌘K)"
              className="form-input !w-56 !py-2 !pl-10 !pr-3 lg:!w-72"
            />
          </div>
          <button
            aria-label="Bildirishnomalar"
            className="relative grid h-10 w-10 place-items-center rounded-xl border border-ink-900/10 bg-white text-ink-900 hover:bg-brand-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            <IconBell size={18} />
            <span className="absolute right-2 top-2 inline-block h-2 w-2 rounded-full bg-accent-rose ring-2 ring-white dark:ring-[color:var(--color-surface-card-dark)]" />
          </button>
          <button
            aria-label="Mavzu"
            onClick={toggle}
            className="grid h-10 w-10 place-items-center rounded-xl border border-ink-900/10 bg-white text-ink-900 hover:bg-brand-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            {theme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
          </button>
          <div className="hidden h-9 w-px bg-ink-900/10 dark:bg-white/10 sm:block" />
          <button className="hidden items-center gap-3 rounded-xl border border-ink-900/10 bg-white py-1.5 pl-2 pr-3 text-left transition hover:bg-brand-50 sm:flex dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-violet text-xs font-bold text-white">
              MK
            </span>
            <span className="leading-tight">
              <span className="block text-xs font-bold text-ink-900 dark:text-white">M. Kamoliddinov</span>
              <span className="block text-[10px] text-ink-500 dark:text-slate-400">Administrator</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
