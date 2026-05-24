import { useState } from 'react'
import { IconArrowRight, IconGlobe, IconMail, IconMapPin, IconPhone } from '../components/Icon'

const contactCards = [
  { icon: <IconGlobe size={20} />, label: 'Web', value: 'texnikum.uz', tone: 'bg-accent-amber' },
  { icon: <IconMail size={20} />, label: 'Email', value: 'support@texnikum.uz', tone: 'bg-accent-rose' },
  { icon: <IconPhone size={20} />, label: 'Telefon', value: '+998 93 272 1331', tone: 'bg-brand-500' },
  { icon: <IconMapPin size={20} />, label: 'Manzil', value: 'Qarshi tumani 3-son texnikumi', tone: 'bg-accent-violet' },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
              Aloqa
            </span>
            <h2 className="mt-4 text-balance text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl">
              E&apos;tiboringiz uchun <span className="gradient-text">rahmat!</span>
            </h2>
            <p className="mt-4 text-balance text-base text-ink-500">
              Bitiruv ishini tinglaganingiz uchun tashakkur. Quyidagi aloqa kanallari orqali biz bilan bog&apos;lanishingiz mumkin.
            </p>

            <ul className="mt-8 space-y-3">
              {contactCards.map((c) => (
                <li key={c.label} className="group">
                  <div
                    className={`flex items-center gap-4 overflow-hidden rounded-2xl ${c.tone} pl-2 pr-5 py-2 text-white shadow-[0_18px_40px_-22px_rgba(15,23,42,0.35)] transition hover:-translate-y-0.5`}
                  >
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-white/15 backdrop-blur">
                      {c.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                        {c.label}
                      </div>
                      <div className="text-sm font-bold sm:text-base">{c.value}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative lg:col-span-7">
            <div className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
                setTimeout(() => setSubmitted(false), 4000)
              }}
              className="relative rounded-3xl bg-white p-8 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25)] sm:p-10"
            >
              <h3 className="text-2xl font-bold text-ink-900">Bizga yozing</h3>
              <p className="mt-1 text-sm text-ink-500">Forma orqali murojaat yuboring, biz tez orada javob beramiz.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Ismingiz" name="name" placeholder="Ism Familiya" />
                <Field label="Telefon raqam" name="phone" placeholder="+998 __ ___ __ __" type="tel" />
              </div>
              <Field label="Email" name="email" placeholder="example@mail.uz" type="email" className="mt-4" />
              <div className="mt-4">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Xabar</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Savolingizni yozing…"
                  className="form-input mt-2 resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-violet px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_40px_-12px_rgba(79,93,228,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_50px_-16px_rgba(79,93,228,0.85)] sm:w-auto"
              >
                Yuborish
                <IconArrowRight size={16} />
              </button>

              {submitted && (
                <div className="mt-4 rounded-2xl bg-accent-emerald/15 px-4 py-3 text-sm font-semibold text-accent-emerald">
                  Rahmat! Murojaatingiz qabul qilindi.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
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
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
        {label}
      </label>
      <input
        id={name}
        name={name}
        required
        type={type}
        placeholder={placeholder}
        className="form-input mt-2"
      />
    </div>
  )
}
