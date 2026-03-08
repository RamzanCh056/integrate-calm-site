import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const FinalCTA = () => {
  return (
    <section id="sponsor" className="relative py-32 md:py-40 overflow-hidden">
      <motion.div
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 8 }}
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
          className="font-body text-lg text-primary-foreground/80 max-w-xl mx-auto mb-14 leading-relaxed"
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
          <a
            href="#sponsor"
            className="px-10 py-4 rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-body font-bold text-lg hover:bg-primary-foreground/10 transition-colors backdrop-blur-sm"
          >
            Sponsor the Summit
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
