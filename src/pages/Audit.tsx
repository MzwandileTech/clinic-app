import React from 'react'
import AppButton from '../components/shared/AppButton'

export default function Audit(){
  return (
    <div className="max-w-screen-xl mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-semibold">Audit Logs</h1>
        <p className="text-gray-500">Track user activity and critical system changes</p>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="font-semibold mb-3">Filter Logs</h3>
        <div className="grid md:grid-cols-4 gap-3">
          <select className="border rounded p-2">
            <option>This Week</option>
          </select>
          <select className="border rounded p-2"><option>All Users</option></select>
          <select className="border rounded p-2"><option>All Actions</option></select>
          <div className="flex items-end"><AppButton
            name="Apply Filters"
            onClick={() => console.log("Add staff clicked")}
          /></div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 overflow-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-gray-500">
            <tr><th className="py-2">User</th><th>Action</th><th>Timestamp</th><th>Module</th><th>Details</th></tr>
          </thead>
          <tbody className="divide-y">
            <tr><td>Dr. Sarah Mitchell</td><td>Edited Patient Record</td><td>2025-03-20 14:32</td><td>Patients</td><td>Updated contact info</td></tr>
            <tr><td>Dr. James Chen</td><td>Created Appointment</td><td>2025-03-20 13:15</td><td>Appointments</td><td>New appointment</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
