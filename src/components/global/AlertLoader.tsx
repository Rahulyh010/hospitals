import "./loader.module.css";

import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
export default function AlertLoader({ open }: { open: boolean }) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="w-10/12 z-[999] bg-transparent border-none flex justify-center items-center">
        <div>
          <p className="loader2"></p>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
