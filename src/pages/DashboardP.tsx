import React from 'react'

export default function DashboardP(){
  return (
    <div className="max-w-screen-xl mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-semibold">Clinical Dashboard</h1>
        <p className="text-gray-500">Overview of your clinical workload and patient data</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
          <div className="icon-bg bg-blue-50 text-clinicblue"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#EFF6FF"/><path d="M10 12h12M10 16h8M10 20h6M16 10v14" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round"/></svg></div>
          <div>
            <div className="text-2xl font-bold">18</div>
            <div className="text-sm text-gray-500">Today's Appointments</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
          <div className="icon-bg bg-green-50 text-clinicgreen"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#F0FDF4"/><path d="M16 10v12M10 16h12" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="16" r="6" stroke="#10B981" strokeWidth="2"/></svg></div>
          <div>
            <div className="text-2xl font-bold">124</div>
            <div className="text-sm text-gray-500">Total Patients</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
          <div className="icon-bg bg-red-50 text-clinicred"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#FEF2F2"/><path d="M10 22l6-6 4 4 6-8M10 12h12v10H10V12z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <div>
            <div className="text-2xl font-bold">3</div>
            <div className="text-sm text-gray-500">No-Shows</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
          <div className="icon-bg bg-yellow-50 text-clinicyellow"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#FFFBEB"/><path d="M16 10v12M10 16h12" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/><circle cx="16" cy="16" r="6" stroke="#F59E0B" strokeWidth="2"/></svg></div>
          <div>
            <div className="text-2xl font-bold">5</div>
            <div className="text-sm text-gray-500">Pending Notes</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Today's Appointments</h3>
            <a className="text-sm px-2 py-1 border rounded text-gray-600">View All</a>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 border rounded">
              <div className="text-sm font-medium">09:00 AM</div>
              <div className="flex-1 px-4">
                <div className="font-medium">Sarah Johnson</div>
                <div className="text-xs text-gray-500">Dental Checkup</div>
              </div>
              <div className="text-sm text-green-600">Confirmed</div>
            </div>
            <div className="flex items-center justify-between p-2 border rounded">
              <div className="text-sm font-medium">10:30 AM</div>
              <div className="flex-1 px-4">
                <div className="font-medium">Michael Brown</div>
                <div className="text-xs text-gray-500">Tooth Extraction</div>
              </div>
              <div className="text-sm text-green-600">Confirmed</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold mb-2">Medical Aid Claims Status</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between"><div>Approved</div><div className="font-bold">42</div></div>
            <div className="flex items-center justify-between"><div>Pending</div><div className="font-bold">18</div></div>
            <div className="flex items-center justify-between"><div>Rejected</div><div className="font-bold">5</div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
