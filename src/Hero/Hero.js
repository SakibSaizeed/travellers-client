import React from "react";
import { Link } from "react-router-dom";
import Slider from "../Slider/Slider";
import background from "../images/coxbg.png";
import { heroStats } from "../utils/content";

const StarIcon = () => (
  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-coral-400">
    <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
  </svg>
);

const MapIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5l-5 2v13l5-2 6 2 5-2v-13l-5 2-6-2z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v13M15 6.5v13" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/70 to-ink" />
      {/* Extra horizontal scrim so the text column stays readable over the photo
          regardless of how bright that patch of the image is. */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/35 to-transparent lg:via-ink/25 lg:to-transparent" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-coral-500/20 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-pine-400/20 blur-3xl animate-float" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-14 px-4 pb-20 pt-14 sm:px-6 lg:flex-row lg:items-center lg:gap-10 lg:px-10 lg:pb-28 lg:pt-20">
        <div className="mx-auto max-w-xl animate-fade-up text-center lg:mx-0 lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-sand/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sand backdrop-blur-sm">
            <StarIcon /> Rated 4.9/5 by 500+ travellers
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] text-sand sm:text-5xl lg:text-6xl">
            Discover Bangladesh's{" "}
            <span className="text-coral-400">Hidden Wonders</span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-sand/90 sm:text-lg lg:mx-0">
            From the rolling hills of Sajek to the mangrove creeks of the
            Sundarbans — handpicked itineraries, local experts, zero hassle.
            Your next story starts here.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/allservices"
              className="rounded-full bg-coral-500 px-8 py-3.5 text-center text-sm font-bold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-600 hover:shadow-glow"
            >
              Explore Tours
            </Link>
            <Link
              to="/mybooking"
              className="rounded-full border border-sand/25 bg-white/5 px-8 py-3.5 text-center text-sm font-bold text-sand backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
            >
              My Bookings
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-sand/15 pt-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-bold text-sand sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-sand/80 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up [animation-delay:150ms] lg:mx-0 lg:max-w-lg">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-glow backdrop-blur-sm">
            <div className="overflow-hidden rounded-[1.5rem]">
              <Slider />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-card sm:flex">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-pine-50 text-pine-600">
              <MapIcon />
            </span>
            <div>
              <p className="text-sm font-bold text-ink">12+ Destinations</p>
              <p className="text-xs text-ink/50">Across Bangladesh</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <span className="grid h-9 w-9 animate-bounce place-items-center rounded-full border border-sand/30 text-sand/70">
          <ChevronDownIcon />
        </span>
      </div>
    </section>
  );
};

export default Hero;
