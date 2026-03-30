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
  credentialBadges: {
    code: string;
    label: string;
    image: string;
  }[];
  focusAreas: string[];
  customerSegments: string[];
  globalShipmentCountries: string[];
  quoteOnlyNote: string;
  contactNote: string;
  contactReady: boolean;
  leadershipHighlights: { value: string; label: string; note: string }[];
  testimonials: {
    type: string;
    name: string;
    role: string;
    location?: string;
    rating: number;
    quote: string;
    image?: string;
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
  credentialBadges: [
    {
      code: "ISO 13485",
      label: "Medical Devices Quality Management System",
      image: "/certifications/iso-13485.svg",
    },
    {
      code: "ISO 9001",
      label: "Quality Management System",
      image: "/certifications/iso-9001.svg",
    },
    {
      code: "ISO 14971",
      label: "Risk Management for Medical Devices",
      image: "/certifications/iso-14971.svg",
    },
    {
      code: "CE",
      label: "CE Certified",
      image: "/certifications/ce-certified.svg",
    },
    {
      code: "FDA",
      label: "Registered",
      image: "/certifications/fda-registered.svg",
    },
    {
      code: "CDSCO",
      label: "Approved",
      image: "/certifications/cdsco-approved.svg",
    },
    {
      code: "MSME",
      label: "Registered",
      image: "/certifications/msme-registered.svg",
    },
    {
      code: "GST",
      label: "Goods and Services Tax",
      image: "/certifications/gst.svg",
    },
    {
      code: "IEC",
      label: "Import Export Code",
      image: "/certifications/iec.svg",
    },
    {
      code: "ISO 10993",
      label: "Biocompatible",
      image: "/certifications/iso-10993.svg",
    },
    {
      code: "OEM",
      label: "Manufacturing and Private Label Support",
      image: "/certifications/oem-manufacturing.svg",
    },
    {
      code: "50+ Countries",
      label: "Export Supply Capability",
      image: "/certifications/exporting-50-countries.svg",
    },
  ],
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
      type: "Hospital Procurement / Institutional Review",
      name: "Dr. Anil Mehra",
      role: "Procurement Head, Multi-Specialty Hospital Network",
      location: "Pan-India Network",
      rating: 5,
      quote:
        "We have sourced sterilisation and suction equipment from Indian Surgical Industries for several years. Their autoclaves and OT equipment perform reliably in daily hospital use, and the service support is prompt whenever needed. The build quality is consistent, the designs are practical, and they remain a dependable supplier for hospital procurement.",
      image: "/reviews/dr-anil-mehra.jpeg",
    },
    {
      type: "Dealer / Channel Partner Feedback",
      name: "Sanjay Aggarwal",
      role: "Channel Partner, Medical Equipment Distribution",
      location: "North India",
      rating: 5,
      quote:
        "As a channel partner supplying hospitals and clinics, we value manufacturers who maintain consistent product quality and timely deliveries. Indian Surgical Industries has consistently delivered on both fronts. Their range of autoclaves, suction machines, and hospital furniture has strong demand in the market, and their after-sales support helps us maintain long-term relationships with our customers.",
      image: "/reviews/sanjay-aggarwal.jpeg",
    },
    {
      type: "Dealer / Distributor Feedback",
      name: "S. Murugan",
      role: "Regional Medical Equipment Distributor",
      location: "South India",
      rating: 5,
      quote:
        "We have been working with Indian Surgical Industries for quite some time now, and the experience has been consistently positive. The product quality is reliable, especially for hospital furniture and basic medical equipment, which meets the expectations of our clients across South India. What stands out is their timely delivery and responsive support team. Even in urgent requirements, they have managed to maintain good coordination and supply. Their pricing is also competitive, which helps us stay strong in the market. Overall, a dependable manufacturing partner for distributors like us.",
      image: "/reviews/s-murugan.jpeg",
    },
    {
      type: "International Buyer Feedback",
      name: "Michael Carter",
      role: "International Medical Equipment Buyer",
      location: "Global Markets",
      rating: 5,
      quote:
        "We chose Indian Surgical Industries for their manufacturing capability and product reliability. Their sterilisation and hospital equipment range meets our expectations for build quality, packaging, and documentation, and we see strong potential to grow with them in global markets.",
      image: "/reviews/michael-carter.jpeg",
    },
    {
      type: "Dealer / Distributor Feedback",
      name: "R. Srinivasan",
      role: "Senior Medical Equipment Dealer",
      location: "Coimbatore",
      rating: 5,
      quote:
        "We source hospital furniture and sterilisation products from Indian Surgical Industries on a regular basis. The build quality is dependable, pricing remains market-friendly, and their coordination on delivery timelines makes them easy to work with.",
      image: "/reviews/r-srinivasan.jpeg",
    },
    {
      type: "Institutional / Hospital Feedback",
      name: "Dr. Vivek Malhotra",
      role: "Senior Hospital Administrator",
      location: "Private Hospital, Jaipur",
      rating: 5,
      quote:
        "The equipment supplied by Indian Surgical Industries, particularly their autoclaves and dressing drums, has performed consistently in our day-to-day operations. The designs are practical, and maintenance requirements are minimal. Their service support team has also been prompt and cooperative whenever needed.",
      image: "/reviews/dr-vivek-malhotra.jpeg",
    },
  ],
  contact: {
    phones: ["+91-9350042221", "+91-9999741419"],
    telephones: ["+91-120-4240656"],
    whatsappNumber: "919350042221",
    email: "indiansurgical@gmail.com",
    emails: ["indiansurgical@gmail.com"],
    website: "Lifelinemedicalsystem.com",
    addressLines: [],
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
