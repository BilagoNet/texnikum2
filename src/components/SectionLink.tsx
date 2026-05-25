import type { ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface SectionLinkProps {
  /** Bosh sahifadagi bo'lim ID (masalan: 'about', 'features') */
  sectionId: string
  className?: string
  children: ReactNode
  onClick?: () => void
}

/**
 * Bosh sahifadagi bo'limga sakraydigan link.
 *
 * HashRouter ishlatayotganimiz uchun oddiy href="/#about" 404 beradi
 * (chunki hash router'da #about route sifatida talqin qilinadi).
 *
 * - Bosh sahifada bo'lsak: window.scrollTo bilan to'g'ridan-to'g'ri pozitsiyaga
 * - Boshqa sahifada bo'lsak: avval '/' ga o'tib, keyin scroll
 *
 * scrollIntoView o'rniga window.scrollTo + getBoundingClientRect ishlatamiz —
 * html'da overflow-x:hidden bo'lsa scrollIntoView ba'zi browserlarda buziladi.
 */
export function SectionLink({ sectionId, className, children, onClick }: SectionLinkProps) {
  const location = useLocation()
  const navigate = useNavigate()

  function scrollToSection(id: string) {
    const el = document.getElementById(id)
    if (!el) return
    const navOffset = 80 // fixed navbar balandligi
    const top = el.getBoundingClientRect().top + window.scrollY - navOffset
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
  }

  function handle(e: React.MouseEvent) {
    e.preventDefault()
    onClick?.()
    if (location.pathname !== '/') {
      navigate('/')
      // Sahifa render bo'lib bo'lguncha sal kutib turamiz
      setTimeout(() => scrollToSection(sectionId), 240)
    } else {
      scrollToSection(sectionId)
    }
  }

  return (
    <a href={`#${sectionId}`} onClick={handle} className={className}>
      {children}
    </a>
  )
}
