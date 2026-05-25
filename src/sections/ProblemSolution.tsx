import { IconClock, IconLightBulb, IconSparkles } from '../components/Icon'

const items = [
  {
    badge: 'Muammo',
    title: "Qo'lda boshqaruv",
    sub: "vaqtdan ko'p foydalanadi",
    icon: <IconSparkles size={20} />,
    color: 'bg-accent-rose',
  },
  {
    badge: 'Yechim',
    title: 'Raqamli platforma',
    sub: 'jarayonlarni avtomatlashtiradi',
    icon: <IconClock size={20} />,
    color: 'bg-accent-amber',
  },
  {
    badge: 'Natija',
    title: 'Samaradorlik',
    sub: 'boshqaruv sifati oshadi',
    icon: <IconLightBulb size={20} />,
    color: 'bg-brand-500',
  },
]

// Trend ko'rsatkichi: Qo'lda boshqaruv → Avtomatlashtirish → Tahlil → Samaradorlik
const trend = [
  { x: 'Qo\'lda boshqaruv', y: 5.5 },
  { x: 'Avtomatlashtirish', y: 7.5 },
  { x: 'Tahlil', y: 8.7 },
  { x: 'Samaradorlik', y: 13 },
]

export function ProblemSolution() {
  const max = 14
  const pts = trend.map((p, i) => ({
    x: 60 + (i * 240) / (trend.length - 1),
    y: 180 - (p.y / max) * 150,
  }))
  const path = pts.reduce(
    (acc, p, i) => acc + (i === 0 ? `M ${p.x} ${p.y}` : ` C ${pts[i - 1].x + 40} ${pts[i - 1].y}, ${p.x - 40} ${p.y}, ${p.x} ${p.y}`),
    '',
  )

  return (
    <section id="develop" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600 dark:bg-white/5">
            Platformani rivojlantirish maqsadlari
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl dark:text-white">
            Qo&apos;lda boshqaruvdan{' '}
            <span className="gradient-text">samarali raqamli tizimga</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            {items.map((it) => (
              <article
                key={it.badge}
                className={`relative overflow-hidden rounded-3xl p-5 text-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.25)] ${it.color}`}
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-white/15">
                    {it.icon}
                  </div>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]">
                    {it.badge}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-extrabold">{it.title}</h3>
                <p className="mt-1 text-sm text-white/85">{it.sub}</p>
              </article>
            ))}
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-[0_18px_50px_-22px_rgba(15,23,42,0.18)] sm:p-8 lg:col-span-8 dark:bg-[color:var(--color-surface-card-dark)]">
            <h3 className="text-base font-bold text-ink-900 dark:text-white">Raqamlashtirishning rivojlanish yo&apos;nalishi</h3>
            <p className="mt-1 text-sm text-ink-500 dark:text-slate-400">
              Platforma boshqaruv jarayonlarini optimallashtiradi
            </p>

            <div className="relative mt-6 h-64 w-full">
              <svg viewBox="0 0 360 200" className="h-full w-full">
                {[0, 4, 8, 12].map((v) => (
                  <g key={v}>
                    <line x1="50" y1={180 - (v / max) * 150} x2="340" y2={180 - (v / max) * 150} stroke="#e2e8f0" strokeDasharray="3 4" />
                    <text x="40" y={184 - (v / max) * 150} textAnchor="end" style={{ fontSize: 9, fill: '#94a3b8' }}>
                      {v}
                    </text>
                  </g>
                ))}
                <path d={path} fill="none" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" />
                {pts.map((p, i) => (
                  <g key={i}>
                    <circle cx={p.x} cy={p.y} r="5" fill="#fff" stroke="#8b5cf6" strokeWidth="2.5" />
                  </g>
                ))}
                {trend.map((t, i) => (
                  <text key={t.x} x={pts[i].x} y="196" textAnchor="middle" style={{ fontSize: 9, fill: '#94a3b8' }}>
                    {t.x}
                  </text>
                ))}
              </svg>

              <div className="absolute right-2 top-2 max-w-[180px] rounded-xl bg-accent-amber/20 px-3 py-2 text-[11px] font-semibold text-ink-900 dark:bg-accent-amber/90 dark:text-ink-900">
                Platforma boshqaruv jarayonlarini optimallashtiradi
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
