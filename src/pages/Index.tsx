import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import DonateSection from "@/components/DonateSection";
import DonationProgress from "@/components/DonationProgress";
import HowItWorks from "@/components/HowItWorks";
import SolutionSection from "@/components/SolutionSection";
import SpeakersSection from "@/components/SpeakersSection";
import JoinLivestream from "@/components/JoinLivestream";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyHeader />
      <HeroSection />
      <DonateSection />
      <DonationProgress />
      <HowItWorks />
      <SolutionSection />
      <SpeakersSection />
      <JoinLivestream />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
