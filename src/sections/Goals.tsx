import { IconChart, IconDevice, IconTarget } from '../components/Icon'

const goals = [
  {
    title: 'Boshqaruv samaradorligi',
    desc: "Texnikum boshqaruv tizimini takomillashtirish va boshqaruv samaradorligini oshirish.",
    icon: <IconTarget size={28} />,
    accent: 'text-accent-amber',
    bg: 'bg-accent-amber/15',
  },
  {
    title: 'Raqamli platforma',
    desc: "Raqamli texnologiyalar asosida o'quv markazlari faoliyatini avtomatlashtirish.",
    icon: <IconDevice size={28} />,
    accent: 'text-accent-violet',
    bg: 'bg-accent-violet/15',
  },
  {
    title: 'Iqtisodiy rivojlanish',
    desc: "Moliyaviy hisobotlar va statistik tahlil orqali iqtisodiy samaradorlikni oshirish.",
    icon: <IconChart size={28} />,
    accent: 'text-accent-rose',
    bg: 'bg-accent-rose/15',
  },
]

export function Goals() {
  return (
    <section id="goals" className="relative overflow-hidden bg-brand-500 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-accent-violet/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
            Bitiruv ishining maqsadi
          </span>
          <h2 className="mt-5 text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Bitiruv ishining maqsadi
          </h2>
          <p className="mt-5 text-balance text-base text-white/85">
            Bitiruv ishida o&apos;quv markazlari faoliyatini raqamli texnologiyalar asosida avtomatlashtirish,
            o&apos;quvchilar va o&apos;qituvchilar hisobini yuritish, dars jadvali, to&apos;lovlar, moliyaviy
            hisobotlar va statistik tahlillarni yagona platformada boshqarish maqsad qilingan.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {goals.map((g) => (
            <article
              key={g.title}
              className="group relative overflow-hidden rounded-3xl bg-white p-7 text-ink-900 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.4)] transition hover:-translate-y-1 hover:shadow-[0_40px_90px_-30px_rgba(0,0,0,0.45)]"
            >
              <div className={`grid h-14 w-14 place-items-center rounded-2xl ${g.bg} ${g.accent}`}>{g.icon}</div>
              <h3 className="mt-6 text-xl font-bold">{g.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">{g.desc}</p>
              <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-brand-50 opacity-0 transition group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
