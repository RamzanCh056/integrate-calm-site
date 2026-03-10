import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

const VideoPopup = () => {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (open && videoRef.current) {
      // Try playing with sound; if blocked by browser, fall back to muted
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play();
        }
      });
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-xl md:max-w-2xl lg:max-w-3xl p-0.5 overflow-visible rounded-2xl border-0 bg-card/50 shadow-2xl [&>button]:hidden">
        <DialogTitle className="sr-only">School Video</DialogTitle>
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-3 -right-3 z-50 w-9 h-9 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center shadow-xl hover:scale-110 transition-transform border-2 border-background"
        >
          <X className="w-4 h-4" strokeWidth={3} />
        </button>
        <div className="relative w-full rounded-xl overflow-hidden max-h-[80vh]">
          <video
            ref={videoRef}
            controls
            playsInline
            preload="auto"
            className="w-full h-full rounded-xl"
            poster="/images/calm-poster-thumbnail.png"
          >
            <source src="https://firebasestorage.googleapis.com/v0/b/askstella-5d3d5.appspot.com/o/VIDEO-2026-03-09-10-44-28.mp4?alt=media&token=fa355686-2b46-41c2-9fb7-ebd77be91db6" type="video/mp4" />
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPopup;
