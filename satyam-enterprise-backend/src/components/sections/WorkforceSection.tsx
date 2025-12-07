import { Users, Briefcase, HardHat, UserCheck } from "lucide-react";
import { workforceRoles } from "@/data/companyData";

const categoryIcons = {
  Office: Briefcase,
  Field: HardHat,
  Supervision: UserCheck,
};

const categoryColors = {
  Office: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Field: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Supervision: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

export function WorkforceSection() {
  const totalWorkforce = workforceRoles.reduce((sum, role) => sum + role.count, 0);
  
  const groupedRoles = {
    Supervision: workforceRoles.filter(r => r.category === "Supervision"),
    Field: workforceRoles.filter(r => r.category === "Field"),
    Office: workforceRoles.filter(r => r.category === "Office"),
  };

  return (
    <section id="workforce" className="py-24 bg-navy-light relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-copper/10 border border-copper/20 rounded-full text-copper text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skilled <span className="text-gradient-copper">Workforce</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our strength lies in our skilled and experienced team of professionals dedicated to delivering excellence.
          </p>
        </div>

        {/* Total Count Hero */}
        <div className="max-w-md mx-auto mb-16">
          <div className="relative bg-gradient-card border border-copper/30 rounded-3xl p-8 text-center shadow-glow">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-copper rounded-xl flex items-center justify-center shadow-copper">
              <Users className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="pt-4">
              <div className="text-6xl font-display font-bold text-gradient-copper mb-2">
                {totalWorkforce}+
              </div>
              <div className="text-lg text-muted-foreground">Total Team Members</div>
            </div>
          </div>
        </div>

        {/* Workforce Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {(Object.keys(groupedRoles) as Array<keyof typeof groupedRoles>).map((category) => {
            const IconComponent = categoryIcons[category];
            const categoryTotal = groupedRoles[category].reduce((sum, r) => sum + r.count, 0);
            
            return (
              <div key={category} className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${categoryColors[category]}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">{category}</h3>
                    <span className="text-sm text-muted-foreground">{categoryTotal} Members</span>
                  </div>
                </div>

                {/* Roles List */}
                <div className="space-y-3">
                  {groupedRoles[category].map((role) => (
                    <div
                      key={role.id}
                      className="flex items-center justify-between p-4 bg-gradient-card border border-border rounded-xl hover:border-copper/30 transition-colors"
                    >
                      <div>
                        <span className="font-medium text-foreground">{role.roleName}</span>
                        {role.description && (
                          <p className="text-xs text-muted-foreground mt-0.5">{role.description}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-display font-bold text-copper">{role.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
