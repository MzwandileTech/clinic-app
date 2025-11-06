import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

const sections = [
  { title: 'Main', links: [{ to: '/dashboard-a', label: 'Dashboard' }] },
  { title: 'Management', links: [{ to: '/reports', label: 'Reports' }, { to: '/staff', label: 'Staff' }, { to: '/inventory', label: 'Inventory' }] },
  { title: 'System', links: [{ to: '/audit', label: 'Audit Logs' }, { to: '/settings', label: 'Settings' }] }
]

export default function Sidebar(){
  const [collapsed, setCollapsed] = useState(false)
  const ref = useRef<HTMLDivElement|null>(null)

  useEffect(()=>{
    function onDoc(e: MouseEvent){
      if (window.innerWidth <= 768 && ref.current && !ref.current.contains(e.target as Node) && !collapsed) {
        setCollapsed(true)
      }
    }
    document.addEventListener('click', onDoc)
    return ()=> document.removeEventListener('click', onDoc)
  },[collapsed])

  return (
    <aside ref={ref} className={`bg-white border-r h-screen ${collapsed ? 'w-16' : 'w-64'} transition-all`}>
      <div className="p-4 flex items-center justify-between border-b">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-clinicblue flex items-center justify-center text-white font-bold">CP</div>
          {!collapsed && <span className="font-semibold text-clinicblue">ClinicPro</span>}
        </div>
        <button aria-label="Toggle sidebar" onClick={()=>setCollapsed(!collapsed)} className="p-1 rounded focus:outline-none">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>
      <div className="p-4 overflow-auto flex-1">
        {sections.map(s=>(
          <div key={s.title} className="mb-6">
            {!collapsed && <h4 className="text-xs uppercase text-gray-500 mb-2">{s.title}</h4>}
            <ul className="space-y-1">
              {s.links.map(l=> (
                <li key={l.to}>
                  <NavLink to={l.to} className={({isActive})=> isActive ? 'flex items-center gap-3 p-2 rounded bg-blue-50 text-clinicblue' : 'flex items-center gap-3 p-2 rounded text-gray-600 hover:bg-gray-100'}>
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none"><path d="M3 10h4v7H3v-7zM13 3h4v14h-4V3zM8 6h4v11H8V6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {!collapsed && <span>{l.label}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center gap-3">
          <img src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=200" alt="owner" className="w-10 h-10 rounded-full" />
          <div className="flex-1">
            <div className="text-sm font-medium">Dr. Sarah Mitchell</div>
            <div className="text-xs text-gray-500">Practice Owner</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
