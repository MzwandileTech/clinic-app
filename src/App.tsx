import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Index from './pages/Index'
import DashboardP from './pages/DashboardP'
import DashboardA from './pages/DashboardA'
import Appointments from './pages/Appointments'
import Patients from './pages/Patients'
import Staff from './pages/Staff'
import Audit from './pages/Audit'
import Inventory from './pages/Inventory'
import Reports from './pages/Reports'
import Settings from './pages/Settings'


import DashboardPage from './pages/practitioner/DashboardPage'
import AppointmentsPage from './pages/practitioner/AppointmentsPage'
import PatientsPage from './pages/practitioner/PatientsPage'

export default function App(){
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/dashboard-p' element={<DashboardP />} />
        <Route path='/dashboard-a' element={<DashboardA />} />
        <Route path='/appointments' element={<Appointments />} />
        <Route path='/patients' element={<Patients />} />
        <Route path='/staff' element={<Staff />} />
        <Route path='/audit' element={<Audit />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
      <Routes>
          <Route path="/practitioner-dashboard" element={<DashboardPage />} /> 
          <Route path="/practitioner-appointments" element={<AppointmentsPage />} /> 
          <Route path="/practitioner-patients" element={<PatientsPage />} /> 
          
        </Routes>
    </Layout>
       
  )
}
