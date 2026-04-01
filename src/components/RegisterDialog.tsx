import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import RegistrationForm from "@/components/RegistrationForm";

interface RegisterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RegisterDialog = ({ open, onOpenChange }: RegisterDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-0 border-none bg-transparent shadow-none [&>button]:hidden">
        <DialogTitle className="sr-only">Register for the Summit</DialogTitle>
        <RegistrationForm />
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;
