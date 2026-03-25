import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const FinalCTA = () => {
  return (
    <section id="sponsor" className="relative py-32 md:py-40 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight">
          Don't Miss It — Register{" "}
          <span className="italic">Free</span> Today
        </h2>

        <p className="font-body text-lg text-primary-foreground/80 max-w-xl mx-auto mb-14 leading-relaxed">
          Live only — no recordings. Join thousands registering for the free global calm summit.
          <br />
          April 3–6, 2026 — your moment of calm is waiting.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#register"
            className="px-10 py-4 rounded-full bg-primary-foreground text-deep-green font-body font-bold text-lg hover:scale-105 transition-all shadow-calm-lg hover:shadow-2xl"
          >
            Register Now
          </a>
          <a
            href="#donate"
            className="px-10 py-4 rounded-full bg-donate text-donate-foreground font-body font-bold text-lg hover:scale-105 transition-all shadow-calm-lg hover:shadow-2xl"
          >
            Donate & Speak
          </a>
          <Link
            to="/sponsor-kit"
            className="px-10 py-4 rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-body font-bold text-lg hover:bg-primary-foreground/10 transition-colors backdrop-blur-sm"
          >
            Sponsor the Summit
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
