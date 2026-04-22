import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PROJECTS_DATA } from "@/app/projects/data";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import Link from "next/link";

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = PROJECTS_DATA.find((item) => item.id.toString() === id);

  if (!project) {
    return (
      <div className="p-8 md:p-12">
        <h1 className="text-2xl font-semibold">Proyek tidak ditemukan</h1>
        <p className="text-muted-foreground mt-3">Silakan kembali ke halaman proyek dan pilih item yang tersedia.</p>
      </div>
    );
  }

  const carouselImages = project.images.length > 0 ? project.images : [project.image];

  return (
    <div className="p-8 md:p-12 pb-24 space-y-8">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors">
          Kembali ke Proyek
        </Link>
      </div>

      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Detail Proyek</p>
        <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">{project.description}</p>
      </section>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] ">
        <Card className="overflow-hidden border border-border/50 bg-card w-[46rem]">
          <ProjectCarousel images={carouselImages} title={project.title} />
          <CardContent className="space-y-6 p-6">
            <section className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Deskripsi</p>
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              {project.detail && (
                <p className="text-sm text-muted-foreground leading-relaxed">{project.detail}</p>
              )}
            </section>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/60 bg-background p-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Tipe</p>
                <p className="mt-2 font-semibold">{project.type}</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background p-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Kategori</p>
                <p className="mt-2 font-semibold">{project.category}</p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-muted/60 text-[10px] font-mono px-2 py-0">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-3">
              <a href={project.link} className="rounded-full border border-border/60 px-4 py-2 text-sm transition hover:bg-muted">
                Demo Langsung
              </a>
              <a href={project.github} className="rounded-full border border-border/60 px-4 py-2 text-sm transition hover:bg-muted">
                Kode Sumber
              </a>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4 ">
          <Card className="border border-border/50 bg-card p-6 w-[18rem]">
            <h2 className="text-lg font-semibold mb-3">Apa yang ditampilkan</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary" aria-hidden="true">-</span>
                Menampilkan tampilan halaman yang relevan untuk proyek MicroSayur.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary" aria-hidden="true">-</span>
                Deskripsi, detail, dan stack teknologi untuk membantu pengunjung memahami fitur utama.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-primary" aria-hidden="true">-</span>
                Thumbnail beranda digunakan sebagai representasi utama proyek.
              </li>
            </ul>
          </Card>

          <Card className="border border-border/50 bg-card p-6">
            <div className="text-sm text-muted-foreground mb-3">Project Info</div>
            <div className="grid gap-3 text-sm">
              <div className="rounded-2xl border border-border/60 bg-background p-4">
                <p className="text-muted-foreground text-[11px]">ID Proyek</p>
                <p className="mt-1 font-semibold">{project.id}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
