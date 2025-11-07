import React from 'react'
import Header from '../../components/Header'
import StatCard from '../../components/dashboard components/StatCard'

export default function DashboardA(){
  return (
    <>
    <Header title='Practice Dashboard'/>
    <div className="max-w-screen-xl mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-semibold">Practice Dashboard</h1>
        <p className="text-gray-500">Real-time overview of your clinic's performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        <StatCard label='Appointments Today' number='24' icon={<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#EFF6FF"/><path d="M10 12h12M10 16h8M10 20h6M16 10v14" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round"/></svg>}/>
        <StatCard label='Revenue Today' number='$3,450' icon={<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#F0FDF4"/><path d="M16 10v12M10 16h12" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="16" r="6" stroke="#10B981" strokeWidth="2"/></svg>}/>
        <StatCard label='No-Shows' number='2' icon={<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#FEF2F2"/><path d="M10 22l6-6 4 4 6-8M10 12h12v10H10V12z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}/>
        <StatCard label='Occupancy Rate' number='78%' icon={<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#FFFBEB"/><path d="M16 10v12M10 16h12" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="16" r="6" stroke="#F59E0B" strokeWidth="2"/></svg>}/>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold mb-2">Revenue Trends</h3>
          <div className="h-48 flex items-center justify-center text-gray-400 text-sm border-dashed border-2 border-gray-200 rounded-lg">
            Revenue chart visualization would appear here
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="text-lg font-semibold mb-4">Upcoming Appointments</h3>
          <ul className="space-y-3">
            <li className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-medium">John Smith</p>
                <p className="text-xs text-gray-500">09:00 AM – Dental Checkup</p>
              </div>
              <span className="text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded-lg">
                Confirmed
              </span>
            </li>

            <li className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-xs text-gray-500">10:30 AM – Vaccination</p>
              </div>
              <span className="text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded-lg">
                Confirmed
              </span>
            </li>

            <li className="flex justify-between items-center">
              <div>
                <p className="font-medium">Michael Brown</p>
                <p className="text-xs text-gray-500">11:45 AM – Consultation</p>
              </div>
              <span className="text-yellow-600 text-sm font-medium bg-yellow-50 px-2 py-1 rounded-lg">
                Pending
              </span>
            </li>
          </ul>
        </div>
    </div>
    </>
  )
}
