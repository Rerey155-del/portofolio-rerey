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
    title: "Project Manager",
    company: "Inatechno Training Center",
    location: "Padang, Sumatera Barat",
    startDate: "Maret 2025",
    endDate: "Juli 2025",
    duration: "5 Bulan",
    type: "Project Based",
    workplace: "Offline",
    description:
      "Bertanggung jawab sebagai pemimpin dalam pengembangan web startup kelolainaja.id dari tahap awal hingga implementasi. Memberikan arahan teknis dan menjaga kolaborasi efektif antar anggota tim selama proses pengembangan. Mengatur pembagian tugas, timeline, dan koordinasi tim pengembang agar proyek berjalan sesuai target.  ",
  },
  {
    id: 3,
    logo: "💻",
    title: "Application Developer",
    company: "Inatechno Training Center",
    location: "Padang, Sumatera Barat",
    startDate: "Feb 2025",
    endDate: "Juli 2025",
    duration: "5 Bulan",
    type: "Internship",
    workplace: "Hybrid",
    description:
      "Berperan sebagai Fullstack Developer dalam proyek pengembangan web kelolainaja.id. Melakukan integrasi API, autentikasi pengguna, dan menajemen data berbasis dashboard. Berkontribusi dalam pengujian aplikasi, debugging, dan dokumentasi teknis proyek. ",
  },
  {
    id: 4,
    logo: "💻",
    title: "Kasir/POS System Operator",
    company: "Nazea Mart",
    location: "Padang, Sumatera Barat",
    startDate: "Agustus 2025",
    endDate: "Januari 2026",
    duration: "6 Bulan",
    type: "Part-time",
    workplace: "Offline",
    description:
      "Melakukan transaksi penjualan menggunakan sistem POS, membantu pelanggan dengan pertanyaan produk, dan mengelola inventaris harian. Berkontribusi dalam menjaga operasional toko berjalan lancar selama jam sibuk. ",
  },
];

const EDUCATION_DATA = [
  {
    logo: "🎓",
    institution: "Universitas Putra Indonesia YPTK PADANG",
    degree: "S1 Teknik Informatika",
    gpa: "3.60/4.00",
    years: "2022 - 2026",
    location: "Padang, Sumatera Barat",
  },
  {
    logo: "🏫",
    institution: "SMAN 1 Ampek Angkek",
    degree: "SMA",
    gpa: "IPA",
    years: "2018 - 2021",
    location: "Agam, Sumatera Barat",
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
          <p>
            Halo, saya Reyhan Maulana, seorang Software Engineer yang
            berdedikasi untuk menciptakan solusi digital berdampak luas. Saya
            spesialis dalam membangun platform web dan aplikasi mobile
            menggunakan teknologi modern, termasuk Laravel, Next.js, dan
            pengembangan lintas platform dengan Flutter. Fokus utama saya bukan
            sekadar membuat kode yang berjalan, melainkan merancang arsitektur
            perangkat lunak yang terstruktur, mudah dipelihara, dan skalabel
            untuk memenuhi kebutuhan bisnis. Saya percaya bahwa kode berkualitas
            tinggi harus berjalan selaras dengan efisiensi sistem dan kejelasan
            logika. Saya memadukan keahlian teknis dengan komunikasi proaktif,
            pola pikir kritis, dan manajemen waktu yang efektif. Saya terbiasa
            bekerja dalam lingkungan kolaboratif dan memanfaatkan kemampuan
            kepemimpinan untuk memastikan setiap proyek memberikan hasil optimal
            serta dampak nyata bagi pengguna.
          </p>
          <div className="pt-4">
            <p className="mb-2 text-muted-foreground">Salam hangat,</p>
            <span className="font-serif italic text-4xl font-bold text-yellow-400">
              Rerey
            </span>
          </div>
        </div>
      </section>

      {/* SECTION KARIR - Dengan State Management di tiap card */}
      <section>
        <div className="mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Briefcase weight="bold" /> Karir
          </h2>
          <p className="text-muted-foreground mt-1 text-sm">
            Klik untuk melihat detail pekerjaan.
          </p>
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

function CareerCard({ job }: { job: (typeof CAREER_DATA)[0] }) {
  // STATE: Untuk mengontrol detail yang terbuka
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border border-border/60 rounded-xl p-5 transition-all cursor-pointer hover:border-primary/30 ${isOpen ? "bg-muted/30 shadow-sm" : "hover:bg-muted/10"}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex gap-4">
        <div className="w-14 h-14 rounded-md border flex items-center justify-center text-2xl shrink-0 bg-background shadow-inner">
          {job.logo}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-sm md:text-base">{job.title}</h3>
            {isOpen ? (
              <CaretDown weight="bold" className="text-muted-foreground" />
            ) : (
              <CaretRight weight="bold" className="text-muted-foreground" />
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {job.company} • {job.location}
          </p>
          <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-muted-foreground mt-2">
            <span>
              {job.startDate} - {job.endDate}
            </span>
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

function EducationCard({
  logo,
  institution,
  degree,
  gpa,
  years,
  location,
}: any) {
  return (
    <div className="border border-border/60 rounded-xl p-5 flex gap-4 bg-card/50">
      <div className="w-14 h-14 rounded-md border flex items-center justify-center text-2xl shrink-0">
        {logo}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-sm md:text-base">{institution}</h3>
        <p className="text-xs text-muted-foreground mt-1">
          {degree} •{" "}
          <span className="font-medium text-foreground/70">{gpa}</span>
        </p>
        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground mt-2">
          <span>{years}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/30"></span>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}
