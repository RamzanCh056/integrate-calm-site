import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, Volume2, VolumeX } from "lucide-react";

const VideoPopup = () => {
  const [open, setOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md md:max-w-lg p-1.5 overflow-visible rounded-2xl border border-border/30 bg-card shadow-2xl [&>button]:hidden">
        <DialogTitle className="sr-only">School Video</DialogTitle>
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-4 -right-4 z-50 w-10 h-10 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center shadow-xl hover:scale-110 transition-transform border-2 border-background"
        >
          <X className="w-5 h-5" strokeWidth={3} />
        </button>
        <div className="relative w-full rounded-xl overflow-hidden aspect-[9/16] max-h-[70vh]">
          <video
            ref={videoRef}
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
          <button
            onClick={toggleMute}
            className="absolute top-3 left-3 z-50 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm text-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPopup;
