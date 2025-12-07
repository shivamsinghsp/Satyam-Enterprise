import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { companyInfo, services } from "@/data/companyData";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const mainServices = services.slice(0, 6);

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-copper rounded-lg flex items-center justify-center shadow-copper">
                <span className="text-primary-foreground font-display font-bold text-xl">SE</span>
              </div>
              <div>
                <span className="font-display font-bold text-xl text-foreground">SATYAM</span>
                <span className="block text-xs text-copper uppercase tracking-widest">Enterprise</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              {companyInfo.description}
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="text-copper">Founded by:</span> {companyInfo.founder}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Services", "Projects", "Clients", "Workforce", "Machinery", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-copper transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {mainServices.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-copper transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
                <a href={`mailto:${companyInfo.email}`} className="text-muted-foreground hover:text-copper transition-colors text-sm">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
                <a href={`tel:${companyInfo.phone}`} className="text-muted-foreground hover:text-copper transition-colors text-sm">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-copper flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  {companyInfo.address}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          
          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-copper transition-colors group"
          >
            Back to top
            <div className="w-8 h-8 rounded-full border border-border group-hover:border-copper group-hover:bg-copper/10 flex items-center justify-center transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
