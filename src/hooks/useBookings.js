import { useEffect, useState } from "react";
import { API_BASE_URL } from "../utils/api";

const useBookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`${API_BASE_URL}/bookingdata`)
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error("Failed to load bookings:", error));
  }, []);
  return [bookings, setBookings];
};

export default useBookings;
