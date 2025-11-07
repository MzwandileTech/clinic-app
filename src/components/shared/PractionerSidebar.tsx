import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const iconPaths = {
  dashboard: 'M12 1.75l7.5 7.5V18a2 2 0 01-2 2H4a2 2 0 01-2-2v-8.75L9.5 1.75h3zM9 14h2v4H9v-4zM5 14h2v4H5v-4zM13 6h2v12h-2V6z',
  appointments: 'M3 8h18M8 4v4m8-4v4M5 20h14a2 2 0 002-2V8H3v10a2 2 0 002 2z', // calendar icon
  records: 'M5 4h10l4 4v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z', // folder
  notes: 'M4 4h12v2H4zm0 4h12v2H4zm0 4h8v2H4z', // notes
  coding: 'M8 6L3 12l5 6M16 6l5 6-5 6', // code brackets
  profile: 'M15 19a2 2 0 002-2v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2a2 2 0 002 2h10zM10 9a4 4 0 100-8 4 4 0 000 8z' // user/profile
} as const;

type IconKey = keyof typeof iconPaths;

interface NavLinkItem {
  to: string;
  label: string;
  iconKey: IconKey;
}

interface NavSection {
  title: string;
  links: NavLinkItem[];
}

const sections: NavSection[] = [
  {
    title: 'CLINICAL',
    links: [
      { to: '/practitioner-dashboard', label: 'Dashboard', iconKey: 'dashboard' },
      { to: '/appointments', label: 'My Appointments', iconKey: 'appointments' },
      { to: '/patient-records', label: 'Patient Records', iconKey: 'records' }
    ]
  },
  {
    title: 'CLINICAL TOOLS',
    links: [
      { to: '/medical-notes', label: 'Medical Notes', iconKey: 'notes' },
      { to: '/medical-coding', label: 'Medical Coding', iconKey: 'coding' }
    ]
  },
  {
    title: 'ACCOUNT',
    links: [
      { to: '/profile-settings', label: 'Profile & Settings', iconKey: 'profile' }
    ]
  }
];

export default function PractitionerSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (window.innerWidth <= 768 && ref.current && !ref.current.contains(e.target as Node) && !collapsed) {
        setCollapsed(true);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [collapsed]);

  return (
    <aside
      ref={ref}
      className={`bg-white border-r h-screen flex flex-col ${
        collapsed ? 'w-16' : 'w-64'
      } transition-all`}
    >
      <div className="p-4 flex items-center justify-between border-b">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold">+</div>
          {!collapsed && <span className="font-semibold text-blue-600">ClinicPro</span>}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded text-gray-500 hover:bg-gray-100"
          aria-label="Toggle sidebar"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M3 5h14M3 10h14M3 15h14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div className="p-4 overflow-auto flex-1">
        {sections.map(section => (
          <div key={section.title} className="mb-6">
            {!collapsed && (
              <h4 className="text-xs uppercase text-gray-500 mb-2">
                {section.title}
              </h4>
            )}
            <ul className="space-y-1">
              {section.links.map(link => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      isActive
                        ? 'flex items-center gap-3 p-2 rounded bg-blue-50 text-blue-600 font-medium'
                        : 'flex items-center gap-3 p-2 rounded text-gray-600 hover:bg-gray-100'
                    }
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={iconPaths[link.iconKey]} />
                    </svg>
                    {!collapsed && <span>{link.label}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <div className={`flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
          <img
            src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=200"
            alt="practitioner"
            className="w-10 h-10 rounded-full"
          />
          {!collapsed && (
            <div className="flex-1">
              <div className="text-sm font-medium">Dr. James Carter</div>
              <div className="text-xs text-gray-500">Dentist</div>
            </div>
          )}
        </div>
        {!collapsed && (
          <div className="mt-2 flex justify-end">
            <button className="text-red-500 text-xs hover:text-red-700 font-medium border rounded px-2 py-1">
              Logout
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
