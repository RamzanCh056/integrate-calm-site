import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Play, Award, Film, Shield, CreditCard } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const presetAmounts = [20, 50, 100, 250];

const perks = [
  { icon: Play, text: "Full live stream access" },
  { icon: Heart, text: "Submit a message featured during the community segment" },
  { icon: Award, text: "Digital participation badge" },
  { icon: Film, text: "Access to event recordings" },
];

const DonateSection = () => {
  const [amount, setAmount] = useState(20);
  const [custom, setCustom] = useState("");
  const [recurring, setRecurring] = useState(false);
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const isCustom = !presetAmounts.includes(amount);

  const handleCustom = (val: string) => {
    setCustom(val);
    const num = parseInt(val);
    if (!isNaN(num) && num >= 20) setAmount(num);
  };

  const handleDonate = async () => {
    if (!donorName.trim() || !donorEmail.trim()) {
      toast.error("Please enter your name and email");
      return;
    }
    if (amount < 20) {
      toast.error("Minimum donation is $20");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-donation", {
        body: {
          amount: amount * 100, // cents
          donor_name: donorName.trim(),
          donor_email: donorEmail.trim(),
          recurring,
        },
      });

      if (error) throw error;
      if (data?.url) {
        window.open(data.url, "_blank");
      }
    } catch (err) {
      console.error("Donation error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="donate" className="py-24 md:py-32 bg-gradient-sky">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Support the Movement.{" "}
            <span className="text-gradient-calm">Share Your Voice.</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Donate $20 or more to receive:
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* Perks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {perks.map((perk, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl bg-card shadow-calm"
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <perk.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-body text-card-foreground text-base pt-1.5">
                  {perk.text}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Donation Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl p-8 shadow-calm-lg"
          >
            {/* Name & Email */}
            <div className="space-y-3 mb-6">
              <input
                type="text"
                placeholder="Your full name"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="email"
                placeholder="Your email address"
                value={donorEmail}
                onChange={(e) => setDonorEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-1 mb-8 bg-secondary rounded-full p-1 max-w-xs mx-auto">
              <button
                onClick={() => setRecurring(false)}
                className={`flex-1 py-2 rounded-full font-body text-sm font-medium transition-colors ${
                  !recurring
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                One-time
              </button>
              <button
                onClick={() => setRecurring(true)}
                className={`flex-1 py-2 rounded-full font-body text-sm font-medium transition-colors ${
                  recurring
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
            </div>

            {/* Amounts */}
            <div className="grid grid-cols-4 gap-3 mb-4">
              {presetAmounts.map((a) => (
                <button
                  key={a}
                  onClick={() => {
                    setAmount(a);
                    setCustom("");
                  }}
                  className={`py-3 rounded-xl font-body font-semibold text-lg transition-all ${
                    amount === a && !isCustom
                      ? "bg-primary text-primary-foreground shadow-calm"
                      : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                  }`}
                >
                  ${a}
                </button>
              ))}
            </div>

            {/* Custom */}
            <div className="relative mb-8">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-body text-muted-foreground text-lg">
                $
              </span>
              <input
                type="number"
                min={20}
                placeholder="Custom amount (min $20)"
                value={custom}
                onChange={(e) => handleCustom(e.target.value)}
                className="w-full pl-8 pr-4 py-3 rounded-xl border border-input bg-background font-body text-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            {/* CTA */}
            <button
              onClick={handleDonate}
              disabled={loading}
              className="w-full py-4 rounded-full bg-donate text-donate-foreground font-body font-bold text-lg hover:scale-[1.02] transition-transform shadow-calm-lg mb-3 disabled:opacity-50"
            >
              {loading ? "Processing..." : `Donate $${amount} & Join the Livestream`}
            </button>

            <p className="font-body text-xs text-muted-foreground text-center mb-6">
              Community messages are curated to align with the summit's mission.
            </p>

            {/* Trust */}
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <Shield className="w-4 h-4" />
              <span className="font-body text-xs">Secure Payment</span>
              <CreditCard className="w-4 h-4" />
              <span className="font-body text-xs">Powered by Stripe</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
