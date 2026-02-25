import { motion } from "framer-motion";
import { Mic2, Star } from "lucide-react";

interface Speaker {
  name: string;
  role: string;
  topic: string;
  initials: string;
  gradient: string;
  isHost?: boolean;
}

const speakers: Speaker[] = [
  {
    name: "Celia Kibler",
    role: "Founder, Day of Calm Foundation & BeABetterParent.com",
    topic: "Where CALM Lives & Gratitude: The Secret Ingredient",
    initials: "CK",
    gradient: "from-primary to-soft-green",
    isHost: true,
  },
  {
    name: "Greg Edwards",
    role: "Comedian & Storyteller",
    topic: "Laughter: The Best Medicine",
    initials: "GE",
    gradient: "from-sky-blue to-primary",
    isHost: true,
  },
  {
    name: "Maddi Cheers",
    role: "Storyteller & Wisdom Activist",
    topic: "Timeless Tales, Tranquil Hearts: Storytelling as a Path to Wisdom & Peace",
    initials: "MC",
    gradient: "from-soft-green to-sky-blue",
  },
  {
    name: "Ernalee Shannon",
    role: "ADHD Thrive Coach",
    topic: "Unleash Your Inner Happy",
    initials: "ES",
    gradient: "from-donate to-soft-green",
  },
  {
    name: "Minister Peace",
    role: "Child Health & Safety",
    topic: "Breaking the Cycle: Evidence Based Solutions to Prevent Violent Crime",
    initials: "MP",
    gradient: "from-primary to-deep-green",
  },
  {
    name: "Jennie Potter",
    role: "Best-Selling Author",
    topic: "Understanding Reactive Emotions",
    initials: "JP",
    gradient: "from-sky-blue to-soft-green",
  },
  {
    name: "Robert Vetter",
    role: "Healer & Anthropologist",
    topic: "The Roles Emotions Play in Healing",
    initials: "RV",
    gradient: "from-deep-green to-soft-green",
  },
  {
    name: "Drasko Raicevic",
    role: "Mindset Coach",
    topic: "The Source of Calm Is Not What You Think",
    initials: "DR",
    gradient: "from-soft-green to-primary",
  },
  {
    name: "Dr. Kailey Buller",
    role: "Board-Certified Labor & Delivery Physician",
    topic: "Tired or Hangry? Why Calm Can Feel Out of Reach",
    initials: "KB",
    gradient: "from-sky-blue to-primary",
  },
  {
    name: "Yaakov Andrew Cohen",
    role: "Executive Coach",
    topic: "Positive Roots. Unbreakable Future.",
    initials: "YC",
    gradient: "from-primary to-sky-blue",
  },
  {
    name: "Karyn Melko-Medeiros",
    role: "Manifestation Coach",
    topic: "Rich Girl Money: 5 Changes That Increase Money at Home",
    initials: "KM",
    gradient: "from-donate to-sky-blue",
  },
  {
    name: "C.L. King",
    role: "Best-Selling Author & Impact Motivator",
    topic: "F.A.T.H.E.R.H.O.O.D.",
    initials: "CK",
    gradient: "from-deep-green to-sky-blue",
  },
  {
    name: "Czarina Pasculado",
    role: "Childhood Trauma Specialist",
    topic: "Calm Isn't Quiet: Building a Home Where Kids Feel Safe",
    initials: "CP",
    gradient: "from-soft-green to-deep-green",
  },
  {
    name: "Harry Lopez",
    role: "Mindset Coach",
    topic: "Chanting Your Way to Calm",
    initials: "HL",
    gradient: "from-sky-blue to-deep-green",
  },
  {
    name: "Dr. Scott Lawry",
    role: "Family Medicine",
    topic: "Alternative Wellness for Age Management",
    initials: "SL",
    gradient: "from-primary to-soft-green",
  },
  {
    name: "Wendy Ologe",
    role: "Intentional Parents Academy",
    topic: "TBA",
    initials: "WO",
    gradient: "from-donate to-primary",
  },
  {
    name: "Janet Juricic",
    role: "Health Educator, RN",
    topic: "TBA",
    initials: "JJ",
    gradient: "from-soft-green to-sky-blue",
  },
];

const SpeakersSection = () => {
  const hosts = speakers.filter((s) => s.isHost);
  const regularSpeakers = speakers.filter((s) => !s.isHost);

  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Speakers
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            World-class educators, healers, coaches, and thought leaders — united by a shared vision of calm.
          </p>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-donate/10 text-donate font-body text-sm font-semibold">
            <Mic2 className="w-4 h-4" />
            + Community Voices Featured Live
          </div>
        </motion.div>

        {/* Hosts */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mt-14 mb-12">
          {hosts.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-card rounded-3xl p-8 shadow-calm-lg border border-primary/10 text-center"
            >
              <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary font-body text-xs font-bold uppercase tracking-wider">
                <Star className="w-3 h-3" /> Host
              </div>
              <div
                className={`w-24 h-24 rounded-full bg-gradient-to-br ${s.gradient} flex items-center justify-center mx-auto mb-5 shadow-calm`}
              >
                <span className="font-display text-2xl font-bold text-primary-foreground">
                  {s.initials}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-card-foreground">
                {s.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground mt-1">{s.role}</p>
              <p className="font-body text-sm font-semibold text-primary mt-3 italic">
                "{s.topic}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Regular speakers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {regularSpeakers.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-2xl p-6 shadow-calm hover:shadow-calm-lg transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${s.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                >
                  <span className="font-display text-base font-bold text-primary-foreground">
                    {s.initials}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-semibold text-card-foreground leading-tight">
                    {s.name}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">{s.role}</p>
                  <p className="font-body text-xs font-medium text-primary mt-2 leading-snug">
                    {s.topic}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
