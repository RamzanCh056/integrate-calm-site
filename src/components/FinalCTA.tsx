import { motion } from "framer-motion";

const FinalCTA = () => {
  return (
    <section
      id="sponsor"
      className="py-24 md:py-32 bg-gradient-calm text-primary-foreground"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl mx-auto"
        >
          Be Part of the Calm Movement
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
            className="px-8 py-4 rounded-full bg-primary-foreground text-deep-green font-body font-semibold text-lg hover:scale-105 transition-transform shadow-calm-lg"
          >
            Register Now
          </a>
          <a
            href="#donate"
            className="px-8 py-4 rounded-full bg-donate text-donate-foreground font-body font-semibold text-lg hover:scale-105 transition-transform shadow-calm-lg"
          >
            Donate &amp; Speak
          </a>
          <a
            href="#sponsor"
            className="px-8 py-4 rounded-full border-2 border-primary-foreground/60 text-primary-foreground font-body font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
          >
            Sponsor the Summit
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
