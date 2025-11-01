import { Linkedin, Mail, Github } from "lucide-react";

export default function Footer() {
  const handleSocialClick = (platform: string) => {
    console.log(`${platform} clicked`);
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Venkatesh Murthy N S</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Product Manager focused on building impactful products that solve real user problems through AI-driven innovation.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-projects"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-skills"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-experience"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleSocialClick("LinkedIn")}
                  className="text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-linkedin"
                >
                  LinkedIn
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSocialClick("Email")}
                  className="text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-email"
                >
                  Email
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSocialClick("GitHub")}
                  className="text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-github"
                >
                  GitHub
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm">Social</h4>
            <div className="flex gap-3">
              <button
                onClick={() => handleSocialClick("LinkedIn")}
                className="h-10 w-10 rounded-md border flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="button-social-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleSocialClick("Email")}
                className="h-10 w-10 rounded-md border flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="button-social-email"
              >
                <Mail className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleSocialClick("GitHub")}
                className="h-10 w-10 rounded-md border flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="button-social-github"
              >
                <Github className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2025 Venkatesh Murthy N S. Built with React, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
