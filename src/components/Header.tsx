import { Search, ShoppingCart, Heart, Menu, User, LogOut, ChevronDown, Speaker, Radio, Car, Zap, Settings, Flame, ShieldCheck, GitCompare } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { useCompare } from "@/hooks/useCompare";
import { supabase } from "@/integrations/supabase/client";
import CartSidebar from "./CartSidebar";
import SearchModal from "./SearchModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  
  const { user, signOut } = useAuth();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { compareProducts } = useCompare();
  const navigate = useNavigate();

  // Check if user is admin
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) {
        setIsAdmin(false);
        return;
      }

      const { data, error } = await supabase
        .from("profiles")
        .select("is_admin")
        .eq("id", user.id)
        .single();

      if (!error && data) {
        setIsAdmin(data.is_admin || false);
      }
    };

    checkAdminStatus();
  }, [user]);

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

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border backdrop-blur-lg bg-white/95 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img src={`${import.meta.env.BASE_URL}new-logo.png`} alt="Unitech" className="h-12 sm:h-14 w-auto" />
            </Link>

            {/* Search Bar - Desktop */}
            <div className="flex-1 max-w-xl hidden md:block">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-full bg-gray-50 border border-border rounded-full py-2.5 px-5 text-left text-muted-foreground hover:bg-gray-100 hover:border-primary/30 transition-all flex items-center justify-between group"
              >
                <span className="text-sm">Search products...</span>
                <Search className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" strokeWidth={1.5} />
              </button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Search - Mobile */}
              <button 
                className="md:hidden p-2 text-gray-600 hover:text-foreground hover:bg-gray-100 rounded-full transition-all"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="w-5 h-5" strokeWidth={1.5} />
              </button>
              
              {/* User */}
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="p-2 text-gray-600 hover:text-foreground hover:bg-gray-100 rounded-full transition-all">
                    <User className="w-5 h-5" strokeWidth={1.5} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white border-border">
                    <DropdownMenuItem onClick={() => navigate("/profile")} className="cursor-pointer">
                      My Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/orders")} className="cursor-pointer">
                      My Orders
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/wishlist")} className="cursor-pointer">
                      Wishlist
                    </DropdownMenuItem>
                    {isAdmin && (
                      <>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => navigate("/admin")} className="cursor-pointer text-primary">
                          <ShieldCheck className="w-4 h-4 mr-2" strokeWidth={1.5} />
                          Admin Panel
                        </DropdownMenuItem>
                      </>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-destructive">
                      <LogOut className="w-4 h-4 mr-2" strokeWidth={1.5} />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link 
                  to="/auth" 
                  className="p-2 text-gray-600 hover:text-foreground hover:bg-gray-100 rounded-full transition-all"
                  aria-label="Sign in"
                >
                  <User className="w-5 h-5" strokeWidth={1.5} />
                </Link>
              )}

              {/* Wishlist */}
              <Link 
                to="/wishlist" 
                className="p-2 text-gray-600 hover:text-foreground hover:bg-gray-100 rounded-full transition-all relative"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" strokeWidth={1.5} />
                {wishlistCount > 0 && (
                  <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-semibold min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Compare */}
              <Link 
                to="/compare" 
                className="p-2 text-gray-600 hover:text-foreground hover:bg-gray-100 rounded-full transition-all relative"
                aria-label="Compare"
              >
                <GitCompare className="w-5 h-5" strokeWidth={1.5} />
                {compareProducts.length > 0 && (
                  <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-semibold min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center">
                    {compareProducts.length}
                  </span>
                )}
              </Link>
              
              {/* Cart */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="p-2 text-gray-600 hover:text-foreground hover:bg-gray-100 rounded-full transition-all relative"
                aria-label="Cart"
              >
                <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-semibold min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu */}
              <button 
                className="md:hidden p-2 text-gray-600 hover:text-foreground hover:bg-gray-100 rounded-full transition-all"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
              >
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>



        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <div className="container mx-auto px-4 py-3">
              {/* Categories Section */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-muted-foreground mb-2 px-3">CATEGORIES</p>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      to={`/products/${category.slug}`}
                      className="flex items-center gap-3 py-2 px-3 text-foreground hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <category.icon className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
                      <span className="text-sm">{category.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="border-t border-border pt-3 space-y-1">
                <Link to="/products" className="block py-2 px-3 text-foreground hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>
                  All Products
                </Link>
                <Link to="/products?featured=true" className="block py-2 px-3 text-foreground hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Featured
                </Link>
                <Link to="/products?trending=true" className="block py-2 px-3 text-foreground hover:bg-gray-50 rounded-lg transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Trending
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Header;
