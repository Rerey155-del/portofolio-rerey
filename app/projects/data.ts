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

    image: "/MicroSayur1.png",
    images: ["/MicroSayur1.png", "/MicroSayur2.png", "/MicroSayur3.png"],
    type: "Web",
    category: "E-commerce",
    tech: ["Vue.js", "Vite", "Nuxt.js", "MySQL", "Tailwind css"],
    link: "#",
    github: "#",
    isFeatured: true,
    thumbnail: true,
  },

];
