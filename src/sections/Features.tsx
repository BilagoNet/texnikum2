import { IconChart, IconCog, IconSparkles, IconUsers } from '../components/Icon'

export function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600 dark:bg-white/5">
            Bitiruv ishining amaliy ahamiyati
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl dark:text-white">
            O&apos;quv markazlari faoliyatini avtomatlashtirish bo&apos;yicha asosiy yo&apos;nalishlar
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {/* Avtomatlashtirish — katta kartochka */}
          <article className="relative flex flex-col justify-between rounded-3xl bg-brand-500 p-7 text-white shadow-[0_30px_80px_-30px_rgba(79,93,228,0.5)] lg:row-span-2">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Avtomatlashtirish</h3>
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white/15">
                  <IconSparkles size={18} />
                </div>
              </div>

              <div className="mt-6">
                <div className="text-xs uppercase tracking-[0.18em] text-white/70">Asosiy vazifa</div>
                <div className="mt-2 text-base font-semibold">Ish jarayonlarini raqamlashtirish</div>
                <Progress value={65} color="bg-accent-rose" track="bg-white/15" />
              </div>

              <div className="mt-8 h-px w-full bg-white/15" />

              <div className="mt-6">
                <div className="text-xs uppercase tracking-[0.18em] text-white/70">Natija</div>
                <div className="mt-2 text-base font-semibold leading-relaxed">
                  Dars jadvali, ro&apos;yxat va boshqaruv ishlari yagona tizimda yuritiladi
                </div>
                <Progress value={85} color="bg-accent-emerald" track="bg-white/15" />
              </div>
            </div>
          </article>

          {/* Moliyaviy nazorat — pushti */}
          <article className="rounded-3xl bg-accent-rose p-7 text-white shadow-[0_30px_80px_-30px_rgba(240,67,110,0.5)] lg:col-span-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Moliyaviy nazorat</h3>
              <div className="grid h-10 w-10 place-items-center rounded-full bg-white/15">
                <IconChart size={18} />
              </div>
            </div>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              <div className="flex items-center gap-4">
                <Gauge value={60} color="#f5b23e" />
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-white/80">Asosiy vazifa</div>
                  <div className="text-sm font-semibold">To&apos;lovlar monitoringi</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Gauge value={80} color="#4f5de4" />
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-white/80">Natija</div>
                  <div className="text-sm font-semibold">
                    Moliyaviy hisobotlar va to&apos;lovlar nazorati yo&apos;lga qo&apos;yiladi
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Boshqaruv tizimi */}
          <article className="rounded-3xl bg-white p-7 shadow-[0_18px_50px_-22px_rgba(15,23,42,0.18)] dark:bg-[color:var(--color-surface-card-dark)]">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-ink-900 dark:text-white">Boshqaruv tizimi</h3>
              <div className="grid h-10 w-10 place-items-center rounded-full bg-accent-amber/15 text-accent-amber">
                <IconCog size={18} />
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-ink-500 dark:text-slate-400">Asosiy vazifa</div>
                <p className="mt-1 text-sm font-medium text-ink-700 dark:text-slate-200">
                  O&apos;quvchilar, o&apos;qituvchilar va dars jadvalini boshqarish
                </p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-accent-emerald">Natija</div>
                <p className="mt-1 text-sm font-medium text-ink-700 dark:text-slate-200">Markaziy nazorat va qulay boshqaruv</p>
              </div>
            </div>
          </article>

          {/* Tahlil va marketing */}
          <article className="rounded-3xl bg-white p-7 shadow-[0_18px_50px_-22px_rgba(15,23,42,0.18)] dark:bg-[color:var(--color-surface-card-dark)]">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-ink-900 dark:text-white">Tahlil va marketing</h3>
              <div className="grid h-10 w-10 place-items-center rounded-full bg-accent-violet/15 text-accent-violet">
                <IconUsers size={18} />
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-ink-500 dark:text-slate-400">Asosiy vazifa</div>
                <p className="mt-1 text-sm font-medium text-ink-700 dark:text-slate-200">Statistik tahlil va mijozlar bilan aloqa</p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-accent-emerald">Natija</div>
                <p className="mt-1 text-sm font-medium text-ink-700 dark:text-slate-200">
                  Qaror qabul qilish sifati va xizmat ko&apos;rsatish yaxshilanadi
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function Progress({ value, color, track }: { value: number; color: string; track: string }) {
  return (
    <div className={`mt-3 h-2.5 w-full rounded-full ${track}`}>
      <div className={`h-full rounded-full ${color} transition-all`} style={{ width: `${value}%` }} />
    </div>
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
