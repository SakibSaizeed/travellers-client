import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useBookings from "../hooks/useBookings";
import { getPackagePhoto } from "../utils/content";

const Mybooking = () => {
  const { user, token } = useAuth();
  const [bookings] = useBookings(token);

  if (!user) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center bg-sand-100 px-4 py-16 text-center">
        <div className="max-w-sm">
          <h1 className="font-display text-2xl font-semibold text-ink">
            Log In To See Your Bookings
          </h1>
          <p className="mt-2 text-sm text-ink/60">
            We match your bookings to your account, not the email you typed on
            the booking form.
          </p>
          <Link
            to="/login"
            className="mt-6 inline-block rounded-full bg-coral-500 px-8 py-3.5 text-sm font-bold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-600 hover:shadow-glow"
          >
            Go To Login
          </Link>
        </div>
      </section>
    );
  }

  // The server already scopes GET /bookingdata to this account (via the JWT), so no
  // client-side filtering here — filtering by the form's editable "email" field would
  // wrongly hide bookings made with a different contact email.
  const myBookings = bookings;

  return (
    <section className="bg-sand-100 px-4 py-16 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-coral-500">
            Hi {user.name.split(" ")[0]}
          </span>
          <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
            My Bookings
          </h1>
          <p className="mt-2 text-sm text-ink/60">
            {myBookings.length} trip{myBookings.length === 1 ? "" : "s"} found
            under {user.email}
          </p>
        </div>

        {myBookings.length === 0 ? (
          <div className="mt-12 text-center">
            <p className="text-sm font-semibold text-ink/40">
              No bookings yet under this email.
            </p>
            <Link
              to="/allservices"
              className="mt-5 inline-block rounded-full bg-ink px-8 py-3.5 text-sm font-bold text-sand transition-colors duration-300 hover:bg-pine-700"
            >
              Explore Packages
            </Link>
          </div>
        ) : (
          <div className="mt-10 flex flex-col gap-4">
            {myBookings.map((booking) => {
              const photo = getPackagePhoto(booking.packname);
              const travellerName = booking.sname || booking.username;

              return (
                <div
                  key={booking._id}
                  className="flex flex-col gap-4 rounded-3xl bg-white p-4 shadow-card sm:flex-row sm:items-center"
                >
                  <img
                    src={photo.image}
                    alt={booking.packname}
                    className="h-20 w-full shrink-0 rounded-2xl object-cover sm:w-20"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-display text-lg font-semibold text-ink">
                      {booking.packname}
                    </h3>
                    <p className="mt-1 text-sm text-ink/60">
                      Traveller: {travellerName}
                    </p>
                    <p className="text-sm text-ink/60">
                      Contact: {booking.contact}
                    </p>
                    {booking.address && (
                      <p className="text-sm text-ink/50">{booking.address}</p>
                    )}
                  </div>
                  <span className="shrink-0 self-start rounded-full bg-pine-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-pine-700 sm:self-center">
                    Confirmed
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Mybooking;
