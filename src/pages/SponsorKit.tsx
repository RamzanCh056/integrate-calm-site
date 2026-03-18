import { motion } from "framer-motion";
import { ArrowLeft, Download, Star, Globe, Heart, Users, Megaphone, Trophy, Sparkles, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const sponsorTiers = [
  {
    name: "Platinum Sponsor",
    price: "$25,000+",
    color: "from-primary to-soft-green",
    icon: Trophy,
    perks: [
      "Keynote introduction or dedicated segment",
      "Logo featured prominently on all summit materials",
      "Dedicated social media spotlight campaign",
      "Full-page feature in digital summit program",
      "VIP access to all summit sessions & recordings",
      "Direct connection to 500K+ global audience",
    ],
  },
  {
    name: "Gold Sponsor",
    price: "$10,000+",
    color: "from-[hsl(40,80%,50%)] to-[hsl(35,90%,60%)]",
    icon: Star,
    perks: [
      "Logo on summit website & livestream overlays",
      "Social media mentions across all platforms",
      "Half-page feature in digital summit program",
      "Access to all summit recordings",
      "Sponsor shout-out during live sessions",
    ],
  },
  {
    name: "Silver Sponsor",
    price: "$5,000+",
    color: "from-muted-foreground to-foreground",
    icon: Sparkles,
    perks: [
      "Logo on summit website sponsors section",
      "Social media thank-you post",
      "Listing in digital summit program",
      "Access to summit recordings",
    ],
  },
  {
    name: "Community Sponsor",
    price: "$1,000+",
    color: "from-accent to-sky-blue",
    icon: Heart,
    perks: [
      "Name listed on summit supporters page",
      "Social media group thank-you",
      "Access to summit recordings",
    ],
  },
];

const whySponsor = [
  { icon: Globe, title: "Global Reach", desc: "Connect with a worldwide audience passionate about wellness, family, and positive change." },
  { icon: Users, title: "Aligned Values", desc: "Associate your brand with calm leadership, mental wellness, and humanitarian impact." },
  { icon: Megaphone, title: "Media Exposure", desc: "Featured across livestreams, social media, press releases, and the summit website." },
  { icon: Heart, title: "Social Impact", desc: "Directly support rebuilding a school in Uganda and the global calm movement." },
];

const SponsorKit = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-calm">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-primary-foreground/20 blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-primary-foreground/10 blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-8 font-body text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <motion.div {...fadeUp} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/15 text-primary-foreground font-body text-sm font-medium mb-6 backdrop-blur-sm">
              Partnership Opportunities
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Sponsor Kit
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl">
              Partner with the International Day of Calm Summit and help bring calm, connection, and hope to communities worldwide — April 3–6, 2026.
            </p>
            <a
              href="mailto:Celia@DayofCalm.org?subject=Sponsorship Inquiry — Day of Calm Summit"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary-foreground text-deep-green font-body font-bold text-lg hover:scale-105 transition-all shadow-calm-lg"
            >
              <Mail className="w-5 h-5" />
              Inquire About Sponsorship
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why <span className="text-gradient-calm">Sponsor</span>?
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Align your brand with a global movement for calm, wellness, and humanity — reaching hundreds of thousands across 15+ countries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {whySponsor.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-calm transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sponsorship <span className="text-gradient-calm">Tiers</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
              Choose the level that fits your organization's goals and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {sponsorTiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 rounded-2xl bg-card border border-border shadow-calm hover:shadow-calm-lg transition-all overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${tier.color}`} />
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${tier.color} text-primary-foreground`}>
                    <tier.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">{tier.name}</h3>
                    <p className="font-body text-sm text-muted-foreground">{tier.price}</p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {tier.perks.map((perk, j) => (
                    <li key={j} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">✓</span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Humanitarian Mission */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Sponsorship Supports a <span className="text-gradient-calm">Humanitarian Mission</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              During the summit, the Day of Calm Foundation is raising $500,000 to rebuild the Brilliant Nursery and Primary School in Uganda — providing education and safety for vulnerable children.
            </p>
            <blockquote className="px-8 py-6 rounded-2xl bg-secondary/50 border border-border">
              <p className="font-display text-xl italic text-foreground">
                "Children deserve more than survival — they deserve safety, dignity, and the opportunity to thrive."
              </p>
              <cite className="font-body text-sm text-muted-foreground mt-3 block not-italic">— Celia Kibler</cite>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Become a <span className="text-gradient-calm">Sponsor</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Ready to align your brand with the global calm movement? Let's talk.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="mailto:Celia@DayofCalm.org?subject=Sponsorship Inquiry — Day of Calm Summit"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-bold text-lg hover:scale-105 transition-all shadow-calm-lg"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </a>
              <Link
                to="/media-kit"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-primary text-primary font-body font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Download className="w-5 h-5" />
                View Media Kit
              </Link>
            </div>
            <div className="flex flex-col items-center gap-2 font-body text-sm text-muted-foreground">
              <a href="tel:+13019222164" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" /> +1-301-922-2164
              </a>
              <a href="mailto:Celia@DayofCalm.org" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" /> Celia@DayofCalm.org
              </a>
              <p className="mt-2">SponsorCalm.org</p>
            </div>
          </motion.div>
        </div>
      </section>

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

export default SponsorKit;
