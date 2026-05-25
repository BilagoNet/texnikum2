import { useEffect, useRef, useState } from 'react'

/**
 * Element o'lchamini kuzatuvchi hook. ResizeObserver orqali ishlaydi.
 *
 * Foydalanish:
 *   const [ref, size] = useElementSize<HTMLDivElement>()
 *   <div ref={ref}>chart width={size.width}</div>
 */
export function useElementSize<T extends HTMLElement>(): [
  React.RefObject<T | null>,
  { width: number; height: number },
] {
  const ref = useRef<T>(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const node = ref.current
    if (!node) return
    // Boshlang'ich o'lcham
    setSize({ width: node.clientWidth, height: node.clientHeight })
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const cr = entry.contentRect
        setSize({ width: cr.width, height: cr.height })
      }
    })
    ro.observe(node)
    return () => ro.disconnect()
  }, [])

  return [ref, size]
}
