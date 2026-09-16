import React from "react";
import useServices from "../hooks/useServices";
import InfoCard from "./InfoCard";

const Special = () => {
  const [services] = useServices([]);
  const special = services.slice(3);

  if (special.length === 0) {
    return null;
  }

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-coral-500">
            Limited Time
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Our Most Popular &amp; Special Offers
          </h2>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {special.map((item) => (
            <InfoCard special={item} key={item._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Special;
