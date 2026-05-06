export type ProjectData = {
  id: number;
  title: string;
  description: string;
  detail?: string;
  image: string;
  images: string[];
  type: string;
  category: string;
  tech: string[];
  link: string;
  github: string;
  isFeatured?: boolean;
  thumbnail?: boolean;
};

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 1,
    title: "MicroSayur",
    description:
      "MicroSayur dengan tampilan gelap modern, dibuat menggunakan Nuxt.js, TypeScript, dan Tailwind CSS untuk menghadirkan pengalaman belanja sayur organik.",
    detail:
      "Screenshot ini digunakan sebagai thumbnail utama yang menjelaskan keseluruhan proyek MicroSayur.",
    image: "/MicroSayur1.png",
    images: ["/MicroSayur1.png", "/MicroSayur2.png", "/MicroSayur3.png"],
    type: "Web",
    category: "E-commerce",
    tech: ["Microservice", "Golang", "Nuxt.js", "MySQL", "Tailwind css"],
    link: "#",
    github: "#",
    isFeatured: true,
    thumbnail: true,
  },
  {
    id: 2,
    title: "Manajemen Sekolah v3",
    description:
      "Sistem Manajemen Sekolah berbasis web modern yang dibangun menggunakan Decouple Architecture. Sistem ini dirancang untuk mengelola berbagai entitas sekolah seperti Guru, Siswa, Kelas, Mata Pelajaran, jabwal, hingga Log Aktivitas dan sistem pengumuman terpusat yang memanfaatkan teknologi Apache Kafka. ",

    image: "/manajemen1.png",
    images: ["/manajemen1.png", "/manajemen2.png", "/manajemen3.png"],
    type: "Web",
    category: "E-commerce",
    tech: ["Decoupled Architecture", "Vue.js", "Vite", "MySQL", "Tailwind css"],
    link: "#",
    github: "#",
    isFeatured: true,
    thumbnail: true,
  },
  {
    id: 3,
    title: "Aplikasi Bengkel Nexus",
    description:
      "Aplikasi bengkel berbasis web untuk membantu pengguna mencari rekomendasi bengkel, melihat daftar suku cadang, serta mengakses informasi layanan bengkel seperti alamat, jam operasional, kontak, dan detail produk. Project ini dibangun dengan React, Vite, Tailwind CSS, Express, dan MySQL sebagai backend database.",
    image: "/nexus1.png",
    images: ["/nexus1.png", "/nexus2.png"],
    type: "Web",
    category: "Automotive Service",
    tech: ["React.js", "Vite", "Tailwind CSS", "Express.js", "MySQL"],
    link: "#",
    github: "#",
    isFeatured: true,
    thumbnail: true,
  },
  {
    id: 3,
    title: "Aplikasi Pengelola Sosmed UMKM - Kelolainaja",
    description:
      "Aplikasi berbasis web ini membantu pengguna untuk mengelola akun media sosial UMKM mereka dengan mudah. Dengan fitur-fitur seperti penjadwalan posting, analitik performa, dan manajemen konten, aplikasi ini dirancang untuk meningkatkan kehadiran online UMKM. Proyek ini dibangun menggunakan Laravel, Vite, Tailwind CSS, dan MySQL sebagai backend database.",
    image: "/kelolain.png",
    images: ["/kelolain.png", "/kelolain2.png"],
    type: "Web",
    category: "Automotive Service",
    tech: ["Laravel", "Vite", "Tailwind CSS", "MySQL"],
    link: "#",
    github: "#",
    isFeatured: true,
    thumbnail: true,
  },
];
