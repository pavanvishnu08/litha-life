import { useState, ReactNode } from 'react';
import { Menu, X, Search, Home, Layers, User, MessageSquare, MapPin, Mail, Phone, Award, Factory } from 'lucide-react';
import { Logo } from './Logo';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { findBestProductMatch, loadProducts } from '../services/products';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  async function handleSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = searchQuery.trim();
    if (!query) {
      return;
    }

    setIsSearching(true);
    const result = await loadProducts();
    const exactMatch = findBestProductMatch(result.data, query);
    setIsSearching(false);
    setMobileMenuOpen(false);

    if (exactMatch) {
      navigate(`/catalog/${exactMatch.id}`, {
        state: {
          catalogPath: `/catalog?search=${encodeURIComponent(query)}`,
        },
      });
      setSearchQuery("");
      return;
    }

    navigate(`/catalog?search=${encodeURIComponent(query)}`);
  }

  const NavItem = ({ to, icon, label }: { to: string, icon: ReactNode, label: string }) => {
    const active = isActive(to);
    return (
      <Link 
        to={to} 
        className={cn(
          "flex items-center gap-2 text-[13px] font-bold px-4 py-2 rounded-md transition-colors",
          active ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
        )}
      >
        {icon} {label}
      </Link>
    );
  };

  const MobileNavItem = ({ to, icon, label }: { to: string, icon: ReactNode, label: string }) => {
    const active = isActive(to);
    return (
      <Link 
        to={to} 
        onClick={() => setMobileMenuOpen(false)}
        className={cn(
          "flex items-center gap-2 text-[14px] font-bold px-4 py-3 rounded-md transition-colors",
          active ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:text-blue-600"
        )}
      >
        {icon} {label}
      </Link>
    );
  };

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-[#0f172a] text-slate-300 text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 hidden md:flex justify-between items-center">
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-1.5">
             <MapPin className="w-3 h-3 text-blue-400" />
             <span>#Block A-205, Pagadala Pride, Bachupally (V), Medchal-Malkajigiri, TS, INDIA</span>
           </div>
           <div className="flex items-center gap-1.5 border-l border-slate-700 pl-6">
             <span>Mon - Sat 9:00 AM - 6:00 PM IST</span>
           </div>
        </div>
        <div className="flex items-center gap-6">
           <a href="mailto:info@lithalife.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
             <Mail className="w-3 h-3 text-blue-400" />
             <span>info@lithalife.com</span>
           </a>
           <a href="tel:+918790545679" className="flex items-center gap-1.5 hover:text-white transition-colors border-l border-slate-700 pl-6">
             <Phone className="w-3 h-3 text-green-400" />
             <span>+91 8790545679</span>
           </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 mr-8">
              <Logo variant="dark" />
            </Link>
            
            {/* Nav Links */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 mr-8">
              <NavItem to="/" icon={<Home className="w-4 h-4" />} label="Home" />
              <NavItem to="/catalog" icon={<Layers className="w-4 h-4" />} label="Catalog" />
              <NavItem to="/why-us" icon={<Award className="w-4 h-4" />} label="Why Us" />
              <NavItem to="/infrastructure" icon={<Factory className="w-4 h-4" />} label="Infrastructure" />
              <NavItem to="/about" icon={<User className="w-4 h-4" />} label="About Us" />
              <NavItem to="/contact" icon={<MessageSquare className="w-4 h-4" />} label="Contact" />
            </nav>

            {/* Right side actions */}
            <div className="hidden lg:flex items-center gap-4 flex-1 justify-end">
              {/* Search Bar - Small */}
              <form onSubmit={handleSearchSubmit} className="relative flex-1 max-w-[250px] xl:max-w-[300px]">
                <button
                  type="submit"
                  aria-label="Search products"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600"
                >
                  <Search className="w-4 h-4" />
                </button>
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  disabled={isSearching}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                />
              </form>

              <Link to="/contact" className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2.5 rounded-lg font-bold text-[13px] whitespace-nowrap transition-colors shadow-md shadow-blue-500/20">
                Request Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button 
              type="button" 
              className="lg:hidden p-2 text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl py-4 flex flex-col">
            <div className="px-4 pb-4 border-b border-slate-100">
              <form onSubmit={handleSearchSubmit} className="relative">
                <button
                  type="submit"
                  aria-label="Search products"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600"
                >
                  <Search className="w-4 h-4" />
                </button>
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  disabled={isSearching}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                />
              </form>
            </div>
            <div className="px-2 py-2 flex flex-col gap-1">
              <MobileNavItem to="/" icon={<Home className="w-4 h-4" />} label="Home" />
              <MobileNavItem to="/catalog" icon={<Layers className="w-4 h-4" />} label="Catalog" />
              <MobileNavItem to="/why-us" icon={<Award className="w-4 h-4" />} label="Why Us" />
              <MobileNavItem to="/infrastructure" icon={<Factory className="w-4 h-4" />} label="Infrastructure" />
              <MobileNavItem to="/about" icon={<User className="w-4 h-4" />} label="About Us" />
              <MobileNavItem to="/contact" icon={<MessageSquare className="w-4 h-4" />} label="Contact" />
            </div>
            <div className="px-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="bg-blue-600 text-white text-center py-3 rounded-lg font-bold text-[14px] shadow-md shadow-blue-500/20">
                Request Quote
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
