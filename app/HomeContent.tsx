"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Code,
  CodeBlock,
  FileHtml,
  FileCss,
  Atom,
  Database,
  PaintBrush,
} from "@phosphor-icons/react";

// 1. DATA: Kita pindahkan semua data ke satu array dengan kategori tambahan
const SKILLS_DATA = [
  { icon: <FileHtml className="text-orange-600" />, label: "HTML", className: "bg-orange-100 text-orange-700", category: "Frontend" },
  { icon: <FileCss className="text-blue-600" />, label: "CSS", className: "bg-blue-100 text-blue-700", category: "Frontend" },
  { icon: <PaintBrush className="text-cyan-600" />, label: "TailwindCSS", className: "bg-cyan-100 text-cyan-700", category: "Frontend" },
  { icon: <CodeBlock className="text-yellow-600" />, label: "JavaScript", className: "bg-yellow-100 text-yellow-700", category: "Main" },
  { icon: <CodeBlock className="text-blue-700" />, label: "TypeScript", className: "bg-blue-50 text-blue-800", category: "Main" },
  { icon: <Atom className="text-cyan-500" />, label: "React.js", className: "bg-cyan-50 text-cyan-800", category: "Main" },
  { icon: <span className="font-bold">N</span>, label: "Next.js", className: "bg-neutral-100 text-neutral-800", category: "Main" },
  { icon: <Database className="text-green-600" />, label: "Node.js", className: "bg-green-100 text-green-800", category: "Backend" },
  { icon: <Database className="text-blue-500" />, label: "PostgreSQL", className: "bg-blue-50 text-blue-700", category: "Database" },
];

const CATEGORIES = ["Semua", "Main", "Frontend", "Backend", "Database"];

export function HomeContent() {
  // 2. STATE: Mengelola kategori filter yang aktif
  const [activeCategory, setActiveCategory] = useState("Semua");

  // 3. LOGIC: Filter data berdasarkan kategori yang dipilih
  const filteredSkills = activeCategory === "Semua" 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === activeCategory);

  return (
    <div className="p-8 md:p-12 pb-24 space-y-12">
      {/* 1. HERO SECTION */}
      <section>
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-foreground">
          Hi, I'm Reyhan Maulana
        </h1>
        <div className="flex items-center gap-4 text-muted-foreground mb-6 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
            Based in Indonesia{" "}
            <Badge variant="secondary" className="ml-1">
              ID
            </Badge>
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
            Onsite
          </span>
        </div>
        <div className="text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
          <p>
            A Fullstack Developer and coding content creator dedicated to
            building impactful digital solutions. I specialize in developing
            scalable web platforms and applications using a modern tech stack,
            primarily Next.js, React, and Node.js.
          </p>
        </div>
      </section>

      <Separator />

      {/* 2. SKILLS SECTION */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-1">
            <Code weight="bold" /> Skills
          </h2>
          <p className="text-muted-foreground text-sm">Pilih kategori untuk memfilter.</p>
        </div>

        {/* Filters Area */}
        <nav className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <FilterBadge 
              key={cat} 
              label={cat} 
              active={activeCategory === cat} 
              onClick={() => setActiveCategory(cat)} // Update state saat diklik
            />
          ))}
        </nav>

        {/* 4. RENDER DATA: Hasil mapping data yang sudah difilter */}
        <div className="flex flex-wrap gap-2 min-h-[100px]">
          {filteredSkills.map((skill, index) => (
            <SkillPill
              key={index}
              icon={skill.icon}
              label={skill.label}
              className={skill.className}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

// ==========================================
// Sub-Komponen (Helper)
// ==========================================

function FilterBadge({ label, active, onClick }: { label: string; active?: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className="transition-all active:scale-95">
      <Badge
        variant={active ? "default" : "outline"}
        className={`rounded-full px-4 py-1.5 text-xs cursor-pointer ${
          active 
            ? "bg-yellow-400 text-yellow-900 border-transparent hover:bg-yellow-500 shadow-sm" 
            : "text-muted-foreground hover:bg-muted border-border/60"
        }`}
      >
        {label}
      </Badge>
    </button>
  );
}

function SkillPill({ icon, label, className }: { icon: React.ReactNode; label: string; className?: string }) {
  return (
    <Badge
      variant="outline"
      className={`rounded-full px-3 py-1.5 text-sm gap-2 font-medium border-transparent shadow-sm ${className}`}
    >
      {icon} {label}
    </Badge>
  );
}

function CreationCard({ title, desc, gradient }: { title: string; desc: string; gradient: string }) {
  return (
    <Card className={`w-[250px] h-[320px] rounded-xl overflow-hidden border-none text-white ${gradient} flex flex-col justify-end p-4 shrink-0 transition-transform hover:scale-[1.02] duration-300`}>
      <CardContent className="p-0">
        <h3 className="font-bold text-lg leading-tight mb-1">{title}</h3>
        <p className="text-sm opacity-90">{desc}</p>
      </CardContent>
    </Card>
  );
}
