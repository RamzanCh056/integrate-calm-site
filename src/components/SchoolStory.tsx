import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Heart, School, CloudRain, Wind, Footprints } from "lucide-react";

const images = [
  { src: "/images/school-outside.jpg", alt: "Outside view of the school building made of logs", caption: "Our school from the outside" },
  { src: "/images/school-inside-1.jpg", alt: "Inside the classroom with light coming through wall gaps", caption: "Light and rain seep through the walls" },
  { src: "/images/school-inside-2.jpg", alt: "Classroom interior with learning materials on fragile walls", caption: "Learners' work blown away when it rains" },
];

const challenges = [
  { icon: CloudRain, text: "When it rains, the classroom feels like being outside" },
  { icon: Wind, text: "Wind blows off the learners' work every time it storms" },
  { icon: Footprints, text: "Children walk 7–8 km barefoot just to reach school" },
  { icon: School, text: "Children deserve a safe, dry space to learn and grow" },
];

const SchoolStory = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-donate/10 text-donate font-body text-sm font-semibold mb-4">
            <School className="w-4 h-4" />
            Why Your Donation Matters
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Help Us <span className="text-gradient-calm">Rebuild This School</span> in Uganda
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            These children walk 7–8 kilometres barefoot every day just to reach a school that can barely protect them from rain and wind. Your donation will help us build a safe, proper school where they can learn without fear.
          </p>
        </motion.div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-14">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden shadow-calm-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-4 right-4 font-body text-sm text-white font-medium">
                {img.caption}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Video - auto plays on scroll */}
        <AutoPlayVideo />

        {/* Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {challenges.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-card shadow-calm border border-primary/5 hover:shadow-calm-lg hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-donate/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-donate" />
                </div>
                <p className="font-body text-sm text-card-foreground font-medium">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#donate"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-donate text-donate-foreground font-body font-bold text-base hover:scale-105 transition-transform shadow-calm-lg"
          >
            <Heart className="w-5 h-5" />
            Donate to Rebuild the School
          </a>
        </div>
      </div>
    </section>
  );
};

export default SchoolStory;
