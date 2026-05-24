import type { ReactNode } from 'react'
import { Sidebar } from './Sidebar'

interface PageShellProps {
  eyebrow?: string
  title: string
  subtitle?: string
  actions?: ReactNode
  children: ReactNode
}

export function PageShell({ eyebrow, title, subtitle, actions, children }: PageShellProps) {
  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pt-28">
      <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        <Sidebar />
        <div className="space-y-6 min-w-0">
          <header className="card overflow-hidden p-6 sm:p-8">
            <div className="relative">
              <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-brand-500/10 blur-2xl" />
              <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-accent-rose/10 blur-2xl" />
              <div className="relative flex flex-wrap items-end justify-between gap-4">
                <div>
                  {eyebrow && (
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
                      {eyebrow}
                    </span>
                  )}
                  <h1 className="mt-2 text-balance text-2xl font-extrabold text-ink-900 sm:text-3xl dark:text-white">
                    {title}
                  </h1>
                  {subtitle && (
                    <p className="mt-2 max-w-2xl text-balance text-sm text-ink-500 dark:text-slate-400">
                      {subtitle}
                    </p>
                  )}
                </div>
                {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
              </div>
            </div>
          </header>
          {children}
        </div>
      </div>
    </div>
  )
}
