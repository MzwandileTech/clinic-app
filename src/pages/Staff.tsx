import React from 'react'
import AppButton from '../components/shared/AppButton'
import Header from '../components/Header'
import StaffCard from '../components/staff components/StaffCard'

export default function Staff(){
  return (
    <>
    <Header title='Staff Management'/>
    <div className="max-w-screen-xl mx-auto space-y-6">
      <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Staff Management</h1>
          <p className="text-gray-500">
            Manage staff access, roles, and working hours
          </p>
        </div>
        <div>
          <AppButton
            name="Add New Staff Member"
            onClick={() => console.log("Add staff clicked")}
          />
        </div>
      </div>

      <StaffCard
        image="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=200"
        name="Dr. Sarah Mitchell"
        occupation="Veterinarian"
      />
      <StaffCard
        image="https://th.bing.com/th/id/R.45f967014c5d73b2374022168f5e5e1b?rik=WG%2fDiY4KREn3Gg&pid=ImgRaw&r=0"
        name="Dr. James Chen"
        occupation="Dentist"
      />

    </div>
  </>
  )
}
