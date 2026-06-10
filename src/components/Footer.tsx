import { Logo } from './Logo';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-blue-900 pt-16 pb-8 border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo variant="light" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Advancing global healthcare through pharmaceutical excellence. A reliable partner for APIs, intermediates, and custom manufacturing.
            </p>
          </div>

          <div className="md:flex md:justify-end">
            <div className="md:text-right">
              <h4 className="text-white font-heading font-bold mb-6 tracking-wide">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-blue-200 hover:text-white transition-colors text-sm font-medium">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="text-blue-200 hover:text-white transition-colors text-sm font-medium">About Us</Link>
                </li>
                <li>
                  <Link to="/why-us" className="text-blue-200 hover:text-white transition-colors text-sm font-medium">Why Us</Link>
                </li>
                <li>
                  <Link to="/infrastructure" className="text-blue-200 hover:text-white transition-colors text-sm font-medium">Infrastructure</Link>
                </li>
                <li>
                  <Link to="/catalog" className="text-blue-200 hover:text-white transition-colors text-sm font-medium">Catalog</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-blue-200 hover:text-white transition-colors text-sm font-medium">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-200 text-xs sm:text-sm font-medium">
            © {new Date().getFullYear()} Litha Life Sciences Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center">
            <a href="https://exelusinfotech.com/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white text-xs sm:text-sm font-medium">Developed by Exelus Info Tech Pvt. Ltd.</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
