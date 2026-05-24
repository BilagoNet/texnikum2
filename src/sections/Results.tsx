import { IconChart, IconRocket, IconSparkles } from '../components/Icon'

const cats = ['Nazariy', 'AAT', 'Onlayn', 'Platforma', 'Baza', 'Hisobot', 'Statistika']
const series = {
  Organlandi: [70, 65, 75, 45, 60, 72, 82],
  IshlabChiqildi: [55, 50, 70, 86, 80, 92, 75],
  AmaliyQollanildi: [88, 85, 68, 70, 86, 70, 78],
}
const sets: Array<{ key: keyof typeof series; label: string; color: string }> = [
  { key: 'Organlandi', label: "O'rganildi", color: '#f5b23e' },
  { key: 'IshlabChiqildi', label: 'Ishlab chiqildi', color: '#f0436e' },
  { key: 'AmaliyQollanildi', label: "Amaliy qo'llanildi", color: '#4f5de4' },
]

export function Results() {
  return (
    <section id="results" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
              Bitiruv ishining natijalari
            </span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
              Asosiy natijalar va ishlab chiqilgan yechimlar
            </h2>
          </div>
          <p className="text-balance text-ink-500 lg:text-right">
            Platforma o&apos;quv markazlari faoliyatini avtomatlashtirish, boshqaruvni takomillashtirish va moliyaviy
            hisobotlarni yagona tizimda yuritishga xizmat qiladi.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="rounded-3xl bg-white p-6 shadow-[0_18px_50px_-22px_rgba(15,23,42,0.18)] sm:p-8 lg:col-span-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-base font-bold text-ink-900">Olingan asosiy natijalar</h3>
              <ul className="flex flex-wrap items-center gap-4 text-xs text-ink-500">
                {sets.map((s) => (
                  <li key={s.key} className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.color }} />
                    {s.label}
                  </li>
                ))}
              </ul>
            </div>
            <GroupedBars />
            <div className="mt-6 rounded-2xl bg-accent-violet/95 p-4 text-sm font-medium text-white">
              Platforma o&apos;quv markazlari faoliyatini avtomatlashtirish, boshqaruvni takomillashtirish,
              to&apos;lovlar monitoringi, moliyaviy hisobotlar va statistik tahlilni yagona tizimda yuritishga xizmat qiladi.
            </div>
          </div>

          <div className="grid gap-4 lg:col-span-4">
            <StatCard
              tone="amber"
              icon={<IconChart size={20} />}
              label="Nazariy asoslar"
              value="4 ta"
              sub="asosiy yo'nalish o'rganildi"
            />
            <StatCard
              tone="rose"
              icon={<IconRocket size={20} />}
              label="Online platforma"
              value="1 ta"
              sub="amaliy yechim ishlab chiqildi"
            />
            <StatCard
              tone="brand"
              icon={<IconSparkles size={20} />}
              label="Asosiy imkoniyatlar"
              value="6 ta"
              sub="boshqaruv funksiyasi shakllantirildi"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({
  tone,
  icon,
  label,
  value,
  sub,
}: {
  tone: 'amber' | 'rose' | 'brand'
  icon: React.ReactNode
  label: string
  value: string
  sub: string
}) {
  const toneMap = {
    amber: 'bg-accent-amber',
    rose: 'bg-accent-rose',
    brand: 'bg-brand-500',
  } as const
  return (
    <div className={`rounded-3xl p-6 text-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.25)] ${toneMap[tone]}`}>
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm font-semibold text-white/85">{label}</div>
          <div className="mt-1 text-3xl font-extrabold">{value}</div>
        </div>
        <div className="grid h-11 w-11 place-items-center rounded-full bg-white/15">{icon}</div>
      </div>
      <p className="mt-2 text-xs text-white/85">{sub}</p>
    </div>
  )
}

function GroupedBars() {
  const max = 100
  return (
    <div className="mt-6">
      <div className="relative h-64 w-full">
        {[0, 25, 50, 75, 100].map((y) => (
          <div key={y} className="absolute inset-x-0" style={{ top: `${100 - y}%` }}>
            <div className="absolute -left-2 -translate-y-1/2 text-[10px] text-ink-300">{y}</div>
            <div className="ml-6 border-t border-dashed border-ink-900/5" />
          </div>
        ))}

        <div className="absolute inset-0 ml-6 flex items-end justify-between gap-3">
          {cats.map((c, i) => (
            <div key={c} className="flex flex-1 flex-col items-center">
              <div className="flex h-56 w-full items-end justify-center gap-1.5">
                {sets.map((s) => (
                  <div
                    key={s.key}
                    className="w-2 rounded-md transition-all duration-700 hover:opacity-80"
                    style={{
                      height: `${(series[s.key][i] / max) * 100}%`,
                      background: s.color,
                    }}
                  />
                ))}
              </div>
              <span className="mt-2 text-[10px] text-ink-500">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
