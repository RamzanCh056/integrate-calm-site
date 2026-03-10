import { motion } from "framer-motion";
import { Heart, School } from "lucide-react";

const images = [
  { src: "/images/school-condition.png", alt: "Current condition of school — logs with gaps, leaky roof, unsafe environment" },
  { src: "/images/school-rain.png", alt: "Rain pouring into the classroom — wind blows learners' work away" },
  { src: "/images/school-desks.png", alt: "Broken school desks that need constant repairs" },
  { src: "/images/school-kitchen.png", alt: "Unsafe school kitchen that needs rebuilding" },
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

        {/* Image Gallery — 2x2 grid, smaller */}
        <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto mb-14">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group relative rounded-xl overflow-hidden shadow-calm border border-border"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Video — no black bg, clean card style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-sm md:max-w-md mx-auto mb-14"
        >
          <div className="relative w-full rounded-xl overflow-hidden shadow-calm border border-border bg-card aspect-[9/16] max-h-[420px]">
            <video
              controls
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
              poster="/images/calm-logo-poster.jpg"
            >
              <source src="https://firebasestorage.googleapis.com/v0/b/askstella-5d3d5.appspot.com/o/VIDEO-2026-03-09-10-44-28.mp4?alt=media&token=fa355686-2b46-41c2-9fb7-ebd77be91db6" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="font-body text-sm text-muted-foreground text-center mt-3">
            A view from inside our school — see what our children endure daily
          </p>
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
