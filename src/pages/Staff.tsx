import React from 'react'

export default function Staff(){
  return (
    <div className="max-w-screen-xl mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Staff Management</h1>
          <p className="text-gray-500">Manage staff access, roles, and working hours</p>
        </div>
        <div>
          <button className="px-4 py-2 bg-clinicblue text-white rounded">Add New Staff Member</button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=200" className="w-12 h-12 rounded-full" />
            <div>
              <div className="font-medium">Dr. Sarah Mitchell</div>
              <div className="text-sm text-gray-500">Veterinarian</div>
            </div>
          </div>
          <div><span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Active</span></div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded text-sm">Edit</button>
            <button className="px-3 py-1 border rounded text-sm">Deactivate</button>
          </div>
        </div>
      </div>
    </div>
  )
}
