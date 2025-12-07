// SATYAM ENTERPRISE - Company Data

export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  detailedDescription: string;
  category: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  clientName: string;
  industry: string;
  location: string;
  category: string;
  description: string;
  status: 'PLANNED' | 'IN_PROGRESS' | 'COMPLETED';
  startDate: string;
  endDate?: string;
  imageUrl?: string;
}

export interface Client {
  id: string;
  name: string;
  industry: string;
  logoUrl?: string;
  website?: string;
  description?: string;
  priority: number;
}

export interface WorkforceRole {
  id: string;
  roleName: string;
  count: number;
  description?: string;
  category: 'Office' | 'Field' | 'Supervision';
}

export interface Machine {
  id: string;
  name: string;
  capacity: string;
  quantity: number;
  description?: string;
  category: 'Lifting' | 'Welding' | 'Cutting' | 'Grinding' | 'Accessories';
}

export const companyInfo = {
  name: "SATYAM ENTERPRISE",
  tagline: "Engineering Excellence in Every Weld",
  founder: "Mr. Bipin Yadav",
  description: "Premier Mechanical Engineering Contractor & Service Provider specializing in industrial boiler works, piping systems, structural fabrication, and complete plant solutions.",
  established: "2010",
  email: "satyam.ent68@gmail.com",
  phone: "+91 98XXX XXXXX",
  address: "Industrial Area, Gujarat, India",
};

export const services: Service[] = [
  {
    id: "1",
    name: "I.B.R Work",
    shortDescription: "Certified Indian Boiler Regulation work",
    detailedDescription: "Complete IBR certified boiler fabrication, repair and maintenance services adhering to all statutory requirements and safety standards.",
    category: "Boiler",
    icon: "Shield",
  },
  {
    id: "2",
    name: "Boiler Repair & Services",
    shortDescription: "Comprehensive boiler maintenance",
    detailedDescription: "Expert repair and maintenance services for all types of industrial boilers including water tube, fire tube, and package boilers.",
    category: "Boiler",
    icon: "Wrench",
  },
  {
    id: "3",
    name: "Boiler Operation",
    shortDescription: "Professional boiler operation services",
    detailedDescription: "Trained and certified boiler operators for efficient and safe boiler operations at your facility.",
    category: "Boiler",
    icon: "Gauge",
  },
  {
    id: "4",
    name: "Boiler Refractory",
    shortDescription: "Refractory lining and repair",
    detailedDescription: "High-quality refractory installation, repair, and maintenance for boilers and furnaces.",
    category: "Boiler",
    icon: "Flame",
  },
  {
    id: "5",
    name: "MEE Plant Works",
    shortDescription: "Multi-Effect Evaporator solutions",
    detailedDescription: "Complete MEE plant installation, maintenance, and repair services for various industries.",
    category: "Plant Project",
    icon: "Factory",
  },
  {
    id: "6",
    name: "Insulation Work",
    shortDescription: "Thermal insulation services",
    detailedDescription: "Professional thermal insulation for pipelines, tanks, vessels, and equipment to optimize energy efficiency.",
    category: "Piping",
    icon: "Layers",
  },
  {
    id: "7",
    name: "MS & SS Piping",
    shortDescription: "Mild Steel & Stainless Steel piping",
    detailedDescription: "Complete piping solutions in MS and SS materials for process, utility, and industrial applications.",
    category: "Piping",
    icon: "GitBranch",
  },
  {
    id: "8",
    name: "Structure & Shed Fabrication",
    shortDescription: "Structural steel fabrication",
    detailedDescription: "Design and fabrication of industrial structures, storage sheds, platforms, and support frameworks.",
    category: "Structure",
    icon: "Building2",
  },
  {
    id: "9",
    name: "Firefighting Piping",
    shortDescription: "Fire safety piping systems",
    detailedDescription: "Complete firefighting piping network installation including sprinkler systems and hydrant lines.",
    category: "Piping",
    icon: "FireExtinguisher",
  },
  {
    id: "10",
    name: "Tanks & Reactors",
    shortDescription: "Process vessel fabrication",
    detailedDescription: "Custom fabrication of storage tanks, reactors, condensers, and process vessels in various materials.",
    category: "Structure",
    icon: "Cylinder",
  },
  {
    id: "11",
    name: "Equipment Erection",
    shortDescription: "Heavy machinery installation",
    detailedDescription: "Professional erection and installation of heavy equipment and industrial machinery with precision alignment.",
    category: "Plant Project",
    icon: "Cog",
  },
  {
    id: "12",
    name: "Annual Maintenance Contract",
    shortDescription: "Comprehensive AMC services",
    detailedDescription: "Year-round maintenance contracts covering preventive and breakdown maintenance for all mechanical systems.",
    category: "Boiler",
    icon: "FileCheck",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "20 TPH Boiler Installation",
    clientName: "INTAS Pharmaceuticals",
    industry: "Pharmaceutical",
    location: "Ahmedabad, Gujarat",
    category: "Boiler",
    description: "Complete installation and commissioning of 20 TPH capacity industrial boiler with all auxiliaries.",
    status: "COMPLETED",
    startDate: "2023-01",
    endDate: "2023-06",
  },
  {
    id: "2",
    title: "SS Piping Network - API Unit",
    clientName: "Glenmark Pharmaceuticals",
    industry: "Pharmaceutical",
    location: "Ankleshwar, Gujarat",
    category: "Piping",
    description: "Stainless steel process piping installation for Active Pharmaceutical Ingredient manufacturing unit.",
    status: "COMPLETED",
    startDate: "2023-03",
    endDate: "2023-08",
  },
  {
    id: "3",
    title: "MEE Plant Erection",
    clientName: "LUPIN Limited",
    industry: "Pharmaceutical",
    location: "Vadodara, Gujarat",
    category: "Plant Project",
    description: "Multi-Effect Evaporator plant complete erection including all civil and mechanical works.",
    status: "COMPLETED",
    startDate: "2022-06",
    endDate: "2023-01",
  },
  {
    id: "4",
    title: "Storage Shed Construction",
    clientName: "Forbes Marshall",
    industry: "Engineering",
    location: "Pune, Maharashtra",
    category: "Structure",
    description: "Pre-engineered metal building with 5000 sq.m covered area for industrial storage.",
    status: "COMPLETED",
    startDate: "2023-02",
    endDate: "2023-05",
  },
  {
    id: "5",
    title: "Boiler Overhaul & Refractory",
    clientName: "Cadila Healthcare",
    industry: "Pharmaceutical",
    location: "Dholka, Gujarat",
    category: "Boiler",
    description: "Complete overhaul of 15 TPH boiler including tube replacement and refractory relining.",
    status: "IN_PROGRESS",
    startDate: "2024-01",
  },
  {
    id: "6",
    title: "Firefighting Network Installation",
    clientName: "Aarti Industries",
    industry: "Chemical",
    location: "Vapi, Gujarat",
    category: "Piping",
    description: "Complete firefighting piping network with sprinkler system for chemical plant expansion.",
    status: "IN_PROGRESS",
    startDate: "2024-02",
  },
];

export const clients: Client[] = [
  { id: "1", name: "INTAS Pharmaceuticals", industry: "Pharmaceutical", priority: 1 },
  { id: "2", name: "Glenmark Pharmaceuticals", industry: "Pharmaceutical", priority: 2 },
  { id: "3", name: "LUPIN Limited", industry: "Pharmaceutical", priority: 3 },
  { id: "4", name: "Forbes Marshall", industry: "Engineering", priority: 4 },
  { id: "5", name: "Cadila Healthcare", industry: "Pharmaceutical", priority: 5 },
  { id: "6", name: "Aarti Industries", industry: "Chemical", priority: 6 },
  { id: "7", name: "Sun Pharma", industry: "Pharmaceutical", priority: 7 },
  { id: "8", name: "Thermax Limited", industry: "Engineering", priority: 8 },
  { id: "9", name: "Alembic Pharmaceuticals", industry: "Pharmaceutical", priority: 9 },
  { id: "10", name: "UPL Limited", industry: "Chemical", priority: 10 },
  { id: "11", name: "Zydus Lifesciences", industry: "Pharmaceutical", priority: 11 },
  { id: "12", name: "Gujarat Fluorochemicals", industry: "Chemical", priority: 12 },
];

export const workforceRoles: WorkforceRole[] = [
  { id: "1", roleName: "Site In-charge", count: 4, category: "Supervision", description: "Overall site supervision and coordination" },
  { id: "2", roleName: "Supervisor", count: 8, category: "Supervision", description: "Team supervision and quality control" },
  { id: "3", roleName: "Fabricator", count: 25, category: "Field", description: "Metal fabrication and assembly specialists" },
  { id: "4", roleName: "Arc Welder", count: 20, category: "Field", description: "Certified arc welding technicians" },
  { id: "5", roleName: "MIG Welder", count: 15, category: "Field", description: "MIG/MAG welding specialists" },
  { id: "6", roleName: "TIG Welder", count: 12, category: "Field", description: "TIG welding for precision work" },
  { id: "7", roleName: "Rigger", count: 10, category: "Field", description: "Heavy equipment rigging specialists" },
  { id: "8", roleName: "Fitter", count: 18, category: "Field", description: "Mechanical fitting and assembly" },
  { id: "9", roleName: "Helper", count: 30, category: "Field", description: "General assistance and support" },
  { id: "10", roleName: "Office Staff", count: 6, category: "Office", description: "Administrative and coordination" },
];

export const machines: Machine[] = [
  { id: "1", name: "Hydra Crane", capacity: "14 Tons", quantity: 2, category: "Lifting", description: "Mobile hydraulic crane for heavy lifting" },
  { id: "2", name: "Chain Pulley Block", capacity: "1-5 Tons", quantity: 15, category: "Lifting", description: "Manual chain hoists for material handling" },
  { id: "3", name: "Welding Rectifier", capacity: "400 Amp", quantity: 25, category: "Welding", description: "Industrial welding power source" },
  { id: "4", name: "MIG Welding Machine", capacity: "350 Amp", quantity: 15, category: "Welding", description: "MIG/MAG welding equipment" },
  { id: "5", name: "TIG Welding Machine", capacity: "300 Amp", quantity: 10, category: "Welding", description: "Precision TIG welding sets" },
  { id: "6", name: "Plasma Cutting Machine", capacity: "100 Amp", quantity: 4, category: "Cutting", description: "CNC plasma cutting equipment" },
  { id: "7", name: "Gas Cutting Set", capacity: "Standard", quantity: 20, category: "Cutting", description: "Oxy-acetylene cutting equipment" },
  { id: "8", name: "Angle Grinder 4\"", capacity: "4 inch", quantity: 30, category: "Grinding", description: "Portable angle grinders" },
  { id: "9", name: "Angle Grinder 7\"", capacity: "7 inch", quantity: 20, category: "Grinding", description: "Heavy-duty angle grinders" },
  { id: "10", name: "Drill Machine", capacity: "13mm", quantity: 15, category: "Accessories", description: "Electric drill machines" },
  { id: "11", name: "Pipe Threading Machine", capacity: "2 inch", quantity: 5, category: "Accessories", description: "Pipe threading equipment" },
  { id: "12", name: "Pipe Bending Machine", capacity: "4 inch", quantity: 3, category: "Accessories", description: "Hydraulic pipe benders" },
];

export const stats = [
  { label: "Years Experience", value: "14+" },
  { label: "Projects Completed", value: "500+" },
  { label: "Happy Clients", value: "100+" },
  { label: "Team Members", value: "150+" },
];
