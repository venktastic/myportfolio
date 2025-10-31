import ContactSection from '../ContactSection';
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

export default function ContactSectionExample() {
  return (
    <TooltipProvider>
      <ContactSection />
      <Toaster />
    </TooltipProvider>
  );
}
