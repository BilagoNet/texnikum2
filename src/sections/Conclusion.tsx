import { IconCheck, IconLightBulb } from '../components/Icon'

export function Conclusion() {
  return (
    <section className="relative overflow-hidden bg-brand-500 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <svg viewBox="0 0 600 200" className="absolute left-0 top-10 h-44 w-44 text-white/30" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M50 30h120v140H50zM70 60h80M70 90h80M70 120h60" />
        </svg>
        <IconLightBulb size={220} className="absolute right-6 bottom-6 text-white/20" />
      </div>

      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
          Xulosa
        </span>
        <h2 className="mt-5 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          XULOSA
        </h2>
        <p className="mt-6 text-balance text-base leading-relaxed text-white/90 sm:text-lg">
          Bitiruv ishida o&apos;quv markazlari faoliyatini iqtisodiy rivojlantirishga mo&apos;ljallangan raqamli platforma
          ishlab chiqish masalalari o&apos;rganildi. Tadqiqot davomida avtomatlashtirilgan boshqaruv tizimlari, axborotni
          qayta ishlash texnologiyalari va platforma modullari tahlil qilindi. Natijada o&apos;quvchilar,
          o&apos;qituvchilar, dars jadvali, to&apos;lovlar, hisobotlar va statistik ma&apos;lumotlarni yagona tizimda
          boshqarish imkonini beruvchi platforma modeli ishlab chiqildi.
        </p>

        <p className="mt-5 text-balance text-base leading-relaxed text-white/85 sm:text-lg">
          Mazkur platforma boshqaruv samaradorligini oshirish, vaqtni tejash va xizmat sifatini yaxshilashga xizmat qiladi.
        </p>

        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
          {[
            'Boshqaruv samaradorligini oshirish',
            'Vaqtni tejash',
            'Xizmat sifatini yaxshilash',
            "Yagona tizimda ma'lumotlarni boshqarish",
          ].map((t) => (
            <li key={t} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-brand-500">
                <IconCheck size={14} />
              </span>
              <span className="text-sm font-medium">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
