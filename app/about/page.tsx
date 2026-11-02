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
      "Mengelola alur kerja pengembangan perangkat lunak (SDLC) dan pelaksanaan modul pelatihan teknologi. Bertanggung jawab menyusun jadwal kerja (timeline), membagi tugas teknis ke anggota tim, dan memantau pemenuhan milestone proyek secara berkala. Berperan aktif menerjemahkan kebutuhan pengguna menjadi rincian spesifikasi sistem, mengawal pengujian fitur agar bebas kendala, serta menyusun dokumentasi teknis dan laporan evaluasi proyek secara terstruktur.",
  },
  {
    id: 3,
    logo: "🏢",
    title: "Fullstack Developer",
    company: "Inatechno Training Center",
    location: "Padang, Sumatera Barat",
    startDate: "Feb 2025",
    endDate: "Juli 2025",
    duration: "5 Bulan",
    type: "Internship",
    workplace: "Hybrid",
    description:
      "Mengembangkan aplikasi berbasis web untuk platform startup internal perusahaan menggunakan Laravel, PHP, JavaScript, dan MySQL. Bertanggung jawab melakukan implementasi fitur, integrasi basis data, debugging, optimasi performa, serta pemeliharaan sistem secara berkala. Terlibat aktif dalam proses analisis kebutuhan operasional, pengujian aplikasi (testing), dan penyusunan dokumentasi teknis selama siklus pengembangan produk.",
  },
  {
    id: 4,
    logo: "🏢",
    title: "Operational Quality & Store Administrator",
    company: "Nazea Mart",
    location: "Padang, Sumatera Barat",
    startDate: "Agustus 2025",
    endDate: "Januari 2026",
    duration: "6 Bulan",
    type: "Part-time",
    workplace: "Offline",
    description:
      "Bertanggung jawab penuh terhadap akurasi pencatatan transaksi dan pengawasan inventaris stok harian guna meminimalisir selisih data dengan menggunakan Microsoft Excel, serta menerapkan standar operasional prosedur (SOP) yang ketat dalam pemeriksaan fisik barang masuk dan keluar untuk menjamin kualitas produk. Berperan aktif mengidentifikasi kendala operasional toko, menjalankan tindakan perbaikan cepat demi menjaga kelancaran alur layanan, serta berkoordinasi secara terstruktur dengan tim internal terkait ketidaksesuaian data maupun kendala teknis harian.",
  },
  {
    id: 5,
    logo: "🏢",
    title: "Project Manager & Developer",
    company: "Universitas Putra Indonesia YPTK Padang",
    location: "Padang, Sumatera Barat",
    startDate: "September 2025",
    endDate: "Desember 2025",
    duration: "4 Bulan",
    type: "Freelance",
    workplace: "Hybrid",
    description:
      "Berkolaborasi secara intensif serta memimpin alur kerja tim pengembang dan desainer dalam siklus pengembangan aplikasi web UKM IT kampus berbasis metodologi Agile/Scrum menggunakan arsitektur MERN Stack (MongoDB, Express.js, React.js, Node.js). Bertanggung jawab mengarahkan perencanaan proyek, menerjemahkan kebutuhan operasional organisasi menjadi spesifikasi teknis dan fungsionalitas kode yang nyata, merancang RESTful API, mengelola basis data NoSQL, serta mengawal pengujian sistem (unit & integration testing), debugging, dan penyusunan dokumentasi proyek demi menjamin ketercapaian milestone serta rilis produk digital kampus yang optimal dan tepat waktu.",
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
    <div className="px-4 py-8 pt-16 sm:px-8 md:p-12 pb-24 space-y-12">
      {/* SECTION TENTANG */}
      <section data-aos="fade-up">
        <div className="mb-4">
          <h1 className="text-2xl font-bold tracking-tight">Tentang</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Pengenalan singkat tentang siapa saya.
          </p>
        </div>
        <div className="border-t border-dashed border-border my-6"></div>
        <div className="space-y-4 text-sm leading-relaxed text-foreground/90">
          <p>
            Halo, saya Reyhan Maulana, seorang lulusan S1 Teknik Informatika yang berdedikasi dalam pengembangan perangkat lunak, manajemen proyek, serta optimalisasi sistem operasional IT. Saya terbiasa membangun platform web dan aplikasi menggunakan teknologi modern seperti Laravel dan Next.js, dengan fokus pada arsitektur sistem yang terstruktur, skalabel, dan efisien.

Bagi saya, solusi digital yang baik harus berjalan selaras dengan kebutuhan bisnis, ketelitian data, serta kepatuhan terhadap standar operasional prosedur (SOP). Oleh karena itu, saya memadukan keahlian teknis (hard skills) dengan kemampuan analisis, dokumentasi terstruktur, komunikasi proaktif, dan manajemen waktu yang efektif.

Baik dalam peran pengembangan sistem maupun pengelolaan operasional, saya siap berkolaborasi secara terstruktur untuk memastikan setiap proyek memberikan hasil yang optimal dan berdampak nyata bagi perusahaan.
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
      <section data-aos="fade-up">
        <div className="mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Briefcase weight="bold" /> Karir
          </h2>
          <p className="text-muted-foreground mt-1 text-sm">
            Klik untuk melihat detail pekerjaan.
          </p>
        </div>
        <div className="space-y-4">
          {CAREER_DATA.map((job, index) => (
            <CareerCard key={job.id} job={job} index={index} />
          ))}
        </div>
      </section>

      {/* SECTION PENDIDIKAN */}
      <section data-aos="fade-up">
        <div className="mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <GraduationCap weight="bold" /> Pendidikan
          </h2>
        </div>
        <div className="space-y-4">
          {EDUCATION_DATA.map((edu, index) => (
            <EducationCard key={index} index={index} {...edu} />
          ))}
        </div>
      </section>
    </div>
  );
}

// ==========================================
// Sub-Komponen dengan Logic State
// ==========================================

function CareerCard({
  job,
  index = 0,
}: {
  job: (typeof CAREER_DATA)[0];
  index?: number;
}) {
  // STATE: Untuk mengontrol detail yang terbuka
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
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
  index = 0,
}: any) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="border border-border/60 rounded-xl p-5 flex gap-4 bg-card/50"
    >
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
