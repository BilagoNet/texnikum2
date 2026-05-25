import { useState } from 'react'
import { PageShell } from '../components/PageShell'
import { IconBook, IconCalendar, IconClock, IconMapPin, IconUser } from '../components/Icon'
import { days, schedule, type Lesson } from '../data/schedule'

const colorMap: Record<Lesson['color'], string> = {
  brand: 'border-l-brand-500 bg-brand-500/5',
  rose: 'border-l-accent-rose bg-accent-rose/5',
  amber: 'border-l-accent-amber bg-accent-amber/5',
  violet: 'border-l-accent-violet bg-accent-violet/5',
  emerald: 'border-l-accent-emerald bg-accent-emerald/5',
}

export function SchedulePage() {
  const [view, setView] = useState<'week' | 'day'>('week')
  const [day, setDay] = useState<(typeof days)[number]>('Dushanba')

  return (
    <PageShell
      eyebrow="Dars jadvali"
      title="Haftalik dars jadvali"
      subtitle="Kunlar, vaqt, fan, o'qituvchi, guruh va xona bo'yicha tartibli haftalik ko'rinish."
      actions={
        <div className="flex items-center gap-1 rounded-full bg-brand-50 p-1 dark:bg-white/5">
          <button
            onClick={() => setView('week')}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
              view === 'week' ? 'bg-brand-500 text-white' : 'text-brand-600 dark:text-slate-300'
            }`}
          >
            Hafta
          </button>
          <button
            onClick={() => setView('day')}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
              view === 'day' ? 'bg-brand-500 text-white' : 'text-brand-600 dark:text-slate-300'
            }`}
          >
            Bir kun
          </button>
        </div>
      }
    >
      {view === 'day' && (
        <section className="card p-3">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hidden">
            {days.map((d) => (
              <button
                key={d}
                onClick={() => setDay(d)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${
                  d === day ? 'bg-brand-500 text-white' : 'bg-brand-50 text-brand-600 dark:bg-white/5 dark:text-slate-300'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </section>
      )}

      <section className={view === 'week' ? 'grid gap-5 lg:grid-cols-2 xl:grid-cols-3' : ''}>
        {(view === 'week' ? days : [day]).map((d) => (
          <article key={d} className="card overflow-hidden p-5">
            <header className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-violet text-white">
                  <IconCalendar size={16} />
                </div>
                <h3 className="text-base font-bold text-ink-900 dark:text-white">{d}</h3>
              </div>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-[11px] font-bold text-brand-600 dark:bg-white/5 dark:text-brand-300">
                {schedule[d].length} ta dars
              </span>
            </header>

            <ul className="mt-4 space-y-3">
              {schedule[d].map((l, i) => (
                <li
                  key={i}
                  className={`rounded-xl border-l-4 px-4 py-3 transition hover:translate-x-0.5 ${colorMap[l.color]}`}
                >
                  <div className="text-sm font-bold text-ink-900 dark:text-white">{l.subject}</div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-ink-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap"><IconUser size={12} className="shrink-0" /> {l.teacher}</span>
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap"><IconBook size={12} className="shrink-0 text-brand-500" /> {l.group}</span>
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap"><IconMapPin size={12} className="shrink-0 text-accent-rose" /> {l.room}</span>
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap"><IconClock size={12} className="shrink-0 text-accent-amber" /> {l.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </PageShell>
  )
}
