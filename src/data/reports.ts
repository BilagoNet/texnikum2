export interface Report {
  id: string
  title: string
  type: 'Moliyaviy' | "O'quv" | 'Statistik' | 'Yuklama'
  period: string
  author: string
  date: string
  size: string
  status: 'Tayyor' | 'Tayyorlanmoqda' | 'Tahrir'
}

export const reports: Report[] = [
  { id: 'RP-2401', title: '2026-yil 1-chorak moliyaviy hisoboti', type: 'Moliyaviy', period: 'Q1 2026', author: 'Rahbariyat', date: '2026-04-12', size: '2.4 MB', status: 'Tayyor' },
  { id: 'RP-2402', title: 'O\'quvchilar davomati statistikasi (May)', type: "O'quv", period: 'May 2026', author: 'Dekanat', date: '2026-05-22', size: '1.1 MB', status: 'Tayyor' },
  { id: 'RP-2403', title: 'O\'qituvchilar yuklamasi tahlili', type: 'Yuklama', period: '2025-2026 o\'quv yili', author: 'Kafedralar', date: '2026-05-18', size: '3.2 MB', status: 'Tayyor' },
  { id: 'RP-2404', title: 'Qarzdor o\'quvchilar ro\'yxati', type: 'Moliyaviy', period: 'May 2026', author: 'Buxgalteriya', date: '2026-05-24', size: '0.6 MB', status: 'Tayyor' },
  { id: 'RP-2405', title: 'Bitiruvchilar bandligi statistikasi', type: 'Statistik', period: '2025 bitiruv', author: 'Kadrlar', date: '2026-05-15', size: '1.8 MB', status: 'Tayyor' },
  { id: 'RP-2406', title: 'Yo\'nalishlar bo\'yicha o\'rtacha ball', type: 'Statistik', period: '2-semestr', author: 'Dekanat', date: '2026-05-20', size: '0.9 MB', status: 'Tayyor' },
  { id: 'RP-2407', title: 'Iyun oyi to\'lovlari prognozi', type: 'Moliyaviy', period: 'Iyun 2026', author: 'Buxgalteriya', date: '2026-05-23', size: '0.7 MB', status: 'Tayyorlanmoqda' },
  { id: 'RP-2408', title: 'Texnikum boshqaruv samaradorligi', type: 'Statistik', period: '2025-2026', author: 'Rahbariyat', date: '2026-05-19', size: '2.1 MB', status: 'Tahrir' },
]

export const reportSummary = {
  total: reports.length,
  ready: reports.filter((r) => r.status === 'Tayyor').length,
  pending: reports.filter((r) => r.status === 'Tayyorlanmoqda').length,
  draft: reports.filter((r) => r.status === 'Tahrir').length,
}
