"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  FileHtml,
  FileCss,
  FileJs,
  FileTs,
  Atom,
  Database,
  PaintBrush,
  BracketsCurly,
  Hexagon,
  GithubLogo,
  ArrowSquareOut,
  Envelope,
  Calendar
} from "@phosphor-icons/react";

// ================= DATA =================
const SKILLS_DATA = [
  { icon: <FileHtml className="text-orange-600" />, label: "HTML", className: "bg-orange-100 text-orange-700", category: "Frontend" },
  { icon: <FileCss className="text-blue-600" />, label: "CSS", className: "bg-blue-100 text-blue-700", category: "Frontend" },
  { icon: <PaintBrush className="text-cyan-600" />, label: "TailwindCSS", className: "bg-cyan-100 text-cyan-700", category: "Frontend" },
  { icon: <BracketsCurly className="text-red-600" />, label: "Laravel", className: "bg-red-100 text-red-700", category: "Backend" },
  { icon: <Atom className="text-emerald-600" />, label: "Vue.js", className: "bg-emerald-100 text-emerald-700", category: "Frontend" },
  { icon: <FileJs className="text-yellow-600" />, label: "JavaScript", className: "bg-yellow-100 text-yellow-700", category: "Main" },
  { icon: <FileTs className="text-blue-700" />, label: "TypeScript", className: "bg-blue-50 text-blue-800", category: "Main" },
  { icon: <Atom className="text-cyan-500" />, label: "React.js", className: "bg-cyan-50 text-cyan-800", category: "Main" },
  { icon: <span className="font-bold">N</span>, label: "Next.js", className: "bg-neutral-100 text-neutral-800", category: "Main" },
  { icon: <Hexagon className="text-green-600" />, label: "Node.js", className: "bg-green-100 text-green-800", category: "Backend" },
  { icon: <Database className="text-blue-500" />, label: "PostgreSQL", className: "bg-blue-50 text-blue-700", category: "Database" },
];

const CATEGORIES = ["Semua", "Main", "Frontend", "Backend", "Database"];

// ================= MAIN COMPONENT =================
export function HomeContent() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredSkills = activeCategory === "Semua"
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeCategory);

  return (
    <div className="p-8 md:p-12 pb-24 space-y-12">
      {/* 1. HERO SECTION */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Hi, saya Reyhan Maulana</h1>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
         Seorang Software Engineer yang berdedikasi dalam membangun solusi digital berdampak luas. Saya spesialis dalam mengembangkan platform web skalabel menggunakan Laravel dan Next.js, serta aplikasi mobile multi-platform berbasis Flutter.

Fokus utama saya adalah merancang arsitektur perangkat lunak yang terstruktur, mudah dipelihara, dan selaras dengan tujuan bisnis. Saya memadukan keahlian teknis dengan komunikasi proaktif untuk memastikan setiap proyek memberikan kejelasan logika serta dampak nyata bagi pengguna.
        </p>
      </section>

      <Separator />

      {/* 2. SKILLS SECTION */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Code weight="bold" /> Skills
        </h2>

        {/* Filter Badges */}
        <div className="flex gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <FilterBadge
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>

        {/* Skill Pills */}
        <div className="flex flex-wrap gap-4">
          {filteredSkills.map((skill, i) => (
            <SkillPill key={i} {...skill} />
          ))}
        </div>
      </section>

      <Separator />

      {/* 3. GITHUB ACTIVITY SECTION (Polished Style) */}
      <GithubActivitySection username="rerey155-del" />

      <section className="pt-6">
        <div className="relative overflow-hidden bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 p-8 md:p-12 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center space-y-6 shadow-sm">
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Atom size={200} weight="bold" />
          </div>
          <div className="space-y-3 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Ready to Collaborate?</h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
              I'm always interested in hearing about new projects and opportunities. 
              Let's create something amazing together!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10 pt-4">
            <a 
              href="mailto:reyhan@example.com"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg"
            >
              <Envelope size={20} weight="bold" /> Send an Email
            </a>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-6 py-3 rounded-full font-bold text-sm transition-all hover:bg-zinc-50 dark:hover:bg-zinc-700 hover:scale-105 active:scale-95 shadow-sm">
              <Calendar size={20} weight="bold" /> Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ================= HELPERS (AT THE BOTTOM) =================

function GithubActivitySection({ username }: { username: string }) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // API v4 jogruber (Stabil & Support banyak kontribusi)
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, [username]);

  if (!data) return <div className="py-20 text-center animate-pulse text-muted-foreground italic">Fetching coding activity...</div>;

  const currentYear = new Date().getFullYear();
  const total = typeof data.total === "object" ? data.total?.[currentYear] ?? 0 : data.total ?? 0;
  
  // Ambil kontribusi tahun ini
  const currentYearData = data.contributions.filter((d: any) => d.date.startsWith(currentYear.toString()));
  
  // Logic Grouping per Minggu (7 Hari)
  const weeks: any[] = [];
  for (let i = 0; i < currentYearData.length; i += 7) {
    weeks.push(currentYearData.slice(i, i + 7));
  }

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <section className="space-y-4">
      {/* Header Info */}
      <div className="flex justify-between items-center px-1">
        <h2 className="text-base font-semibold text-foreground">
          {total} contributions in {currentYear}
        </h2>
      </div>

      {/* GitHub Card (Original Style) */}
      <Card className="border border-border/60 bg-[#0d1117] text-[#c9d1d9] overflow-hidden shadow-sm">
        <CardContent className="p-5">
          <div className="overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-start">
              {/* Day Labels */}
              <div className="flex flex-col justify-around text-[10px] text-muted-foreground mr-3 mt-7 h-[85px] shrink-0">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>

              <div className="space-y-2">
                {/* Month Labels */}
                <div className="flex text-[10px] text-muted-foreground ml-1">
                  {months.map((m, i) => (
                    <div key={i} className="min-w-[44px]">{m}</div>
                  ))}
                </div>

                {/* Grid Dots */}
                <div className="flex gap-[3px]">
                  {weeks.map((week, i) => (
                    <div key={i} className="flex flex-col gap-[3px]">
                      {week.map((day: any, j: number) => (
                        <div
                          key={j}
                          className={`w-[11px] h-[11px] rounded-[2px] ${getGitHubColor(day.level)} hover:ring-1 hover:ring-white transition-all cursor-help`}
                          title={`${day.date}: ${day.count} contributions`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Card */}
          <div className="flex justify-between items-center pt-4 mt-2">
             <a href="https://github.com/rerey155-del" 
                target="_blank" 
                className="text-[11px] text-muted-foreground hover:text-blue-400 transition-colors">
                Learn how we count contributions
             </a>
             
             <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground font-medium">
               <span>Less</span>
               <div className="flex gap-[3px]">
                 {[0, 1, 2, 3, 4].map(l => <div key={l} className={`w-[11px] h-[11px] rounded-[2px] ${getGitHubColor(l)}`} />)}
               </div>
               <span>More</span>
             </div>
          </div>
        </CardContent>
      </Card>
      
     
    </section>
  );
}

function getGitHubColor(level: number) {
  const colors = [
    "bg-[#161b22]", // 0
    "bg-[#0e4429]", // 1
    "bg-[#006d32]", // 2
    "bg-[#26a641]", // 3
    "bg-[#39d353]", // 4
  ];
  return colors[level] || colors[0];
}

function FilterBadge({ label, active, onClick }: any) {
  return (
    <button onClick={onClick} className="transition-all active:scale-95">
      <Badge
        variant={active ? "default" : "outline"}
        className={`rounded-full px-4 py-1.5 text-xs font-medium cursor-pointer shadow-sm ${
          active ? "bg-yellow-400 text-yellow-900 hover:bg-yellow-500 border-transparent" : "text-muted-foreground hover:bg-muted"
        }`}
      >
        {label}
      </Badge>
    </button>
  );
}

function SkillPill({ icon, label, className }: any) {
  return (
    <Badge
      variant="outline"
      className={`rounded-full px-5 py-2.5 text-sm gap-3 font-medium border-transparent shadow-sm bg-card hover:bg-muted/50 transition-colors ${className}`}
    >
      {icon} {label}
    </Badge>
  );
}
