import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mic2, Star, Heart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Speaker {
  name: string;
  role: string;
  topic: string;
  initials: string;
  gradient: string;
  isHost?: boolean;
  photo?: string;
  photoPosition?: string;
}

const speakers: Speaker[] = [
  {
    name: "Celia Kibler",
    role: "HOST, Founder, Day of Calm Foundation & BeABetterParent.com, Awarded Author",
    topic: "Opening Session: Where CALM Lives & Closing Session: Gratitude: The Secret Ingredient",
    initials: "CK",
    gradient: "from-primary to-soft-green",
    isHost: true,
    photo: "/images/speakers/celia-kibler.jpg",
  },
  {
    name: "Greg Edwards",
    role: "HOST, Comedian & Storyteller",
    topic: "Laughter: The Best Medicine",
    initials: "GE",
    gradient: "from-sky-blue to-primary",
    isHost: true,
    photo: "/images/speakers/greg-edwards.png",
    photoPosition: "zoomout",
  },
  {
    name: "Dr. Scott Lawry",
    role: "Family Medicine",
    topic: "Aging Gracefully and Staying Calm Under Fire",
    initials: "SL",
    gradient: "from-primary to-soft-green",
    photo: "/images/speakers/scott-lawry.png",
  },
  {
    name: "Bernetta Cannon",
    role: "Registered Nurse, FNMU Visiting Faculty",
    topic: "What Is Calm & How to Get It",
    initials: "BC",
    gradient: "from-soft-green to-sky-blue",
    photo: "/images/speakers/bernetta-cannon.png",
  },
  {
    name: "Robert Vetter",
    role: "Healer & Anthropologist",
    topic: "The Roles Emotions Play in Healing",
    initials: "RV",
    gradient: "from-deep-green to-soft-green",
    photo: "/images/speakers/robert-vetter.jpeg",
    photoPosition: "object-[center_20%]",
  },
  {
    name: "Wendy Ologe",
    role: "Intentional Parents Academy",
    topic: "TBA",
    initials: "WO",
    gradient: "from-donate to-primary",
    photo: "/images/speakers/wendy-ologe.png",
  },
  {
    name: "Maddi Cheers",
    role: "Storyteller & Wisdom Activist",
    topic: "The Peacemaker's Journey: Ancient Wisdom for Calm Amid Chaos",
    initials: "MC",
    gradient: "from-soft-green to-sky-blue",
    photo: "/images/speakers/maddi-cheers.jpg",
  },
  {
    name: "Minister Peace",
    role: "Child Health & Safety",
    topic: "Breaking the Cycle: Evidence Based Solutions to Prevent Violent Crime",
    initials: "MP",
    gradient: "from-primary to-deep-green",
    photo: "/images/speakers/minister-peace.png",
  },
  {
    name: "Drasko Raicevic",
    role: "Mindset Coach",
    topic: "The Source of Calm Is Not What You Think",
    initials: "DR",
    gradient: "from-soft-green to-primary",
    photo: "/images/speakers/drasko-raicevic.png",
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
    photo: "/images/speakers/karyn-melko.jpg",
    photoPosition: "zoom",
  },
  {
    name: "Czarina Pasculado",
    role: "Childhood Trauma Specialist",
    topic: "Calm Isn't Quiet: Building a Home Where Kids Feel Safe",
    initials: "CP",
    gradient: "from-soft-green to-deep-green",
  },
  {
    name: "Priti Irani",
    role: "Human Strengths Expert & Coach",
    topic: "TBA",
    initials: "PI",
    gradient: "from-primary to-donate",
    photo: "/images/speakers/priti-irani.jpg",
  },
  {
    name: "Ernalee Shannon",
    role: "ADHD Thrive Coach",
    topic: "Unleash Your Inner Happy",
    initials: "ES",
    gradient: "from-donate to-soft-green",
    photo: "/images/speakers/ernalee-shannon.png",
  },
  {
    name: "Jennie Potter",
    role: "Self-Sabotage Coach",
    topic: "Understanding Reactive Emotions",
    initials: "JP",
    gradient: "from-sky-blue to-soft-green",
    photo: "/images/speakers/jennie-potter.png",
    photoPosition: "zoom",
  },
  {
    name: "Dr. Kailey Buller",
    role: "Double Board-Certified ER; Labor/Delivery Physician",
    topic: "Tired or Hangry? Why Calm Can Feel Out of Reach",
    initials: "KB",
    gradient: "from-sky-blue to-primary",
  },
  {
    name: "Luke Mickelson",
    role: "Founder, Sleep in Heavenly Sleep",
    topic: "TBA",
    initials: "LM",
    gradient: "from-deep-green to-primary",
  },
  {
    name: "C.L. King",
    role: "Best-Selling Author & Impact Motivator",
    topic: "F.A.T.H.E.R.H.O.O.D.",
    initials: "CK",
    gradient: "from-deep-green to-sky-blue",
  },
  {
    name: "Harry Lopez",
    role: "Mindset Coach",
    topic: "Chanting Your Way to Calm",
    initials: "HL",
    gradient: "from-sky-blue to-deep-green",
    photo: "/images/speakers/harry-lopez.png",
  },
];

interface DonorSpeaker {
  name: string;
  amount: number;
}

const SpeakersSection = () => {
  const hosts = speakers.filter((s) => s.isHost);
  const regularSpeakers = speakers.filter((s) => !s.isHost);
  const [donorSpeakers, setDonorSpeakers] = useState<DonorSpeaker[]>([]);

  // Fetch $20+ donors to show in speakers section
  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const { data, error } = await supabase.functions.invoke("get-donations");
        if (error) throw error;
        if (data?.donors) {
          setDonorSpeakers(data.donors.filter((d: DonorSpeaker) => d.amount >= 20));
        }
      } catch (err) {
        console.error("Error fetching donor speakers:", err);
      }
    };
    fetchDonors();
    const interval = setInterval(fetchDonors, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="speakers" className="py-24 md:py-32 bg-background overflow-hidden">
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
                className={`w-24 h-24 rounded-full ${s.photo ? '' : `bg-gradient-to-br ${s.gradient}`} flex items-center justify-center mx-auto mb-5 shadow-calm overflow-hidden`}
              >
                {s.photo ? (
                  <img src={s.photo} alt={s.name} className="w-full h-full object-cover" style={{ objectPosition: s.photoPosition === 'zoom' ? 'center 15%' : s.photoPosition === 'zoomout' ? 'center 30%' : 'center top', transform: s.photoPosition === 'zoom' ? 'scale(1.5)' : s.photoPosition === 'zoomout' ? 'scale(0.85)' : undefined }} />
                ) : (
                  <span className="font-display text-2xl font-bold text-primary-foreground">
                    {s.initials}
                  </span>
                )}
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
                  className={`w-14 h-14 rounded-full ${s.photo ? '' : `bg-gradient-to-br ${s.gradient}`} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform overflow-hidden`}
                >
                  {s.photo ? (
                    <img src={s.photo} alt={s.name} className="w-full h-full object-cover" style={{ objectPosition: s.photoPosition === 'zoom' ? 'center 15%' : s.photoPosition === 'zoomout' ? 'center 30%' : 'center top', transform: s.photoPosition === 'zoom' ? 'scale(1.5)' : s.photoPosition === 'zoomout' ? 'scale(0.85)' : undefined }} />
                  ) : (
                    <span className="font-display text-base font-bold text-primary-foreground">
                      {s.initials}
                    </span>
                  )}
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

        {/* $20+ Donor Community Speakers */}
        {donorSpeakers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-donate/10 text-donate font-body text-sm font-semibold mb-4">
                <Heart className="w-4 h-4" />
                Community Voices — $20+ Donors
              </div>
              <p className="font-body text-muted-foreground">
                These generous supporters have earned their place on stage
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
              {donorSpeakers.map((donor, i) => (
                <motion.div
                  key={`${donor.name}-${i}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-card shadow-calm border border-donate/10 hover:shadow-calm-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-donate to-soft-green flex items-center justify-center shrink-0">
                    <span className="font-display text-[10px] font-bold text-primary-foreground">
                      {donor.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <span className="font-body text-sm font-medium text-card-foreground">
                    {donor.name}
                  </span>
                  <span className="font-body text-xs text-donate font-semibold">
                    ${donor.amount}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SpeakersSection;
