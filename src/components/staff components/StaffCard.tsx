import React from "react";

interface StaffCardProps {
  image: string;
  name: string;
  occupation: string;
}

const StaffCard: React.FC<StaffCardProps> = ({ image, name, occupation }) => {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={image} alt={name} className="w-12 h-12 rounded-full" />
          <div>
            <div className="font-medium">{name}</div>
            <div className="text-sm text-gray-500">{occupation}</div>
          </div>
        </div>
        <div>
          <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
            Active
          </span>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded text-sm">Edit</button>
          <button className="px-3 py-1 border rounded text-sm">Deactivate</button>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
