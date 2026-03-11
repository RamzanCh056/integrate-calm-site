import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

const YOUTUBE_VIDEO_ID = "jrQRv-gJoqM";

const VideoPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-xl md:max-w-2xl lg:max-w-3xl p-0.5 overflow-visible rounded-2xl border-0 bg-card/50 shadow-2xl [&>button]:hidden">
        <DialogTitle className="sr-only">Day of Calm Video</DialogTitle>
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-3 -right-3 z-50 w-9 h-9 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center shadow-xl hover:scale-110 transition-transform border-2 border-background"
        >
          <X className="w-4 h-4" strokeWidth={3} />
        </button>
        <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: "56.25%" }}>
          {open && (
            <iframe
              className="absolute inset-0 w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&rel=0`}
              title="Day of Calm Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPopup;
