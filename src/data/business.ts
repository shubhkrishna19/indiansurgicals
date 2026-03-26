export interface BusinessProfile {
  brand: string;
  brandMark: string;
  tagline: string;
  shortDescription: string;
  story: string[];
  manufacturingBase: string;
  marketPresence: string;
  experienceClaim: string;
  certifications: string[];
  focusAreas: string[];
  customerSegments: string[];
  globalShipmentCountries: string[];
  quoteOnlyNote: string;
  contactNote: string;
  contactReady: boolean;
  leadershipHighlights: { value: string; label: string; note: string }[];
  testimonials: {
    name: string;
    role: string;
    location?: string;
    rating: number;
    quote: string;
  }[];
  contact: {
    phones: string[];
    telephones: string[];
    whatsappNumber: string;
    email: string;
    emails: string[];
    website: string;
    addressLines: string[];
  };
  socialLinks: {
    instagram: string;
    twitter: string;
    youtube: string;
  };
  heroMetrics: { label: string; value: string }[];
}

export const business: BusinessProfile = {
  brand: "Indian Surgical Industries",
  brandMark: "LIFE EQUIP",
  tagline:
    "Manufacturer of Autoclaves, Sterilisers, Hospital Furniture, Hollowares, Suction Machine, OT Equipment, X-Ray Illuminators, Fumigator/Fogger, Instrument Trays, Kidney Trays",
  shortDescription:
    "Manufacturer of autoclaves, sterilizers, hospital hollowares, suction units, hospital furniture, OT equipment, X-ray illuminators, and allied medical products.",
  story: [
    "Indian Surgical Industries has been manufacturing medical and hospital equipment for more than four decades.",
    "The company supplies hospitals, clinics, nursing homes, medical colleges, research institutions, and procurement teams across sterilization, patient care, ward utility, and OT support requirements.",
    "The product range covers fully automatic and manual autoclaves, instrument sterilizers, hollowares, suction systems, patient care beds, ward utility furniture, transfer solutions, and OT lighting.",
    "The business is built around dependable quality, practical design, manufacturing continuity, and long-term customer confidence.",
  ],
  manufacturingBase: "Noida, Uttar Pradesh, India",
  marketPresence:
    "Used across domestic healthcare institutions and supplied through export houses to multiple markets.",
  experienceClaim: "40+ years",
  certifications: ["ISO 9001", "ISO 13485", "CE Certified"],
  focusAreas: [
    "Autoclaves and sterilization systems",
    "Hospital hollowares and stainless steel utility products",
    "Patient care furniture and ward equipment",
    "Transfer, trolley, and OT support solutions",
  ],
  customerSegments: [
    "Corporate hospitals",
    "Private hospitals and nursing homes",
    "Government medical colleges and hospitals",
    "Medical research institutions",
    "Institutional procurement teams",
  ],
  globalShipmentCountries: [
    "United States",
    "Germany",
    "Netherlands",
    "Mexico",
    "China",
    "Ireland",
    "Switzerland",
    "Belgium",
    "Italy",
    "France",
    "United Kingdom",
    "Spain",
    "Japan",
    "South Korea",
    "Singapore",
    "Taiwan",
    "Nepal",
    "Canada",
    "Sweden",
    "Denmark",
    "Israel",
    "Costa Rica",
    "Dominican Republic",
    "Malaysia",
    "Thailand",
    "Sri Lanka",
    "Bhutan",
    "Bangladesh",
    "Nigeria",
    "Myanmar",
  ],
  quoteOnlyNote:
    "All products listed here are supplied on quotation. Pricing is shared on request based on model, quantity, and dispatch requirements.",
  contactNote:
    "For quotations, model confirmation, and dispatch discussion, please use the published phone numbers, WhatsApp, and email contacts.",
  contactReady: true,
  leadershipHighlights: [
    {
      value: "40+ years",
      label: "Manufacturing continuity",
      note: "A long-standing operating base across sterilization, utility, patient care, and OT support products.",
    },
    {
      value: "170+",
      label: "Product families",
      note: "A broad manufacturing range across sterilization, furniture, ward utility, transfer systems, and OT support.",
    },
    {
      value: "11",
      label: "Major product categories",
      note: "From autoclaves and sterilizers to hospital furniture, ward equipment, and OT lighting.",
    },
    {
      value: "ISO / CE",
      label: "Quality certifications",
      note: "Manufacturing aligned with institutional, dealer, and export requirements.",
    },
  ],
  testimonials: [
    {
      name: "Institutional Review",
      role: "Hospital Procurement",
      location: "Procurement Head - Multi-Specialty Hospital Network",
      rating: 5,
      quote:
        "We have been sourcing sterilisation and suction equipment from this manufacturer for several years. The autoclaves and OT equipment have proven reliable in daily hospital use, and the service support has been prompt whenever required. Their consistent quality and practical design make them a dependable supplier for hospital procurement.",
    },
    {
      name: "Dealer / Distributor Feedback",
      role: "Medical Equipment Distributor",
      location: "North India",
      rating: 5,
      quote:
        "As a channel partner supplying hospitals and clinics, we value manufacturers who maintain consistent product quality and timely deliveries. Their range of autoclaves, suction machines, and hospital furniture has strong demand in the market, and the after-sales support helps us maintain long-term relationships with our customers.",
    },
    {
      name: "Export Buyer Feedback",
      role: "International Medical Equipment Buyer",
      rating: 5,
      quote:
        "We selected this company as a manufacturing partner because of their strong production capability and product reliability. Their sterilisation and hospital equipment range meets international buyer expectations in terms of build quality, packaging, and documentation. We look forward to expanding our cooperation in global markets.",
    },
  ],
  contact: {
    phones: ["+91-9350042221", "+91-9999941419"],
    telephones: ["+91-120-4240656"],
    whatsappNumber: "919350042221",
    email: "indiansurgical@gmail.com",
    emails: ["indiansurgical@gmail.com", "info@indiansurgical.com"],
    website: "Lifelinemedicalsystem.com",
    addressLines: [
      "Works: A-49, Sector-64, Phase-III",
      "Gautam Budh Nagar, Noida, U.P.-201301",
      "India",
    ],
  },
  socialLinks: {
    instagram: "https://www.instagram.com/indiansurgicalindustries?igsh=MTYxMXhqOTZxaXRhMQ==",
    twitter: "https://x.com/indiansurgical?s=21",
    youtube: "https://www.youtube.com/@IndianSurgicalIndustries",
  },
  heroMetrics: [
    { label: "Years of manufacturing", value: "40+" },
    { label: "Product families", value: "170+" },
    { label: "Product categories", value: "11" },
    { label: "Quality certifications", value: "ISO / CE" },
  ],
};

export function hasPublicContactDetails(): boolean {
  return business.contactReady;
}

export function formatWhatsAppMessage(
  productName?: string,
  quantity?: string,
  city?: string,
): string {
  const lines = [
    "Hello, I would like to enquire about products from Indian Surgical Industries.",
  ];

  if (productName) {
    lines.push(`Product family: ${productName}`);
  }
  if (quantity) {
    lines.push(`Quantity: ${quantity}`);
  }
  if (city) {
    lines.push(`City: ${city}`);
  }

  lines.push("Please share the relevant details and quotation process.");
  return encodeURIComponent(lines.join("\n"));
}

export function getWhatsAppLink(productName?: string, quantity?: string, city?: string): string {
  if (!business.contact.whatsappNumber) {
    return "/contact";
  }

  return `https://wa.me/${business.contact.whatsappNumber}?text=${formatWhatsAppMessage(
    productName,
    quantity,
    city,
  )}`;
}

export function getPrimaryContactHref(): string {
  if (business.contact.whatsappNumber) {
    return getWhatsAppLink();
  }
  if (business.contact.email) {
    return `mailto:${business.contact.email}`;
  }
  return "/contact";
}
