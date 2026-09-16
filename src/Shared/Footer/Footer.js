import React from "react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Packages", to: "/allservices" },
  { label: "My Bookings", to: "/mybooking" },
  { label: "Add a Service", to: "/addservice" },
  { label: "Manage Services", to: "/manageservice" },
];

const destinations = [
  "Sajek Valley",
  "Sundarbans",
  "Sreemangal",
  "Cox's Bazar",
  "Bandarban",
  "Rangamati",
];

const CompassIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="9" />
    <path d="M14.5 9.5L13 13l-3.5 1.5L11 11l3.5-1.5z" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M13.5 21v-7.5H16l.5-3.5h-3V8c0-.97.27-1.63 1.66-1.63H16.6V3.23C16.3 3.2 15.3 3.1 14.13 3.1c-2.44 0-4.13 1.49-4.13 4.22V10H7.5v3.5H10V21h3.5z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5c0-.6.4-1 1-1h2.6c.5 0 .9.3 1 .8l.8 3.2c.1.4 0 .8-.3 1.1L7.5 10.6a12 12 0 005.9 5.9l1.5-1.6c.3-.3.7-.4 1.1-.3l3.2.8c.5.1.8.5.8 1V19c0 .6-.4 1-1 1h-1.5C9.9 20 4 14.1 4 6.5V5z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 7l7.5 6 7.5-6" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6.5-5.7-6.5-11A6.5 6.5 0 1118.5 10c0 5.3-6.5 11-6.5 11z" />
    <circle cx="12" cy="10" r="2.2" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.24h4.56V23H.22V8.24zM8.19 8.24h4.37v2.02h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V23h-4.56v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.8-2.65 3.65V23H8.19V8.24z" />
  </svg>
);

const IconLink = ({ label, children }) => (
  <a
    href="#top"
    aria-label={label}
    className="grid h-9 w-9 place-items-center rounded-full border border-sand/15 text-sand/80 transition-colors duration-300 hover:border-coral-400 hover:text-coral-400"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-ink text-sand">
      <div className="pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full bg-pine-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-coral-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-pine-400 to-pine-600 text-sand">
                <CompassIcon />
              </span>
              <span className="font-display text-xl font-semibold text-sand">
                Tour<span className="text-coral-400">'D</span> Travellers
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand/60">
              Handpicked tour packages across Bangladesh's hidden gems and
              beyond — planned by locals, loved by travellers.
            </p>
            <div className="mt-6 flex gap-3">
              <IconLink label="Facebook">
                <FacebookIcon />
              </IconLink>
              <IconLink label="Instagram">
                <InstagramIcon />
              </IconLink>
              <IconLink label="Twitter">
                <TwitterIcon />
              </IconLink>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-sand/50">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-sand/75 transition-colors duration-300 hover:text-coral-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-sand/50">
              Destinations
            </h3>
            <ul className="mt-5 space-y-3">
              {destinations.map((name) => (
                <li key={name}>
                  <Link
                    to="/allservices"
                    className="text-sm text-sand/75 transition-colors duration-300 hover:text-coral-400"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-sand/50">
              Stay in the Loop
            </h3>
            <p className="mt-5 text-sm text-sand/60">
              Trip ideas and seasonal deals, straight to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex overflow-hidden rounded-full border border-sand/15 bg-white/5"
            >
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full min-w-0 bg-transparent px-4 py-3 text-sm text-sand placeholder:text-sand/40 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 bg-coral-500 px-5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-coral-600"
              >
                Join
              </button>
            </form>

            <ul className="mt-6 space-y-3 text-sm text-sand/70">
              <li className="flex items-center gap-3">
                <PhoneIcon /> +880 1234-567890
              </li>
              <li className="flex items-center gap-3">
                <MailIcon /> hello@tourdtravellers.com
              </li>
              <li className="flex items-center gap-3">
                <PinIcon /> Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-sand/10 pt-6 sm:flex-row">
          <p className="text-xs text-sand/50">
            © {new Date().getFullYear()} Tour'D Travellers. All rights reserved.
          </p>

          <a
            href="https://www.linkedin.com/in/sakibsaizeed/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-sand/60 transition-colors duration-300 hover:text-coral-400"
          >
            Developed by Sakib Saizeed
            <LinkedInIcon />
          </a>

          <div className="flex gap-6 text-xs text-sand/50">
            <a href="#top" className="transition-colors hover:text-sand">
              Privacy Policy
            </a>
            <a href="#top" className="transition-colors hover:text-sand">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
