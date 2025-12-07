import { clients } from "@/data/companyData";
import { Building2 } from "lucide-react";

export function ClientsSection() {
  return (
    <section id="clients" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-copper to-transparent" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-copper to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-copper to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 border border-copper/20 rounded-full text-copper text-sm font-medium mb-4">
            Trusted Partners
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Valued <span className="text-gradient-copper">Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We are proud to serve leading companies in Pharmaceutical, Chemical, and Engineering industries.
          </p>
        </div>

        {/* Industry Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="px-6 py-2 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full text-sm font-medium">
            Pharmaceutical
          </span>
          <span className="px-6 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-sm font-medium">
            Chemical
          </span>
          <span className="px-6 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-sm font-medium">
            Engineering
          </span>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className="group relative bg-gradient-card border border-border rounded-xl p-6 hover:border-copper/50 transition-all duration-300 hover:shadow-copper text-center"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Logo Placeholder */}
              <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-xl flex items-center justify-center group-hover:bg-copper/10 transition-colors">
                <Building2 className="w-8 h-8 text-muted-foreground group-hover:text-copper transition-colors" />
              </div>
              
              <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-copper transition-colors">
                {client.name}
              </h3>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                {client.industry}
              </span>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-card border border-border rounded-2xl">
            <div className="flex -space-x-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-copper border-2 border-background flex items-center justify-center"
                >
                  <span className="text-primary-foreground text-xs font-bold">{i + 1}</span>
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-display font-bold text-copper">100+</div>
              <div className="text-sm text-muted-foreground">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
