import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Spinner from "../Shared/Spinner/Spinner";
import { API_BASE_URL } from "../utils/api";

const inputClass =
  "block w-full rounded-xl border border-ink/10 bg-sand-100 px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-pine-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-pine-500/20";

const labelClass = "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/50";

const Signup = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    setError("");

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setSubmitting(true);

    fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || "Failed to create account");
        }
        return data;
      })
      .then(({ user: profile, token }) => {
        login(profile, token);
        navigate("/mybooking", { replace: true });
      })
      .catch((err) => setError(err.message))
      .finally(() => setSubmitting(false));
  };

  return (
    <section className="flex min-h-[80vh] items-center bg-sand-100 px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-md">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-coral-500">
            Join Us
          </span>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
            Create Your Account
          </h1>
          <p className="mt-2 text-sm text-ink/60">
            Sign up to book tours and keep track of your trips.
          </p>
        </div>

        <div className="mt-8 rounded-3xl bg-white p-7 shadow-card">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                {error}
              </p>
            )}

            <div>
              <label htmlFor="signup-name" className={labelClass}>
                Full Name
              </label>
              <input
                type="text"
                id="signup-name"
                name="name"
                className={inputClass}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="signup-email" className={labelClass}>
                Email
              </label>
              <input
                type="email"
                id="signup-email"
                name="email"
                className={inputClass}
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="signup-password" className={labelClass}>
                Password
              </label>
              <input
                type="password"
                id="signup-password"
                name="password"
                className={inputClass}
                placeholder="At least 6 characters"
                minLength={6}
                required
              />
            </div>

            <div>
              <label htmlFor="signup-confirm-password" className={labelClass}>
                Confirm Password
              </label>
              <input
                type="password"
                id="signup-confirm-password"
                name="confirmPassword"
                className={inputClass}
                placeholder="Re-enter your password"
                minLength={6}
                required
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-coral-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-600 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting && <Spinner size="sm" tone="light" />}
              {submitting ? "Creating Account..." : "Create Account"}
            </button>

            <p className="text-center text-sm text-ink/60">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-pine-700 hover:underline">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
