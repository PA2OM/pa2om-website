import React from 'react';

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-600 text-white hover:bg-gray-700",
  black: "bg-black text-white hover:bg-gray-800",
  outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-3 text-lg"
};

const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  rounded = false,
  className = "", 
  onClick,
  type = "button",
  disabled = false,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-colors duration-300";
  const roundedClass = rounded ? "rounded-full" : "rounded-lg";
  const variantClass = variants[variant] || variants.primary;
  const sizeClass = sizes[size] || sizes.md;
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

  return (
    <button
      type={type}
      className={`${baseClasses} ${roundedClass} ${variantClass} ${sizeClass} ${disabledClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;