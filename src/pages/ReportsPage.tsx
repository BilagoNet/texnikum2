import { useMemo, useState } from 'react'
import { PageShell } from '../components/PageShell'
import { IconDownload, IconFile, IconPlus, IconSearch } from '../components/Icon'
import { reportSummary, reports, type Report } from '../data/reports'

const tabs: ('Barchasi' | Report['type'])[] = ['Barchasi', 'Moliyaviy', "O'quv", 'Statistik', 'Yuklama']
const typeTone: Record<Report['type'], string> = {
  Moliyaviy: 'bg-accent-emerald/15 text-accent-emerald',
  "O'quv": 'bg-brand-50 text-brand-600 dark:bg-white/5 dark:text-brand-300',
  Statistik: 'bg-accent-violet/15 text-accent-violet',
  Yuklama: 'bg-accent-amber/15 text-accent-amber',
}
const statusTone: Record<Report['status'], string> = {
  Tayyor: 'bg-accent-emerald/15 text-accent-emerald',
  Tayyorlanmoqda: 'bg-accent-amber/15 text-accent-amber',
  Tahrir: 'bg-accent-rose/15 text-accent-rose',
}

export function ReportsPage() {
  const [q, setQ] = useState('')
  const [tab, setTab] = useState<(typeof tabs)[number]>('Barchasi')

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase()
    return reports.filter((r) => {
      if (tab !== 'Barchasi' && r.type !== tab) return false
      if (!t) return true
      return r.title.toLowerCase().includes(t) || r.author.toLowerCase().includes(t) || r.id.toLowerCase().includes(t)
    })
  }, [q, tab])

  return (
    <PageShell
      eyebrow="Hisobotlar"
      title="Avtomatik hisobotlar arxivi"
      subtitle="Moliyaviy, o'quv, statistik va yuklama hisobotlari yagona joyda. Avtomatik shakllantirish 95% darajada."
      actions={
        <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-violet px-3 py-2 text-xs font-semibold text-white">
          <IconPlus size={14} /> Yangi hisobot
        </button>
      }
    >
      <section className="grid gap-4 sm:grid-cols-4">
        <Stat label="Jami hisobotlar" value={reportSummary.total} tone="brand" />
        <Stat label="Tayyor" value={reportSummary.ready} tone="emerald" />
        <Stat label="Tayyorlanmoqda" value={reportSummary.pending} tone="amber" />
        <Stat label="Tahrir" value={reportSummary.draft} tone="rose" />
      </section>

      <section className="card p-4 sm:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[220px]">
            <IconSearch size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-300" />
            <input
              type="search"
              placeholder="Hisobot nomi, muallif yoki ID bo'yicha qidirish"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full rounded-2xl border border-ink-900/10 bg-surface py-3 pl-11 pr-4 text-sm focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-500/15 dark:border-white/10 dark:bg-white/5 dark:text-white"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hidden">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold ${
                  tab === t
                    ? 'bg-brand-500 text-white'
                    : 'bg-brand-50 text-brand-600 hover:bg-brand-100 dark:bg-white/5 dark:text-slate-300'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-5 space-y-3">
          {filtered.map((r) => (
            <li
              key={r.id}
              className="group flex flex-col gap-3 rounded-2xl border border-ink-900/5 p-4 transition hover:border-brand-500/30 hover:bg-brand-50/30 sm:flex-row sm:items-center sm:justify-between dark:border-white/5 dark:hover:bg-white/5"
            >
              <div className="flex items-start gap-3">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-violet text-white">
                  <IconFile size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-ink-900 dark:text-white">{r.title}</h3>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-ink-500 dark:text-slate-400">
                    <span>{r.id}</span>
                    <span>·</span>
                    <span>{r.author}</span>
                    <span>·</span>
                    <span>{r.date}</span>
                    <span>·</span>
                    <span>{r.size}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${typeTone[r.type]}`}>
                  {r.type}
                </span>
                <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-600 dark:bg-white/5 dark:text-brand-300">
                  {r.period}
                </span>
                <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusTone[r.status]}`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-current" /> {r.status}
                </span>
                <button className="inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-3 py-1.5 text-[11px] font-semibold text-white transition group-hover:-translate-y-0.5">
                  <IconDownload size={12} /> Yuklab olish
                </button>
              </div>
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="p-12 text-center text-sm text-ink-500">Hech narsa topilmadi</li>
          )}
        </ul>
      </section>
    </PageShell>
  )
}

function Stat({ label, value, tone }: { label: string; value: number; tone: 'brand' | 'emerald' | 'amber' | 'rose' }) {
  const t = {
    brand: 'from-brand-500 to-accent-violet',
    emerald: 'from-accent-emerald to-brand-500',
    amber: 'from-accent-amber to-accent-rose',
    rose: 'from-accent-rose to-accent-violet',
  }[tone]
  return (
    <article className={`overflow-hidden rounded-2xl bg-gradient-to-br p-5 text-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.25)] ${t}`}>
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">{label}</div>
      <div className="mt-2 text-3xl font-extrabold">{value}</div>
    </article>
  )
}
