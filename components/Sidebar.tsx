// components/Sidebar.tsx
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Checks,
  House,
  User,
  Medal,
  Stack,
  List, X,
  ChatCircleDots,
  Laptop,
  Envelope,
  Link as LinkIcon,
  WarningCircle,
  Sun,
  Moon,
  Lightning,
  Heart,
} from "@phosphor-icons/react";

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger for mobile */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 fixed top-4 left-4 z-50"
        aria-label="Toggle menu"
      >
        <List size={24} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-50 inset-y-0 left-0 w-[280px] bg-background border-r p-6 flex flex-col overflow-y-auto transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex`}
      >
        {/* Close button for mobile */}
        <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-primary" aria-label="Close menu">
          <X size={24} />
        </button>
        {/* Profile Info */}
        <div className="flex flex-col items-center mb-6">
          <Avatar className="size-24 mb-3">
            <AvatarImage src="/avatar.jpeg" />
            <AvatarFallback>RM</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-1 mb-2">
            <h2 className="font-semibold text-lg">Reyhan Maulana</h2>
          </div>
          <Button
            variant="outline"
            className="rounded-full bg-yellow-100 text-yellow-700 border-yellow-300 hover:bg-yellow-200 h-7 text-xs px-3 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2" />
            Hire Me
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 flex-1">
          <NavItem href="/" icon={<House />} label="Home" active={pathname === "/"} />
          <NavItem href="/about" icon={<User />} label="About" active={pathname === "/about"} />
          <NavItem href="/projects" icon={<Stack />} label="Projects" active={pathname === "/projects"} />
          <NavItem href="/contact" icon={<Envelope />} label="Contact" />
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

function NavItem({
  href,
  icon,
  label,
  active = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
        active ? "bg-muted font-medium text-primary" : "text-muted-foreground hover:bg-muted/50 hover:text-primary"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}
