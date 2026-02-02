import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import ProductCardPremium from "./ProductCardPremium";

interface CategorySectionProps {
  title: string;
  subtitle: string;
  category: string;
  reverse?: boolean;
  bgColor?: string;
}

const CategorySection = ({ 
  title, 
  subtitle, 
  category, 
  reverse = false,
  bgColor = "bg-white"
}: CategorySectionProps) => {
  const { products, loading } = useProducts({ category });
  const displayProducts = products.slice(0, 3);

  if (loading) {
    return (
      <section className={`py-20 md:py-28 ${bgColor}`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-muted rounded-sm mb-6" />
                <div className="h-4 bg-muted rounded w-3/4 mb-3" />
                <div className="h-4 bg-muted rounded w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-20 md:py-28 ${bgColor}`}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between mb-14 ${reverse ? 'md:flex-row-reverse' : ''}`}>
          <div className={reverse ? 'md:text-right' : ''}>
            <span className="eyebrow text-muted-foreground/70 mb-4 block">{subtitle}</span>
            <h2 className="text-foreground">{title}</h2>
          </div>
          <Link
            to={`/products/${category}`}
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors mt-6 md:mt-0 group"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </Link>
        </div>

        {/* Products Grid - Lookbook Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {displayProducts.map((product, index) => (
            <ProductCardPremium
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image_url}
              price={product.price ? Number(product.price) : null}
              category={product.category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductSectionsPremium = () => {
  return (
    <>
      {/* Home Entertainment Section */}
      <CategorySection
        title="Home Entertainment"
        subtitle="Audio Excellence"
        category="tower-speakers"
        bgColor="bg-white"
      />

      {/* Brand Story Interlude */}
      <section className="py-24 md:py-32 bg-[#f8f6f3]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow text-muted-foreground/70 mb-6 block">Our Philosophy</span>
            <h2 className="text-foreground mb-8">
              Technology That 
              <span className="italic font-normal"> Understands</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              For over two decades, we've been crafting electronics that blend seamlessly 
              into Indian homes. No unnecessary complexity. Just reliable, thoughtful design 
              that enhances everyday life.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-colors"
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* DTH Receivers Section */}
      <CategorySection
        title="Smart Reception"
        subtitle="DTH Technology"
        category="dth-receivers"
        reverse={true}
        bgColor="bg-white"
      />

      {/* Full-Width Feature Image */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40 z-10" />
        <img
          src={`${import.meta.env.BASE_URL}bd2.png`}
          alt="Unitech Lifestyle"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-xl text-white">
              <span className="text-xs tracking-[0.2em] uppercase opacity-70 mb-4 block">
                Designed in India
              </span>
              <h2 className="text-white mb-6">
                Crafted for
                <br />
                <span className="italic font-normal">Every Home</span>
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                From metropolitan apartments to rural households, 
                our products are designed to perform flawlessly across India.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center gap-3 bg-white text-foreground px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-all duration-300"
              >
                Shop All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Amplifiers Section */}
      <CategorySection
        title="Power & Precision"
        subtitle="Audio Amplifiers"
        category="audio-amplifiers"
        bgColor="bg-white"
      />

      {/* Trust Section */}
      <section className="py-20 md:py-28 bg-[#f8f6f3] border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="eyebrow text-muted-foreground/70 mb-4 block">Why Unitech</span>
            <h2 className="text-foreground">Built on Trust</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 max-w-5xl mx-auto">
            <div className="text-center">
              <span className="block text-5xl md:text-6xl font-light text-foreground mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                25+
              </span>
              <span className="eyebrow text-muted-foreground">Years of Excellence</span>
            </div>
            <div className="text-center">
              <span className="block text-5xl md:text-6xl font-light text-foreground mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                1M+
              </span>
              <span className="eyebrow text-muted-foreground">Happy Customers</span>
            </div>
            <div className="text-center">
              <span className="block text-5xl md:text-6xl font-light text-foreground mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                100%
              </span>
              <span className="eyebrow text-muted-foreground">Quality Assured</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSectionsPremium;
