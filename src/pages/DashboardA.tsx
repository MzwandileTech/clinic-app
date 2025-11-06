import React from 'react'

export default function DashboardA(){
  return (
    <div className="max-w-screen-xl mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-semibold">Practice Dashboard</h1>
        <p className="text-gray-500">Real-time overview of your clinic's performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
          <div className="icon-bg bg-blue-50 text-clinicblue"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#EFF6FF"/><path d="M10 12h12M10 16h8M10 20h6M16 10v14" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round"/></svg></div>
          <div>
            <div className="text-2xl font-bold">24</div>
            <div className="text-sm text-gray-500">Appointments Today</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
          <div className="icon-bg bg-green-50 text-clinicgreen"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#F0FDF4"/><path d="M16 10v12M10 16h12" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="16" r="6" stroke="#10B981" strokeWidth="2"/></svg></div>
          <div>
            <div className="text-2xl font-bold">$3,450</div>
            <div className="text-sm text-gray-500">Revenue Today</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
          <div className="icon-bg bg-red-50 text-clinicred"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#FEF2F2"/><path d="M10 22l6-6 4 4 6-8M10 12h12v10H10V12z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <div>
            <div className="text-2xl font-bold">2</div>
            <div className="text-sm text-gray-500">No-Shows</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
          <div className="icon-bg bg-yellow-50 text-clinicyellow"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#FFFBEB"/><path d="M16 10v12M10 16h12" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="16" r="6" stroke="#F59E0B" strokeWidth="2"/></svg></div>
          <div>
            <div className="text-2xl font-bold">78%</div>
            <div className="text-sm text-gray-500">Occupancy Rate</div>
          </div>
        </div>
      </div>
    </div>
  )
}
