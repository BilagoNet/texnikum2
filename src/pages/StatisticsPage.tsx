import { PageShell } from '../components/PageShell'
import { BarChart } from '../components/charts/BarChart'
import { LineChart } from '../components/charts/LineChart'
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
        <article className="card overflow-hidden p-5 sm:p-6 lg:col-span-2">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="text-base font-bold text-ink-900 dark:text-white sm:text-lg">
                Yo'nalishlar bo'yicha o'quvchilar taqsimoti
              </h2>
              <p className="text-xs text-ink-500 dark:text-slate-400">
                10 ta asosiy yo'nalish, jami {courseDistribution.reduce((s, c) => s + c.count, 0)} o'quvchi
              </p>
            </div>
            <IconBarChart size={20} className="shrink-0 text-brand-500" />
          </div>
          <ul className="mt-5 space-y-3">
            {courseDistribution.map((c) => {
              const max = Math.max(...courseDistribution.map((x) => x.count))
              return (
                <li key={c.name} className="grid grid-cols-[minmax(0,120px)_minmax(0,1fr)_40px] items-center gap-2 sm:grid-cols-[minmax(0,200px)_minmax(0,1fr)_60px] sm:gap-3">
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

        {/* Davomat (haftalik) */}
        <article className="card overflow-hidden p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="text-base font-bold text-ink-900 dark:text-white sm:text-lg">Davomat (haftalik)</h2>
              <p className="text-xs text-ink-500 dark:text-slate-400">Kun bo'yicha o'rtacha</p>
            </div>
            <IconPieChart size={20} className="shrink-0 text-accent-violet" />
          </div>
          <div className="mt-4">
            <BarChart
              data={attendanceByDay.map((d) => ({ label: d.d, value: d.v, highlight: d.v < 75 }))}
              height={208}
              gradient={{ from: '#10b981', to: '#4f5de4' }}
              highlightGradient={{ from: '#f5b23e', to: '#f0436e' }}
            />
          </div>
        </article>
      </section>

      {/* Automation stages */}
      <section className="card overflow-hidden p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-base font-bold text-ink-900 dark:text-white sm:text-lg">
              Avtomatlashtirish darajasi modullar bo'yicha
            </h2>
            <p className="text-xs text-ink-500 dark:text-slate-400">Avtomatik vs qo'lda bajariladigan ishlar nisbati</p>
          </div>
        </div>
        <ul className="mt-5 space-y-4">
          {automationStages.map((s) => (
            <li key={s.name}>
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
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
      <section className="card overflow-hidden p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-base font-bold text-ink-900 dark:text-white sm:text-lg">
              O'quvchilar soni dinamikasi
            </h2>
            <p className="text-xs text-ink-500 dark:text-slate-400">2025-2026 o'quv yili davomida</p>
          </div>
          <IconTrending size={20} className="shrink-0 text-accent-emerald" />
        </div>
        <div className="mt-4">
          <LineChart
            data={studentGrowth.map((d) => ({ label: d.m, value: d.v }))}
            color="#10b981"
            height={240}
            showValues
          />
        </div>
      </section>
    </PageShell>
  )
}
