export interface Lesson {
  subject: string
  teacher: string
  group: string
  room: string
  time: string
  color: 'brand' | 'rose' | 'amber' | 'violet' | 'emerald'
}

export const days = ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'] as const

export const schedule: Record<(typeof days)[number], Lesson[]> = {
  Dushanba: [
    { subject: 'Axborot texnologiyalari', teacher: 'Ismoilov R.', group: 'AT-21', room: '204-xona', time: '08:30 - 09:50', color: 'brand' },
    { subject: 'Buxgalteriya amaliyoti', teacher: 'Saidova G.', group: 'BH-12', room: '112-xona', time: '10:00 - 11:20', color: 'rose' },
    { subject: 'Elektr texnikasi', teacher: 'Mamatov O.', group: 'EJ-31', room: 'Laboratoriya', time: '11:40 - 13:00', color: 'amber' },
    { subject: 'Ona tili va adabiyot', teacher: 'Rahimova S.', group: 'AT-21', room: '301-xona', time: '14:00 - 15:20', color: 'violet' },
  ],
  Seshanba: [
    { subject: 'Pedagogika', teacher: 'Xudoyberdiyeva Sh.', group: 'MT-14', room: '305-xona', time: '08:30 - 09:50', color: 'violet' },
    { subject: 'Avtomobil tuzilishi', teacher: 'Nazarov B.', group: 'AS-22', room: 'Ustaxona', time: '10:00 - 11:20', color: 'emerald' },
    { subject: 'Kompyuter tarmoqlari', teacher: 'Qodirov S.', group: 'KT-11', room: '207-xona', time: '11:40 - 13:00', color: 'brand' },
    { subject: 'Matematika', teacher: 'Sobirova R.', group: 'BH-12', room: '102-xona', time: '14:00 - 15:20', color: 'rose' },
  ],
  Chorshanba: [
    { subject: 'Tikuvchilik texnologiyasi', teacher: 'Ergasheva D.', group: 'TT-18', room: 'Tikuv ustaxonasi', time: '08:30 - 09:50', color: 'rose' },
    { subject: 'Marketing va bank ishi', teacher: 'Tosheva N.', group: 'MK-15', room: '108-xona', time: '10:00 - 11:20', color: 'amber' },
    { subject: 'Axborot texnologiyalari', teacher: 'Ismoilov R.', group: 'KT-11', room: '204-xona', time: '11:40 - 13:00', color: 'brand' },
    { subject: 'Fizika', teacher: 'Karimov D.', group: 'EJ-31', room: '203-xona', time: '14:00 - 15:20', color: 'violet' },
  ],
  Payshanba: [
    { subject: 'Buxgalteriya hisobi', teacher: 'Saidova G.', group: 'BI-09', room: '112-xona', time: '08:30 - 09:50', color: 'rose' },
    { subject: 'Qishloq xo\'jaligi', teacher: 'Bekmurodov A.', group: 'QX-19', room: '402-xona', time: '10:00 - 11:20', color: 'emerald' },
    { subject: 'Elektr jihozlari', teacher: 'Mamatov O.', group: 'EJ-31', room: 'Laboratoriya', time: '11:40 - 13:00', color: 'amber' },
    { subject: 'Pedagogika', teacher: 'Xudoyberdiyeva Sh.', group: 'MT-14', room: '305-xona', time: '14:00 - 15:20', color: 'violet' },
  ],
  Juma: [
    { subject: 'Matematika', teacher: 'Sobirova R.', group: 'AT-21', room: '102-xona', time: '08:30 - 09:50', color: 'brand' },
    { subject: 'Avtomobil mexanikasi', teacher: 'Nazarov B.', group: 'AS-22', room: 'Ustaxona', time: '10:00 - 11:20', color: 'emerald' },
    { subject: 'Marketing', teacher: 'Tosheva N.', group: 'MK-15', room: '108-xona', time: '11:40 - 13:00', color: 'amber' },
    { subject: 'Kompyuter tarmoqlari', teacher: 'Qodirov S.', group: 'KT-11', room: '207-xona', time: '14:00 - 15:20', color: 'brand' },
  ],
  Shanba: [
    { subject: 'Ona tili va adabiyot', teacher: 'Rahimova S.', group: 'TT-18', room: '301-xona', time: '08:30 - 09:50', color: 'rose' },
    { subject: 'Fizika', teacher: 'Karimov D.', group: 'AT-21', room: '203-xona', time: '10:00 - 11:20', color: 'violet' },
    { subject: 'Buxgalteriya amaliyoti', teacher: 'Saidova G.', group: 'BH-12', room: '112-xona', time: '11:40 - 13:00', color: 'rose' },
  ],
}
