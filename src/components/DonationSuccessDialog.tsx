import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { CheckCircle, Heart, Sparkles, Mail, MessageCircle } from "lucide-react";

interface DonationSuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DonationSuccessDialog = ({ open, onOpenChange }: DonationSuccessDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border overflow-hidden">
        {/* Decorative top gradient */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

        <DialogHeader className="relative z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
            className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-donate/20 flex items-center justify-center mb-3"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              <CheckCircle className="w-10 h-10 text-primary" />
            </motion.div>
          </motion.div>

          {/* Floating sparkles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute top-2 right-12"
          >
            <Sparkles className="w-5 h-5 text-donate/60" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute top-8 left-12"
          >
            <Sparkles className="w-4 h-4 text-primary/50" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <DialogTitle className="font-display text-3xl text-center text-foreground">
              Thank You! 🎉
            </DialogTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <DialogDescription className="text-center font-body text-muted-foreground text-base">
              Your generosity helps bring calm to the world. You're now part of something beautiful.
            </DialogDescription>
          </motion.div>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="space-y-4 mt-4"
        >
          <div className="bg-secondary/50 rounded-2xl p-5 space-y-3">
            <p className="font-body text-sm font-semibold text-foreground">What happens next:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 font-body text-sm text-card-foreground">
                <div className="w-7 h-7 rounded-full bg-donate/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-3.5 h-3.5 text-donate" />
                </div>
                Your name will appear on the donor wall
              </li>
              <li className="flex items-start gap-3 font-body text-sm text-card-foreground">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                </div>
                You'll receive livestream access details via email
              </li>
              <li className="flex items-start gap-3 font-body text-sm text-card-foreground">
                <div className="w-7 h-7 rounded-full bg-accent/50 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle className="w-3.5 h-3.5 text-primary" />
                </div>
                Submit a community message during the event
              </li>
            </ul>
          </div>

          <button
            onClick={() => onOpenChange(false)}
            className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-body font-bold text-base hover:scale-[1.02] transition-transform shadow-calm-lg"
          >
            Continue Exploring ✨
          </button>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationSuccessDialog;
