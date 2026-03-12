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
  quoteOnlyNote: string;
  contactNote: string;
  contactReady: boolean;
  contact: {
    phones: string[];
    whatsappNumber: string;
    email: string;
    addressLines: string[];
  };
  heroMetrics: { label: string; value: string }[];
}

export const business: BusinessProfile = {
  brand: "Indian Surgical Industries",
  brandMark: "LIFE EQUIP",
  tagline:
    "Manufacturer of sterilization systems, hospital furniture, hollowares, suction units, and OT equipment.",
  shortDescription:
    "Indian Surgical Industries manufactures sterilization equipment, autoclaves, sterilizers, hospital hollowares, suction units, X-ray illuminators, hospital furniture, operation theater equipment, and allied products.",
  story: [
    "Indian Surgical Industries has been manufacturing medical and hospital utility equipment for more than four decades.",
    "The company serves hospitals, clinics, nursing homes, medical colleges, research institutions, and procurement teams with a wide product range across sterilization, patient care, ward utility, and OT support.",
    "Its product portfolio covers fully automatic and manual autoclaves, instrument sterilizers, hollowares, suction systems, patient care beds, ward utility furniture, transfer solutions, and OT lighting.",
    "The business positions itself around user-friendly manufacturing, dependable quality, evolving design, and long-term customer satisfaction.",
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
  quoteOnlyNote:
    "All products on this website are catalogue products only. Pricing is shared on request based on model, quantity, and dispatch requirements.",
  contactNote:
    "Official public contact details will be added shortly. The catalogue, company profile, and product range are live for review now.",
  contactReady: false,
  contact: {
    phones: [],
    whatsappNumber: "",
    email: "",
    addressLines: ["Noida, Uttar Pradesh, India"],
  },
  heroMetrics: [
    { label: "Years of manufacturing", value: "40+" },
    { label: "Product families", value: "170+" },
    { label: "Core catalogue categories", value: "11" },
    { label: "Commercial model", value: "Quote only" },
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
