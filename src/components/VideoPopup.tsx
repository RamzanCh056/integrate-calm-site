import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

const VideoPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-sm p-2 overflow-hidden rounded-2xl border border-border bg-card [&>button]:hidden">
        <DialogTitle className="sr-only">School Video</DialogTitle>
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-2 -right-2 z-20 w-8 h-8 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="relative w-full rounded-xl overflow-hidden aspect-[9/16] max-h-[70vh]">
          <video
            controls
            autoPlay
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover rounded-xl"
            poster="/images/calm-logo-poster.jpg"
          >
            <source src="https://firebasestorage.googleapis.com/v0/b/askstella-5d3d5.appspot.com/o/VIDEO-2026-03-09-10-44-28.mp4?alt=media&token=fa355686-2b46-41c2-9fb7-ebd77be91db6" type="video/mp4" />
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPopup;
