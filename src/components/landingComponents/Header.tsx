import React from "react";
import DashboardButton from "../shared/DashboardButton";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="6" fill="#1E3A8A" />
            <path d="M16 8v16M8 16h16" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span className="text-xl font-semibold text-blue-900">ClinicPro</span>
        </div>
        <ul className="hidden sm:flex gap-6 items-center">
          <li><a href="#features" className="hover:text-blue-900 font-medium">Features</a></li>
          <li><a href="#pricing" className="hover:text-blue-900 font-medium">Pricing</a></li>
          <li><a href="#testimonials" className="hover:text-blue-900 font-medium">Testimonials</a></li>
          <li>
            <a href="#contact" className="border border-blue-900 text-blue-900 px-4 py-2 rounded hover:bg-gray-100">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center gap-3 flex-wrap">
          <DashboardButton to="/practitioner-dashboard" label="Practitioner Dashboard" />
          <DashboardButton to="/dashboard-a" label="Owner Dashboard" primary />
        </div>
    </header>
  );
};

export default Header;
