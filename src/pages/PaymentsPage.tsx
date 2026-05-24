import { useMemo, useState } from 'react'
import { PageShell } from '../components/PageShell'
import {
  IconAlert,
  IconCheckCircle,
  IconDownload,
  IconSearch,
  IconTrending,
  IconWallet,
} from '../components/Icon'
import { monthlyRevenue, paymentSummary, payments, type TxnStatus } from '../data/payments'

const tabs: ('Barchasi' | TxnStatus)[] = ['Barchasi', "To'langan", 'Kutilmoqda', 'Bekor qilindi']

const tone: Record<TxnStatus, string> = {
  "To'langan": 'bg-accent-emerald/15 text-accent-emerald',
  Kutilmoqda: 'bg-accent-amber/15 text-accent-amber',
  'Bekor qilindi': 'bg-accent-rose/15 text-accent-rose',
}

const methodTone: Record<string, string> = {
  Click: 'bg-brand-50 text-brand-600',
  Payme: 'bg-accent-rose/15 text-accent-rose',
  Naqd: 'bg-accent-emerald/15 text-accent-emerald',
  "Bank o'tkazma": 'bg-accent-violet/15 text-accent-violet',
}

function fmtMoney(n: number) {
  return n.toLocaleString('uz-UZ') + " so'm"
}

function fmtMln(n: number) {
  return (n / 1_000_000).toFixed(1) + ' mln'
}

export function PaymentsPage() {
  const [q, setQ] = useState('')
  const [tab, setTab] = useState<(typeof tabs)[number]>('Barchasi')

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase()
    return payments.filter((p) => {
      if (tab !== 'Barchasi' && p.status !== tab) return false
      if (!t) return true
      return (
        p.studentName.toLowerCase().includes(t) ||
        p.group.toLowerCase().includes(t) ||
        p.id.toLowerCase().includes(t) ||
        p.method.toLowerCase().includes(t)
      )
    })
  }, [q, tab])

  const percent = Math.round((paymentSummary.monthly / paymentSummary.monthlyTarget) * 100)

  return (
    <PageShell
      eyebrow="To'lovlar"
      title="To'lovlar monitoringi va moliyaviy nazorat"
      subtitle="Oylik tushum, qarzdorlik, to'lov usullari va so'nggi tranzaksiyalar."
      actions={
        <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-violet px-3 py-2 text-xs font-semibold text-white">
          <IconDownload size={14} /> Hisobotni yuklash
        </button>
      }
    >
      {/* Top stats */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article className="card relative overflow-hidden p-5">
          <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-500/10" />
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-slate-400">
            Oylik tushum
          </div>
          <div className="mt-2 text-2xl font-extrabold text-ink-900 dark:text-white">
            {fmtMln(paymentSummary.monthly)} <span className="text-sm font-medium text-ink-500">so'm</span>
          </div>
          <div className="mt-3 h-2 rounded-full bg-ink-900/10 dark:bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-violet"
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className="mt-2 text-[11px] text-ink-500 dark:text-slate-400">
            Maqsaddan {percent}% bajarildi
          </div>
        </article>

        <article className="card p-5">
          <div className="flex items-start justify-between">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-slate-400">
              Haftalik tushum
            </div>
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-accent-emerald text-white">
              <IconTrending size={18} />
            </div>
          </div>
          <div className="mt-3 text-2xl font-extrabold text-ink-900 dark:text-white">
            {fmtMln(paymentSummary.weekly)}
          </div>
          <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-accent-emerald/15 px-2.5 py-1 text-[11px] font-semibold text-accent-emerald">
            <IconTrending size={11} /> +14% o'tgan haftaga
          </div>
        </article>

        <article className="card p-5">
          <div className="flex items-start justify-between">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-slate-400">
              Qarzdorlik
            </div>
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-accent-rose text-white">
              <IconAlert size={18} />
            </div>
          </div>
          <div className="mt-3 text-2xl font-extrabold text-ink-900 dark:text-white">
            {fmtMln(paymentSummary.debt)}
          </div>
          <div className="mt-2 text-[11px] text-ink-500 dark:text-slate-400">
            142 ta o'quvchi to'lov qilmagan
          </div>
        </article>

        <article className="card p-5">
          <div className="flex items-start justify-between">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-slate-400">
              Bajarilgan tranzaksiyalar
            </div>
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-500 text-white">
              <IconCheckCircle size={18} />
            </div>
          </div>
          <div className="mt-3 text-2xl font-extrabold text-ink-900 dark:text-white">
            {paymentSummary.collected}
          </div>
          <div className="mt-2 text-[11px] text-ink-500 dark:text-slate-400">
            Kutilmoqda: {paymentSummary.pending} ta
          </div>
        </article>
      </section>

      {/* Monthly revenue chart */}
      <section className="card p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-base font-bold text-ink-900 dark:text-white">Oylik to'lov tushumi (mln so'm)</h2>
            <p className="text-xs text-ink-500 dark:text-slate-400">2026-yil dinamikasi</p>
          </div>
        </div>
        <div className="mt-5 flex h-48 items-end justify-between gap-2">
          {monthlyRevenue.map((d) => {
            const max = Math.max(...monthlyRevenue.map((x) => x.v))
            const isHighlight = d.m === 'May'
            return (
              <div key={d.m} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <div className="text-[10px] font-bold text-ink-700 dark:text-slate-300">{d.v}</div>
                <div
                  className={`w-full rounded-t-lg ${
                    isHighlight
                      ? 'bg-gradient-to-t from-accent-rose to-accent-violet shadow-[0_8px_20px_-8px_rgba(240,67,110,0.6)]'
                      : 'bg-gradient-to-t from-brand-500 to-accent-violet opacity-80'
                  }`}
                  style={{ height: `${(d.v / max) * 100}%` }}
                />
                <span className="text-[10px] text-ink-500 dark:text-slate-400">{d.m}</span>
              </div>
            )
          })}
        </div>
      </section>

      {/* Transactions */}
      <section className="card p-4 sm:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[220px]">
            <IconSearch size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-300" />
            <input
              type="search"
              placeholder="O'quvchi F.I.SH, guruh yoki tranzaksiya ID"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="form-input pl-11"
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

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[820px] text-left text-sm">
            <thead>
              <tr className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-500 dark:text-slate-400">
                <th className="px-3 py-3">Tranzaksiya</th>
                <th className="px-3 py-3">O'quvchi</th>
                <th className="px-3 py-3">Guruh</th>
                <th className="px-3 py-3 text-right">Summa</th>
                <th className="px-3 py-3">Usul</th>
                <th className="px-3 py-3">Sana</th>
                <th className="px-3 py-3">Holat</th>
              </tr>
            </thead>
            <tbody>
              {filtered.slice(0, 18).map((p) => (
                <tr key={p.id} className="border-t border-ink-900/5 hover:bg-brand-50/40 dark:border-white/5 dark:hover:bg-white/5">
                  <td className="px-3 py-3.5">
                    <div className="text-xs font-bold text-ink-900 dark:text-white">{p.id}</div>
                  </td>
                  <td className="px-3 py-3.5 font-semibold text-ink-900 dark:text-white">{p.studentName}</td>
                  <td className="px-3 py-3.5">
                    <span className="rounded-md bg-brand-50 px-2 py-1 text-xs font-bold text-brand-600 dark:bg-white/5 dark:text-brand-300">
                      {p.group}
                    </span>
                  </td>
                  <td className="px-3 py-3.5 text-right font-bold text-ink-900 dark:text-white">
                    {fmtMoney(p.amount)}
                  </td>
                  <td className="px-3 py-3.5">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${methodTone[p.method]}`}>
                      <IconWallet size={11} /> {p.method}
                    </span>
                  </td>
                  <td className="px-3 py-3.5 text-xs text-ink-500 dark:text-slate-400">{p.date}</td>
                  <td className="px-3 py-3.5">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${tone[p.status]}`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-current" /> {p.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-3 py-12 text-center text-sm text-ink-500">
                    Hech narsa topilmadi
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </PageShell>
  )
}
