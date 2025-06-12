import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ComponentsSection from "@/components/ComponentsSection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ComponentsSection />
      <Footer />
    </div>
  );
}
