import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const inputClass =
  "block w-full rounded-xl border border-ink/10 bg-sand-100 px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-pine-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-pine-500/20";

const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50";

const Login = () => {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    if (!name || !email) return;
    login({ name, email });
    navigate("/mybooking");
  };

  return (
    <section className="flex min-h-[80vh] items-center bg-sand-100 px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-md">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-coral-500">
            Welcome
          </span>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
            {user ? "You're Signed In" : "Log In To Continue"}
          </h1>
          <p className="mt-2 text-sm text-ink/60">
            {user
              ? "Jump straight to your bookings, or sign out below."
              : "No password needed yet — this starts a quick demo session so we can find your bookings."}
          </p>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-7 shadow-card">
          {user ? (
            <div className="text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-pine-50 font-display text-xl font-bold text-pine-700">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <p className="mt-4 font-display text-lg font-semibold text-ink">
                {user.name}
              </p>
              <p className="text-sm text-ink/50">{user.email}</p>

              <Link
                to="/mybooking"
                className="mt-6 block w-full rounded-full bg-coral-500 px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-600 hover:shadow-glow"
              >
                View My Bookings
              </Link>
              <button
                type="button"
                onClick={logout}
                className="mt-3 w-full rounded-full border border-ink/10 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-ink/60 transition-colors duration-300 hover:bg-sand-100"
              >
                Log Out
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="login-name" className={labelClass}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="login-name"
                  name="name"
                  className={inputClass}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="login-email" className={labelClass}>
                  Email
                </label>
                <input
                  type="email"
                  id="login-email"
                  name="email"
                  className={inputClass}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-coral-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-600 hover:shadow-glow"
              >
                Continue
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
