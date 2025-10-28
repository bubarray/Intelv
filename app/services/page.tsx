import Navigation from "@/components/Navigation";
import ServicesHead from "@/components/servicesComp/servicesHeader";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ServicesHead />
      <Footer />
    </div>
  );
}
