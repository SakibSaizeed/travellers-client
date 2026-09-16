import React from "react";
import { useParams } from "react-router-dom";
import useServices from "../../hooks/useServices";
import Form from "../../Shared/Form/Form";
import { getPackagePhoto } from "../../utils/content";

const PinIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6.5-5.7-6.5-11A6.5 6.5 0 1118.5 10c0 5.3-6.5 11-6.5 11z" />
    <circle cx="12" cy="10" r="2.2" />
  </svg>
);

const ServiceDetails = () => {
  const { _id } = useParams();
  const [services] = useServices([]);
  const matchData = services.find((d) => d._id === _id);

  if (!matchData) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <p className="text-sm font-semibold text-ink/50">Loading package details...</p>
      </div>
    );
  }

  const { packageName, destination, price, description } = matchData;
  const photo = getPackagePhoto(_id ?? packageName);
  const priceLabel = Number(price);

  return (
    <section className="bg-sand-100 px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-start">
        <div className="overflow-hidden rounded-3xl bg-white shadow-card">
          <div className="relative h-72 sm:h-80">
            <img
              src={photo.image}
              alt={destination || packageName}
              className="h-full w-full object-cover"
            />
            <span className="absolute right-5 top-5 rounded-full bg-coral-500 px-4 py-1.5 text-sm font-bold text-white shadow-soft">
              {Number.isFinite(priceLabel) ? `৳${priceLabel.toLocaleString()}` : price}
            </span>
          </div>
          <div className="p-7">
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-pine-600">
              <PinIcon />
              {destination}
            </div>
            <h1 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
              {packageName}
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-ink/60 sm:text-base">
              {description}
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-7 shadow-card">
          <Form matchData={matchData} />
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
