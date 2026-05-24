export type TxnStatus = "To'langan" | 'Kutilmoqda' | 'Bekor qilindi'
export type TxnMethod = 'Click' | 'Payme' | 'Naqd' | 'Bank o\'tkazma'

export interface Payment {
  id: string
  studentId: string
  studentName: string
  group: string
  amount: number
  date: string
  method: TxnMethod
  status: TxnStatus
}

import { students } from './students'

function fmtDate(d: Date) {
  return d.toISOString().slice(0, 10)
}

function rng(seed: number) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

const r = rng(101)
const methods: TxnMethod[] = ['Click', 'Payme', 'Naqd', "Bank o'tkazma"]
const statuses: TxnStatus[] = ["To'langan", 'Kutilmoqda', 'Bekor qilindi']
const weights = [0.78, 0.18, 0.04]

const today = new Date('2026-05-25T12:00:00Z')

export const payments: Payment[] = Array.from({ length: 36 }, (_, i) => {
  const s = students[Math.floor(r() * students.length)]
  const back = Math.floor(r() * 60)
  const date = new Date(today)
  date.setDate(today.getDate() - back)
  const rs = r()
  let status: TxnStatus = "To'langan"
  let acc = 0
  for (let k = 0; k < statuses.length; k++) {
    acc += weights[k]
    if (rs <= acc) {
      status = statuses[k]
      break
    }
  }
  return {
    id: `TX-${(2050 + i).toString()}`,
    studentId: s.id,
    studentName: s.fullName,
    group: s.group,
    amount: (12 + Math.floor(r() * 30)) * 100000,
    date: fmtDate(date),
    method: methods[Math.floor(r() * methods.length)],
    status,
  }
}).sort((a, b) => (a.date < b.date ? 1 : -1))

export const paymentSummary = {
  monthly: 142500000,
  monthlyTarget: 180000000,
  weekly: 38600000,
  debt: 27300000,
  collected: payments.filter((p) => p.status === "To'langan").length,
  pending: payments.filter((p) => p.status === 'Kutilmoqda').length,
}

// Oylik to'lov dinamikasi (mln so'mda)
export const monthlyRevenue = [
  { m: 'Yan', v: 98 },
  { m: 'Fev', v: 112 },
  { m: 'Mar', v: 105 },
  { m: 'Apr', v: 128 },
  { m: 'May', v: 142 },
  { m: 'Iyn', v: 138 },
  { m: 'Iyl', v: 122 },
  { m: 'Avg', v: 88 },
  { m: 'Sen', v: 156 },
  { m: 'Okt', v: 162 },
  { m: 'Noy', v: 148 },
  { m: 'Dek', v: 155 },
]
