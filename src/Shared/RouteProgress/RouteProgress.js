import React, { useEffect, useState } from "react";

// A thin top-of-page progress bar that plays briefly on every route change. Takes the
// *effective* pathname from App (which collapses a RequireAuth redirect to /login into
// a single destination) so it plays once per navigation instead of twice.
const RouteProgress = ({ pathname }) => {
  const [phase, setPhase] = useState("idle"); // idle | growing | done

  useEffect(() => {
    setPhase("growing");
    const growTimer = setTimeout(() => setPhase("done"), 220);
    const resetTimer = setTimeout(() => setPhase("idle"), 500);
    return () => {
      clearTimeout(growTimer);
      clearTimeout(resetTimer);
    };
  }, [pathname]);

  if (phase === "idle") return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent">
      <div
        className={`h-full bg-gradient-to-r from-pine-500 via-coral-500 to-pine-400 transition-all ease-out ${
          phase === "growing" ? "w-3/4 opacity-100 duration-300" : "w-full opacity-0 duration-200"
        }`}
      />
    </div>
  );
};

export default RouteProgress;
