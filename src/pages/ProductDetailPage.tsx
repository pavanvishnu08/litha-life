import { useEffect, useState } from 'react';
import { ArrowLeft, Image as ImageIcon, Minus, Plus, X } from 'lucide-react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ProductRecord, productFieldLabels } from '../data/productCatalog';
import { supabaseConfigMessage } from '../lib/supabase';
import { loadProductById } from '../services/products';

const detailRows: Array<keyof ProductRecord> = [
  'apiName',
  'impurityName',
  'catNo',
  'casNo',
  'iupac',
  'molecularFormula',
  'molecularWeight',
  'storage',
  'inventoryStatus',
  'synonyms',
  
];

function hasStructureImage(structure: string) {
  return /^https?:\/\//i.test(structure) || structure.startsWith('/');
}

export function ProductDetailPage() {
  const { productId } = useParams();
  const location = useLocation();
  const backPath = (location.state as { catalogPath?: string } | null)?.catalogPath ?? '/catalog';
  const [product, setProduct] = useState<ProductRecord | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    let isActive = true;

    if (!productId) {
      setIsLoading(false);
      return;
    }

    loadProductById(productId).then(result => {
      if (isActive) {
        setProduct(result.data);
        setLoadError(result.error);
        setIsLoading(false);
      }
    });

    return () => {
      isActive = false;
    };
  }, [productId]);

  const hasImage = product ? hasStructureImage(product.structure) : false;

  function buildMailToLink(p: ProductRecord) {
    const subject = `Enquiry: ${p.apiName} - ${p.impurityName} (CAT: ${p.catNo})`;
    const productUrl = typeof window !== 'undefined' ? `${window.location.origin}/catalog/${p.id}` : '';
    const bodyLines = [
      'Hello,',
      '',
      'I would like to request a quote for the following product:',
      `API Name: ${p.apiName}`,
      `Impurity Name: ${p.impurityName}`,
      `CAT NO: ${p.catNo}`,
      `CAS No: ${p.casNo}`,
      `IUPAC Name: ${p.iupac}`,
      `Molecular Formula: ${p.molecularFormula}`,
      `Molecular Weight: ${p.molecularWeight}`,
      `Storage: ${p.storage}`,
      `Inventory Status: ${p.inventoryStatus}`,
      '',
      `Product Link: ${productUrl}`,
      '',
      'Regards,'
    ];

    return `mailto:info@lithalife.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
  }

  return (
    <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to={backPath} className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-primary-blue hover:text-blue-800">
          <ArrowLeft className="h-4 w-4" />
          Back to catalog
        </Link>

        {isLoading && (
          <div className="rounded-lg border border-slate-200 bg-white p-10 shadow-lg shadow-slate-200/60">
            <div className="space-y-8 animate-pulse">
              <div className="h-10 w-2/5 rounded-full bg-slate-200" />
              <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
                <div className="rounded-lg border border-slate-200 bg-slate-100 h-[26rem]" />
                <div className="rounded-lg border border-slate-200 bg-slate-100 p-6 space-y-4">
                  {Array.from({ length: 8 }).map((_, idx) => (
                    <div key={idx} className="h-5 rounded-full bg-slate-200" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {!isLoading && loadError && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-10 text-center text-red-900 shadow-lg shadow-slate-200/60">
            <p className="font-bold">Product details could not be loaded.</p>
            <p className="mt-2 text-sm">{loadError}</p>
          </div>
        )}

        {!isLoading && !loadError && !product && supabaseConfigMessage && (
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-10 text-center text-amber-900 shadow-lg shadow-slate-200/60">
            <p className="font-bold">Product catalog is not connected yet.</p>
            <p className="mt-2 text-sm">{supabaseConfigMessage}</p>
          </div>
        )}

        {!isLoading && !loadError && !product && !supabaseConfigMessage && (
          <div className="rounded-lg border border-slate-200 bg-white p-10 text-center text-slate-500 shadow-lg shadow-slate-200/60">
            Product details were not found.
          </div>
        )}

        {!isLoading && product && (
          <>
            <div className="mb-8">
              <p className="text-primary-blue font-semibold tracking-wider uppercase text-sm mb-3">
                {product.apiName}
              </p>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 leading-tight">
                {product.impurityName}
              </h1>
              <div className="mt-4 flex gap-3">
                <a
                  href={buildMailToLink(product)}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold text-sm"
                >
                  Request a Quote
                </a>
                <a
                  href={`/contact?apiName=${encodeURIComponent(product.apiName)}&impurityName=${encodeURIComponent(product.impurityName)}&catNo=${encodeURIComponent(product.catNo)}&casNo=${encodeURIComponent(product.casNo)}&iupac=${encodeURIComponent(product.iupac)}&mf=${encodeURIComponent(product.molecularFormula)}&mw=${encodeURIComponent(product.molecularWeight)}&storage=${encodeURIComponent(product.storage)}&status=${encodeURIComponent(product.inventoryStatus)}`}
                  className="inline-flex items-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-900 px-5 py-3 rounded-lg font-semibold text-sm border border-slate-200"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
              <div className="rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-200/60 overflow-hidden">
                <button
                  type="button"
                  disabled={!hasImage}
                  onClick={() => {
                    setZoom(1);
                    setIsZoomOpen(true);
                  }}
                  className="aspect-square w-full bg-slate-100 flex items-center justify-center overflow-hidden disabled:cursor-default"
                  aria-label="Open structure image"
                >
                  {hasImage ? (
                    <img
                      src={product.structure}
                      alt={product.impurityName}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain p-6"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-3 text-slate-400">
                      <ImageIcon className="h-14 w-14" />
                      <span className="text-sm font-semibold">Structure image pending</span>
                    </div>
                  )}
                </button>
              </div>

              <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
                <table className="w-full text-left text-sm">
                  <tbody className="divide-y divide-slate-100">
                    {detailRows.map(row => (
                      <tr key={row} className="align-top">
                        <th scope="row" className="w-44 bg-slate-50 px-5 py-4 font-bold text-slate-600">
                          {productFieldLabels[row]}
                        </th>
                        <td className="px-5 py-4 text-slate-900">
                          <span className={row === 'casNo' || row === 'catNo' ? 'font-mono text-xs' : ''}>
                            {product[row]}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {isZoomOpen && hasImage && (
              <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm p-4 md:p-8">
                <div className="h-full rounded-lg bg-white shadow-2xl overflow-hidden flex flex-col">
                  <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-slate-900">{product.impurityName}</p>
                      <p className="text-xs text-slate-500">Structure image</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setZoom(value => Math.max(0.5, value - 0.25))}
                        className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50"
                        aria-label="Zoom out"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-14 text-center text-xs font-bold text-slate-600">{Math.round(zoom * 100)}%</span>
                      <button
                        type="button"
                        onClick={() => setZoom(value => Math.min(3, value + 0.25))}
                        className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50"
                        aria-label="Zoom in"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsZoomOpen(false)}
                        className="h-9 w-9 inline-flex items-center justify-center rounded-md bg-slate-900 text-white hover:bg-slate-700"
                        aria-label="Close image preview"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 overflow-auto bg-slate-100 flex items-center justify-center">
                    <img
                      src={product.structure}
                      alt={product.impurityName}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full max-w-full object-contain transition-transform duration-150"
                      style={{ transform: `scale(${zoom})` }}
                    />
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
