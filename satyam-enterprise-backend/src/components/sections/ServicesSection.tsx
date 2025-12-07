import { 
  Shield, Wrench, Gauge, Flame, Factory, Layers, 
  GitBranch, Building2, Cylinder, Cog, FileCheck,
  FireExtinguisher, ArrowRight
} from "lucide-react";
import { services } from "@/data/companyData";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield, Wrench, Gauge, Flame, Factory, Layers,
  GitBranch, Building2, Cylinder, Cog, FileCheck,
  FireExtinguisher,
};

const categoryColors: Record<string, string> = {
  Boiler: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Piping: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Structure: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Plant Project": "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 border border-copper rounded-full" />
        <div className="absolute top-40 right-40 w-64 h-64 border border-copper rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 border border-copper/20 rounded-full text-copper text-sm font-medium mb-4">
            Our Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive <span className="text-gradient-copper">Mechanical Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From boiler installations to complete plant projects, we deliver end-to-end mechanical engineering solutions with precision and reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Cog;
            return (
              <div
                key={service.id}
                className="group relative bg-gradient-card border border-border rounded-2xl p-6 hover:border-copper/50 transition-all duration-300 hover:shadow-copper hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Category Badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-4 ${categoryColors[service.category]}`}>
                  {service.category}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 bg-copper/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-copper/20 transition-colors">
                  <IconComponent className="w-7 h-7 text-copper" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-copper transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                {/* Hover Reveal */}
                <div className="flex items-center gap-2 text-copper opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Discuss Your Requirements
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
