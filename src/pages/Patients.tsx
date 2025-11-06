import React from 'react'

export default function Patients(){
  return (
    <div className="max-w-screen-xl mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-semibold">Patient Records</h1>
        <p className="text-gray-500">Search, view, and update patient files</p>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <div className="grid md:grid-cols-4 gap-3">
          <div>
            <label className="text-sm text-gray-600">Search Patients</label>
            <input className="mt-1 block w-full border rounded p-2" placeholder="Search by name, ID, or contact..." />
          </div>
          <div>
            <label className="text-sm text-gray-600">Medical Aid</label>
            <select className="mt-1 block w-full border rounded p-2">
              <option>All Medical Aids</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-gray-600">Last Visit</label>
            <select className="mt-1 block w-full border rounded p-2">
              <option>Any Time</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="px-4 py-2 bg-clinicblue text-white rounded">Search</button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-4">
            <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200" className="w-12 h-12 rounded-full" />
            <div>
              <div className="font-medium">Sarah Johnson</div>
              <div className="text-xs text-gray-500">ID: PT-00123</div>
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-600 space-y-1">
            <div>Last Visit: Mar 15, 2025</div>
            <div>Medical Aid: HealthFirst</div>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="px-3 py-1 bg-clinicblue text-white rounded text-sm">View Profile</button>
            <button className="px-3 py-1 border rounded text-sm">Add Note</button>
          </div>
        </div>
      </div>
    </div>
  )
}
