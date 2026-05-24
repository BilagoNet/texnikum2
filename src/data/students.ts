export type PaymentStatus = "To'langan" | 'Qisman' | 'Qarzdor'
export type AttendanceState = 'high' | 'medium' | 'low'

export interface Student {
  id: string
  fullName: string
  course: string
  group: string
  phone: string
  paymentStatus: PaymentStatus
  attendance: number // 0-100
  enrollmentYear: number
}

const firstNamesM = [
  'Abdullayev', 'Rasulov', 'Yusupov', 'Karimov', 'Tursunov', 'Norboyev', 'Saidov', 'Mamatov',
  'Xolmatov', 'Rahimov', 'Ergashev', 'Toshev', 'Qodirov', 'Ibragimov', 'Sharipov', 'Sobirov',
  'Nazarov', 'Bekmurodov', 'Yo\'ldoshev', 'Xudoyberdiyev',
]
const firstNamesF = [
  'Norboyeva', 'Tursunova', 'Saidova', 'Yusupova', 'Karimova', 'Mamatova', 'Xolmatova',
  'Rahimova', 'Ergasheva', 'Tosheva', 'Qodirova', 'Ibragimova', 'Sharipova', 'Sobirova',
]
const namesM = ['Javohir', 'Behruz', 'Sardor', 'Asror', 'Diyorbek', 'Jasur', 'Otabek', 'Bobur', 'Shaxzod', 'Ulug\'bek', 'Akmal', 'Komil', 'Davron', 'Ravshan', 'Sirojiddin']
const namesF = ['Madina', 'Maftuna', 'Dilnoza', 'Sevara', 'Nilufar', 'Shahnoza', 'Gulchehra', 'Robiya', 'Iroda', 'Yulduz', 'Shahrizoda', 'Dilfuza']
const fathersM = ['Shavkat', 'Olim', 'Akmal', 'Bahodir', 'Rustam', 'Ulug\'bek', 'Komil', 'Sirojiddin', 'Davron', 'Erkin']

const courses = [
  'Axborot tizimlari',
  'Buxgalteriya hisobi',
  'Elektr jihozlari',
  'Tikuvchilik texnologiyasi',
  'Avtomobilsozlik',
  'Pedagogika',
  'Kompyuter tarmoqlari',
  'Bank ishi',
  'Marketing',
  'Qishloq xo\'jaligi',
]

const groupPrefix: Record<string, string> = {
  'Axborot tizimlari': 'AT',
  'Buxgalteriya hisobi': 'BH',
  'Elektr jihozlari': 'EJ',
  'Tikuvchilik texnologiyasi': 'TT',
  Avtomobilsozlik: 'AS',
  Pedagogika: 'MT',
  'Kompyuter tarmoqlari': 'KT',
  'Bank ishi': 'BI',
  Marketing: 'MK',
  'Qishloq xo\'jaligi': 'QX',
}

function rng(seed: number) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

const r = rng(42)

const statuses: PaymentStatus[] = ["To'langan", 'Qisman', 'Qarzdor']

export const students: Student[] = Array.from({ length: 64 }, (_, i) => {
  const isMale = r() > 0.45
  const course = courses[Math.floor(r() * courses.length)]
  const gnum = (10 + Math.floor(r() * 30)).toString()
  let surname: string
  let name: string
  let last: string
  if (isMale) {
    surname = firstNamesM[Math.floor(r() * firstNamesM.length)]
    name = namesM[Math.floor(r() * namesM.length)]
    last = `${fathersM[Math.floor(r() * fathersM.length)]} o'g'li`
  } else {
    surname = firstNamesF[Math.floor(r() * firstNamesF.length)]
    name = namesF[Math.floor(r() * namesF.length)]
    last = `${fathersM[Math.floor(r() * fathersM.length)]} qizi`
  }
  return {
    id: `ST-${(1001 + i).toString()}`,
    fullName: `${surname} ${name} ${last}`,
    course,
    group: `${groupPrefix[course]}-${gnum}`,
    phone: `+998 ${90 + Math.floor(r() * 8)} ${100 + Math.floor(r() * 800)} ${10 + Math.floor(r() * 80)} ${10 + Math.floor(r() * 80)}`,
    paymentStatus: statuses[Math.floor(r() * 3)],
    attendance: 55 + Math.floor(r() * 45),
    enrollmentYear: 2022 + Math.floor(r() * 4),
  }
})

export const studentSummary = {
  total: students.length * 19 + 4, // 1240
  groups: 42,
  courses: courses.length,
  paid: students.filter((s) => s.paymentStatus === "To'langan").length,
  partial: students.filter((s) => s.paymentStatus === 'Qisman').length,
  debt: students.filter((s) => s.paymentStatus === 'Qarzdor').length,
}
