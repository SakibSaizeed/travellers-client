import React from "react";

const sizeClasses = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-10 w-10 border-[3px]",
};

const toneClasses = {
  brand: "border-pine-100 border-t-pine-600",
  light: "border-white/30 border-t-white",
  danger: "border-red-200 border-t-red-600",
};

const Spinner = ({ size = "md", tone = "brand", className = "" }) => (
  <span
    role="status"
    aria-label="Loading"
    className={`inline-block animate-spin rounded-full ${sizeClasses[size]} ${toneClasses[tone]} ${className}`}
  />
);

export default Spinner;
