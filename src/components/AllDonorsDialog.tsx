import { motion } from "framer-motion";
import { Heart, Mic, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Donor {
  name: string;
  amount: number;
}

interface AllDonorsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  donors: Donor[];
}

const AllDonorsDialog = ({ open, onOpenChange, donors }: AllDonorsDialogProps) => {
  const sorted = [...donors].sort((a, b) => b.amount - a.amount);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden rounded-3xl p-0">
        <DialogHeader className="p-6 pb-3 border-b border-border">
          <DialogTitle className="font-display text-2xl font-bold text-foreground">
            All Donors ({sorted.length})
          </DialogTitle>
          <p className="font-body text-sm text-muted-foreground">
            Thank you to every generous supporter
          </p>
        </DialogHeader>

        <div className="overflow-y-auto max-h-[60vh] p-4 space-y-2">
          {sorted.map((donor, i) => {
            const isSpeaker = donor.amount >= 20;
            return (
              <motion.div
                key={`${donor.name}-${i}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.02 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-colors ${
                  isSpeaker ? "bg-donate/5 border border-donate/15" : "bg-secondary/30"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                    isSpeaker
                      ? "bg-gradient-to-br from-donate to-soft-green"
                      : "bg-gradient-to-br from-primary to-sky-blue"
                  }`}
                >
                  {isSpeaker ? (
                    <Heart className="w-4 h-4 text-primary-foreground fill-current" />
                  ) : (
                    <span className="font-display text-[10px] font-bold text-primary-foreground">
                      {donor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-body text-sm font-semibold text-card-foreground truncate">
                      {donor.name}
                    </span>
                    {isSpeaker && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded-full bg-donate/10 text-donate font-body font-bold shrink-0">
                        <Mic className="w-2.5 h-2.5" />
                        Speaker
                      </span>
                    )}
                  </div>
                </div>
                <span
                  className={`font-body text-sm font-bold ${
                    isSpeaker ? "text-donate" : "text-primary"
                  }`}
                >
                  ${donor.amount}
                </span>
                {isSpeaker && (
                  <span className="text-xs">★</span>
                )}
              </motion.div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AllDonorsDialog;
