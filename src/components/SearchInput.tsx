import { useEffect, useRef } from 'react'
import { IconClose, IconSearch } from './Icon'

interface SearchInputProps {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  autoFocus?: boolean
  className?: string
  size?: 'sm' | 'md'
}

/**
 * Standart qidiruv input — lupa va clear (×) tugmasi bilan.
 *
 * - Lupa har doim ko'rinadi (search input'lar uchun universal pattern)
 * - Matn yozilganda o'ng tomonda × tugmasi paydo bo'ladi (bir bosishda tozalanadi)
 * - Padding mos: cursor lupadan keyin to'g'ri pozitsiyada turadi
 * - Dark va light mode'da bir xil ishlaydi
 */
export function SearchInput({
  value,
  onChange,
  placeholder = 'Qidirish…',
  autoFocus = false,
  className = '',
  size = 'md',
}: SearchInputProps) {
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (autoFocus) ref.current?.focus()
  }, [autoFocus])

  const pad = size === 'sm' ? 'py-2 pl-9 pr-9 text-[13px]' : 'py-3 pl-11 pr-11 text-sm'
  const iconLeft = size === 'sm' ? 'left-3' : 'left-3.5'
  const iconRight = size === 'sm' ? 'right-2' : 'right-2.5'
  const iconSize = size === 'sm' ? 14 : 16

  return (
    <div className={`relative ${className}`}>
      <IconSearch
        size={iconSize}
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-ink-300 dark:text-slate-500 ${iconLeft}`}
        aria-hidden
      />
      <input
        ref={ref}
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`form-input ${pad}`}
        // Native search input'ning chrome 'x' tugmasini olib tashlaymiz (o'zimizniki bor)
        style={{ WebkitAppearance: 'none' as any }}
      />
      {value && (
        <button
          type="button"
          aria-label="Tozalash"
          onClick={() => {
            onChange('')
            ref.current?.focus()
          }}
          className={`absolute top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full bg-ink-900/5 text-ink-500 transition hover:bg-ink-900/10 hover:text-ink-900 dark:bg-white/10 dark:text-slate-300 dark:hover:bg-white/20 dark:hover:text-white ${iconRight}`}
        >
          <IconClose size={iconSize - 2} />
        </button>
      )}
    </div>
  )
}
