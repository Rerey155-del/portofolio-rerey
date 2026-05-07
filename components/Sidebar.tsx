// components/Sidebar.tsx
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Checks, House, User, Medal, Stack,
  ChatCircleDots, Laptop, Envelope,
  Link as LinkIcon, WarningCircle, Sun, Moon,
  Lightning, Heart
} from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[280px] border-r bg-background h-screen sticky top-0 p-6 flex flex-col overflow-y-auto hidden md:flex">
      {/* Profile Info */}
      <div className="flex flex-col items-center mb-6">
        <Avatar className="size-24 mb-3">
          <AvatarImage src="/avatar.jpeg" />
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
  );
}

function NavItem({ href, icon, label, active = false }: { href: string, icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <Link href={href} className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${active ? 'bg-muted font-medium text-primary' : 'text-muted-foreground hover:bg-muted/50 hover:text-primary'}`}>
      {icon}
      {label}
    </Link>
  );
}
