// src/pages/DashboardPage.tsx
import React from 'react';
// 1. Corrected Import Path, and Imported Types
import { mockStats, mockAppointments, Stat, Appointment, getStatusBadge } from '../../data/mockData'; 

// Define type for Recent Activity items
interface RecentActivityItem {
  type: string;
  text: string;
  time: string;
  badge: string;
}

const DashboardPage: React.FC = () => {
  // 3. Typed the array (using the new interface)
  const recentActivity: RecentActivityItem[] = [
    { type: 'Update', text: 'Updated protocol for PT-00101', time: '5 mins ago', badge: 'bg-yellow-100 text-yellow-800' },
    { type: 'New Patient', text: 'New patient registered: Jane Foster', time: '1 hour ago', badge: 'bg-green-100 text-green-800' },
    { type: 'Note Added', text: 'Added follow-up note for PT-00256', time: '3 hours ago', badge: 'bg-blue-100 text-blue-800' },
  ];

  return (
    <div className="space-y-6">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 2. Typed the 'stat' iterator */}
        {mockStats.slice(0, 4).map((stat: Stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-shadow hover:shadow-lg">
            <div className="flex justify-between items-start">
              <div className="text-4xl font-bold text-gray-800">
                {stat.value}
              </div>
              <div className={`p-2 rounded-full ${stat.color} bg-opacity-10 text-${stat.color.split('-')[1]}-600`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d={stat.icon} />
                </svg>
              </div>
            </div>
            <p className="mt-2 text-sm font-medium text-gray-500">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Appointments */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Appointments (Today)</h2>
          <div className="space-y-3">
            {/* 2. Typed the 'appt' iterator inside filter and map */}
            {mockAppointments.filter((a: Appointment) => a.status === 'Upcoming').slice(0, 3).map((appt: Appointment, index) => (
              <div key={appt.id} className="grid grid-cols-6 gap-4 items-center border-b pb-3 last:border-b-0 last:pb-0">
                <div className="col-span-1 font-bold text-gray-900">{appt.time}</div>
                <div className="col-span-3">
                  <div className="font-medium text-blue-600">{appt.patient}</div>
                  <div className="text-xs text-gray-500">{appt.type}</div>
                </div>
                <div className="col-span-2 flex justify-end">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusBadge(appt.status)}`}>
                    {appt.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {mockAppointments.filter(a => a.status === 'Upcoming').length > 3 && (
            <div className="mt-4 text-center">
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700">View All</button>
            </div>
          )}
        </div>

        {/* Recent Activity Log */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity Log</h2>
          <ul className="space-y-3">
            {/* 3. Typed the 'activity' iterator */}
            {recentActivity.map((activity: RecentActivityItem, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${activity.badge} flex-shrink-0 mt-1`}>
                  {activity.type}
                </span>
                <div className="flex-1">
                  <p className="text-sm text-gray-700 leading-snug">{activity.text}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{activity.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      
      <section className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Practice Key Performance Indicators (KPIs)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center">
          {/* 2. Typed the 'stat' iterator */}
          {mockStats.map((stat: Stat, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="text-2xl font-bold text-gray-800">
                {stat.value}
              </div>
              <p className="mt-1 text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;