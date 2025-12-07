import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { WorkforceSection } from "@/components/sections/WorkforceSection";
import { MachinerySection } from "@/components/sections/MachinerySection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <ClientsSection />
        <WorkforceSection />
        <MachinerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
