import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, TrendingUp, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { db, collection, query, orderBy, onSnapshot } from "@/lib/firebase";

const GOAL = 30000;

interface Donor {
  name: string;
  amount: number;
  donatedAt: string;
}

const DonationProgress = () => {
  const [raised, setRaised] = useState(0);
  const [donors, setDonors] = useState<Donor[]>([]);
  const [loading, setLoading] = useState(true);
  const [displayRaised, setDisplayRaised] = useState(0);

  // Fetch donations from Supabase via edge function
  const fetchDonations = async () => {
    try {
      const { data, error } = await supabase.functions.invoke("get-donations");
      if (error) throw error;
      if (data) {
        setRaised(data.totalRaised || 0);
        setDonors(data.donors || []);
      }
    } catch (err) {
      console.error("Error fetching donations:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonations();
    // Poll every 30 seconds for real-time updates
    const interval = setInterval(fetchDonations, 30000);
    // Listen for immediate refresh after a new donation
    const handleNewDonation = () => fetchDonations();
    window.addEventListener("donation-completed", handleNewDonation);
    return () => {
      clearInterval(interval);
      window.removeEventListener("donation-completed", handleNewDonation);
    };
  }, []);

  // Animate the counter
  useEffect(() => {
    if (raised === 0) return;
    const duration = 2000;
    const steps = 60;
    const increment = raised / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= raised) {
        setDisplayRaised(raised);
        clearInterval(timer);
      } else {
        setDisplayRaised(Math.round(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [raised]);

  const percentage = Math.min((displayRaised / GOAL) * 100, 100);

  // Rotating latest donor highlight
  const [highlightIdx, setHighlightIdx] = useState(0);
  useEffect(() => {
    if (donors.length === 0) return;
    const interval = setInterval(() => {
      setHighlightIdx((prev) => (prev + 1) % donors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [donors.length]);

  return (
    <section id="donors" className="py-20 md:py-28 bg-gradient-to-b from-secondary/50 to-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-donate/10 text-donate font-body text-sm font-semibold mb-4">
            <TrendingUp className="w-4 h-4" />
            Live Donation Tracker
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
            Together We're Making{" "}
            <span className="text-gradient-calm">a Difference</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto">
            Every donation brings us closer to a calmer world. See our community's impact in real time.
          </p>
        </motion.div>

        {/* Progress Bar Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-calm-lg border border-primary/10">
            <div className="flex items-end justify-between mb-4">
              <div>
                <p className="font-body text-sm text-muted-foreground mb-1">Raised so far</p>
                <p className="font-display text-4xl md:text-5xl font-bold text-primary">
                  ${displayRaised.toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <p className="font-body text-sm text-muted-foreground mb-1">Goal</p>
                <p className="font-display text-2xl font-bold text-foreground">
                  ${GOAL.toLocaleString()}
                </p>
              </div>
            </div>

            <Progress value={percentage} className="h-5 rounded-full bg-secondary mb-4" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-4 h-4" />
                <span className="font-body text-sm font-medium">
                  {donors.length} donors
                </span>
              </div>
              <span className="font-body text-sm font-semibold text-primary">
                {percentage.toFixed(1)}% of goal
              </span>
            </div>

            {/* Latest donor highlight */}
            {donors.length > 0 && (
              <div className="mt-6 pt-5 border-t border-border">
                <p className="font-body text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                  Latest supporters
                </p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={highlightIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-soft-green flex items-center justify-center">
                      <Heart className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="font-body text-base font-semibold text-card-foreground">
                      {donors[highlightIdx]?.name}
                    </span>
                    <span className="font-body text-sm text-primary font-medium">
                      donated ${donors[highlightIdx]?.amount}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            )}

            {donors.length === 0 && (
              <div className="mt-6 pt-5 border-t border-border text-center">
                <p className="font-body text-sm text-muted-foreground">
                  {loading ? "Loading donations..." : "Be the first to donate and appear here!"}
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Donor Wall — ALL donors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Our Generous Donors
          </h3>
          {donors.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {donors.map((donor, i) => {
                const isFeatured = donor.amount >= 20;
                return (
                  <motion.div
                    key={`${donor.name}-${i}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-card shadow-calm hover:shadow-calm-lg hover:-translate-y-0.5 transition-all ${
                      isFeatured
                        ? "border-2 border-donate/30 ring-1 ring-donate/10"
                        : "border border-primary/5"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                        isFeatured
                          ? "bg-gradient-to-br from-donate to-soft-green"
                          : "bg-gradient-to-br from-primary to-sky-blue"
                      }`}
                    >
                      {isFeatured ? (
                        <Heart className="w-3.5 h-3.5 text-primary-foreground fill-current" />
                      ) : (
                        <span className="font-display text-[10px] font-bold text-primary-foreground">
                          {donor.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      )}
                    </div>
                    <span className="font-body text-sm font-medium text-card-foreground">
                      {donor.name}
                    </span>
                    <span
                      className={`font-body text-xs font-semibold ${
                        isFeatured ? "text-donate" : "text-primary"
                      }`}
                    >
                      ${donor.amount}
                    </span>
                    {isFeatured && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-donate/10 text-donate font-body font-bold">
                        ★
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <p className="font-body text-muted-foreground text-center">
              {loading ? "Loading..." : "No donors yet — be the first to support the cause!"}
            </p>
          )}
          <div className="text-center mt-8">
            <a
              href="#donate"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-donate text-donate-foreground font-body font-bold text-base hover:scale-105 transition-transform shadow-calm-lg"
            >
              <Heart className="w-5 h-5" />
              Donate Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationProgress;
