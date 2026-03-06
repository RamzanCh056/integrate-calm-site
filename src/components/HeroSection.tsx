import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { CalendarDays, Globe, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="register"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] w-32 h-32 rounded-full bg-sky-blue/10 blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-[15%] w-40 h-40 rounded-full bg-soft-green/10 blur-2xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary-foreground/80" />
          <span className="font-body text-sm tracking-wide text-primary-foreground/90">
            An Integrated Path to Calm
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary-foreground leading-[1.1] max-w-5xl mx-auto mb-8"
        >
          This World Needs More{" "}
          <span className="italic">Calm</span> — And It Starts With You
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="font-body text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto mb-3 font-light"
        >
          Join the International Day of Calm Summit
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-4 text-primary-foreground/70 font-body text-base mb-4"
        >
          <span className="flex items-center gap-1.5">
            <CalendarDays className="w-4 h-4" />
            April 3–6, 2026
          </span>
          <span className="w-1 h-1 rounded-full bg-primary-foreground/40" />
          <span className="flex items-center gap-1.5">
            <Globe className="w-4 h-4" />
            Global Hybrid Event
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="font-display text-lg italic text-primary-foreground/50 mb-12"
        >
          Different disciplines. One goal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#register-form"
            className="group px-8 py-4 rounded-full bg-primary-foreground text-deep-green font-body font-semibold text-lg hover:scale-105 transition-all shadow-calm-lg hover:shadow-2xl"
          >
            Register Now
          </a>
          <a
            href="#donate"
            className="px-8 py-4 rounded-full bg-donate text-donate-foreground font-body font-semibold text-lg hover:scale-105 transition-all shadow-calm-lg hover:shadow-2xl"
          >
            Donate &amp; Share Your Voice
          </a>
          <a
            href="#sponsor"
            className="px-8 py-4 rounded-full border-2 border-primary-foreground/50 text-primary-foreground font-body font-semibold text-lg hover:bg-primary-foreground/10 transition-colors backdrop-blur-sm"
          >
            Become a Sponsor
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
