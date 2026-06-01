import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredProducts = [
  { id: 1, name: "Sitagliptin Phosphate", category: "APIs", cas: "654671-78-0", use: "Anti-diabetic" },
  { id: 2, name: "Empagliflozin Intermediate", category: "Advanced Intermediates", cas: "864070-44-0", use: "Synthesis" },
  { id: 3, name: "Teneligliptin KSM", category: "Key Starting Materials", cas: "Pending", use: "Building Block" },
];

export function FeaturedProducts() {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <div key={product.id} className="bg-white border-slate-200 border rounded-2xl p-6 hover:shadow-xl hover:shadow-slate-200 transition-all group flex flex-col h-full">
              <div className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide">
                {product.category}
              </div>
              <h4 className="text-xl font-heading font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {product.name}
              </h4>
              <div className="mt-auto space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-medium">CAS No:</span>
                  <span className="text-slate-900 font-mono text-xs">{product.cas}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 font-medium">Application:</span>
                  <span className="text-slate-900">{product.use}</span>
                </div>
              </div>
              <Link 
                to={`/contact?product=${encodeURIComponent(product.name)}`} 
                className="w-full py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-semibold text-sm hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                Inquire Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

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
