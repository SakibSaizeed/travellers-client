import React from "react";
import { features } from "../utils/content";

const icons = {
  map: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5l-5 2v13l5-2 6 2 5-2v-13l-5 2-6-2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v13M15 6.5v13" />
    </svg>
  ),
  tag: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12.5 3.5H6a1 1 0 00-1 1V11a1 1 0 00.29.71l9 9a1 1 0 001.42 0l6.29-6.29a1 1 0 000-1.42l-9-9a1 1 0 00-.5-.5z" />
      <circle cx="9" cy="8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5L13 13l-3.5 1.5L11 11l3.5-1.5z" fill="currentColor" stroke="none" />
    </svg>
  ),
  headset: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" d="M4 13v-1a8 8 0 0116 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path strokeLinecap="round" d="M19 19v.5a3 3 0 01-3 3h-2" />
    </svg>
  ),
};

const Features = () => (
  <section className="bg-white px-4 py-20 sm:px-6 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-xl text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-coral-500">
          Why Us
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Why Travel With Tour'D Travellers
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-3xl bg-sand-100 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-pine-50 text-pine-700">
              {icons[feature.icon]}
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
