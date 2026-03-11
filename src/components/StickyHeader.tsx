import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import DonorsDropdown from "./DonorsDropdown";

const navLinks = [
  { label: "Register", href: "#register", primary: true },
  { label: "Speakers", href: "#speakers" },
  { label: "Donate", href: "#donate", donate: true },
  { label: "Sponsor", href: "#sponsor", outline: true },
];

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border shadow-calm"
        >
          <div className="container mx-auto flex items-center justify-between py-3 px-6">
            <span className="font-display text-lg font-bold text-foreground tracking-tight">
              Day of Calm 2026
            </span>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) =>
                link.label === "Donate" ? (
                  <React.Fragment key="donors-donate">
                    <DonorsDropdown />
                    <a
                      key={link.label}
                      href={link.href}
                      className="px-4 py-2 rounded-full font-body text-sm font-medium transition-all bg-donate text-donate-foreground hover:opacity-90"
                    >
                      {link.label}
                    </a>
                  </React.Fragment>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`px-4 py-2 rounded-full font-body text-sm font-medium transition-all ${
                      link.primary
                        ? "bg-primary text-primary-foreground hover:opacity-90"
                        : link.outline
                          ? "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile nav */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden border-t border-border"
              >
                <div className="flex flex-col gap-2 p-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`px-4 py-3 rounded-xl font-body text-sm font-medium text-center transition-all ${
                        link.donate
                          ? "bg-donate text-donate-foreground"
                          : link.primary
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="#donors"
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-xl font-body text-sm font-medium text-center transition-all bg-secondary text-secondary-foreground"
                  >
                    Donors
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default StickyHeader;
