import React, { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  number: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, number, label }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
      <div className="icon-bg bg-blue-50 text-clinicblue">{icon}</div>
      <div>
        <div className="text-2xl font-bold">{number}</div>
        <div className="text-sm text-gray-500">{label}</div>
      </div>
    </div>
  );
};

export default StatCard;
