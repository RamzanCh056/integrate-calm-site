import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Mic, ChevronDown } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface Donor {
  name: string;
  amount: number;
  created_at: string;
}

const DonorsDropdown = () => {
  const [open, setOpen] = useState(false);
  const [donors, setDonors] = useState<Donor[]>([]);
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || donors.length > 0) return;
    setLoading(true);
    supabase.functions.invoke("get-donations").then(({ data, error }) => {
      if (!error && data?.donors) setDonors(data.donors);
      setLoading(false);
    });
  }, [open]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-4 py-2 rounded-full font-body text-sm font-medium text-foreground hover:bg-secondary transition-all"
      >
        Donors
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full mt-2 w-72 max-h-80 overflow-y-auto rounded-2xl bg-card border border-border shadow-calm-lg z-50"
          >
            <div className="p-3 border-b border-border">
              <p className="font-display text-sm font-bold text-foreground">Our Donors</p>
              <p className="font-body text-xs text-muted-foreground">{donors.length} supporters</p>
            </div>

            {loading ? (
              <div className="p-4 text-center">
                <p className="font-body text-sm text-muted-foreground">Loading...</p>
              </div>
            ) : donors.length === 0 ? (
              <div className="p-4 text-center">
                <p className="font-body text-sm text-muted-foreground">No donors yet</p>
              </div>
            ) : (
              <div className="p-2 space-y-1">
                {donors.map((donor, i) => {
                  const isSpeaker = donor.amount >= 20;
                  return (
                    <div
                      key={`${donor.name}-${i}`}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-xl transition-colors hover:bg-secondary/50 ${
                        isSpeaker ? "bg-donate/5" : ""
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                          isSpeaker
                            ? "bg-gradient-to-br from-donate to-soft-green"
                            : "bg-gradient-to-br from-primary to-sky-blue"
                        }`}
                      >
                        {isSpeaker ? (
                          <Heart className="w-3.5 h-3.5 text-primary-foreground fill-current" />
                        ) : (
                          <span className="font-display text-[9px] font-bold text-primary-foreground">
                            {donor.name.split(" ").map((n) => n[0]).join("")}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-body text-sm font-medium text-card-foreground truncate">
                            {donor.name}
                          </span>
                          {isSpeaker && (
                            <span className="inline-flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded-full bg-donate/10 text-donate font-body font-bold shrink-0">
                              <Mic className="w-2.5 h-2.5" />
                              Speaker
                            </span>
                          )}
                        </div>
                        <span className={`font-body text-xs font-semibold ${isSpeaker ? "text-donate" : "text-primary"}`}>
                          ${donor.amount}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="p-2 border-t border-border">
              <a
                href="#donors"
                onClick={() => setOpen(false)}
                className="block text-center font-body text-xs font-medium text-primary hover:underline py-1"
              >
                View all donors ↓
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DonorsDropdown;
