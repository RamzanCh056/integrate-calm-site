import { motion } from "framer-motion";
import { DollarSign, Mail, Radio } from "lucide-react";

const steps = [
  {
    icon: DollarSign,
    title: "Donate $20 or more",
    description: "Choose your contribution amount and support the movement.",
    color: "bg-primary",
  },
  {
    icon: Mail,
    title: "Receive confirmation",
    description: "Get an email with your message submission link.",
    color: "bg-sky-blue",
  },
  {
    icon: Radio,
    title: "Featured on livestream",
    description: "Selected community voices are shared during the global broadcast.",
    color: "bg-soft-green",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Three simple steps to make your voice heard on the global stage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary/20 via-sky-blue/20 to-soft-green/20" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center relative bg-card rounded-3xl p-8 shadow-calm hover:shadow-calm-lg hover:-translate-y-1 transition-all"
            >
              <div className="relative mx-auto mb-6 w-fit">
                <div
                  className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center shadow-calm`}
                >
                  <step.icon className="w-9 h-9 text-primary-foreground" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-card border-2 border-border flex items-center justify-center font-body text-xs font-bold text-foreground shadow-sm">
                  {i + 1}
                </span>
              </div>
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
