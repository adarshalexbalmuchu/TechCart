import { 
  Speaker, 
  Radio, 
  Car, 
  Zap, 
  Settings, 
  Flame,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Tower Speakers", icon: Speaker, slug: "tower-speakers" },
  { name: "Home Theatre", icon: Speaker, slug: "home-theatre-systems" },
  { name: "DTH Receivers", icon: Radio, slug: "dth-receivers" },
  { name: "Car Audio", icon: Car, slug: "car-stereo-systems" },
  { name: "Power Strips", icon: Zap, slug: "power-strips" },
  { name: "Audio Parts", icon: Settings, slug: "speakers" },
  { name: "Amplifiers", icon: Speaker, slug: "audio-amplifiers" },
  { name: "Hot Selling", icon: Flame, slug: "hot-selling-products" },
];

const CategoryNav = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-6 sm:py-8 border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Desktop: Horizontal scroll with arrows, Mobile: Responsive grid */}
        <div className="hidden sm:block relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border border-gray-200 p-2 rounded-lg text-gray-600 hover:text-primary transition-all shadow-sm"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={2} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-8 sm:gap-10 overflow-x-auto scrollbar-hide px-2 sm:px-10"
          >
            {categories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => navigate(`/products/${category.slug}`)}
                className="flex flex-col items-center gap-2 min-w-[80px] hover:opacity-70 transition-all duration-200 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-primary/10 transition-colors">
                  <category.icon className="w-6 h-6 text-gray-600 group-hover:text-primary transition-colors" strokeWidth={1.5} />
                </div>
                <span className="text-xs text-gray-600 group-hover:text-gray-900 font-medium text-center whitespace-nowrap transition-colors">
                  {category.name}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border border-gray-200 p-2 rounded-lg text-gray-600 hover:text-primary transition-all shadow-sm"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>

        {/* Mobile: Grid Layout */}
        <div className="sm:hidden grid grid-cols-3 gap-3">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => navigate(`/products/${category.slug}`)}
              className="flex flex-col items-center gap-2 p-3 hover:bg-gray-50 rounded-lg transition-all duration-200 min-h-[80px] justify-center"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-lg">
                <category.icon className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] text-gray-600 font-medium text-center leading-tight">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryNav;
