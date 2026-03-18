import { motion } from "framer-motion";
import { Download, Mic, BookOpen, Globe, Heart, Mail, Phone, ArrowLeft, Users, Brain, MessageCircle, Shield, Calendar, MapPin, Video, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

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
  { name: "Celia Kibler", role: "Founder, Day of Calm Foundation", image: "/images/speakers/celia-kibler.jpg", highlights: "40+ years working with parents & children, helped over 1 million parents worldwide" },
  { name: "Dr. Matthew Johnson", role: "Director, Science & Technology", image: "/images/speakers/scott-lawry.png", highlights: "Family Physician, Ecologist, Forest Medicine Specialist" },
  { name: "Greg Edwards", role: "Summit Co-Host & Comedian", image: "/images/speakers/greg-edwards.jpg", highlights: "Nationally known stand-up comedian bringing warmth & connection" },
  { name: "Dr. Kailey Buller", role: "ER & Labor & Delivery Physician", image: "/images/speakers/kailey-buller.jpg", highlights: "Double Board Certified, expert on sleep & calm" },
];

const countries = ["United States", "Canada", "India", "Philippines", "Nigeria"];

const MediaKit = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero with background image */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--deep-green)/0.85)] via-[hsl(var(--deep-green)/0.7)] to-[hsl(var(--primary)/0.8)]" />

        {/* Decorative floating orbs */}
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[15%] w-32 h-32 rounded-full bg-primary-foreground/5 blur-2xl"
        />
        <motion.div
          animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-[10%] w-48 h-48 rounded-full bg-primary-foreground/5 blur-2xl"
        />

        <div className="relative z-10 container mx-auto px-6 py-24">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-10 font-body text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/15 text-primary-foreground font-body text-sm font-medium mb-6 backdrop-blur-sm border border-primary-foreground/10">
                Press & Media Resources
              </span>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-[1.1]">
                Media Kit
              </h1>
              <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-lg">
                Everything journalists, podcasters, and media outlets need to cover the International Day of Calm Summit — April 3–6, 2026.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/documents/IDOCMediaKit.pdf"
                  download
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary-foreground text-deep-green font-body font-bold text-lg hover:scale-105 transition-all shadow-calm-lg"
                >
                  <Download className="w-5 h-5" />
                  Download Media Kit (PDF)
                </a>
                <Link
                  to="/sponsor-kit"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-body font-medium hover:bg-primary-foreground/10 transition-all backdrop-blur-sm"
                >
                  Sponsor Kit <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Quick facts card floating on right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="bg-primary-foreground/10 backdrop-blur-xl rounded-3xl p-8 border border-primary-foreground/15 shadow-2xl">
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-primary-foreground/10"><Calendar className="w-5 h-5 text-primary-foreground" /></div>
                    <div><p className="font-body text-xs text-primary-foreground/60">Date</p><p className="font-body text-sm font-semibold text-primary-foreground">April 3–6, 2026</p></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-primary-foreground/10"><MapPin className="w-5 h-5 text-primary-foreground" /></div>
                    <div><p className="font-body text-xs text-primary-foreground/60">Location</p><p className="font-body text-sm font-semibold text-primary-foreground">Global Livestream</p></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-primary-foreground/10"><Video className="w-5 h-5 text-primary-foreground" /></div>
                    <div><p className="font-body text-xs text-primary-foreground/60">Platform</p><p className="font-body text-sm font-semibold text-primary-foreground">YouTube & Facebook</p></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-primary-foreground/10"><Globe className="w-5 h-5 text-primary-foreground" /></div>
                    <div><p className="font-body text-xs text-primary-foreground/60">Reach</p><p className="font-body text-sm font-semibold text-primary-foreground">15+ Countries</p></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-primary-foreground/10"><Users className="w-5 h-5 text-primary-foreground" /></div>
                    <div><p className="font-body text-xs text-primary-foreground/60">Hosted By</p><p className="font-body text-sm font-semibold text-primary-foreground">Day of Calm Foundation</p></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction with images */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
            <motion.div {...fadeUp}>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-body text-xs font-medium mb-4 uppercase tracking-wider">About the Initiative</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Growing Global <span className="text-gradient-calm">Movement</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-5">
                The International Day of Calm and the International Day of Calm Global Summit were created in response to a growing global challenge: rising stress affecting individuals, families, communities, and society as a whole.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Hosted by the Day of Calm Foundation, this initiative brings together experts in healing, parenting, medicine, education, and wellness to share practical tools that support calmer individuals, stronger relationships, and more connected communities.
              </p>
              <blockquote className="relative pl-6 border-l-4 border-primary/40">
                <p className="font-display text-xl italic text-foreground">
                  "Calm is not weakness, calm is leadership."
                </p>
                <cite className="font-body text-sm text-muted-foreground mt-2 block not-italic">— Celia Kibler, Founder</cite>
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="/images/calm-logo-poster.jpg" alt="Day of Calm Summit" className="rounded-2xl shadow-calm-lg w-full h-48 object-cover" />
                  <img src="/images/school-inside-1.jpg" alt="School interior" className="rounded-2xl shadow-calm w-full h-32 object-cover" />
                </div>
                <div className="space-y-4 pt-8">
                  <img src="/images/school-outside.jpg" alt="School exterior" className="rounded-2xl shadow-calm w-full h-32 object-cover" />
                  <img src="/images/calm-poster-thumbnail.png" alt="Calm poster" className="rounded-2xl shadow-calm-lg w-full h-48 object-cover" />
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-primary/5" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stress Crisis Stats */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-calm opacity-[0.04]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive font-body text-xs font-medium mb-4 uppercase tracking-wider">Urgent Reality</span>
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
                className="relative p-6 rounded-2xl bg-card border border-border shadow-calm group hover:shadow-calm-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-calm opacity-60" />
                <p className="font-display text-4xl md:text-5xl font-bold text-gradient-calm mb-3">{stat.value}</p>
                <p className="font-body text-sm text-foreground leading-relaxed mb-3">{stat.label}</p>
                <p className="font-body text-xs text-muted-foreground italic">~ {stat.source}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Topics with side image */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-3">
              <motion.div {...fadeUp} className="mb-10">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-body text-sm font-medium mb-4">
                  <Mic className="w-4 h-4" /> Available for Interviews
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Suggested Interview <span className="text-gradient-calm">Topics</span>
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interviewTopics.map((topic, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:shadow-calm hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                      <topic.icon className="w-5 h-5" />
                    </div>
                    <p className="font-body text-sm text-foreground leading-relaxed">{topic.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 hidden lg:flex flex-col gap-4 justify-center"
            >
              <img src="/images/school-inside-2.jpg" alt="Summit community" className="rounded-2xl shadow-calm-lg w-full h-64 object-cover" />
              <div className="p-6 rounded-2xl bg-card border border-border shadow-calm">
                <p className="font-display text-lg italic text-foreground mb-2">"The path to a more peaceful world begins in the conversations we have at home."</p>
                <p className="font-body text-sm text-muted-foreground">— Celia Kibler</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Experts - Enhanced cards */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-body text-xs font-medium mb-4 uppercase tracking-wider">Meet the Team</span>
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center p-6 rounded-2xl bg-card border border-border shadow-calm hover:shadow-calm-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-calm opacity-10 group-hover:opacity-20 transition-opacity" />
                <div className="relative w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary/15 shadow-calm">
                  <img src={guest.image} alt={guest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{guest.name}</h3>
                <p className="font-body text-sm font-medium text-primary mb-2">{guest.role}</p>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">{guest.highlights}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeUp} className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent font-body text-xs font-medium mb-4 uppercase tracking-wider">Worldwide Impact</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                A Global <span className="text-gradient-calm">Initiative</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Together, these voices reflect a shared mission: helping individuals, families, and communities experience the power of calm.
              </p>
            </motion.div>

            <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-3 mb-10">
              {countries.map((country, i) => (
                <motion.span
                  key={country}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="px-5 py-2.5 rounded-full bg-card border border-border font-body text-sm font-medium text-foreground shadow-sm hover:shadow-calm hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                >
                  🌍 {country}
                </motion.span>
              ))}
            </motion.div>

            {/* Humanitarian mission teaser */}
            <motion.div
              {...fadeUp}
              className="relative rounded-2xl overflow-hidden shadow-calm-lg"
            >
              <img src="/images/school-outside.jpg" alt="Brilliant Nursery & Primary School" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--deep-green)/0.9)] via-[hsl(var(--deep-green)/0.4)] to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-body text-xs text-primary-foreground/60 uppercase tracking-wider mb-2">Humanitarian Mission</p>
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">Rebuild the Brilliant Nursery & Primary School</h3>
                <p className="font-body text-sm text-primary-foreground/80 max-w-lg">Raising $500,000 to construct permanent classrooms, dormitories, and safe learning spaces for vulnerable children in Uganda.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Details & Press Contact */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div {...fadeUp} className="p-8 rounded-2xl bg-card border border-border shadow-calm">
              <BookOpen className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">Event Details</h3>
              <div className="space-y-4 font-body text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div><span className="font-semibold text-foreground block">Summit:</span> April 3–6, 2026</div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div><span className="font-semibold text-foreground block">International Day of Calm:</span> April 5, 2026</div>
                </div>
                <div className="flex items-start gap-3">
                  <Video className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div><span className="font-semibold text-foreground block">Location:</span> Global Livestream on YouTube & Facebook</div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div><span className="font-semibold text-foreground block">Hosted By:</span> Day of Calm Foundation (US 501(c)(3))</div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="p-8 rounded-2xl bg-gradient-calm text-primary-foreground shadow-calm-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary-foreground/5 blur-2xl" />
              <Mail className="w-8 h-8 mb-4 opacity-80" />
              <h3 className="font-display text-2xl font-bold mb-4">Press Inquiries</h3>
              <p className="font-body text-sm opacity-80 mb-6">
                For media interviews, press releases, or additional information, contact us directly.
              </p>
              <div className="space-y-3 font-body text-sm relative z-10">
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

      {/* Download CTA with background */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 8 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Ready to Share the Story?
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 max-w-xl mx-auto mb-10 leading-relaxed">
              Download the complete media kit for high-resolution assets, talking points, and full event details.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/documents/IDOCMediaKit.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary-foreground text-deep-green font-body font-bold text-lg hover:scale-105 transition-all shadow-calm-lg"
              >
                <Download className="w-5 h-5" />
                Download Media Kit
              </a>
              <Link
                to="/sponsor-kit"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-body font-bold text-lg hover:bg-primary-foreground/10 transition-all backdrop-blur-sm"
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
