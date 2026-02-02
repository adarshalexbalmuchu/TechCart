import { Search, ShoppingBag, Menu, X, User, LogOut, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/hooks/useCart";
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

const HeaderPremium = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  
  const { user, signOut } = useAuth();
  const { cartCount } = useCart();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if user is admin
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) {
        setIsAdmin(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (!error && data) {
          const profileData = data as Record<string, unknown>;
          setIsAdmin(Boolean(profileData.is_admin) || false);
        }
      } catch {
        setIsAdmin(false);
      }
    };

    checkAdminStatus();
  }, [user]);

  const navLinks = [
    { name: "Products", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Support", path: "/support" },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <>
      {/* Announcement Bar - Subtle */}
      <div className="bg-foreground text-background py-2">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs tracking-widest uppercase">
            Complimentary shipping on orders over ₹5,000
          </p>
        </div>
      </div>

      <header 
        className={`sticky top-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-sm" 
            : "bg-white"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Left: Navigation - Desktop */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xs tracking-widest uppercase text-foreground/70 hover:text-foreground transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 -ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" strokeWidth={1.5} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              )}
            </button>

            {/* Center: Logo */}
            <Link 
              to="/" 
              className="absolute left-1/2 -translate-x-1/2 flex items-center"
            >
              <img 
                src={`${import.meta.env.BASE_URL}unitech-logo.png`} 
                alt="Unitech - Expand Your Life" 
                className="h-8 md:h-10 w-auto"
              />
            </Link>

            {/* Right: Actions */}
            <div className="flex items-center gap-5">
              {/* Search */}
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-1 text-foreground/70 hover:text-foreground transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" strokeWidth={1.5} />
              </button>
              
              {/* User */}
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="p-1 text-foreground/70 hover:text-foreground transition-colors">
                    <User className="w-5 h-5" strokeWidth={1.5} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white border-border min-w-[180px]">
                    <DropdownMenuItem onClick={() => navigate("/profile")} className="cursor-pointer text-sm tracking-wide">
                      My Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/orders")} className="cursor-pointer text-sm tracking-wide">
                      My Orders
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/wishlist")} className="cursor-pointer text-sm tracking-wide">
                      Wishlist
                    </DropdownMenuItem>
                    {isAdmin && (
                      <>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => navigate("/admin")} className="cursor-pointer text-sm tracking-wide">
                          <ShieldCheck className="w-4 h-4 mr-2" strokeWidth={1.5} />
                          Admin Panel
                        </DropdownMenuItem>
                      </>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-sm tracking-wide text-red-600">
                      <LogOut className="w-4 h-4 mr-2" strokeWidth={1.5} />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link 
                  to="/auth" 
                  className="p-1 text-foreground/70 hover:text-foreground transition-colors"
                  aria-label="Sign in"
                >
                  <User className="w-5 h-5" strokeWidth={1.5} />
                </Link>
              )}
              
              {/* Cart */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="p-1 text-foreground/70 hover:text-foreground transition-colors relative"
                aria-label="Shopping bag"
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-foreground text-background text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container mx-auto px-6 py-6 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm tracking-widest uppercase text-foreground/70 hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default HeaderPremium;
