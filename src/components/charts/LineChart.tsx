import { useElementSize } from './useElementSize'

export interface LinePoint {
  label: string
  value: number
}

interface LineChartProps {
  data: LinePoint[]
  color?: string
  height?: number // 'design' balandlik (responsive scale qiladi)
  fillGradient?: boolean
  showValues?: boolean
}

/**
 * 100% width container ichidagi responsive line chart.
 * SVG container kengligini ResizeObserver orqali kuzatadi va shu o'lchamga
 * mos koordinatalarda chiziladi. min-width yo'q — har qanday viewport'da
 * sig'adi va overflow chiqarmaydi.
 */
export function LineChart({
  data,
  color = '#4f5de4',
  height = 220,
  fillGradient = true,
  showValues = false,
}: LineChartProps) {
  const [ref, { width: cw }] = useElementSize<HTMLDivElement>()
  const w = Math.max(cw || 320, 220)
  const h = height
  const padL = 36
  const padR = 16
  const padT = 16
  const padB = 28
  const innerW = w - padL - padR
  const innerH = h - padT - padB

  const values = data.map((d) => d.value)
  const max = Math.max(...values)
  const min = Math.min(...values)
  const span = max - min || 1

  // Mobile uchun har bir nuqtaga label ko'rsatish o'rniga 'step' beriladi
  const labelStep = innerW < 360 ? Math.ceil(data.length / 4) : innerW < 520 ? Math.ceil(data.length / 6) : 1

  const pts = data.map((d, i) => ({
    x: padL + (i * innerW) / (data.length - 1),
    y: padT + ((max - d.value) * innerH) / span,
  }))
  const path = pts.reduce(
    (acc, p, i) =>
      acc +
      (i === 0
        ? `M ${p.x} ${p.y}`
        : ` C ${pts[i - 1].x + innerW / data.length / 2} ${pts[i - 1].y}, ${p.x - innerW / data.length / 2} ${p.y}, ${p.x} ${p.y}`),
    '',
  )
  const area = `${path} L ${pts[pts.length - 1].x} ${padT + innerH} L ${pts[0].x} ${padT + innerH} Z`
  const gridY = [0, 1, 2, 3]
  const gradId = `grad-line-${color.replace('#', '')}`

  return (
    <div ref={ref} className="w-full" style={{ minHeight: h }}>
      {cw > 0 && (
        <svg viewBox={`0 0 ${w} ${h}`} className="block h-auto w-full" preserveAspectRatio="none">
          {fillGradient && (
            <defs>
              <linearGradient id={gradId} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity="0.35" />
                <stop offset="100%" stopColor={color} stopOpacity="0" />
              </linearGradient>
            </defs>
          )}
          {gridY.map((i) => {
            const y = padT + (innerH * i) / (gridY.length - 1)
            const v = Math.round(max - (span * i) / (gridY.length - 1))
            return (
              <g key={i}>
                <line x1={padL} x2={w - padR} y1={y} y2={y} stroke="rgba(148,163,184,0.2)" strokeDasharray="3 4" />
                <text x={padL - 6} y={y + 3} textAnchor="end" style={{ fontSize: 10, fill: 'currentColor', opacity: 0.55 }}>
                  {v}
                </text>
              </g>
            )
          })}
          {fillGradient && <path d={area} fill={`url(#${gradId})`} />}
          <path d={path} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
          {pts.map((p, i) => {
            const showLabel = i % labelStep === 0 || i === data.length - 1
            return (
              <g key={i}>
                <circle cx={p.x} cy={p.y} r="4.5" fill="#fff" stroke={color} strokeWidth="2.5" />
                {showValues && (
                  <text x={p.x} y={p.y - 10} textAnchor="middle" style={{ fontSize: 10, fontWeight: 700, fill: 'currentColor' }}>
                    {data[i].value}
                  </text>
                )}
                {showLabel && (
                  <text
                    x={p.x}
                    y={h - 8}
                    textAnchor="middle"
                    style={{ fontSize: 10, fill: 'currentColor', opacity: 0.6 }}
                  >
                    {data[i].label}
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
