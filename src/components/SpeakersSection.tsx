import { motion } from "framer-motion";
import { Mic2 } from "lucide-react";

const speakers = [
  { name: "Dr. Amara Osei", role: "Neuroscientist & Calm Researcher", initials: "AO" },
  { name: "Kenji Watanabe", role: "Meditation & Mindfulness Teacher", initials: "KW" },
  { name: "Dr. Lena Morales", role: "Trauma-Informed Psychologist", initials: "LM" },
  { name: "Raj Patel", role: "Global Community Organizer", initials: "RP" },
  { name: "Sofia Andersen", role: "Educator & Youth Advocate", initials: "SA" },
  { name: "Dr. Elijah Brooks", role: "Prevention & Public Health", initials: "EB" },
];

const SpeakersSection = () => {
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
            Featured Speakers
          </h2>
          <div className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full bg-donate/10 text-donate font-body text-sm font-medium">
            <Mic2 className="w-4 h-4" />
            + Community Voices
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {speakers.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 text-center shadow-calm hover:shadow-calm-lg transition-shadow"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-calm flex items-center justify-center mx-auto mb-4">
                <span className="font-display text-xl font-bold text-primary-foreground">
                  {s.initials}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-card-foreground">
                {s.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground mt-1">{s.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
