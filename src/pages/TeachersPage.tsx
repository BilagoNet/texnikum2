import { useMemo, useState } from 'react'
import { PageShell } from '../components/PageShell'
import { SearchInput } from '../components/SearchInput'
import { IconCalendar, IconPhone, IconPlus, IconUsers } from '../components/Icon'
import { teacherSummary, teachers } from '../data/teachers'

const statusStyle: Record<string, string> = {
  Faol: 'bg-accent-emerald/15 text-accent-emerald',
  "Yuklama to'liq": 'bg-accent-violet/15 text-accent-violet',
  "Ta'tilda": 'bg-accent-amber/15 text-accent-amber',
}

export function TeachersPage() {
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase()
    if (!t) return teachers
    return teachers.filter(
      (x) => x.fullName.toLowerCase().includes(t) || x.subject.toLowerCase().includes(t) || x.id.toLowerCase().includes(t),
    )
  }, [q])

  return (
    <PageShell
      eyebrow="O'qituvchilar"
      title="O'qituvchilar bazasi va yuklama nazorati"
      subtitle="Fanlar, telefon raqamlari, guruhlar soni va haftalik dars yuklamasi bo'yicha boshqaruv kartalari."
      actions={
        <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-violet px-3 py-2 text-xs font-semibold text-white">
          <IconPlus size={14} /> Yangi o'qituvchi
        </button>
      }
    >
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Mini icon={<IconUsers size={18} />} tone="bg-brand-500" label="Jami o'qituvchilar" value={teacherSummary.total} />
        <Mini icon={<IconCalendar size={18} />} tone="bg-accent-emerald" label="Faol" value={teacherSummary.active} />
        <Mini icon={<IconUsers size={18} />} tone="bg-accent-violet" label="Yuklama to'liq" value={teacherSummary.full} />
        <Mini icon={<IconCalendar size={18} />} tone="bg-accent-amber" label="O'rtacha yuklama" value={`${teacherSummary.averageLoad} soat`} />
      </section>

      <section className="card p-4 sm:p-6">
        <SearchInput
          value={q}
          onChange={setQ}
          placeholder="F.I.SH, fan yoki ID bo'yicha qidirish"
        />
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((t) => (
          <article key={t.id} className="card p-5">
            <div className="flex items-start gap-3">
              <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${t.color} text-sm font-bold text-white`}>
                {t.initials}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-ink-900 dark:text-white">{t.fullName}</h3>
                <p className="text-xs font-medium text-brand-500 dark:text-brand-300">{t.subject}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-ink-500 dark:text-slate-400">
              <IconPhone size={14} className="text-ink-300" />
              {t.phone}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="rounded-2xl bg-brand-50 p-3 dark:bg-white/5">
                <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-slate-400">
                  <IconUsers size={12} /> Guruhlar
                </div>
                <div className="mt-1 text-xl font-extrabold text-ink-900 dark:text-white">{t.groups}</div>
              </div>
              <div className="rounded-2xl bg-accent-violet/15 p-3 dark:bg-accent-violet/10">
                <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-violet">
                  <IconCalendar size={12} /> Yuklama
                </div>
                <div className="mt-1 text-xl font-extrabold text-ink-900 dark:text-white">{t.load}</div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-ink-500 dark:text-slate-400">Haftalik dars yuklamasi</span>
                <span className="font-bold text-ink-900 dark:text-white">{t.rating}%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-ink-900/10 dark:bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent-rose via-accent-amber to-accent-violet"
                  style={{ width: `${t.rating}%` }}
                />
              </div>
            </div>

            <div className="mt-4">
              <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[t.status]}`}>
                <span className="h-1.5 w-1.5 rounded-full bg-current" /> {t.status}
              </span>
            </div>
          </article>
        ))}
        {filtered.length === 0 && (
          <div className="card col-span-full p-10 text-center text-sm text-ink-500 dark:text-slate-400">Hech narsa topilmadi</div>
        )}
      </section>
    </PageShell>
  )
}

function Mini({ icon, tone, label, value }: { icon: React.ReactNode; tone: string; label: string; value: string | number }) {
  return (
    <article className="card flex items-center gap-3 p-4">
      <div className={`grid h-12 w-12 place-items-center rounded-2xl text-white ${tone}`}>{icon}</div>
      <div>
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-slate-400">{label}</div>
        <div className="text-xl font-extrabold text-ink-900 dark:text-white">{value}</div>
      </div>
    </article>
  )
}
