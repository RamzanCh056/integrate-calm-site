import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const FinalCTA = () => {
  return (
    <section id="sponsor" className="relative py-28 md:py-36 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto leading-tight"
        >
          Be Part of the{" "}
          <span className="italic">Calm</span> Movement
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-lg text-primary-foreground/80 max-w-xl mx-auto mb-12"
        >
          Together, we can build a calmer, more connected world. Choose how you'd
          like to participate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#register"
            className="px-8 py-4 rounded-full bg-primary-foreground text-deep-green font-body font-semibold text-lg hover:scale-105 transition-all shadow-calm-lg hover:shadow-2xl"
          >
            Register Now
          </a>
          <a
            href="#donate"
            className="px-8 py-4 rounded-full bg-donate text-donate-foreground font-body font-semibold text-lg hover:scale-105 transition-all shadow-calm-lg hover:shadow-2xl"
          >
            Donate &amp; Speak
          </a>
          <a
            href="#sponsor"
            className="px-8 py-4 rounded-full border-2 border-primary-foreground/50 text-primary-foreground font-body font-semibold text-lg hover:bg-primary-foreground/10 transition-colors backdrop-blur-sm"
          >
            Sponsor the Summit
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
