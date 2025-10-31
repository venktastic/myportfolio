import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Copy, Check, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("venky890@gmail.com");
    setCopied(true);
    toast({
      title: "Email copied!",
      description: "Email address copied to clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContactFormClick = () => {
    console.log("Opening contact form");
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdQGomp1i1GLMJ1em49ru5Lz8jaOkWqkY4DvgYpnMb2keJwCQ/viewform?usp=header", "_blank");
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-contact-title">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Interested in working together? Let's connect and discuss opportunities.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <Card className="p-8 lg:col-span-3 flex flex-col items-center justify-center text-center space-y-6">
            <div className="space-y-4 max-w-md">
              <h3 className="text-2xl font-semibold">Ready to Connect?</h3>
              <p className="text-muted-foreground">
                Fill out a quick form to share your opportunity or project details. I'll get back to you within 24 hours.
              </p>
            </div>
            
            <Button 
              size="lg"
              onClick={handleContactFormClick}
              data-testid="button-contact-form"
            >
              Fill Contact Form
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Card>

          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Direct Contact</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm truncate" data-testid="text-email">
                        venky890@gmail.com
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopyEmail}
                      data-testid="button-copy-email"
                    >
                      {copied ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => {
                      console.log("LinkedIn clicked");
                      window.open("https://linkedin.com/in/iamvenky", "_blank");
                    }}
                    data-testid="button-linkedin"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-muted/50">
              <div className="space-y-2">
                <h3 className="font-semibold">Open to Opportunities</h3>
                <p className="text-sm text-muted-foreground">
                  Currently exploring PM roles in AI-driven products, HealthTech, and B2B SaaS. Based in Bengaluru, open to remote opportunities.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
