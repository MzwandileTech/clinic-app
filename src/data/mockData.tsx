// src/data/mockData.tsx

// Define the type for iconPaths keys (the fix for TS7053)
export type IconKey = keyof typeof iconPaths;

export interface Appointment {
  id: number;
  time: string;
  patient: string;
  details: string;
  type: string;
  status: 'Upcoming' | 'Completed' | 'Cancelled';
}

export interface Patient {
  id: number;
  name: string;
  patientId: string;
  age: number;
  lastVisit: string;
  status: 'Active' | 'On Hold';
  image: string;
}

export interface Stat {
    value: string;
    label: string;
    icon: string;
    color: string;
}

export interface NavLink {
    label: string;
    page: string;
    iconKey: IconKey; // <-- Using the specific union type
}

export interface NavGroup {
    title: string;
    links: NavLink[];
}

const iconPaths = {
  // Home icon
  dashboard: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3M12 9v4m-2-2h4',
  // Calendar icon (for appointments)
  appointments: 'M8 7V3m8 4V3m-9 9h.01M16 12h.01M12 16h.01M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z',
  // Users/Patients icon
  patients: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M16 3.13a4 4 0 010 7.75M10 4a4 4 0 100 8 4 4 0 000-8z',
  // Financial/Reports icon
  reports: 'M9 17v-4m3 4v-8m3 8V7m-1.333-3h-9.334A2.333 2.333 0 002 6.333v11.334A2.333 2.333 0 004.333 20h9.334A2.333 2.333 0 0016 17.667V6.333A2.333 2.333 0 0013.667 4z',
  // Settings icon
  settings: 'M12 1a2 2 0 00-2 2v.12a8 8 0 104 0V3a2 2 0 00-2-2zm0 14a3 3 0 110-6 3 3 0 010 6z',
};

const navigationLinks: NavGroup[] = [
  {
    title: 'MAIN MENU',
    links: [
      { label: 'Dashboard', page: 'dashboard', iconKey: 'dashboard' },
      { label: 'Appointments', page: 'appointments', iconKey: 'appointments' },
      { label: 'Patient Records', page: 'patients', iconKey: 'patients' },
      { label: 'Reports & Analytics', page: 'reports', iconKey: 'reports' },
    ],
  },
  {
    title: 'OTHERS',
    links: [
      { label: 'Settings', page: 'settings', iconKey: 'settings' },
    ],
  },
];

const mockAppointments: Appointment[] = [
  { id: 1, time: '10:00 AM', patient: 'Mark Johnson', details: 'ID: PT-00101 • Medical Aid: MediCare', type: 'Follow-up', status: 'Upcoming' },
  { id: 2, time: '11:00 AM', patient: 'Lisa Anderson', details: 'ID: PT-00256 • Medical Aid: HealthFirst', type: 'Consultation', status: 'Completed' },
  { id: 3, time: '1:30 PM', patient: 'Emily White', details: 'ID: PT-00389 • Medical Aid: None', type: 'Procedure', status: 'Upcoming' },
  { id: 4, time: '2:30 PM', patient: 'David Chen', details: 'ID: PT-00412 • Medical Aid: BlueCross', type: 'Consultation', status: 'Cancelled' },
  { id: 5, time: '3:30 PM', patient: 'Jessica Lee', details: 'ID: PT-00505 • Medical Aid: Cigna', type: 'Check-up', status: 'Completed' },
];

const mockPatients: Patient[] = [
  { id: 1, name: 'Sarah Jones', patientId: 'PT-00101', age: 34, lastVisit: '2025-10-25', status: 'Active', image: 'https://placehold.co/100x100/94A3B8/FFFFFF?text=SJ' },
  { id: 2, name: 'Robert Smith', patientId: 'PT-00102', age: 58, lastVisit: '2025-11-01', status: 'Active', image: 'https://placehold.co/100x100/475569/FFFFFF?text=RS' },
  { id: 3, name: 'Anna Garcia', patientId: 'PT-00103', age: 22, lastVisit: '2025-09-15', status: 'On Hold', image: 'https://placehold.co/100x100/C084FC/FFFFFF?text=AG' },
  { id: 4, name: 'Tom Wilson', patientId: 'PT-00104', age: 71, lastVisit: '2025-11-05', status: 'Active', image: 'https://placehold.co/100x100/EF4444/FFFFFF?text=TW' },
];

const mockStats: Stat[] = [
  { value: '45', label: "Today's Appointments", icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-blue-500' },
  { value: '89%', label: 'Appointment Attendance', icon: 'M13 10V3L4 14h7v7l9-11h-7z', color: 'bg-green-500' },
  { value: '92%', label: 'Treatment Success Rate', icon: 'M9 12l2 2 4-4m-6 4H4m0 0v-4', color: 'bg-purple-500' },
  { value: '15', label: 'New Patients This Month', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 6a8 8 0 00-8 8h16a8 8 0 00-8-8z', color: 'bg-yellow-500' },
  { value: '4.8/5', label: 'Patient Satisfaction', icon: 'M11.049 2.927c.307-1.162 1.684-1.162 1.991 0L15.3 7.854a2 2 0 001.5 1.5l4.927.75c1.162.307 1.162 1.684 0 1.991l-4.927.75a2 2 0 00-1.5 1.5l-.927 4.927c-.307 1.162-1.684 1.162-1.991 0l-.927-4.927a2 2 0 00-1.5-1.5l-4.927-.75c-1.162-.307-1.162-1.684 0-1.991l4.927-.75a2 2 0 001.5-1.5l.927-4.927z', color: 'bg-red-500' },
];

const getStatusBadge = (status: Appointment['status'] | Patient['status']): string => {
  switch (status) {
    case 'Upcoming':
    case 'Active':
      return 'bg-blue-100 text-blue-800';
    case 'Completed':
      return 'bg-green-100 text-green-800';
    case 'Cancelled':
      return 'bg-red-100 text-red-800';
    case 'On Hold':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export { 
    iconPaths, 
    navigationLinks, 
    mockAppointments, 
    mockPatients, 
    mockStats, 
    getStatusBadge 
};