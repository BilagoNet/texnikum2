import { useMemo, useState } from 'react'
import { PageShell } from '../components/PageShell'
import { IconDownload, IconFilter, IconPlus, IconSearch } from '../components/Icon'
import { students, studentSummary } from '../data/students'

const filters = ['Barchasi', "To'langan", 'Qisman', 'Qarzdor'] as const

const statusStyles: Record<string, string> = {
  "To'langan": 'bg-accent-emerald/15 text-accent-emerald',
  Qisman: 'bg-accent-amber/15 text-accent-amber',
  Qarzdor: 'bg-accent-rose/15 text-accent-rose',
}

export function StudentsPage() {
  const [q, setQ] = useState('')
  const [f, setF] = useState<(typeof filters)[number]>('Barchasi')
  const [page, setPage] = useState(1)
  const perPage = 10

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    return students.filter((s) => {
      if (f !== 'Barchasi' && s.paymentStatus !== f) return false
      if (!term) return true
      return (
        s.fullName.toLowerCase().includes(term) ||
        s.group.toLowerCase().includes(term) ||
        s.course.toLowerCase().includes(term) ||
        s.id.toLowerCase().includes(term)
      )
    })
  }, [q, f])

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage))
  const safePage = Math.min(page, totalPages)
  const start = (safePage - 1) * perPage
  const pageData = filtered.slice(start, start + perPage)

  return (
    <PageShell
      eyebrow="O'quvchilar"
      title="O'quvchilar bazasi"
      subtitle="Shaxsiy ma'lumotlar, guruh, yo'nalish, davomat va to'lov holatlarini tezkor qidirish hamda filtrlash."
      actions={
        <>
          <button className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white px-3 py-2 text-xs font-semibold text-ink-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
            <IconDownload size={14} /> Eksport
          </button>
          <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-violet px-3 py-2 text-xs font-semibold text-white">
            <IconPlus size={14} /> Yangi o'quvchi
          </button>
        </>
      }
    >
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat tone="brand" label="Jami o'quvchilar" value={String(studentSummary.total)} sub="2025-2026 o'quv yili" />
        <Stat tone="emerald" label="To'lagan" value={`${Math.round((studentSummary.paid / students.length) * 100)}%`} sub={`${studentSummary.paid} ta o'quvchi`} />
        <Stat tone="amber" label="Qisman to'lagan" value={`${Math.round((studentSummary.partial / students.length) * 100)}%`} sub={`${studentSummary.partial} ta o'quvchi`} />
        <Stat tone="rose" label="Qarzdor" value={`${Math.round((studentSummary.debt / students.length) * 100)}%`} sub={`${studentSummary.debt} ta o'quvchi`} />
      </section>

      <section className="card p-4 sm:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[220px]">
            <IconSearch size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-300" />
            <input
              type="search"
              placeholder="F.I.Sh, guruh, yo'nalish yoki ID bo'yicha qidirish"
              value={q}
              onChange={(e) => {
                setQ(e.target.value)
                setPage(1)
              }}
              className="form-input pl-11"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hidden">
            <IconFilter size={14} className="shrink-0 text-ink-500" />
            {filters.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  setF(opt)
                  setPage(1)
                }}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  f === opt
                    ? 'bg-brand-500 text-white'
                    : 'bg-brand-50 text-brand-600 hover:bg-brand-100 dark:bg-white/5 dark:text-slate-300'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[820px] text-left text-sm">
            <thead>
              <tr className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-500 dark:text-slate-400">
                <th className="px-3 py-3">ID</th>
                <th className="px-3 py-3">F.I.SH</th>
                <th className="px-3 py-3">Yo'nalish</th>
                <th className="px-3 py-3">Guruh</th>
                <th className="px-3 py-3">Telefon</th>
                <th className="px-3 py-3">To'lov holati</th>
                <th className="px-3 py-3">Davomat</th>
              </tr>
            </thead>
            <tbody>
              {pageData.map((s) => (
                <tr key={s.id} className="border-t border-ink-900/5 transition hover:bg-brand-50/40 dark:border-white/5 dark:hover:bg-white/5">
                  <td className="px-3 py-4 text-xs font-bold text-ink-500 dark:text-slate-400">{s.id}</td>
                  <td className="px-3 py-4 font-semibold text-ink-900 dark:text-white">{s.fullName}</td>
                  <td className="px-3 py-4 text-ink-700 dark:text-slate-300">{s.course}</td>
                  <td className="px-3 py-4">
                    <span className="rounded-md bg-brand-50 px-2 py-1 text-xs font-bold text-brand-600 dark:bg-white/5 dark:text-brand-300">
                      {s.group}
                    </span>
                  </td>
                  <td className="px-3 py-4 text-xs text-ink-500 dark:text-slate-400">{s.phone}</td>
                  <td className="px-3 py-4">
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[s.paymentStatus]}`}>
                      {s.paymentStatus}
                    </span>
                  </td>
                  <td className="px-3 py-4">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-16 rounded-full bg-ink-900/10 dark:bg-white/10">
                        <div
                          className={`h-full rounded-full ${
                            s.attendance >= 85 ? 'bg-accent-emerald' : s.attendance >= 70 ? 'bg-accent-amber' : 'bg-accent-rose'
                          }`}
                          style={{ width: `${s.attendance}%` }}
                        />
                      </div>
                      <span className="text-[11px] font-bold text-ink-700 dark:text-slate-300">{s.attendance}%</span>
                    </div>
                  </td>
                </tr>
              ))}
              {pageData.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-3 py-12 text-center text-sm text-ink-500">
                    Hech narsa topilmadi
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {filtered.length > 0 && (
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-ink-500 dark:text-slate-400">
            <span>
              {start + 1}–{Math.min(start + perPage, filtered.length)} / {filtered.length} ta
            </span>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`grid h-8 min-w-8 place-items-center rounded-lg px-2 font-semibold ${
                    p === safePage
                      ? 'bg-brand-500 text-white'
                      : 'bg-brand-50 text-brand-600 hover:bg-brand-100 dark:bg-white/5 dark:text-slate-300'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>
    </PageShell>
  )
}

function Stat({
  tone,
  label,
  value,
  sub,
}: {
  tone: 'brand' | 'emerald' | 'amber' | 'rose'
  label: string
  value: string
  sub: string
}) {
  const map = {
    brand: 'from-brand-500 to-accent-violet',
    emerald: 'from-accent-emerald to-brand-500',
    amber: 'from-accent-amber to-accent-rose',
    rose: 'from-accent-rose to-accent-violet',
  } as const
  return (
    <article className={`overflow-hidden rounded-2xl bg-gradient-to-br p-5 text-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.25)] ${map[tone]}`}>
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">{label}</div>
      <div className="mt-2 text-3xl font-extrabold">{value}</div>
      <div className="mt-1 text-xs text-white/85">{sub}</div>
    </article>
  )
}
