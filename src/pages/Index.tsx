import HeaderPremium from "@/components/HeaderPremium";
import HeroPremium from "@/components/HeroPremium";
import ProductSectionsPremium from "@/components/ProductSectionsPremium";
import FooterPremium from "@/components/FooterPremium";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderPremium />
      <main>
        <HeroPremium />
        <ProductSectionsPremium />
      </main>
      <FooterPremium />
    </div>
  );
};

export default Index;
