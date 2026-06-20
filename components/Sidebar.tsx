// components/Sidebar.tsx
"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  House, User, Medal, Stack, 
  Envelope, Link as LinkIcon, 
  
  List, X
} from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Tombol Hamburger Menu (Hanya muncul di mobile) */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-40 md:hidden rounded-full shadow-md bg-background"
        onClick={() => setIsOpen(true)}
      >
        <List size={20} />
      </Button>

      {/* Overlay/Backdrop gelap saat sidebar terbuka di mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)} // Klik di luar sidebar untuk menutup
        />
      )}

      {/* Sidebar Panel dengan transisi slide in/out */}
      <aside 
        className={`
          w-[280px] border-r bg-background h-screen p-6 flex flex-col overflow-y-auto
          fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out
          md:sticky md:top-0
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Tombol Close (Hanya muncul di mobile di dalam sidebar) */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 md:hidden rounded-full"
          onClick={() => setIsOpen(false)}
        >
          <X size={20} />
        </Button>

        {/* Profile Info */}
        <div className="flex flex-col items-center mb-6 mt-8 md:mt-0">
          <Avatar className="w-24 h-24 mb-3">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>RM</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-1 mb-2">
            <h2 className="font-semibold text-lg">Reyhan Maulana</h2>
          </div>
          <Button variant="outline" className="rounded-full bg-yellow-100 text-yellow-700 border-yellow-300 hover:bg-yellow-200 h-7 text-xs px-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
            Hire Me
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 flex-1">
          <NavItem href="/" icon={<House />} label="Home" active={pathname === "/"} onClick={() => setIsOpen(false)} />
          <NavItem href="/about" icon={<User />} label="About" active={pathname === "/about"} onClick={() => setIsOpen(false)} />
          <NavItem href="/achievements" icon={<Medal />} label="Achievements" active={pathname === "/achievements"} onClick={() => setIsOpen(false)} />
          <NavItem href="/projects" icon={<Stack />} label="Projects" active={pathname === "/projects"} onClick={() => setIsOpen(false)} />
          <NavItem href="/contact" icon={<Envelope />} label="Contact" onClick={() => setIsOpen(false)} />
        </nav>

        {/* Footer */}
        <div className="mt-6 pt-6 border-t flex flex-col gap-3">
          <div className="text-center text-xs text-muted-foreground mt-2">
            <p>COPYRIGHT © 2026</p>
            <p>Reyhan Maulana.</p>
          </div>
        </div>
      </aside>
    </>
  );
}

// NavItem menerima properti onClick untuk menutup sidebar secara otomatis setelah navigasi terpilih
function NavItem({ 
  href, 
  icon, 
  label, 
  active = false, 
  onClick 
}: { 
  href: string, 
  icon: React.ReactNode, 
  label: string, 
  active?: boolean, 
  onClick?: () => void 
}) {
  return (
    <Link 
      href={href} 
      onClick={onClick} 
      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${active ? 'bg-muted font-medium text-primary' : 'text-muted-foreground hover:bg-muted/50 hover:text-primary'}`}
    >
      {icon}
      {label}
    </Link>
  );
}
