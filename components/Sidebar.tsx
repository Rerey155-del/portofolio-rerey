"use client";

import { useState, useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  House,
  User,
  Stack,
  Envelope,
  SidebarSimple,
  X,
  MagnifyingGlassPlus,
} from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ImageZoomModal } from "@/components/ImageZoomModal";

export function Sidebar() {
  const pathname = usePathname();
  // Default tampilan saat pertama kali dimuat atau setelah reload selalu tertutup (dikesampingkan ke kiri)
  const [isOpen, setIsOpen] = useState(false);
  const [isAvatarZoomed, setIsAvatarZoomed] = useState(false);

  // Shortcut keyboard (Ctrl+B / Cmd+B) dan tombol Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  // Deteksi swipe gesture untuk mengesampingkan sidebar ke kiri pada mode ponsel
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Geser ke kiri minimal sejauh 30px dan dominan horizontal
    if (deltaX < -30 && Math.abs(deltaX) > Math.abs(deltaY)) {
      setIsOpen(false);
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const handleNavClick = () => {
    // Pada ponsel, otomatis tutup drawer setelah navigasi dipilih
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Tombol Toggle Sidebar di pojok kiri atas (selalu ada untuk buka/tutup) */}
      <Button
        variant="outline"
        size="icon"
        className={`
          fixed top-4 left-4 z-50 rounded-xl shadow-md bg-background/90 backdrop-blur-md border border-border/80
          transition-all duration-300 hover:scale-105 hover:bg-accent hover:border-primary/40
        `}
        onClick={toggleSidebar}
        onTouchEnd={(e) => {
          e.preventDefault();
          toggleSidebar();
        }}
        title={isOpen ? "Sampingkan sidebar ke kiri (Ctrl+B)" : "Buka sidebar (Ctrl+B)"}
        aria-label={isOpen ? "Sampingkan sidebar ke kiri" : "Buka sidebar"}
      >
        <SidebarSimple size={20} weight="bold" />
      </Button>

      {/* Overlay/Backdrop gelap saat sidebar terbuka di ponsel */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-30 md:hidden cursor-pointer transition-opacity duration-300 animate-in fade-in"
          onClick={() => setIsOpen(false)}
          onTouchEnd={(e) => {
            e.preventDefault();
            setIsOpen(false);
          }}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Panel dengan inline style transform untuk jaminan kompatibilitas 100% di semua ponsel */}
      <aside
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        }}
        className={`
          w-[280px] shrink-0 border-r bg-background h-screen p-6 flex flex-col overflow-y-auto
          fixed inset-y-0 left-0 z-40
          transition-all duration-300 ease-in-out
          md:sticky md:top-0
          ${
            isOpen
              ? "opacity-100 visible pointer-events-auto md:ml-0 shadow-2xl md:shadow-none"
              : "opacity-0 invisible pointer-events-none md:-ml-[280px] shadow-none"
          }
        `}
      >
        {/* Tombol Close alternatif di pojok kanan atas sidebar */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all duration-200"
          onClick={() => setIsOpen(false)}
          onTouchEnd={(e) => {
            e.preventDefault();
            setIsOpen(false);
          }}
          title="Sampingkan sidebar ke kiri (Ctrl+B)"
          aria-label="Sampingkan sidebar ke kiri"
        >
          <X size={20} weight="bold" />
        </Button>

        {/* Profile Info */}
        <div className="flex flex-col items-center mb-6 mt-10 md:mt-8">
          <div
            onClick={() => setIsAvatarZoomed(true)}
            className="relative group cursor-pointer mb-3 rounded-full p-0.5 transition-all duration-300 hover:ring-4 hover:ring-primary/20"
            title="Klik untuk memperbesar foto"
          >
            <Avatar className="w-24 h-24 transition-transform duration-300 group-hover:scale-105">
              <AvatarImage src="/avatar.png" alt="Reyhan Maulana" />
              <AvatarFallback>RM</AvatarFallback>
            </Avatar>
            {/* Overlay hint icon saat hover */}
            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <MagnifyingGlassPlus size={24} className="text-white drop-shadow-md" weight="bold" />
            </div>
          </div>

          <div className="flex items-center gap-1 mb-2">
            <h2 className="font-semibold text-lg">Reyhan Maulana</h2>
          </div>
          <Button
            variant="outline"
            className="rounded-full bg-yellow-100 text-yellow-700 border-yellow-300 hover:bg-yellow-200 h-7 text-xs px-3 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
            Hire Me
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 flex-1">
          <NavItem
            href="/"
            icon={<House size={18} />}
            label="Home"
            active={pathname === "/"}
            onClick={handleNavClick}
          />
          <NavItem
            href="/about"
            icon={<User size={18} />}
            label="About"
            active={pathname === "/about"}
            onClick={handleNavClick}
          />
          <NavItem
            href="/projects"
            icon={<Stack size={18} />}
            label="Projects"
            active={pathname === "/projects" || pathname.startsWith("/projects/")}
            onClick={handleNavClick}
          />
          <NavItem
            href="/contact"
            icon={<Envelope size={18} />}
            label="Contact"
            active={pathname === "/contact"}
            onClick={handleNavClick}
          />
        </nav>

        {/* Footer */}
        <div className="mt-6 pt-6 border-t flex flex-col gap-3">
          <div className="text-center text-xs text-muted-foreground mt-2">
            <p>COPYRIGHT © 2026</p>
            <p>Reyhan Maulana.</p>
          </div>
        </div>
      </aside>

      {/* Modal Zoom Foto Profil */}
      <ImageZoomModal
        isOpen={isAvatarZoomed}
        onClose={() => setIsAvatarZoomed(false)}
        imageSrc="/avatar.png"
        altText="Foto Profil Reyhan Maulana"
        caption="Reyhan Maulana"
      />
    </>
  );
}

// NavItem menerima properti onClick untuk menutup drawer di ponsel
function NavItem({
  href,
  icon,
  label,
  active = false,
  onClick,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
        active
          ? "bg-muted font-medium text-primary"
          : "text-muted-foreground hover:bg-muted/50 hover:text-primary"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}
