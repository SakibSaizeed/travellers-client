import React, { useState } from "react";
import useServices, { invalidateServicesCache } from "../../hooks/useServices";
import useAuth from "../../hooks/useAuth";
import { API_BASE_URL } from "../../utils/api";
import AdminCard from "./AdminCard";

const ManageService = () => {
  const [services, setServices, { loading, error, retry }] = useServices();
  const { token } = useAuth();
  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = (id) => {
    const confirmAlert = window.confirm(
      "Are you sure you want to delete this package?"
    );
    if (!confirmAlert) return;

    setDeletingId(id);
    fetch(`${API_BASE_URL}/services/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount > 0) {
          const remain = services.filter((service) => service._id !== id);
          setServices(remain);
          invalidateServicesCache();
        } else {
          alert("Couldn't delete this package. Please try again.");
        }
      })
      .catch((deleteError) => {
        console.error("Delete failed:", deleteError);
        alert("Couldn't delete this package. Please try again.");
      })
      .finally(() => setDeletingId(null));
  };

  return (
    <section className="bg-sand-100 px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-pine-600">
            Admin
          </span>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
            Manage Packages
          </h1>
          {!loading && !error && (
            <p className="mt-2 text-sm text-ink/60">
              {services.length} package{services.length === 1 ? "" : "s"} currently live.
            </p>
          )}
        </div>

        {loading ? (
          <div className="mt-10 flex flex-col gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-28 animate-pulse rounded-3xl bg-white/70 shadow-card" />
            ))}
          </div>
        ) : error ? (
          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="text-sm font-semibold text-ink/60">
              Couldn't load packages. Please try again.
            </p>
            <button
              type="button"
              onClick={retry}
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-sand transition-colors duration-300 hover:bg-pine-700"
            >
              Try Again
            </button>
          </div>
        ) : services.length === 0 ? (
          <p className="mt-12 text-center text-sm font-semibold text-ink/40">
            No packages yet — add one to see it here.
          </p>
        ) : (
          <div className="mt-10 flex flex-col gap-4">
            {services.map((manageservice) => (
              <AdminCard
                manageservice={manageservice}
                handleDelete={handleDelete}
                deleting={deletingId === manageservice._id}
                key={manageservice._id}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ManageService;
