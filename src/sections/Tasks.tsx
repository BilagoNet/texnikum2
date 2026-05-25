const rows = [
  {
    stage: '1-bosqich',
    task: "Iqtisodiy asoslarni o'rganish",
    result: 'Mavjud muammolar tahlil qilindi',
    status: 'Bajarildi',
    statusTone: 'bg-accent-emerald/15 text-accent-emerald',
  },
  {
    stage: '2-bosqich',
    task: 'Faoliyat samaradorligini tahlil qilish',
    result: 'Rivojlantirish omillari aniqlandi',
    status: 'Bajarildi',
    statusTone: 'bg-accent-emerald/15 text-accent-emerald',
  },
  {
    stage: '3-bosqich',
    task: 'Web-platforma tuzilmasini ishlab chiqish',
    result: 'Platformaning asosiy modullari belgilandi',
    status: 'Jarayonda',
    statusTone: 'bg-accent-amber/20 text-accent-amber',
  },
  {
    stage: '4-bosqich',
    task: "Moliyaviy va statistik tahlil imkoniyatlarini shakllantirish",
    result: 'Hisobot va monitoring tizimi ishlab chiqiladi',
    status: 'Rejada',
    statusTone: 'bg-accent-violet/15 text-accent-violet',
  },
]

export function Tasks() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600 dark:bg-white/5">
            Bitiruv ishining vazifalari
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl dark:text-white">
            Platformani ishlab chiqish bo&apos;yicha asosiy yo&apos;nalishlar
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-[0_18px_50px_-22px_rgba(15,23,42,0.18)] dark:bg-[color:var(--color-surface-card-dark)]">
          <div className="hidden grid-cols-12 gap-4 px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] sm:grid">
            <div className="col-span-2 rounded-xl bg-accent-amber px-3 py-2 text-center text-white">Bosqich</div>
            <div className="col-span-4 rounded-xl bg-accent-rose px-3 py-2 text-center text-white">Vazifa</div>
            <div className="col-span-4 rounded-xl bg-brand-500 px-3 py-2 text-center text-white">Amaliy natija</div>
            <div className="col-span-2 rounded-xl bg-accent-violet px-3 py-2 text-center text-white">Holat</div>
          </div>

          <div className="divide-y divide-ink-900/5 dark:divide-white/5">
            {rows.map((r) => (
              <div
                key={r.stage}
                className="grid items-center gap-3 px-6 py-5 transition hover:bg-brand-50/40 sm:grid-cols-12 sm:gap-4 dark:hover:bg-white/5"
              >
                <div className="sm:col-span-2">
                  <span className="text-sm font-bold text-ink-900 dark:text-white">{r.stage}</span>
                </div>
                <div className="text-sm text-ink-700 sm:col-span-4 dark:text-slate-200">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-ink-300 sm:hidden dark:text-slate-500">
                    Vazifa
                  </span>
                  {r.task}
                </div>
                <div className="text-sm text-ink-500 sm:col-span-4 dark:text-slate-400">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-ink-300 sm:hidden dark:text-slate-500">
                    Amaliy natija
                  </span>
                  {r.result}
                </div>
                <div className="sm:col-span-2 sm:text-center">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${r.statusTone}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {r.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
