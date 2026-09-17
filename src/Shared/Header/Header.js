import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/allservices", label: "Packages" },
  { to: "/mybooking", label: "My Bookings" },
  { to: "/addservice", label: "Add Service" },
  { to: "/manageservice", label: "Manage Service" },
];

const CompassIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="9" />
    <path d="M14.5 9.5L13 13l-3.5 1.5L11 11l3.5-1.5z" fill="currentColor" stroke="none" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const desktopLinkClass = ({ isActive }) =>
    `relative py-2 text-sm font-semibold tracking-wide transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-coral-500 after:transition-all after:duration-300 ${
      isActive
        ? "text-pine-700 after:w-full"
        : "text-ink/70 after:w-0 hover:text-pine-700 hover:after:w-full"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
      isActive ? "bg-pine-50 text-pine-700" : "text-ink/70 hover:bg-sand-100"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-ink/5 bg-white/90 shadow-card backdrop-blur-md" : "border-transparent bg-white/70 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <Link to="/" className="group flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-pine-500 to-pine-700 text-sand shadow-soft transition-transform duration-300 group-hover:rotate-12">
            <CompassIcon />
          </span>
          <span className="font-display text-xl font-semibold text-ink">
            Tour<span className="text-coral-500">'D</span> Travellers
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.end} className={desktopLinkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          {user ? (
            <>
              <Link
                to="/mybooking"
                className="text-sm font-semibold text-ink/70 transition-colors hover:text-pine-700"
              >
                Hi, {user.name.split(" ")[0]}
              </Link>
              <button
                type="button"
                onClick={logout}
                className="rounded-full border border-ink/10 px-6 py-2.5 text-sm font-semibold text-ink/70 transition-colors duration-300 hover:bg-sand-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-semibold text-ink/70 transition-colors hover:text-pine-700"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-sand transition-all duration-300 hover:-translate-y-0.5 hover:bg-pine-700 hover:shadow-soft"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink transition-colors hover:bg-sand-100 lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen ? "max-h-[26rem]" : "max-h-0"
        }`}
      >
        <ul className="mx-4 mb-4 flex flex-col gap-1 rounded-2xl bg-white p-3 shadow-card">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                onClick={() => setMenuOpen(false)}
                className={mobileLinkClass}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-1">
            {user ? (
              <button
                type="button"
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="block w-full rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-sand"
              >
                Logout ({user.name.split(" ")[0]})
              </button>
            ) : (
              <div className="flex flex-col gap-2">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl border border-ink/10 px-4 py-3 text-center text-sm font-semibold text-ink/70"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-sand"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
