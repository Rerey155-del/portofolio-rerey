"use client";

import { 
  Envelope, 
  InstagramLogo, 
  LinkedinLogo, 
  TiktokLogo, 
  GithubLogo,
  ArrowSquareOut,
  ChatCircleDots
} from "@phosphor-icons/react";

// ==========================================
// 1. DATA (Source of Truth)
// ==========================================
const SOCIALS_DATA = [
  {
    title: "Stay in Touch",
    desc: "Reach out via email for inquiries or collaborations.",
    cta: "Go to Gmail",
    link: "mailto:your-email@gmail.com",
    icon: <Envelope size={80} weight="fill" />,
    gradient: "from-red-600 to-red-900",
    isWide: true, // Kartu Gmail lebar sendiri
  },
  {
    title: "Follow My Journey",
    desc: "Follow my creative journey.",
    cta: "Go to Instagram",
    link: "https://instagram.com/username",
    icon: <InstagramLogo size={60} weight="fill" />,
    gradient: "from-purple-600 via-pink-600 to-orange-500",
  },
  {
    title: "Let's Connect",
    desc: "Connect with me professionally.",
    cta: "Go to Linkedin",
    link: "https://linkedin.com/in/username",
    icon: <LinkedinLogo size={60} weight="fill" />,
    gradient: "from-blue-600 to-blue-800",
  },
  
  {
    title: "Explore the Code",
    desc: "Explore my open-source work.",
    cta: "Go to Github",
    link: "https://github.com/username",
    icon: <GithubLogo size={60} weight="fill" />,
    gradient: "from-slate-900 to-slate-950",
  },
];

// ==========================================
// 2. MAIN COMPONENT (Fungsi Utama)
// ==========================================
export default function ContactPage() {
  return (
    <div className="p-8 md:p-12 pb-24 space-y-10">
      {/* HEADER */}
      <section>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Contact</h1>
        <p className="text-muted-foreground text-sm">Let's get in touch.</p>
      </section>

      <div className="border-t border-dashed border-border" />

      {/* SOCIAL MEDIA CARDS (Mapping) */}
      <section className="space-y-6">
        <h2 className="text-sm font-medium text-foreground">Find me on social media</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SOCIALS_DATA.map((social, index) => (
            <SocialCard 
              key={index} 
              {...social} 
            />
          ))}
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="space-y-6 pt-6">
        <h2 className="text-sm font-medium text-foreground">Or send me a message</h2>
        
        <form className="space-y-4 max-w-4xl" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="bg-card border border-border/60 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary/40"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-card border border-border/60 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary/40"
            />
          </div>
          <textarea 
            placeholder="Message" 
            rows={5}
            className="w-full bg-card border border-border/60 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary/40"
          />
          <button className="w-full py-3 bg-zinc-800 text-white rounded-md font-semibold text-sm hover:bg-zinc-700 transition-colors shadow-sm">
            Send Email
          </button>
        </form>
      </section>
    </div>
  );
}

// ==========================================
// 3. HELPER COMPONENTS (Bawah)
// ==========================================

function SocialCard({ 
  title, 
  desc, 
  cta, 
  link, 
  icon, 
  gradient, 
  isWide 
}: { 
  title: string; 
  desc: string; 
  cta: string; 
  link: string; 
  icon: React.ReactNode; 
  gradient: string;
  isWide?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${gradient} p-8 text-white shadow-lg group transition-transform hover:scale-[1.01] duration-300 ${isWide ? 'md:col-span-2' : ''}`}>
      {/* Konten Text */}
      <div className="relative z-10 space-y-2 max-w-[70%]">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm opacity-80 leading-relaxed">{desc}</p>
        <div className="pt-4">
          <a 
            href={link} 
            target="_blank" 
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-md text-xs font-bold hover:bg-white/30 transition-colors"
          >
            {cta} <ArrowSquareOut weight="bold" />
          </a>
        </div>
      </div>

      {/* Background Icon (Besar) */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-20 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
    </div>
  );
}
