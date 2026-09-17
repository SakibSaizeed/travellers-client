import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { API_BASE_URL } from "../utils/api";

const inputClass =
  "block w-full rounded-xl border border-ink/10 bg-sand-100 px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-pine-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-pine-500/20";

const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50";

const Login = () => {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    setError("");
    setSubmitting(true);

    fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || "Failed to log in");
        }
        return data;
      })
      .then(({ user: profile, token }) => {
        login(profile, token);
        navigate(location.state?.from?.pathname || "/mybooking", { replace: true });
      })
      .catch((err) => setError(err.message))
      .finally(() => setSubmitting(false));
  };

  return (
    <section className="flex min-h-[80vh] items-center bg-sand-100 px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-md">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-coral-500">
            Welcome Back
          </span>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
            {user ? "You're Signed In" : "Log In To Continue"}
          </h1>
          <p className="mt-2 text-sm text-ink/60">
            {user
              ? "Jump straight to your bookings, or sign out below."
              : "Sign in to book a trip and see your bookings."}
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
              {error && (
                <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                  {error}
                </p>
              )}

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

              <div>
                <label htmlFor="login-password" className={labelClass}>
                  Password
                </label>
                <input
                  type="password"
                  id="login-password"
                  name="password"
                  className={inputClass}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-coral-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-600 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Logging In..." : "Log In"}
              </button>

              <p className="text-center text-sm text-ink/60">
                New here?{" "}
                <Link to="/signup" className="font-semibold text-pine-700 hover:underline">
                  Create an account
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
