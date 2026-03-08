import { motion } from "framer-motion";
import { BookOpen, Brain, Users, ShieldCheck } from "lucide-react";

const pillars = [
  { icon: BookOpen, label: "Education", desc: "Evidence-based knowledge sharing and workshops", gradient: "from-primary to-soft-green" },
  { icon: Brain, label: "Meditation", desc: "Emotional regulation tools and mindfulness practices", gradient: "from-sky-blue to-primary" },
  { icon: Users, label: "Community", desc: "Building global connections for collective healing", gradient: "from-soft-green to-sky-blue" },
  { icon: ShieldCheck, label: "Prevention", desc: "Trauma awareness, resilience, and prevention strategies", gradient: "from-deep-green to-primary" },
];

const SolutionSection = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-sky">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Solution
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            The International Day of Calm Summit brings together diverse disciplines — education,
            emotional regulation, trauma healing, and prevention — into one powerful, unified
            experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-14">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-card rounded-2xl p-8 text-center shadow-calm hover:shadow-calm-lg hover:-translate-y-1 transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform shadow-calm`}>
                <p.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-card-foreground mb-2">
                {p.label}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#register"
            className="inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground font-body font-bold text-lg hover:scale-105 transition-transform shadow-calm-lg"
          >
            Register for the Summit
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
