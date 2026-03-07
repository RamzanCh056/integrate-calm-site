import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CheckCircle, Heart } from "lucide-react";

interface DonationSuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DonationSuccessDialog = ({ open, onOpenChange }: DonationSuccessDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <div className="mx-auto w-14 h-14 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-2">
            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <DialogTitle className="font-display text-2xl text-center text-foreground">
            Thank You! 🎉
          </DialogTitle>
          <DialogDescription className="text-center font-body text-muted-foreground">
            Your donation to the Day of Calm Summit has been received. You're making a real difference.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <div className="bg-secondary/50 rounded-2xl p-5 space-y-2">
            <p className="font-body text-sm text-muted-foreground">What happens next:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 font-body text-sm text-card-foreground">
                <Heart className="w-4 h-4 text-donate mt-0.5 shrink-0" />
                Your name will appear on the donor wall
              </li>
              <li className="flex items-start gap-2 font-body text-sm text-card-foreground">
                <Heart className="w-4 h-4 text-donate mt-0.5 shrink-0" />
                You'll receive livestream access details via email
              </li>
              <li className="flex items-start gap-2 font-body text-sm text-card-foreground">
                <Heart className="w-4 h-4 text-donate mt-0.5 shrink-0" />
                Your community message can be submitted during the event
              </li>
            </ul>
          </div>

          <button
            onClick={() => onOpenChange(false)}
            className="w-full py-3 rounded-full bg-primary text-primary-foreground font-body font-bold text-base hover:scale-[1.02] transition-transform"
          >
            Continue Exploring
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationSuccessDialog;
