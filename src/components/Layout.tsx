import React from 'react'
import Sidebar from './shared/Sidebar'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-800">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}
