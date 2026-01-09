import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ProductSection from "@/components/ProductSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PromoBanner from "@/components/PromoBanner";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <ProductSection />
        <WhyChooseUs />
        <PromoBanner />
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
