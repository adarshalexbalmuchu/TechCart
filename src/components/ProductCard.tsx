import { Star, Heart, ShoppingCart, GitCompare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { useCompare } from "@/hooks/useCompare";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  price: number | null;
  originalPrice: number | null;
  discount: number;
}

const ProductCard = ({
  id,
  name,
  image,
  rating,
  reviews,
  price,
  originalPrice,
  discount,
}: ProductCardProps) => {
  console.log('🔍 ProductCard rendering:', { id, name });
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCompare, removeFromCompare, isInCompare, compareProducts } = useCompare();
  const navigate = useNavigate();
  
  const liked = isInWishlist(id);
  const inCompare = isInCompare(id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(id);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(id);
  };

  const handleToggleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('🔄 Compare button clicked:', { id, name, inCompare });
    
    // If already in compare, remove it
    if (inCompare) {
      removeFromCompare(id);
      toast.success("Removed from compare");
      return;
    }
    
    // Check if we can add more
    if (compareProducts.length >= 4) {
      toast.error("Maximum 4 products can be compared");
      return;
    }
    
    // Add to compare
    addToCompare({
      id,
      name,
      image_url: image,
      price,
      original_price: originalPrice,
      rating,
      category: "",
      brand: null,
      description: null,
      discount_percent: discount,
    });
    
    toast.success("Added to compare");
  };

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative bg-background p-4 aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-[1.05] transition-transform duration-500"
        />
        
        {/* Discount Badge - minimal */}
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-success/10 text-success border border-success/20 text-xs font-medium px-2 py-1 rounded">
            -{discount}%
          </span>
        )}

        {/* Quick Actions - Always visible with better contrast */}
        <div className="absolute top-3 right-3 flex flex-col gap-2" style={{ backgroundColor: 'rgba(255,0,0,0.1)', border: '2px solid red' }}>
          <button
            onClick={handleToggleWishlist}
            className={`p-2 rounded-md backdrop-blur-sm shadow-lg transition-all hover:scale-110 ${
              liked 
                ? "bg-destructive text-white border-2 border-destructive" 
                : "bg-white/90 text-foreground border-2 border-white hover:border-destructive hover:text-destructive hover:bg-white"
            }`}
          >
            <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} strokeWidth={2} />
          </button>
          <button
            onClick={handleToggleCompare}
            className={`p-2 rounded-md backdrop-blur-sm shadow-lg transition-all hover:scale-110 ${
              inCompare
                ? "bg-primary text-white border-2 border-primary"
                : "bg-white/90 text-foreground border-2 border-white hover:border-primary hover:text-primary hover:bg-white"
            }`}
          >
            <GitCompare className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Rating - subtle */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(rating)
                    ? "text-primary/70 fill-primary/70"
                    : "text-muted-foreground/30"
                }`}
                strokeWidth={1.5}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({reviews})
          </span>
        </div>

        {/* Name */}
        <h3 className="font-medium text-foreground line-clamp-2 text-sm leading-snug min-h-[2.5rem]">
          {name}
        </h3>

        {/* Price */}
        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-semibold text-foreground">
              ₹{(price || 0).toLocaleString()}
            </span>
            {originalPrice && originalPrice > (price || 0) && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        {/* Actions - outline style */}
        <div className="flex items-center gap-2 pt-2">
          <button 
            onClick={handleAddToCart}
            className="flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium py-2 px-4 rounded-lg text-sm flex items-center justify-center gap-2 transition-all"
          >
            <ShoppingCart className="w-4 h-4" strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
