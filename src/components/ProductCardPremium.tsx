import { useNavigate } from "react-router-dom";
import LazyImage from "./LazyImage";

interface ProductCardPremiumProps {
  id: string;
  name: string;
  image: string;
  price: number | null;
  category?: string;
  index?: number;
}

const ProductCardPremium = ({
  id,
  name,
  image,
  price,
  category,
  index = 0,
}: ProductCardPremiumProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <article 
      onClick={handleClick}
      className="group cursor-pointer animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      aria-label={`${name} product`}
    >
      {/* Image Container - Lookbook Style */}
      <div className="relative aspect-[3/4] bg-[#f5f3f0] mb-6 overflow-hidden">
        <LazyImage
          src={image}
          alt={name}
          className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700 ease-out"
          wrapperClassName="w-full h-full"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
        
        {/* Quick View on Hover */}
        <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button className="w-full bg-white text-foreground py-3 text-xs tracking-[0.15em] uppercase hover:bg-foreground hover:text-white transition-colors duration-300">
            Quick View
          </button>
        </div>
      </div>

      {/* Content - Minimal */}
      <div className="space-y-2">
        {/* Category */}
        {category && (
          <span className="text-xs tracking-widest uppercase text-muted-foreground/70">
            {category.replace(/-/g, ' ')}
          </span>
        )}
        
        {/* Name */}
        <h3 className="text-base font-normal text-foreground leading-snug line-clamp-2 group-hover:text-foreground/70 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
          {name}
        </h3>
        
        {/* Price - Subtle */}
        {price && (
          <p className="text-sm text-muted-foreground tracking-wide">
            ₹{price.toLocaleString('en-IN')}
          </p>
        )}
      </div>
    </article>
  );
};

export default ProductCardPremium;
