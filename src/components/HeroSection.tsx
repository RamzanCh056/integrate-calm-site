import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="register"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative z-10 container mx-auto px-6 text-center py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/80 mb-6"
        >
          An Integrated Path to Calm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto mb-6"
        >
          This World Needs More Calm — And It Starts With You
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-2"
        >
          Join the International Day of Calm Summit
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="font-body text-base text-primary-foreground/70 mb-10"
        >
          April 3–6, 2026 &nbsp;|&nbsp; Global Hybrid Event
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="font-body text-sm italic text-primary-foreground/60 mb-10"
        >
          Different disciplines. One goal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#register"
            className="px-8 py-4 rounded-full bg-primary-foreground text-deep-green font-body font-semibold text-lg hover:scale-105 transition-transform shadow-calm-lg"
          >
            Register Now
          </a>
          <a
            href="#donate"
            className="px-8 py-4 rounded-full bg-donate text-donate-foreground font-body font-semibold text-lg hover:scale-105 transition-transform shadow-calm-lg"
          >
            Donate &amp; Share Your Voice
          </a>
          <a
            href="#sponsor"
            className="px-8 py-4 rounded-full border-2 border-primary-foreground/60 text-primary-foreground font-body font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
          >
            Become a Sponsor
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
