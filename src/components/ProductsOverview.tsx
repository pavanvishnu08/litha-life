import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, FlaskConical, Image as ImageIcon, Search } from 'lucide-react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ProductRecord } from '../data/productCatalog';
import { supabaseConfigMessage } from '../lib/supabase';
import { findBestProductMatch, loadProducts, productMatchesSearch } from '../services/products';

const alphabet = ['#', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

function getInitial(apiName: string) {
  const initial = apiName.trim().charAt(0).toUpperCase();
  return /^[A-Z]$/.test(initial) ? initial : '#';
}

function hasStructureImage(structure: string) {
  return /^https?:\/\//i.test(structure) || structure.startsWith('/');
}

export function ProductsOverview() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') ?? "");
  const [products, setProducts] = useState<ProductRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [selectedApi, setSelectedApi] = useState<string | null>(searchParams.get('api'));

  useEffect(() => {
    let isActive = true;

    loadProducts().then(result => {
      if (isActive) {
        setProducts(result.data);
        setLoadError(result.error);
        setIsLoading(false);
      }
    });

    return () => {
      isActive = false;
    };
  }, []);

  const apiGroups = useMemo(() => {
    const groups = new Map<string, ProductRecord[]>();

    products.forEach(product => {
      const apiName = product.apiName.trim();
      if (!apiName) {
        return;
      }

      const existing = groups.get(apiName) ?? [];
      groups.set(apiName, [...existing, product]);
    });

    return [...groups.entries()]
      .map(([apiName, impurities]) => ({
        apiName,
        initial: getInitial(apiName),
        impurities: impurities.sort((a, b) => a.impurityName.localeCompare(b.impurityName)),
      }))
      .sort((a, b) => a.apiName.localeCompare(b.apiName));
  }, [products]);

  const availableLetters = useMemo(
    () => new Set(apiGroups.map(group => group.initial)),
    [apiGroups]
  );

  const visibleApiGroups = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return apiGroups.filter(group => {
      const matchesLetter = Boolean(query) || !selectedLetter || group.initial === selectedLetter;
      const matchesSearch = !query || group.apiName.toLowerCase().includes(query) ||
        group.impurities.some(product => productMatchesSearch(product, query));

      return matchesLetter && matchesSearch;
    });
  }, [apiGroups, searchQuery, selectedLetter]);

  useEffect(() => {
    const nextSearch = searchParams.get('search') ?? "";
    setSearchQuery(nextSearch);
    setSelectedApi(searchParams.get('api'));
    setSelectedLetter(searchParams.get('letter'));
  }, [searchParams]);

  useEffect(() => {
    if (selectedLetter || apiGroups.length === 0) {
      return;
    }

    const preferredLetter = alphabet.find(letter => availableLetters.has(letter));
    setSelectedLetter(preferredLetter ?? null);
  }, [apiGroups.length, availableLetters, selectedLetter]);

  useEffect(() => {
    if (visibleApiGroups.length === 0) {
      setSelectedApi(null);
      return;
    }

    if (!selectedApi || !visibleApiGroups.some(group => group.apiName === selectedApi)) {
      setSelectedApi(visibleApiGroups[0].apiName);
    }
  }, [selectedApi, visibleApiGroups]);

  const selectedGroup = visibleApiGroups.find(group => group.apiName === selectedApi);
  const catalogPath = `/catalog?${new URLSearchParams({
    ...(searchQuery.trim() ? { search: searchQuery.trim() } : {}),
    ...(selectedLetter ? { letter: selectedLetter } : {}),
    ...(selectedApi ? { api: selectedApi } : {}),
  }).toString()}`;

  function updateCatalogParams(next: { search?: string; letter?: string | null; api?: string | null }) {
    const params = new URLSearchParams(searchParams);

    if (next.search !== undefined) {
      if (next.search.trim()) {
        params.set('search', next.search.trim());
      } else {
        params.delete('search');
      }
    }

    if (next.letter !== undefined) {
      if (next.letter) {
        params.set('letter', next.letter);
      } else {
        params.delete('letter');
      }
    }

    if (next.api !== undefined) {
      if (next.api) {
        params.set('api', next.api);
      } else {
        params.delete('api');
      }
    }

    setSearchParams(params, { replace: true });
  }

  function handleCatalogSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const match = findBestProductMatch(products, searchQuery);
    if (match) {
      navigate(`/catalog/${match.id}`, {
        state: {
          catalogPath: `/catalog?search=${encodeURIComponent(searchQuery.trim())}`,
        },
      });
    }
  }

  return (
    <section id="products" className="py-16 md:py-20 relative bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8">
          <h2 className="text-primary-blue font-semibold tracking-wider uppercase text-sm mb-3">Product Portfolio</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 leading-tight mb-6">
            Browse APIs and their impurities.
          </h3>

          <form onSubmit={handleCatalogSearchSubmit} className="flex bg-white rounded-full p-2 w-full shadow-lg shadow-black/5 border border-slate-200 transition-all focus-within:ring-2 focus-within:ring-[#0077FF]/20 focus-within:border-[#0077FF]">
            <div className="relative flex-grow">
              <button
                type="submit"
                aria-label="Open matching product"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary-blue"
              >
                <Search className="w-5 h-5" />
              </button>
              <input
                type="text"
                placeholder="Search API, impurity, CAT NO, CAS, synonyms..."
                className="w-full bg-transparent pl-12 pr-4 py-3 outline-none text-base font-medium placeholder:text-slate-400 text-slate-900"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  updateCatalogParams({ search: event.target.value, api: null });
                }}
              />
            </div>
          </form>
        </div>

        {isLoading && (
          <div className="text-center py-12 text-slate-500">
            Loading product catalog...
          </div>
        )}

        {!isLoading && loadError && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-6 py-5 text-red-900">
            <p className="font-bold">Product catalog could not be loaded.</p>
            <p className="mt-1 text-sm">{loadError}</p>
          </div>
        )}

        {!isLoading && !loadError && products.length > 0 && (
          <>
            <div className="mb-6 flex flex-wrap gap-2">
              {alphabet.map(letter => {
                const isAvailable = availableLetters.has(letter);
                const isActive = selectedLetter === letter;

                return (
                  <button
                    key={letter}
                    disabled={!isAvailable}
                    onClick={() => {
                      setSelectedLetter(letter);
                      updateCatalogParams({ letter, api: null });
                    }}
                    className={`h-10 w-10 rounded-md border text-sm font-bold transition-colors ${isActive ? 'medical-gradient text-white border-transparent' : 'bg-white text-slate-700 border-slate-200 hover:border-primary-blue hover:text-primary-blue'} disabled:bg-slate-100 disabled:text-slate-300 disabled:hover:border-slate-200`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>

            <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
              <aside className="bg-white border border-slate-200 rounded-lg shadow-lg shadow-slate-200/60 overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-100 bg-slate-50 text-sm font-bold text-slate-700">
                  API Names
                </div>
                <div className="max-h-[620px] overflow-y-auto">
                  {visibleApiGroups.map(group => (
                    <button
                      key={group.apiName}
                      onClick={() => {
                        setSelectedApi(group.apiName);
                        updateCatalogParams({ api: group.apiName });
                      }}
                      className={`w-full px-4 py-4 text-left border-b border-slate-100 transition-colors ${selectedApi === group.apiName ? 'bg-blue-50 text-primary-blue' : 'bg-white text-slate-800 hover:bg-slate-50'}`}
                    >
                      <span className="block font-bold leading-snug">{group.apiName}</span>
                      <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-slate-500">
                        <FlaskConical className="h-3.5 w-3.5" />
                        {group.impurities.length} {group.impurities.length === 1 ? 'impurity' : 'impurities'}
                      </span>
                    </button>
                  ))}
                </div>
              </aside>

              <div>
                {selectedGroup && (
                  <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <h4 className="text-2xl font-heading font-bold text-slate-900">{selectedGroup.apiName}</h4>
                      <p className="text-sm font-semibold text-slate-500">
                        {selectedGroup.impurities.length} {selectedGroup.impurities.length === 1 ? 'impurity' : 'impurities'} available
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  <AnimatePresence mode="popLayout">
                    {selectedGroup?.impurities.map(product => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.2 }}
                        key={product.id}
                      >
                        <Link
                          to={`/catalog/${product.id}`}
                          state={{ catalogPath }}
                          className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200/60 transition-all hover:-translate-y-0.5 hover:border-primary-blue hover:shadow-xl"
                        >
                          <div className="aspect-[4/3] bg-slate-100 border-b border-slate-200 flex items-center justify-center overflow-hidden">
                            {hasStructureImage(product.structure) ? (
                              <img
                                src={product.structure}
                                alt={product.impurityName}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                              />
                            ) : (
                              <div className="flex flex-col items-center gap-2 text-slate-400">
                                <ImageIcon className="h-10 w-10" />
                                <span className="text-xs font-semibold">Structure image pending</span>
                              </div>
                            )}
                          </div>
                          <div className="flex flex-1 flex-col p-5">
                            <div className="text-xs font-bold text-primary-blue uppercase tracking-wide">
                              CAT NO: {product.catNo}
                            </div>
                            <h5 className="mt-2 text-lg font-heading font-bold text-slate-900 group-hover:text-primary-blue">
                              {product.impurityName}
                            </h5>
                            <div className="mt-4 space-y-2 text-sm">
                              <div className="flex justify-between gap-4">
                                <span className="font-medium text-slate-500">CAS No:</span>
                                <span className="font-mono text-xs text-slate-900 text-right">{product.casNo}</span>
                              </div>
                              <div className="flex justify-between gap-4">
                                <span className="font-medium text-slate-500">MF:</span>
                                <span className="text-slate-900 text-right">{product.molecularFormula}</span>
                              </div>
                              <div className="flex justify-between gap-4">
                                <span className="font-medium text-slate-500">MW:</span>
                                <span className="text-slate-900 text-right">{product.molecularWeight}</span>
                              </div>
                            </div>
                            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary-blue">
                              View details <ArrowRight className="h-4 w-4" />
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </>
        )}

        {!isLoading && !loadError && supabaseConfigMessage && (
          <div className="rounded-lg border border-amber-200 bg-amber-50 px-6 py-5 text-amber-900">
            <p className="font-bold">Product catalog is not connected yet.</p>
            <p className="mt-1 text-sm">{supabaseConfigMessage}</p>
          </div>
        )}

        {!isLoading && !loadError && !supabaseConfigMessage && visibleApiGroups.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No products found matching your criteria.
          </div>
        )}
      </div>
    </section>
  );
}
