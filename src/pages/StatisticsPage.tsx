import { PageShell } from '../components/PageShell'
import { IconBarChart, IconPieChart, IconTrending } from '../components/Icon'
import {
  attendanceByDay,
  automationStages,
  courseDistribution,
  performanceMetrics,
  studentGrowth,
} from '../data/stats'

export function StatisticsPage() {
  return (
    <PageShell
      eyebrow="Statistika"
      title="Statistik tahlil va vizualizatsiya"
      subtitle="Yo'nalishlar bo'yicha o'quvchilar taqsimoti, davomat, avtomatlashtirish darajasi va boshqaruv samaradorligi."
    >
      {/* Performance metrics */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {performanceMetrics.map((m) => (
          <article key={m.label} className="card p-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-slate-400">
              {m.label}
            </div>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-3xl font-extrabold text-ink-900 dark:text-white">{m.value}%</span>
              <span className="pb-1 text-xs text-ink-500 dark:text-slate-400">/ maqsad {m.target}%</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-ink-900/10 dark:bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-violet"
                style={{ width: `${(m.value / m.target) * 100}%` }}
              />
            </div>
          </article>
        ))}
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        {/* Course distribution */}
        <article className="card p-6 lg:col-span-2">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-base font-bold text-ink-900 dark:text-white">Yo'nalishlar bo'yicha o'quvchilar taqsimoti</h2>
              <p className="text-xs text-ink-500 dark:text-slate-400">10 ta asosiy yo'nalish, jami {courseDistribution.reduce((s, c) => s + c.count, 0)} o'quvchi</p>
            </div>
            <IconBarChart size={20} className="text-brand-500" />
          </div>
          <ul className="mt-5 space-y-3">
            {courseDistribution.map((c) => {
              const max = Math.max(...courseDistribution.map((x) => x.count))
              return (
                <li key={c.name} className="grid grid-cols-[160px_minmax(0,1fr)_48px] items-center gap-3 sm:grid-cols-[200px_minmax(0,1fr)_60px]">
                  <span className="truncate text-xs font-semibold text-ink-700 dark:text-slate-300">{c.name}</span>
                  <div className="h-3 overflow-hidden rounded-full bg-ink-900/5 dark:bg-white/5">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${(c.count / max) * 100}%`, background: c.color }}
                    />
                  </div>
                  <span className="text-right text-xs font-bold text-ink-900 dark:text-white">{c.count}</span>
                </li>
              )
            })}
          </ul>
        </article>

        {/* Donut: payment split */}
        <article className="card p-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-base font-bold text-ink-900 dark:text-white">Davomat (haftalik)</h2>
              <p className="text-xs text-ink-500 dark:text-slate-400">Kun bo'yicha o'rtacha</p>
            </div>
            <IconPieChart size={20} className="text-accent-violet" />
          </div>
          <div className="mt-4 flex h-56 items-end justify-around gap-2">
            {attendanceByDay.map((d) => (
              <div key={d.d} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <span className="text-[10px] font-bold text-ink-700 dark:text-slate-300">{d.v}%</span>
                <div
                  className={`w-full rounded-t-lg ${
                    d.v >= 85 ? 'bg-accent-emerald' : d.v >= 75 ? 'bg-accent-amber' : 'bg-accent-rose'
                  }`}
                  style={{ height: `${d.v}%` }}
                />
                <span className="text-[10px] text-ink-500 dark:text-slate-400">{d.d}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* Automation stages */}
      <section className="card p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-base font-bold text-ink-900 dark:text-white">Avtomatlashtirish darajasi modullar bo'yicha</h2>
            <p className="text-xs text-ink-500 dark:text-slate-400">Avtomatik vs qo'lda bajariladigan ishlar nisbati</p>
          </div>
        </div>
        <ul className="mt-5 space-y-4">
          {automationStages.map((s) => (
            <li key={s.name}>
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-ink-900 dark:text-white">{s.name}</span>
                <span className="text-ink-500 dark:text-slate-400">
                  Avto: <strong className="text-accent-emerald">{s.auto}%</strong> · Qo'lda:{' '}
                  <strong className="text-accent-rose">{s.manual}%</strong>
                </span>
              </div>
              <div className="mt-2 flex h-3 overflow-hidden rounded-full bg-ink-900/5 dark:bg-white/5">
                <div className="bg-gradient-to-r from-accent-emerald to-brand-500" style={{ width: `${s.auto}%` }} />
                <div className="bg-accent-rose/70" style={{ width: `${s.manual}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Growth chart */}
      <section className="card p-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-base font-bold text-ink-900 dark:text-white">O'quvchilar soni dinamikasi</h2>
            <p className="text-xs text-ink-500 dark:text-slate-400">2025-2026 o'quv yili davomida</p>
          </div>
          <IconTrending size={20} className="text-accent-emerald" />
        </div>
        <LineSpark data={studentGrowth} />
      </section>
    </PageShell>
  )
}

function LineSpark({ data }: { data: { m: string; v: number }[] }) {
  const w = 720
  const h = 220
  const max = Math.max(...data.map((d) => d.v))
  const min = Math.min(...data.map((d) => d.v))
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
      <svg viewBox={`0 0 ${w} ${h}`} className="h-56 w-full min-w-[640px]">
        <defs>
          <linearGradient id="sp" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1="40" x2={w - 20} y1={20 + ((h - 50) * i) / 3} y2={20 + ((h - 50) * i) / 3} stroke="rgba(148,163,184,0.2)" strokeDasharray="3 4" />
        ))}
        <path d={area} fill="url(#sp)" />
        <path d={path} fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
        {pts.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="4.5" fill="#fff" stroke="#10b981" strokeWidth="2.5" />
            <text x={p.x} y={p.y - 10} textAnchor="middle" style={{ fontSize: 10, fontWeight: 700, fill: 'currentColor' }}>
              {data[i].v}
            </text>
            <text x={p.x} y={h - 4} textAnchor="middle" style={{ fontSize: 10, fill: 'currentColor', opacity: 0.6 }}>
              {data[i].m}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
