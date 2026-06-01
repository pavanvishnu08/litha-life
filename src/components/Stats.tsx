export function Stats() {
  const stats = [
    { label: "Catalog Items", value: "500+" },
    { label: "Purity Guaranteed", value: "≥ 98%" },
    { label: "Global Clients", value: "100+" },
    { label: "Year Founded", value: "2015" },
  ];
  return (
    <section className="bg-white py-12 border-b border-slate-100 relative -mt-32 pt-32 pb-16 z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-slate-200/60">
          {stats.map((stat, i) => (
            <div key={i} className="text-center px-4">
              <h3 className="text-4xl sm:text-5xl font-extrabold text-blue-200 mb-3 tracking-tight">{stat.value}</h3>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
