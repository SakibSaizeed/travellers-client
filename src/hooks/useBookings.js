import { useEffect, useState } from "react";
import { API_BASE_URL } from "../utils/api";

// GET /bookingdata is scoped server-side to the signed-in user's own bookings, so this
// only runs once a token is available.
const useBookings = (token) => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (!token) return;

    fetch(`${API_BASE_URL}/bookingdata`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setBookings(Array.isArray(data) ? data : []))
      .catch((error) => console.error("Failed to load bookings:", error));
  }, [token]);

  return [bookings, setBookings];
};

export default useBookings;
