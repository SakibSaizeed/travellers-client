import useServices from "../../hooks/useServices";
import Service from "../Service/Service";

const AllServices = () => {
  const [services] = useServices([]);

  return (
    <section className="bg-sand-100 px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-coral-500">
            Tour Packages
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Choose Your Package
          </h2>
          <p className="mt-3 text-sm text-ink/60 sm:text-base">
            Every itinerary below is built by locals who know the trail, the
            tide, and the best time to see it.
          </p>
        </div>

        {services.length === 0 ? (
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-96 animate-pulse rounded-3xl bg-white/70 shadow-card"
              />
            ))}
          </div>
        ) : (
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Service key={service._id} service={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllServices;
