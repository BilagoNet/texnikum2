import { IconLightBulb, IconQuote, IconTarget, IconUsers } from '../components/Icon'

const cards = [
  {
    title: "Ob'ekti",
    desc: "Qarshi tumani 3-son texnikumi faoliyati va boshqaruv tizimi. Tadqiqotda texnikumdagi o'quv jarayoni, o'quvchi va o'qituvchilar hisobi, dars jadvali, to'lovlar hamda boshqaruv jarayonlarini raqamli platforma orqali takomillashtirish masalalari o'rganiladi.",
    icon: <IconUsers size={22} />,
    tone: 'from-accent-violet to-brand-500',
  },
  {
    title: 'Predmeti',
    desc: "O'quv markazlari faoliyatini rivojlantirishda raqamli platformalardan foydalanish orqali boshqaruv va iqtisodiy samaradorlikni oshirish jarayoni. Avtomatlashtirish, moliyaviy nazorat, statistik tahlil va yagona ma'lumotlar bazasini shakllantirish asosiy yo'nalish hisoblanadi.",
    icon: <IconTarget size={22} />,
    tone: 'from-brand-500 to-brand-700',
  },
  {
    title: "Tadqiqotning asosiy g'oyasi",
    desc: "Tadqiqot texnikum faoliyatini raqamli platforma orqali boshqarish, o'quv jarayonlarini avtomatlashtirish va iqtisodiy samaradorlikni oshirishga qaratilgan.",
    icon: <IconLightBulb size={22} />,
    tone: 'from-white to-white text-ink-900',
    isWhite: true,
  },
]

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
              Bitiruv malakaviy ishi
            </span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              Bitiruv ishining{' '}
              <span className="gradient-text">ob&apos;ekti va predmeti</span>
            </h2>
            <p className="mt-5 text-balance text-base leading-relaxed text-ink-500">
              Tadqiqot Qarshi tumani 3-son texnikumi misolida o&apos;quv markazlari faoliyatini iqtisodiy
              rivojlantirishga mo&apos;ljallangan raqamli platforma ishlab chiqish masalalarini qamrab oladi.
            </p>

            <div className="mt-8 rounded-3xl bg-brand-500 p-6 text-white shadow-[0_30px_80px_-30px_rgba(79,93,228,0.5)] sm:p-7">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/15">
                  <IconQuote size={20} />
                </div>
                <div>
                  <p className="text-balance text-sm font-medium leading-relaxed text-white/95 sm:text-base">
                    Ta&apos;limga kiritilgan har bir sarmoya — bu eng avvalo inson kapitaliga, demak,
                    kelajakka qilingan investitsiyadir. Har bir hududda zamonaviy bilim markazlarini yaratish
                    — bu bugungi kunning talabidir.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    Shavkat Mirziyoyev
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:col-span-7">
            {cards.map((c) => (
              <article
                key={c.title}
                className={`relative overflow-hidden rounded-3xl p-6 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)] sm:p-7 ${
                  c.isWhite
                    ? 'bg-white text-ink-900'
                    : `bg-gradient-to-br ${c.tone} text-white`
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${
                      c.isWhite ? 'bg-brand-50 text-brand-500' : 'bg-white/15 text-white'
                    }`}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${c.isWhite ? 'text-ink-900' : 'text-white'}`}>
                      {c.title}
                    </h3>
                    <p
                      className={`mt-2 text-sm leading-relaxed ${
                        c.isWhite ? 'text-ink-500' : 'text-white/90'
                      }`}
                    >
                      {c.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
