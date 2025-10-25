import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MarketplaceFeatures from "@/components/MarketplaceFeatures";
import QualityMarketplace from "@/components/QualityMarketplace";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MarketplaceFeatures />
      <QualityMarketplace />
      <CTASection />
      <Footer />
    </div>
  );
}
