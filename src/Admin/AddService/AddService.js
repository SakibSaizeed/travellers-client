import React from "react";

const inputClass =
  "block w-full rounded-xl border border-ink/10 bg-sand-100 px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-pine-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-pine-500/20";

const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50";

const AddService = () => {
  const handleAddTask = (e) => {
    e.preventDefault();
    const packageName = e.target.packageName.value;
    const price = e.target.price.value;
    const destination = e.target.destination.value;
    const description = e.target.description.value;

    const inputdata = { packageName, destination, price, description };

    const url = "https://travellers.onrender.com/servicedata";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputdata),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("done", data);
        alert("Service Added");
        e.target.reset();
      });
  };

  return (
    <section className="bg-sand-100 px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-lg">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-pine-600">
            Admin
          </span>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
            Add a Tour Package
          </h1>
          <p className="mt-2 text-sm text-ink/60">
            Publish a new package so it shows up for travellers to book.
          </p>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-7 shadow-card">
          <form onSubmit={handleAddTask} className="space-y-4">
            <div>
              <label htmlFor="add-package-name" className={labelClass}>
                Package Name
              </label>
              <input
                type="text"
                className={inputClass}
                id="add-package-name"
                name="packageName"
                placeholder="e.g. Sajek Valley Getaway"
                required
              />
            </div>

            <div>
              <label htmlFor="add-destination" className={labelClass}>
                Destination
              </label>
              <input
                type="text"
                name="destination"
                className={inputClass}
                id="add-destination"
                placeholder="e.g. Sajek, Rangamati"
                required
              />
            </div>

            <div>
              <label htmlFor="add-price" className={labelClass}>
                Price (BDT)
              </label>
              <input
                type="number"
                name="price"
                className={inputClass}
                id="add-price"
                placeholder="e.g. 5000"
                min="0"
                required
              />
            </div>

            <div>
              <label htmlFor="add-description" className={labelClass}>
                Tour Description
              </label>
              <textarea
                name="description"
                className={`${inputClass} min-h-[100px] resize-none`}
                id="add-description"
                placeholder="What makes this trip worth booking?"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-pine-700 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-sand shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-pine-800 hover:shadow-glow"
            >
              Publish Package
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddService;
