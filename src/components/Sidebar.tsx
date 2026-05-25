import { Link, NavLink } from 'react-router-dom'
import {
  IconArrowRight,
  IconBarChart,
  IconCalendar,
  IconClose,
  IconFile,
  IconGraduation,
  IconGrid,
  IconLock,
  IconLogOut,
  IconMail,
  IconUser,
  IconUsers,
  IconWallet,
} from './Icon'

const sections: { heading: string; items: { to: string; label: string; icon: React.ReactNode }[] }[] = [
  {
    heading: 'Asosiy',
    items: [
      { to: '/dashboard', label: 'Dashboard', icon: <IconGrid size={18} /> },
      { to: '/statistics', label: 'Statistika', icon: <IconBarChart size={18} /> },
    ],
  },
  {
    heading: "O'quv jarayoni",
    items: [
      { to: '/students', label: "O'quvchilar", icon: <IconUser size={18} /> },
      { to: '/teachers', label: "O'qituvchilar", icon: <IconUsers size={18} /> },
      { to: '/schedule', label: 'Dars jadvali', icon: <IconCalendar size={18} /> },
    ],
  },
  {
    heading: 'Moliya va hisobot',
    items: [
      { to: '/payments', label: "To'lovlar", icon: <IconWallet size={18} /> },
      { to: '/reports', label: 'Hisobotlar', icon: <IconFile size={18} /> },
    ],
  },
  {
    heading: 'Tizim',
    items: [
      { to: '/security', label: 'Xavfsizlik', icon: <IconLock size={18} /> },
      { to: '/contact', label: 'Aloqa', icon: <IconMail size={18} /> },
    ],
  },
]

interface SidebarProps {
  open?: boolean
  onClose?: () => void
}

export function Sidebar({ open = false, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-ink-900/40 backdrop-blur-sm transition-opacity lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-ink-900/5 bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.18)] transition-transform duration-300 lg:translate-x-0 dark:border-white/5 dark:bg-[color:var(--color-surface-card-dark)] ${
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Brand */}
        <div className="flex items-center justify-between px-5 py-5">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 via-accent-violet to-accent-rose text-white shadow-[0_8px_24px_-8px_rgba(79,93,228,0.6)]">
              <IconGraduation size={22} />
            </span>
            <span className="leading-tight">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-500 dark:text-brand-300">
                Texnikum
              </span>
              <span className="block text-sm font-bold text-ink-900 dark:text-white">Boshqaruv paneli</span>
            </span>
          </Link>
          {onClose && (
            <button
              onClick={onClose}
              aria-label="Yopish"
              className="grid h-9 w-9 place-items-center rounded-lg text-ink-500 hover:bg-brand-50 lg:hidden dark:text-slate-400 dark:hover:bg-white/5"
            >
              <IconClose size={18} />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 pb-4 scrollbar-hidden">
          {sections.map((sec) => (
            <div key={sec.heading} className="mt-4">
              <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink-300 dark:text-slate-500">
                {sec.heading}
              </div>
              <ul className="space-y-1">
                {sec.items.map((it) => (
                  <li key={it.to}>
                    <NavLink
                      to={it.to}
                      end={it.to === '/dashboard'}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                          isActive
                            ? 'bg-gradient-to-r from-brand-500 to-accent-violet text-white shadow-[0_12px_30px_-12px_rgba(79,93,228,0.6)]'
                            : 'text-ink-700 hover:bg-brand-50 hover:text-brand-600 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white'
                        }`
                      }
                    >
                      <span className="grid h-8 w-8 place-items-center rounded-lg bg-current/0 [&_svg]:shrink-0">
                        {it.icon}
                      </span>
                      <span className="flex-1">{it.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer profile */}
        <div className="border-t border-ink-900/5 p-3 dark:border-white/5">
          <Link
            to="/"
            className="mb-2 flex items-center justify-center gap-2 rounded-xl bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-600 transition hover:bg-brand-100 dark:bg-white/5 dark:text-brand-300 dark:hover:bg-white/10"
          >
            Landing sahifaga qaytish <IconArrowRight size={12} />
          </Link>
          <div className="flex items-center gap-3 rounded-xl p-2">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-violet text-sm font-bold text-white">
              MK
            </div>
            <div className="min-w-0 flex-1 leading-tight">
              <div className="truncate text-sm font-bold text-ink-900 dark:text-white">
                M.Sh. Kamoliddinov
              </div>
              <div className="truncate text-[11px] text-ink-500 dark:text-slate-400">
                Tizim administratori
              </div>
            </div>
            <button
              aria-label="Chiqish"
              onClick={() => alert("Chiqish funksiyasi tez orada qo'shiladi")}
              className="grid h-9 w-9 place-items-center rounded-lg text-ink-500 hover:bg-accent-rose/10 hover:text-accent-rose dark:text-slate-400"
            >
              <IconLogOut size={16} />
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}
