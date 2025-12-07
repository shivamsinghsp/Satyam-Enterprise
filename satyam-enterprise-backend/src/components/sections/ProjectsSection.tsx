import { useState } from "react";
import { Calendar, MapPin, Building, CheckCircle2, Clock, Wrench } from "lucide-react";
import { projects } from "@/data/companyData";
import { cn } from "@/lib/utils";

const categories = ["All", "Boiler", "Piping", "Structure", "Plant Project"];

const statusConfig = {
  COMPLETED: { label: "Completed", icon: CheckCircle2, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  IN_PROGRESS: { label: "In Progress", icon: Clock, color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
  PLANNED: { label: "Planned", icon: Wrench, color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
};

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-navy-light relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-copper/10 border border-copper/20 rounded-full text-copper text-sm font-medium mb-4">
            Our Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient-copper">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our track record of successful mechanical engineering projects across various industries.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category
                  ? "bg-gradient-copper text-primary-foreground shadow-copper"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const status = statusConfig[project.status];
            const StatusIcon = status.icon;
            
            return (
              <div
                key={project.id}
                className="group bg-gradient-card border border-border rounded-2xl overflow-hidden hover:border-copper/50 transition-all duration-300 hover:shadow-copper"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image Placeholder */}
                <div className="relative h-48 bg-muted overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-copper/20 to-navy flex items-center justify-center">
                    <Building className="w-16 h-16 text-copper/30" />
                  </div>
                  {/* Status Badge */}
                  <span className={cn(
                    "absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border",
                    status.color
                  )}>
                    <StatusIcon className="w-3.5 h-3.5" />
                    {status.label}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-copper/10 text-copper text-xs font-medium rounded-full mb-3">
                    {project.category}
                  </span>
                  
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-copper transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm">
                      <Building className="w-4 h-4 text-copper" />
                      <span className="text-muted-foreground">{project.clientName}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-copper" />
                      <span className="text-muted-foreground">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-copper" />
                      <span className="text-muted-foreground">
                        {project.startDate} {project.endDate && `- ${project.endDate}`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
