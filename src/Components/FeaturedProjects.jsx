import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github } from "lucide-react";

const projects = [
  {
    name: "Permits Check Platform",
    problem:
      "Digitizing inefficient government permit workflows into a secure, role-based online system.",
    stack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "TailwindCSS",
    ],
    outcomes: [
      "Reduced manual permit processing steps by ~70%",
      "Implemented role-based workflows for multi-level approvals",
      "Designed scalable architecture supporting concurrent users",
    ],
    github: "https://github.com/njoroofficial/Permits-Check-Platform",
  },
  {
    name: "Neighborly",
    problem:
      "Connecting neighbors in real-time to strengthen hyperlocal community collaboration.",
    stack: ["Next.js", "React", "Leaflet / Maps", "Realtime updates", "REST APIs"],
    outcomes: [
      "Implemented real-time help-request updates",
      "Optimized map rendering performance for dynamic markers",
      "Designed community-first UX for trust-driven interaction",
    ],
    github: "https://github.com/njoroofficial/Neighborly",
  },
  {
    name: "Local Encryption System (LESMS)",
    problem:
      "Providing secure local file encryption and vault management to protect sensitive user data.",
    stack: ["React", "ElectronJS", "Node.js", "CryptoJS", "Supabase"],
    outcomes: [
      "AES-based encryption for local file security",
      "Secure key management and vault isolation",
      "Cross-platform desktop packaging with Electron",
    ],
    github: "https://github.com/njoroofficial/Local_Encryption_System",
  },
  {
    name: "Dev Event",
    problem:
      "Streamlining developer event organization, registration, and attendee engagement.",
    stack: ["Next.js", "React", "TailwindCSS", "API Routes", "Authentication"],
    outcomes: [
      "Modular event creation & registration flow",
      "Optimized dynamic routing for event detail pages",
      "Built reusable UI system for scalable event listings",
    ],
    github: "https://github.com/njoroofficial/Dev-event",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A selection of production-grade applications solving real-world
            problems in government digitization, community systems, security
            engineering, and developer tooling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.name}
              className="h-full flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.name}</CardTitle>
                <CardDescription>{project.problem}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-5 flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={`${project.name}-${tech}`} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  {project.outcomes.map((outcome) => (
                    <li key={`${project.name}-${outcome}`}>{outcome}</li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>

              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
