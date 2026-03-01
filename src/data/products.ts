export interface Product {
  slug: string;
  categorySlug: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  specs: { label: string; value: string }[];
  tags: string[];
  images: string[];
  featured: boolean;
}

export const products: Product[] = [
  // Surgical Instruments
  {
    slug: 'surgical-scalpel-set',
    categorySlug: 'surgical-instruments',
    name: 'Surgical Scalpel Set (Premium)',
    shortDesc: 'Professional surgical scalpel set with interchangeable blades',
    longDesc: 'Our premium surgical scalpel set includes precision-engineered handles with ergonomic grip and high-quality stainless steel blades. Ideal for minor surgical procedures in clinics and hospitals. Each blade is individually wrapped and sterilized for maximum safety.',
    specs: [
      { label: 'Material', value: 'Medical Grade Stainless Steel' },
      { label: 'Handle Length', value: '12.5 cm' },
      { label: 'Blades Included', value: 'Size 10, 11, 12, 15, 22, 24' },
      { label: 'Sterilization', value: 'Autoclavable at 134°C' },
      { label: 'Certifications', value: 'ISO 13485, CE Certified' },
      { label: 'Warranty', value: '2 Years' }
    ],
    tags: ['Surgical', 'Scalpel', 'Sterile', 'Premium'],
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=800&h=600&fit=crop'
    ],
    featured: true
  },
  {
    slug: 'surgical-scissors-straight',
    categorySlug: 'surgical-instruments',
    name: 'Mayo Scissors - Straight',
    shortDesc: 'Heavy-duty surgical scissors for tissue cutting',
    longDesc: 'Premium quality Mayo scissors designed for cutting heavy tissue, sutures, and bandages. Made from surgical-grade stainless steel with razor-sharp edges that maintain sharpness through repeated sterilization cycles.',
    specs: [
      { label: 'Material', value: 'Surgical Stainless Steel' },
      { label: 'Length', value: '17 cm (6.5 inch)' },
      { label: 'Blade Type', value: 'Straight, blunt tip' },
      { label: 'Finish', value: 'Satin Finish' },
      { label: 'Autoclavable', value: 'Yes - 134°C' }
    ],
    tags: ['Scissors', 'Surgical', 'Mayo'],
    images: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop'
    ],
    featured: false
  },
  {
    slug: 'artery-forceps-kelly',
    categorySlug: 'surgical-instruments',
    name: 'Kelly Artery Forceps',
    shortDesc: 'Precision hemostatic forceps for vascular clamping',
    longDesc: 'Professional Kelly artery forceps for clamping blood vessels during surgical procedures. Features a secure ratchet locking mechanism and ergonomic finger rings for precise control. Available in multiple sizes.',
    specs: [
      { label: 'Material', value: 'Medical Grade Stainless Steel' },
      { label: 'Length', value: '14 cm / 16 cm / 20 cm' },
      { label: 'Tip', value: 'Straight, serrated' },
      { label: 'Locking', value: 'Ratchet Type' },
      { label: 'Autoclavable', value: 'Yes' }
    ],
    tags: ['Forceps', 'Hemostatic', 'Surgical'],
    images: [
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop'
    ],
    featured: true
  },

  // Hospital Furniture
  {
    slug: 'hydraulic-hospital-bed',
    categorySlug: 'hospital-furniture',
    name: 'Hydraulic 3-Function Hospital Bed',
    shortDesc: 'Advanced hydraulic hospital bed with 3 adjustable positions',
    longDesc: 'Premium 3-function hydraulic hospital bed designed for patient comfort and caregiver convenience. Features motor-assisted backrest, leg-rest, and height adjustment. Durable construction with collapsible side rails and IV pole.',
    specs: [
      { label: 'Dimensions', value: '210 x 90 x 50-80 cm' },
      { label: 'Weight Capacity', value: '250 kg' },
      { label: 'Functions', value: 'Backrest, Legrest, Height' },
      { label: 'Mattress', value: '6-inch foam with waterproof cover' },
      { label: 'Frame', value: 'CRCA Steel with epoxy coating' },
      { label: 'Warranty', value: '3 Years' }
    ],
    tags: ['Bed', 'Hospital', 'Hydraulic', '3-Function'],
    images: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop'
    ],
    featured: true
  },
  {
    slug: 'patient-trolley-stretcher',
    categorySlug: 'hospital-furniture',
    name: 'Patient Transfer Trolley',
    shortDesc: 'Adjustable patient stretcher trolley for hospital transfers',
    longDesc: 'Versatile patient transfer trolley with adjustable backrest and trendelenburg position. Features smooth-rolling castors with central braking system, oxygen cylinder holder, and collapsible side rails for safe patient transfer.',
    specs: [
      { label: 'Dimensions', value: '195 x 60 x 55-85 cm' },
      { label: 'Weight Capacity', value: '180 kg' },
      { label: 'Positions', value: 'Flat, Backrest, Trendelenburg' },
      { label: 'Castors', value: '6" with central brake' },
      { label: 'Mattress', value: '4-inch foam, removable' }
    ],
    tags: ['Trolley', 'Stretcher', 'Transfer'],
    images: [
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop'
    ],
    featured: false
  },
  {
    slug: 'medicine-cabinet-double-door',
    categorySlug: 'hospital-furniture',
    name: 'Double Door Medicine Cabinet',
    shortDesc: 'Steel medicine cabinet with glass door panels',
    longDesc: 'Durable double-door medicine cabinet with glass view panels for easy inventory. Adjustable shelving, lockable doors, and wall-mounted design. Perfect for clinics, hospitals, and pharmacies.',
    specs: [
      { label: 'Dimensions', value: '90 x 45 x 30 cm' },
      { label: 'Material', value: 'CRCA Steel, 1mm thickness' },
      { label: 'Finish', value: 'Epoxy powder coating' },
      { label: 'Shelves', value: '3 adjustable' },
      { label: 'Lock', value: 'Yale type with 2 keys' }
    ],
    tags: ['Cabinet', 'Medicine', 'Storage'],
    images: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop'
    ],
    featured: false
  },

  // Diagnostic Equipment
  {
    slug: 'digital-bp-monitor',
    categorySlug: 'diagnostic-equipment',
    name: 'Digital Blood Pressure Monitor (Professional)',
    shortDesc: 'Clinical-grade digital BP monitor with large display',
    longDesc: 'Professional digital blood pressure monitor with advanced oscillometric technology. Features large LCD display, memory function for 90 readings, WHO classification indicator, and irregular heartbeat detection. Includes universal cuff (22-42cm).',
    specs: [
      { label: 'Display', value: 'LCD Digital' },
      { label: 'Memory', value: '90 readings x 2 users' },
      { label: 'Cuff Size', value: '22-42 cm universal' },
      { label: 'Accuracy', value: '±3 mmHg' },
      { label: 'Power', value: '4x AA batteries / Adapter' },
      { label: 'Warranty', value: '2 Years' }
    ],
    tags: ['BP Monitor', 'Digital', 'Diagnostic'],
    images: [
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop'
    ],
    featured: true
  },
  {
    slug: 'digital-thermometer-infrared',
    categorySlug: 'diagnostic-equipment',
    name: 'Infrared Thermometer (Non-Contact)',
    shortDesc: 'Fast, contactless temperature measurement',
    longDesc: 'Advanced infrared forehead thermometer with instant reading in 1 second. Non-contact design for hygienic use. Features fever alarm, memory function, and dual temperature units (°C/°F). Perfect for clinics, hospitals, and home use.',
    specs: [
      { label: 'Reading Time', value: '1 second' },
      { label: 'Distance', value: '3-5 cm from forehead' },
      { label: 'Accuracy', value: '±0.2°C' },
      { label: 'Memory', value: '32 readings' },
      { label: 'Display', value: 'LCD with backlight' },
      { label: 'Power', value: '2x AAA batteries' }
    ],
    tags: ['Thermometer', 'Infrared', 'Non-contact'],
    images: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop'
    ],
    featured: true
  },
  {
    slug: 'stethoscope-littmann-classic',
    categorySlug: 'diagnostic-equipment',
    name: 'Stethoscope - Littmann Classic III',
    shortDesc: 'Premium acoustic stethoscope for healthcare professionals',
    longDesc: 'World-renowned Littmann Classic III stethoscope with exceptional acoustics. Features tunable diaphragm technology, dual-sided chestpiece, and comfortable ear tips. Ideal for non-critical care environments, medical students, and general physical assessment.',
    specs: [
      { label: 'Chestpiece', value: 'Double-sided, stainless steel' },
      { label: 'Diaphragm', value: 'Tunable, adult/pediatric' },
      { label: 'Tubing', value: 'Single-lumen, 56 cm' },
      { label: 'Ear Tips', value: 'Soft sealing, 3 sizes' },
      { label: 'Weight', value: '150 grams' },
      { label: 'Warranty', value: '3 Years' }
    ],
    tags: ['Stethoscope', 'Diagnostic', 'Littmann'],
    images: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop'
    ],
    featured: true
  },
  {
    slug: 'pulse-oximeter-fingertip',
    categorySlug: 'diagnostic-equipment',
    name: 'Fingertip Pulse Oximeter',
    shortDesc: 'Compact pulse oximeter for SpO2 and pulse rate',
    longDesc: 'Portable fingertip pulse oximeter with bright OLED display. Measures blood oxygen saturation (SpO2) and pulse rate with clinical accuracy. One-button operation with automatic shutoff. Includes lanyard for convenience.',
    specs: [
      { label: 'SpO2 Range', value: '70-100%' },
      { label: 'Pulse Range', value: '30-250 BPM' },
      { label: 'Display', value: 'OLED, 4 directions' },
      { label: 'Power', value: '2x AAA batteries' },
      { label: 'Battery Life', value: '30 hours continuous' },
      { label: 'Warranty', value: '1 Year' }
    ],
    tags: ['Pulse Oximeter', 'SpO2', 'Diagnostic'],
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop'
    ],
    featured: false
  },

  // OT Equipment
  {
    slug: 'hydraulic-operation-table',
    categorySlug: 'ot-equipment',
    name: 'Hydraulic Operation Table (Multipurpose)',
    shortDesc: 'Versatile hydraulic surgical table with all positioning features',
    longDesc: 'Professional hydraulic operation table with complete surgical positioning capabilities. Features trendelenburg, reverse trendelenburg, lateral tilt, and flex positions. Radio-transparent top for C-arm compatibility. Includes adjustable leg rests and arm boards.',
    specs: [
      { label: 'Table Size', value: '200 x 50 cm' },
      { label: 'Height Range', value: '75-110 cm' },
      { label: 'Weight Capacity', value: '180 kg' },
      { label: 'Positions', value: 'All surgical positions' },
      { label: 'Base', value: 'Hydraulic, foot pedal' },
      { label: 'Warranty', value: '3 Years' }
    ],
    tags: ['OT Table', 'Operation Table', 'Hydraulic'],
    images: [
      'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&h=600&fit=crop'
    ],
    featured: true
  },
  {
    slug: 'led-surgical-light',
    categorySlug: 'ot-equipment',
    name: 'LED Surgical Light (Shadowless)',
    shortDesc: 'High-intensity shadowless operating light with LED technology',
    longDesc: 'Advanced LED surgical light with shadowless illumination. Features adjustable intensity, color temperature control, and long-lasting LED bulbs (50,000 hours). Modular design with spring-balanced arm system for precise positioning.',
    specs: [
      { label: 'Illumination', value: '40,000 - 160,000 lux' },
      { label: 'Color Temp', value: '4000-5000K adjustable' },
      { label: 'CRI', value: '>95' },
      { label: 'LED Life', value: '50,000 hours' },
      { label: 'Arm Length', value: '180 cm' },
      { label: 'Warranty', value: '3 Years' }
    ],
    tags: ['Surgical Light', 'LED', 'OT'],
    images: [
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop'
    ],
    featured: true
  },

  // ICU Equipment
  {
    slug: 'patient-monitor-icu',
    categorySlug: 'icu-equipment',
    name: 'Multi-Parameter Patient Monitor',
    shortDesc: '12.1" ICU patient monitor with comprehensive monitoring',
    longDesc: 'Professional multi-parameter patient monitor for ICU, CCU, and emergency use. Displays ECG, NIBP, SpO2, Resp, Temp, and optional IBP/CO2. Features 72-hour trends, alarm management, and network connectivity.',
    specs: [
      { label: 'Display', value: '12.1" TFT, 1280x800' },
      { label: 'Parameters', value: 'ECG, NIBP, SpO2, Resp, Temp' },
      { label: 'Optional', value: 'IBP, CO2, Agis' },
      { label: 'Trends', value: '72 hours graphic/numeric' },
      { label: 'Alarms', value: 'Visual + Audio' },
      { label: 'Power', value: 'AC 100-240V' }
    ],
    tags: ['Patient Monitor', 'ICU', 'Multiparameter'],
    images: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=600&fit=crop'
    ],
    featured: true
  },
  {
    slug: 'infusion-pump-syringe',
    categorySlug: 'icu-equipment',
    name: 'Syringe Infusion Pump (Double Channel)',
    shortDesc: 'Precision dual-channel syringe pump for ICU',
    longDesc: 'High-precision syringe infusion pump with dual-channel capability. Features adjustable flow rates, occlusion detection, and multiple alarm systems. Compatible with standard syringes (5-60ml). Essential for critical care medication delivery.',
    specs: [
      { label: 'Channels', value: '2 independent' },
      { label: 'Syringe Size', value: '5, 10, 20, 30, 50, 60 ml' },
      { label: 'Flow Rate', value: '0.1-1500 ml/hr' },
      { label: 'Accuracy', value: '±1%' },
      { label: 'Alarms', value: 'Occlusion, Empty, Door Open' },
      { label: 'Warranty', value: '2 Years' }
    ],
    tags: ['Infusion Pump', 'Syringe Pump', 'ICU'],
    images: [
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=600&fit=crop'
    ],
    featured: false
  },

  // Physiotherapy
  {
    slug: 'physiotherapy-table-adjustable',
    categorySlug: 'physiotherapy',
    name: 'Physiotherapy Treatment Table (3-Section)',
    shortDesc: 'Adjustable treatment table with face hole and leg section',
    longDesc: 'Professional 3-section physiotherapy table with height adjustment and motorized backrest. Features face hole for prone treatments, adjustable leg section, and durable leather upholstery. Ideal for physiotherapy, chiropractic, and massage therapy.',
    specs: [
      { label: 'Dimensions', value: '185 x 70 x 50-90 cm' },
      { label: 'Sections', value: '3 (back, seat, leg)' },
      { label: 'Height', value: 'Electric, 50-90 cm' },
      { label: 'Backrest', value: '0-75° adjustable' },
      { label: 'Upholstery', value: 'Medical grade leather' },
      { label: 'Weight Capacity', value: '200 kg' }
    ],
    tags: ['Physiotherapy Table', 'Treatment Table', 'Massage'],
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop'
    ],
    featured: true
  },
  {
    slug: 'therapeutic-ultrasound',
    categorySlug: 'physiotherapy',
    name: 'Therapeutic Ultrasound Unit (1 & 3 MHz)',
    shortDesc: 'Dual-frequency therapeutic ultrasound for tissue healing',
    longDesc: 'Professional therapeutic ultrasound unit with 1 MHz and 3 MHz frequencies for deep and superficial tissue treatment. Features adjustable intensity, timer, and LCD display. Effective for pain management, tissue healing, and muscle rehabilitation.',
    specs: [
      { label: 'Frequencies', value: '1 MHz and 3 MHz' },
      { label: 'Output', value: '0-3 W/cm² (1 MHz), 0-2 W/cm² (3 MHz)' },
      { label: 'Timer', value: '0-30 minutes' },
      { label: 'Display', value: 'LCD digital' },
      { label: 'Head', value: '5 cm² treatment head' },
      { label: 'Modes', value: 'Continuous and Pulsed' }
    ],
    tags: ['Ultrasound', 'Therapy', 'Physiotherapy'],
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop'
    ],
    featured: false
  }
];

export function getProductBySlug(categorySlug: string, productSlug: string): Product | undefined {
  return products.find(p => p.slug === productSlug && p.categorySlug === categorySlug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.categorySlug === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function getAllProducts(): Product[] {
  return products;
}
