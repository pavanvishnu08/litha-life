import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductRecord } from '../data/productCatalog';
import { getFeaturedProducts, getProductsByCatNos } from '../services/products';

type FeaturedProductsProps = {
  catNos?: string[];
};

export function FeaturedProducts({ catNos }: FeaturedProductsProps) {
  const [featuredProducts, setFeaturedProducts] = useState<ProductRecord[]>([]);

  useEffect(() => {
    let isActive = true;

    const loader = async () => {
      if (catNos && catNos.length > 0) {
        return await getProductsByCatNos(catNos);
      }

      return await getFeaturedProducts();
    };

    loader().then(records => {
      if (isActive) {
        setFeaturedProducts(records);
      }
    });

    return () => {
      isActive = false;
    };
  }, [catNos]);

  return (
    <section className="py-24 relative bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3">Latest Products</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 leading-tight">
              Featured Innovations from our Portfolio.
            </h3>
          </div>
          <Link 
            to="/catalog" 
            className="hidden md:flex mt-6 md:mt-0 items-center justify-center bg-slate-50 hover:bg-blue-50 text-blue-600 px-6 py-3 rounded-lg font-bold text-sm transition-colors border border-slate-200 gap-2 whitespace-nowrap"
          >
            View Full Catalog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {featuredProducts.length > 0 && (
        <div className="overflow-x-auto -mx-4 px-4">
          <div className="flex gap-4 w-max">
            {featuredProducts.map(product => {
              const hasImage = /^https?:\/\//i.test(String(product.structure)) || String(product.structure).startsWith('/');

              return (
                <Link
                  key={product.slNo}
                  to={`/catalog/${product.id}`}
                  className="bg-white border-slate-200 border rounded-lg p-4 hover:shadow-xl hover:shadow-slate-200 transition-all group flex-shrink-0 w-96 flex flex-col min-h-[34rem]"
                >
                  <div className="h-40 mb-4 bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center">
                    {hasImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={product.structure} alt={product.impurityName || product.apiName} loading="lazy" decoding="async" className="w-full h-full object-contain" />
                    ) : (
                      <div className="text-sm text-slate-400">Image pending</div>
                    )}
                  </div>

                  <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide">
                    CAT NO: {product.catNo}
                  </div>
                  <h4 className="text-xl font-heading font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {product.apiName}
                  </h4>
                  <p className="text-sm text-slate-600 mb-4">
                    {product.impurityName}
                  </p>
                  <div className="space-y-3 text-sm text-slate-700">
                    <div className="flex justify-between gap-3">
                      <span className="font-medium text-slate-500">CAT NO</span>
                      <span className="text-right font-semibold text-slate-900">{product.catNo}</span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span className="font-medium text-slate-500">CAS No</span>
                      <span className="text-right font-mono text-xs text-slate-900">{product.casNo}</span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span className="font-medium text-slate-500">IUPAC</span>
                      <span className="text-right text-slate-900">{product.iupac}</span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span className="font-medium text-slate-500">MF</span>
                      <span className="text-right text-slate-900">{product.molecularFormula}</span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span className="font-medium text-slate-500">MW</span>
                      <span className="text-right text-slate-900">{product.molecularWeight}</span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span className="font-medium text-slate-500">Storage</span>
                      <span className="text-right text-slate-900">{product.storage}</span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span className="font-medium text-slate-500">Inv Status</span>
                      <span className="text-right text-slate-900">{product.inventoryStatus}</span>
                    </div>
                  </div>
                  <div className="mt-4 text-right">
                    <span className="text-sm font-semibold text-blue-600">View product →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        )}

        <Link 
          to="/catalog" 
          className="md:hidden mt-8 w-full flex items-center justify-center bg-slate-50 hover:bg-blue-50 text-blue-600 px-6 py-4 rounded-lg font-bold text-sm transition-colors border border-slate-200 gap-2"
        >
          View Full Catalog <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
