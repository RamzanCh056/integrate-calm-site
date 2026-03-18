import { motion } from "framer-motion";
import { Download, Mic, BookOpen, Globe, Heart, Mail, Phone, ArrowLeft, Users, Brain, MessageCircle, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const interviewTopics = [
  { icon: Globe, text: "The global movement for humanity and why calm is foundational to long-term societal change" },
  { icon: Heart, text: "The impact of stress on children and families" },
  { icon: Shield, text: "How calm is transformative, not weak" },
  { icon: Users, text: "Breaking cycles of yelling and reactive parenting" },
  { icon: Brain, text: "The science of stress and nervous system regulation" },
  { icon: MessageCircle, text: "Global perspectives on building calmer families and communities" },
];

const stats = [
  { value: "75%", label: "of all doctor visits in the US are stress-related", source: "US Center for Disease Control & Prevention" },
  { value: "1B", label: "children aged 2–17 worldwide experienced violence in the past year", source: "World Health Organization" },
  { value: "4 min", label: "— every 4 minutes a child dies due to violence somewhere in the world", source: "UNICEF" },
  { value: "48%", label: "of parents feel overwhelmed by stress most days", source: "U.S. Surgeon General Advisory" },
];

const interviewGuests = [
  { name: "Celia Kibler", role: "Founder, Day of Calm Foundation", image: "/images/speakers/celia-kibler.jpg" },
  { name: "Dr. Matthew Johnson", role: "Director, Science & Technology", image: "/images/speakers/scott-lawry.png" },
  { name: "Greg Edwards", role: "Summit Co-Host & Comedian", image: "/images/speakers/greg-edwards.jpg" },
  { name: "Dr. Kailey Buller", role: "ER & Labor & Delivery Physician", image: "/images/speakers/kailey-buller.jpg" },
];

const MediaKit = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-calm">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary-foreground/20 blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-primary-foreground/10 blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-8 font-body text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/15 text-primary-foreground font-body text-sm font-medium mb-6 backdrop-blur-sm">
              Press & Media Resources
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Media Kit
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl">
              Everything journalists, podcasters, and media outlets need to cover the International Day of Calm Summit — April 3–6, 2026.
            </p>
            <a
              href="/documents/IDOCMediaKit.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary-foreground text-deep-green font-body font-bold text-lg hover:scale-105 transition-all shadow-calm-lg"
            >
              <Download className="w-5 h-5" />
              Download Full Media Kit (PDF)
            </a>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              About the <span className="text-gradient-calm">Initiative</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              The International Day of Calm and the International Day of Calm Global Summit were created in response to a growing global challenge: rising stress affecting individuals, families, communities, and society as a whole.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
              Hosted by the Day of Calm Foundation, this initiative brings together experts in healing, parenting, medicine, education, and wellness to share practical tools that support calmer individuals, stronger relationships, and more connected communities.
            </p>
            <blockquote className="relative px-8 py-6 rounded-2xl bg-secondary/50 border border-border">
              <p className="font-display text-xl md:text-2xl italic text-foreground">
                "Calm is not weakness, calm is leadership."
              </p>
              <cite className="font-body text-sm text-muted-foreground mt-3 block not-italic">— Celia Kibler, Founder</cite>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Stress Crisis Stats */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Stress <span className="text-gradient-calm">Crisis</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
              The time for calm is not someday — it is now.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 rounded-2xl bg-card border border-border shadow-calm group hover:shadow-calm-lg transition-all"
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-gradient-calm mb-3">{stat.value}</p>
                <p className="font-body text-sm text-foreground leading-relaxed mb-3">{stat.label}</p>
                <p className="font-body text-xs text-muted-foreground italic">~ {stat.source}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Topics */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-body text-sm font-medium mb-4">
              <Mic className="w-4 h-4" /> Available for Interviews
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Suggested Interview <span className="text-gradient-calm">Topics</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {interviewTopics.map((topic, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:shadow-calm transition-all"
              >
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                  <topic.icon className="w-5 h-5" />
                </div>
                <p className="font-body text-sm text-foreground leading-relaxed">{topic.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Guests */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured <span className="text-gradient-calm">Experts</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
              Our experts are available for interviews with journalists, podcasts, and media outlets.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {interviewGuests.map((guest, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-card border border-border shadow-calm hover:shadow-calm-lg transition-all"
              >
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-3 border-primary/20">
                  <img src={guest.image} alt={guest.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{guest.name}</h3>
                <p className="font-body text-sm text-muted-foreground">{guest.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details & Press Contact */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div {...fadeUp} className="p-8 rounded-2xl bg-card border border-border shadow-calm">
              <BookOpen className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Event Details</h3>
              <div className="space-y-3 font-body text-sm text-muted-foreground">
                <p><span className="font-semibold text-foreground">Summit:</span> April 3–6, 2026</p>
                <p><span className="font-semibold text-foreground">International Day of Calm:</span> April 5, 2026</p>
                <p><span className="font-semibold text-foreground">Location:</span> Global Livestream on YouTube & Facebook</p>
                <p><span className="font-semibold text-foreground">Hosted By:</span> Day of Calm Foundation (US 501(c)(3))</p>
                <p><span className="font-semibold text-foreground">Founder:</span> Celia Kibler</p>
                <p><span className="font-semibold text-foreground">Science Director:</span> Dr. Matthew Johnson</p>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="p-8 rounded-2xl bg-gradient-calm text-primary-foreground shadow-calm-lg">
              <Mail className="w-8 h-8 mb-4 opacity-80" />
              <h3 className="font-display text-2xl font-bold mb-4">Press Inquiries</h3>
              <p className="font-body text-sm opacity-80 mb-6">
                For media interviews, press releases, or additional information, contact us directly.
              </p>
              <div className="space-y-3 font-body text-sm">
                <p className="font-semibold text-lg">Celia Kibler</p>
                <a href="tel:+13019222164" className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
                  <Phone className="w-4 h-4" /> +1-301-922-2164
                </a>
                <a href="mailto:Celia@DayofCalm.org" className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
                  <Mail className="w-4 h-4" /> Celia@DayofCalm.org
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-primary-foreground/20 space-y-1 text-sm opacity-80">
                <p>DayofCalm.org</p>
                <p>CalmSummit.org</p>
                <p>SponsorCalm.org</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Share the <span className="text-gradient-calm">Story</span>?
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Download the complete media kit for high-resolution assets, talking points, and full event details.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/documents/IDOCMediaKit.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-bold text-lg hover:scale-105 transition-all shadow-calm-lg"
              >
                <Download className="w-5 h-5" />
                Download Media Kit
              </a>
              <Link
                to="/sponsor-kit"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-primary text-primary font-body font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all"
              >
                View Sponsor Kit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="font-body text-sm text-muted-foreground">
            © 2026 Day of Calm Foundation. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MediaKit;
