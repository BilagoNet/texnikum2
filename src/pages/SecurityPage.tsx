import { PageShell } from '../components/PageShell'
import { IconAlert, IconCheckCircle, IconCog, IconLock, IconShield } from '../components/Icon'

const items = [
  {
    title: 'Texnika xavfsizligi',
    desc: "Raqamli platformadan foydalanishda kompyuter, printer va tarmoq qurilmalaridan xavfsiz foydalanish muhim hisoblanadi. Elektr jihozlarining sozligini nazorat qilish va texnik nosozliklarda mutaxassisga murojaat qilish zarur.",
    icon: <IconShield size={22} />,
    color: 'text-brand-500',
    bg: 'bg-brand-50 dark:bg-brand-500/10',
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
    desc: "Platformadagi o'quvchilar, o'qituvchilar va to'lov ma'lumotlarini himoyalash hamda ruxsatsiz kirishlarning oldini olish muhim hisoblanadi.",
    icon: <IconLock size={22} />,
    color: 'text-accent-violet',
    bg: 'bg-accent-violet/10',
  },
]

const checks = [
  { ok: true, label: 'SSL/TLS shifrlash faol' },
  { ok: true, label: 'Foydalanuvchi rollari va ruxsatlar' },
  { ok: true, label: "Kunlik avtomatik zaxira (backup)" },
  { ok: true, label: '2FA — ikki bosqichli autentifikatsiya' },
  { ok: false, label: 'IP-cheklov ro\'yxati (sozlanmagan)' },
  { ok: true, label: 'Audit jurnali yuritiladi' },
]

export function SecurityPage() {
  return (
    <PageShell
      eyebrow="Xavfsizlik"
      title="Raqamli platformadan xavfsiz foydalanish"
      subtitle="Platformadan xavfsiz va samarali foydalanish shartlari hamda tizim xavfsizligi holati."
    >
      <section className="grid gap-5 md:grid-cols-3">
        {items.map((it) => (
          <article key={it.title} className="card p-6">
            <div className={`grid h-12 w-12 place-items-center rounded-2xl ${it.bg} ${it.color}`}>{it.icon}</div>
            <h3 className="mt-4 text-lg font-bold text-ink-900 dark:text-white">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-slate-400">{it.desc}</p>
          </article>
        ))}
      </section>

      <section className="card p-6">
        <h2 className="text-base font-bold text-ink-900 dark:text-white">Xavfsizlik tekshiruvi (audit)</h2>
        <p className="text-xs text-ink-500 dark:text-slate-400">
          Tizimning xavfsizlik sozlamalarining oxirgi avtomatik holati
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {checks.map((c) => (
            <li
              key={c.label}
              className={`flex items-center gap-3 rounded-2xl p-4 ${
                c.ok ? 'bg-accent-emerald/10' : 'bg-accent-rose/10'
              }`}
            >
              <span
                className={`grid h-9 w-9 place-items-center rounded-full ${
                  c.ok ? 'bg-accent-emerald text-white' : 'bg-accent-rose text-white'
                }`}
              >
                {c.ok ? <IconCheckCircle size={16} /> : <IconAlert size={16} />}
              </span>
              <span className="text-sm font-medium text-ink-900 dark:text-white">{c.label}</span>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  )
}
