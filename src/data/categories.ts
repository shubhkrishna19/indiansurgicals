export interface Category {
  slug: string;
  name: string;
  description: string;
  heroImage: string;
  icon: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    slug: 'surgical-instruments',
    name: 'Surgical Instruments',
    description: 'Precision surgical tools for minor and major surgeries. Scalpels, forceps, scissors, and more.',
    heroImage: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1200&h=600&fit=crop',
    icon: '🔪',
    productCount: 24
  },
  {
    slug: 'hospital-furniture',
    name: 'Hospital Furniture',
    description: 'Quality hospital beds, patient trolleys, cabinets, and furniture for healthcare facilities.',
    heroImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=600&fit=crop',
    icon: '🛏️',
    productCount: 18
  },
  {
    slug: 'diagnostic-equipment',
    name: 'Diagnostic Equipment',
    description: 'Essential diagnostic tools including stethoscopes, BP monitors, thermometers, and more.',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop',
    icon: '🩺',
    productCount: 32
  },
  {
    slug: 'ot-equipment',
    name: 'OT Equipment',
    description: 'Operation theatre essentials - surgical tables, operating lights, monitors, and anesthesia equipment.',
    heroImage: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&h=600&fit=crop',
    icon: '🏥',
    productCount: 15
  },
  {
    slug: 'icu-equipment',
    name: 'ICU Equipment',
    description: 'Critical care equipment including ventilators, patient monitors, and infusion systems.',
    heroImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&h=600&fit=crop',
    icon: '💓',
    productCount: 20
  },
  {
    slug: 'physiotherapy',
    name: 'Physiotherapy',
    description: 'Rehabilitation and physiotherapy equipment for patient recovery and physical therapy.',
    heroImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=600&fit=crop',
    icon: '🧘',
    productCount: 16
  }
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function getFeaturedCategories(): Category[] {
  return categories.slice(0, 4);
}
