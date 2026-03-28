import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-14 bg-deep-green text-primary-foreground/70">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="font-display text-xl font-bold text-primary-foreground mb-2">
            International Day of Calm Summit 2026
          </p>
          <div className="flex items-center justify-center gap-4 font-body text-sm mb-4">
            <Link to="/media-kit" className="hover:text-primary-foreground transition-colors underline underline-offset-2">Media Kit</Link>
            <span className="opacity-30">·</span>
            <Link to="/sponsor-kit" className="hover:text-primary-foreground transition-colors underline underline-offset-2">Sponsor Kit</Link>
          </div>
          <p className="font-body text-sm mb-4">
            April 3–6, 2026 &nbsp;·&nbsp; Global Hybrid Event
          </p>
          <div className="flex items-center justify-center gap-1 font-body text-xs text-primary-foreground/40 mb-2">
            Made with <Heart className="w-3 h-3 text-donate fill-donate" /> for a calmer world
          </div>
          <div className="mt-6 pt-6 border-t border-primary-foreground/10">
            <p className="font-body text-sm text-primary-foreground/60 mb-1">
              Sponsored by the <span className="font-semibold text-primary-foreground/80">Day of Calm Foundation</span>
            </p>
            <p className="font-body text-xs text-primary-foreground/50">
              A registered 501(c)(3) nonprofit organization. All donations are tax-deductible.
            </p>
          </div>
          <p className="font-body text-xs text-primary-foreground/35 mt-4">
            © 2026 International Day of Calm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
