import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);

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
          className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border shadow-calm"
        >
          <div className="container mx-auto flex items-center justify-between py-3 px-6">
            <span className="font-display text-lg font-semibold text-foreground">
              Day of Calm 2026
            </span>
            <nav className="flex items-center gap-3">
              <a
                href="#register"
                className="px-5 py-2 rounded-full bg-primary text-primary-foreground font-body text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Register
              </a>
              <a
                href="#donate"
                className="px-5 py-2 rounded-full bg-donate text-donate-foreground font-body text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Donate
              </a>
              <a
                href="#sponsor"
                className="px-5 py-2 rounded-full border border-primary text-primary font-body text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Sponsor
              </a>
            </nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default StickyHeader;
