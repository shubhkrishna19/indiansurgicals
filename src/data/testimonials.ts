export interface Testimonial {
  tag: string;
  rating: number;
  quote: string;
  name: string;
  title: string;
  location: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    tag: "FAST QUOTES & SUPPORT",
    rating: 5,
    quote: "Shared our item list and quantities on WhatsApp and got pricing quickly. Very procurement-friendly and clear communication.",
    name: "Procurement Team",
    title: "Multi-specialty Hospital",
    location: "India",
    initials: "PT",
  },
  {
    tag: "RELIABLE DISPATCH",
    rating: 5,
    quote: "Needed urgent supplies for our clinic. The team coordinated dispatch promptly and we received everything on time. Will order again.",
    name: "Dr. Rajesh Kumar",
    title: "Clinic Owner",
    location: "Mumbai",
    initials: "RK",
  },
  {
    tag: "BULK ORDER EXPERTS",
    rating: 5,
    quote: "Placed a bulk order for hospital furniture. Got competitive pricing with GST invoice. Their handling of large orders is excellent.",
    name: "Hospital Administration",
    title: "Corporate Hospital Chain",
    location: "Delhi NCR",
    initials: "HA",
  },
];
