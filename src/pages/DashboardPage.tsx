import { PageShell } from '../components/PageShell'
import { BarChart } from '../components/charts/BarChart'
import { Donut } from '../components/charts/Donut'
import { LineChart } from '../components/charts/LineChart'
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
        <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-violet px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_30px_-10px_rgba(79,93,228,0.6)] transition hover:-translate-y-0.5">
          <IconRocket size={14} /> Yangi hisobot
        </button>
      }
    >
      {/* KPI Grid */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k) => (
          <article key={k.label} className="card p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-slate-400">
                {k.label}
              </div>
              <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl text-white ${k.color}`}>
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
        <article className="card overflow-hidden p-5 sm:p-6 lg:col-span-2">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="text-base font-bold text-ink-900 dark:text-white sm:text-lg">
                O'quvchilar o'sish dinamikasi
              </h2>
              <p className="text-xs text-ink-500 dark:text-slate-400">So'nggi oylar kesimidagi o'sish grafigi</p>
            </div>
            <IconBarChart size={20} className="shrink-0 text-brand-500" />
          </div>
          <div className="mt-4">
            <LineChart data={studentGrowth.map((d) => ({ label: d.m, value: d.v }))} color="#4f5de4" height={220} />
          </div>
        </article>

        <article className="card overflow-hidden p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="text-base font-bold text-ink-900 dark:text-white sm:text-lg">To'lovlar monitoringi</h2>
              <p className="text-xs text-ink-500 dark:text-slate-400">To'langan to'lovlar va qarzdorlik ulushi</p>
            </div>
          </div>
          <div className="mt-4">
            <Donut
              data={paymentSplit}
              center={{
                value: paymentSplit[0] ? `${paymentSplit[0].value}%` : '0%',
                sub: paymentSplit[0]?.label ?? '',
              }}
            />
          </div>
          <ul className="mt-4 space-y-2">
            {paymentSplit.map((p) => (
              <li key={p.label} className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-ink-700 dark:text-slate-300">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: p.color }} />
                  {p.label}
                </span>
                <span className="font-bold text-ink-900 dark:text-white">{p.value}%</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      {/* Monthly revenue */}
      <section className="card overflow-hidden p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-base font-bold text-ink-900 dark:text-white sm:text-lg">Oylik to'lov tushumi</h2>
            <p className="text-xs text-ink-500 dark:text-slate-400">Mln so'mda · 2026-yil</p>
          </div>
        </div>
        <div className="mt-4">
          <BarChart
            data={monthlyRevenue.map((d) => ({ label: d.m, value: d.v, highlight: d.m === 'May' }))}
            height={220}
          />
        </div>
      </section>
    </PageShell>
  )
}
