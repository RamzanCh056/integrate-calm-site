import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-14 bg-deep-green text-primary-foreground/70">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="font-display text-xl font-bold text-primary-foreground mb-2">
            International Day of Calm Summit 2026
          </p>
          <p className="font-body text-sm mb-4">
            April 3–6, 2026 &nbsp;·&nbsp; Global Hybrid Event
          </p>
          <div className="flex items-center justify-center gap-1 font-body text-xs text-primary-foreground/40 mb-2">
            Made with <Heart className="w-3 h-3 text-donate fill-donate" /> for a calmer world
          </div>
          <p className="font-body text-xs text-primary-foreground/35">
            © 2026 International Day of Calm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
