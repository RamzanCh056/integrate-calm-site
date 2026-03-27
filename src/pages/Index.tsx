import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import RegistrationForm from "@/components/RegistrationForm";
import WhatYoullLearn from "@/components/WhatYoullLearn";
import SpeakersSection from "@/components/SpeakersSection";
import HowItWorks from "@/components/HowItWorks";
import SolutionSection from "@/components/SolutionSection";
import JoinLivestream from "@/components/JoinLivestream";
import SchoolStory from "@/components/SchoolStory";
import DonateSection from "@/components/DonateSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <StickyHeader />
      <HeroSection />

      {/* Registration — immediately after hero */}
      <section id="register-form" className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Register <span className="text-gradient-calm">Free</span> — Join Live
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
              Secure your spot in 30 seconds. Completely free — instant confirmation with stream links.
            </p>
          </div>
          <RegistrationForm />
        </div>
      </section>

      {/* What You'll Learn — value proposition */}
      <WhatYoullLearn />

      <SolutionSection />

      {/* Speakers */}
      <SpeakersSection />

      
      <JoinLivestream />

      {/* Donation section — clearly separated and lower */}
      <div className="bg-secondary/20 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="font-body text-sm text-muted-foreground">
            Registration is <span className="font-bold text-foreground">completely free</span>. If you feel moved to help us rebuild a school in Uganda, <span className="font-bold text-foreground">this is why your donation matters</span> — every contribution brings hope to children who walk miles for education.
          </p>
        </div>
      </div>
      <SchoolStory />
      <DonateSection />

      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
