import React from 'react'

export default function Header(){
  return (
    <header className="bg-white border-b">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Practice</h2>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1 rounded border text-sm">Help</button>
          <div className="relative">
            <button aria-label="Notifications" className="px-3 py-1 rounded border text-sm relative">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M15 13v-2a5 5 0 00-10 0v2l-2 2h14l-2-2zM7 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
