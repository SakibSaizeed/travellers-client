import React from "react";
import Spinner from "../Spinner/Spinner";

// Full-section loading state, standing in for content that's still being fetched so the
// page never jumps straight from blank to populated (or populated to redirect) with no
// transition in between.
const PageLoader = ({ message = "Loading...", minHeight = "min-h-[50vh]", className = "" }) => (
  <div className={`flex ${minHeight} flex-col items-center justify-center gap-4 px-4 text-center ${className}`}>
    <Spinner size="lg" />
    <p className="text-sm font-semibold text-ink/50">{message}</p>
  </div>
);

export default PageLoader;
