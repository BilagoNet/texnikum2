import { useState } from 'react'
import { PageShell } from '../components/PageShell'
import { IconArrowRight, IconGlobe, IconMail, IconMapPin, IconPhone } from '../components/Icon'

const cards = [
  { icon: <IconGlobe size={20} />, label: 'Web', value: 'texnikum.uz', tone: 'bg-accent-amber' },
  { icon: <IconMail size={20} />, label: 'Email', value: 'support@texnikum.uz', tone: 'bg-accent-rose' },
  { icon: <IconPhone size={20} />, label: 'Telefon', value: '+998 93 272 1331', tone: 'bg-brand-500' },
  { icon: <IconMapPin size={20} />, label: 'Manzil', value: 'Qarshi tumani 3-son texnikumi', tone: 'bg-accent-violet' },
]

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <PageShell
      eyebrow="Aloqa"
      title="E'tiboringiz uchun rahmat!"
      subtitle="Bitiruv ishini tinglaganingiz uchun tashakkur. Quyidagi aloqa kanallari orqali biz bilan bog'lanishingiz mumkin."
    >
      <section className="grid gap-6 lg:grid-cols-12">
        <div className="space-y-3 lg:col-span-5">
          {cards.map((c) => (
            <div
              key={c.label}
              className={`flex items-center gap-4 overflow-hidden rounded-2xl ${c.tone} pl-2 pr-5 py-2 text-white shadow-[0_18px_40px_-22px_rgba(15,23,42,0.35)] transition hover:-translate-y-0.5`}
            >
              <div className="grid h-11 w-11 place-items-center rounded-full bg-white/15 backdrop-blur">{c.icon}</div>
              <div className="flex-1">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">{c.label}</div>
                <div className="text-sm font-bold sm:text-base">{c.value}</div>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
            setTimeout(() => setSubmitted(false), 4000)
          }}
          className="card p-6 sm:p-8 lg:col-span-7"
        >
          <h3 className="text-xl font-bold text-ink-900 dark:text-white">Bizga yozing</h3>
          <p className="mt-1 text-sm text-ink-500 dark:text-slate-400">
            Forma orqali murojaat yuboring, biz tez orada javob beramiz.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Field label="Ismingiz" name="name" placeholder="Ism Familiya" />
            <Field label="Telefon raqam" name="phone" placeholder="+998 __ ___ __ __" type="tel" />
          </div>
          <Field label="Email" name="email" placeholder="example@mail.uz" type="email" className="mt-4" />
          <div className="mt-4">
            <label className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-slate-400">
              Xabar
            </label>
            <textarea
              required
              rows={4}
              placeholder="Savolingizni yozing…"
              className="mt-2 w-full resize-none rounded-2xl border border-ink-900/10 bg-surface px-4 py-3 text-sm focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-500/15 dark:border-white/10 dark:bg-white/5 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-violet px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_40px_-12px_rgba(79,93,228,0.7)] hover:-translate-y-0.5"
          >
            Yuborish <IconArrowRight size={16} />
          </button>

          {submitted && (
            <div className="mt-4 rounded-2xl bg-accent-emerald/15 px-4 py-3 text-sm font-semibold text-accent-emerald">
              Rahmat! Murojaatingiz qabul qilindi.
            </div>
          )}
        </form>
      </section>
    </PageShell>
  )
}

function Field({
  label,
  name,
  placeholder,
  type = 'text',
  className = '',
}: {
  label: string
  name: string
  placeholder: string
  type?: string
  className?: string
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:text-slate-400">
        {label}
      </label>
      <input
        id={name}
        name={name}
        required
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-ink-900/10 bg-surface px-4 py-3 text-sm focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-500/15 dark:border-white/10 dark:bg-white/5 dark:text-white"
      />
    </div>
  )
}
