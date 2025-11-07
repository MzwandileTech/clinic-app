import React from "react";

interface FilterSelectProps {
  label: string;
  options: string[];
}

const FilterSelect: React.FC<FilterSelectProps> = ({ label, options }) => {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <select className="w-full border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500">
        {options.map((opt, i) => (
          <option key={i}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterSelect;
