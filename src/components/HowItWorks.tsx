import { motion } from "framer-motion";
import { DollarSign, Mail, Radio, ArrowRight } from "lucide-react";

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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold text-center text-foreground mb-20"
        >
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto relative">
          {/* Connector arrows */}
          <div className="hidden md:flex absolute top-14 left-[33%] w-[34%] items-center justify-center">
            <ArrowRight className="w-6 h-6 text-border" />
          </div>
          <div className="hidden md:flex absolute top-14 right-[10%] w-[10%] items-center justify-center">
            <ArrowRight className="w-6 h-6 text-border" />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center relative bg-card rounded-3xl p-8 shadow-calm hover:shadow-calm-lg transition-shadow"
            >
              <div className="relative mx-auto mb-6 w-fit">
                <div
                  className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center shadow-calm rotate-3 hover:rotate-0 transition-transform`}
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
