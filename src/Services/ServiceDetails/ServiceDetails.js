import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import useServices from "../../hooks/useServices";
import Form from "../../Shared/Form/Form";
import PageLoader from "../../Shared/PageLoader/PageLoader";
import StarRating from "../../Shared/StarRating/StarRating";
import { resolvePackagePhoto } from "../../utils/content";
import Service from "../Service/Service";

const PinIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6.5-5.7-6.5-11A6.5 6.5 0 1118.5 10c0 5.3-6.5 11-6.5 11z" />
    <circle cx="12" cy="10" r="2.2" />
  </svg>
);

const RELATED_LIMIT = 3;

const ServiceDetails = () => {
  const { _id } = useParams();
  const [services, , { loading, error, retry }] = useServices();
  const matchData = services.find((d) => d._id === _id);

  const relatedServices = useMemo(() => {
    if (!matchData) return [];

    const sameCategory = services.filter(
      (service) => service._id !== _id && service.category && service.category === matchData.category
    );

    if (sameCategory.length >= RELATED_LIMIT || !matchData.destination) {
      return sameCategory.slice(0, RELATED_LIMIT);
    }

    const sameDestination = services.filter(
      (service) =>
        service._id !== _id &&
        !sameCategory.includes(service) &&
        service.destination === matchData.destination
    );

    return [...sameCategory, ...sameDestination].slice(0, RELATED_LIMIT);
  }, [services, matchData, _id]);

  if (error) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
        <p className="text-sm font-semibold text-ink/60">
          Couldn't load this package. The server may be waking up — this can take a
          minute on the first request.
        </p>
        <button
          type="button"
          onClick={retry}
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-sand transition-colors duration-300 hover:bg-pine-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (loading) {
    return <PageLoader message="Loading package details..." minHeight="min-h-[60vh]" />;
  }

  if (!matchData) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <p className="text-sm font-semibold text-ink/50">
          We couldn't find that package. It may have been removed.
        </p>
      </div>
    );
  }

  const { packageName, destination, category, rating, price, description } = matchData;
  const photo = resolvePackagePhoto(matchData);
  const priceLabel = Number(price);

  return (
    <>
      <section className="bg-sand-100 px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden rounded-3xl bg-white shadow-card">
            <div className="relative h-72 sm:h-80">
              <img
                src={photo.image}
                alt={destination || packageName}
                className="h-full w-full object-cover"
              />
              {category && (
                <span className="absolute left-5 top-5 rounded-full bg-ink/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-sand backdrop-blur-sm">
                  {category}
                </span>
              )}
              <span className="absolute right-5 top-5 rounded-full bg-coral-500 px-4 py-1.5 text-sm font-bold text-white shadow-soft">
                {Number.isFinite(priceLabel) ? `৳${priceLabel.toLocaleString()}` : price}
              </span>
            </div>
            <div className="p-7">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-pine-600">
                  <PinIcon />
                  {destination}
                </div>
                <StarRating rating={rating} />
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

      {relatedServices.length > 0 && (
        <section className="bg-sand-100 px-4 pb-20 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-2xl font-semibold text-ink">
              Related Tours
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((service) => (
                <Service key={service._id} service={service} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ServiceDetails;
