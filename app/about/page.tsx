"use client";

import { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  CaretRight,
  CaretDown,
} from "@phosphor-icons/react";

// 1. DATA: Tetap di dalam array agar rapi
const CAREER_DATA = [
  {
    id: 1,
    logo: "🏢",
    title: "Fullstack Developer",
    company: "PT. Contoh Teknologi Indonesia",
    location: "Jakarta, Indonesia",
    startDate: "Jul 2025",
    endDate: "Saat ini",
    duration: "8 Bulan",
    type: "Full-time",
    workplace: "Hybrid",
    description: "Membangun sistem backend skala besar dan integrasi frontend modern."
  },
  {
    id: 2,
    logo: "💻",
    title: "Frontend Developer Intern",
    company: "Tech Startup",
    location: "Bandung, Indonesia",
    startDate: "Jan 2024",
    endDate: "Jun 2024",
    duration: "6 Bulan",
    type: "Internship",
    workplace: "Remote",
    description: "Fokus pada pengembangan UI/UX menggunakan React dan TailwindCSS."
  },
];

const EDUCATION_DATA = [
  {
    logo: "🎓",
    institution: "Universitas Contoh",
    degree: "S1 Sistem Informasi",
    gpa: "3.80/4.00",
    years: "2022 - 2026",
    location: "Jakarta, Indonesia",
  },
  {
    logo: "🏫",
    institution: "SMAN 1 Contoh Kota",
    degree: "SMA",
    gpa: "IPA",
    years: "2019 - 2022",
    location: "Jakarta, Indonesia",
  },
];

export default function AboutPage() {
  return (
    <div className="p-8 md:p-12 pb-24 space-y-12">
      {/* SECTION TENTANG */}
      <section>
        <div className="mb-4">
          <h1 className="text-2xl font-bold tracking-tight">Tentang</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Pengenalan singkat tentang siapa saya.
          </p>
        </div>
        <div className="border-t border-dashed border-border my-6"></div>
        <div className="space-y-4 text-sm leading-relaxed text-foreground/90">
          <p>Saya Reyhan Maulana, seorang Software Engineer yang berdedikasi.</p>
          <div className="pt-4">
            <p className="mb-2 text-muted-foreground">Salam hangat,</p>
            <span className="font-serif italic text-4xl font-bold text-yellow-400">Rerey</span>
          </div>
        </div>
      </section>

      {/* SECTION KARIR - Dengan State Management di tiap card */}
      <section>
        <div className="mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Briefcase weight="bold" /> Karir
          </h2>
          <p className="text-muted-foreground mt-1 text-sm">Klik untuk melihat detail pekerjaan.</p>
        </div>
        <div className="space-y-4">
          {CAREER_DATA.map((job) => (
            <CareerCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* SECTION PENDIDIKAN */}
      <section>
        <div className="mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <GraduationCap weight="bold" /> Pendidikan
          </h2>
        </div>
        <div className="space-y-4">
          {EDUCATION_DATA.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </section>
    </div>
  );
}

// ==========================================
// Sub-Komponen dengan Logic State
// ==========================================

function CareerCard({ job }: { job: typeof CAREER_DATA[0] }) {
  // STATE: Untuk mengontrol detail yang terbuka
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`border border-border/60 rounded-xl p-5 transition-all cursor-pointer hover:border-primary/30 ${isOpen ? 'bg-muted/30 shadow-sm' : 'hover:bg-muted/10'}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex gap-4">
        <div className="w-14 h-14 rounded-md border flex items-center justify-center text-2xl shrink-0 bg-background shadow-inner">
          {job.logo}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-sm md:text-base">{job.title}</h3>
            {isOpen ? <CaretDown weight="bold" className="text-muted-foreground" /> : <CaretRight weight="bold" className="text-muted-foreground" />}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {job.company} • {job.location}
          </p>
          <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-muted-foreground mt-2">
            <span>{job.startDate} - {job.endDate}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/30"></span>
            <span>{job.duration}</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/30"></span>
            <span className="text-primary/70 font-medium">{job.type}</span>
          </div>

          {/* Logic Tampil Detail berdasarkan State */}
          {isOpen && (
            <div className="mt-4 pt-4 border-t border-dashed border-border/60 animate-in fade-in slide-in-from-top-1 duration-200">
              <p className="text-xs text-foreground/80 leading-relaxed italic">
                "{job.description}"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function EducationCard({ logo, institution, degree, gpa, years, location }: any) {
  return (
    <div className="border border-border/60 rounded-xl p-5 flex gap-4 bg-card/50">
      <div className="w-14 h-14 rounded-md border flex items-center justify-center text-2xl shrink-0">
        {logo}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-sm md:text-base">{institution}</h3>
        <p className="text-xs text-muted-foreground mt-1">{degree} • <span className="font-medium text-foreground/70">{gpa}</span></p>
        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground mt-2">
          <span>{years}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/30"></span>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}
