import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import bd1 from "/bd1.png";
import bd2 from "/bd2.png";
import bd3 from "/bd3.png";

const banners = [
  {
    id: 1,
    image: bd1,
    title: "Premium Audio Equipment",
    subtitle: "Tower Speakers & Home Theatre Systems",
    cta: "Browse Audio",
    link: "/products/tower-speakers"
  },
  {
    id: 2,
    image: bd2,
    title: "Free-to-Air DTH Receivers",
    subtitle: "Reliable entertainment solutions for your home",
    cta: "View DTH Products",
    link: "/products/dth-receivers"
  },
  {
    id: 3,
    image: bd3,
    title: "Professional Audio Solutions",
    subtitle: "Amplifiers, Car Audio & More",
    cta: "Explore All",
    link: "/products"
  }
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 8000); // Slower auto-rotation: 8 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="relative h-[280px] sm:h-[360px] lg:h-[440px]">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-95"
            }`}
          >
            {/* Background Image with light overlay */}
            <div className="absolute inset-0">
              <img 
                src={banner.image} 
                alt="UNITECH Banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Clean style */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white border border-gray-200 p-2.5 sm:p-3 rounded-xl text-gray-700 hover:text-primary transition-all hover:scale-105 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white border border-gray-200 p-2.5 sm:p-3 rounded-xl text-gray-700 hover:text-primary transition-all hover:scale-105 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
      </button>

      {/* Dots Indicator - Clean */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-primary w-10" 
                : "bg-gray-300 hover:bg-gray-400 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
