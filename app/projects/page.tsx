"use client";

import {
  Code,
  Globe,
  DeviceMobile,
  GithubLogo,
  ArrowSquareOut,
  AppWindow,
  Briefcase,
  Trophy,
  User,
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// ==========================================
// 1. DATA (Source of Truth)
// ==========================================
const PROJECTS_DATA = [
  {
    id: 1,
    title: "satriabahari.my.id",
    description: "Personal website & portfolio, built from scratch using Next.js, TypeScript, TailwindCSS...",
    image: "https://placehold.co/600x400/18181b/ffffff?text=Portfolio+Project",
    type: "Web",
    category: "Personal Project",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    link: "https://satriabahari.my.id",
    github: "#",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Presence Internal System",
    description: "The Presence Internal System is a custom-built attendance tracking backend developed for...",
    image: "https://placehold.co/600x400/064e3b/ffffff?text=Presence+System",
    type: "Web",
    category: "Internship",
    tech: ["Go", "PostgreSQL", "Kafka", "Redis"],
    link: "#",
    github: "#",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Berbagi.link",
    description: "Berbagi.link is a mini-website platform for online businesses but lacks mobile features...",
    image: "https://placehold.co/600x400/0ea5e9/ffffff?text=Berbagi.link",
    type: "Mobile",
    category: "Personal Project",
    tech: ["Kotlin", "Android SDK", "Firebase"],
    link: "#",
    github: "#",
    isFeatured: false,
  },
  {
    id: 4,
    title: "Robust Fitness",
    description: "Robust Fitness is a platform designed to help users achieve their fitness goals...",
    image: "https://placehold.co/600x400/7f1d1d/ffffff?text=Robust+Fitness",
    type: "Web",
    category: "Freelance",
    tech: ["PHP", "Laravel", "MySQL", "Tailwind"],
    link: "#",
    github: "#",
    isFeatured: false,
  },
];

// ==========================================
// 2. MAIN COMPONENT (Fungsi Utama)
// ==========================================
export default function ProjectsPage() {
  return (
    <div className="p-8 md:p-12 pb-24 space-y-10">
      {/* HEADER */}
      <section>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Projects</h1>
        <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
          A showcase of both private and open-source projects I've built or contributed to.
        </p>
      </section>

      <div className="border-t border-dashed border-border" />

      {/* PROJECT GRID (Mapping Data) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
}

// ==========================================
// 3. HELPER COMPONENTS (Biar tidak "pusing")
// ==========================================

function ProjectCard({ project }: { project: typeof PROJECTS_DATA[0] }) {
  return (
    <Card className="group overflow-hidden border border-border/50 bg-card hover:shadow-xl hover:border-primary/20 transition-all duration-300">
      <div className="relative h-56 overflow-hidden bg-muted">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {project.isFeatured && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-yellow-400 text-yellow-950 px-3 py-1 rounded-full text-[10px] font-bold shadow-lg">
            <Trophy weight="fill" className="w-3 h-3" />
            FEATURED
          </div>
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
           <a href={project.github} className="p-3 bg-background rounded-full hover:scale-110 transition-transform"><GithubLogo size={20} /></a>
           <a href={project.link} className="p-3 bg-background rounded-full hover:scale-110 transition-transform"><ArrowSquareOut size={20} /></a>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary" className="bg-muted/50 text-[10px] font-mono px-2 py-0">
              {t}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-muted">
           <div className="flex items-center gap-3 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
              <span className="flex items-center gap-1">
                {project.type === "Web" ? <Globe size={14} /> : <DeviceMobile size={14} />}
                {project.type}
              </span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
              <span className="flex items-center gap-1">
                <Briefcase size={14} />
                {project.category}
              </span>
           </div>
        </div>
      </CardContent>
    </Card>
  );
}
