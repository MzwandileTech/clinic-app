import React from 'react'
import Sidebar from './shared/Sidebar'
import Header from './Header'
import Footer from './Footer'
import PractitionerSidebar from './shared/PractionerSidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-800">
      <PractitionerSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
