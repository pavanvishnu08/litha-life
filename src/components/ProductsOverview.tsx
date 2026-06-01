import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const categories = [
  "All Products",
  "APIs",
  "Advanced Intermediates",
  "Key Starting Materials",
  "Specialty Chemicals"
];

const products = [
  { id: 1, name: "Sitagliptin Phosphate", category: "APIs", cas: "654671-78-0", use: "Anti-diabetic" },
  { id: 2, name: "Vildagliptin", category: "APIs", cas: "274901-16-5", use: "Anti-diabetic" },
  { id: 3, name: "Empagliflozin Intermediate", category: "Advanced Intermediates", cas: "864070-44-0", use: "Synthesis" },
  { id: 4, name: "Dapagliflozin Intermediate", category: "Advanced Intermediates", cas: "461432-26-8", use: "Synthesis" },
  { id: 5, name: "Teneligliptin KSM", category: "Key Starting Materials", cas: "Pending", use: "Building Block" },
  { id: 6, name: "Custom Chiral Molecules", category: "Specialty Chemicals", cas: "Various", use: "Contract Manufacturing" },
];

export function ProductsOverview() {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === "All Products" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.cas.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-24 relative bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-primary-blue font-semibold tracking-wider uppercase text-sm mb-3">Product Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 leading-tight mb-8">
            Comprehensive Pharmaceutical Solutions.
          </h3>
          
          <div className="flex flex-col sm:flex-row bg-white rounded-full p-2 w-full shadow-lg shadow-black/5 border border-slate-200 transition-all focus-within:ring-2 focus-within:ring-[#0077FF]/20 focus-within:border-[#0077FF]">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search products or CAS..." 
                className="w-full bg-transparent pl-12 pr-4 py-3 outline-none text-base font-medium placeholder:text-slate-400 text-slate-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="bg-slate-50 hidden sm:flex rounded-full px-6 py-3 border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-primary-blue transition-colors items-center gap-2 font-semibold text-sm shrink-0">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                activeCategory === cat 
                  ? "medical-gradient text-white shadow-md" 
                  : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map(product => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="bg-white border-slate-200 border rounded-2xl p-6 hover:shadow-xl hover:shadow-slate-200 transition-all group flex flex-col h-full"
              >
                <div className="text-xs font-bold text-primary-blue mb-2 uppercase tracking-wide">
                  {product.category}
                </div>
                <h4 className="text-xl font-heading font-bold text-slate-900 mb-4 group-hover:text-primary-blue transition-colors">
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
                <Link to={`/contact?product=${encodeURIComponent(product.name)}`} className="w-full py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-semibold text-sm hover:medical-gradient hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(0,119,255,0.4)] transition-all flex items-center justify-center gap-2">
                  Inquire Now <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No products found matching your criteria.
          </div>
        )}

      </div>
    </section>
  );
}
