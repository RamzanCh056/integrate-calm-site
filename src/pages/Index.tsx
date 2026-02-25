import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import DonateSection from "@/components/DonateSection";
import HowItWorks from "@/components/HowItWorks";
import SolutionSection from "@/components/SolutionSection";
import SpeakersSection from "@/components/SpeakersSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />
      <HeroSection />
      <DonateSection />
      <HowItWorks />
      <SolutionSection />
      <SpeakersSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
