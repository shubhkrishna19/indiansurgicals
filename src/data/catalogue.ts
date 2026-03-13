import source from "./generated/catalogue-source.json";

export interface CatalogueCategory {
  slug: string;
  name: string;
  summary: string;
  intro: string;
  order: number;
  familyCount: number;
  variantCount: number;
  heroImage: string;
  gallery: string[];
}

export interface CatalogueExports {
  generatedAt: string;
  previewPath: string;
  workbookPath: string;
  workbookName: string;
  sheets: string[];
}

export interface FamilyAttribute {
  label: string;
  value: string;
}

export interface FamilySourceRef {
  workbook: string;
  sheet?: string;
  model?: string;
  sectionSerial?: number;
  row?: number;
}

export interface ProductVariant {
  model: string;
  slug: string;
  label: string;
  attributes: FamilyAttribute[];
  descriptionLines: string[];
  images: string[];
  sourceRefs: FamilySourceRef[];
}

export interface ProductFamily {
  slug: string;
  name: string;
  categorySlug: string;
  sectionSerials: string[];
  subheading: string;
  summary: string;
  description: string;
  highlights: string[];
  notes: string[];
  images: string[];
  variants: ProductVariant[];
  sourceRefs: FamilySourceRef[];
  tableColumns: string[];
}

export const catalogueCategories = [...(source.categories as CatalogueCategory[])].sort(
  (left, right) => left.order - right.order,
);

export const catalogueFamilies = source.families as ProductFamily[];
export const catalogueExports = source.exports as CatalogueExports;

const categoryBySlug = new Map(catalogueCategories.map((category) => [category.slug, category]));
const familyByKey = new Map(
  catalogueFamilies.map((family) => [`${family.categorySlug}/${family.slug}`, family]),
);

export function getCategoryBySlug(slug: string): CatalogueCategory | undefined {
  return categoryBySlug.get(slug);
}

export function getAllCategories(): CatalogueCategory[] {
  return catalogueCategories;
}

export function getAllFamilies(): ProductFamily[] {
  return catalogueFamilies;
}

export function getCatalogueExports(): CatalogueExports {
  return catalogueExports;
}

export function getFamiliesByCategory(categorySlug: string): ProductFamily[] {
  return catalogueFamilies.filter((family) => family.categorySlug === categorySlug);
}

export function getFamily(categorySlug: string, familySlug: string): ProductFamily | undefined {
  return familyByKey.get(`${categorySlug}/${familySlug}`);
}

export function getFeaturedFamilies(limit = 8): ProductFamily[] {
  return catalogueFamilies
    .filter((family) => family.images.length > 0)
    .sort((left, right) => right.variants.length - left.variants.length)
    .slice(0, limit);
}

export function getRelatedFamilies(family: ProductFamily, limit = 4): ProductFamily[] {
  return catalogueFamilies
    .filter(
      (candidate) =>
        candidate.categorySlug === family.categorySlug && candidate.slug !== family.slug,
    )
    .slice(0, limit);
}

export function getCatalogueStats() {
  return {
    categoryCount: catalogueCategories.length,
    familyCount: catalogueFamilies.length,
    variantCount: catalogueFamilies.reduce((total, family) => total + family.variants.length, 0),
  };
}
