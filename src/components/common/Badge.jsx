import React from 'react';

const variants = {
  primary: "bg-blue-100 text-blue-800",
  secondary: "bg-gray-100 text-gray-800",
  success: "bg-green-100 text-green-800",
  danger: "bg-red-100 text-red-800",
  warning: "bg-yellow-100 text-yellow-800",
  info: "bg-indigo-100 text-indigo-800",
  light: "bg-gray-50 text-gray-600",
  dark: "bg-gray-800 text-white"
};

const sizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-base"
};

const Badge = ({
  children,
  variant = "primary",
  size = "md",
  rounded = true,
  className = "",
  onClick,
  removable = false,
  onRemove,
  ...props
}) => {
  const baseClasses = "inline-flex items-center font-medium";
  const variantClasses = variants[variant] || variants.primary;
  const sizeClasses = sizes[size] || sizes.md;
  const roundedClasses = rounded ? "rounded-full" : "rounded";
  const clickableClasses = onClick ? "cursor-pointer hover:opacity-80" : "";

  return (
    <span
      className={`
        ${baseClasses}
        ${variantClasses}
        ${sizeClasses}
        ${roundedClasses}
        ${clickableClasses}
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {children}
      {removable && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.(e);
          }}
          className="ml-1.5 hover:opacity-75 focus:outline-none"
        >
          <svg
            className="w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </span>
  );
};

// Predefined badge styles
Badge.Pill = (props) => (
  <Badge rounded {...props} />
);

Badge.Tag = (props) => (
  <Badge
    variant="light"
    size="sm"
    className="font-normal"
    {...props}
  />
);

Badge.Status = ({ status, ...props }) => {
  const statusVariants = {
    active: "success",
    pending: "warning",
    inactive: "secondary",
    error: "danger"
  };
  
  return (
    <Badge
      variant={statusVariants[status] || "secondary"}
      size="sm"
      {...props}
    />
  );
};

export default Badge;