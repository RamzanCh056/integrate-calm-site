import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { CalendarDays, Globe, Sparkles, Users, Clock, ArrowDown } from "lucide-react";

const targetDate = new Date("2026-04-03T00:00:00Z");

const getTimeLeft = () => {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

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
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center pt-20 pb-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/15 mb-6"
        >
          <Sparkles className="w-4 h-4 text-primary-foreground/80" />
          <span className="font-body text-sm tracking-wide text-primary-foreground/90">
            100% Free — Register Now & Join Live
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.08] max-w-5xl mx-auto mb-5"
        >
          Free Live Global Summit:{" "}
          <span className="italic">Discover Real Calm</span> in Just Days
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          Practical tools for less stress, reactivity & overwhelm — from 20+ world-class speakers.
          <br className="hidden md:block" />
          <span className="font-semibold">Join live online via YouTube & Facebook.</span>
        </motion.p>

        {/* Date & Format */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4 text-primary-foreground/85 font-body text-base font-medium mb-6"
        >
          <span className="flex items-center gap-1.5">
            <CalendarDays className="w-4 h-4" />
            April 3–6, 2026
          </span>
          <span className="w-1 h-1 rounded-full bg-primary-foreground/30" />
          <span className="flex items-center gap-1.5">
            <Globe className="w-4 h-4" />
            Global Online Event
          </span>
          <span className="w-1 h-1 rounded-full bg-primary-foreground/30" />
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            Live Only — No Recordings
          </span>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          {[
            { val: timeLeft.days, label: "Days" },
            { val: timeLeft.hours, label: "Hours" },
            { val: timeLeft.minutes, label: "Min" },
            { val: timeLeft.seconds, label: "Sec" },
          ].map((t, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-display text-3xl md:text-4xl font-bold text-primary-foreground bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-4 py-2 min-w-[60px] border border-primary-foreground/15">
                {String(t.val).padStart(2, "0")}
              </span>
              <span className="font-body text-xs text-primary-foreground/60 mt-1">{t.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col items-center gap-3"
        >
          <a
            href="#register-form"
            className="group px-12 py-5 rounded-full bg-primary-foreground text-deep-green font-body font-bold text-xl hover:scale-105 transition-all shadow-calm-lg hover:shadow-2xl"
          >
            Register Free Now
          </a>
          <span className="font-body text-sm text-primary-foreground/60">
            ↓ Scroll down to register in 30 seconds — it's completely free
          </span>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
