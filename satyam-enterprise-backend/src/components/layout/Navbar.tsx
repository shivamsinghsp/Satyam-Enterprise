import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#clients", label: "Clients" },
  { href: "#workforce", label: "Workforce" },
  { href: "#machinery", label: "Machinery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-copper rounded-lg flex items-center justify-center shadow-copper group-hover:scale-105 transition-transform">
                <span className="text-primary-foreground font-display font-bold text-xl"> 
                <img 
                 src="/Logo.png" 
                  alt="Satyam Enterprise logo featuring stylized copper and black elements with the text SATYAM ENTERPRISE in bold, conveying professionalism and reliability" 
                  className="w-11 h-11"
                    
                />
                </span>
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-xl text-foreground">SATYAM</span>
              <span className="block text-xs text-copper uppercase tracking-widest">Enterprise</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-copper transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919800000000" className="flex items-center gap-2 text-copper hover:text-copper-light transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+91 98XXX XXXXX</span>
            </a>
            <Button variant="hero" size="sm" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-copper transition-colors uppercase tracking-wider py-2"
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" className="mt-4" onClick={() => {
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              setIsOpen(false);
            }}>
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
