interface DonutSlice {
  label: string
  value: number
  color: string
}

interface DonutProps {
  data: DonutSlice[]
  center?: { value: string; sub?: string }
  size?: number // SVG ichki coord (preserveAspectRatio="xMidYMid meet" bilan scale qiladi)
  thickness?: number
}

/**
 * Aspect-square donut chart — har qanday container kengligida ham aspect
 * saqlaydi va overflow chiqarmaydi. Markaziy label optional.
 */
export function Donut({ data, center, size = 120, thickness = 14 }: DonutProps) {
  const r = (size - thickness) / 2 - 2
  const c = 2 * Math.PI * r
  const total = data.reduce((s, d) => s + d.value, 0) || 1
  let offset = 0

  return (
    <div className="mx-auto aspect-square w-full max-w-[200px]">
      <svg viewBox={`0 0 ${size} ${size}`} className="h-full w-full -rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(148,163,184,0.15)" strokeWidth={thickness} />
        {data.map((d) => {
          const length = (d.value / total) * c
          const el = (
            <circle
              key={d.label}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={d.color}
              strokeWidth={thickness}
              strokeDasharray={`${length} ${c - length}`}
              strokeDashoffset={-offset}
              strokeLinecap="butt"
            />
          )
          offset += length
          return el
        })}
        {center && (
          <g className="rotate-90" style={{ transformOrigin: `${size / 2}px ${size / 2}px` }}>
            <text
              x={size / 2}
              y={size / 2 - 2}
              textAnchor="middle"
              style={{ fontSize: size * 0.16, fontWeight: 800, fill: 'currentColor' }}
            >
              {center.value}
            </text>
            {center.sub && (
              <text
                x={size / 2}
                y={size / 2 + size * 0.14}
                textAnchor="middle"
                style={{ fontSize: size * 0.08, fill: 'currentColor', opacity: 0.6 }}
              >
                {center.sub}
              </text>
            )}
          </g>
        )}
      </svg>
    </div>
  )
}
