import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

export function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="min-h-screen bg-surface dark:bg-[color:var(--color-surface-dark)]">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {/* min-w-0 — flex/grid ichidagi child kontentni qisqartirishga ruxsat beradi
          overflow-x-clip — chart yoki jadval kengayganda butun sahifa sliding bo'lib ketmaydi */}
      <div className="min-w-0 overflow-x-clip lg:pl-72">
        <Topbar onOpenSidebar={() => setSidebarOpen(true)} />
        <main className="min-w-0 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
