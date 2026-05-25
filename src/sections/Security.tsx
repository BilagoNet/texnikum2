import { IconCog, IconLock, IconShield } from '../components/Icon'

const items = [
  {
    title: 'Texnika xavfsizligi',
    desc: "Raqamli platformadan foydalanishda kompyuter, printer va tarmoq qurilmalaridan xavfsiz foydalanish muhim. Elektr jihozlarining sozligini nazorat qilish zarur.",
    icon: <IconShield size={22} />,
    color: 'text-brand-500',
    bg: 'bg-brand-50',
  },
  {
    title: 'Ish joyi ergonomikasi',
    desc: "Kompyuter bilan ishlashda monitor masofasi, xona yorug'ligi va to'g'ri o'tirish holatiga amal qilish foydalanuvchi salomatligini saqlashga yordam beradi.",
    icon: <IconCog size={22} />,
    color: 'text-accent-amber',
    bg: 'bg-accent-amber/10',
  },
  {
    title: "Ma'lumotlar xavfsizligi",
    desc: "O'quvchilar, o'qituvchilar va to'lov ma'lumotlarini himoyalash hamda ruxsatsiz kirishlarning oldini olish muhim hisoblanadi.",
    icon: <IconLock size={22} />,
    color: 'text-accent-violet',
    bg: 'bg-accent-violet/10',
  },
]

export function Security() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-brand-100/60 via-white to-accent-violet/10 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.25)] sm:p-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600 dark:bg-white/10">
              Xavfsizlik talablari
            </span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl dark:text-white">
              Raqamli platformadan xavfsiz va samarali foydalanish shartlari
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {items.map((it) => (
              <article
                key={it.title}
                className="rounded-3xl bg-white p-6 shadow-[0_18px_50px_-22px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_-22px_rgba(15,23,42,0.25)] dark:bg-[color:var(--color-surface-card-dark)]"
              >
                <div className={`grid h-11 w-11 place-items-center rounded-2xl ${it.bg} ${it.color}`}>
                  {it.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink-900 dark:text-white">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-slate-400">{it.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
