import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PROJECTS_DATA } from "@/app/projects/data";

export default function ProjectsPage() {
  return (
    <div className="p-8 md:p-12 pb-24 space-y-10">
      <section>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Proyek MicroSayur</h1>
        <p className="text-muted-foreground text-sm max-w-2xl leading-relaxed">
          Menampilkan tiga tampilan MicroSayur dengan satu screenshot beranda sebagai thumbnail utama untuk mendeskripsikan keseluruhan proyek.
        </p>
      </section>

      <div className="border-t border-dashed border-border" />

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
      className="group block overflow-hidden rounded-3xl border border-border/50 bg-card hover:shadow-xl hover:border-primary/20 transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <CardContent className="p-6 space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary" className="bg-muted/50 text-[10px] font-mono px-2 py-0">
              {t}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-muted text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <span>{project.type}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
            <span>{project.category}</span>
          </div>
          <span className="text-xs text-primary">Lihat detail</span>
        </div>
      </CardContent>
    </a>
  );
}
