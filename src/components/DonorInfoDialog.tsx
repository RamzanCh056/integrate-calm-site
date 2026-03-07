import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Heart, ArrowRight } from "lucide-react";

interface DonorInfoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onProceed: (name: string, email: string) => void;
  amount: number;
}

const DonorInfoDialog = ({ open, onOpenChange, onProceed, amount }: DonorInfoDialogProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSkip = () => {
    onProceed("", "");
  };

  const handleSubmit = () => {
    onProceed(name.trim(), email.trim());
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <div className="mx-auto w-12 h-12 rounded-full bg-donate/10 flex items-center justify-center mb-2">
            <Heart className="w-6 h-6 text-donate" />
          </div>
          <DialogTitle className="font-display text-2xl text-center text-foreground">
            Almost there!
          </DialogTitle>
          <DialogDescription className="text-center font-body text-muted-foreground">
            Add your name to appear on our donor wall, or skip to donate anonymously.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          <input
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-input bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <input
            type="email"
            placeholder="Your email (optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-input bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div className="flex flex-col gap-2 mt-6">
          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-full bg-donate text-donate-foreground font-body font-bold text-base hover:scale-[1.02] transition-transform shadow-calm-lg flex items-center justify-center gap-2"
          >
            Continue to Payment
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={handleSkip}
            className="w-full py-3 rounded-full bg-secondary text-secondary-foreground font-body font-medium text-sm hover:bg-secondary/80 transition-colors"
          >
            Skip — Donate Anonymously
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonorInfoDialog;
