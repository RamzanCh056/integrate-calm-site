import { motion } from "framer-motion";
import { Zap, Heart, Brain, Shield, Smile, Home, Sparkles, Users } from "lucide-react";

const highlights = [
  { icon: Brain, text: "Regulate emotions in chaos", speaker: "Drasko Raicevic" },
  { icon: Smile, text: "Laughter as medicine", speaker: "Greg Edwards" },
  { icon: Home, text: "Build calm homes for kids", speaker: "Czarina Pasculado" },
  { icon: Shield, text: "Break cycles of reactive behavior", speaker: "Minister Peace" },
  { icon: Heart, text: "Heal through understanding emotions", speaker: "Robert Vetter" },
  { icon: Zap, text: "Neutralize self-sabotage & reactive emotions", speaker: "Jennie Potter" },
];

const liveBenefits = [
  "Real-time community energy with thousands worldwide",
  "Live Q&A with speakers",
  "Global connection while it's happening",
  "Sessions streamed live — miss it and it's gone",
];

const WhatYoullLearn = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-body text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            In 4 Powerful Days You'll Learn
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Practical Tools for a <span className="text-gradient-calm">Calmer Life</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            20+ speakers sharing real-world strategies you can use immediately — not theory, not fluff.
          </p>
        </motion.div>

        {/* Session highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto mb-16">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 shadow-calm hover:shadow-calm-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <h.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-display text-base font-bold text-card-foreground mb-1">
                {h.text}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                with {h.speaker}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Live benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-card rounded-3xl p-8 shadow-calm-lg"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-destructive" />
            </div>
            <h3 className="font-display text-xl font-bold text-card-foreground">
              Why Watch Live?
            </h3>
          </div>
          <ul className="space-y-3">
            {liveBenefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3 font-body text-muted-foreground">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <a
              href="#register-form"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-body font-bold text-base hover:scale-[1.02] transition-transform shadow-calm-lg"
            >
              Register Free Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;
