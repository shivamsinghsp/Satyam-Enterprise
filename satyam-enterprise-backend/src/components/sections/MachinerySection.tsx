import { useState } from "react";
import { Wrench, Zap, Scissors, CircleDot, Package } from "lucide-react";
import { machines } from "@/data/companyData";
import { cn } from "@/lib/utils";

const categoryConfig = {
  Lifting: { icon: Package, color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  Welding: { icon: Zap, color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
  Cutting: { icon: Scissors, color: "bg-red-500/10 text-red-400 border-red-500/20" },
  Grinding: { icon: CircleDot, color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  Accessories: { icon: Wrench, color: "bg-purple-500/10 text-purple-400 border-purple-500/20" },
};

const categories = ["All", "Lifting", "Welding", "Cutting", "Grinding", "Accessories"];

export function MachinerySection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMachines = activeCategory === "All" 
    ? machines 
    : machines.filter(m => m.category === activeCategory);

  const totalEquipment = machines.reduce((sum, m) => sum + m.quantity, 0);

  return (
    <section id="machinery" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Decorative gear pattern */}
      <div className="absolute top-20 right-10 w-32 h-32 border-2 border-copper/10 rounded-full opacity-50" />
      <div className="absolute bottom-20 left-10 w-24 h-24 border-2 border-copper/10 rounded-full opacity-50" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-copper/10 border border-copper/20 rounded-full text-copper text-sm font-medium mb-4">
            Equipment & Tools
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient-copper">Machinery</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            State-of-the-art equipment and tools to handle any mechanical engineering challenge.
          </p>

          {/* Total Count */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-card border border-copper/30 rounded-xl">
            <span className="text-3xl font-display font-bold text-copper">{totalEquipment}+</span>
            <span className="text-muted-foreground">Pieces of Equipment</span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-gradient-copper text-primary-foreground shadow-copper"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Machinery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMachines.map((machine, index) => {
            const config = categoryConfig[machine.category as keyof typeof categoryConfig];
            const IconComponent = config?.icon || Wrench;
            
            return (
              <div
                key={machine.id}
                className="group bg-gradient-card border border-border rounded-2xl p-6 hover:border-copper/50 transition-all duration-300 hover:shadow-copper"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Category Badge */}
                <span className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border mb-4",
                  config?.color
                )}>
                  <IconComponent className="w-3.5 h-3.5" />
                  {machine.category}
                </span>

                {/* Content */}
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-copper transition-colors">
                  {machine.name}
                </h3>
                
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-muted-foreground text-sm">Capacity:</span>
                  <span className="text-copper font-medium">{machine.capacity}</span>
                </div>

                {machine.description && (
                  <p className="text-muted-foreground text-xs mb-4">
                    {machine.description}
                  </p>
                )}

                {/* Quantity Badge */}
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Quantity</span>
                  <span className="text-2xl font-display font-bold text-copper">{machine.quantity}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
