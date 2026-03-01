export interface Business {
  brand: string;
  legalName: string;
  tagline: string;
  descriptionShort: string;
  descriptionLong: string;
  phones: string[];
  whatsappNumber: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  workingHours: {
    timezone: string;
    note: string;
    schedule: { day: string; open: string | null; close: string | null }[];
  };
  trustChips: string[];
  metrics: { value: string; label: string; note?: string }[];
  disclaimers: string[];
  servicedRegions: string[];
}

export const business: Business = {
  brand: "IndianSurgicals",
  legalName: "IndianSurgicals (Medical Equipment Wholesaler)",
  tagline: "Fast quotes • Bulk supply • Reliable dispatch support",
  descriptionShort: "Wholesale supplier of hospital equipment, OT essentials, sterilization solutions, and surgical instruments.",
  descriptionLong: "IndianSurgicals supports clinics, hospitals, labs, and procurement teams with a wide range of medical equipment. Share your requirements (product, quantity, city) on WhatsApp or call during working hours for pricing and availability. Images and specifications on this website are for reference—final specifications depend on model and stock availability.",

  phones: ["+91-98765-43210", "+91-11-4567-8900"],
  whatsappNumber: "919876543210",
  email: "info@indiansurgicals.com",
  address: {
    line1: "Plot No. 123, Industrial Area, Phase-II",
    line2: "Near Metro Station",
    city: "New Delhi",
    state: "Delhi",
    postalCode: "110005",
    country: "India"
  },

  workingHours: {
    timezone: "Asia/Kolkata",
    note: "Call for quotes during working hours. WhatsApp is accepted anytime.",
    schedule: [
      { day: "Monday", open: "10:00", close: "19:00" },
      { day: "Tuesday", open: "10:00", close: "19:00" },
      { day: "Wednesday", open: "10:00", close: "19:00" },
      { day: "Thursday", open: "10:00", close: "19:00" },
      { day: "Friday", open: "10:00", close: "19:00" },
      { day: "Saturday", open: "10:00", close: "19:00" },
      { day: "Sunday", open: null, close: null }
    ]
  },

  trustChips: ["Bulk pricing", "Quality checked", "Fast dispatch support", "GST invoice"],

  metrics: [
    { value: "14", label: "Categories", note: "Product categories" },
    { value: "90+", label: "Product types", note: "Including variations" },
    { value: "< 24h", label: "Typical quote response", note: "During working hours" },
    { value: "Mon–Sat", label: "Working days", note: "10:00 AM - 7:00 PM IST" }
  ],

  disclaimers: [
    "Product images are for reference only.",
    "Specifications and configurations vary by model and availability.",
    "Pricing depends on quantity, brand, and dispatch location."
  ],

  servicedRegions: [
    'Delhi NCR',
    'Mumbai',
    'Bangalore',
    'Chennai',
    'Kolkata',
    'Hyderabad',
    'Pune',
    'Ahmedabad',
    'Jaipur',
    'Lucknow',
    'Chandigarh',
    'All Major Indian Cities'
  ]
};

export function formatWhatsAppMessage(productName: string, quantity?: string, city?: string): string {
  const base = `Hi IndianSurgicals, I need a quote for: ${productName}.`;
  const parts: string[] = [base];

  if (quantity) {
    parts.push(`Quantity: ${quantity}.`);
  }
  if (city) {
    parts.push(`City: ${city}.`);
  }

  return encodeURIComponent(parts.join(' '));
}

export function getWhatsAppLink(productName: string, quantity?: string, city?: string): string {
  const message = formatWhatsAppMessage(productName, quantity, city);
  return `https://wa.me/${business.whatsappNumber}?text=${message}`;
}
