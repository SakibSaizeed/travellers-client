import { useMemo, useState } from "react";
import useServices from "../../hooks/useServices";
import Service from "../Service/Service";

const selectClass =
  "rounded-full border border-ink/10 bg-white px-4 py-2.5 text-sm font-medium text-ink/70 focus:border-pine-500 focus:outline-none focus:ring-2 focus:ring-pine-500/20";

const AllServices = () => {
  const [services, , { loading, error, retry }] = useServices();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const categories = useMemo(
    () =>
      Array.from(
        new Set(services.map((service) => service.category).filter(Boolean))
      ).sort(),
    [services]
  );

  const visibleServices = useMemo(() => {
    const term = search.trim().toLowerCase();

    let result = services.filter((service) => {
      const matchesTerm =
        !term ||
        [service.packageName, service.destination, service.description]
          .filter(Boolean)
          .some((field) => field.toLowerCase().includes(term));
      const matchesCategory = !category || service.category === category;
      return matchesTerm && matchesCategory;
    });

    if (sort === "price_asc") {
      result = [...result].sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sort === "price_desc") {
      result = [...result].sort((a, b) => Number(b.price) - Number(a.price));
    } else if (sort === "rating") {
      result = [...result].sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0));
    }

    return result;
  }, [services, search, category, sort]);

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

        {services.length > 0 && (
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-3">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tours or destinations..."
              className="min-w-[220px] flex-1 rounded-full border border-ink/10 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-pine-500 focus:outline-none focus:ring-2 focus:ring-pine-500/20"
            />

            {categories.length > 0 && (
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={selectClass}
              >
                <option value="">All Categories</option>
                {categories.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}

            <select value={sort} onChange={(e) => setSort(e.target.value)} className={selectClass}>
              <option value="">Sort By</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        )}

        {error ? (
          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="text-sm font-semibold text-ink/60">
              Couldn't load tour packages. The server may be waking up — this can take
              a minute on the first request.
            </p>
            <button
              type="button"
              onClick={retry}
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-sand transition-colors duration-300 hover:bg-pine-700"
            >
              Try Again
            </button>
          </div>
        ) : loading ? (
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-96 animate-pulse rounded-3xl bg-white/70 shadow-card"
              />
            ))}
          </div>
        ) : visibleServices.length === 0 ? (
          <p className="mt-14 text-center text-sm font-semibold text-ink/40">
            No tours match your search. Try a different keyword or category.
          </p>
        ) : (
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visibleServices.map((service) => (
              <Service key={service._id} service={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllServices;
