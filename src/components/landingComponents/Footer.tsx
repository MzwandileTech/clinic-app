import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300">
      {/* Top Footer Sections */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            {/* ClinicPro Logo from Header */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <rect width="32" height="32" rx="6" fill="#1E3A8A" />
              <path
                d="M16 8v16M8 16h16"
                stroke="#10B981"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-semibold text-white">ClinicPro</span>
          </div>
          <p className="text-sm text-slate-400">
            Complete practice management software for modern clinics.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-blue-0">Product</h4>
          <ul className="text-sm text-slate-400 space-y-1">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-blue-0">Support</h4>
          <ul className="text-sm text-slate-400 space-y-1">
            <li>Help Center</li>
            <li>Documentation</li>
            <li>Training</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-blue-0">Contact</h4>
          <p className="text-sm text-slate-400">support@clinicpro.com</p>
          <p className="text-sm text-slate-400">+1 (234) 567-890</p>
          <p className="text-sm text-slate-400">Mon-Fri 8am-6pm EST</p>
        </div>
      </div>

      {/* Line Separator */}
      <div className="mx-6 border-t border-slate-700"></div>

      {/* Bottom Footer Bar */}
      <div className="bg-slate-900 text-slate-400 text-sm py-3">
        <div className="max-w-6xl mx-auto px-4 flex flex-col space-y-1 text-center">
          <div>&copy; 2025 ClinicPro. All rights reserved.</div>
          <div className="space-x-4">
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
