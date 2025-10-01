// components/Button.tsx
import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  let baseStyle =
    "px-4 py-2 rounded-lg font-semibold transition-all duration-200";

  let variantStyle = "";
  switch (variant) {
    case "primary":
      variantStyle = "bg-blue-600 text-white hover:bg-blue-700";
      break;
    case "secondary":
      variantStyle = "bg-gray-200 text-gray-700 hover:bg-gray-300";
      break;
    case "danger":
      variantStyle = "bg-red-600 text-white hover:bg-red-700";
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
