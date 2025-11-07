import React from "react";

const features = [
  {
    title: "Appointment Scheduling",
    description: "Effortless booking and calendar management with automated reminders and conflict prevention.",
    bg: "bg-blue-100",
    stroke: "stroke-blue-900",
    icon: "M14 20h20M14 28h20M18 16h12a2 2 0 012 2v12a2 2 0 01-2 2H18a2 2 0 01-2-2V18a2 2 0 012-2z",
  },
  {
    title: "Patient Records",
    description: "Secure digital records with complete medical history, notes, and treatment plans at your fingertips.",
    bg: "bg-green-50",
    stroke: "stroke-green-500",
    icon: "M24 16v16M16 24h16M24 24m-10,0a10,10 0 1,0 20,0a10,10 0 1,0 -20,0",
  },
  {
    title: "Billing & Invoicing",
    description: "Automated invoicing, payment tracking, and seamless integration with medical aid claims.",
    bg: "bg-blue-100",
    stroke: "stroke-blue-900",
    icon: "M18 26l4 4 8-8M24 32c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z",
  },
  {
    title: "Inventory Management",
    description: "Track supplies, medications, and equipment with low-stock alerts and automatic reordering.",
    bg: "bg-green-50",
    stroke: "stroke-green-500",
    icon: "M16 22h16v10H16V22zM20 22v-4a4 4 0 018 0v4",
  },
  {
    title: "Medical Aid Claims",
    description: "Submit and track claims electronically with built-in validation and faster reimbursements.",
    bg: "bg-blue-100",
    stroke: "stroke-blue-900",
    icon: "M16 20h16M16 24h12M16 28h8M20 16h8a2 2 0 012 2v12a2 2 0 01-2 2h-8a2 2 0 01-2-2V18a2 2 0 012-2z",
  },
  {
    title: "Reports & Analytics",
    description: "Comprehensive insights into practice performance, revenue, and patient trends.",
    bg: "bg-green-50",
    stroke: "stroke-green-500",
    icon: "M16 28l4-4 4 4 8-8M16 18h16v14H16V18z",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Everything Your Practice Needs</h2>
          <p className="text-gray-500 text-lg">Powerful features designed to save time and improve patient care</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="bg-white p-6 rounded shadow-sm hover:shadow-md transition">
              <div className={`mb-4 p-4 rounded ${f.bg} inline-block`}>
                <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
                  <path d={f.icon} className={f.stroke} strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-500">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
