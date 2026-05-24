import { NavLink } from 'react-router-dom'
import {
  IconBarChart,
  IconBook,
  IconCalendar,
  IconFile,
  IconGrid,
  IconLightBulb,
  IconLock,
  IconMail,
  IconUser,
  IconUsers,
  IconWallet,
} from './Icon'

const items = [
  { to: '/dashboard', label: 'Dashboard', icon: <IconGrid size={18} /> },
  { to: '/students', label: "O'quvchilar", icon: <IconUser size={18} /> },
  { to: '/teachers', label: "O'qituvchilar", icon: <IconUsers size={18} /> },
  { to: '/schedule', label: 'Dars jadvali', icon: <IconCalendar size={18} /> },
  { to: '/payments', label: "To'lovlar", icon: <IconWallet size={18} /> },
  { to: '/reports', label: 'Hisobotlar', icon: <IconFile size={18} /> },
  { to: '/statistics', label: 'Statistika', icon: <IconBarChart size={18} /> },
  { to: '/security', label: 'Xavfsizlik', icon: <IconLock size={18} /> },
  { to: '/contact', label: 'Aloqa', icon: <IconMail size={18} /> },
]

export function Sidebar() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 space-y-4">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-accent-violet to-accent-rose p-5 text-white shadow-[0_18px_50px_-22px_rgba(79,93,228,0.6)]">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] backdrop-blur">
            <IconLightBulb size={12} />
            Boshqaruv paneli
          </span>
          <h3 className="mt-3 text-lg font-bold leading-tight">Texnikum jarayonlari</h3>
          <p className="mt-1 text-xs text-white/80">Yagona raqamli tizim</p>
        </div>

        <nav className="card p-3">
          <ul className="space-y-1">
            {items.map((it) => (
              <li key={it.to}>
                <NavLink
                  to={it.to}
                  end={it.to === '/dashboard'}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? 'bg-gradient-to-r from-brand-500 to-accent-violet text-white shadow-[0_12px_30px_-12px_rgba(79,93,228,0.6)]'
                        : 'text-ink-700 hover:bg-brand-50 hover:text-brand-600 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white'
                    }`
                  }
                >
                  <span
                    className="grid h-8 w-8 place-items-center rounded-lg bg-white/15 [&_svg]:shrink-0"
                    aria-hidden
                  >
                    {it.icon}
                  </span>
                  {it.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="card flex items-center gap-3 p-4">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-violet text-sm font-bold text-white">
            MK
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold text-ink-900 dark:text-white">M.Sh. Kamoliddinov</div>
            <div className="text-[11px] text-ink-500 dark:text-slate-400">Tizim administratori</div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export function MobileSidebarLinks({ onClose }: { onClose: () => void }) {
  return (
    <ul className="space-y-1">
      {items.map((it) => (
        <li key={it.to}>
          <NavLink
            to={it.to}
            end={it.to === '/dashboard'}
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                isActive
                  ? 'bg-gradient-to-r from-brand-500 to-accent-violet text-white'
                  : 'text-ink-700 hover:bg-brand-50 dark:text-slate-300 dark:hover:bg-white/5'
              }`
            }
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/15">{it.icon}</span>
            {it.label}
          </NavLink>
        </li>
      ))}
      <li className="pt-2">
        <NavLink
          to="/"
          onClick={onClose}
          end
          className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-ink-700 hover:bg-brand-50 dark:text-slate-300 dark:hover:bg-white/5"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/15">
            <IconBook size={18} />
          </span>
          Bosh sahifa
        </NavLink>
      </li>
    </ul>
  )
}
