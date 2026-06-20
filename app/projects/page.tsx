import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PROJECTS_DATA } from "@/app/projects/data";

export default function ProjectsPage() {
  return (
    <div className="px-12 py-10 md:px-24 md:py-16 pb-28 space-y-12">
      <section>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Project Us</h1>
        <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
          Berikut ini adalah beberapa proyek yang telah kami bikin sebagai bahan portofolio kami. Proyek-proyek ini dapat memberikan gambaran tentang kemampuan teknis dan kreativitas kami dalam mengembangkan solusi digital.
        </p>
      </section>

      <div className="border-t border-dashed border-border" />

      <section className="grid grid-cols-1 gap-8">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
}

function ProjectCard({ project }: { project: typeof PROJECTS_DATA[0] }) {
  return (
    <a
      href={`/projects/${project.id}`}
      className="group grid overflow-hidden rounded-3xl border border-border/50 bg-card hover:shadow-xl hover:border-primary/20 transition-all duration-300 md:grid-cols-[minmax(280px,42%)_1fr]"
    >
      <div className="relative h-64 overflow-hidden bg-muted md:h-full md:min-h-72">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <CardContent className="px-10 py-8 space-y-5 md:px-12 md:py-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 pt-3">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary" className="bg-muted/50 text-[10px] font-mono px-2 py-0">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
    </a>
  );
}
