import { IconChart, IconCog, IconSparkles, IconStar } from '../components/Icon'

const bullets1 = ["o'quvchi va o'qituvchi hisobi", 'dars jadvali', "to'lovlar monitoringi", 'moliyaviy hisobotlar']
const bullets2 = ['statistik tahlil', "aniq ma'lumot", 'samarali qaror']

// Boshqaruv samaradorligining oshishi (line chart ma'lumotlari)
const trend = [
  { x: "Qo'lda ish", y: 9 },
  { x: 'Hisobot', y: 13 },
  { x: 'Tahlil', y: 23 },
  { x: 'Qaror', y: 30 },
]

export function Advantages() {
  const max = 30
  const pts = trend.map((p, i) => ({
    x: 60 + (i * 240) / (trend.length - 1),
    y: 180 - (p.y / max) * 150,
  }))
  const path = pts.reduce(
    (acc, p, i) =>
      acc +
      (i === 0
        ? `M ${p.x} ${p.y}`
        : ` C ${pts[i - 1].x + 40} ${pts[i - 1].y}, ${p.x - 40} ${p.y}, ${p.x} ${p.y}`),
    '',
  )

  return (
    <section id="advantages" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600 dark:bg-white/5">
            Avtomatlashtirishning afzalliklari
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl dark:text-white">
            Platforma joriy etilganda kutiladigan natijalar
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {/* 2 ta yuqori statistika kartochka */}
          <div className="grid gap-4 lg:col-span-7 lg:grid-cols-2">
            <article className="rounded-3xl bg-gradient-to-br from-accent-violet to-brand-500 p-6 text-white shadow-[0_18px_50px_-22px_rgba(139,92,246,0.5)]">
              <div className="flex items-start justify-between">
                <h3 className="text-base font-bold">Qo&apos;lda bajariladigan ishlar kamayadi</h3>
                <IconCog size={18} />
              </div>
              <div className="mt-6">
                <div className="h-3 w-full rounded-full bg-white/20">
                  <div className="h-full w-[20%] rounded-full bg-accent-rose" />
                </div>
                <div className="mt-2 flex items-center justify-end text-2xl font-extrabold">20%</div>
              </div>
            </article>

            <article className="rounded-3xl bg-brand-500 p-6 text-white shadow-[0_18px_50px_-22px_rgba(79,93,228,0.5)]">
              <div className="flex items-start justify-between">
                <h3 className="text-base font-bold">Hisobotlar avtomatik shakllanadi</h3>
                <IconChart size={18} />
              </div>
              <div className="mt-6">
                <div className="h-3 w-full rounded-full bg-white/20">
                  <div className="h-full w-[95%] rounded-full bg-accent-emerald" />
                </div>
                <div className="mt-2 flex items-center justify-end text-2xl font-extrabold">95%</div>
              </div>
            </article>

            {/* Boshqaruv samaradorligining oshishi chart */}
            <article className="rounded-3xl bg-white p-6 shadow-[0_18px_50px_-22px_rgba(15,23,42,0.18)] sm:col-span-2 dark:bg-[color:var(--color-surface-card-dark)]">
              <h3 className="text-base font-bold text-ink-900 dark:text-white">Boshqaruv samaradorligining oshishi</h3>
              <div className="relative mt-4 h-56 w-full">
                <svg viewBox="0 0 360 200" className="h-full w-full">
                  {[0, 10, 20, 30].map((v) => (
                    <g key={v}>
                      <line
                        x1="50"
                        y1={180 - (v / max) * 150}
                        x2="340"
                        y2={180 - (v / max) * 150}
                        stroke="#e2e8f0"
                        strokeDasharray="3 4"
                      />
                      <text
                        x="40"
                        y={184 - (v / max) * 150}
                        textAnchor="end"
                        style={{ fontSize: 9, fill: '#94a3b8' }}
                      >
                        {v}
                      </text>
                    </g>
                  ))}
                  <path d={path} fill="none" stroke="#f5b23e" strokeWidth="3" strokeLinecap="round" />
                  {pts.map((p, i) => (
                    <circle key={i} cx={p.x} cy={p.y} r="5" fill="#fff" stroke="#f5b23e" strokeWidth="2.5" />
                  ))}
                  {trend.map((t, i) => (
                    <text
                      key={t.x}
                      x={pts[i].x}
                      y="196"
                      textAnchor="middle"
                      style={{ fontSize: 9, fill: '#94a3b8' }}
                    >
                      {t.x}
                    </text>
                  ))}
                </svg>
                <div className="absolute right-3 top-2 rounded-xl bg-accent-amber/20 px-3 py-1.5 text-[11px] font-semibold text-ink-900 dark:text-white">
                  Tezkor qaror
                </div>
              </div>
            </article>
          </div>

          {/* Avtomatlashtirish natijasi — o'ng tomon binafsha katta blok */}
          <aside className="rounded-3xl bg-accent-violet p-7 text-white shadow-[0_30px_80px_-30px_rgba(139,92,246,0.5)] lg:col-span-5">
            <h3 className="text-lg font-bold">Avtomatlashtirish natijasi</h3>

            <div className="mt-5 rounded-2xl bg-white/10 p-5 backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <IconSparkles size={16} />
                    <h4 className="text-base font-bold">Yagona platforma</h4>
                  </div>
                  <ul className="mt-3 space-y-1 text-sm text-white/90">
                    {bullets1.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-amber" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <Gauge value={92} color="#f5b23e" />
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-white/10 p-5 backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <IconStar size={16} />
                    <h4 className="text-base font-bold">Tezkor boshqaruv</h4>
                  </div>
                  <ul className="mt-3 space-y-1 text-sm text-white/90">
                    {bullets2.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-emerald" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <Gauge value={95} color="#10b981" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Gauge({ value, color }: { value: number; color: string }) {
  const r = 28
  const c = Math.PI * r
  const offset = c - (value / 100) * c
  return (
    <svg viewBox="0 0 80 50" className="h-16 w-24 shrink-0">
      <path d={`M12 44 A ${r} ${r} 0 0 1 68 44`} stroke="rgba(255,255,255,0.25)" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path
        d={`M12 44 A ${r} ${r} 0 0 1 68 44`}
        stroke={color}
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={offset}
      />
      <text x="40" y="42" textAnchor="middle" fill="#fff" style={{ fontSize: 13, fontWeight: 800 }}>
        {value}%
      </text>
    </svg>
  )
}
