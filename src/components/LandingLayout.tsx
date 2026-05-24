import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

/**
 * Landing layout — public marketing/landing pahaling. Brand'ga mos rangli
 * gradient backgrounds bilan yorug' fonni majburiy ushlab turamiz, lekin
 * matn rangi global theme'ga moslashadi (foydalanuvchi to'liq dark mode
 * tanlasa, dashboard'da sezadi).
 */
export function LandingLayout() {
  return (
    <div className="landing-shell min-h-screen bg-surface text-ink-900">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
