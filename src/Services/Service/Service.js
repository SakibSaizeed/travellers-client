import React from "react";
import { useNavigate } from "react-router-dom";
import { resolvePackagePhoto } from "../../utils/content";
import StarRating from "../../Shared/StarRating/StarRating";

const PinIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6.5-5.7-6.5-11A6.5 6.5 0 1118.5 10c0 5.3-6.5 11-6.5 11z" />
    <circle cx="12" cy="10" r="2.2" />
  </svg>
);

const Service = ({ service }) => {
  const { packageName, destination, category, rating, price, description, _id } = service;
  const navigate = useNavigate();
  const photo = resolvePackagePhoto(service);
  const priceLabel = Number(price);

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
      <div className="relative h-52 overflow-hidden">
        <img
          src={photo.image}
          alt={destination || packageName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
        {category && (
          <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-sand backdrop-blur-sm">
            {category}
          </span>
        )}
        <span className="absolute right-4 top-4 rounded-full bg-coral-500 px-3 py-1 text-xs font-bold text-white shadow-soft">
          {Number.isFinite(priceLabel) ? `৳${priceLabel.toLocaleString()}` : price}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-pine-600">
            <PinIcon />
            {destination}
          </div>
          <StarRating rating={rating} />
        </div>
        <h3 className="mt-2 font-display text-xl font-semibold text-ink">{packageName}</h3>
        <p
          className="mt-2 flex-1 text-sm leading-relaxed text-ink/60"
          style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}
        >
          {description}
        </p>
        <button
          type="button"
          onClick={() => navigate(`/service/${_id}`)}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-sand transition-colors duration-300 hover:bg-pine-700"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Service;
