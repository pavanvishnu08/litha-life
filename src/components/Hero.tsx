import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { findBestProductMatch, loadProducts } from '../services/products';
import { useDeferredBackground } from '../lib/useDeferredBackground';

export function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  async function handleHeroSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = searchQuery.trim();
    if (!query) return;

    setIsSearching(true);
    const result = await loadProducts();
    const exactMatch = findBestProductMatch(result.data, query);
    setIsSearching(false);

    if (exactMatch) {
      navigate(`/catalog/${exactMatch.id}`, {
        state: {
          catalogPath: `/catalog?search=${encodeURIComponent(query)}`,
        },
      });
      setSearchQuery('');
      return;
    }

    navigate(`/catalog?search=${encodeURIComponent(query)}`);
  }

  const backgroundImage = useDeferredBackground('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop');

  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-blue-900">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50 mix-blend-overlay"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/80 to-white z-0"></div>

      {/* Grid Pattern / Decor */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center pt-8">
        
        {/* Title */}
        <motion.h1 
          className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Welcome to Litha Life Sciences
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p 
          className="text-base sm:text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Your trusted partner and leading pharmaceutical bulk manufacturer of Intermediates, Advanced Intermediates for renowned domestic and international companies
        </motion.p>

        {/* Big Search Bar */}
        <motion.form
          onSubmit={handleHeroSearchSubmit}
          className="w-full max-w-2xl bg-white rounded-xl p-1.5 flex items-center shadow-2xl mb-12 focus-within:ring-4 focus-within:ring-blue-500/20 transition-all border border-slate-200"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Search className="w-5 h-5 text-slate-400 ml-4 mr-2 hidden sm:block shrink-0" />
          <input
            type="text"
            placeholder="Search by compound name, CAS number, or category..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            disabled={isSearching}
            className="flex-1 bg-transparent border-none outline-none px-4 py-3 sm:py-3.5 text-slate-800 text-sm sm:text-base placeholder:text-slate-400 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={isSearching}
            className="bg-blue-600 hover:bg-blue-700 disabled:hover:bg-blue-600 disabled:opacity-70 text-white font-bold py-3 sm:py-3.5 px-6 sm:px-8 rounded-lg transition-colors whitespace-nowrap text-sm sm:text-base shadow-md"
          >
            {isSearching ? 'Searching...' : 'Search'}
          </button>
        </motion.form>
        
        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link to="/catalog" className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-blue-600 px-8 py-4 rounded-lg font-bold text-[15px] transition-all shadow-xl shadow-blue-500/20 border border-slate-200 gap-2">
            Browse Catalog <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="mailto:info@lithalife.com" className="inline-flex items-center justify-center bg-slate-400/20 hover:bg-slate-400/30 text-white border border-slate-300/30 backdrop-blur-sm px-6 py-2.5 rounded-lg font-semibold text-sm transition-all">
            Request a Quote
          </a>
        </motion.div>

      </div>
    </section>
  );
}
