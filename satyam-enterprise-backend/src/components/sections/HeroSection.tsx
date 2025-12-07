import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats, companyInfo } from "@/data/companyData";
import heroImage from "@/assets/hero-industrial.jpg";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Industrial mechanical engineering"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-copper/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-copper/10 rounded-full blur-2xl animate-float" />

      <div className="container relative mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-copper/10 border border-copper/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-copper rounded-full animate-pulse" />
              <span className="text-sm text-copper font-medium">Established Since 2010</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-foreground">Engineering</span>
              <br />
              <span className="text-gradient-copper">Excellence</span>
              <br />
              <span className="text-foreground">in Every Weld</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {companyInfo.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Request a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Play className="w-5 h-5" />
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center md:text-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-copper mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-br from-copper/20 to-transparent rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-card border border-border rounded-3xl p-8 shadow-glow">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-copper rounded-2xl flex items-center justify-center shadow-copper">
                  <span className="font-display font-bold text-4xl text-primary-foreground">SE</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {companyInfo.name}
                </h3>
                <p className="text-muted-foreground mb-6">Founded by {companyInfo.founder}</p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <span className="text-copper">✓</span>
                    <span className="text-sm text-foreground">IBR Certified Services</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <span className="text-copper">✓</span>
                    <span className="text-sm text-foreground">150+ Skilled Workforce</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <span className="text-copper">✓</span>
                    <span className="text-sm text-foreground">Turnkey Project Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-copper/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-copper rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
