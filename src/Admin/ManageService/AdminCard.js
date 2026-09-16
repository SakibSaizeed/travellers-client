import React from "react";
import { getPackagePhoto } from "../../utils/content";

const PinIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6.5-5.7-6.5-11A6.5 6.5 0 1118.5 10c0 5.3-6.5 11-6.5 11z" />
    <circle cx="12" cy="10" r="2.2" />
  </svg>
);

const AdminCard = ({ manageservice, handleDelete }) => {
  const { packageName, destination, price, _id } = manageservice;
  const photo = getPackagePhoto(_id ?? packageName);
  const priceLabel = Number(price);

  return (
    <div className="flex flex-col items-start gap-4 rounded-3xl bg-white p-4 shadow-card sm:flex-row sm:items-center">
      <img
        src={photo.image}
        alt={destination || packageName}
        className="h-20 w-full shrink-0 rounded-2xl object-cover sm:w-20"
      />

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-pine-600">
          <PinIcon />
          {destination}
        </div>
        <h3 className="mt-1 truncate font-display text-lg font-semibold text-ink">
          {packageName}
        </h3>
        <p className="mt-1 text-sm font-bold text-coral-500">
          {Number.isFinite(priceLabel) ? `৳${priceLabel.toLocaleString()}` : price}
        </p>
      </div>

      <div className="flex w-full shrink-0 gap-2 sm:w-auto">
        <button
          type="button"
          className="flex-1 rounded-full border border-ink/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-ink/70 transition-colors duration-300 hover:bg-sand-100 sm:flex-none"
        >
          Update
        </button>
        <button
          type="button"
          onClick={() => handleDelete(_id)}
          className="flex-1 rounded-full bg-red-50 px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-red-600 transition-colors duration-300 hover:bg-red-100 sm:flex-none"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AdminCard;
