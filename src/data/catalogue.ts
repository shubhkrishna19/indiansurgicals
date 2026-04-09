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
  displayName?: string;
  productUrl?: string;
  attributes: FamilyAttribute[];
  descriptionLines: string[];
  images: string[];
  sourceRefs: FamilySourceRef[];
}

export interface ProductFamily {
  slug: string;
  name: string;
  categorySlug: string;
  legacyCategorySlug?: string;
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

const rawCategories = source.categories as CatalogueCategory[];
const rawFamilies = source.families as ProductFamily[];

const SOURCE_COPY_PATTERNS = [
  /^source:/i,
  /public indiamart product catalogue/i,
  /public listing/i,
  /approved source files/i,
  /being mapped into this family/i,
  /will continue to be attached/i,
  /normalized business structure/i,
];

function normalizeText(value?: string): string {
  return (value ?? "")
    .replace(/\s+/g, " ")
    .replace(/\s+,/g, ",")
    .replace(/\s+\./g, ".")
    .trim();
}

function looksLikeSourceCopy(value?: string): boolean {
  const normalized = normalizeText(value);
  return !normalized || SOURCE_COPY_PATTERNS.some((pattern) => pattern.test(normalized));
}

function uniqueStrings(values: string[]): string[] {
  return Array.from(new Set(values.map((value) => normalizeText(value)).filter(Boolean)));
}

function buildFamilySummary(family: ProductFamily): string {
  return `${family.name} from Indian Surgical Industries for hospital, clinical, dealer, and institutional requirements.`;
}

function buildFamilyDescription(family: ProductFamily, categoryName: string): string {
  const modelLabel = family.variants.length === 1 ? "model" : "models";
  return `${family.name} is part of the ${categoryName.toLowerCase()} range manufactured by Indian Surgical Industries. Review the available ${modelLabel}, key specifications, and product images here before requesting a quotation.`;
}

const categoryNameBySlug = new Map(rawCategories.map((category) => [category.slug, category.name]));

function normalizeVariant(variant: ProductVariant): ProductVariant {
  return {
    ...variant,
    descriptionLines: uniqueStrings(variant.descriptionLines ?? []).filter(
      (line) => !looksLikeSourceCopy(line),
    ),
    images: uniqueStrings(variant.images ?? []),
  };
}

function normalizeFamily(family: ProductFamily): ProductFamily {
  const categoryName = categoryNameBySlug.get(family.categorySlug) ?? "medical equipment";
  const summary = looksLikeSourceCopy(family.summary) ? buildFamilySummary(family) : normalizeText(family.summary);
  const description = looksLikeSourceCopy(family.description)
    ? buildFamilyDescription(family, categoryName)
    : normalizeText(family.description);

  return {
    ...family,
    summary,
    description,
    subheading: normalizeText(family.subheading) || categoryName,
    highlights: uniqueStrings(family.highlights ?? []).filter((item) => !looksLikeSourceCopy(item)),
    notes: uniqueStrings(family.notes ?? []).filter((item) => !looksLikeSourceCopy(item)),
    images: uniqueStrings(family.images ?? []),
    variants: family.variants.map((variant) => normalizeVariant(variant)),
  };
}

export const catalogueCategories = [...rawCategories].sort(
  (left, right) => left.order - right.order,
);

export const catalogueFamilies = rawFamilies.map((family) => normalizeFamily(family));
export const catalogueExports = source.exports as CatalogueExports;

const categoryBySlug = new Map(catalogueCategories.map((category) => [category.slug, category]));
const familyByKey = new Map<string, ProductFamily>();
for (const family of catalogueFamilies) {
  familyByKey.set(`${family.categorySlug}/${family.slug}`, family);
  if (family.legacyCategorySlug && family.legacyCategorySlug !== family.categorySlug) {
    familyByKey.set(`${family.legacyCategorySlug}/${family.slug}`, family);
  }
}

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
