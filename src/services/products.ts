import { supabase } from '../lib/supabase';
import { ProductRecord } from '../data/productCatalog';

type ProductImpurityRow = {
  id: number;
  sl_no: number;
  api_name: string | null;
  impurity_name: string | null;
  cat_no: string | null;
  cas_no: string | null;
  iupac: string | null;
  mf: string | null;
  mw: number | string | null;
  storage: string | null;
  inv_status: string | null;
  synonyms: string | null;
  structure: string | null;
  is_featured: boolean;
};

const pendingValue = "To be updated";
const productSelect = 'id, sl_no, api_name, impurity_name, cat_no, cas_no, iupac, mf, mw, storage, inv_status, synonyms, structure, is_featured';

export type ProductLoadResult<T> = {
  data: T;
  error: string | null;
};

const searchableProductFields: Array<keyof ProductRecord> = [
  'apiName',
  'impurityName',
  'catNo',
  'casNo',
  'iupac',
  'molecularFormula',
  'molecularWeight',
  'synonyms',
];

function displayValue(value: string | number | null | undefined, fallback = pendingValue) {
  if (value === null || value === undefined || value === "") {
    return fallback;
  }

  return String(value);
}

function mapProductRow(row: ProductImpurityRow): ProductRecord {
  return {
    id: row.id,
    slNo: row.sl_no,
    apiName: displayValue(row.api_name, "Uncategorized"),
    impurityName: displayValue(row.impurity_name),
    catNo: displayValue(row.cat_no),
    casNo: displayValue(row.cas_no),
    iupac: displayValue(row.iupac),
    molecularFormula: displayValue(row.mf),
    molecularWeight: displayValue(row.mw),
    storage: displayValue(row.storage),
    inventoryStatus: displayValue(row.inv_status, "Available on request"),
    synonyms: displayValue(row.synonyms),
    structure: displayValue(row.structure, "Available on request"),
    isFeatured: row.is_featured,
  };
}

export async function getProducts() {
  if (!supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from('product_impurities')
    .select(productSelect)
    .order('api_name', { ascending: true })
    .order('impurity_name', { ascending: true });

  if (error) {
    console.error('Unable to load product catalog from Supabase:', error);
    return [];
  }

  return (data ?? []).map(row => mapProductRow(row as ProductImpurityRow));
}

function normalizeSearchValue(value: string | number | boolean) {
  return String(value).trim().toLowerCase();
}

export function productMatchesSearch(product: ProductRecord, query: string) {
  const normalizedQuery = normalizeSearchValue(query);

  if (!normalizedQuery) {
    return true;
  }

  return searchableProductFields.some(field =>
    normalizeSearchValue(product[field]).includes(normalizedQuery)
  );
}

export function findBestProductMatch(products: ProductRecord[], query: string) {
  const normalizedQuery = normalizeSearchValue(query);

  if (!normalizedQuery) {
    return null;
  }

  return products.find(product =>
    ['catNo', 'casNo', 'impurityName', 'apiName'].some(field =>
      normalizeSearchValue(product[field as keyof ProductRecord]).toLowerCase() === normalizedQuery
    )
  ) ?? null;
}

export async function loadProducts(): Promise<ProductLoadResult<ProductRecord[]>> {
  try {
    const data = await getProducts();
    return { data, error: null };
  } catch (error) {
    console.error('Unable to load product catalog from Supabase:', error);
    return {
      data: [],
      error: error instanceof Error ? error.message : 'Unable to load product catalog.',
    };
  }
}

export async function getFeaturedProducts() {
  if (!supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from('product_impurities')
    .select(productSelect)
    .eq('is_featured', true)
    .order('sl_no', { ascending: true })
    .limit(3);

  if (error) {
    console.error('Unable to load featured products from Supabase:', error);
    return [];
  }

  return (data ?? []).map(row => mapProductRow(row as ProductImpurityRow));
}

export async function getProductsByCatNos(catNos: string[]) {
  if (!supabase || !catNos || catNos.length === 0) {
    return [];
  }

  const { data, error } = await supabase
    .from('product_impurities')
    .select(productSelect)
    .in('cat_no', catNos)
    .order('sl_no', { ascending: true });

  if (error) {
    console.error('Unable to load products by cat numbers from Supabase:', error);
    return [];
  }

  return (data ?? []).map(row => mapProductRow(row as ProductImpurityRow));
}

export async function getProductById(id: string) {
  if (!supabase) {
    return null;
  }

  const { data, error } = await supabase
    .from('product_impurities')
    .select(productSelect)
    .eq('id', id)
    .maybeSingle();

  if (error) {
    console.error('Unable to load product detail from Supabase:', error);
    return null;
  }

  return data ? mapProductRow(data as ProductImpurityRow) : null;
}

export async function loadProductById(id: string): Promise<ProductLoadResult<ProductRecord | null>> {
  try {
    const data = await getProductById(id);
    return { data, error: null };
  } catch (error) {
    console.error('Unable to load product detail from Supabase:', error);
    return {
      data: null,
      error: error instanceof Error ? error.message : 'Unable to load product details.',
    };
  }
}
