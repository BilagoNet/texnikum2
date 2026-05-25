import { IconArrowRight, IconChart, IconCog, IconSparkles, IconStar } from '../components/Icon'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-24 sm:pt-32 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-brand-300/40 blur-3xl animate-blob" />
        <div className="absolute top-40 right-[-120px] h-[480px] w-[480px] rounded-full bg-accent-violet/30 blur-3xl animate-blob [animation-delay:-6s]" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600 backdrop-blur dark:border-white/10 dark:bg-white/5">
            <IconSparkles size={14} />
            Qarshi tumani 3-son texnikumi
          </div>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl dark:text-white">
            O&apos;quv markazlari faoliyatini{' '}
            <span className="gradient-text">iqtisodiy rivojlantirishga mo&apos;ljallangan platforma</span>
          </h1>

          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-500 dark:text-slate-400">
            Texnikumda o&apos;quvchilar va o&apos;qituvchilar hisobi, dars jadvali, to&apos;lovlar hamda boshqaruv
            jarayonlarini raqamli platforma orqali takomillashtirishga qaratilgan yagona tizim.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#features"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-violet px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_40px_-12px_rgba(79,93,228,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_50px_-16px_rgba(79,93,228,0.85)]"
            >
              Platforma imkoniyatlari
              <IconArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/70 px-6 py-3.5 text-sm font-semibold text-ink-900 shadow-sm backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              Bitiruv ishi haqida
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2 max-w-md">
            {['Avtomatlashtirish', 'Boshqaruv', 'Iqtisodiy samaradorlik'].map((t) => (
              <li
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-semibold text-ink-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -right-10 -top-10 h-[420px] w-[420px] rounded-full bg-brand-500/90" />
          <div className="pointer-events-none absolute -right-32 top-32 h-32 w-32 rounded-full border-[10px] border-accent-rose/40" />

          <div className="relative grid grid-cols-2 gap-4 lg:gap-5">
            <DashCard tone="white" className="row-span-2">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs text-ink-500 dark:text-slate-400">Moliyaviy monitoring</div>
                  <div className="text-base font-bold text-brand-600">To&apos;lovlar nazorati</div>
                </div>
                <IconChart size={20} className="text-brand-500" />
              </div>
              <BarChart />
            </DashCard>

            <DashCard tone="white">
              <div className="flex items-start justify-between">
                <div className="text-xs text-ink-500 dark:text-slate-400">Iqtisodiy samaradorlik</div>
                <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-50 text-brand-500 dark:bg-white/5">
                  <IconChart size={14} />
                </div>
              </div>
              <div className="mt-2 text-2xl font-extrabold text-brand-500">55%</div>
              <div className="mt-1 text-[11px] text-ink-300 dark:text-slate-500">oldingi davrga nisbatan</div>
            </DashCard>

            <DashCard tone="white">
              <div className="text-xs text-ink-500 dark:text-slate-400">Boshqaruv samaradorligi</div>
              <Gauge value={72} color="#4f5de4" />
              <button className="mt-3 w-full rounded-xl bg-brand-500 px-3 py-2 text-xs font-semibold text-white">
                Yagona raqamli tizim
              </button>
            </DashCard>

            <DashCard tone="white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-ink-500 dark:text-slate-400">Jarayonlarni avtomatlashtirish</div>
                  <div className="text-sm font-bold text-brand-500">Dars jadvali</div>
                </div>
                <IconCog size={18} className="text-brand-400" />
              </div>
              <Row icon="rose" label="o'quvchi" />
              <Row icon="amber" label="o'qituvchi hisobi" />
            </DashCard>

            <DashCard tone="white">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs text-ink-500 dark:text-slate-400">Platforma imkoniyatlari</div>
                  <div className="text-sm font-bold text-brand-500">Hisobot | Statistika | Marketing</div>
                </div>
                <IconStar size={16} className="text-accent-amber" />
              </div>
              <DonutMini />
            </DashCard>
          </div>
        </div>
      </div>
    </section>
  )
}

function DashCard({
  children,
  className = '',
  tone = 'white',
}: {
  children: React.ReactNode
  className?: string
  tone?: 'white' | 'brand'
}) {
  const base =
    tone === 'white'
      ? 'bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.25)] dark:bg-[color:var(--color-surface-card-dark)]'
      : 'bg-brand-500 text-white shadow-[0_18px_50px_-18px_rgba(79,93,228,0.7)]'
  return (
    <div className={`relative rounded-2xl p-4 ring-1 ring-ink-900/5 dark:ring-white/5 ${base} ${className}`}>{children}</div>
  )
}

function BarChart() {
  const data = [12, 20, 14, 22, 18, 28, 16]
  const colors = ['#0f172a', '#f5b23e', '#4f5de4', '#8b5cf6', '#a5b4fc', '#7c3aed', '#f0436e']
  return (
    <div className="mt-3 flex h-32 items-end justify-between gap-1.5">
      {data.map((v, i) => (
        <div key={i} className="flex h-full flex-1 flex-col items-center justify-end gap-1">
          <div
            className="w-full rounded-md"
            style={{ height: `${(v / 28) * 100}%`, background: colors[i] }}
          />
          <span className="text-[9px] text-ink-300 dark:text-slate-500">{String.fromCharCode(65 + i)}</span>
        </div>
      ))}
    </div>
  )
}

function Gauge({ value, color }: { value: number; color: string }) {
  const r = 28
  const c = Math.PI * r
  const offset = c - (value / 100) * c
  return (
    <div className="mt-2 flex items-center justify-center">
      <svg viewBox="0 0 80 50" className="h-20 w-32">
        <path d={`M12 44 A ${r} ${r} 0 0 1 68 44`} stroke="#ede9fe" strokeWidth="10" fill="none" strokeLinecap="round" />
        <path
          d={`M12 44 A ${r} ${r} 0 0 1 68 44`}
          stroke={color}
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
        <text x="40" y="40" textAnchor="middle" className="fill-ink-900 dark:fill-white" style={{ fontSize: 13, fontWeight: 700 }}>
          {value}%
        </text>
      </svg>
    </div>
  )
}

function Row({ icon, label }: { icon: 'rose' | 'amber'; label: string }) {
  const bg = icon === 'rose' ? 'bg-accent-rose/15 text-accent-rose' : 'bg-accent-amber/15 text-accent-amber'
  return (
    <div className="mt-2 flex items-center gap-2">
      <div className={`grid h-7 w-7 place-items-center rounded-lg ${bg}`}>
        <IconCog size={14} />
      </div>
      <div className="h-2 flex-1 rounded-full bg-ink-900/5 dark:bg-white/10">
        <div className={`h-full w-2/3 rounded-full ${icon === 'rose' ? 'bg-accent-rose/70' : 'bg-accent-amber/70'}`} />
      </div>
      <span className="text-[10px] text-ink-500 dark:text-slate-400">{label}</span>
    </div>
  )
}

function DonutMini() {
  return (
    <div className="mt-2 flex items-center gap-3">
      <svg viewBox="0 0 36 36" className="h-16 w-16">
        <circle cx="18" cy="18" r="14" fill="none" stroke="#f0436e" strokeWidth="6" strokeDasharray="22 66" />
        <circle
          cx="18"
          cy="18"
          r="14"
          fill="none"
          stroke="#f5b23e"
          strokeWidth="6"
          strokeDasharray="22 66"
          strokeDashoffset="-22"
        />
        <circle
          cx="18"
          cy="18"
          r="14"
          fill="none"
          stroke="#4f5de4"
          strokeWidth="6"
          strokeDasharray="22 66"
          strokeDashoffset="-44"
        />
        <circle cx="18" cy="18" r="10" fill="#fff" />
      </svg>
      <ul className="space-y-1">
        {['55%', '55%', '55%'].map((v, i) => (
          <li key={i} className="flex items-center gap-2 text-[10px] text-ink-500 dark:text-slate-400">
            <span className="grid h-3 w-3 place-items-center rounded-full bg-emerald-100 text-emerald-500">✓</span>
            {v}
          </li>
        ))}
      </ul>
    </div>
  )
}
