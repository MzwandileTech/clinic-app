import React from 'react'

export default function Appointments(){
  return (
    <div className="max-w-screen-xl mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-semibold">My Appointments</h1>
        <p className="text-gray-500">Manage your upcoming and past appointments</p>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <div className="grid md:grid-cols-4 gap-3">
          <div>
            <label className="text-sm text-gray-600">Date Range</label>
            <select className="mt-1 block w-full border rounded p-2">
              <option>Today</option>
              <option selected>This Week</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600">Status</label>
            <select className="mt-1 block w-full border rounded p-2">
              <option>All Statuses</option>
              <option>Confirmed</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600">Patient Search</label>
            <input className="mt-1 block w-full border rounded p-2" placeholder="Search patients..." />
          </div>
          <div className="flex items-end">
            <button className="px-4 py-2 bg-clinicblue text-white rounded">Apply Filters</button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold mb-2">Today - March 20, 2025</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between border rounded p-3">
              <div className="text-sm font-medium">09:00 AM</div>
              <div className="flex-1 px-4">
                <div className="font-medium">Sarah Johnson</div>
                <div className="text-xs text-gray-500">ID: PT-00123 • HealthFirst</div>
              </div>
              <div><span className="text-sm text-green-600">Confirmed</span></div>
              <div><button className="px-3 py-1 bg-clinicblue text-white rounded text-sm">Start Consultation</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
