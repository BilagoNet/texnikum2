import { useElementSize } from './useElementSize'

export interface BarPoint {
  label: string
  value: number
  highlight?: boolean
}

interface BarChartProps {
  data: BarPoint[]
  height?: number
  /** Bar gradient yoki solid */
  gradient?: { from: string; to: string }
  highlightGradient?: { from: string; to: string }
  showValues?: boolean
}

/**
 * Mukammal responsive vertical bar chart. Container kengligini kuzatadi va
 * bar yumshoq scale qiladi. Mobilda labelni step bilan ko'rsatadi.
 */
export function BarChart({
  data,
  height = 224,
  gradient = { from: '#8b5cf6', to: '#4f5de4' },
  highlightGradient = { from: '#f0436e', to: '#8b5cf6' },
  showValues = true,
}: BarChartProps) {
  const [ref, { width: cw }] = useElementSize<HTMLDivElement>()
  const w = Math.max(cw || 320, 220)
  const h = height
  const padL = 8
  const padR = 8
  const padT = 22
  const padB = 28
  const innerW = w - padL - padR
  const innerH = h - padT - padB
  const max = Math.max(...data.map((d) => d.value))

  // Bar/gap nisbati container kengligiga moslab
  const slot = innerW / data.length
  const barW = Math.max(slot * 0.6, 6)
  const gap = slot - barW

  // Mobilda har bir labelni emas, har 2-3-chisini ko'rsatamiz
  const labelStep = innerW < 320 ? 3 : innerW < 480 ? 2 : 1

  const gradId = `grad-bar-${gradient.from.replace('#', '')}`
  const hlGradId = `grad-bar-hl-${highlightGradient.from.replace('#', '')}`

  return (
    <div ref={ref} className="w-full" style={{ minHeight: h }}>
      {cw > 0 && (
        <svg viewBox={`0 0 ${w} ${h}`} className="block h-auto w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id={gradId} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={gradient.from} />
              <stop offset="100%" stopColor={gradient.to} />
            </linearGradient>
            <linearGradient id={hlGradId} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={highlightGradient.from} />
              <stop offset="100%" stopColor={highlightGradient.to} />
            </linearGradient>
          </defs>
          {data.map((d, i) => {
            const x = padL + i * slot + gap / 2
            const barH = (d.value / max) * innerH
            const y = padT + innerH - barH
            const showLabel = i % labelStep === 0 || i === data.length - 1
            return (
              <g key={i}>
                <rect
                  x={x}
                  y={y}
                  width={barW}
                  height={barH}
                  rx={Math.min(barW / 2, 6)}
                  fill={d.highlight ? `url(#${hlGradId})` : `url(#${gradId})`}
                  opacity={d.highlight ? 1 : 0.85}
                />
                {showValues && (
                  <text
                    x={x + barW / 2}
                    y={y - 6}
                    textAnchor="middle"
                    style={{ fontSize: 9, fontWeight: 700, fill: 'currentColor' }}
                  >
                    {d.value}
                  </text>
                )}
                {showLabel && (
                  <text
                    x={x + barW / 2}
                    y={h - 8}
                    textAnchor="middle"
                    style={{ fontSize: 9, fill: 'currentColor', opacity: 0.6 }}
                  >
                    {d.label}
                  </text>
                )}
              </g>
            )
          })}
        </svg>
      )}
    </div>
  )
}
