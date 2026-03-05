import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, TrendingUp, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const GOAL = 30000;

// Mock donors — replace with real data from your backend
const mockDonors = [
  { name: "Sarah M.", amount: 100 },
  { name: "James L.", amount: 50 },
  { name: "Priya K.", amount: 250 },
  { name: "Carlos R.", amount: 20 },
  { name: "Amina D.", amount: 75 },
  { name: "David W.", amount: 100 },
  { name: "Li Chen", amount: 50 },
  { name: "Rachel G.", amount: 30 },
  { name: "Omar F.", amount: 200 },
  { name: "Sophia T.", amount: 25 },
  { name: "Marcus J.", amount: 50 },
  { name: "Elena V.", amount: 100 },
  { name: "Noah B.", amount: 40 },
  { name: "Fatima A.", amount: 150 },
  { name: "Tyler S.", amount: 20 },
  { name: "Yuki N.", amount: 75 },
  { name: "Hannah P.", amount: 60 },
  { name: "Ravi M.", amount: 500 },
  { name: "Grace O.", amount: 35 },
  { name: "Ahmed Z.", amount: 100 },
  { name: "Chloe D.", amount: 20 },
  { name: "Daniel K.", amount: 50 },
  { name: "Mia W.", amount: 25 },
  { name: "Liam H.", amount: 100 },
  { name: "Zara I.", amount: 200 },
];

const DonationProgress = () => {
  const [raised, setRaised] = useState(0);
  const totalRaised = mockDonors.reduce((sum, d) => sum + d.amount, 0);
  const percentage = Math.min((raised / GOAL) * 100, 100);

  // Animate the counter on mount
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = totalRaised / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= totalRaised) {
        setRaised(totalRaised);
        clearInterval(timer);
      } else {
        setRaised(Math.round(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [totalRaised]);

  // Rotating latest donor highlight
  const [highlightIdx, setHighlightIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIdx((prev) => (prev + 1) % mockDonors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/50 to-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Progress Header */}
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
                  ${raised.toLocaleString()}
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
                  {mockDonors.length} donors
                </span>
              </div>
              <span className="font-body text-sm font-semibold text-primary">
                {percentage.toFixed(1)}% of goal
              </span>
            </div>

            {/* Latest donor highlight */}
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
                    {mockDonors[highlightIdx].name}
                  </span>
                  <span className="font-body text-sm text-primary font-medium">
                    donated ${mockDonors[highlightIdx].amount}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Donor Wall */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Our $20+ Donors Wall
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {mockDonors.map((donor, i) => (
              <motion.div
                key={donor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-card shadow-calm border border-primary/5 hover:shadow-calm-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-sky-blue flex items-center justify-center shrink-0">
                  <span className="font-display text-[10px] font-bold text-primary-foreground">
                    {donor.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <span className="font-body text-sm font-medium text-card-foreground">
                  {donor.name}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="#donate"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-donate text-donate-foreground font-body font-bold text-base hover:scale-105 transition-transform shadow-calm-lg"
            >
              <Heart className="w-5 h-5" />
              Join the Wall — Donate $20+
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationProgress;
