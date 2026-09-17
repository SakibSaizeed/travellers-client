import sajek from "../images/Sajek.png";
import sreemongol from "../images/Sreemongol.png";
import sundorbon from "../images/sundorbon.png";
import roomA from "../images/Rectangle 26.png";
import roomB from "../images/Rectangle 27.png";
import beachBar from "../images/Rectangle 28.png";

// Curated local photography used to back tour cards, since the API
// does not return an image per package. Cycled deterministically so
// the same package always renders the same photo.
export const destinationGallery = [
  { image: sajek, label: "Sajek Valley" },
  { image: sundorbon, label: "Sundarbans" },
  { image: sreemongol, label: "Sreemangal" },
  { image: beachBar, label: "Cox's Bazar" },
  { image: roomA, label: "Hillside Retreat" },
  { image: roomB, label: "Boutique Stay" },
];

export const getPackagePhoto = (seed = 0) => {
  const index =
    typeof seed === "string"
      ? seed.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
      : Number(seed) || 0;
  return destinationGallery[index % destinationGallery.length];
};

// Prefer a real photo when the service document has one (e.g. seeded tours with an
// `img` URL); fall back to the deterministic local gallery photo otherwise.
export const resolvePackagePhoto = (service = {}) => {
  if (service.img) {
    return { image: service.img, label: service.destination || service.packageName };
  }
  return getPackagePhoto(service._id ?? service.packageName);
};

export const features = [
  {
    title: "Curated Itineraries",
    description:
      "Every route is planned around real experiences, not tourist traps — designed by people who've actually made the trip.",
    icon: "map",
  },
  {
    title: "Best Price Guarantee",
    description:
      "Transparent, all-inclusive pricing with no hidden fees. Find it cheaper elsewhere and we'll match it.",
    icon: "tag",
  },
  {
    title: "Local Expert Guides",
    description:
      "Travel with guides who grew up on these trails and waterways — you'll see more than the guidebook shows.",
    icon: "compass",
  },
  {
    title: "24/7 Support",
    description:
      "From booking to landing back home, our team is one call away whenever your plans need a hand.",
    icon: "headset",
  },
];

export const testimonials = [
  {
    name: "Nusrat Jahan",
    trip: "Sajek Valley Getaway",
    quote:
      "Hands down the smoothest trip I've booked. The itinerary felt personal, not templated — and our guide knew every viewpoint worth stopping for.",
    rating: 5,
  },
  {
    name: "Rafiul Islam",
    trip: "Sundarbans Expedition",
    quote:
      "Saw a tiger's pugmarks on the riverbank at sunrise. Logistics were flawless from Dhaka to the mangroves and back — genuinely five-star.",
    rating: 5,
  },
  {
    name: "Farhana Akter",
    trip: "Sreemangal Tea Trail",
    quote:
      "Beautiful stays, honest pricing, and a support team that actually picks up the phone. This is how travel booking should feel.",
    rating: 4,
  },
];

export const heroStats = [
  { value: "8+", label: "Years Guiding Travellers" },
  { value: "120+", label: "Tours Hosted" },
  { value: "4.9/5", label: "Average Rating" },
];
