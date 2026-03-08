import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import RegistrationForm from "@/components/RegistrationForm";
import DonateSection from "@/components/DonateSection";
import DonationProgress from "@/components/DonationProgress";
import SchoolStory from "@/components/SchoolStory";
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

      {/* Registration */}
      <section id="register-form" className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Join the <span className="text-gradient-calm">Movement</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
              Register for the International Day of Calm Summit — free and open to all.
            </p>
          </div>
          <RegistrationForm />
        </div>
      </section>

      <SchoolStory />
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
