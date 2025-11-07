// DashboardButton.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface DashboardButtonProps {
  to: string;
  label: string;
  primary?: boolean;
}

const DashboardButton: React.FC<DashboardButtonProps> = ({ to, label, primary = false }) => {
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded ${
        primary ? 'bg-clinicblue text-white' : 'border text-gray-700'
      }`}
    >
      {label}
    </Link>
  );
};

export default DashboardButton;
