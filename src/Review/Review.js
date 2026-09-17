import React from "react";
import { testimonials } from "../utils/content";

const StarIcon = ({ filled }) => (
  <svg viewBox="0 0 20 20" className={`h-4 w-4 ${filled ? "fill-coral-400" : "fill-ink/15"}`}>
    <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
  </svg>
);

const Testimonials = () => (
  <section className="bg-sand-100 px-4 py-20 sm:px-6 lg:px-10">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-xl text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-coral-500">
          Testimonials
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Loved By Travellers
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {testimonials.map((review) => (
          <div
            key={review.name}
            className="flex flex-col rounded-3xl bg-white p-7 shadow-card"
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} filled={i < review.rating} />
              ))}
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
              "{review.quote}"
            </p>
            <div className="mt-6 border-t border-ink/10 pt-4">
              <p className="font-display text-sm font-semibold text-ink">
                {review.name}
              </p>
              <p className="text-xs text-ink/50">{review.trip}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
