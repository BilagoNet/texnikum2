import { IconGraduation, IconMail, IconMapPin, IconPhone } from './Icon'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-900 pt-16 pb-10 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-10 top-0 h-72 w-72 rounded-full bg-brand-500/40 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-accent-violet/30 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#top" className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-violet text-white">
                <IconGraduation size={22} />
              </span>
              <span className="leading-tight">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-300">
                  Texnikum
                </span>
                <span className="block text-base font-bold">Qarshi tumani 3-son</span>
              </span>
            </a>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              O&apos;quv markazlari faoliyatini iqtisodiy rivojlantirishga mo&apos;ljallangan raqamli platforma.
              Boshqaruv, hisobot va o&apos;quv jarayonini yagona tizimda yuritish imkonini beradi.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white/80">Navigatsiya</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><a href="#about" className="hover:text-white">Ob&apos;ekt va predmet</a></li>
              <li><a href="#goals" className="hover:text-white">Maqsad</a></li>
              <li><a href="#features" className="hover:text-white">Amaliy ahamiyat</a></li>
              <li><a href="#process" className="hover:text-white">Texnologik jarayon</a></li>
              <li><a href="#results" className="hover:text-white">Natijalar</a></li>
              <li><a href="#contact" className="hover:text-white">Aloqa</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-white/80">Kontaktlar</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
                  <IconPhone size={16} />
                </span>
                +998 93 272 1331
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
                  <IconMail size={16} />
                </span>
                support@texnikum.uz
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
                  <IconMapPin size={16} />
                </span>
                Qarshi tumani 3-son texnikumi
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Qarshi tumani 3-son texnikumi. Barcha huquqlar himoyalangan.
          </p>
          <p className="text-xs text-white/40">
            Bajardi: M.Sh. Kamoliddinov · Raqamli iqtisodiyot yo&apos;nalishi
          </p>
        </div>
      </div>
    </footer>
  )
}
