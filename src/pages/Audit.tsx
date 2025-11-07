import React from "react";
import FilterSelect from "../components/report components/FilterSelect";
import { Eye, Edit3, Plus, Trash2, LogIn } from "lucide-react";
import AppButton from "../components/shared/AppButton";

const AuditLogs: React.FC = () => {
  const logs = [
    {
      user: "Dr. Sarah Mitchell",
      role: "Veterinarian",
      action: "Edited Patient Record",
      icon: <Edit3 size={16} className="text-blue-500" />,
      timestamp: "2025-03-20 14:32",
      module: "Patients",
      details: "Updated contact information for John Smith",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      user: "Dr. James Chen",
      role: "Dentist",
      action: "Created Appointment",
      icon: <Plus size={16} className="text-green-500" />,
      timestamp: "2025-03-20 13:15",
      module: "Appointments",
      details: "New appointment for Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      user: "Nurse Emily Wilson",
      role: "Registered Nurse",
      action: "Logged In",
      icon: <LogIn size={16} className="text-gray-500" />,
      timestamp: "2025-03-20 12:45",
      module: "Authentication",
      details: "Successful login from desktop device",
      avatar: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
      user: "Mark Johnson",
      role: "Receptionist",
      action: "Deleted Record",
      icon: <Trash2 size={16} className="text-red-500" />,
      timestamp: "2025-03-20 11:20",
      module: "Inventory",
      details: "Removed expired medication from inventory",
      avatar: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    {
      user: "Dr. Sarah Mitchell",
      role: "Veterinarian",
      action: "Viewed Report",
      icon: <Eye size={16} className="text-blue-400" />,
      timestamp: "2025-03-20 10:05",
      module: "Reports",
      details: "Viewed monthly revenue report",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      user: "Dr. James Chen",
      role: "Dentist",
      action: "Edited Settings",
      icon: <Edit3 size={16} className="text-blue-500" />,
      timestamp: "2025-03-20 09:30",
      module: "Settings",
      details: "Updated clinic operating hours",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <main className="flex-1 p-8 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold">Audit Logs</h1>
          <p className="text-gray-500 text-sm">
            Track user activity and critical system changes
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold mb-4">Filter Logs</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <FilterSelect
              label="Date Range"
              options={["This Week", "This Month", "Last 3 Months"]}
            />
            <FilterSelect
              label="User"
              options={[
                "All Users",
                "Dr. Sarah Mitchell",
                "Dr. James Chen",
                "Nurse Emily Wilson",
                "Mark Johnson",
              ]}
            />
            <FilterSelect
              label="Action Type"
              options={[
                "All Actions",
                "Created Appointment",
                "Edited Record",
                "Deleted Record",
                "Viewed Report",
                "Logged In",
              ]}
            />
            <AppButton name="Apply Filters"/>
          </div>
        </div>

        {/* Logs Table */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500 border-b">
              <tr>
                <th className="py-2 font-medium">User</th>
                <th className="py-2 font-medium">Action</th>
                <th className="py-2 font-medium">Timestamp</th>
                <th className="py-2 font-medium">Affected Module</th>
                <th className="py-2 font-medium">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {logs.map((log, i) => (
                <tr key={i} className="hover:bg-gray-50 align-top">
                  {/* USER */}
                  <td className="py-4 align-top">
                    <div className="flex items-center gap-3">
                      <img
                        src={log.avatar}
                        alt={log.user}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium leading-tight">{log.user}</p>
                        <p className="text-xs text-gray-500">{log.role}</p>
                      </div>
                    </div>
                  </td>

                  {/* ACTION */}
                  <td className="py-4 align-top">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-5 h-5">
                        {log.icon}
                      </span>
                      <span className="font-medium text-gray-800">
                        {log.action}
                      </span>
                    </div>
                  </td>

                  {/* TIMESTAMP */}
                  <td className="py-4 align-top text-gray-700 whitespace-nowrap">
                    {log.timestamp}
                  </td>

                  {/* MODULE */}
                  <td className="py-4 align-top text-gray-700">
                    {log.module}
                  </td>

                  {/* DETAILS */}
                  <td className="py-4 align-top text-gray-700">
                    {log.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 border rounded disabled:opacity-50" disabled>
                Previous
              </button>
              <button className="px-3 py-1 border rounded bg-blue-600 text-white">
                1
              </button>
              <button className="px-3 py-1 border rounded">2</button>
              <button className="px-3 py-1 border rounded">3</button>
              <span>...</span>
              <button className="px-3 py-1 border rounded">10</button>
              <button className="px-3 py-1 border rounded">Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuditLogs;

