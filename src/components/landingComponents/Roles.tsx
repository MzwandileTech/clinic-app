import React from "react";

const roles = [
  {
    title: "Practice Owner",
    features: [
      "Full system access and control",
      "Financial reports and analytics",
      "Staff management and permissions",
      "Multi-location support",
    ],
    bg: "font-bold bg-blue-50 ",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="28" fill="#EFF6FF" />
        <path
          d="M28 28c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6zM28 30c-4 0-12 2-12 6v2h24v-2c0-4-8-6-12-6z"
          stroke="#1E3A8A"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Practitioner",
    features: [
      "Patient records and histories",
      "Appointment management",
      "Treatment notes and prescriptions",
      "Clinical reporting",
    ],
    bg: "bg-green-50",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="28" fill="#F0FDF4" />
        <path
          d="M28 24v-4M28 32h.01M24 36h8c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4h-8c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4z"
          stroke="#10B981"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Receptionist",
    features: [
      "Appointment scheduling",
      "Check-in and registration",
      "Billing and payment processing",
      "Basic patient information",
    ],
    bg: "bg-blue-50",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="28" fill="#EFF6FF" />
        <path
          d="M22 26h12M22 30h8M24 22h8c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-8c-1.1 0-2-.9-2-2V24c0-1.1.9-2 2-2z"
          stroke="#1E3A8A"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const Roles = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Built for Your Entire Team</h2>
          <p className="text-gray-600 mt-2">Role-based access ensures everyone has the tools they need</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6">
              <div className="flex justify-center mb-6">{role.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-center text-blue-900">{role.title}</h3>
              <ul className="space-y-2">
                {role.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-500 mt-1">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roles;
