import { useState } from "react";
import { motion } from "framer-motion";
import { Mic2, Star } from "lucide-react";
import { speakers, type Speaker } from "@/data/speakers";
import SpeakerBioDialog from "@/components/SpeakerBioDialog";

const SpeakersSection = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const hosts = speakers.filter((s) => s.isHost);
  const regularSpeakers = speakers.filter((s) => !s.isHost);

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
              className="relative bg-card rounded-3xl p-8 shadow-calm-lg border border-primary/10 text-center cursor-pointer hover:shadow-calm-lg transition-all hover:-translate-y-1"
              onClick={() => setSelectedSpeaker(s)}
            >
              <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary font-body text-xs font-bold uppercase tracking-wider">
                <Star className="w-3 h-3" /> Host
              </div>
              <div
                className={`w-24 h-24 rounded-full ${s.photo ? '' : `bg-gradient-to-br ${s.gradient}`} flex items-center justify-center mx-auto mb-5 shadow-calm overflow-hidden`}
              >
                {s.photo ? (
                  <img src={s.photo} alt={s.name} className="w-full h-full object-cover" style={{ objectPosition: s.photoPosition === 'zoom' ? 'center 15%' : s.photoPosition === 'zoomout' ? 'center 30%' : 'center top', transform: s.photoPosition === 'zoom' ? 'scale(1.5)' : s.photoPosition === 'zoomout' ? 'scale(0.75)' : undefined }} />
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
              {s.location && (
                <p className="font-body text-xs text-muted-foreground/70 mt-0.5">📍 {s.location}</p>
              )}
              <p className="font-body text-sm font-semibold text-primary mt-3 italic">
                "{s.topic}"
              </p>
              <p className="font-body text-xs text-primary/60 mt-2 underline">View Bio</p>
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
              className="bg-card rounded-2xl p-6 shadow-calm hover:shadow-calm-lg transition-all hover:-translate-y-1 group cursor-pointer"
              onClick={() => setSelectedSpeaker(s)}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 rounded-full ${s.photo ? '' : `bg-gradient-to-br ${s.gradient}`} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform overflow-hidden`}
                >
                  {s.photo ? (
                    <img src={s.photo} alt={s.name} className="w-full h-full object-cover" style={{ objectPosition: s.photoPosition === 'zoom' ? 'center 15%' : s.photoPosition === 'zoomout' ? 'center 30%' : 'center top', transform: s.photoPosition === 'zoom' ? 'scale(1.5)' : s.photoPosition === 'zoomout' ? 'scale(0.75)' : undefined }} />
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
                  {s.location && (
                    <p className="font-body text-[11px] text-muted-foreground/70">📍 {s.location}</p>
                  )}
                  <p className="font-body text-xs font-medium text-primary mt-2 leading-snug">
                    {s.topic}
                  </p>
                  <p className="font-body text-[11px] text-primary/60 mt-1 underline">View Bio</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <SpeakerBioDialog
        speaker={selectedSpeaker}
        open={!!selectedSpeaker}
        onOpenChange={(open) => !open && setSelectedSpeaker(null)}
      />
    </section>
  );
};

export default SpeakersSection;
