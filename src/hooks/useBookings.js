import { useEffect, useState } from "react";

const useBookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://travellers.onrender.com/bookingdata")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return [bookings, setBookings];
};

export default useBookings;
