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
      "MicroSayur dengan tampilan gelap modern, dibuat menggunakan Next.js, TypeScript, dan Tailwind CSS untuk menghadirkan pengalaman belanja sayur organik.",
    detail:
      "Screenshot ini digunakan sebagai thumbnail utama yang menjelaskan keseluruhan proyek MicroSayur.",
    image: "/MicroSayur1.png",
    images: ["/MicroSayur1.png", "/MicroSayur2.png", "/MicroSayur3.png"],
    type: "Web",
    category: "UI/UX",
    tech: ["Next.js", "TailwindCSS", "React"],
    link: "#",
    github: "#",
    isFeatured: true,
    thumbnail: true,
  },

];
