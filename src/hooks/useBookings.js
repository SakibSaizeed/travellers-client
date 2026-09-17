import { useEffect, useState } from "react";
import { API_BASE_URL } from "../utils/api";

// GET /bookingdata is scoped server-side to the signed-in user's own bookings, so this
// only runs once a token is available.
const useBookings = (token) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(Boolean(token));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    let isMounted = true;
    setLoading(true);
    setError(null);

    fetch(`${API_BASE_URL}/bookingdata`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (isMounted) setBookings(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error("Failed to load bookings:", error);
        if (isMounted) setError(error);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [token]);

  return [bookings, setBookings, { loading, error }];
};

export default useBookings;
