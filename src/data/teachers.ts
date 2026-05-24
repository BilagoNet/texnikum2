export interface Teacher {
  id: string
  fullName: string
  initials: string
  subject: string
  phone: string
  groups: number
  load: number // hours per week
  status: 'Faol' | "Yuklama to'liq" | "Ta'tilda"
  rating: number // 0-100
  color: string // tailwind gradient string
}

const palette = [
  'from-brand-500 to-accent-violet',
  'from-accent-rose to-accent-amber',
  'from-accent-violet to-accent-rose',
  'from-brand-700 to-brand-400',
  'from-accent-emerald to-brand-500',
  'from-accent-amber to-accent-rose',
  'from-brand-500 to-accent-emerald',
  'from-accent-violet to-brand-700',
]

function init(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

const list: Omit<Teacher, 'initials' | 'color'>[] = [
  { id: 'TR-01', fullName: 'Ismoilov Rustam Nabiyevich', subject: 'Axborot texnologiyalari', phone: '+998 90 200 18 21', groups: 5, load: 28, status: 'Faol', rating: 78 },
  { id: 'TR-02', fullName: 'Saidova Gulbahor Akramovna', subject: 'Buxgalteriya hisobi', phone: '+998 91 540 77 14', groups: 4, load: 24, status: 'Faol', rating: 67 },
  { id: 'TR-03', fullName: 'Mamatov Oybek Qobilovich', subject: 'Elektr texnikasi', phone: '+998 93 778 42 09', groups: 6, load: 32, status: "Yuklama to'liq", rating: 89 },
  { id: 'TR-04', fullName: "Xudoyberdiyeva Shahnoza Ergash qizi", subject: 'Pedagogika', phone: '+998 90 411 25 03', groups: 4, load: 22, status: 'Faol', rating: 71 },
  { id: 'TR-05', fullName: "Nazarov Baxtiyor Sobir o'g'li", subject: 'Avtomobil tuzilishi', phone: '+998 99 102 88 71', groups: 5, load: 26, status: 'Faol', rating: 74 },
  { id: 'TR-06', fullName: 'Ergasheva Dilorom Komilovna', subject: 'Tikuvchilik texnologiyasi', phone: '+998 91 770 04 19', groups: 3, load: 20, status: 'Faol', rating: 65 },
  { id: 'TR-07', fullName: "Qodirov Sirojiddin Davron o'g'li", subject: 'Kompyuter tarmoqlari', phone: '+998 94 600 77 18', groups: 5, load: 28, status: 'Faol', rating: 82 },
  { id: 'TR-08', fullName: 'Tosheva Nilufar Bahodirovna', subject: 'Marketing va bank ishi', phone: '+998 99 318 24 50', groups: 4, load: 24, status: 'Faol', rating: 76 },
  { id: 'TR-09', fullName: "Bekmurodov Akmal Olim o'g'li", subject: "Qishloq xo'jaligi mexanizatsiyasi", phone: '+998 95 142 30 60', groups: 4, load: 22, status: 'Faol', rating: 69 },
  { id: 'TR-10', fullName: "Sobirova Robiya Komil qizi", subject: 'Matematika', phone: '+998 93 270 18 90', groups: 6, load: 30, status: "Yuklama to'liq", rating: 84 },
  { id: 'TR-11', fullName: "Karimov Davron Rustam o'g'li", subject: 'Fizika', phone: '+998 90 555 12 09', groups: 5, load: 26, status: 'Faol', rating: 72 },
  { id: 'TR-12', fullName: "Rahimova Sevara Erkin qizi", subject: 'Ona tili va adabiyot', phone: '+998 99 410 60 33', groups: 4, load: 22, status: 'Faol', rating: 70 },
]

export const teachers: Teacher[] = list.map((t, i) => ({
  ...t,
  initials: init(t.fullName),
  color: palette[i % palette.length],
}))

export const teacherSummary = {
  total: 86,
  active: teachers.filter((t) => t.status === 'Faol').length,
  full: teachers.filter((t) => t.status === "Yuklama to'liq").length,
  averageLoad: Math.round(teachers.reduce((s, t) => s + t.load, 0) / teachers.length),
}
