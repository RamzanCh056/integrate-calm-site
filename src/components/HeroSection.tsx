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
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[8%] w-48 h-48 rounded-full bg-sky-blue/8 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-[12%] w-56 h-56 rounded-full bg-soft-green/8 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/15 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary-foreground/80" />
          <span className="font-body text-sm tracking-wide text-primary-foreground/90">
            An Integrated Path to Calm
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary-foreground leading-[1.08] max-w-5xl mx-auto mb-8"
        >
          This World Needs More{" "}
          <span className="italic">Calm</span> — And It Starts With You
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="font-body text-2xl md:text-3xl text-primary-foreground max-w-2xl mx-auto mb-4 font-medium leading-relaxed"
        >
          Join the International Day of Calm Summit
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-4 text-primary-foreground/85 font-body text-lg font-medium mb-4"
        >
          <span className="flex items-center gap-1.5">
            <CalendarDays className="w-4 h-4" />
            April 3–6, 2026
          </span>
          <span className="w-1 h-1 rounded-full bg-primary-foreground/30" />
          <span className="flex items-center gap-1.5">
            <Globe className="w-4 h-4" />
            Global Hybrid Event
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="font-display text-xl md:text-2xl italic text-primary-foreground/65 mb-14"
        >
          Different disciplines. One goal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#register-form"
            className="group px-10 py-4 rounded-full bg-primary-foreground text-deep-green font-body font-bold text-lg hover:scale-105 transition-all shadow-calm-lg hover:shadow-2xl"
          >
            Register Now
          </a>
          <a
            href="#donate"
            className="px-10 py-4 rounded-full bg-donate text-donate-foreground font-body font-bold text-lg hover:scale-105 transition-all shadow-calm-lg hover:shadow-2xl"
          >
            Donate & Share Your Voice
          </a>
          <a
            href="#sponsor"
            className="px-10 py-4 rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-body font-semibold text-lg hover:bg-primary-foreground/10 transition-colors backdrop-blur-sm"
          >
            Become a Sponsor
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
