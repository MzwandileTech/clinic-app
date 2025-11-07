import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/OwnerLayout'
import Landingpage from './pages/landing/Landingpage'
import DashboardP from './pages/DashboardP'
import DashboardA from './pages/owner/DashboardA'
import Staff from './pages/owner/Staff'
import Audit from './pages/owner/Audit'
import Inventory from './pages/owner/Inventory'
import Reports from './pages/owner/Reports'
import Settings from './pages/owner/Settings'
import DashboardPage from './pages/practitioner/DashboardPage'
import AppointmentsPage from './pages/practitioner/AppointmentsPage'
import PatientsPage from './pages/practitioner/PatientsPage'
import PractionerLayout from './components/PractionerLayout'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />

      {/* Pages WITH layout */}
      {/* <Route
        path="/dashboard-p"
        element={
          <Layout>
            <DashboardP />
          </Layout>
        }
      /> */}
      <Route
        path="/dashboard-a"
        element={
          <Layout>
            <DashboardA />
          </Layout>
        }
      />
      <Route
        path="/staff"
        element={
          <Layout>
            <Staff />
          </Layout>
        }
      />
      <Route
        path="/audit"
        element={
          <Layout>
            <Audit />
          </Layout>
        }
      />
      <Route
        path="/inventory"
        element={
          <Layout>
            <Inventory />
          </Layout>
        }
      />
      <Route
        path="/reports"
        element={
          <Layout>
            <Reports />
          </Layout>
        }
      />
      <Route
        path="/settings"
        element={
          <Layout>
            <Settings />
          </Layout>
        }
      />
      <Route
        path="/practitioner-dashboard"
        element={
          <PractionerLayout>
            <DashboardPage />
          </PractionerLayout>
        }
      />
      <Route
        path="/appointments"
        element={
          <PractionerLayout>
            <AppointmentsPage />
          </PractionerLayout>
        }
      />
      <Route
        path="/patient-records"
        element={
          <PractionerLayout>
            <PatientsPage />
          </PractionerLayout>
        }
      />
    </Routes>
  )
}

