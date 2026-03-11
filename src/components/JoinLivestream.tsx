import { motion } from "framer-motion";
import { Youtube, Facebook, Instagram, MonitorPlay, ExternalLink } from "lucide-react";

const platforms = [
  {
    name: "YouTube",
    icon: Youtube,
    description: "Watch the livestream on YouTube",
    buttonText: "Watch on YouTube",
    href: "https://www.youtube.com/@beabetterparentdotcom",
    gradient: "from-destructive to-donate",
  },
  {
    name: "Facebook",
    icon: Facebook,
    description: "Stream live on Facebook",
    buttonText: "Watch on Facebook",
    href: "https://www.facebook.com/share/18KHYGWdZ4/?mibextid=wwXIfr",
    gradient: "from-sky-blue to-deep-green",
  },
];

const socials = [
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@beabetterparentdotcom" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/share/18KHYGWdZ4/?mibextid=wwXIfr" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/dayofcalm?igsh=MWZwcXl4N2trZWR4dw==" },
];

const JoinLivestream = () => {
  return (
    <section id="livestream" className="py-24 md:py-32 bg-gradient-sky">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary font-body text-sm font-semibold mb-5">
            <MonitorPlay className="w-4 h-4" />
            Live &amp; On-Demand
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Join the <span className="italic">Livestream</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Tune in from anywhere in the world. Choose your preferred platform to watch live or catch the replay.
          </p>
        </motion.div>

        {/* Platform cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
          {platforms.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-card rounded-3xl p-8 shadow-calm hover:shadow-calm-lg transition-all hover:-translate-y-1 text-center"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform shadow-calm`}
              >
                <p.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">
                {p.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-5">
                {p.description}
              </p>
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold group-hover:scale-105 transition-transform">
                {p.buttonText}
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </motion.a>
          ))}
        </div>

        {/* Social follow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-8 max-w-2xl mx-auto shadow-calm text-center"
        >
          <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">
            Follow Us &amp; Stay Updated
          </h3>
          <p className="font-body text-sm text-muted-foreground mb-6">
            Get reminders, behind-the-scenes content, and join the conversation.
          </p>
          <div className="flex items-center justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <s.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinLivestream;
