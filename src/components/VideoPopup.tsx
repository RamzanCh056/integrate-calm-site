import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, Youtube, Facebook, Radio } from "lucide-react";

const VideoPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md p-0 overflow-visible rounded-3xl border-0 bg-card shadow-2xl [&>button]:hidden">
        <DialogTitle className="sr-only">We're Live Now</DialogTitle>
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-3 -right-3 z-50 w-9 h-9 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center shadow-xl hover:scale-110 transition-transform border-2 border-background"
        >
          <X className="w-4 h-4" strokeWidth={3} />
        </button>

        <div className="p-8 text-center">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive font-body text-sm font-bold mb-5 animate-pulse">
            <Radio className="w-4 h-4" />
            🔴 WE'RE LIVE NOW!
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Day of Calm Summit
          </h3>
          <p className="font-body text-muted-foreground mb-8">
            Join us right now — streaming live on YouTube & Facebook!
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="https://www.youtube.com/@DayofCalm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-destructive text-destructive-foreground font-body font-bold text-lg hover:scale-105 transition-all shadow-calm"
            >
              <Youtube className="w-6 h-6" />
              Watch on YouTube
            </a>
            <a
              href="https://www.facebook.com/share/18KHYGWdZ4/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-primary text-primary-foreground font-body font-bold text-lg hover:scale-105 transition-all shadow-calm"
            >
              <Facebook className="w-6 h-6" />
              Watch on Facebook
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPopup;
