import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-screen-xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-md bg-clinicblue flex items-center justify-center text-white">CP</div>
            <span className="text-lg font-semibold text-white">ClinicPro</span>
          </div>
          <p className="text-gray-400 text-sm">Complete practice management software for modern clinics.</p>
        </div>
        <div>
          <h4 className="text-white mb-2">Product</h4>
          <ul className="text-gray-400 space-y-1 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white mb-2">Support</h4>
          <ul className="text-gray-400 space-y-1 text-sm">
            <li>Help Center</li>
            <li>Documentation</li>
            <li>Training</li>
            <li>System Status</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white mb-2">Contact</h4>
          <ul className="text-gray-400 space-y-1 text-sm">
            <li>support@clinicpro.com</li>
            <li>+1 (234) 567-890</li>
            <li>Mon-Fri 8am-6pm EST</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4">
        <div className="max-w-screen-xl mx-auto px-6 flex items-center justify-between text-gray-500 text-sm">
          <div>&copy; 2025 ClinicPro. All rights reserved.</div>
          <div className="flex gap-4">
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
