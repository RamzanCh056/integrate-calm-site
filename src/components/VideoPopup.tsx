import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X, Volume2, VolumeX } from "lucide-react";

const YOUTUBE_VIDEO_ID = "jrQRv-gJoqM";

const VideoPopup = () => {
  const [open, setOpen] = useState(false);
  const [muted, setMuted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Start muted for autoplay (browser requirement), then try to unmute after a short delay
  const handleIframeLoad = () => {
    setTimeout(() => {
      const iframe = iframeRef.current;
      if (iframe?.contentWindow) {
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: "unMute", args: [] }),
          "*"
        );
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: "setVolume", args: [100] }),
          "*"
        );
      }
    }, 1000);
  };

  const toggleMute = () => {
    const iframe = iframeRef.current;
    if (iframe?.contentWindow) {
      const command = muted ? "unMute" : "mute";
      iframe.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: command, args: [] }),
        "*"
      );
      setMuted(!muted);
    }
  };

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
        {/* Mute/Unmute toggle */}
        <button
          onClick={toggleMute}
          className="absolute top-2 left-2 z-50 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
          title={muted ? "Unmute" : "Mute"}
        >
          {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
        <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: "56.25%" }}>
          {open && (
            <iframe
              ref={iframeRef}
              className="absolute inset-0 w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&rel=0&enablejsapi=1`}
              title="Day of Calm Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={handleIframeLoad}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPopup;
