import { IconArrowRight, IconChart, IconClock, IconLightBulb, IconUsers } from '../components/Icon'

const steps = [
  {
    title: "Ma'lumotlarni yig'ish",
    desc: "O'quvchilar, o'qituvchilar, dars jadvali, to'lovlar va boshqa faoliyat ma'lumotlari tizimga kiritiladi.",
    icon: <IconUsers size={22} />,
    color: 'bg-accent-rose',
  },
  {
    title: "Ma'lumotlarni saqlash",
    desc: "Kiritilgan ma'lumotlar yagona ma'lumotlar bazasida tartibli va xavfsiz saqlanadi.",
    icon: <IconClock size={22} />,
    color: 'bg-accent-amber',
  },
  {
    title: 'Qayta ishlash',
    desc: "Platforma ma'lumotlarni avtomatik tahlil qiladi, hisobotlar va statistik ko'rsatkichlarni shakllantiradi.",
    icon: <IconChart size={22} />,
    color: 'bg-brand-500',
  },
  {
    title: 'Natija va tahlil',
    desc: "Rahbariyat moliyaviy holat, o'quv jarayoni va samaradorlik bo'yicha tezkor qaror qabul qiladi.",
    icon: <IconLightBulb size={22} />,
    color: 'bg-accent-emerald',
  },
]

export function Process() {
  return (
    <section id="process" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
            Texnologik jarayon
          </span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            Axborotni qayta ishlash texnologik jarayoni
          </h2>
          <p className="mt-4 text-balance text-base text-ink-500">
            Ma&apos;lumotdan boshqaruv qarorigacha bo&apos;lgan bosqichlar.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <article
                className={`relative h-full overflow-hidden rounded-3xl p-6 text-white shadow-[0_20px_60px_-25px_rgba(15,23,42,0.35)] ${s.color}`}
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 backdrop-blur">
                    {s.icon}
                  </div>
                  <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90">
                    {i + 1}-bosqich
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/90">{s.desc}</p>
              </article>
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white text-brand-500 shadow-[0_10px_25px_-12px_rgba(15,23,42,0.35)] lg:grid">
                  <IconArrowRight size={16} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-brand-100 bg-white p-6 text-center shadow-[0_18px_50px_-22px_rgba(15,23,42,0.18)]">
          <p className="text-balance text-base font-semibold text-brand-600">
            Texnologik jarayonni to&apos;g&apos;ri tashkil etish platformaning tezkor, aniq va samarali ishlashini
            ta&apos;minlaydi.
          </p>
        </div>
      </div>
    </section>
  )
}
