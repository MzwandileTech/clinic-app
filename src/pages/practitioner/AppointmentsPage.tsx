// src/pages/AppointmentsPage.tsx
import React, { useState, useMemo } from 'react';
import { mockAppointments, getStatusBadge } from '../../data/mockData';

const AppointmentsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const filteredAppointments = useMemo(() => {
    if (activeTab === 'upcoming') {
      return mockAppointments.filter(a => a.status === 'Upcoming');
    }
    if (activeTab === 'completed') {
      return mockAppointments.filter(a => a.status === 'Completed');
    }
    // 'all' tab
    return mockAppointments;
  }, [activeTab]);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
        <div className="flex space-x-2 text-sm">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-4 py-2 font-medium rounded-lg transition-colors ${activeTab === 'upcoming' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-4 py-2 font-medium rounded-lg transition-colors ${activeTab === 'completed' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Completed
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 font-medium rounded-lg transition-colors ${activeTab === 'all' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            All Appointments
          </button>
        </div>
        <button className="mt-4 sm:mt-0 px-4 py-2 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition-colors flex items-center gap-2">
          {/* Plus icon */}
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
          New Appointment
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 capitalize">{activeTab} Appointments</h2>
        <div className="space-y-4">
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((appt) => (
              <div key={appt.id} className="grid grid-cols-4 sm:grid-cols-5 gap-4 items-center p-4 border rounded-lg hover:shadow-sm transition-shadow">
                {/* Time */}
                <div className="font-bold text-lg text-gray-800 col-span-1">
                  {appt.time}
                </div>

                {/* Patient Info */}
                <div className="col-span-3 sm:col-span-2 space-y-0.5">
                  <div className="font-medium text-blue-600">{appt.patient}</div>
                  <div className="text-xs text-gray-500">{appt.details}</div>
                </div>
                
                {/* Appointment Type */}
                <div className="hidden sm:block text-sm text-gray-700 font-medium">
                  {appt.type}
                </div>

                {/* Status */}
                <div className="flex justify-end sm:justify-center">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusBadge(appt.status)}`}>
                    {appt.status}
                  </span>
                </div>

                {/* Actions */}
                <div className="col-span-4 sm:col-span-1 flex justify-end gap-2 mt-2 sm:mt-0">
                  <button className="text-sm font-medium text-gray-600 hover:text-blue-600">
                    {appt.status === 'Completed' ? 'View Notes' : 'Mark Complete'}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center p-8 text-gray-500 border-2 border-dashed rounded-lg">
              No {activeTab} appointments found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;