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
 * Bu komponent agar bosh sahifada bo'lsak — to'g'ridan-to'g'ri scroll qiladi.
 * Boshqa sahifada bo'lsak — avval '/' ga o'tib, keyin scroll qiladi.
 */
export function SectionLink({ sectionId, className, children, onClick }: SectionLinkProps) {
  const location = useLocation()
  const navigate = useNavigate()

  function handle(e: React.MouseEvent) {
    e.preventDefault()
    onClick?.()
    const scroll = () => {
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    if (location.pathname !== '/') {
      navigate('/')
      // Sahifa render bo'lib bo'lguncha kichik kutish
      setTimeout(scroll, 200)
    } else {
      scroll()
    }
  }

  return (
    <a href={`#${sectionId}`} onClick={handle} className={className}>
      {children}
    </a>
  )
}
