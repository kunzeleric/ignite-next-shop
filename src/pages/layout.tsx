import { Header } from '@/components/header'
import { SideBar } from '@/components/sidebar'
import { useState } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <main>
      <div className="relative flex min-h-screen flex-col items-start justify-center bg-gray-900">
        {isSidebarOpen && <SideBar setIsSidebarOpen={setIsSidebarOpen} />}
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {children}
      </div>
    </main>
  )
}
