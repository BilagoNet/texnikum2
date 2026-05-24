import { PageShell } from '../components/PageShell'
import {
  IconBarChart,
  IconCalendar,
  IconChart,
  IconCog,
  IconFile,
  IconRocket,
  IconTrending,
  IconUser,
  IconUsers,
  IconWallet,
} from '../components/Icon'
import { overviewKpi, paymentSplit, studentGrowth } from '../data/stats'
import { monthlyRevenue } from '../data/payments'

const kpis = [
  { label: "Jami o'quvchilar", v: overviewKpi.students.value, c: overviewKpi.students.change, color: 'bg-brand-500', icon: <IconUser size={20} /> },
  { label: "Jami o'qituvchilar", v: overviewKpi.teachers.value, c: overviewKpi.teachers.change, color: 'bg-accent-violet', icon: <IconUsers size={20} /> },
  { label: 'Faol guruhlar', v: overviewKpi.groups.value, c: overviewKpi.groups.change, color: 'bg-accent-rose', icon: <IconUsers size={20} /> },
  { label: 'Bugungi darslar', v: overviewKpi.lessonsToday.value, c: overviewKpi.lessonsToday.change, color: 'bg-accent-amber', icon: <IconCalendar size={20} /> },
  { label: "Oylik to'lovlar", v: overviewKpi.monthlyPay.value, c: overviewKpi.monthlyPay.change, color: 'bg-brand-500', icon: <IconWallet size={20} /> },
  { label: 'Hisobot tayyorlanishi', v: overviewKpi.reportReady.value, c: overviewKpi.reportReady.change, color: 'bg-accent-violet', icon: <IconFile size={20} /> },
  { label: 'Avtomatlashtirish darajasi', v: overviewKpi.automation.value, c: overviewKpi.automation.change, color: 'bg-accent-rose', icon: <IconCog size={20} /> },
  { label: 'Boshqaruv samaradorligi', v: overviewKpi.management.value, c: overviewKpi.management.change, color: 'bg-accent-amber', icon: <IconChart size={20} /> },
]

export function DashboardPage() {
  return (
    <PageShell
      eyebrow="Dashboard"
      title="Rahbariyat uchun umumiy boshqaruv paneli"
      subtitle="O'quvchilar, o'qituvchilar, darslar, to'lovlar va avtomatlashtirish jarayonlari bo'yicha asosiy ko'rsatkichlar."
      actions={
        <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-violet px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_30px_-10px_rgba(79,93,228,0.6)]">
          <IconRocket size={14} /> Yangi hisobot
        </button>
      }
    >
      {/* KPI Grid */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k) => (
          <article key={k.label} className="card p-5">
            <div className="flex items-start justify-between">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-slate-400">
                {k.label}
              </div>
              <div className={`grid h-10 w-10 place-items-center rounded-2xl text-white ${k.color}`}>
                {k.icon}
              </div>
            </div>
            <div className="mt-3 text-3xl font-extrabold text-ink-900 dark:text-white">{k.v}</div>
            <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-accent-emerald/15 px-2.5 py-1 text-[11px] font-semibold text-accent-emerald">
              <IconTrending size={11} /> {k.c}
            </div>
          </article>
        ))}
      </section>

      {/* Charts row */}
      <section className="grid gap-5 lg:grid-cols-3">
        <article className="card p-6 lg:col-span-2">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-bold text-ink-900 dark:text-white">O'quvchilar o'sish dinamikasi</h2>
              <p className="text-xs text-ink-500 dark:text-slate-400">So'nggi oylar kesimidagi o'sish grafigi</p>
            </div>
            <IconBarChart size={20} className="text-brand-500" />
          </div>
          <GrowthLine data={studentGrowth} />
        </article>

        <article className="card p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-bold text-ink-900 dark:text-white">To'lovlar monitoringi</h2>
              <p className="text-xs text-ink-500 dark:text-slate-400">To'langan to'lovlar va qarzdorlik ulushi</p>
            </div>
          </div>
          <Donut data={paymentSplit} />
          <ul className="mt-4 space-y-2">
            {paymentSplit.map((p) => (
              <li key={p.label} className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-ink-700 dark:text-slate-300">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: p.color }} />
                  {p.label}
                </span>
                <span className="font-bold text-ink-900 dark:text-white">{p.value}%</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      {/* Monthly revenue */}
      <section className="card p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-bold text-ink-900 dark:text-white">Oylik to'lov tushumi</h2>
            <p className="text-xs text-ink-500 dark:text-slate-400">Mln so'mda · 2026-yil</p>
          </div>
        </div>
        <MonthlyBars data={monthlyRevenue} />
      </section>
    </PageShell>
  )
}

function GrowthLine({ data }: { data: { m: string; v: number }[] }) {
  const max = Math.max(...data.map((d) => d.v))
  const min = Math.min(...data.map((d) => d.v))
  const w = 560
  const h = 220
  const pts = data.map((d, i) => ({
    x: 40 + (i * (w - 60)) / (data.length - 1),
    y: 20 + ((max - d.v) * (h - 50)) / (max - min || 1),
  }))
  const path = pts.reduce(
    (acc, p, i) => acc + (i === 0 ? `M ${p.x} ${p.y}` : ` C ${pts[i - 1].x + 30} ${pts[i - 1].y}, ${p.x - 30} ${p.y}, ${p.x} ${p.y}`),
    '',
  )
  const area = `${path} L ${pts[pts.length - 1].x} ${h - 20} L ${pts[0].x} ${h - 20} Z`
  return (
    <div className="mt-4 w-full overflow-x-auto">
      <svg viewBox={`0 0 ${w} ${h}`} className="h-56 w-full min-w-[520px]">
        <defs>
          <linearGradient id="grad-line" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#4f5de4" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#4f5de4" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1="40" x2={w - 20} y1={20 + ((h - 50) * i) / 3} y2={20 + ((h - 50) * i) / 3} stroke="rgba(148,163,184,0.2)" strokeDasharray="3 4" />
        ))}
        <path d={area} fill="url(#grad-line)" />
        <path d={path} fill="none" stroke="#4f5de4" strokeWidth="3" strokeLinecap="round" />
        {pts.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="4.5" fill="#fff" stroke="#4f5de4" strokeWidth="2.5" />
            <text x={p.x} y={h - 4} textAnchor="middle" style={{ fontSize: 10, fill: 'currentColor', opacity: 0.6 }}>
              {data[i].m}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

function MonthlyBars({ data }: { data: { m: string; v: number }[] }) {
  const max = Math.max(...data.map((d) => d.v))
  return (
    <div className="mt-4 flex h-56 items-end justify-between gap-2">
      {data.map((d) => (
        <div key={d.m} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
          <div
            className="w-full rounded-t-lg bg-gradient-to-t from-brand-500 to-accent-violet transition-all hover:opacity-80"
            style={{ height: `${(d.v / max) * 100}%` }}
            title={`${d.m}: ${d.v} mln so'm`}
          />
          <span className="text-[10px] text-ink-500 dark:text-slate-400">{d.m}</span>
        </div>
      ))}
    </div>
  )
}

function Donut({ data }: { data: { label: string; value: number; color: string }[] }) {
  const total = data.reduce((s, d) => s + d.value, 0)
  let offset = 0
  const r = 42
  const c = 2 * Math.PI * r
  return (
    <div className="mt-4 flex justify-center">
      <svg viewBox="0 0 120 120" className="h-44 w-44 -rotate-90">
        <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(148,163,184,0.15)" strokeWidth="14" />
        {data.map((d) => {
          const length = (d.value / total) * c
          const el = (
            <circle
              key={d.label}
              cx="60"
              cy="60"
              r={r}
              fill="none"
              stroke={d.color}
              strokeWidth="14"
              strokeDasharray={`${length} ${c - length}`}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
            />
          )
          offset += length
          return el
        })}
        <g className="rotate-90" style={{ transformOrigin: '60px 60px' }}>
          <text x="60" y="58" textAnchor="middle" style={{ fontSize: 18, fontWeight: 800, fill: 'currentColor' }}>
            {data[0].value}%
          </text>
          <text x="60" y="74" textAnchor="middle" style={{ fontSize: 9, fill: 'currentColor', opacity: 0.6 }}>
            {data[0].label}
          </text>
        </g>
      </svg>
    </div>
  )
}
