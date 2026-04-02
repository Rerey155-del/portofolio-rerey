"use client";

import { useState } from "react";
import {
  MagnifyingGlass,
  CaretUpDown,
  LinkSimple,
  Plus,
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";

// 1. DATA: Kita kumpulkan semua data dalam satu array agar mudah dikelola
const CERTIFICATES_DATA = [
  {
    id: 1,
    image: "https://placehold.co/600x400/e6e6e6/a3a3a3?text=Sertifikat+Parto",
    code: "196/EKS/HCLGA/ATI/VIII/2025",
    title: "Backend Developer Internship - Parto.id",
    issuer: "Affan Technology Indonesia",
    badges: ["Profesional", "Backend"],
    date: "ISSUED ON JULY 2025",
    type: "Internship",
    category: "Backend"
  },
  {
    id: 2,
    image: "https://placehold.co/600x400/e0f2fe/0ea5e9?text=E-Book+BWA",
    code: "E-BOOK-BWA-0821",
    title: "E-book Petunjuk Pro: Freelance Web Developer & Kerja Remote",
    issuer: "Build With Angga",
    badges: ["Course", "Freelance"],
    date: "ISSUED ON SEPTEMBER 2025",
    type: "Course",
    category: "Freelance"
  },
  {
    id: 3,
    image: "https://placehold.co/600x400/f3f4f6/4b5563?text=Dicoding+Android",
    code: "81P2LGL38ZOY",
    title: "Belajar Membuat Aplikasi Android dengan Jetpack...",
    issuer: "Dicoding Indonesia",
    badges: ["Course", "Mobile"],
    date: "ISSUED ON JANUARY 2025",
    type: "Course",
    category: "Mobile"
  },
  {
    id: 4,
    image: "https://placehold.co/600x400/fee2e2/ef4444?text=Bangkit+Capstone",
    code: "BANGKIT-2025-X",
    title: "Best Team Bangkit Company Track Capstone Project",
    issuer: "Bangkit Academy",
    badges: ["Award", "Mobile"],
    date: "ISSUED ON JANUARY 2025",
    type: "Award",
    category: "Mobile"
  },
  {
    id: 5,
    image: "https://placehold.co/600x400/fee2e2/ef4444?text=Bangkit+Graduate",
    code: "BANGKIT-2025-GRADUATE",
    title: "Certificate of Completion Bangkit Academy",
    issuer: "Bangkit Academy",
    badges: ["Course", "Mobile"],
    date: "ISSUED ON JANUARY 2025",
    type: "Course",
    category: "Mobile"
  },
  {
    id: 6,
    image: "https://placehold.co/600x400/fefae8/eab308?text=Kampus+Merdeka",
    code: "KAMPUS-MERDEKA-123",
    title: "Sertifikat Kepesertaan Studi Independen Bersertifikat...",
    issuer: "Kampus Merdeka",
    badges: ["Recognition", "Mobile"],
    date: "ISSUED ON DECEMBER 2024",
    type: "Recognition",
    category: "Mobile"
  },
];

export default function AchievementsPage() {
  // 2. STATE MANAGEMENT: Untuk menangani input pencarian
  const [searchQuery, setSearchQuery] = useState("");

  // 3. LOGIC: Filter data berdasarkan apa yang diketik user
  const filteredCertificates = CERTIFICATES_DATA.filter((cert) =>
    cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 md:p-12 pb-24 space-y-8">
      {/* HEADER */}
      <section>
        <h1 className="text-2xl font-bold tracking-tight mb-2">Pencapaian</h1>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl">
          Kumpulan kurasi sertifikat dan tanda penghargaan yang telah saya peroleh.
        </p>
      </section>

      <div className="border-t border-dashed border-border my-6"></div>

      {/* SEARCH & FILTER AREA */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Cari sertifikat atau penerbit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update state saat mengetik
              className="w-full pl-9 pr-4 py-2 text-sm border rounded-md bg-transparent focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="flex gap-3">
            <FilterSelect label="Filter berdasarkan Tipe" options={["Course", "Award", "Internship"]} />
            <FilterSelect label="Filter berdasarkan Kategori" options={["Frontend", "Backend", "Mobile"]} />
          </div>
        </div>
        <p className="text-sm text-muted-foreground">Total: {filteredCertificates.length}</p>
      </section>

      {/* 4. RETURN DATA (LOOPING): Kita memetakan (mapping) data ke komponen UI */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {filteredCertificates.length > 0 ? (
          filteredCertificates.map((cert) => (
            <CertificateCard key={cert.id} data={cert} />
          ))
        ) : (
          <p className="text-muted-foreground text-sm col-span-full text-center py-12">
            Tidak ada sertifikat yang ditemukan.
          </p>
        )}
      </section>
    </div>
  );
}

// ==========================================
// KOMPONEN UI (TEMPLATE)
// ==========================================

// Ini adalah "Template" atau Cetakan untuk kartu sertifikat
function CertificateCard({ data }: { data: typeof CERTIFICATES_DATA[0] }) {
  return (
    <div className="border border-border/60 rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col bg-card">
      <div className="h-[180px] bg-muted/40 border-b flex items-center justify-center overflow-hidden">
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
          {data.code}
        </p>
        <h3 className="font-semibold text-sm leading-snug mt-1.5 mb-1 line-clamp-2 min-h-[40px]">
          {data.title}
        </h3>
        <p className="text-xs text-muted-foreground mb-4">{data.issuer}</p>

        <div className="flex flex-wrap gap-1.5 mb-2">
          {data.badges.map((badge) => (
            <Badge
              key={badge}
              variant="outline"
              className="text-[10px] px-2.5 py-0 h-5 font-normal rounded-full text-muted-foreground bg-transparent border-border/70"
            >
              {badge}
            </Badge>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between text-[10px] text-muted-foreground font-medium tracking-wider">
            <span>{data.date}</span>
            <LinkSimple weight="bold" className="text-sm cursor-pointer hover:text-foreground transition-colors" />
          </div>
          <div className="mt-3.5 flex">
            <button className="w-6 h-6 rounded-full border flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground">
              <Plus weight="bold" className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterSelect({ label, options }: { label: string, options: string[] }) {
  return (
    <div className="relative">
      <select className="pl-3 pr-8 py-2 text-sm border rounded-md bg-transparent appearance-none w-[170px] focus:outline-none focus:ring-1 focus:ring-primary text-muted-foreground">
        <option value="">{label}</option>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      <CaretUpDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 pointer-events-none" />
    </div>
  );
}
