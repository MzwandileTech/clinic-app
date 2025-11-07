import React from "react";

interface AppButtonProps {
  name: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const AppButton: React.FC<AppButtonProps> = ({
  name,
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-clinicblue text-white rounded hover:bg-clinicblue/90 disabled:opacity-50 disabled:cursor-not-allowed transition ${className}`}
    >
      {name}
    </button>
  );
};

export default AppButton;
