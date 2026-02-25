import { motion } from "framer-motion";
import { DollarSign, Mail, Radio } from "lucide-react";

const steps = [
  {
    icon: DollarSign,
    title: "Donate $20 or more",
    description: "Choose your contribution amount and support the movement.",
  },
  {
    icon: Mail,
    title: "Receive confirmation",
    description: "Get an email with your message submission link.",
  },
  {
    icon: Radio,
    title: "Featured on livestream",
    description: "Selected community voices are shared during the global broadcast.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-20"
        >
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center relative"
            >
              <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6 relative z-10 shadow-calm">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                Step {i + 1}
              </span>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
