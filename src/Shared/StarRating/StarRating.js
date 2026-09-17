import React from "react";

const StarIcon = ({ filled }) => (
  <svg
    viewBox="0 0 20 20"
    className="h-3.5 w-3.5"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 1.5l2.6 5.6 6.1.6-4.6 4.2 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.2 6.1-.6z"
    />
  </svg>
);

// Renders nothing when a package has no rating yet, so older documents degrade gracefully.
const StarRating = ({ rating, className = "" }) => {
  const value = Number(rating);
  if (!Number.isFinite(value)) return null;
  const rounded = Math.round(value);

  return (
    <div className={`flex items-center gap-1 text-amber-500 ${className}`}>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon key={star} filled={star <= rounded} />
        ))}
      </div>
      <span className="text-xs font-semibold text-ink/60">{value.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;
