import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { API_BASE_URL } from "../../utils/api";

const inputClass =
  "block w-full rounded-xl border border-ink/10 bg-sand-100 px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-pine-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-pine-500/20";

const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50";

const Form = ({ matchData }) => {
  const { user, token } = useAuth();
  const location = useLocation();
  const [submitting, setSubmitting] = useState(false);

  if (!user) {
    return (
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-coral-500">
          Book Now
        </p>
        <h2 className="mt-1 font-display text-xl font-semibold text-ink">
          Selected Package: {matchData?.packageName}
        </h2>
        <p className="mt-4 text-sm text-ink/60">
          Log in to book this trip and track it under My Bookings.
        </p>
        <Link
          to="/login"
          state={{ from: location }}
          className="mt-5 inline-block w-full rounded-full bg-coral-500 px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-600 hover:shadow-glow"
        >
          Log In To Book
        </Link>
      </div>
    );
  }

  const handleAddTask = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const contact = e.target.contact.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const packname = matchData.packageName; //Selected package by user

    const totalInputData = { username, email, contact, packname, address };

    setSubmitting(true);

    fetch(`${API_BASE_URL}/bookingdata`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(totalInputData),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Thank you for Booking.");
        e.target.reset();
      })
      .catch((error) => {
        console.error("Booking failed:", error);
        alert("Couldn't submit your booking. Please try again.");
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-coral-500">
        Book Now
      </p>
      <h2 className="mt-1 font-display text-xl font-semibold text-ink">
        Selected Package: {matchData?.packageName}
      </h2>

      <form onSubmit={handleAddTask} className="mt-6 space-y-4">
        <div>
          <label htmlFor="booking-username" className={labelClass}>
            Full Name
          </label>
          <input
            type="text"
            className={inputClass}
            id="booking-username"
            name="username"
            placeholder="Enter your full name"
            defaultValue={user?.name || ""}
            required
          />
        </div>

        <div>
          <label htmlFor="booking-email" className={labelClass}>
            Email
          </label>
          <input
            type="email"
            className={inputClass}
            id="booking-email"
            name="email"
            placeholder="you@example.com"
            defaultValue={user?.email || ""}
            required
          />
        </div>

        <div>
          <label htmlFor="booking-contact" className={labelClass}>
            Mobile Number
          </label>
          <input
            type="tel"
            name="contact"
            className={inputClass}
            id="booking-contact"
            placeholder="01XXXXXXXXX"
            required
          />
        </div>

        <div>
          <label htmlFor="booking-address" className={labelClass}>
            Address
          </label>
          <input
            type="text"
            name="address"
            className={inputClass}
            id="booking-address"
            placeholder="Your address"
            required
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-full bg-coral-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-600 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Booking..." : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
};

export default Form;
