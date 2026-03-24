import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { Speaker } from "@/data/speakers";

interface SpeakerBioDialogProps {
  speaker: Speaker | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SpeakerBioDialog = ({ speaker, open, onOpenChange }: SpeakerBioDialogProps) => {
  if (!speaker) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-2">
            <div
              className={`w-16 h-16 rounded-full ${speaker.photo ? '' : `bg-gradient-to-br ${speaker.gradient}`} flex items-center justify-center shrink-0 overflow-hidden`}
            >
              {speaker.photo ? (
                <img
                  src={speaker.photo}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: speaker.photoPosition === 'zoom' ? 'center 15%' : 'center top',
                    transform: speaker.photoPosition === 'zoom' ? 'scale(1.5)' : undefined,
                  }}
                />
              ) : (
                <span className="font-display text-lg font-bold text-primary-foreground">
                  {speaker.initials}
                </span>
              )}
            </div>
            <div>
              <DialogTitle className="font-display text-xl font-bold text-foreground">
                {speaker.name}
              </DialogTitle>
              <p className="font-body text-sm text-muted-foreground">{speaker.role}</p>
              {speaker.location && (
                <p className="font-body text-xs text-muted-foreground/70">📍 {speaker.location}</p>
              )}
            </div>
          </div>
        </DialogHeader>
        <div className="space-y-4">
          <div className="px-4 py-3 rounded-xl bg-primary/5 border border-primary/10">
            <p className="font-body text-sm font-semibold text-primary italic">
              "{speaker.topic}"
            </p>
          </div>
          {speaker.bio && (
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {speaker.bio}
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SpeakerBioDialog;
