import React from "react";
import useServices, { invalidateServicesCache } from "../../hooks/useServices";
import { API_BASE_URL } from "../../utils/api";
import AdminCard from "./AdminCard";

const ManageService = () => {
  const [services, setServices] = useServices([]);

  const handleDelete = (id) => {
    const confirmAlert = window.confirm(
      "Are you sure you want to delete this package?"
    );
    if (confirmAlert) {
      fetch(`${API_BASE_URL}/services/${id}`, {
        method: "DELETE",
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
        .catch((error) => {
          console.error("Delete failed:", error);
          alert("Couldn't delete this package. Please try again.");
        });
    }
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
          <p className="mt-2 text-sm text-ink/60">
            {services.length} package{services.length === 1 ? "" : "s"} currently live.
          </p>
        </div>

        {services.length === 0 ? (
          <p className="mt-12 text-center text-sm font-semibold text-ink/40">
            No packages yet — add one to see it here.
          </p>
        ) : (
          <div className="mt-10 flex flex-col gap-4">
            {services.map((manageservice) => (
              <AdminCard
                manageservice={manageservice}
                handleDelete={handleDelete}
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
