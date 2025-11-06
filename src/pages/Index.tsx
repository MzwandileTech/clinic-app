import React from 'react'
import { Link } from 'react-router-dom'

export default function Index(){
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="bg-white rounded-lg shadow p-8">
        <h1 className="text-2xl font-bold mb-2">Welcome to ClinicPro</h1>
        <p className="text-gray-600 mb-4">Exact-match Tailwind conversion. Use the sidebar to navigate to all pages.</p>
        <div className="flex gap-3 flex-wrap">
          <Link to='/dashboard-p' className="px-4 py-2 bg-clinicblue text-white rounded">Practitioner Dashboard</Link>
          <Link to='/dashboard-a' className="px-4 py-2 border rounded">Admin Dashboard</Link>
        </div>
      </div>
    </div>
  )
}
