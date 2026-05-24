import { Link } from 'react-router-dom'
import { IconArrowRight, IconBarChart, IconGrid, IconRocket } from '../components/Icon'
import { About } from '../sections/About'
import { Advantages } from '../sections/Advantages'
import { Conclusion } from '../sections/Conclusion'
import { Features } from '../sections/Features'
import { Goals } from '../sections/Goals'
import { Hero } from '../sections/Hero'
import { ProblemSolution } from '../sections/ProblemSolution'
import { Process } from '../sections/Process'
import { Results } from '../sections/Results'
import { Security } from '../sections/Security'
import { Tasks } from '../sections/Tasks'

export function HomePage() {
  return (
    <main>
      <Hero />

      {/* Call-to-action band: ko'rsatuvchi tizimga o'tish */}
      <section className="relative mx-auto -mt-12 max-w-7xl px-5 sm:-mt-16 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-accent-violet to-accent-rose p-6 text-white shadow-[0_30px_80px_-30px_rgba(79,93,228,0.5)] sm:p-8">
          <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15 backdrop-blur">
                <IconRocket size={24} />
              </div>
              <div>
                <h3 className="text-balance text-xl font-bold sm:text-2xl">
                  Tizimning ishchi versiyasini sinab ko'ring
                </h3>
                <p className="mt-1 text-sm text-white/85">
                  Dashboard, o'quvchilar bazasi, dars jadvali va to'lovlar — barchasi mock ma'lumotlar bilan.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-600 shadow-[0_14px_40px_-12px_rgba(255,255,255,0.4)] transition hover:-translate-y-0.5"
              >
                <IconGrid size={16} /> Dashboardni ochish
                <IconArrowRight size={14} />
              </Link>
              <Link
                to="/statistics"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                <IconBarChart size={16} /> Statistika
              </Link>
            </div>
          </div>
        </div>
      </section>

      <About />
      <ProblemSolution />
      <Goals />
      <Tasks />
      <Features />
      <Process />
      <Advantages />
      <Results />
      <Security />
      <Conclusion />
    </main>
  )
}
