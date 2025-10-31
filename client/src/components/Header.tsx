import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { label: "Projects", href: "projects" },
    { label: "Skills", href: "skills" },
    { label: "Experience", href: "experience" },
    { label: "Contact", href: "contact" },
  ];

  const handleNavClick = (href: string) => {
    console.log(`Navigate to ${href}`);
    document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
    onNavigate?.(href);
  };

  const handleDownload = () => {
    console.log("Download resume clicked");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <button
            onClick={() => handleNavClick("hero")}
            className="text-xl font-bold hover-elevate active-elevate-2 px-3 py-2 rounded-md -ml-3"
            data-testid="button-logo"
          >
            Venkatesh Murthy
          </button>
        </div>

        <div className="flex lg:hidden gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            data-testid="button-theme-toggle-mobile"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md"
              data-testid={`link-nav-${item.href}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            data-testid="button-theme-toggle"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button onClick={handleDownload} data-testid="button-download-header">
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t" data-testid="mobile-menu">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-3 py-2 text-base font-medium hover-elevate active-elevate-2 rounded-md"
                data-testid={`link-mobile-${item.href}`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={handleDownload}
              className="w-full mt-4"
              data-testid="button-download-mobile"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
