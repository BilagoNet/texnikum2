import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="min-h-screen bg-surface dark:bg-[color:var(--color-surface-dark)]">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {/* lg:pl-72 — sidebar uchun joy. min-w-0 grid ichidagi kontentni
          qisqartirishga ruxsat. overflow-x-clip Topbar'ni buzmaslik uchun
          faqat main'ga qo'yiladi (sticky topbar parent'ida overflow bo'lsa,
          iOS Safari'da sticky element float bo'lib ketadi). */}
      <div className="min-w-0 lg:pl-72">
        <Topbar onOpenSidebar={() => setSidebarOpen(true)} />
        <main className="min-w-0 overflow-x-clip px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
