import StickyHeader from "@/components/StickyHeader";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

const Register = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <StickyHeader />
      <main className="flex-1 flex items-center justify-center py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Register <span className="text-gradient-calm">Free</span> — Join Live
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
              Secure your spot in 30 seconds. Completely free — instant confirmation with stream links.
            </p>
          </div>
          <RegistrationForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
