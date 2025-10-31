import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@assets/profile-photo_1761884631575.jpg";

export default function Hero() {
  const handleViewProjects = () => {
    console.log("View Projects clicked");
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    console.log("Download Resume clicked");
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-center">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Building Products
                <br />
                That Matter
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Results-driven Product Manager with 8 years of experience in Problem Articulation and Solutioning, Roadmap, Strategy, Product Analytics, and 0 to 1 Product Management. I thrive on taking risks and owning outcomes, translating user needs into innovative and compelling products.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={handleViewProjects}
                data-testid="button-view-projects"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleDownloadResume}
                data-testid="button-download-resume"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              <div data-testid="text-experience">8 Years PM Experience</div>
              <div className="hidden sm:block">•</div>
              <div data-testid="text-launches">AI-Driven Innovation</div>
              <div className="hidden sm:block">•</div>
              <div data-testid="text-impact">75% Efficiency Gains</div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-md border border-border">
                <img
                  src={heroImage}
                  alt="Professional product manager"
                  className="h-full w-full object-cover"
                  data-testid="img-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
