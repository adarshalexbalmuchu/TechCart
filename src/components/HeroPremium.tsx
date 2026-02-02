import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroPremium = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center bg-gradient-to-b from-[#f8f6f3] to-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f0ebe4] to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Eyebrow */}
            <span className="eyebrow text-foreground/50 mb-6 block">
              Established 1999
            </span>
            
            {/* Main Headline */}
            <h1 className="text-foreground mb-8">
              Reliable Technology
              <br />
              <span className="italic font-normal">for Everyday Living</span>
            </h1>
            
            {/* Subtext */}
            <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed">
              Smart electronics designed for Indian homes. 
              Crafted with precision, built to last.
            </p>
            
            {/* CTA Button */}
            <Link
              to="/products"
              className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-foreground/90 transition-all duration-300 group"
            >
              Explore Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={1.5} />
            </Link>
          </div>

          {/* Right: Hero Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] max-w-lg mx-auto">
              {/* Main Product Image Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#e8e3db] to-[#f5f2ed] rounded-sm overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}bd1.png`}
                  alt="Unitech Premium Audio"
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 md:-left-10 bg-white px-6 py-5 shadow-xl">
                <span className="block text-xs tracking-widest uppercase text-muted-foreground mb-1">
                  5% Guaranteed
                </span>
                <span className="block text-sm tracking-wide text-foreground">
                  Cashback & More
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground/30 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroPremium;
