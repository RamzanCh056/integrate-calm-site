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
      <DialogContent className="sm:max-w-lg md:max-w-xl lg:max-w-2xl p-0 overflow-visible rounded-2xl border border-border/20 bg-black shadow-2xl [&>button]:hidden">
        <DialogTitle className="sr-only">Day of Calm Video</DialogTitle>

        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-4 -right-4 z-50 w-10 h-10 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform border-2 border-background cursor-pointer"
          aria-label="Close video"
        >
          <X className="w-5 h-5" strokeWidth={2.5} />
        </button>

        {/* Video container — 9:16 vertical aspect ratio to match the video */}
        <div className="relative w-full rounded-2xl overflow-hidden" style={{ paddingBottom: "177.78%" }}>
          {open && (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
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
