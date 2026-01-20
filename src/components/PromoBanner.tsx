const PromoBanner = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-blue-50 to-primary/5 border border-blue-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_80%_50%,hsl(var(--primary)),transparent_70%)]" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                New Arrivals in Audio Equipment
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Discover the latest additions to our catalogue
              </p>
            </div>
            <a 
              href="/products?sort=newest"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl transition-all whitespace-nowrap text-sm sm:text-base shadow-sm hover:shadow-md min-h-[48px] flex items-center justify-center"
            >
              View New Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
